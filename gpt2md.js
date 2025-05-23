const TurndownService = require('turndown');
const tables = require('turndown-plugin-gfm').tables;
const ts = new TurndownService({
    'hr': '___________',
    'preformattedCode': true,
    'headingStyle': 'setext',
    'codeBlockStyle': 'fenced'
 });
ts.use(tables);

// Clone to not modify the actual `document.body` in the code that follows
const body = document.body.cloneNode(true);

// Remove code box headers
body.querySelectorAll('pre .text-xs').forEach(n => n.parentNode?.removeChild(n));

// Remove prompt/response numbers
body.querySelectorAll('div .text-xs.gap-1').forEach(n => n.parentNode?.removeChild(n));

// Remove footer
body.querySelector('.absolute.bottom-0').remove()

// properly format code blocks
body.querySelectorAll('.text-message pre').forEach((n) => {
  n.innerHTML = n.querySelector('code').outerHTML;
});

// Iterate through main text containers and create text to export
let text = `# ${document.title}\n\n`;
const messages = body.querySelectorAll('.text-message');
if (messages.length > 0) {
    const n = messages[messages.length - 1];
    const prose = n.querySelector('.prose');
    if (prose) {
        text += ts.turndown(prose.innerHTML) + "\n\n";
    } else {
        text += n.querySelector('div').innerText + "\n\n";
    }
}


// Copy to clipboard
if (navigator && navigator.clipboard) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Last message copied to clipboard!');
  }).catch((err) => {
    alert('Failed to copy to clipboard: ' + err);
  });
} else {
  alert('Clipboard API not available.');
}
