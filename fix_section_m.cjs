const fs = require('fs');

const sectionMPattern = `<!-- SECTION M & N: Investor Perception & Signals -->
        <!-- SECTION M: Investor Perception Analysis -->
        <section
          id="section-m"
          class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col"
        >
          <div
            class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200"
          >
            SECTION M: Investor Perception Analysis
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-sm text-left">
              <thead class="bg-slate-100 text-slate-700">
                <tr>
                  <th class="p-3 border-r border-slate-200 w-1/4">Investor Type</th>
                  <th class="p-3 border-r border-slate-200 w-1/4">What they see</th>
                  <th class="p-3 border-r border-slate-200 w-1/4">Likely reaction</th>
                  <th class="p-3 w-1/4">Sophisticated response</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr>
                  <td class="p-3 font-bold text-[#1a365d]">Retail</td>
                  <td class="p-3 text-red-600 font-medium">Debt exploded to 145 Cr.</td>
                  <td class="p-3">Panic sell; fear of bankruptcy or rate risk.</td>
                  <td class="p-3 text-slate-800">Strip out lease liabilities; traditional debt is 0.</td>
                </tr>
                <tr class="bg-slate-50">
                  <td class="p-3 font-bold text-[#1a365d]">Value</td>
                  <td class="p-3 text-red-600 font-medium">Net profit margin dipped.</td>
                  <td class="p-3">Assume business deteriorating.</td>
                  <td class="p-3 text-slate-800">Calculate pre-lease true cash margins.</td>
                </tr>
                <tr>
                  <td class="p-3 font-bold text-[#1a365d]">Growth</td>
                  <td class="p-3 text-green-600 font-medium">EBITDA margin jumped to 34%.</td>
                  <td class="p-3">Aggressively buy false profitability breakout.</td>
                  <td class="p-3 text-slate-800">Subtract actual rent paid to find normalized operating leverage.</td>
                </tr>
                <tr class="bg-slate-50">
                  <td class="p-3 font-bold text-[#1a365d]">Quant</td>
                  <td class="p-3 text-green-600 font-medium">CFO surge.</td>
                  <td class="p-3">Algorithmic buy based on cash generation.</td>
                  <td class="p-3 text-slate-800">Deduct financing lease outflows to find FCF.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>`;

let leaseHtml = fs.readFileSync('lease.html', 'utf8');
if (!leaseHtml.includes('SECTION M: Investor Perception Analysis')) {
  const lIndex = leaseHtml.indexOf('SECTION L: Analyst Concerns');
  if (lIndex !== -1) {
    const endSectionStr = '</section>';
    const lEnd = leaseHtml.indexOf(endSectionStr, lIndex);
    if (lEnd !== -1) {
       const insertPos = lEnd + endSectionStr.length;
       leaseHtml = leaseHtml.slice(0, insertPos) + '\n\n      ' + sectionMPattern + leaseHtml.slice(insertPos);
       fs.writeFileSync('lease.html', leaseHtml);
       console.log("Added Section M to lease.html");
    }
  }
}

const theadStandard = `<thead class="bg-slate-100 text-slate-700">
                <tr>
                  <th class="p-3 border-r border-slate-200 w-1/4">Investor Type</th>
                  <th class="p-3 border-r border-slate-200 w-1/4">What they see</th>
                  <th class="p-3 border-r border-slate-200 w-1/4">Likely reaction</th>
                  <th class="p-3 w-1/4">Sophisticated response</th>
                </tr>
              </thead>`;

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
    let html = fs.readFileSync(file, 'utf8');
    const mIndex = html.indexOf('SECTION M: Investor Perception');
    if (mIndex !== -1) {
      const theadIndex = html.indexOf('<thead', mIndex);
      const endThead = html.indexOf('</thead>', theadIndex);
      if (theadIndex !== -1 && endThead !== -1) {
        let existing = html.slice(theadIndex, endThead + 8);
        html = html.replace(existing, theadStandard);
        fs.writeFileSync(file, html);
        console.log("Standardized Section M thead in", file);
      }
    }
  }
});
