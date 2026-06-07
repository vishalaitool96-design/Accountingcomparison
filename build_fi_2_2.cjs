const fs = require('fs');
const html = `
      <!-- SECTION D -->
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION D: Side-by-Side Impact Table (Year 1)
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-right">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200 text-left">Framework</th>
                <th class="p-3 border-b border-slate-200">Debt interest (P&L)</th>
                <th class="p-3 border-b border-slate-200">Derivative loss (P&L)</th>
                <th class="p-3 border-b border-slate-200">Credit loss (P&L)</th>
                <th class="p-3 border-b border-slate-200 font-bold">Total expense (P&L)</th>
                <th class="p-3 border-b border-slate-200">Derivative liab (BS)</th>
                <th class="p-3 border-b border-slate-200">Receivable net (BS)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">AS</td>
                <td class="p-3 val-bond-int-fmt">8.00 Cr</td>
                <td class="p-3 text-slate-400">Nil</td>
                <td class="p-3 text-slate-400">Nil</td>
                <td class="p-3 font-bold val-as-tot-exp">8.00 Cr</td>
                <td class="p-3 text-slate-400">Nil</td>
                <td class="p-3 val-receivable-fmt">50.00 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">Ind AS 109</td>
                <td class="p-3 val-bond-int-fmt">8.00 Cr</td>
                <td class="p-3 val-deriv-loss-fmt text-red-600">2.00 Cr</td>
                <td class="p-3 val-ecl-amt-fmt text-red-600">1.00 Cr</td>
                <td class="p-3 font-bold val-new-tot-exp">11.00 Cr</td>
                <td class="p-3 val-deriv-loss-fmt">2.00 Cr</td>
                <td class="p-3 val-net-rec-fmt">49.00 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">IFRS 9</td>
                <td class="p-3 val-bond-int-fmt">8.00 Cr</td>
                <td class="p-3 val-deriv-loss-fmt text-red-600">2.00 Cr</td>
                <td class="p-3 val-ecl-amt-fmt text-red-600">1.00 Cr</td>
                <td class="p-3 font-bold val-new-tot-exp">11.00 Cr</td>
                <td class="p-3 val-deriv-loss-fmt">2.00 Cr</td>
                <td class="p-3 val-net-rec-fmt">49.00 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">US GAAP</td>
                <td class="p-3 val-bond-int-fmt">8.00 Cr</td>
                <td class="p-3 val-deriv-loss-fmt text-red-600">2.00 Cr</td>
                <td class="p-3 val-ecl-amt-fmt text-red-600">1.00 Cr</td>
                <td class="p-3 font-bold val-new-tot-exp">11.00 Cr</td>
                <td class="p-3 val-deriv-loss-fmt">2.00 Cr</td>
                <td class="p-3 val-net-rec-fmt">49.00 Cr</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION E -->
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION E: P&L Impact - Year 1
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-right">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200 text-left">Line item</th>
                <th class="p-3 border-b border-slate-200">AS</th>
                <th class="p-3 border-b border-slate-200">Ind AS 109</th>
                <th class="p-3 border-b border-slate-200">IFRS 9</th>
                <th class="p-3 border-b border-slate-200">US GAAP</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">Base Revenue</td>
                <td class="p-3 val-revenue-fmt">200.00 Cr</td>
                <td class="p-3 val-revenue-fmt">200.00 Cr</td>
                <td class="p-3 val-revenue-fmt">200.00 Cr</td>
                <td class="p-3 val-revenue-fmt">200.00 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">Opex (excl. financial items)</td>
                <td class="p-3 val-opex-fmt">150.00 Cr</td>
                <td class="p-3 val-opex-fmt">150.00 Cr</td>
                <td class="p-3 val-opex-fmt">150.00 Cr</td>
                <td class="p-3 val-opex-fmt">150.00 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">Interest expense (bond)</td>
                <td class="p-3 text-red-600 val-bond-int-neg">-8.00 Cr</td>
                <td class="p-3 text-red-600 val-bond-int-neg">-8.00 Cr</td>
                <td class="p-3 text-red-600 val-bond-int-neg">-8.00 Cr</td>
                <td class="p-3 text-red-600 val-bond-int-neg">-8.00 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">Derivative FV loss</td>
                <td class="p-3 text-slate-400">Nil</td>
                <td class="p-3 text-red-600 val-deriv-loss-neg">-2.00 Cr</td>
                <td class="p-3 text-red-600 val-deriv-loss-neg">-2.00 Cr</td>
                <td class="p-3 text-red-600 val-deriv-loss-neg">-2.00 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">Credit loss expense (ECL)</td>
                <td class="p-3 text-slate-400">Nil</td>
                <td class="p-3 text-red-600 val-ecl-amt-neg">-1.00 Cr</td>
                <td class="p-3 text-red-600 val-ecl-amt-neg">-1.00 Cr</td>
                <td class="p-3 text-red-600 val-ecl-amt-neg">-1.00 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50 border-t border-slate-300">
                <td class="p-3 font-bold text-slate-800 text-left">PBT</td>
                <td class="p-3 font-bold val-as-pbt">42.00 Cr</td>
                <td class="p-3 font-bold val-new-pbt">39.00 Cr</td>
                <td class="p-3 font-bold val-new-pbt">39.00 Cr</td>
                <td class="p-3 font-bold val-new-pbt">39.00 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">Tax <span class="val-tax-perc">@ 25%</span></td>
                <td class="p-3 text-red-600 val-as-tax">-10.50 Cr</td>
                <td class="p-3 text-red-600 val-new-tax">-9.75 Cr</td>
                <td class="p-3 text-red-600 val-new-tax">-9.75 Cr</td>
                <td class="p-3 text-red-600 val-new-tax">-9.75 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50 border-t-2 border-slate-300 bg-slate-50">
                <td class="p-3 font-bold text-slate-800 text-left">PAT</td>
                <td class="p-3 font-bold val-as-pat">31.50 Cr</td>
                <td class="p-3 font-bold val-new-pat">29.25 Cr</td>
                <td class="p-3 font-bold val-new-pat">29.25 Cr</td>
                <td class="p-3 font-bold val-new-pat">29.25 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">EPS (10 Cr shares)</td>
                <td class="p-3 val-as-eps">3.15</td>
                <td class="p-3 val-new-eps">2.93</td>
                <td class="p-3 val-new-eps">2.93</td>
                <td class="p-3 val-new-eps">2.93</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
`;
fs.appendFileSync('financial-instruments.html', html);
