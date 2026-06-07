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
      navHtml += '      <a href="' + item.href + '" class="px-6 py-3 text-sm font-semibold border-b-4 border-blue-600 bg-blue-50 text-blue-900 block whitespace-nowrap">' + item.label + '</a>\n';
    } else {
      navHtml += '      <a href="' + item.href + '" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">' + item.label + '</a>\n';
    }
  }
  navHtml += '    </nav>';
  return navHtml;
}

const htmlFiles = fs.readdirSync('.').filter(function(f) { return f.endsWith('.html') && !f.endsWith('_old.html'); });

for (const file of htmlFiles) {
  if (file === 'cashflows.html') continue;
  
  let content = fs.readFileSync(file, 'utf8');
  
  const startIndex = content.indexOf('<nav class="bg-white border-b border-slate-200 flex shrink-0 overflow-x-auto">');
  const endIndex = content.indexOf('</nav>', startIndex);
  if (startIndex !== -1 && endIndex !== -1) {
     content = content.substring(0, startIndex) + generateNav(file) + content.substring(endIndex + 6);
  } else {
    console.log("Could not find <nav> block in " + file);
  }
  
  if (file === 'index.html') {
    const cashFlowRegex = new RegExp('<div class="bg-white rounded shadow-sm border border-slate-200 p-6 flex flex-col h-full hover:shadow-md transition-shadow">\\s*<h3 class="text-lg font-bold text-\\[#1a365d\\] mb-2 uppercase tracking-wide">09\\. Statement of Cash Flows.*?</div\\s*>.+?</div\\s*>', 'gs');
    
    // Instead of regex lets do string manipulation for index.html cashflows removal
    const cfStart = content.indexOf('<h3 class="text-lg font-bold text-[#1a365d] mb-2 uppercase tracking-wide">09. Statement of Cash Flows</h3>');
    if (cfStart !== -1) {
       let blockStart = content.lastIndexOf('<div class="bg-white rounded shadow-sm border border-slate-200 p-6', cfStart);
       if (blockStart !== -1) {
          // find 2 closing divs after cfStart. Let's just find the closing tag corresponding to this div.
          let nextDiv = content.indexOf('</div>', cfStart);
          let secondNextDiv = content.indexOf('</div>', nextDiv + 6);
          content = content.substring(0, blockStart) + content.substring(secondNextDiv + 6); // remove completely
       }
    }
  }
  
  fs.writeFileSync(file, content);
  console.log("Updated " + file);
}
