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
    
    // Replace table classes starting with <table class="w-full text-xs text-left... or text-sm...
    content = content.replace(/<table\s+class="w-full\s+text-(?:xs|sm)\s+text-left[^>]*">/g, '<table class="w-full text-sm text-left">');

    fs.writeFileSync(file, content);
  }
}
console.log('Tables fixed.');
