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

// 1. cashflows.html
let cfRows = row("Consistently huge gap between Operating Cash Flow and Net Income", "RED", "Check for aggressive working capital management or aggressive revenue recognition.") + '\n' +
             row("CFO positive only because of delayed payments to suppliers (payable stretch)", "RED", "Unsustainable. Recompute CFO assuming normal payable days.") + '\n' +
             row("Capitalizing routine operating expenses into Investing Cash Flow", "RED", "Manually move these outflows back to CFO to find true cash generation.") + '\n' +
             row("CFO covers Capex and Dividends comfortably over a 3-year cycle", "GREEN", "Strong indicator of a self-sustaining business model.") + '\n' +
             row("Clear breakdown of cash flows by segment or geographical region", "GREEN", "Use granularity to model segment-specific terminal growth rates.");

let cfHtml = fs.readFileSync('cashflows.html', 'utf8');
let cpIndex = cfHtml.indexOf('<!-- SECTION P');
if (cpIndex !== -1) {
  let cqIndex = cfHtml.indexOf('<!-- SECTION Q', cpIndex);
  if (cqIndex === -1) cqIndex = cfHtml.indexOf('</main>', cpIndex);
  // find closest section end
  let endSectionIdx = cfHtml.lastIndexOf('</section>', cqIndex);
  if(endSectionIdx !== -1) {
    cfHtml = cfHtml.slice(0, cpIndex) + standardTemplate(cfRows) + '\n\n      ' + cfHtml.slice(cqIndex - 7);
    fs.writeFileSync('cashflows.html', cfHtml);
    console.log("Updated cashflows.html");
  }
}

// 2. consolidation.html
let cRows = row("NCI share of profits >30% while parent holds debt", "RED", "High risk of cash trap. Parent may struggle to service debt if subs pay no dividends.") + '\n' +
             row("Constant changes in subsidiary stake percentages", "RED", "Watch out for earnings management via manufactured step-up gains.") + '\n' +
             row("Large non-recourse debt in subsidiaries", "RED", "Treat as off-balance-sheet risk for the parent; covenant breach in sub affects group optics.") + '\n' +
             row("NCI as % of total equity <10%", "GREEN", "Parent has almost full control over the free cash flows of the group.") + '\n' +
             row("Clear narrative bridge from standalone performance to group consolidated performance", "GREEN", "Build explicit sum-of-the-parts valuations.");

let cHtml = fs.readFileSync('consolidation.html', 'utf8');
let cIndex = cHtml.indexOf('<!-- SECTION P');
if (cIndex !== -1) {
  let cqIndex = cHtml.indexOf('<!-- SECTION Q', cIndex);
  if (cqIndex === -1) cqIndex = cHtml.indexOf('</main>', cIndex);
  cHtml = cHtml.slice(0, cIndex) + standardTemplate(cRows) + '\n\n      ' + cHtml.slice(cqIndex - 7);
  fs.writeFileSync('consolidation.html', cHtml);
  console.log("Updated consolidation.html");
}

// 3. esop.html
let esRows = row("ESOP expense systematically ignored in management 'Adjusted EBITDA'", "RED", "Do not ignore it; treat recurring grants as cash compensation in valuation models.") + '\n' +
             row("Sudden massive modification of ESOP terms (repricing)", "RED", "Management bailing themselves out of poor stock performance at shareholder expense.") + '\n' +
             row("ESOP vesting heavily skewed to short-term or time-based rather than performance", "RED", "Misalignment with long-term shareholder value creation.") + '\n' +
             row("Clear linkage of ESOP vesting to long-term Return on Capital (ROCE) targets", "GREEN", "High confidence in management's alignment with long-term business health.") + '\n' +
             row("Dilution accurately and conservatively modeled in long-term share count projections", "GREEN", "Use fully diluted share count for DCF per-share values.");

let esHtml = fs.readFileSync('esop.html', 'utf8');
let esIndex = esHtml.indexOf('<!-- SECTION O & P -->');
// Wait, esop.html has O & P combined into one section tag?
// No, I separated O out earlier. Let's look for SECTION P.
