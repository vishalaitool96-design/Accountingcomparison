const fs = require('fs');

const standardTemplate = (rows) => `<!-- SECTION P: Red Flags vs Green Flags (Visual Indicator Matrix) -->
      <section
        id="section-p"
        class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col"
      >
        <div
          class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200"
        >
          SECTION P: Red Flags vs Green Flags (Visual Indicator Matrix)
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-100 text-slate-700">
              <tr>
                <th class="p-3 border-r border-slate-200 w-1/2">Scenario</th>
                <th class="p-3 border-r border-slate-200 text-center w-24">Flag</th>
                <th class="p-3">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
${rows}
            </tbody>
          </table>
        </div>
      </section>`;

const row = (scenario, flag, action) => {
  let bg = flag === 'RED' ? 'bg-[#fee]' : 'bg-[#efe]';
  let fontCls = flag === 'RED' ? 'text-red-500' : 'text-green-500';
  let bgIcon = flag === 'RED' ? '🔴' : '🟢';
  let actionCls = flag === 'RED' ? 'text-red-900' : 'text-green-900';
  let tdColor = flag === 'RED' ? 'text-red-700' : 'text-green-700';
  return `              <tr class="${bg}">
                <td class="p-3 font-medium">${scenario}</td>
                <td class="p-3 text-center font-bold ${tdColor} uppercase tracking-widest">
                  <span class="${fontCls} mr-1">${bgIcon}</span>${flag}
                </td>
                <td class="p-3 ${actionCls}">${action}</td>
              </tr>`;
};

let esRows = row("ESOP expense systematically ignored in management 'Adjusted EBITDA'", "RED", "Do not ignore it; treat recurring grants as cash compensation in valuation models.") + '\n' +
             row("Sudden massive modification of ESOP terms (repricing)", "RED", "Management bailing themselves out of poor stock performance at shareholder expense.") + '\n' +
             row("ESOP vesting heavily skewed to short-term or time-based rather than performance", "RED", "Misalignment with long-term shareholder value creation.") + '\n' +
             row("Clear linkage of ESOP vesting to long-term Return on Capital (ROCE) targets", "GREEN", "High confidence in management's alignment with long-term business health.") + '\n' +
             row("Dilution accurately and conservatively modeled in long-term share count projections", "GREEN", "Use fully diluted share count for DCF per-share values.");

let html = fs.readFileSync('esop.html', 'utf8');

// Find SECTION P and replacing everything until SECTION Q
let idxP = html.indexOf('SECTION P: Red Flags vs Green Flags - ESOP');
let idxQ = html.indexOf('SECTION Q: Final Intelligence Summary - ESOP');

if (idxP !== -1 && idxQ !== -1) {
  let start = html.lastIndexOf('<section', idxP);
  let end = html.lastIndexOf('<section', idxQ);
  let cmt = html.lastIndexOf('<!-- SECTION Q', end);
  if (cmt !== -1 && cmt > start) end = cmt;
  
  html = html.slice(0, start) + standardTemplate(esRows) + '\n\n      ' + html.slice(end);
  fs.writeFileSync('esop.html', html);
  console.log("updated esop.html");
} else {
  console.log("Could not find", idxP, idxQ);
}
