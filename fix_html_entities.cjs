const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/P\&L/g, 'P&amp;L');
  content = content.replace(/\& 360/g, '&amp; 360');
  content = content.replace(/\& Answers/g, '&amp; Answers');
  content = content.replace(/M\&A/g, 'M&amp;A');
  
  // also catch other unescaped ampersands followed by letters/spaces where appropriate:
  // let's do a simple replace for specific ones we saw
  fs.writeFileSync(file, content);
  console.log('Fixed', file);
}
