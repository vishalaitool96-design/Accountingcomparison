const fs = require('fs');

const sectionG_to_I = `
      <!-- SECTION G -->
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION G: Cash Flow Impact
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-center">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200 text-left">CF Component</th>
                <th class="p-3 border-b border-slate-200">AS (Old)</th>
                <th class="p-3 border-b border-slate-200">Ind AS / IFRS</th>
                <th class="p-3 border-b border-slate-200">US GAAP</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">Current tax paid (cash)</td>
                <td class="p-3 val-curr-tax-pos">25.00 Cr</td>
                <td class="p-3 val-curr-tax-pos">25.00 Cr</td>
                <td class="p-3 val-curr-tax-pos">25.00 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">Deferred tax (non-cash)</td>
                <td class="p-3"><span class="val-dtl font-bold text-slate-700">5.00 Cr</span> added back in operating CF</td>
                <td class="p-3">Same</td>
                <td class="p-3">Same</td>
              </tr>
              <tr class="hover:bg-slate-50 font-bold bg-slate-50 border-t-2 border-slate-200">
                <td class="p-3 text-slate-800 text-left">Total operating cash flow</td>
                <td class="p-3 text-teal-700">Same across all standards</td>
                <td class="p-3 text-teal-700">Same</td>
                <td class="p-3 text-teal-700">Same</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="p-4 bg-slate-50 border-t border-slate-200 text-sm text-slate-600 italic">
          <strong>Key difference:</strong> None in cash – only classification within operating CF. Deferred tax is always a non-cash adjustment; total cash flow from operations is identical under all standards.
        </div>
      </section>

      <!-- SECTION H -->
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION H: Ratio Impact
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-center">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200 text-left">Ratio</th>
                <th class="p-3 border-b border-slate-200">AS</th>
                <th class="p-3 border-b border-slate-200">Ind AS</th>
                <th class="p-3 border-b border-slate-200">IFRS</th>
                <th class="p-3 border-b border-slate-200">US GAAP</th>
                <th class="p-3 border-b border-slate-200">Direction & Comment</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">Effective Tax Rate (ETR)</td>
                <td class="p-3 font-bold text-teal-600 val-etr">30.00%</td>
                <td class="p-3 font-bold text-teal-600 val-etr">30.00%</td>
                <td class="p-3 font-bold text-teal-600 val-etr">30.00%</td>
                <td class="p-3 font-bold text-teal-600 val-etr">30.00%</td>
                <td class="p-3 text-left">Same here but diverges with uncertain positions</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">ROE (PAT/Equity)</td>
                <td class="p-3 text-emerald-600">Higher (if DTA not recognised)</td>
                <td class="p-3 text-red-600">Slightly lower</td>
                <td class="p-3">Same</td>
                <td class="p-3 text-red-600">Lower if valuation allowance</td>
                <td class="p-3 text-left font-semibold">AS may overstate ROE</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">Debt/Equity</td>
                <td class="p-3 text-emerald-600">Lower (no DTA on BS)</td>
                <td class="p-3 text-red-600">Slightly higher</td>
                <td class="p-3">Same</td>
                <td class="p-3">Similar</td>
                <td class="p-3 text-left font-semibold">AS understates leverage</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">Return on Assets (ROA)</td>
                <td class="p-3 text-emerald-600">Higher</td>
                <td class="p-3 text-red-600">Lower</td>
                <td class="p-3">Same</td>
                <td class="p-3 text-red-600">Lower</td>
                <td class="p-3 text-left font-semibold">AS looks more efficient incorrectly</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION I -->
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION I: Earnings Quality - Signals Table
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200 w-1/4">Signal Observed</th>
                <th class="p-3 border-b border-slate-200 w-1/4">What It Means Technically</th>
                <th class="p-3 border-b border-slate-200 w-1/4">Analyst Interpretation</th>
                <th class="p-3 border-b border-slate-200 w-1/4">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Large DTA with no valuation allowance</td>
                <td class="p-3">Management highly confident of future profits</td>
                <td class="p-3">Could be optimistic; check historical forecast accuracy.</td>
                <td class="p-3 text-emerald-700">Stress-test future profitability; compare to industry.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Valuation allowance increases suddenly</td>
                <td class="p-3">Prior DTA no longer considered realisable</td>
                <td class="p-3">Past earnings may have been overstated; negative signal.</td>
                <td class="p-3 text-emerald-700">Reduce reliance on deferred tax assets in valuation.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">ETR significantly below statutory rate</td>
                <td class="p-3">Permanent differences or unrecognised DTAs</td>
                <td class="p-3">May be sustainable (e.g., tax incentives) or low-quality (one-off).</td>
                <td class="p-3 text-emerald-700">Identify drivers; normalise ETR for forecasting.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Deferred tax liability shrinking despite growth</td>
                <td class="p-3">Reversing temp differences faster than new ones created</td>
                <td class="p-3">Business may be slowing capex; watch for under-investment.</td>
                <td class="p-3 text-emerald-700">Compare capex trend with DTL movement.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">No reconciliation of expected vs actual tax rate</td>
                <td class="p-3">Poor disclosure</td>
                <td class="p-3">Management hiding volatile tax items.</td>
                <td class="p-3 text-emerald-700">Request full tax note; treat as amber flag.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
`;

fs.appendFileSync('deferred-tax.html', sectionG_to_I);
console.log('section G to I done');
