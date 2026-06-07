const fs = require('fs');
let text = fs.readFileSync('financial-instruments.html', 'utf-8');
text = text.replace(/flex-col h-full/g, 'flex-col');
text = text.replace(/overflow-x-auto flex-1/g, 'overflow-x-auto');
fs.writeFileSync('financial-instruments.html', text);
