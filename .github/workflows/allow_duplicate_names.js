(function () {
	const originalFunctions = {};

	function getTargetClasses() {
		return [
			typeof Group !== 'undefined' ? Group : null,
			typeof Cube !== 'undefined' ? Cube : null,
			typeof Mesh !== 'undefined' ? Mesh : null,
			typeof TextureMesh !== 'undefined' ? TextureMesh : null,
			typeof Locator !== 'undefined' ? Locator : null,
			typeof NullObject !== 'undefined' ? NullObject : null,
		].filter(cls => cls && cls.prototype && typeof cls.prototype.createUniqueName === 'function');
	}

	Plugin.register('allow_duplicate_names', {
		title: 'Allow Duplicate Names',
		author: 'synth',
		description: 'Lets elements (groups, cubes, meshes) share the same name instead of auto-numbering them.',
		about: 'Blockbench normally appends a number to a name if it\'s already taken (e.g. "root" becomes "root2"). This plugin disables that check, so you can name multiple elements the same thing.\n\n**Note:** duplicate names can break some animation/export pipelines that rely on unique names.',
		icon: 'text_fields',
		version: '1.0.0',
		variant: 'both',
		onload() {
			getTargetClasses().forEach(cls => {
				originalFunctions[cls.name] = cls.prototype.createUniqueName;
				cls.prototype.createUniqueName = function () {
					return this;
				};
			});
		},
		onunload() {
			getTargetClasses().forEach(cls => {
				if (originalFunctions[cls.name]) {
					cls.prototype.createUniqueName = originalFunctions[cls.name];
				}
			});
		},
	});
})();
