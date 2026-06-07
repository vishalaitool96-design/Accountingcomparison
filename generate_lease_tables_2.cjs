const fs = require('fs');

const tables2 = `
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION E: P&L Impact - Year 1
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-right">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200 text-left w-1/5">Line item</th>
                <th class="p-3 border-b border-slate-200 w-1/5">AS (Old)</th>
                <th class="p-3 border-b border-slate-200 w-1/5">Ind AS 116</th>
                <th class="p-3 border-b border-slate-200 w-1/5">IFRS 16</th>
                <th class="p-3 border-b border-slate-200 w-1/5">US GAAP (Op. Lease)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 font-mono">
              <tr class="hover:bg-slate-50">
                <td class="p-3 text-left">Base EBITDA</td>
                <td class="p-3" id="e-base-as">80.00 Cr</td>
                <td class="p-3" id="e-base-in">80.00 Cr</td>
                <td class="p-3" id="e-base-if">80.00 Cr</td>
                <td class="p-3" id="e-base-us">80.00 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50 text-red-600">
                <td class="p-3 text-left">Lease exp / Depn</td>
                <td class="p-3" id="e-dep-as">-12.00 Cr (Rent)</td>
                <td class="p-3" id="e-dep-in">-9.09 Cr (Dep)</td>
                <td class="p-3" id="e-dep-if">-9.09 Cr (Dep)</td>
                <td class="p-3" id="e-dep-us">-12.00 Cr (Rent)</td>
              </tr>
              <tr class="hover:bg-slate-50 font-bold bg-slate-50 border-y-2 border-slate-200">
                <td class="p-3 text-left">Reported EBITDA</td>
                <td class="p-3" id="e-rebitda-as">68.00 Cr</td>
                <td class="p-3 text-teal-700" id="e-rebitda-in">70.91 Cr</td>
                <td class="p-3 text-teal-700" id="e-rebitda-if">70.91 Cr</td>
                <td class="p-3" id="e-rebitda-us">68.00 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 text-left">EBIT</td>
                <td class="p-3" id="e-ebit-as">68.00 Cr</td>
                <td class="p-3" id="e-ebit-in">70.91 Cr</td>
                <td class="p-3" id="e-ebit-if">70.91 Cr</td>
                <td class="p-3" id="e-ebit-us">68.00 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50 text-red-600">
                <td class="p-3 text-left">Interest</td>
                <td class="p-3 text-slate-500" id="e-int-as">Nil</td>
                <td class="p-3" id="e-int-in">-4.55 Cr</td>
                <td class="p-3" id="e-int-if">-4.55 Cr</td>
                <td class="p-3 text-slate-500" id="e-int-us">Nil</td>
              </tr>
              <tr class="hover:bg-slate-50 font-semibold bg-slate-50 border-t-2 border-slate-200">
                <td class="p-3 text-left font-sans">PBT</td>
                <td class="p-3" id="e-pbt-as">68.00 Cr</td>
                <td class="p-3 text-amber-700" id="e-pbt-in">66.36 Cr</td>
                <td class="p-3 text-amber-700" id="e-pbt-if">66.36 Cr</td>
                <td class="p-3" id="e-pbt-us">68.00 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50 text-red-600">
                <td class="p-3 text-left">Tax @ 25%</td>
                <td class="p-3" id="e-tax-as">-17.00 Cr</td>
                <td class="p-3" id="e-tax-in">-16.59 Cr</td>
                <td class="p-3" id="e-tax-if">-16.59 Cr</td>
                <td class="p-3" id="e-tax-us">-17.00 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50 font-bold bg-slate-100 border-y-2 border-slate-200">
                <td class="p-3 text-left font-sans">PAT (Profit After Tax)</td>
                <td class="p-3" id="e-pat-as">51.00 Cr</td>
                <td class="p-3 text-amber-700" id="e-pat-in">49.77 Cr</td>
                <td class="p-3 text-amber-700" id="e-pat-if">49.77 Cr</td>
                <td class="p-3" id="e-pat-us">51.00 Cr</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION F: Balance Sheet Impact - Year 1
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-right">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200 text-left w-1/5">Item</th>
                <th class="p-3 border-b border-slate-200 w-1/5">AS (Old)</th>
                <th class="p-3 border-b border-slate-200 w-1/5">Ind AS 116</th>
                <th class="p-3 border-b border-slate-200 w-1/5">IFRS 16</th>
                <th class="p-3 border-b border-slate-200 w-1/5">US GAAP</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 font-mono">
              <tr class="hover:bg-slate-50">
                <td class="p-3 text-left">ROU Asset (Gross)</td>
                <td class="p-3 text-slate-500 font-sans">Not recorded</td>
                <td class="p-3" id="f-gross-in">45.47 Cr</td>
                <td class="p-3" id="f-gross-if">45.47 Cr</td>
                <td class="p-3" id="f-gross-us">45.47 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50 text-red-600">
                <td class="p-3 text-left">Accumulated Depreciation</td>
                <td class="p-3 text-slate-400 font-sans">Not recorded</td>
                <td class="p-3" id="f-adep-in">9.09 Cr</td>
                <td class="p-3" id="f-adep-if">9.09 Cr</td>
                <td class="p-3" id="f-adep-us">9.09 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50 font-semibold bg-slate-50 text-indigo-800">
                <td class="p-3 text-left font-sans">ROU Asset (Net)</td>
                <td class="p-3 text-slate-500" id="f-net-as">0.00 Cr</td>
                <td class="p-3" id="f-net-in">36.38 Cr</td>
                <td class="p-3" id="f-net-if">36.38 Cr</td>
                <td class="p-3" id="f-net-us">36.38 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 text-left">Lease Liability (Current)</td>
                <td class="p-3 text-slate-500" id="f-curr-as">0.00 Cr</td>
                <td class="p-3 text-red-700" id="f-curr-in">7.98 Cr</td>
                <td class="p-3 text-red-700" id="f-curr-if">7.98 Cr</td>
                <td class="p-3 text-red-700" id="f-curr-us">7.98 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 text-left">Lease Liability (Non-Current)</td>
                <td class="p-3 text-slate-500" id="f-nonc-as">0.00 Cr</td>
                <td class="p-3 text-red-700" id="f-nonc-in">30.04 Cr</td>
                <td class="p-3 text-red-700" id="f-nonc-if">30.04 Cr</td>
                <td class="p-3 text-red-700" id="f-nonc-us">30.04 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50 font-semibold bg-slate-50 text-red-800">
                <td class="p-3 text-left font-sans">Lease Liability (Total)</td>
                <td class="p-3 text-slate-500" id="f-tliab-as">0.00 Cr</td>
                <td class="p-3" id="f-tliab-in">38.02 Cr</td>
                <td class="p-3" id="f-tliab-if">38.02 Cr</td>
                <td class="p-3" id="f-tliab-us">38.02 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50 font-bold border-t-2 border-slate-200">
                <td class="p-3 text-left font-sans">Total Assets</td>
                <td class="p-3 font-sans text-slate-600">Lower</td>
                <td class="p-3" id="f-ta-in">Higher (+36.38 Cr)</td>
                <td class="p-3" id="f-ta-if">Higher (+36.38 Cr)</td>
                <td class="p-3" id="f-ta-us">Higher (+36.38 Cr)</td>
              </tr>
              <tr class="hover:bg-slate-50 font-bold border-t border-slate-200">
                <td class="p-3 text-left font-sans">Total Liabilities</td>
                <td class="p-3 font-sans text-slate-600">Lower</td>
                <td class="p-3" id="f-t/liab-in">Higher (+38.02 Cr)</td>
                <td class="p-3" id="f-t/liab-if">Higher (+38.02 Cr)</td>
                <td class="p-3" id="f-t/liab-us">Higher (+38.02 Cr)</td>
              </tr>
              <tr class="hover:bg-slate-50 font-bold bg-slate-100 border-t-2 border-slate-200">
                <td class="p-3 text-left font-sans">Equity Impact</td>
                <td class="p-3 font-sans text-slate-600">Higher</td>
                <td class="p-3 text-amber-700" id="f-eq-in">Lower by 1.23 Cr</td>
                <td class="p-3 text-amber-700" id="f-eq-if">Lower by 1.23 Cr</td>
                <td class="p-3" id="f-eq-us">Same as AS</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="p-4 bg-blue-50 border-t border-slate-200 text-sm text-blue-900 italic">
          <strong>NOTE:</strong> Under Ind AS/IFRS, assets and liabilities increase by <span id="n-ast">36.38 Cr</span> and <span id="n-lib">38.02 Cr</span> respectively, reducing equity by <span id="n-diff">1.64 Cr</span> (the difference). Under US GAAP operating lease, balance sheet similar but P&L different.
        </div>
      </section>

      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION H: Ratio Impact - Year 1
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-center">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200 text-left w-1/6">Ratio</th>
                <th class="p-3 border-b border-slate-200">AS</th>
                <th class="p-3 border-b border-slate-200">Ind AS 116</th>
                <th class="p-3 border-b border-slate-200">IFRS 16</th>
                <th class="p-3 border-b border-slate-200">US GAAP</th>
                <th class="p-3 border-b border-slate-200 text-blue-800 font-bold">Direction</th>
                <th class="p-3 border-b border-slate-200 text-left">What It Means</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 font-mono">
              <tr class="hover:bg-slate-50">
                <td class="p-3 text-left font-bold font-sans" title="Reported EBITDA / Total Revenue">EBITDA Margin</td>
                <td class="p-3" id="h-ebm-as">34.0%</td>
                <td class="p-3" id="h-ebm-in">35.5%</td>
                <td class="p-3" id="h-ebm-if">35.5%</td>
                <td class="p-3" id="h-ebm-us">34.0%</td>
                <td class="p-3 font-semibold text-teal-600" id="h-dir-ebm">↑ (Ind AS/IFRS)</td>
                <td class="p-3 text-left font-sans text-xs text-slate-600">Mechanical improvement from rent reclassification</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 text-left font-bold font-sans" title="Lease Liability / Total Equity">Debt/Equity</td>
                <td class="p-3" id="h-de-as">0.00</td>
                <td class="p-3" id="h-de-in">0.13</td>
                <td class="p-3" id="h-de-if">0.13</td>
                <td class="p-3" id="h-de-us">0.13</td>
                <td class="p-3 font-semibold text-red-600" id="h-dir-de">↑ (Leverage)</td>
                <td class="p-3 text-left font-sans text-xs text-slate-600">Previously hidden debt now visible</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 text-left font-bold font-sans" title="EBIT / Interest Expense">Interest Coverage</td>
                <td class="p-3 text-slate-500" id="h-ic-as">N/A</td>
                <td class="p-3" id="h-ic-in">15.6x</td>
                <td class="p-3" id="h-ic-if">15.6x</td>
                <td class="p-3 text-slate-500" id="h-ic-us">N/A</td>
                <td class="p-3 font-semibold text-amber-600" id="h-dir-ic">↓ (Weaker)</td>
                <td class="p-3 text-left font-sans text-xs text-slate-600">Financing cost now explicit</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 text-left font-bold font-sans" title="PAT / Total Assets">ROA (Return on Assets)</td>
                <td class="p-3" id="h-roa-as">10.2%</td>
                <td class="p-3" id="h-roa-in">7.3%</td>
                <td class="p-3" id="h-roa-if">7.3%</td>
                <td class="p-3" id="h-roa-us">7.3%</td>
                <td class="p-3 font-semibold text-amber-600" id="h-dir-roa">↓</td>
                <td class="p-3 text-left font-sans text-xs text-slate-600">Asset base expanded</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 text-left font-bold font-sans" title="PAT / Total Equity">ROE (Return on Equity)</td>
                <td class="p-3" id="h-roe-as">17.0%</td>
                <td class="p-3" id="h-roe-in">16.6%</td>
                <td class="p-3" id="h-roe-if">16.6%</td>
                <td class="p-3" id="h-roe-us">17.0%</td>
                <td class="p-3 font-semibold text-slate-600" id="h-dir-roe">Mixed</td>
                <td class="p-3 text-left font-sans text-xs text-slate-600">Slight dilution under Ind AS/IFRS</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 text-left font-bold font-sans" title="EBITDA / (Interest + Rent)">Fixed Charge Coverage</td>
                <td class="p-3 text-slate-500" id="h-fcc-as">N/A</td>
                <td class="p-3" id="h-fcc-in">4.2x</td>
                <td class="p-3" id="h-fcc-if">4.2x</td>
                <td class="p-3 text-slate-500" id="h-fcc-us">N/A</td>
                <td class="p-3 font-semibold text-indigo-600" id="h-dir-fcc">New metric</td>
                <td class="p-3 text-left font-sans text-xs text-slate-600">Operating lease now treated as fixed charge</td>
              </tr>
              <tr class="hover:bg-slate-50 font-semibold bg-slate-100 border-t-2 border-slate-200">
                <td class="p-3 text-left font-bold font-sans">Lease-Adjusted EBITDA</td>
                <td class="p-3 font-bold" id="h-lae-as">34.0%</td>
                <td class="p-3 font-bold" id="h-lae-in">34.0%</td>
                <td class="p-3 font-bold" id="h-lae-if">34.0%</td>
                <td class="p-3 font-bold" id="h-lae-us">34.0%</td>
                <td class="p-3 font-bold text-slate-800" id="h-dir-lae">Stable</td>
                <td class="p-3 text-left font-sans text-xs text-slate-600">Best metric for peer comparison</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <div class="mt-4 text-center pb-4 shrink-0 border-t border-slate-200">
        <p class="text-xs text-slate-500 mt-2">Calculations dynamically updated at <span id="timestamp-text">...</span>.</p>
      </div>
    </main>
`;
fs.appendFileSync('lease.html', tables2);
console.log('Appended tables 2');
