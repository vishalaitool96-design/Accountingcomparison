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
  let content = fs.readFileSync(file, 'utf8');

  // We need to find SECTION A body
  // It's after `<tbody class="divide-y divide-slate-200 text-slate-800">` and ends at `</tbody>`
  // that appears right after `SECTION A: Core Technical Comparison Table`.
  
  const sectionAMatch = content.match(/<section[^>]*id="section-a"[^>]*>[\s\S]*?<tbody[^>]*>([\s\S]*?)<\/tbody>/);
  if (sectionAMatch) {
    let tbodyContent = sectionAMatch[1];
    
    // Replace all <td ...> with standard <td class="p-3 border-r border-slate-100 align-top">
    // Wait, the last TD shouldn't have border-r and should have a slightly different bg
    
    // We can parse TRs
    let newTbodyContent = '';
    const trRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
    let trMatch;
    
    while ((trMatch = trRegex.exec(tbodyContent)) !== null) {
      let trInner = trMatch[1];
      const tdRegex = /<td[^>]*>([\s\S]*?)<\/td>/g;
      
      let tdMatch;
      let tds = [];
      while ((tdMatch = tdRegex.exec(trInner)) !== null) {
        tds.push(tdMatch[1].trim());
      }
      
      if (tds.length === 6) {
        const trHtml = `
              <tr class="hover:bg-slate-50 transition-colors group">
                <td class="p-3 font-bold text-[#1a365d] align-top bg-slate-50/50 group-hover:bg-transparent border-r border-slate-100">${tds[0]}</td>
                <td class="p-3 align-top border-r border-slate-100">${tds[1]}</td>
                <td class="p-3 align-top border-r border-slate-100">${tds[2]}</td>
                <td class="p-3 align-top border-r border-slate-100">${tds[3]}</td>
                <td class="p-3 align-top border-r border-slate-100">${tds[4]}</td>
                <td class="p-3 align-top font-medium text-blue-900 bg-blue-50/30 group-hover:bg-blue-50/60">${tds[5]}</td>
              </tr>`;
        newTbodyContent += trHtml;
      } else {
        // If it doesn't have 6 columns (e.g. spanned rows?), just copy original
        newTbodyContent += trMatch[0] + '\n';
      }
    }
    
    if (newTbodyContent !== '') {
      content = content.replace(sectionAMatch[1], newTbodyContent + '\n            ');
      fs.writeFileSync(file, content);
      console.log(`Updated td styles in ${file}`);
    }
  }
}
