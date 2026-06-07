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

const processFile = (filename, rowsText) => {
  if(!fs.existsSync(filename)) return;
  let html = fs.readFileSync(filename, 'utf8');
  let pIdx = html.indexOf('<!-- SECTION P');
  if(pIdx !== -1) {
    let qIdx = html.indexOf('<!-- SECTION Q', pIdx);
    if(qIdx === -1) {
       qIdx = html.indexOf('</main>', pIdx);
    }
    // find the `<section` before qIdx just in case there are multiple
    // No, better to just slice it correctly.
    let before = html.slice(0, pIdx);
    // Find where the chunk for Q actually starts. Sometimes spacing.
    // Let's just find the exact index of `<!-- SECTION Q` or `</main>`
    let endSlice = qIdx;
    
    // Some lines before SECTION Q might belong to P like `</div></section>`
    // Let's just do:
    let replacement = standardTemplate(rowsText) + '\n\n      ';
    html = before + replacement + html.slice(qIdx - (html.slice(qIdx - 8, qIdx).includes('      ') ? 6 : 0));
    fs.writeFileSync(filename, html);
    console.log("Updated", filename);
  }
};

// cashflows
processFile('cashflows.html', 
             row("Consistently huge gap between Operating Cash Flow and Net Income", "RED", "Check for aggressive working capital management or aggressive revenue recognition.") + '\n' +
             row("CFO positive only because of delayed payments to suppliers (payable stretch)", "RED", "Unsustainable. Recompute CFO assuming normal payable days.") + '\n' +
             row("Capitalizing routine operating expenses into Investing Cash Flow", "RED", "Manually move these outflows back to CFO to find true cash generation.") + '\n' +
             row("CFO covers Capex and Dividends comfortably over a 3-year cycle", "GREEN", "Strong indicator of a self-sustaining business model.") + '\n' +
             row("Clear breakdown of cash flows by segment or geographical region", "GREEN", "Use granularity to model segment-specific terminal growth rates."));

// consolidation
processFile('consolidation.html', 
             row("NCI share of profits >30% while parent holds debt", "RED", "High risk of cash trap. Parent may struggle to service debt if subs pay no dividends.") + '\n' +
             row("Constant changes in subsidiary stake percentages", "RED", "Watch out for earnings management via manufactured step-up gains.") + '\n' +
             row("Large non-recourse debt in subsidiaries", "RED", "Treat as off-balance-sheet risk for the parent; covenant breach in sub affects group optics.") + '\n' +
             row("NCI as % of total equity <10%", "GREEN", "Parent has almost full control over the free cash flows of the group.") + '\n' +
             row("Clear narrative bridge from standalone performance to group consolidated performance", "GREEN", "Build explicit sum-of-the-parts valuations."));

// esop
processFile('esop.html', 
             row("ESOP expense systematically ignored in management 'Adjusted EBITDA'", "RED", "Do not ignore it; treat recurring grants as cash compensation in valuation models.") + '\n' +
             row("Sudden massive modification of ESOP terms (repricing)", "RED", "Management bailing themselves out of poor stock performance at shareholder expense.") + '\n' +
             row("ESOP vesting heavily skewed to short-term or time-based rather than performance", "RED", "Misalignment with long-term shareholder value creation.") + '\n' +
             row("Clear linkage of ESOP vesting to long-term Return on Capital (ROCE) targets", "GREEN", "High confidence in management's alignment with long-term business health.") + '\n' +
             row("Dilution accurately and conservatively modeled in long-term share count projections", "GREEN", "Use fully diluted share count for DCF per-share values."));

// impairment
processFile('impairment.html',
             row("Repeated 'one-time' impairment charges over multiple years", "RED", "Sign of structural capital misallocation. Apply a permanent 'management discount' to valuation.") + '\n' +
             row("Impairment occurs immediately after a change in CEO/CFO or acquisition", "RED", "Classic 'kitchen sinking' to reset the baseline for future bonuses.") + '\n' +
             row("Discount rate used in impairment testing is suspiciously low", "RED", "Management is artificially shielding assets from impairment. Recalculate with market rates.") + '\n' +
             row("Detailed sensitivity analysis provided for carrying amounts", "GREEN", "Allows you to independently stress-test the balance sheet carrying values.") + '\n' +
             row("Impairment taken proactively ahead of industry cycle deterioration", "GREEN", "Sign of honest, conservative management facing reality early."));

// ppe
processFile('ppe.html',
             row("Frequent changes to estimated useful lives to boost immediate profit", "RED", "Quality of earnings is very low. Normalize depreciation to historical averages.") + '\n' +
             row("Capitalizing major repairs that were previously expensed", "RED", "Artificial margin padding. Strip capitalized repairs from EBITDA.") + '\n' +
             row("Gross block balloons while revenue stagnates (falling asset turnover)", "RED", "Capital deployed is generating no returns. Flag for severe future impairment risk.") + '\n' +
             row("Clean separation and componentization of major assets", "GREEN", "Trust the reported maintenance capex figures as realistic.") + '\n' +
             row("Depreciation policy precisely matches the economic life of assets", "GREEN", "P&L reflects true economic burn rate of capital."));

// revenue
processFile('revenue.html',
             row("Surge in unbilled revenue or contract assets decoupled from cash collection", "RED", "High risk of future write-offs. Focus valuation strictly on cash generation.") + '\n' +
             row("Aggressive upfront recognition of multi-year software/service contracts", "RED", "Earnings are front-loaded. Rebuild historical margins to a straight-line basis for comparability.") + '\n' +
             row("Frequent modifications to contract terms causing revenue spikes", "RED", "Sign of managing earnings through contract clauses rather than operations.") + '\n' +
             row("Transparent disaggregation of revenue by 'point in time' vs 'over time'", "GREEN", "Use to segment high-quality recurring revenue from transactional revenue.") + '\n' +
             row("Deferred revenue (contract liability) growing consistently with orderbook", "GREEN", "Strong indicator of future cash flow visibility. Assign higher valuation multiple."));
