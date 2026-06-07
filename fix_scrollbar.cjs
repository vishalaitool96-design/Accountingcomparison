const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\.custom-scrollbar::-webkit-scrollbar\s*\{\s*height\s*:\s*4px\s*;/g, '.custom-scrollbar::-webkit-scrollbar {\n      height: 10px;');
  content = content.replace(/height: 4px;/g, 'height: 10px;');
  fs.writeFileSync(file, content);
}
console.log('done');
