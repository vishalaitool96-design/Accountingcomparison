import fs from 'fs';

const files = ['revenue.html', 'app/applet/lease_update.js', 'update.cjs'];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/₹/g, ''); 
    fs.writeFileSync(file, content);
    console.log(`Fixed ${file} by removing ₹`);
  }
}
