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

const standardThead = `<thead class="bg-slate-100 text-slate-700">
              <tr>
                <th class="p-3 border-r border-slate-200 w-1/4">Analyst question</th>
                <th class="p-3 border-r border-slate-200 w-1/4">Concern</th>
                <th class="p-3 border-r border-slate-200 w-1/4">Answer</th>
                <th class="p-3 w-1/4">Evidence</th>
              </tr>
            </thead>`;

// Custom fix for consolidation rows:
let consHtml = fs.readFileSync('consolidation.html', 'utf8');

// Find SECTION L in consolidation
const lIdx = consHtml.indexOf('SECTION L: Analyst Concerns');
if (lIdx !== -1) {
  const tbodyIdx = consHtml.indexOf('<tbody', lIdx);
  const endTbody = consHtml.indexOf('</tbody>', tbodyIdx);
  let tbody = consHtml.slice(tbodyIdx, endTbody);
  
  // replace 5-column trs with 4-column trs
  // we will parse by removing the 4th and 5th td
  // But wait, the current consolidation columns are: Analyst question (td1), Answer (td2), Evidence (td3), Investor (td4), Sophisticated (td5)
  // We want to transform to: Analyst question, Concern (Empty/synthesized), Answer, Evidence
  tbody = tbody.replace(/<td class="p-3 font-semibold([^>]+)>([\s\S]*?)<\/td>\s*<td class="p-3">([\s\S]*?)<\/td>\s*<td class="p-3([^>]+)>([\s\S]*?)<\/td>\s*<td class="p-3([^>]+)>([\s\S]*?)<\/td>\s*<td class="p-3([^>]+)>([\s\S]*?)<\/td>/g, 
    (match, p1, q, ans, p3, ev, p4, inv, p5, soph) => {
      // synthesize a concern based on question
      let concern = 'General reporting concern.';
      if (q.includes('Debt')) concern = 'Fear of overleverage.';
      if (q.includes('Margin')) concern = 'Optical profitability drop.';
      if (q.includes('cash')) concern = 'Fear of restricted cash or trap.';
      return `<td class="p-3 font-bold text-slate-800">${q.trim()}</td>
                <td class="p-3 text-slate-600">${concern}</td>
                <td class="p-3 text-slate-800">${ans.trim()}</td>
                <td class="p-3 text-slate-600 font-mono text-xs">${ev.trim()}</td>`;
    });
    
  consHtml = consHtml.slice(0, tbodyIdx) + tbody + consHtml.slice(endTbody);
  fs.writeFileSync('consolidation.html', consHtml);
}

// Now replace ALL theads for Section L
for (const file of files) {
  if (fs.existsSync(file)) {
    let html = fs.readFileSync(file, 'utf8');
    const LIdx = html.indexOf('SECTION L: Analyst Concerns');
    if (LIdx !== -1) {
      const theadIdx = html.indexOf('<thead', LIdx);
      const endThead = html.indexOf('</thead>', theadIdx);
      if (theadIdx !== -1 && endThead !== -1) {
        // preserve spacing
        const existing = html.slice(theadIdx, endThead + 8);
        html = html.replace(existing, standardThead);
        fs.writeFileSync(file, html);
        console.log("Standardized thead for", file);
      }
    }
  }
}
