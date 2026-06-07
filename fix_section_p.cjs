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

// function to create a row
const row = (scenario, flag, action) => {
  let bg = flag === 'RED' ? 'bg-[#fee]' : 'bg-[#efe]';
  let spanText = flag === 'RED' ? '<span class="text-red-500 mr-1">🔴</span>RED' : '<span class="text-green-500 mr-1">🟢</span>GREEN';
  let tdClass = flag === 'RED' ? 'text-red-700' : 'text-green-700';
  let actionClass = flag === 'RED' ? 'text-red-900' : 'text-green-900';
  return `              <tr class="${bg}">
                <td class="p-3 font-medium">${scenario}</td>
                <td class="p-3 text-center font-bold ${tdClass} uppercase tracking-widest">
                  ${spanText}
                </td>
                <td class="p-3 ${actionClass}">${action}</td>
              </tr>`;
};

// 1. deferred-tax.html
let dtRows = row("Large DTA with no valuation allowance despite recent losses", "RED", "Demand to see the precise forecast showing probable recovery.") + '\n' +
             row("Valuation allowance increases every year", "RED", "Write down core earnings metrics; management is hiding deterioration.") + '\n' +
             row("No disclosure of uncertain tax positions in cross-border firms", "RED", "Assume maximum liability scenario for valuation.") + '\n' +
             row("ETR below statutory rate for >3 years with no permanent benefit explanation", "RED", "Normalize ETR to statutory rate for all DCF projections.") + '\n' +
             row("DTA with reasonable valuation allowance linked to clear forecast", "GREEN", "Trust management's conservatism.") + '\n' +
             row("Clear waterfall of uncertain tax positions (FIN 48 equivalent)", "GREEN", "Use provided probabilities directly in DCF risk-weighting.");

let dtHtml = fs.readFileSync('deferred-tax.html', 'utf8');
let pdIndex = dtHtml.indexOf('<!-- SECTION P');
if (pdIndex !== -1) {
  let qIndex = dtHtml.indexOf('<!-- SECTION Q', pdIndex);
  if (qIndex === -1) qIndex = dtHtml.indexOf('</main>', pdIndex);
  let dtEnd = dtHtml.lastIndexOf('</section>', qIndex);
  if(dtEnd !== -1) {
    dtEnd += 10;
    dtHtml = dtHtml.slice(0, pdIndex) + standardTemplate(dtRows) + '\n\n      ' + dtHtml.slice(qIndex - 7);
    fs.writeFileSync('deferred-tax.html', dtHtml);
    console.log("Updated deferred-tax.html");
  }
}

// 2. financial-instruments.html
let fiRows = row("Large derivative liabilities with weak disclosure", "RED", "Assume speculative activity, discount multiple.") + '\n' +
             row("Rising ECL allowance but stable macro", "RED", "Inspect underwriting standards immediately.") + '\n' +
             row("Derivative liability rising faster than notional", "RED", "Request scenario stress test on margin calls.") + '\n' +
             row("Clear ECL methodology and sensitivity analysis", "GREEN", "Rely on reported figures for true economic cost.") + '\n' +
             row("Index-linked or inflation-linked derivatives clearly explained", "GREEN", "Treat as genuine prudent hedging rather than speculation.");

let fiHtml = fs.readFileSync('financial-instruments.html', 'utf8');
let pfiIndex = fiHtml.indexOf('<!-- SECTION P');
if (pfiIndex !== -1) {
  let qIndex = fiHtml.indexOf('<!-- SECTION Q', pfiIndex);
  fiHtml = fiHtml.slice(0, pfiIndex) + standardTemplate(fiRows) + '\n\n      ' + fiHtml.slice(qIndex);
  fs.writeFileSync('financial-instruments.html', fiHtml);
  console.log("Updated financial-instruments.html");
}
