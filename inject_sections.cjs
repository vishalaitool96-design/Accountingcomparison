const fs = require('fs');

const path = 'lease.html';
const content = documentHTML => {
  return documentHTML.replace(
    '<div class="mt-4 text-center pb-4 shrink-0 border-t border-slate-200">',
    `
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
                <td class="p-3 font-semibold text-slate-800">EBITDA jumps after adoption</td>
                <td class="p-3">Rent expense replaced by depreciation below EBITDA (Ind AS/IFRS)</td>
                <td class="p-3">EBITDA improvement is partly presentation-driven, not economic</td>
                <td class="p-3 text-emerald-700">Normalize EBITDA across standards before valuing</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Debt/equity rises sharply</td>
                <td class="p-3">Lease liability now visible</td>
                <td class="p-3">Leverage was always there; now it is measured properly</td>
                <td class="p-3 text-emerald-700">Re-cut leverage using lease-adjusted metrics</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Asset base expands</td>
                <td class="p-3">ROU asset replaces off-BS lease usage</td>
                <td class="p-3">ROA/Asset turnover may look weaker due to larger denominator</td>
                <td class="p-3 text-emerald-700">Compare returns on a lease-adjusted basis</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Interest expense rises</td>
                <td class="p-3">Discounting brings financing element into P&L</td>
                <td class="p-3">Financing cost is now explicit</td>
                <td class="p-3 text-emerald-700">Separate operating performance from financing</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Disclosure volume increases</td>
                <td class="p-3">More judgment and maturity data available</td>
                <td class="p-3">Better transparency, but also more management judgment</td>
                <td class="p-3 text-emerald-700">Read lease notes carefully for hidden option risk</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

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
                <td class="p-3 font-semibold text-slate-800">EBITDA</td>
                <td class="p-3">Permanent level shift</td>
                <td class="p-3">Lease term</td>
                <td class="p-3">Add back lease dep/int and compare with pre-adoption rent</td>
                <td class="p-3">Rep. EBITDA +12 Cr</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Debt/Equity</td>
                <td class="p-3">Permanent</td>
                <td class="p-3">Lease term</td>
                <td class="p-3">Add lease liability to leverage metrics</td>
                <td class="p-3">D/E rises mechanically</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">ROA</td>
                <td class="p-3">Permanent</td>
                <td class="p-3">Lease term</td>
                <td class="p-3">Include ROU asset in denominator</td>
                <td class="p-3">ROA declines mechanically</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Interest Coverage</td>
                <td class="p-3">Permanent / Manageable</td>
                <td class="p-3">Lease term</td>
                <td class="p-3">Include lease interest in finance cost</td>
                <td class="p-3">Coverage weaker than old</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Operating CF</td>
                <td class="p-3">Classification-based</td>
                <td class="p-3">Ongoing</td>
                <td class="p-3">Aggregate principal + interest CFs for true cash generation</td>
                <td class="p-3">Total CF identical</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION K: Ratio Interpretation Guide
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Ratio</th>
                <th class="p-3 border-b border-slate-200">Reported Value</th>
                <th class="p-3 border-b border-slate-200">What analyst should do</th>
                <th class="p-3 border-b border-slate-200">Correct interpretation</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">EBITDA Margin</td>
                <td class="p-3 text-teal-600 font-bold">Higher</td>
                <td class="p-3">Recast old rent into depreciation and interest</td>
                <td class="p-3">Economic margin has not truly improved</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Debt/Equity</td>
                <td class="p-3 text-red-600 font-bold">Higher</td>
                <td class="p-3">Include lease liability in all leverage ratios</td>
                <td class="p-3">Leverage is more truthful, not worse quality</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">ROA</td>
                <td class="p-3 text-amber-600 font-bold">Lower</td>
                <td class="p-3">Add ROU asset into denominator consistently</td>
                <td class="p-3">Returns comparable only after adjustment</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Interest Coverage</td>
                <td class="p-3 text-amber-600 font-bold">Lower</td>
                <td class="p-3">Treat lease interest as real finance cost</td>
                <td class="p-3">True coverage weaker than pre-adoption optics</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Lease-adjusted EBITDA</td>
                <td class="p-3 text-indigo-600 font-bold">Stable</td>
                <td class="p-3">Use for comparables</td>
                <td class="p-3">Best metric for peer comparison</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="p-4 bg-blue-50 border-t border-slate-200 text-sm text-blue-900 italic">
          <strong>Intelligence Note:</strong> Across Ind AS, IFRS and US GAAP, the same adjustment logic applies for analytical normalization; you do not need separate valuation frameworks for each standard.
        </div>
      </section>

      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION L: Analyst Concerns & Answers
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Analyst question</th>
                <th class="p-3 border-b border-slate-200">Concern</th>
                <th class="p-3 border-b border-slate-200">Answer</th>
                <th class="p-3 border-b border-slate-200">Evidence</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Did business get more leveraged?</td>
                <td class="p-3">Fear of deterioration</td>
                <td class="p-3">No, leverage was already there economically; it is just visible now</td>
                <td class="p-3">Lease liab and ROU recognized on BS</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Is EBITDA growth real?</td>
                <td class="p-3">Worry about optics</td>
                <td class="p-3">Often partly mechanical from rent reclassification</td>
                <td class="p-3">Old rent moved below EBITDA (Ind AS/IFRS)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Are IFRS and US GAAP comparable?</td>
                <td class="p-3">Global comp issue</td>
                <td class="p-3">Broadly yes, but US GAAP can differ on op-lease expense and CPI</td>
                <td class="p-3">Single model vs US GAAP dual model</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Is lease liability equal to debt?</td>
                <td class="p-3">Covenant worry</td>
                <td class="p-3">Economically similar, though not always contractually the same</td>
                <td class="p-3">Discounted PV of unavoidable payments</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">What matters most for valuation?</td>
                <td class="p-3">Seeking right metric</td>
                <td class="p-3">Normalize EBITDA, debt, and cash flows on lease-adjusted basis</td>
                <td class="p-3">Lease-adjusted valuation is cleanest approach</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION M: Investor Perception Analysis
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Investor Type</th>
                <th class="p-3 border-b border-slate-200">What they see</th>
                <th class="p-3 border-b border-slate-200">Likely reaction</th>
                <th class="p-3 border-b border-slate-200">Sophisticated response</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Retail</td>
                <td class="p-3">Higher assets/liabs, lower PAT</td>
                <td class="p-3 text-red-600">Confused or negative</td>
                <td class="p-3">Recognize capitalization is an accounting reset, not deterioration</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Value</td>
                <td class="p-3">Lower ROA and higher leverage</td>
                <td class="p-3 text-amber-600">Think business is riskier</td>
                <td class="p-3">Rebuild ROIC on lease-adjusted basis</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Institutional Long-Only</td>
                <td class="p-3">Better comparability/disclosure</td>
                <td class="p-3 text-teal-600">Usually positive</td>
                <td class="p-3">Use lease-adjusted EV/EBITDA and leverage</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Credit/Lenders</td>
                <td class="p-3">Higher debt metrics</td>
                <td class="p-3 text-amber-600">More cautious</td>
                <td class="p-3">Incorporate lease liability into coverage tests</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">PE / VC</td>
                <td class="p-3">Better transparency of fixed obligations</td>
                <td class="p-3 text-teal-600">Positive, with diligence</td>
                <td class="p-3">Underwrite through cash flow, not GAAP optics</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION N: Reporting Signals Decoder
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Management Action</th>
                <th class="p-3 border-b border-slate-200">Signal</th>
                <th class="p-3 border-b border-slate-200">What It Really Means</th>
                <th class="p-3 border-b border-slate-200">Your Move</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Emphasizes "strong EBITDA growth" after adoption</td>
                <td class="p-3 text-amber-600 font-bold">Optics</td>
                <td class="p-3">Rent below EBITDA can inflate margins</td>
                <td class="p-3">Check lease-adj EBITDA</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Avoids disclosing lease maturity table clearly</td>
                <td class="p-3 text-red-600 font-bold">Opacity</td>
                <td class="p-3">Hidden extension-option or payment escalation risk</td>
                <td class="p-3">Request full lease note</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Explains index-linked lease sensitivity in detail</td>
                <td class="p-3 text-teal-600 font-bold">Governance</td>
                <td class="p-3">Management understands day-two volatility</td>
                <td class="p-3">Positive sign</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Presents lease-adj leverage voluntarily</td>
                <td class="p-3 text-teal-600 font-bold">Transparent</td>
                <td class="p-3">Comfortable with economic reality</td>
                <td class="p-3">Green flag</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col p-6">
        <div class="border-l-4 border-[#1a365d] pl-4 mb-4">
          <h3 class="text-lg font-bold text-[#1a365d] uppercase tracking-wide">SECTION O: Premium Intelligence Narrative</h3>
        </div>
        <div class="text-sm text-slate-700 space-y-4">
          <p><strong>Question:</strong> "Why did lease adoption make EBITDA look better while leverage also increased?"</p>
          <p><strong>Average Analyst Answer:</strong> "Because rent moved below EBITDA and the lease is now on balance sheet."</p>
          <p><strong>PREMIUM Analyst Answer:</strong> "The adoption created a presentation shift, not an economic windfall. Under AS, rent sat fully above EBITDA and the lease was mostly invisible; under Ind AS/IFRS, rent is decomposed into depreciation and interest, which lifts EBITDA while increasing reported debt. Under US GAAP, the balance sheet looks similar, but operating lease expense can still be shown more simply in P&L. The correct move is to build a lease-adjusted EBITDA and leverage bridge before comparing margins or valuation multiples. For peer comps, only compare companies using the same lease policy view. The key signal is not that EBITDA improved, but that the company's fixed obligations were always there; now the market can finally see them."</p>
        </div>
      </section>

      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION P: Red Flags vs Green Flags Matrix
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200 w-1/2">Scenario</th>
                <th class="p-3 border-b border-slate-200">Flag</th>
                <th class="p-3 border-b border-slate-200">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50 border-l-4 border-l-red-500">
                <td class="p-3 font-semibold text-slate-800">Large lease liabilities with weak disclosure</td>
                <td class="p-3 text-red-600 font-bold">RED</td>
                <td class="p-3">Stress test lease terms</td>
              </tr>
              <tr class="hover:bg-slate-50 border-l-4 border-l-emerald-500">
                <td class="p-3 font-semibold text-slate-800">Clear maturity table and option analysis</td>
                <td class="p-3 text-emerald-600 font-bold">GREEN</td>
                <td class="p-3">Use with confidence</td>
              </tr>
              <tr class="hover:bg-slate-50 border-l-4 border-l-red-500">
                <td class="p-3 font-semibold text-slate-800">Rising EBITDA with flat cash flow</td>
                <td class="p-3 text-red-600 font-bold">RED</td>
                <td class="p-3">Normalize lease-adjusted EBITDA</td>
              </tr>
              <tr class="hover:bg-slate-50 border-l-4 border-l-amber-500">
                <td class="p-3 font-semibold text-slate-800">Frequent reassessment of lease term</td>
                <td class="p-3 text-amber-600 font-bold">YELLOW</td>
                <td class="p-3">Track management bias (judgment-heavy)</td>
              </tr>
              <tr class="hover:bg-slate-50 border-l-4 border-l-amber-500">
                <td class="p-3 font-semibold text-slate-800">Heavy use of short-term leases</td>
                <td class="p-3 text-amber-600 font-bold">YELLOW</td>
                <td class="p-3">Check materiality (off-BS strategy)</td>
              </tr>
              <tr class="hover:bg-slate-50 border-l-4 border-l-red-500">
                <td class="p-3 font-semibold text-slate-800">Lease liability rising faster than revenue</td>
                <td class="p-3 text-red-600 font-bold">RED</td>
                <td class="p-3">Reassess risk (business becoming more fixed-cost)</td>
              </tr>
              <tr class="hover:bg-slate-50 border-l-4 border-l-emerald-500">
                <td class="p-3 font-semibold text-slate-800">Index-linked leases clearly explained</td>
                <td class="p-3 text-emerald-600 font-bold">GREEN</td>
                <td class="p-3">Positive governance signal</td>
              </tr>
              <tr class="hover:bg-slate-50 border-l-4 border-l-amber-500">
                <td class="p-3 font-semibold text-slate-800">No bridge from old rent to new lease cost</td>
                <td class="p-3 text-amber-600 font-bold">YELLOW</td>
                <td class="p-3">Build your own bridge</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col p-6 mb-4">
        <div class="border-l-4 border-teal-600 pl-4 mb-4">
          <h3 class="text-lg font-bold text-[#1a365d] uppercase tracking-wide">SECTION Q: Final Intelligence Summary</h3>
        </div>
        <div class="text-sm text-slate-700 space-y-4">
          <p class="font-bold text-lg text-slate-800 pb-2 border-b border-slate-100">The Sophistication Hierarchy</p>
          <ul class="space-y-3">
            <li><strong>Level 1 (Retail):</strong> "EBITDA jumped, so the business got better." &rarr; <span class="text-red-600">Wrong action</span></li>
            <li><strong>Level 2 (Basic):</strong> "Lease accounting changed, so I'll wait and see." &rarr; <span class="text-amber-600">Misses the normalization</span></li>
            <li><strong>Level 3 (YOU):</strong> Lease economics were always there, but AS hid them. Normalize leverage and EBITDA before valuing the business.</li>
          </ul>
          <div class="bg-teal-50 p-4 rounded text-teal-900 border border-teal-100 mt-4">
            <strong>Your Edge:</strong> You standardize EBITDA across peers, adjust for index-linked lease remeasurement risk, and do not confuse accounting optics with cash economics.
          </div>
        </div>
      </section>
      
      <div class="mt-4 text-center pb-4 shrink-0 border-t border-slate-200">`
  );
};

let fileStr = fs.readFileSync(path, 'utf8');
fileStr = content(fileStr);
fs.writeFileSync(path, fileStr);
console.log('Appended structural tables to lease page!');
