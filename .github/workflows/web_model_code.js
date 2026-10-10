let openModelCodeAction;

Plugin.register('web_model_code', {
    title: 'Web Model Code',
    author: 'Synth',
    description: 'Shows the current model output as text in a Blockbench window, without saving a file.',
    icon: 'code',
    version: '1.1.0',
    variant: 'both',
    min_version: '4.0.0',
    onload() {
        openModelCodeAction = new Action('open_model_code_in_browser', {
            name: 'View Model Code',
            description: 'Show the current model output as text',
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
                    showModelCode(modelCode, modelName, formatName);
                } catch (error) {
                    console.error('[Web Model Code]', error);
                    Blockbench.showMessageBox({
                        title: 'Model code could not be opened',
                        message: error && error.message ? error.message : String(error),
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
        if (openModelCodeAction) {
            openModelCodeAction.delete();
            openModelCodeAction = undefined;
        }
    },
});

function showModelCode(modelCode, modelName, formatName) {
    const title = `${modelName} — ${formatName}`;
    if (Blockbench.isWeb) {
        openMobileCodePage(modelCode, title);
        return;
    }
    let textarea;
    let copyButton;
    let status;

    const dialog = new Dialog('web_model_code_viewer', {
        title: '',
        width: Math.max(280, Math.min(700, window.innerWidth - 24)),
        buttons: [],
        onBuild(dialogElement) {
            const content = dialogElement.querySelector('.dialog_content');
            const nativeHandle = dialogElement.querySelector('.dialog_handle');
            const nativeClose = dialogElement.querySelector('.dialog_close_button');
            if (nativeHandle) nativeHandle.remove();
            if (nativeClose) nativeClose.remove();
            content.style.padding = '12px';
            content.style.boxSizing = 'border-box';
            content.style.maxWidth = '100vw';

            const header = document.createElement('div');
            header.style.cssText = 'display:flex;align-items:center;gap:8px;margin:0 0 10px;min-width:0;';

            const heading = document.createElement('div');
            heading.textContent = title;
            heading.style.cssText = 'font-weight:600;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;';

            const closeButton = document.createElement('button');
            closeButton.type = 'button';
            closeButton.textContent = 'Close';
            closeButton.style.cssText = 'margin-left:auto;flex:none;';
            closeButton.addEventListener('click', () => dialog.hide());
            header.append(heading, closeButton);

            textarea = document.createElement('textarea');
            textarea.value = String(modelCode ?? '');
            textarea.readOnly = true;
            textarea.wrap = 'soft';
            textarea.setAttribute('aria-label', 'Compiled model code');
            textarea.style.cssText = [
                'box-sizing:border-box',
                'display:block',
                'width:100%',
                'height:min(55vh,480px)',
                'max-height:55vh',
                'min-height:160px',
                'max-width:100%',
                'resize:vertical',
                'overflow:auto',
                'font:12px/1.5 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace',
                'white-space:pre-wrap',
                'overflow-wrap:anywhere',
                'word-break:break-word',
            ].join(';');

            const footer = document.createElement('div');
            footer.style.cssText = 'display:flex;align-items:center;gap:10px;margin-top:10px;';

            copyButton = document.createElement('button');
            copyButton.type = 'button';
            copyButton.textContent = 'Copy code';
            copyButton.addEventListener('click', copyModelCode);

            status = document.createElement('span');
            status.setAttribute('role', 'status');

            footer.append(copyButton, status);
            content.append(header, textarea, footer);
        },
    });

    dialog.show();

    async function copyModelCode() {
        try {
            if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
                await navigator.clipboard.writeText(textarea.value);
            } else {
                textarea.focus();
                textarea.select();
                if (!document.execCommand('copy')) {
                    throw new Error('Clipboard access is unavailable. Select and copy the text manually.');
                }
            }
            copyButton.textContent = 'Copied!';
            status.textContent = '';
        } catch (error) {
            status.textContent = error && error.message ? error.message : 'Could not copy code.';
        }
        setTimeout(() => {
            if (copyButton) copyButton.textContent = 'Copy code';
        }, 1500);
    }
}


function openMobileCodePage(modelCode, title) {
    const escapeHtml = value => String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    const safeTitle = escapeHtml(title);
    const safeCode = escapeHtml(modelCode);
    const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${safeTitle}</title>
<style>
:root{color-scheme:dark;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}
body{margin:0;background:#15171b;color:#e7e9ee}
header{position:sticky;top:0;display:flex;align-items:center;gap:12px;padding:12px;background:#20242b;border-bottom:1px solid #343a45;font-family:system-ui,sans-serif}
h1{margin:0;font-size:15px;font-weight:650;overflow-wrap:anywhere}
button{margin-left:auto;flex:none;border:0;border-radius:6px;padding:8px 11px;background:#4d8df7;color:white;font-weight:600}
pre{margin:0;padding:16px;white-space:pre-wrap;overflow-wrap:anywhere;font-size:13px;line-height:1.55}
</style>
</head>
<body>
<header><h1>${safeTitle}</h1><button id="copy" type="button">Copy code</button></header>
<pre id="code">${safeCode}</pre>
<script>
document.getElementById('copy').addEventListener('click',async(event)=>{
 const button=event.currentTarget;
 try{await navigator.clipboard.writeText(document.getElementById('code').textContent);button.textContent='Copied!';}
 catch(error){button.textContent='Copy unavailable';}
 setTimeout(()=>button.textContent='Copy code',1500);
});
</script>
</body>
</html>`;

    const url = URL.createObjectURL(new Blob([html], { type: 'text/html' }));
    location.href = url;
    setTimeout(() => URL.revokeObjectURL(url), 120000);
}




