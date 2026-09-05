
let openModelCodeAction;

Plugin.register('web_model_code', {
	title: 'Web Model Code',
	author: 'Synth',
	description: 'Shows the current model in a browser page as code, without saving a file.',
	icon: 'code',
	version: '1.0',
	variant: 'both',
	min_version: '4.0.0',

	onload() {
		openModelCodeAction = new Action('open_model_code_in_browser', {
			name: 'Save Model',
			description: 'Open the current model output as text in a browser page',
			icon: 'code',
			condition: () => Format && Format.codec && typeof Format.codec.compile === 'function',
			click() {
				try {
					const codec = Format.codec;
					const compiled = codec.compile({});
					const modelCode = typeof compiled === 'string'
						? compiled
						: JSON.stringify(compiled, null, '\t');
					const formatName = codec.name || Format.name || 'Model';
					const modelName = (Project && Project.name) || 'Untitled';
					openCodePage(modelCode, modelName, formatName);
				} catch (error) {
					console.error('[Web Model Code]', error);
					Blockbench.showMessageBox({
						title: 'Model code could not be opened',
						message: error.message || String(error),
						icon: 'error',
					});
				}
			},
		});

		const fileMenu = MenuBar.menus.file;
		const saveModelIndex = fileMenu.structure.findIndex(item =>
			item === 'export_over' || (item && item.id === 'export_over')
		);
		fileMenu.addAction(openModelCodeAction, saveModelIndex >= 0 ? saveModelIndex + 1 : -1);
	},

	onunload() {
		if (openModelCodeAction) openModelCodeAction.delete();
	},
});
function openCodePage(modelCode, modelName, formatName) {

const escapedCode = String(modelCode)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const safeTitle = String(`${modelName} — ${formatName}`)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

	const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${safeTitle}</title>

<style>
:root{
	color-scheme:dark;
	font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
}
body{
	margin:0;
	background:#15171b;
	color:#e7e9ee;
}
header{
	position:sticky;
	top:0;
	display:flex;
	align-items:center;
	gap:12px;
	padding:12px 18px;
	background:#20242b;
	border-bottom:1px solid #343a45;
	font-family:system-ui,sans-serif;
}
h1{
	margin:0;
	font-size:15px;
	font-weight:650;
}
span{
	color:#aeb7c5;
	font-size:13px;
}
button{
	margin-left:auto;
	border:0;
	border-radius:6px;
	padding:7px 11px;
	background:#4d8df7;
	color:white;
	cursor:pointer;
	font-weight:600;
}
pre{
	margin:0;
	padding:20px;
	white-space:pre-wrap;
	overflow-wrap:anywhere;
	font-size:13px;
	line-height:1.55;
}
</style>

</head>

<body>

<header>

<div>
<h1>${safeTitle}</h1>
</div>

<button id="copy">Copy code</button>

</header>

<pre id="code">${escapedCode}</pre>

<script>

const copy=document.getElementById("copy");

copy.onclick=async()=>{

	await navigator.clipboard.writeText(
		document.getElementById("code").textContent
	);

	copy.textContent="Copied!";

	setTimeout(()=>{
		copy.textContent="Copy code";
	},1500);

};

document.getElementById("back").onclick=()=>{

	history.back();

};

</script>

</body>
</html>`;

	const blob = new Blob([html], {
		type: "text/html"
	});

	const url = URL.createObjectURL(blob);

	location.href = url;

	setTimeout(()=>{
		URL.revokeObjectURL(url);
	},30000);

}
