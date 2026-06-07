const fs = require('fs');

const sectionA = `
      <!-- SECTION A -->
      <section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION A: Core Technical Comparison Table
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200 w-1/6">Parameter</th>
                <th class="p-3 border-b border-slate-200 w-1/6">AS (Old Indian GAAP)</th>
                <th class="p-3 border-b border-slate-200 w-1/6">Ind AS (Ind AS 12)</th>
                <th class="p-3 border-b border-slate-200 w-1/6">IFRS (IAS 12)</th>
                <th class="p-3 border-b border-slate-200 w-1/6">US GAAP (ASC 740)</th>
                <th class="p-3 border-b border-slate-200 w-1/6">Logic Shift</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Core philosophy</td>
                <td class="p-3">Income statement approach; deferred tax is an adjunct to tax expense.</td>
                <td class="p-3">Balance sheet approach; deferred tax = temporary differences between carrying amount and tax base.</td>
                <td class="p-3">Same balance sheet approach as Ind AS.</td>
                <td class="p-3">Same balance sheet approach, but with specific exceptions (e.g., outside basis differences).</td>
                <td class="p-3 text-emerald-700">From timing of expense recognition to full measurement of future tax consequences of assets/liabilities.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Recognition of deferred tax</td>
                <td class="p-3">Recognised only for timing differences that reverse in future periods.</td>
                <td class="p-3">Recognised for all temporary differences (including those from initial recognition exceptions).</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Similar, but includes an exception for leveraged leases and certain outside basis differences.</td>
                <td class="p-3 text-emerald-700">Broader scope – includes more items like revaluations, business combinations, and ROU assets.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Measurement</td>
                <td class="p-3">Using enacted tax rates (substantively enacted not always clearly defined).</td>
                <td class="p-3">Using enacted or substantively enacted tax rates expected to apply when temporary difference reverses.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Uses enacted tax rates (substantively enacted not permitted).</td>
                <td class="p-3 text-emerald-700">Ind AS/IFRS allow slightly forward-looking rates; US GAAP is stricter.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Recognition of deferred tax assets (DTAs)</td>
                <td class="p-3">Recognised only if virtual certainty of future profits (for carry-forward losses).</td>
                <td class="p-3">Recognised to extent probable that taxable profit available.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Recognised if more likely than not (>50%) that benefit will be realised.</td>
                <td class="p-3 text-emerald-700">US GAAP threshold is lower (more likely than not) vs Ind AS/IFRS (probable = higher threshold).</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Re-assessment of DTAs</td>
                <td class="p-3">Limited re-assessment; not systematically required each period.</td>
                <td class="p-3">Re-assessed at each reporting date.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Same, with valuation allowance adjustments each period.</td>
                <td class="p-3 text-emerald-700">Dynamic adjustment reflects changing profit forecasts.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Tax rate changes</td>
                <td class="p-3">Effect recognised in P&L in period of change.</td>
                <td class="p-3">Effect recognised in P&L or OCI depending on where original item was recognised.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Same principle.</td>
                <td class="p-3 text-emerald-700">More precise matching of tax effect to underlying transaction.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Business combinations</td>
                <td class="p-3">Deferred tax on asset/liability differences recognised but not fully integrated.</td>
                <td class="p-3">Recognise deferred tax on all temporary differences in acquisition accounting; affects goodwill.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Similar, with additional detailed guidance on tax-deductible goodwill.</td>
                <td class="p-3 text-emerald-700">Acquisition accounting now reflects true tax position of acquired entity.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Presentation on balance sheet</td>
                <td class="p-3">Current/non-current classification based on nature of timing difference.</td>
                <td class="p-3">Always non-current; no offset between different tax jurisdictions.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Can offset current and non-current if legally enforceable right and same jurisdiction.</td>
                <td class="p-3 text-emerald-700">Ind AS/IFRS more conservative (no netting across types).</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Intra-period allocation</td>
                <td class="p-3">Allocated to P&L only; no allocation to OCI or equity.</td>
                <td class="p-3">Allocated to P&L, OCI, or equity based on where original transaction was recognised.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Same.</td>
                <td class="p-3 text-emerald-700">Tax effect follows the item – critical for comprehensive income analysis.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Disclosures</td>
                <td class="p-3">Basic: breakdown of timing differences and rates.</td>
                <td class="p-3">Extensive: reconciliation of expected vs actual tax rate, unrecognised DTAs, expiry dates, etc.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Even more detailed: valuation allowance movements, uncertain tax positions tabular rollforward.</td>
                <td class="p-3 text-emerald-700">Ind AS/IFRS and US GAAP provide far greater transparency into tax risk.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Uncertain tax positions</td>
                <td class="p-3">No specific guidance; general provision concept.</td>
                <td class="p-3">No specific standard; use IFRIC 23 (recognition based on probable outcome).</td>
                <td class="p-3">Same IFRIC 23 guidance.</td>
                <td class="p-3">Detailed two-step: more likely than not to sustain &rarr; measurement at largest benefit >50% likely.</td>
                <td class="p-3 text-emerald-700">US GAAP most prescriptive; Ind AS/IFRS more principles-based.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="p-4 bg-teal-50 border-t border-slate-200 text-sm text-teal-900 font-medium">
          <strong>KEY INSIGHT:</strong> Old AS treats deferred tax as a timing allocation for P&L smoothing, while Ind AS, IFRS, and US GAAP force analysts to recognise that every balance sheet difference creates a future tax asset or liability that must be modelled explicitly.
        </div>
        <div class="p-4 bg-blue-50 border-t border-slate-200 text-sm text-blue-900 border-t border-white">
          <strong>Section note:</strong> For a typical depreciable asset with different book and tax rates, Ind AS, IFRS, and US GAAP produce the same balance sheet deferred tax liability, but US GAAP differs on valuation allowance thresholds and uncertain tax positions, while AS remains the least comparable due to its income-statement focus.
        </div>
      </section>
`;
fs.appendFileSync('deferred-tax.html', sectionA);
console.log('sectionA done');
