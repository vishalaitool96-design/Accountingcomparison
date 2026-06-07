const fs = require('fs');

const sectionJ_to_M = `
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
                <th class="p-3 border-b border-slate-200">Distortion Type</th>
                <th class="p-3 border-b border-slate-200">Duration</th>
                <th class="p-3 border-b border-slate-200">Correction Method</th>
                <th class="p-3 border-b border-slate-200">Example</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Effective Tax Rate (ETR)</td>
                <td class="p-3">Transient spike/dip</td>
                <td class="p-3">One quarter/year</td>
                <td class="p-3">Normalise by removing one-off tax settlements or rate changes.</td>
                <td class="p-3">Strip out prior year adjustment.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Net Income</td>
                <td class="p-3">Overstated (if DTA recognised aggressively)</td>
                <td class="p-3">Reverses when DTA written off</td>
                <td class="p-3">Exclude unrecognised DTA benefit from adjusted earnings.</td>
                <td class="p-3">Add back valuation allowance increase.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">ROE</td>
                <td class="p-3">Understated (if large DTL)</td>
                <td class="p-3">Life of asset</td>
                <td class="p-3">Add back DTL to equity for return calc.</td>
                <td class="p-3">Equity + DTL for economic ROE.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Cash tax vs book tax</td>
                <td class="p-3">Persistent gap</td>
                <td class="p-3">Indefinite</td>
                <td class="p-3">Focus on cash tax paid for liquidity.</td>
                <td class="p-3">Use cash tax / operating CF.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION K -->
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
                <th class="p-3 border-b border-slate-200">What Analyst Should Do</th>
                <th class="p-3 border-b border-slate-200">Correct Interpretation</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Effective Tax Rate</td>
                <td class="p-3 text-emerald-600 font-bold">18% (vs 25% statutory)</td>
                <td class="p-3">Identify drivers: permanent differences, DTA realisation, or one-offs.</td>
                <td class="p-3">May be lower quality if driven by aggressive DTA recognition.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Deferred Tax Liability / Total Assets</td>
                <td class="p-3 font-bold">5%</td>
                <td class="p-3">Compare to capex intensity and tax depreciation rates.</td>
                <td class="p-3">High DTL often means accelerated tax benefits – positive for cash flow.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Valuation Allowance / DTA</td>
                <td class="p-3 text-red-600 font-bold">40%</td>
                <td class="p-3">Benchmark against peer write-off history.</td>
                <td class="p-3">High ratio suggests management lacks confidence in future profits.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Cash Tax / Book Tax</td>
                <td class="p-3 text-teal-600 font-bold">0.6x</td>
                <td class="p-3">Low ratio indicates large timing differences (favourable).</td>
                <td class="p-3">Sustainable cash advantage if timing differences are long-dated.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="p-4 bg-blue-50 border-t border-slate-200 text-sm text-blue-900 italic">
          <strong>Intelligence Note:</strong> Across Ind AS, IFRS, and US GAAP, the same analytical normalisation applies – always recast deferred tax using balance sheet approach, and never confuse deferred tax expense with cash tax paid.
        </div>
      </section>

      <!-- SECTION L -->
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION L: Analyst Concerns & Answers
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Analyst Question</th>
                <th class="p-3 border-b border-slate-200">Concern</th>
                <th class="p-3 border-b border-slate-200">Answer</th>
                <th class="p-3 border-b border-slate-200">Evidence</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Is the low ETR real earnings quality?</td>
                <td class="p-3">Risk of one-off or aggressive DTA.</td>
                <td class="p-3">Not always; check reconciliation of statutory to actual rate.</td>
                <td class="p-3">Permanent differences (e.g., exempt income) are high quality.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Why is DTA growing but no valuation allowance?</td>
                <td class="p-3">Management too optimistic.</td>
                <td class="p-3">Requires judgement; compare forecast accuracy over 3-5 years.</td>
                <td class="p-3">Historical misses &rarr; amber flag.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Do I treat DTL as debt?</td>
                <td class="p-3">Leverage distortion.</td>
                <td class="p-3">No – DTL is future tax, not contractual obligation to lender.</td>
                <td class="p-3">But DTL reduces free cash flow when it reverses.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">How do I compare across standards?</td>
                <td class="p-3">AS vs Ind AS vs US GAAP.</td>
                <td class="p-3">Reconstruct DTA/DTL using balance sheet approach for all.</td>
                <td class="p-3">Ignore AS presentation; normalise to Ind AS/IFRS.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION M -->
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION M: Investor Perception Analysis
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Investor Type</th>
                <th class="p-3 border-b border-slate-200">What They See</th>
                <th class="p-3 border-b border-slate-200">Likely Reaction</th>
                <th class="p-3 border-b border-slate-200">Sophisticated Response</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Retail</td>
                <td class="p-3">Large DTA &rarr; "future tax benefit"</td>
                <td class="p-3 text-amber-600">Over-optimistic.</td>
                <td class="p-3">DTA is worthless without profits to utilise it.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Value</td>
                <td class="p-3">Low ETR &rarr; "higher earnings"</td>
                <td class="p-3 text-red-600">May overpay if unsustainable.</td>
                <td class="p-3">Normalise ETR to statutory rate for valuation.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Institutional Long-Only</td>
                <td class="p-3">Valuation allowance volatility</td>
                <td class="p-3 text-red-600">Negative – signals earnings uncertainty.</td>
                <td class="p-3">Prefer stable cash tax over volatile deferred tax.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Credit / Lenders</td>
                <td class="p-3">DTL as quasi-liability</td>
                <td class="p-3 text-amber-600">May tighten covenants.</td>
                <td class="p-3">Exclude DTL from debt; focus on cash tax payable.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">PE / VC</td>
                <td class="p-3">Unrecognised DTAs from losses</td>
                <td class="p-3 text-teal-600">See tax asset as latent value.</td>
                <td class="p-3">Model probability of utilisation before ascribing value.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
`;

fs.appendFileSync('deferred-tax.html', sectionJ_to_M);
console.log('section J to M done');
