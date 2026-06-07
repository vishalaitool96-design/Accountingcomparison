const fs = require('fs');

const sectionNTemplate = `<!-- SECTION N: Reporting Signals Decoder -->
        <section
          id="section-n"
          class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col"
        >
          <div
            class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200"
          >
            SECTION N: Reporting Signals Decoder
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-xs xl:text-sm text-left">
              <thead class="bg-slate-100 text-slate-700">
                <tr>
                  <th class="p-3 border-r border-slate-200 w-1/4">Management Action</th>
                  <th class="p-3 border-r border-slate-200 w-[15%]">Signal</th>
                  <th class="p-3 border-r border-slate-200 w-[35%]">What It Really Means</th>
                  <th class="p-3 w-1/4">Your Move</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr>
                  <td class="p-3 font-medium">Highlighting "Pre-Ind AS 116 EBITDA"</td>
                  <td class="p-3 text-emerald-600 font-semibold">Transparency</td>
                  <td class="p-3 text-slate-700">Management is trying to provide comparable underlying performance, rather than hiding behind the standard's artificial boost.</td>
                  <td class="p-3 text-slate-600"><span class="text-emerald-500 mr-1">🟢</span><b>Green flag</b> - Trust the adjusted metric.</td>
                </tr>
                <tr class="bg-slate-50">
                  <td class="p-3 font-medium">Bragging about sudden CFO growth without mentioning leases</td>
                  <td class="p-3 text-red-600 font-semibold">Optics</td>
                  <td class="p-3 text-slate-700">Attempting to pass off a standard-driven geography shift (CFO to CFF) as operational improvement.</td>
                  <td class="p-3 text-slate-600"><span class="text-amber-500 mr-1">🟡</span><b>Yellow flag</b> - Demand FCF calculations.</td>
                </tr>
                <tr>
                  <td class="p-3 font-medium">Refocusing debt covenants to exclude lease liabilities</td>
                  <td class="p-3 text-emerald-600 font-semibold">Pragmatic</td>
                  <td class="p-3 text-slate-700">Ensuring operational covenants aren't triggered by accounting changes. Standard corporate treasury practice.</td>
                  <td class="p-3 text-slate-600"><span class="text-emerald-500 mr-1">🟢</span><b>Green flag</b> - Focus on core debt.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>`;

let leaseHtml = fs.readFileSync('lease.html', 'utf8');
if (!leaseHtml.includes('SECTION N: Reporting Signals Decoder')) {
  const mIndex = leaseHtml.indexOf('SECTION M: Investor Perception Analysis');
  if (mIndex !== -1) {
    const endSectionStr = '</section>';
    const mEnd = leaseHtml.indexOf(endSectionStr, mIndex);
    if (mEnd !== -1) {
       const insertPos = mEnd + endSectionStr.length;
       leaseHtml = leaseHtml.slice(0, insertPos) + '\n\n      ' + sectionNTemplate + leaseHtml.slice(insertPos);
       fs.writeFileSync('lease.html', leaseHtml);
       console.log("Added Section N to lease.html");
    }
  }
}

const theadStandard = `<thead class="bg-slate-100 text-slate-700">
                <tr>
                  <th class="p-3 border-r border-slate-200">Management Action</th>
                  <th class="p-3 border-r border-slate-200">Signal</th>
                  <th class="p-3 border-r border-slate-200">What It Really Means</th>
                  <th class="p-3">Your Move</th>
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
    const nIndex = html.indexOf('SECTION N: Reporting Signals');
    if (nIndex !== -1) {
      const theadIndex = html.indexOf('<thead', nIndex);
      const endThead = html.indexOf('</thead>', theadIndex);
      if (theadIndex !== -1 && endThead !== -1) {
        let existing = html.slice(theadIndex, endThead + 8);
        html = html.replace(existing, theadStandard);
        fs.writeFileSync(file, html);
        console.log("Standardized Section N thead in", file);
      }
    }
  }
});
