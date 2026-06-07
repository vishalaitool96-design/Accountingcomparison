const fs = require('fs');

const files = [
  'financial-instruments.html',
  'deferred-tax.html',
  'consolidation.html',
  'impairment.html',
  'esop.html',
  'lease.html',
  'ppe.html',
  'revenue.html',
  'cashflows.html'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    
    // Remove fixed widths from the thead tags which we added in update_section_a.cjs
    content = content.replace(/w-\[12%\]/g, 'w-[16%]'); // Actually let's just strip them or use w-1/6
    content = content.replace(/w-\[18%\]/g, 'w-[16%]');
    content = content.replace(/w-\[17%\]/g, 'w-[16%]');
    
    // Convert table font size to text-sm from text-xs
    content = content.replace(/<table class="w-full text-xs text-left min-w-\[1200px\]">/g, '<table class="w-full text-sm text-left">');
    
    // Also remove any min-w-[1200px] leftover
    content = content.replace(/min-w-\[1200px\]/g, '');

    // Write back
    fs.writeFileSync(file, content);
  }
}
console.log('Tables updated to be full width without fixed min-widths.');
