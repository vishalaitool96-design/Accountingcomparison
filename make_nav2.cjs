const fs = require('fs');

const files = [
  { file: 'index.html', title: 'Home' },
  { file: 'lease.html', title: 'Lease' },
  { file: 'ppe.html', title: 'PPE' },
  { file: 'financial-instruments.html', title: 'Financial Instruments' },
  { file: 'revenue.html', title: 'Revenue' },
  { file: 'deferred-tax.html', title: 'Deferred Tax' },
  { file: 'consolidation.html', title: 'Consolidation' },
  { file: 'impairment.html', title: 'Impairment' },
  { file: 'esop.html', title: 'ESOP' },
  { file: 'cashflows.html', title: 'Cash Flows' }
];

for (const { file, title } of files) {
  if (!fs.existsSync(file)) continue;

  let content = fs.readFileSync(file, 'utf8');

  // Build new nav
  let newNav = '<nav class="bg-white border-b border-slate-200 flex shrink-0 overflow-x-auto custom-scrollbar">\n';
  for (const item of files) {
    // For active state
    if (file === item.file) {
      newNav += `    <a href="${item.file}" class="px-6 py-3 text-sm font-semibold border-b-4 border-indigo-600 bg-indigo-50 text-indigo-900 block whitespace-nowrap">${item.title}</a>\n`;
    } else {
      newNav += `    <a href="${item.file}" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap transition-colors">${item.title}</a>\n`;
    }
  }
  newNav += '</nav>';

  // Replacing existing nav
  // Be careful with new line or multiple calls
  content = content.replace(/<nav class="bg-white border-b border-slate-200 flex shrink-0.*<\/nav>/, newNav);
  
  if (!content.includes(newNav)) {
      content = content.replace(/<nav class="bg-white border-b border-slate-200[\s\S]*?<\/nav>/, newNav);
  }

  fs.writeFileSync(file, content);
  console.log('Updated nav for', file);
}
