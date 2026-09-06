(function () {
  let addTextureListener;

  const MARKER_FOLDER_NAME = 'emf';

  Plugin.register('auto_fix_texture_path', {
    title: 'Auto Fix Texture Path',
    icon: 'auto_fix_high',
    author: 'Synth',
    description:
      "Automatically clears the Namespace field, sets the Folder field based on the texture's real file path, reloads the texture, and assigns it to the first material with no texture. Only works for Optifine Entity models.",
    version: '1.0.0',
    variant: 'both',

    onload() {
      addTextureListener = (data) => {
        let texture = data && data.texture ? data.texture : data;
        if (texture) fixTexturePath(texture);
      };
      Blockbench.on('add_texture', addTextureListener);

      if (typeof Texture !== 'undefined' && Texture.all) {
        Texture.all.forEach(fixTexturePath);
      }
    },

    onunload() {
      Blockbench.removeListener('add_texture', addTextureListener);
    },
  });

  function fixTexturePath(texture) {
    if (!texture || !texture.path) return;

    if (!Blockbench.format || Blockbench.format.id !== 'optifine_entity') return;

    let path = texture.path.replace(/\\/g, '/');
    let parts = path.split('/');
    parts.pop();

    let markerIndex = parts.lastIndexOf(MARKER_FOLDER_NAME);
    if (markerIndex === -1) return;

    let folderParts = parts.slice(markerIndex);
    let newFolder = folderParts.join('/') + '/';

    texture.namespace = '';
    texture.folder = newFolder;

    if (texture.reload) texture.reload();

    applyTextureToModel(texture);
  }

  function applyTextureToModel(texture) {
    let model = Blockbench.model;
    if (!model || !model.materials || model.materials.length === 0) return;

    let material = model.materials.find(m => !m.texture);
    if (!material) return;

    if (material.setTexture) {
      material.setTexture(texture);
    } else {
      material.texture = texture;
    }
  }
})();
