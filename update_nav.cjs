const fs = require('fs');

const navItems = [
  { href: 'index.html', label: 'Home' },
  { href: 'lease.html', label: 'Lease' },
  { href: 'ppe.html', label: 'PPE' },
  { href: 'financial-instruments.html', label: 'Financial Instruments' },
  { href: 'revenue.html', label: 'Revenue' },
  { href: 'deferred-tax.html', label: 'Deferred Tax' },
  { href: 'consolidation.html', label: 'Consolidation' },
  { href: 'impairment.html', label: 'Impairment' },
  { href: 'esop.html', label: 'ESOP' }
];

function generateNav(currentFile) {
  let navHtml = '    <nav class="bg-white border-b border-slate-200 flex shrink-0 overflow-x-auto">\n';
  for (const item of navItems) {
    if (item.href === currentFile) {
      navHtml += \`      <a href="\${item.href}" class="px-6 py-3 text-sm font-semibold border-b-4 border-blue-600 bg-blue-50 text-blue-900 block whitespace-nowrap">\${item.label}</a>\n\`;
    } else {
      navHtml += \`      <a href="\${item.href}" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">\${item.label}</a>\n\`;
    }
  }
  navHtml += '    </nav>';
  return navHtml;
}

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html') && !f.endsWith('_old.html'));

for (const file of htmlFiles) {
  if (file === 'cashflows.html') continue; // We don't update cashflows, we should probably delete it or leave it as orphan.
  
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace the <nav> block
  const navRegex = /<nav class="bg-white border-b border-slate-200 flex shrink-0 overflow-x-auto">[\s\S]*?<\/nav>/;
  if (navRegex.test(content)) {
    content = content.replace(navRegex, generateNav(file));
  } else {
    // Some files might have slightly different <nav> exact match
    console.log(\`Could not find <nav> block in \${file}\`);
  }
  
  // If it's index.html, remove Cash Flows card
  if (file === 'index.html') {
    const cashFlowRegex = /<div class="bg-white rounded shadow-sm border border-slate-200 p-6 flex flex-col h-full hover:shadow-md transition-shadow">\s*<h3 class="text-lg font-bold text-\[#1a365d\] mb-2 uppercase tracking-wide">09\. Statement of Cash Flows[\s\S]*?<\/div>\s*<\/div>/;
    if (cashFlowRegex.test(content)) {
       content = content.replace(cashFlowRegex, '</div>');
    }
  }
  
  fs.writeFileSync(file, content);
  console.log(\`Updated \${file}\`);
}
