(function () {
  let addTextureListener;
  const MARKER_FOLDER_NAME = 'emf';

  function isOptifineEntity() {
    return typeof Format !== 'undefined' && Format && Format.id && Format.id.includes('optifine');
  }

  Plugin.register('auto_fix_texture_path', {
    title: 'Auto Fix Texture Path',
    icon: 'auto_fix_high',
    author: 'Synth',
    description: 'Automatically clears Namespace, sets Folder from real file path and loads the texture into the model. OptiFine Entity format only.',
    version: '1.2.0',
    variant: 'both',

    onload() {
      addTextureListener = (data) => {
        if (!isOptifineEntity()) return;
        let texture = data && data.texture ? data.texture : data;
        if (texture) {
          if (fixTexturePath(texture)) {
            loadTextureToModel(texture);
          }
        }
      };
      Blockbench.on('add_texture', addTextureListener);

      if (isOptifineEntity() && typeof Texture !== 'undefined' && Texture.all) {
        Texture.all.forEach((t) => fixTexturePath(t));
        if (Texture.all.length > 0) {
          loadTextureToModel(Texture.all[Texture.all.length - 1]);
        }
      }
    },

    onunload() {
      Blockbench.removeListener('add_texture', addTextureListener);
    },
  });

  function fixTexturePath(texture) {
    if (!isOptifineEntity()) return false;
    if (!texture || !texture.path) return false;

    let path = texture.path.replace(/\\/g, '/');
    let parts = path.split('/');
    parts.pop();

    let markerIndex = parts.lastIndexOf(MARKER_FOLDER_NAME);
    if (markerIndex === -1) return false;

    let folderParts = parts.slice(markerIndex);
    let newFolder = folderParts.join('/') + '/';

    texture.namespace = '';
    texture.folder = newFolder;
    return true;
  }

  function loadTextureToModel(texture) {
    if (!texture) return;
    try {
      if (texture.select) texture.select();

      if (typeof Cube !== 'undefined' && Cube.all) {
        Cube.all.forEach((cube) => {
          if (!cube.faces) return;
          for (let f in cube.faces) {
            if (cube.faces[f]) {
              cube.faces[f].texture = texture.uuid;
            }
          }
        });
      }

      if (typeof Canvas !== 'undefined' && Canvas.updateView) {
        Canvas.updateView({ textures: true, elements: true });
      }
    } catch (e) {
      console.error('[AutoFixTexturePath] load failed', e);
    }
  }
})();
