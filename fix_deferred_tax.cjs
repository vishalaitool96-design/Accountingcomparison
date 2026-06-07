const fs = require('fs');

let content = fs.readFileSync('deferred-tax.html', 'utf-8');

const replacement = `<section id="section-a" data-diagnostic="tracked" class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION A: Core Technical Comparison Table
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-100 text-slate-700">
              <tr>
                <th class="p-3 border-r border-slate-200 w-[16%]">Parameter</th>
                <th class="p-3 border-r border-slate-200 w-[16%]">AS (Old Indian GAAP)</th>
                <th class="p-3 border-r border-slate-200 w-[16%]">Ind AS (Ind AS 12)</th>
                <th class="p-3 border-r border-slate-200 w-[16%]">IFRS (IAS 12)</th>
                <th class="p-3 border-r border-slate-200 w-[16%]">US GAAP (ASC 740)</th>
                <th class="p-3 w-[16%]">Logic Shift</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">Core philosophy</td>
                <td class="p-3">Income statement approach; deferred tax is an adjunct to tax expense.</td>
                <td class="p-3">Balance sheet approach; deferred tax = temporary differences between carrying amount and tax base.</td>
                <td class="p-3">Same balance sheet approach as Ind AS.</td>
                <td class="p-3">Same balance sheet approach, but with specific exceptions (e.g., outside basis differences).</td>
                <td class="p-3 text-slate-600">From timing of expense recognition to full measurement of future tax consequences of assets/liabilities.</td>
              </tr>
              <tr class="bg-slate-50 hover:bg-slate-100">
                <td class="p-3 font-bold">Recognition of deferred tax</td>
                <td class="p-3">Recognised only for timing differences that reverse in future periods.</td>
                <td class="p-3">Recognised for all temporary differences (including those from initial recognition exceptions).</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Similar, but includes an exception for leveraged leases and certain outside basis differences.</td>
                <td class="p-3 text-slate-600">Broader scope – includes more items like revaluations, business combinations, and ROU assets.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">Measurement</td>
                <td class="p-3">Using enacted tax rates (substantively enacted not always clearly defined).</td>
                <td class="p-3">Using enacted or substantively enacted tax rates expected to apply when temporary difference reverses.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Uses enacted tax rates (substantively enacted not permitted).</td>
                <td class="p-3 text-slate-600">Ind AS/IFRS allow slightly forward-looking rates; US GAAP is stricter.</td>
              </tr>
              <tr class="bg-slate-50 hover:bg-slate-100">
                <td class="p-3 font-bold">Recognition of deferred tax assets (DTAs)</td>
                <td class="p-3">Recognised only if virtual certainty of future profits (for carry-forward losses).</td>
                <td class="p-3">Recognised to extent probable that taxable profit available.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Recognised if more likely than not (>50%) that benefit will be realised.</td>
                <td class="p-3 text-slate-600">US GAAP threshold is lower (more likely than not) vs Ind AS/IFRS (probable = higher threshold).</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">Re-assessment of DTAs</td>
                <td class="p-3">Limited re-assessment; not systematically required each period.</td>
                <td class="p-3">Re-assessed at each reporting date.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Same, with valuation allowance adjustments each period.</td>
                <td class="p-3 text-slate-600">Dynamic adjustment reflects changing profit forecasts.</td>
              </tr>
              <tr class="bg-slate-50 hover:bg-slate-100">
                <td class="p-3 font-bold">Tax rate changes</td>
                <td class="p-3">Effect recognised in P&amp;L in period of change.</td>
                <td class="p-3">Effect recognised in P&amp;L or OCI depending on where original item was recognised.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Same principle.</td>
                <td class="p-3 text-slate-600">More precise matching of tax effect to underlying transaction.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">Business combinations</td>
                <td class="p-3">Deferred tax on asset/liability differences recognised but not fully integrated.</td>
                <td class="p-3">Recognise deferred tax on all temporary differences in acquisition accounting; affects goodwill.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Similar, with additional detailed guidance on tax-deductible goodwill.</td>
                <td class="p-3 text-slate-600">Acquisition accounting now reflects true tax position of acquired entity.</td>
              </tr>
              <tr class="bg-slate-50 hover:bg-slate-100">
                <td class="p-3 font-bold">Presentation on balance sheet</td>
                <td class="p-3">Current/non-current classification based on nature of timing difference.</td>
                <td class="p-3">Always non-current; no offset between different tax jurisdictions.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Can offset current and non-current if legally enforceable right and same jurisdiction.</td>
                <td class="p-3 text-slate-600">Ind AS/IFRS more conservative (no netting across types).</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">Intra-period allocation</td>
                <td class="p-3">Allocated to P&amp;L only; no allocation to OCI or equity.</td>
                <td class="p-3">Allocated to P&amp;L, OCI, or equity based on where original transaction was recognised.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Same.</td>
                <td class="p-3 text-slate-600">Tax effect follows the item – critical for comprehensive income analysis.</td>
              </tr>
              <tr class="bg-slate-50 hover:bg-slate-100">
                <td class="p-3 font-bold">Disclosures</td>
                <td class="p-3">Basic: breakdown of timing differences and rates.</td>
                <td class="p-3">Extensive: reconciliation of expected vs actual tax rate, unrecognised DTAs, expiry dates, etc.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Even more detailed: valuation allowance movements, uncertain tax positions tabular rollforward.</td>
                <td class="p-3 text-slate-600">Ind AS/IFRS and US GAAP provide far greater transparency into tax risk.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">Uncertain tax positions</td>
                <td class="p-3">No specific guidance; general provision concept.</td>
                <td class="p-3">No specific standard; use IFRIC 23 (recognition based on probable outcome).</td>
                <td class="p-3">Same IFRIC 23 guidance.</td>
                <td class="p-3">Detailed two-step: more likely than not to sustain → measurement at largest benefit >50% likely.</td>
                <td class="p-3 text-slate-600">US GAAP most prescriptive; Ind AS/ IFRS more principles-based.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>`;

const sectionAStart = Array.from(content.matchAll(/<!-- SECTION A -->|<section[^>]*>[\s\S]*?SECTION A:/g))[0];
if (sectionAStart) {
   const before = content.substring(0, sectionAStart.index);
   const parts = content.substring(sectionAStart.index);
   const endMatch = parts.indexOf('<!-- SECTION B -->');
   if (endMatch !== -1) {
      const remaining = parts.substring(endMatch);
      content = before + '\n<!-- SECTION A -->\n' + replacement + '\n      ' + remaining;
   } else {
     const sectionBStart = parts.match(/<section[^>]*>[\s\S]*?SECTION B:/);
     if (sectionBStart) {
       const sectionBIndex = sectionBStart.index;
       content = before + '\n<!-- SECTION A -->\n' + replacement + '\n      ' + parts.substring(sectionBIndex);
     }
   }
}

fs.writeFileSync('deferred-tax.html', content);
