const fs = require('fs');

const tables = `
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION A: Core Technical Comparison Table
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left min-w-[00px]">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-4 border-b border-r border-slate-200 w-1/6">Parameter</th>
                <th class="p-4 border-b border-r border-slate-200 w-1/6">AS (Old Indian GAAP)</th>
                <th class="p-4 border-b border-r border-slate-200 w-1/6">Ind AS (Ind AS 116)</th>
                <th class="p-4 border-b border-r border-slate-200 w-1/6">IFRS (IFRS 16)</th>
                <th class="p-4 border-b border-r border-slate-200 w-1/6">US GAAP (ASC 842)</th>
                <th class="p-4 border-b border-slate-200 bg-blue-50 text-blue-900 w-1/6">Logic shift</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">Core philosophy</td>
                <td class="p-3">Focuses on whether risks and rewards are transferred; operating vs finance distinction is central.</td>
                <td class="p-3">Most leases go on balance sheet using right-of-use (ROU) model; lessee recognizes ROU asset and lease liability.</td>
                <td class="p-3">Same ROU model as Ind AS.</td>
                <td class="p-3">Most leases also go on balance sheet, but retains dual classification for lessee.</td>
                <td class="p-3 text-slate-600 bg-blue-50/50">From off-balance-sheet rental expense to asset + liability recognition.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">Lessee accounting model</td>
                <td class="p-3">Operating leases usually expensed straight-line; finance leases capitalized by substance.</td>
                <td class="p-3">Single lessee model for most leases.</td>
                <td class="p-3">Same single model.</td>
                <td class="p-3">Dual model: finance lease vs operating lease classification remains.</td>
                <td class="p-3 text-slate-600 bg-blue-50/50">From two-way classification to a more asset-liability-centric model.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">Recognition on balance sheet</td>
                <td class="p-3">Operating leases often stayed off balance sheet, except finance leases.</td>
                <td class="p-3">Recognize ROU asset and lease liability at commencement for most leases.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Recognize ROU asset and lease liability for most leases, but P&L differs by classification.</td>
                <td class="p-3 text-slate-600 bg-blue-50/50">Hidden commitments become visible on the balance sheet.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">Initial measurement</td>
                <td class="p-3">Finance lease assets/liab at lower of fair value and PV of minimum lease payments.</td>
                <td class="p-3">Lease liab = PV of payments; ROU asset = liab adjusted for prepayments, incentives, initial direct costs.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Same initial measurement logic, with classification affecting later expense pattern.</td>
                <td class="p-3 text-slate-600 bg-blue-50/50">From fixed capitalization rules to discounted PV of lease cash flows.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">Subsequent measurement (Lessee)</td>
                <td class="p-3">Operating rentals expensed straight-line; finance lease liability reduced over time.</td>
                <td class="p-3">Interest expense on liability + depreciation of ROU asset.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Finance: interest + amortization; Operating: straight-line lease expense with separate ROU/liab.</td>
                <td class="p-3 text-slate-600 bg-blue-50/50">Expense recognition depends on economic use of right-to-use.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">P&L pattern</td>
                <td class="p-3">Straight-line rent for operating, front-loaded interest for finance leases.</td>
                <td class="p-3">Front-loaded total expense due to interest + depreciation, except short-term/low-value relief.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Operating lease expense usually straight-line; finance lease expense front-loaded.</td>
                <td class="p-3 text-slate-600 bg-blue-50/50">Timing of expense is much more explicit and economically linked.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">Exemptions (Short-term & Low-value)</td>
                <td class="p-3">Limited comparable old GAAP concept. Not central.</td>
                <td class="p-3">Short-term (12m or less) and low-value assets may be expensed instead of capitalized.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Similar short-term exemption. No equivalent broad low-value exemption.</td>
                <td class="p-3 text-slate-600 bg-blue-50/50">Removes immaterial leases from balance sheet to reduce noise.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">Lease term</td>
                <td class="p-3">Based on contract/enforceable period, but less formalized.</td>
                <td class="p-3">Includes non-cancellable period + extension/termination options if reasonably certain.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Similar "reasonably certain" framework.</td>
                <td class="p-3 text-slate-600 bg-blue-50/50">Forces analysts to model options, not just legal minimum term.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">Variable payments & Index-linked</td>
                <td class="p-3">Less structured. Not explicitly modeled.</td>
                <td class="p-3">Included in liab only if based on index/rate or fixed in substance. Remeasured when index changes.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">For operating leases, liab generally not remeasured for CPI changes (expensed as incurred).</td>
                <td class="p-3 text-slate-600 bg-blue-50/50">Variable economics separated; Key difference between IFRS & US GAAP.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">Lease modifications</td>
                <td class="p-3">Less formalized.</td>
                <td class="p-3">Depends on whether new lease or reassessment is triggered.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Similar, but classification effects under US GAAP can differ.</td>
                <td class="p-3 text-slate-600 bg-blue-50/50">Focus shift from form to reassessment of lease economics.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">Lessor accounting</td>
                <td class="p-3">Generally mirrors transfer of risks and rewards.</td>
                <td class="p-3">Lessor keeps classification model: finance vs operating lease.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Same broad lessor model.</td>
                <td class="p-3 text-slate-600 bg-blue-50/50">Lessee changed dramatically; lessor changed less.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">Sale & leaseback</td>
                <td class="p-3">Limited older guidance; substance over form.</td>
                <td class="p-3">Specific accounting; gains recognized only to extent of transferred rights.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Similar, but detailed US guidance may differ in form.</td>
                <td class="p-3 text-slate-600 bg-blue-50/50">Transactions judged on control transfer and retained rights.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full mb-8">
        <div class="bg-amber-600 text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-amber-300 flex justify-between items-center flex-wrap gap-2">
          <span>SECTION B: Transaction Fact Pattern (EDITABLE)</span>
        </div>
        <div class="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-amber-50">
          <div>
            <label class="block text-sm font-bold text-slate-700 mb-1">Company</label>
            <div class="text-slate-800 bg-white p-2 border border-slate-200 rounded">Apex Retail Systems Ltd.</div>
          </div>
          <div>
            <label class="block text-sm font-bold text-slate-700 mb-1">Asset leased</label>
            <div class="text-slate-800 bg-white p-2 border border-slate-200 rounded">Office and distribution warehouse</div>
          </div>
          
          <div>
            <label class="block text-sm font-bold text-slate-700 mb-1">Annual Fixed Lease Payment ( Cr)</label>
            <input type="number" id="inp-pmt" value="12" class="w-full p-2 border border-slate-300 rounded bg-white text-slate-800 focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
          </div>
          <div>
            <label class="block text-sm font-bold text-slate-700 mb-1">Lease Term (Years)</label>
            <input type="number" id="inp-term" value="5" class="w-full p-2 border border-slate-300 rounded bg-white text-slate-800 focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
          </div>
          <div>
            <label class="block text-sm font-bold text-slate-700 mb-1">Incremental Borrowing Rate (%)</label>
            <input type="number" id="inp-rate" value="10" step="0.1" class="w-full p-2 border border-slate-300 rounded bg-white text-slate-800 focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
          </div>
          
          <div>
            <label class="block text-sm font-bold text-slate-700 mb-1">Base EBITDA before lease ( Cr)</label>
            <input type="number" id="inp-ebitda" value="80" class="w-full p-2 border border-slate-300 rounded bg-white text-slate-800 focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
          </div>
          <div>
            <label class="block text-sm font-bold text-slate-700 mb-1">Total Revenue ( Cr)</label>
            <input type="number" id="inp-rev" value="200" class="w-full p-2 border border-slate-300 rounded bg-white text-slate-800 focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
          </div>
          <div>
            <label class="block text-sm font-bold text-slate-700 mb-1">Total Assets (before lease) ( Cr)</label>
            <input type="number" id="inp-assets" value="500" class="w-full p-2 border border-slate-300 rounded bg-white text-slate-800 focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
          </div>
          <div>
            <label class="block text-sm font-bold text-slate-700 mb-1">Total Equity (before lease) ( Cr)</label>
            <input type="number" id="inp-equity" value="300" class="w-full p-2 border border-slate-300 rounded bg-white text-slate-800 focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
          </div>
          
          <div class="col-span-1 md:col-span-2 lg:col-span-3">
             <label class="block text-sm font-bold text-slate-700 mb-1">Valuation (Generated internally)</label>
             <div class="text-slate-800 bg-white p-2 border border-slate-200 rounded font-medium text-emerald-700">Present value of <span id="v-term">5</span> annual year-end payments at <span id="v-rate">10</span>% = <span id="v-pv">45.47 Cr</span>.</div>
          </div>
        </div>
      </section>

      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION D: Side-by-Side Impact Table (Year 1)
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Framework</th>
                <th class="p-3 border-b border-slate-200 text-right">ROU Asset (Initial)</th>
                <th class="p-3 border-b border-slate-200 text-right">Lease Liab (Initial)</th>
                <th class="p-3 border-b border-slate-200 text-right text-teal-800">Lease Expense / P&L Impact</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 font-mono">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold font-sans">AS</td>
                <td class="p-3 text-right text-slate-500">Nil</td>
                <td class="p-3 text-right text-slate-500">Nil</td>
                <td class="p-3 text-right font-semibold text-teal-700" id="d-exp-as">12.00 Cr rent expense<br><span class="text-xs font-normal text-slate-500">(Off-balance-sheet)</span></td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold font-sans">Ind AS 116</td>
                <td class="p-3 text-right" id="d-rou-in">45.47 Cr</td>
                <td class="p-3 text-right" id="d-liab-in">45.47 Cr</td>
                <td class="p-3 text-right font-semibold text-teal-700" id="d-exp-in">9.09 Cr (Dep) + 4.55 Cr (Int) =<br>13.64 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold font-sans">IFRS 16</td>
                <td class="p-3 text-right" id="d-rou-if">45.47 Cr</td>
                <td class="p-3 text-right" id="d-liab-if">45.47 Cr</td>
                <td class="p-3 text-right font-semibold text-teal-700" id="d-exp-if">9.09 Cr (Dep) + 4.55 Cr (Int) =<br>13.64 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold font-sans">US GAAP (Op. Lease)</td>
                <td class="p-3 text-right" id="d-rou-us">45.47 Cr</td>
                <td class="p-3 text-right" id="d-liab-us">45.47 Cr</td>
                <td class="p-3 text-right font-semibold text-teal-700" id="d-exp-us">12.00 Cr straight-line operating<br>lease expense</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          Lease Amortization Schedule (Year by Year)
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-right">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200 text-center">Year</th>
                <th class="p-3 border-b border-slate-200">Beginning Liability</th>
                <th class="p-3 border-b border-slate-200 text-red-600">Interest Exp</th>
                <th class="p-3 border-b border-slate-200">Lease Payment</th>
                <th class="p-3 border-b border-slate-200">Principal Repaid</th>
                <th class="p-3 border-b border-slate-200 text-indigo-700">Ending Liability</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 font-mono" id="amort-tbody">
              <!-- Dynamically generated -->
            </tbody>
          </table>
        </div>
      </section>
`;
fs.appendFileSync('lease.html', tables);
console.log('Appended tables 1');
