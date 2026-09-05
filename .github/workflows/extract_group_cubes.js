(function () {
	let extractCubesButton;
	let extractGroupsButton;

	// Recursively walks a group's descendants (any depth) and returns every
	// node for which `predicate` returns true.
	function collectDeep(group, predicate) {
		let result = [];
		group.children.forEach(child => {
			if (predicate(child)) {
				result.push(child);
			}
			if (child instanceof Group) {
				result = result.concat(collectDeep(child, predicate));
			}
		});
		return result;
	}

	function getSelectedTopGroups() {
		return Group.all.filter(g => g.selected);
	}

	// treatAsElements: true for cubes/meshes (safe to pass to Undo/Canvas as
	// "elements"), false for Group nodes (Undo/Canvas element-specific calls
	// don't understand Group objects and were silently failing).
	function runExtract(predicate, actionLabel, emptyMessage, treatAsElements) {
		let groups = getSelectedTopGroups();

		if (!groups.length) {
			Blockbench.showQuickMessage('Select a group first', 2000);
			return;
		}

		let toMove = [];
		groups.forEach(group => {
			let target = group.parent instanceof Group ? group.parent : undefined;
			collectDeep(group, predicate).forEach(node => {
				toMove.push({ node, target });
			});
		});

		if (!toMove.length) {
			Blockbench.showQuickMessage(emptyMessage, 2000);
			return;
		}

		let allNodes = toMove.map(entry => entry.node);

		if (treatAsElements) {
			Undo.initEdit({ outliner: true, elements: allNodes, selection: true });
		} else {
			Undo.initEdit({ outliner: true, selection: true });
		}

		toMove.forEach(entry => entry.node.addTo(entry.target));

		Undo.finishEdit(actionLabel);

		if (treatAsElements) {
			Canvas.updateView({ elements: allNodes, element_aspects: { transform: true } });
		}

		Blockbench.showQuickMessage(`Moved ${allNodes.length} item(s) out of group`, 2000);
	}

	Plugin.register('extract_group_cubes', {
		title: 'Extract from Group',
		author: 'synth',
		description: 'Adds two buttons: one moves all cubes out of the selected group(s), the other moves all subgroups out (even empty ones).',
		about: 'Select one or more groups in the outliner, then use either action from the Tools menu:\n\n- **Extract Cubes from Group**: moves every cube/mesh found anywhere inside the selected group(s), including nested subgroups, out to sit next to the group.\n- **Extract Groups from Group**: moves every subgroup found anywhere inside the selected group(s) out to sit next to the group, even if that subgroup is empty.\n\n**Note:** if a group has rotation, moved items may need repositioning since their transform is not automatically compensated.',
		icon: 'output',
		version: '2.0.1',
		variant: 'both',
		onload() {
			extractCubesButton = new Action('extract_cubes_from_group_action', {
				name: 'Extract Cubes from Group',
				description: 'Moves all cubes/meshes inside the selected group(s) out to the parent level',
				icon: 'output',
				click: function () {
					runExtract(
						child => !(child instanceof Group),
						'Extract cubes from group',
						'Selected group(s) have no cubes',
						true
					);
				}
			});

			extractGroupsButton = new Action('extract_groups_from_group_action', {
				name: 'Extract Groups from Group',
				description: 'Moves all subgroups inside the selected group(s) out to the parent level, even if empty',
				icon: 'account_tree',
				click: function () {
					runExtract(
						child => child instanceof Group,
						'Extract groups from group',
						'Selected group(s) have no subgroups',
						false
					);
				}
			});

			MenuBar.menus.tools.addAction(extractCubesButton);
			MenuBar.menus.tools.addAction(extractGroupsButton);
		},
		onunload() {
			extractCubesButton.delete();
			extractGroupsButton.delete();
		}
	});
})();
