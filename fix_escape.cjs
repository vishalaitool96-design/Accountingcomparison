const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
for (const file of files) {
  let text = fs.readFileSync(file, 'utf-8');
  if (text.includes('P&L;')) {
      text = text.replace(/P&L;/g, 'P&amp;L;');
  }
  if (text.includes('P&L<')) {
      text = text.replace(/P&L</g, 'P&amp;L<');
  }
  if (text.includes('P&L')) {
      text = text.replace(/P&L/g, 'P&amp;L');
  }
  text = text.replace(/&amp;amp;/g, '&amp;'); // just in case
  fs.writeFileSync(file, text);
}
