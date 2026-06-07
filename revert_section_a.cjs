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

  // Reverting section A <thead>
  const sectionAMatch = content.match(/<section[^>]*id="section-a"[^>]*>([\s\S]*?)<\/tbody>/);
  if (sectionAMatch) {
    let sectionHtml = sectionAMatch[1];
    
    // Replace the thead
    const theadRegex = /<thead[^>]*>([\s\S]*?)<\/thead>/;
    const theadMatch = sectionHtml.match(theadRegex);
    if (theadMatch) {
       const trMatch = theadMatch[1].match(/<tr[^>]*>([\s\S]*?)<\/tr>/);
       if (trMatch) {
           const ths = [];
           const thRegex = /<th[^>]*>([\s\S]*?)<\/th>/g;
           let th;
           while ((th = thRegex.exec(trMatch[1])) !== null) {
               ths.push(th[1].trim());
           }
           
           if (ths.length > 0) {
               const newThead = `
            <thead class="bg-slate-100 text-slate-700">
              <tr>
                <th class="p-3 border-r border-slate-200 w-[12%]">${ths[0] || 'Parameter'}</th>
                <th class="p-3 border-r border-slate-200 w-[18%]">${ths[1] || 'AS (Old Indian GAAP)'}</th>
                <th class="p-3 border-r border-slate-200 w-[17%]">${ths[2] || 'Ind AS'}</th>
                <th class="p-3 border-r border-slate-200 w-[17%]">${ths[3] || 'IFRS'}</th>
                <th class="p-3 border-r border-slate-200 w-[18%]">${ths[4] || 'US GAAP'}</th>
                <th class="p-3 w-[18%]">${ths[5] || 'Logic Shift'}</th>
              </tr>
            </thead>`;
               sectionHtml = sectionHtml.replace(theadMatch[0], newThead);
           }
       }
    }
    
    // Replace the tbody rows
    const tbodyRegex = /<tbody[^>]*>([\s\S]*)$/;
    const tbodyMatch = sectionHtml.match(tbodyRegex);
    if (tbodyMatch) {
       let tbodyContent = tbodyMatch[1];
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
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 border-r border-slate-200 align-top">${tds[0]}</td>
                <td class="p-3 border-r border-slate-200 align-top">${tds[1]}</td>
                <td class="p-3 border-r border-slate-200 align-top">${tds[2]}</td>
                <td class="p-3 border-r border-slate-200 align-top">${tds[3]}</td>
                <td class="p-3 border-r border-slate-200 align-top">${tds[4]}</td>
                <td class="p-3 align-top">${tds[5]}</td>
              </tr>`;
               newTbodyContent += trHtml;
           } else {
               newTbodyContent += trMatch[0] + '\\n';
           }
       }
       sectionHtml = sectionHtml.replace(tbodyMatch[1], newTbodyContent + '\\n            ');
    }
    
    // Replace <tbody class="..."> with the simpler one from revenue.html
    sectionHtml = sectionHtml.replace(/<tbody class="divide-y divide-slate-200 text-slate-800">/, '<tbody class="divide-y divide-slate-200">');
    
    content = content.replace(sectionAMatch[1], sectionHtml);
    fs.writeFileSync(file, content);
    console.log('Reverted styles for ' + file);
  }
}
