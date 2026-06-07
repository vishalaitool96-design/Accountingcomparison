const fs = require('fs');

const files = [
  'lease.html',
  'ppe.html',
  'financial-instruments.html',
  'revenue.html',
  'deferred-tax.html',
  'consolidation.html',
  'impairment.html',
  'esop.html',
  'cashflows.html'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    const html = fs.readFileSync(file, 'utf8');
    const lIndex = html.indexOf('SECTION L:');
    if (lIndex !== -1) {
      const theadIndex = html.indexOf('<thead', lIndex);
      const theadEnd = html.indexOf('</thead>', theadIndex);
      console.log(`\n--- ${file} ---`);
      if (theadIndex !== -1 && theadEnd !== -1) {
        let thead = html.slice(theadIndex, theadEnd+8);
        thead = thead.replace(/\s+/g, ' ');
        console.log(thead);
      } else {
        console.log("No thead found");
      }
    } else {
      console.log(`\n--- ${file} --- \nMissing Section L`);
    }
  }
});
