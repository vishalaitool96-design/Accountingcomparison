const fs = require('fs');
const html = `
      <!-- SECTION F -->
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION F: Balance Sheet Impact - Year 1
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-right">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200 text-left">Item</th>
                <th class="p-3 border-b border-slate-200">AS</th>
                <th class="p-3 border-b border-slate-200">Ind AS / IFRS</th>
                <th class="p-3 border-b border-slate-200">US GAAP</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">Trade receivable (gross)</td>
                <td class="p-3 val-receivable-fmt">50.00 Cr</td>
                <td class="p-3 val-receivable-fmt">50.00 Cr</td>
                <td class="p-3 val-receivable-fmt">50.00 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">Less: ECL allowance</td>
                <td class="p-3 text-slate-400">Nil</td>
                <td class="p-3 text-red-600 val-ecl-amt-fmt">1.00 Cr</td>
                <td class="p-3 text-red-600 val-ecl-amt-fmt">1.00 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50 border-t border-slate-200 bg-slate-50">
                <td class="p-3 font-bold text-slate-800 text-left">Trade receivable (net)</td>
                <td class="p-3 font-bold val-receivable-fmt">50.00 Cr</td>
                <td class="p-3 font-bold val-net-rec-fmt">49.00 Cr</td>
                <td class="p-3 font-bold val-net-rec-fmt">49.00 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">Derivative asset/(liability)</td>
                <td class="p-3 text-slate-400">Nil (Hidden)</td>
                <td class="p-3 text-red-600 val-deriv-loss-paren">(2.00 Cr)</td>
                <td class="p-3 text-red-600 val-deriv-loss-paren">(2.00 Cr)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">Bond liability</td>
                <td class="p-3 val-bond-face-fmt">100.00 Cr</td>
                <td class="p-3 val-bond-face-fmt">100.00 Cr</td>
                <td class="p-3 val-bond-face-fmt">100.00 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50 border-t border-slate-200">
                <td class="p-3 font-semibold text-slate-800 text-left">Total assets (simplified)</td>
                <td class="p-3 text-emerald-600">Higher</td>
                <td class="p-3 text-red-600">Lower</td>
                <td class="p-3 text-red-600">Lower</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">Total liabilities</td>
                <td class="p-3 text-emerald-600">Lower</td>
                <td class="p-3 text-red-600">Higher</td>
                <td class="p-3 text-red-600">Higher</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION G -->
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION G: Cash Flow Impact
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">CF Component</th>
                <th class="p-3 border-b border-slate-200">AS</th>
                <th class="p-3 border-b border-slate-200">Ind AS / IFRS</th>
                <th class="p-3 border-b border-slate-200">US GAAP</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Interest paid on bond (<span class="val-bond-int">8</span> Cr)</td>
                <td class="p-3">Operating</td>
                <td class="p-3">Operating or financing (policy choice)</td>
                <td class="p-3">Operating</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Derivative settlement (if any)</td>
                <td class="p-3 text-slate-400">Not shown</td>
                <td class="p-3">Operating or financing depending on purpose</td>
                <td class="p-3">Operating generally</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Principal repayment</td>
                <td class="p-3">Financing</td>
                <td class="p-3">Financing</td>
                <td class="p-3">Financing</td>
              </tr>
              <tr class="hover:bg-slate-50 bg-slate-50 border-t-2 border-slate-200">
                <td class="p-3 font-bold text-slate-800">Total Cash Flow</td>
                <td class="p-3 font-bold text-teal-700">Same cash movement</td>
                <td class="p-3 font-bold text-teal-700">Same cash movement</td>
                <td class="p-3 font-bold text-teal-700">Same cash movement</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="p-4 bg-slate-50 border-t border-slate-200 text-sm text-slate-600 italic">
          <strong>Note:</strong> Deferred tax is always a non-cash adjustment; total cash flow from operations is identical under all standards.
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
                <th class="p-3 border-b border-slate-200">Ind AS / IFRS</th>
                <th class="p-3 border-b border-slate-200">US GAAP</th>
                <th class="p-3 border-b border-slate-200">Direction</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">Debt / Equity</td>
                <td class="p-3 font-bold val-as-de">0.76</td>
                <td class="p-3 font-bold val-new-de">0.79</td>
                <td class="p-3 font-bold val-new-de">0.79</td>
                <td class="p-3 text-red-600 font-semibold val-de-dir">&uarr; (higher leverage)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">Interest coverage</td>
                <td class="p-3 val-as-ic">6.25x</td>
                <td class="p-3 val-new-ic">5.88x</td>
                <td class="p-3 val-new-ic">5.88x</td>
                <td class="p-3 text-red-600 font-semibold val-ic-dir">&darr; (weaker coverage)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">ROA</td>
                <td class="p-3 val-as-roa">12.6%</td>
                <td class="p-3 val-new-roa">11.7%</td>
                <td class="p-3 val-new-roa">11.7%</td>
                <td class="p-3 text-red-600 font-semibold val-ro-dir">&darr;</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">ROE</td>
                <td class="p-3 val-as-roe">24.0%</td>
                <td class="p-3 val-new-roe">22.6%</td>
                <td class="p-3 val-new-roe">22.6%</td>
                <td class="p-3 text-red-600 font-semibold val-ro-dir">&darr;</td>
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
                <th class="p-3 border-b border-slate-200 w-1/4">Signal observed</th>
                <th class="p-3 border-b border-slate-200 w-1/4">What it means technically</th>
                <th class="p-3 border-b border-slate-200 w-1/4">Analyst interpretation</th>
                <th class="p-3 border-b border-slate-200 w-1/4">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Derivative gains/losses swing sharply</td>
                <td class="p-3">Fair value changes flow through P&L (no hedge accounting)</td>
                <td class="p-3">Earnings are sensitive to market rates</td>
                <td class="p-3 text-emerald-700">Separate operating results from market remeasurement</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Credit loss allowance appears</td>
                <td class="p-3">Forward-looking ECL/CECL recognises expected defaults</td>
                <td class="p-3">Counterparty risk is now explicit</td>
                <td class="p-3 text-emerald-700">Review ageing, macro assumptions, and concentration</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">No derivative on balance sheet (AS)</td>
                <td class="p-3">Off-BS risk - not visible</td>
                <td class="p-3">Leverage and risk understated</td>
                <td class="p-3 text-emerald-700">Reconstruct derivative exposure from notes</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Interest expense stable</td>
                <td class="p-3">Bond at amortised cost - no fair value volatility</td>
                <td class="p-3">Low risk from own debt</td>
                <td class="p-3 text-emerald-700">Acceptable; focus on derivative risk</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Frequent reclassification of instruments</td>
                <td class="p-3">Management may be shaping presentation</td>
                <td class="p-3">Potential earnings management</td>
                <td class="p-3 text-emerald-700">Inspect policy choices and business model</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION J -->
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION J: Trend Distortion Matrix
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Metric</th>
                <th class="p-3 border-b border-slate-200">Distortion type</th>
                <th class="p-3 border-b border-slate-200">Duration</th>
                <th class="p-3 border-b border-slate-200">Correction method</th>
                <th class="p-3 border-b border-slate-200">Example</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Profit</td>
                <td class="p-3">Fair value volatility</td>
                <td class="p-3">Ongoing</td>
                <td class="p-3">Normalise for market movements</td>
                <td class="p-3">Swap loss 2 Cr not core operating</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Equity</td>
                <td class="p-3">OCI / ECL effects</td>
                <td class="p-3">Medium-term</td>
                <td class="p-3">Include OCI in total return</td>
                <td class="p-3">ECL reduces retained earnings</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
`;
fs.appendFileSync('financial-instruments.html', html);
