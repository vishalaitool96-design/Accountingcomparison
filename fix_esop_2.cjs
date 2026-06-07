const fs = require('fs');

let content = fs.readFileSync('esop.html', 'utf-8');

// Replace bg-red-50 text-red-800 with text-slate-600
content = content.replace(/class="p-3 bg-red-50 text-red-800"/g, 'class="p-3 text-slate-600"');
content = content.replace(/class="p-3 font-bold bg-amber-50 text-amber-800"/g, 'class="p-3 text-slate-600"');
content = content.replace(/<td class="p-3 font-semibold text-slate-800">/g, '<td class="p-3 font-bold">');


fs.writeFileSync('esop.html', content);
