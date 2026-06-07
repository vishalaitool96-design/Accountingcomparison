import fs from 'fs';

const files = ['generate_lease_tables_1.cjs', 'generate_lease_tables_2.cjs', 'generate_lease_js.cjs'];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/₹/g, ''); // Remove the Rupee sign
    fs.writeFileSync(file, content);
    console.log(`Fixed ${file} by removing ₹`);
  }
}
