const fs = require('fs');
const html = `
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
                <th class="p-3 border-b border-slate-200">Reported value (Ind AS)</th>
                <th class="p-3 border-b border-slate-200">What analyst should do</th>
                <th class="p-3 border-b border-slate-200">Correct interpretation</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Debt/Equity</td>
                <td class="p-3 text-red-600 font-bold val-new-de">0.79</td>
                <td class="p-3">Include derivative liabilities and ECL allowances</td>
                <td class="p-3">Leverage is more truthful, not necessarily worse</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Interest coverage</td>
                <td class="p-3 font-bold val-new-ic">5.88x</td>
                <td class="p-3">Separate derivative fair value changes from core interest</td>
                <td class="p-3">Real coverage may be higher if swap is economic hedge</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">ROA</td>
                <td class="p-3 text-amber-600 font-bold val-new-roa">11.7%</td>
                <td class="p-3">Add back ECL and derivative losses to profit, adjust assets</td>
                <td class="p-3">Operating returns are higher than reported</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">ROE</td>
                <td class="p-3 text-amber-600 font-bold val-new-roe">22.6%</td>
                <td class="p-3">Compare on adjusted earnings (exclude non-operating FV changes)</td>
                <td class="p-3">Volatility reflects accounting, not business deterioration</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">EPS</td>
                <td class="p-3 font-bold val-new-eps">2.93</td>
                <td class="p-3">Strip out non-operating fair value effects</td>
                <td class="p-3">Underlying EPS closer to AS but with credit cost</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="p-4 bg-blue-50 border-t border-slate-200 text-sm text-blue-900 italic">
          <strong>Intelligence Note:</strong> Across Ind AS, IFRS, and US GAAP, the same analytical normalization applies &ndash; always recast financial instruments using fair value for derivatives and ECL for receivables, and never confuse fair value volatility with core operating performance.
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
                <th class="p-3 border-b border-slate-200">Analyst question</th>
                <th class="p-3 border-b border-slate-200">Concern</th>
                <th class="p-3 border-b border-slate-200">Answer</th>
                <th class="p-3 border-b border-slate-200">Evidence</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Did the company become riskier?</td>
                <td class="p-3">Fear of increased leverage</td>
                <td class="p-3">No, risk was already there (derivative, credit). Now it's visible</td>
                <td class="p-3">Swap liability 2 Cr and ECL allowance recognised</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Why is PAT lower under new standards?</td>
                <td class="p-3">Earnings quality doubt</td>
                <td class="p-3">Because derivative losses and expected credit losses are now expensed, not hidden</td>
                <td class="p-3">11 Cr total expense vs 8 Cr under AS</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Are IFRS and US GAAP comparable for derivatives?</td>
                <td class="p-3">Global comparability</td>
                <td class="p-3">Broadly yes for fair value, but hedge accounting mechanics differ</td>
                <td class="p-3">Both recognise 2 Cr loss; US GAAP has more bright lines</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Is the swap liability equal to debt?</td>
                <td class="p-3">Covenant worries</td>
                <td class="p-3">Economically similar to a financing obligation but not contractually debt</td>
                <td class="p-3">Fair value of derivative is 2 Cr liability</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">What matters most for valuation?</td>
                <td class="p-3">Need right metric</td>
                <td class="p-3">Normalise earnings by removing market-driven derivative P&L, add ECL to receivables</td>
                <td class="p-3">Use adjusted EBIT and adjusted debt</td>
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
                <th class="p-3 border-b border-slate-200">Investor type</th>
                <th class="p-3 border-b border-slate-200">What they see</th>
                <th class="p-3 border-b border-slate-200">Likely reaction</th>
                <th class="p-3 border-b border-slate-200">Sophisticated response</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Retail</td>
                <td class="p-3">Lower PAT (<span class="val-new-pat">29.25</span> Cr vs <span class="val-as-pat">31.5</span> Cr)</td>
                <td class="p-3 text-red-600">Negative - think performance worsened</td>
                <td class="p-3">Recognise that derivative loss and ECL are non-cash or expected, not realised</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Value</td>
                <td class="p-3">Higher liabilities (102 Cr) and lower ROE</td>
                <td class="p-3 text-amber-600">Cautious - perceive higher risk</td>
                <td class="p-3">Rebuild ROIC with adjusted debt and normalised earnings</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Growth</td>
                <td class="p-3">Better transparency of derivative and credit risk</td>
                <td class="p-3 text-teal-600">Mixed - likes disclosure but dislikes volatility</td>
                <td class="p-3">Focus on hedge strategy and credit quality</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION N -->
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION N: Reporting Signals Decoder
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Management action</th>
                <th class="p-3 border-b border-slate-200">Signal</th>
                <th class="p-3 border-b border-slate-200">What it really means</th>
                <th class="p-3 border-b border-slate-200">Your move</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Emphasises "stable interest expense" after adoption</td>
                <td class="p-3 text-amber-600 font-bold">Optics</td>
                <td class="p-3">Bond at amortised cost hides no volatility; derivative volatility may be elsewhere</td>
                <td class="p-3">Check derivative P&L separately</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Avoids disclosing ECL assumptions</td>
                <td class="p-3 text-red-600 font-bold">Opacity</td>
                <td class="p-3">May be hiding aggressive credit loss estimates</td>
                <td class="p-3">Request ageing and forward-looking assumptions</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Explains swap fair value loss in detail</td>
                <td class="p-3 text-emerald-600 font-bold">Governance</td>
                <td class="p-3">Management understands market risk and communicates it</td>
                <td class="p-3">Positive sign</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Presents adjusted earnings excluding derivative swings</td>
                <td class="p-3 text-teal-600 font-bold">Transparency</td>
                <td class="p-3">Wants to show core operating performance</td>
                <td class="p-3">Accept but verify adjustments</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Frequent redesignation of instruments (e.g., FVOCI vs FVTPL)</td>
                <td class="p-3 text-amber-600 font-bold">Judgment risk</td>
                <td class="p-3">Possibly managing P&L volatility</td>
                <td class="p-3">Review business model rationale each period</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
`;
fs.appendFileSync('financial-instruments.html', html);
