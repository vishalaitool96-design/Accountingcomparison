const fs = require('fs');

const sectionB_to_F = `
      <!-- SECTION B -->
      <section class="shrink-0 mt-6 bg-[#fffff0] rounded-xl shadow-sm border border-amber-200 overflow-hidden flex flex-col p-6">
        <div class="border-l-4 border-amber-500 pl-4 mb-6">
          <h3 class="text-lg font-bold text-amber-800 uppercase tracking-wide">SECTION B: Transaction Fact Pattern (Editable)</h3>
          <p class="text-sm text-amber-700">Modify these inputs to see how deferred tax changes under different scenarios</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <h4 class="font-bold text-slate-700 border-b pb-2">Inputs</h4>
            <div class="grid grid-cols-2 gap-4 items-center">
              <label class="text-sm font-semibold text-slate-700">Company</label>
              <div class="text-sm">Apex Manufacturing Ltd.</div>
              
              <label class="text-sm font-semibold text-slate-700">Asset</label>
              <div class="text-sm">Production machinery</div>

              <label class="text-sm font-semibold text-slate-700">Cost of asset (Cr)</label>
              <input type="number" id="dt-cost" value="100" class="dt-input border rounded px-3 py-1 w-full" />
              
              <label class="text-sm font-semibold text-slate-700">Useful life (book) in years</label>
              <input type="number" id="dt-life" value="5" class="dt-input border rounded px-3 py-1 w-full" />
              
              <label class="text-sm font-semibold text-slate-700">Tax depreciation rate (%)</label>
              <input type="number" id="dt-tax-rate" value="40" class="dt-input border rounded px-3 py-1 w-full" />
              
              <label class="text-sm font-semibold text-slate-700">Tax rate (%)</label>
              <input type="number" id="dt-eff-tax" value="25" class="dt-input border rounded px-3 py-1 w-full" />
              
              <label class="text-sm font-semibold text-slate-700">Book profit before tax (PBT) (Cr)</label>
              <input type="number" id="dt-pbt" value="100" class="dt-input border rounded px-3 py-1 w-full" />
              
              <label class="text-sm font-semibold text-slate-700">Current tax expense (Cr) *</label>
              <input type="number" id="dt-current-tax" value="25" class="dt-input border rounded px-3 py-1 w-full" />
              
              <label class="text-sm font-semibold text-slate-700">Total Equity (Cr)</label>
              <input type="number" id="dt-equity" value="300" class="dt-input border rounded px-3 py-1 w-full" />
              
              <label class="text-sm font-semibold text-slate-700">Total Assets (Cr)</label>
              <input type="number" id="dt-assets" value="500" class="dt-input border rounded px-3 py-1 w-full" />
            </div>
            <div class="text-xs text-slate-500 italic">* Assuming current tax is computed correctly outside this simple model based on taxable income</div>
            <button id="reset-btn" class="mt-4 px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded font-semibold text-sm transition-colors">Reset to Default</button>
          </div>
          
          <div class="space-y-4">
            <h4 class="font-bold text-slate-700 border-b pb-2">Auto-Calculated Fields (Year 1)</h4>
            <div class="bg-white p-4 rounded border border-amber-100 space-y-3">
              <div class="flex justify-between">
                <span class="text-sm text-slate-600">Book depreciation = Cost / Useful life</span>
                <span class="text-sm font-bold text-slate-800" id="calc-book-dep">20.00 Cr</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm text-slate-600">Tax depreciation Year 1 = Cost × Tax dep rate</span>
                <span class="text-sm font-bold text-slate-800" id="calc-tax-dep">40.00 Cr</span>
              </div>
              <div class="flex justify-between pt-2 border-t">
                <span class="text-sm text-slate-600">Temporary difference</span>
                <span class="text-sm font-bold text-slate-800" id="calc-temp-diff">20.00 Cr</span>
              </div>
              <div class="flex justify-between pt-2 border-t border-amber-200">
                <span class="text-sm font-bold text-slate-700">Deferred tax liability (Temp diff × Tax rate)</span>
                <span class="text-sm font-bold text-red-600" id="calc-dtl">5.00 Cr</span>
              </div>
            </div>
            <div class="text-xs text-slate-500 text-right mt-2">Last recalculated: <span id="last-updated"></span></div>
          </div>
        </div>
      </section>

      <!-- SECTION C/D Combined slightly -->
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION C & D: Side-by-Side Impact - Year 1
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Framework</th>
                <th class="p-3 border-b border-slate-200">Temporary Difference Recognised</th>
                <th class="p-3 border-b border-slate-200 text-right">Deferred Tax Liability (End Y1)</th>
                <th class="p-3 border-b border-slate-200 text-right">P&L Tax Expense Impact (Year 1)</th>
                <th class="p-3 border-b border-slate-200">Note</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">AS (Old Indian GAAP)</td>
                <td class="p-3">Only timing differences</td>
                <td class="p-3 text-right font-bold text-red-600 val-dtl">5.00 Cr</td>
                <td class="p-3 text-right font-bold text-slate-700 val-dtl">5.00 Cr</td>
                <td class="p-3">Misses other temp diffs</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Ind AS 12</td>
                <td class="p-3">All taxable temporary differences</td>
                <td class="p-3 text-right font-bold text-red-600 val-dtl">5.00 Cr</td>
                <td class="p-3 text-right font-bold text-slate-700 val-dtl">5.00 Cr</td>
                <td class="p-3">Comprehensive</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">IAS 12 (IFRS)</td>
                <td class="p-3">All taxable temporary differences</td>
                <td class="p-3 text-right font-bold text-red-600 val-dtl">5.00 Cr</td>
                <td class="p-3 text-right font-bold text-slate-700 val-dtl">5.00 Cr</td>
                <td class="p-3">Same as Ind AS</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">US GAAP ASC 740</td>
                <td class="p-3">All taxable temp diffs, plus valuation allowance</td>
                <td class="p-3 text-right font-bold text-red-600" id="val-usgaap-dtl">5.00 Cr (assuming no valuation allowance)</td>
                <td class="p-3 text-right font-bold text-slate-700 val-dtl">5.00 Cr</td>
                <td class="p-3">Threshold for DTAs stricter</td>
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
                <th class="p-3 border-b border-slate-200 text-left">Line Item</th>
                <th class="p-3 border-b border-slate-200">AS (Old)</th>
                <th class="p-3 border-b border-slate-200">Ind AS 12</th>
                <th class="p-3 border-b border-slate-200">IFRS</th>
                <th class="p-3 border-b border-slate-200">US GAAP (ASC 740)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">PBT (before tax)</td>
                <td class="p-3 val-pbt">100.00 Cr</td>
                <td class="p-3 val-pbt">100.00 Cr</td>
                <td class="p-3 val-pbt">100.00 Cr</td>
                <td class="p-3 val-pbt">100.00 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">Current tax expense</td>
                <td class="p-3 text-red-600 val-curr-tax">-25.00 Cr</td>
                <td class="p-3 text-red-600 val-curr-tax">-25.00 Cr</td>
                <td class="p-3 text-red-600 val-curr-tax">-25.00 Cr</td>
                <td class="p-3 text-red-600 val-curr-tax">-25.00 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 text-left">Deferred tax expense</td>
                <td class="p-3 text-red-600 val-dtl-exp">-5.00 Cr</td>
                <td class="p-3 text-red-600 val-dtl-exp">-5.00 Cr</td>
                <td class="p-3 text-red-600 val-dtl-exp">-5.00 Cr</td>
                <td class="p-3 text-red-600" id="val-usgaap-dtl-exp">-5.00 Cr (assume no valuation allowance)</td>
              </tr>
              <tr class="hover:bg-slate-50 bg-slate-50 font-bold border-t-2 border-slate-200">
                <td class="p-3 text-slate-800 text-left">Total tax expense</td>
                <td class="p-3 val-total-tax">-30.00 Cr</td>
                <td class="p-3 val-total-tax">-30.00 Cr</td>
                <td class="p-3 val-total-tax">-30.00 Cr</td>
                <td class="p-3 val-total-tax">-30.00 Cr</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION F -->
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION F: Balance Sheet Impact - Year 1
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Item</th>
                <th class="p-3 border-b border-slate-200">AS (Old)</th>
                <th class="p-3 border-b border-slate-200">Ind AS 12</th>
                <th class="p-3 border-b border-slate-200">IFRS</th>
                <th class="p-3 border-b border-slate-200">US GAAP</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Deferred tax liability</td>
                <td class="p-3 font-bold text-red-600 val-dtl">5.00 Cr</td>
                <td class="p-3 font-bold text-red-600 val-dtl">5.00 Cr</td>
                <td class="p-3 font-bold text-red-600 val-dtl">5.00 Cr</td>
                <td class="p-3 font-bold text-red-600 val-dtl">5.00 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Deferred tax asset (if any)</td>
                <td class="p-3">Not recognised unless virtual certainty</td>
                <td class="p-3 text-emerald-600">Probable threshold</td>
                <td class="p-3">Same</td>
                <td class="p-3 text-emerald-600">More likely than not (>50%)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Presentation</td>
                <td class="p-3">Current or non-current</td>
                <td class="p-3">Always non-current</td>
                <td class="p-3">Same</td>
                <td class="p-3">Current/non-current can be offset</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Valuation allowance</td>
                <td class="p-3">None</td>
                <td class="p-3">None here</td>
                <td class="p-3">None</td>
                <td class="p-3 text-amber-600">Could apply if DTA uncertain</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Total assets/liabs</td>
                <td class="p-3 text-slate-500">Lower (less DTA recognised)</td>
                <td class="p-3">Potentially higher</td>
                <td class="p-3">Same</td>
                <td class="p-3">Similar but valuation allowance reduces DTA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
`;

fs.appendFileSync('deferred-tax.html', sectionB_to_F);
console.log('section B to F done');
