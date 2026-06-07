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
    if (item.title === 'Home' && file === 'index.html') continue; // Might want Home on Home, let's keep it actually.
    
    // For active state
    if (file === item.file) {
      newNav += `    <a href="${item.file}" class="px-6 py-3 text-sm font-semibold border-b-4 border-indigo-600 bg-indigo-50 text-indigo-900 block whitespace-nowrap">${item.title}</a>\n`;
    } else {
      newNav += `    <a href="${item.file}" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap transition-colors">${item.title}</a>\n`;
    }
  }
  newNav += '</nav>';

  // Replacing existing nav
  if (content.includes('<nav class="navbar shrink-0">')) {
    // Has old nav
    content = content.replace(/<nav class="navbar shrink-0">[\s\S]*?<\/nav>/, newNav);
  } else if (content.includes('<nav class="bg-white border-b border-slate-200')) {
    // Has new nav but maybe incomplete
    content = content.replace(/<nav class="bg-white border-b border-slate-200[\s\S]*?<\/nav>/, newNav);
  }

  // Inject CSS for custom-scrollbar so it's hidden but scrollable, or just nice
  if (!content.includes('.custom-scrollbar::-webkit-scrollbar')) {
    const style = `
  <style>
    .custom-scrollbar::-webkit-scrollbar {
      height: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #f1f5f9; 
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #cbd5e1; 
      border-radius: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #94a3b8; 
    }
  </style>
`;
    content = content.replace('</head>', style + '</head>');
  }

  fs.writeFileSync(file, content);
  console.log('Updated nav for', file);
}
