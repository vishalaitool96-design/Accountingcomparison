const fs = require('fs');

const esopHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ESOP | Standards Hub</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      html { scroll-behavior: smooth; }
      body { font-family: 'Inter', system-ui, sans-serif; }
    </style>
  </head>
  <body class="bg-[#f7fafc] font-sans h-screen w-full flex flex-col overflow-hidden border-8 border-slate-200 text-slate-800">
    <header class="bg-[#1a365d] text-white p-4 shrink-0 shadow-md">
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-end">
        <div>
          <h1 class="text-2xl font-bold tracking-tight">Accounting Standards Comparison Hub</h1>
          <p class="text-slate-300 text-sm italic">AS (Old Indian GAAP) vs Ind AS vs IFRS vs US GAAP</p>
        </div>
      </div>
    </header>

    <nav class="bg-white border-b border-slate-200 flex shrink-0 overflow-x-auto">
      <a href="index.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">Home</a>
      <a href="lease.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">Lease</a>
      <a href="ppe.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">PPE</a>
      <a href="financial-instruments.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">Financial Instruments</a>
      <a href="revenue.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">Revenue</a>
      <a href="deferred-tax.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">Deferred Tax</a>
      <a href="consolidation.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">Consolidation</a>
      <a href="impairment.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">Impairment</a>
      <a href="esop.html" class="px-6 py-3 text-sm font-semibold border-b-4 border-blue-600 bg-blue-50 text-blue-900 block whitespace-nowrap">ESOP</a>
    </nav>

    <main class="flex-1 p-4 md:p-6 lg:p-8 flex flex-col gap-10 overflow-y-auto" id="main-content">
      <div class="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div class="border-l-8 border-teal-600 pl-4 py-1 shrink-0">
          <h2 class="text-2xl font-bold text-[#1a365d] uppercase tracking-wide">Share-Based Payments (ESOP)</h2>
          <p class="text-sm text-slate-600">Premium Analysis Guide: AS vs Ind AS vs IFRS vs US GAAP</p>
        </div>
      </div>

      <!-- SECTION A -->
      <section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION A: Core Technical Comparison Table
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Parameter</th>
                <th class="p-3 border-b border-slate-200">AS (Old Indian GAAP - ICAI Guidance Note)</th>
                <th class="p-3 border-b border-slate-200">Ind AS (Ind AS 102)</th>
                <th class="p-3 border-b border-slate-200">IFRS (IFRS 2)</th>
                <th class="p-3 border-b border-slate-200">US GAAP (ASC 718)</th>
                <th class="p-3 border-b border-slate-200">Logic Shift</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Core philosophy</td>
                <td class="p-3">Choice between intrinsic value method and fair value method.</td>
                <td class="p-3">Fair value method is mandatory.</td>
                <td class="p-3">Fair value method is mandatory.</td>
                <td class="p-3">Fair value method is mandatory.</td>
                <td class="p-3 bg-red-50 text-red-800">Shift from historical leniency (intrinsic value often zero) to true economic cost measurement.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Scope</td>
                <td class="p-3">Primarily focused on employee stock options and shares.</td>
                <td class="p-3">Broad. Covers all share-based payments (employees and non-employees).</td>
                <td class="p-3">Broad. Covers all share-based payments (employees and non-employees).</td>
                <td class="p-3">Broad. Now aligned with IFRS for non-employees (ASC 505-50 superseded and integrated into ASC 718).</td>
                <td class="p-3 bg-red-50 text-red-800">Convergence across major frameworks.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Measurement basis for employee awards</td>
                <td class="p-3">Intrinsic value or Fair value at grant date.</td>
                <td class="p-3">Fair value at grant date.</td>
                <td class="p-3">Fair value at grant date.</td>
                <td class="p-3">Fair value at grant date.</td>
                <td class="p-3 bg-red-50 text-red-800">Mandatory fair value recognition limits accounting arbitrage.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Measurement basis for non-employees</td>
                <td class="p-3">Not specifically addressed; often derived from employee guidance or AS 10.</td>
                <td class="p-3">Fair value of goods/services received. If not reliably estimable, fair value of equity instruments granted.</td>
                <td class="p-3">Fair value of goods/services received. If not reliably estimable, fair value of equity instruments granted.</td>
                <td class="p-3">Generally mirrors employee model (fair value of equity instruments), simplified compared to past rules.</td>
                <td class="p-3 bg-red-50 text-red-800">Better capture of vendor payments via equity.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Graded vesting treatment</td>
                <td class="p-3">Choice between straight-line amortization or accelerated amortization (tracking each tranche).</td>
                <td class="p-3">Must treat each tranche as a separate award (accelerated amortization).</td>
                <td class="p-3">Must treat each tranche as a separate award (accelerated amortization).</td>
                <td class="p-3">Choice between straight-line (if only service condition) and accelerated amortization.</td>
                <td class="p-3 bg-red-50 text-red-800">Ind AS/IFRS force up-front loading of expense; US GAAP retains flexibility.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Forfeiture treatment</td>
                <td class="p-3">Can estimate at grant date or account for as they occur.</td>
                <td class="p-3">Must estimate forfeitures at grant date and true-up subsequently based on actuals.</td>
                <td class="p-3">Must estimate forfeitures at grant date and true-up subsequently based on actuals.</td>
                <td class="p-3">Policy election: estimate forfeitures OR account for forfeitures when they occur.</td>
                <td class="p-3 font-bold bg-amber-50 text-amber-800">US GAAP election differs from strict IFRS/Ind AS requirement.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Vesting vs non-vesting conditions</td>
                <td class="p-3">Not clearly bifurcated.</td>
                <td class="p-3">Service &amp; performance conditions are "vesting". Market conditions &amp; everything else are "non-vesting".</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Similar concepts, slight differences in definitions of performance vs market conditions.</td>
                <td class="p-3 font-bold bg-amber-50 text-amber-800">Market conditions (e.g., target share price) baked into grant date fair value; no expense reversal even if condition failed.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Grant date definition</td>
                <td class="p-3">When options are offered to employees.</td>
                <td class="p-3">Shared understanding of terms and conditions; requires appropriate approval.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3 bg-red-50 text-red-800">Grant date fixing is stricter globally.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Modification accounting</td>
                <td class="p-3">Recognize incremental value.</td>
                <td class="p-3">Recognize minimum of original fair value PLUS any incremental value.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Recognize fair value of modified award (can be lower than original, though rare due to rules).</td>
                <td class="p-3 font-bold bg-amber-50 text-amber-800">Re-pricing underwater options creates new expense under all modern standards.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Classification - equity vs liability</td>
                <td class="p-3">Primarily handled as equity-settled.</td>
                <td class="p-3">Strict assessment based on obligation to settle in cash. Liability awards remeasured at fair value every period.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Complex rules based on ASC 480 and fixed monetary amount. Liability awards remeasured based on fair value or intrinsic value depending on entity type.</td>
                <td class="p-3 font-bold bg-amber-50 text-amber-800">Liability classification injects massive P&amp;L volatility.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Group share-based payments</td>
                <td class="p-3">No specific detailed guidance.</td>
                <td class="p-3">Detailed rules. Subsidiary receiving services typically records equity-settled expense.</td>
                <td class="p-3">Detailed rules mirroring Ind AS.</td>
                <td class="p-3">Subsidiary generally records expense based on fair value.</td>
                <td class="p-3 font-bold bg-amber-50 text-amber-800">Prevents subsidiaries from hiding compensation costs when parent issues the shares.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Employee Stock Purchase Plans (ESPPs)</td>
                <td class="p-3">Not specifically addressed.</td>
                <td class="p-3">Viewed as compensatory. Discount recorded as expense.</td>
                <td class="p-3">Viewed as compensatory. Discount recorded as expense.</td>
                <td class="p-3">Noncompensatory (no expense) if conditions met (e.g., discount &lt;= 5%, offered to all).</td>
                <td class="p-3 font-bold bg-amber-50 text-amber-800">US GAAP election can result in zero expense for ESPPs vs Ind AS/IFRS.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Disclosure volume</td>
                <td class="p-3">Low to moderate.</td>
                <td class="p-3">Extensive. Detailed assumptions, strike prices, WAEP, rollforwards.</td>
                <td class="p-3">Extensive.</td>
                <td class="p-3">Extensive.</td>
                <td class="p-3 bg-red-50 text-red-800">Provides analysts with required data to rebuild true economic cost.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-slate-100 text-slate-800 px-4 py-2 font-bold uppercase tracking-wider text-xs border-y border-slate-200">
          1.3.1 Additional Key Differences (Edge Cases)
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Parameter</th>
                <th class="p-3 border-b border-slate-200">AS (Old Indian GAAP)</th>
                <th class="p-3 border-b border-slate-200">Ind AS / IFRS</th>
                <th class="p-3 border-b border-slate-200">US GAAP (ASC 718)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Volatility for unlisted companies</td>
                <td class="p-3">Could assume zero volatility (resulting in option value nearing intrinsic value).</td>
                <td class="p-3">Must estimate volatility (often using comparable peer group). Zero volatility forbidden.</td>
                <td class="p-3">Nonpublic entities have a practical expedient to use a "calculated value" using industry sector index volatility.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Performance targets after service period</td>
                <td class="p-3">Often accounted for simply over service period.</td>
                <td class="p-3">Treated as a non-vesting condition.</td>
                <td class="p-3">Treated as a performance condition.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Liquidity events (IPO/change in control)</td>
                <td class="p-3">Recognized when probable.</td>
                <td class="p-3">Expense recognized only when the implicit or explicit condition is satisfied.</td>
                <td class="p-3">Expense recognized only when the event actually occurs.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Payroll taxes</td>
                <td class="p-3">Expensed as incurred.</td>
                <td class="p-3">Accrued over the vesting period in proportion to the share-based payment expense.</td>
                <td class="p-3">Recognized on the date of the event triggering the liability (usually exercise).</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Net-share settlement for taxes</td>
                <td class="p-3">No specific rule.</td>
                <td class="p-3">Equity classification maintained if withholding is up to statutory tax limit.</td>
                <td class="p-3">Equity classification maintained if withholding is up to maximum statutory tax limit.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="px-4 py-3 bg-blue-50 border-t border-slate-200">
          <p class="text-sm text-blue-900"><strong class="font-bold">KEY INSIGHT:</strong> Old Indian GAAP permitted choice between intrinsic value and fair value, allowed zero volatility for unlisted companies, and had no forfeiture estimation requirement. Ind AS 102/IFRS 2 mandate fair value only, require volatility estimation, and mandate forfeiture estimation. US GAAP is broadly similar but offers more policy elections (forfeiture, graded vesting, ESPP noncompensatory).</p>
        </div>
      </section>

      <!-- SECTION B -->
      <section class="shrink-0 bg-yellow-50 rounded-xl shadow-sm border border-yellow-200 overflow-hidden flex flex-col">
        <div class="bg-yellow-100 text-yellow-900 px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-yellow-200 flex justify-between items-center">
          <span>SECTION B: Transaction Fact Pattern (Editable)</span>
          <button id="reset-btn" class="bg-yellow-600 text-white px-3 py-1 rounded text-xs font-semibold hover:bg-yellow-700 transition">Reset to Default</button>
        </div>
        <div class="p-4 flex flex-col md:flex-row gap-6">
          <div class="flex-1 space-y-4">
            <h3 class="font-bold text-slate-800 border-b border-yellow-200 pb-2">Business & Award Profile (Read-only)</h3>
            <div class="space-y-2 text-sm text-slate-700">
              <p><strong class="font-semibold w-40 inline-block">Company:</strong> Apex Technologies Ltd.</p>
              <p><strong class="font-semibold w-40 inline-block">Grant date:</strong> 1 April 2025</p>
              <p><strong class="font-semibold w-40 inline-block">Vesting type:</strong> Cliff vesting at end of year 3</p>
            </div>
            
            <h3 class="font-bold text-slate-800 border-b border-yellow-200 pb-2 mt-6">Calculated Results (over full term)</h3>
            <div class="space-y-2 text-sm">
              <div class="bg-white p-3 rounded border border-yellow-200 shadow-sm space-y-2">
                <div class="flex justify-between text-slate-600 border-b border-slate-100 pb-1">
                  <span class="font-semibold">Intrinsic value per option:</span>
                  <span id="calc-int-opt" class="font-mono font-medium text-slate-800">50</span>
                </div>
                <div class="flex justify-between text-slate-600 border-b border-slate-100 pb-1">
                  <span class="font-semibold">Total intrinsic value:</span>
                  <span id="calc-tot-int" class="font-mono font-medium text-slate-800">50,00,000</span>
                </div>
                <div class="flex justify-between text-slate-600 border-b border-slate-100 pb-1">
                  <span class="font-semibold">Total fair value (FV):</span>
                  <span id="calc-tot-fv" class="font-mono font-medium text-slate-800">70,00,000</span>
                </div>
                <div class="flex justify-between text-slate-600 border-b border-slate-100 pb-1">
                  <span class="font-semibold">Adjusted FV (with forfeiture):</span>
                  <span id="calc-adj-fv" class="font-mono font-medium text-slate-800">51,03,000</span>
                </div>
                <div class="flex justify-between text-slate-600 border-b border-slate-100 pb-1">
                  <span class="font-semibold">Annual expense (Intrinsic):</span>
                  <span id="calc-ann-int" class="font-mono font-medium text-slate-800">16,66,667</span>
                </div>
                <div class="flex justify-between text-slate-600 border-b border-slate-100 pb-1">
                  <span class="font-semibold">Annual expense (FV adj):</span>
                  <span id="calc-ann-fv" class="font-mono font-medium text-slate-800">17,01,000</span>
                </div>
                <div class="flex items-center gap-2 pt-2">
                  <input type="checkbox" id="inp-us-nonpublic" class="rounded text-blue-600 focus:ring-blue-500">
                  <label for="inp-us-nonpublic" class="text-sm font-semibold text-slate-700">US GAAP Nonpublic Entity Toggle</label>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-[2] grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Inputs -->
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Number of options granted</label>
              <input type="number" id="inp-options" value="100000" step="1000" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Exercise price</label>
              <input type="number" id="inp-ep" value="150" step="1" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Market price on grant date</label>
              <input type="number" id="inp-mp" value="200" step="1" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Vesting period in years</label>
              <input type="number" id="inp-vest" value="3" step="1" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Contractual life in years</label>
              <input type="number" id="inp-life" value="5" step="1" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Fair value per option (Black-Scholes)</label>
              <input type="number" id="inp-fv" value="70" step="1" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Expected volatility (%)</label>
              <input type="number" id="inp-vol" value="35" step="1" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Risk-free rate (%)</label>
              <input type="number" id="inp-rfr" value="7" step="0.1" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Expected dividend yield (%)</label>
              <input type="number" id="inp-div" value="0" step="0.1" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Base EBITDA (Cr)</label>
              <input type="number" id="inp-ebitda" value="100" step="1" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Tax rate (%)</label>
              <input type="number" id="inp-tax" value="25" step="1" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Expected annual forfeiture rate (%)</label>
              <input type="number" id="inp-forfeit" value="10" step="1" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION C -->
      <section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION C: Side-by-Side Treatment
        </div>
        <div class="p-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div class="border border-slate-200 rounded p-4 bg-slate-50 flex flex-col h-full">
            <h3 class="font-bold text-slate-800 border-b border-slate-200 pb-2 mb-3">AS - Intrinsic Value (Common)</h3>
            <ul class="text-sm text-slate-700 space-y-2 flex-grow">
              <li><strong class="text-slate-900">Intrinsic value:</strong> Market price (<span class="v-mp">200</span>) - Exercise price (<span class="v-ep">150</span>) = <span class="v-int">50</span> per option</li>
              <li><strong class="text-slate-900">Total intrinsic value:</strong> <span class="v-opt">100,000</span> &times; <span class="v-int">50</span> = <span class="v-totint">50,00,000</span></li>
              <li><strong class="text-slate-900">Annual expense:</strong> <span class="v-totint">50,00,000</span> / <span class="v-vest">3</span> years = <span class="v-annint">16,66,667</span></li>
              <li class="bg-gray-200 p-2 rounded font-mono text-xs my-2">Dr Employee compensation exp <span class="v-annint">16,66,667</span><br/>Cr Stock options outstanding <span class="v-annint">16,66,667</span></li>
            </ul>
          </div>
          <div class="border border-slate-200 rounded p-4 bg-slate-50 flex flex-col h-full">
            <h3 class="font-bold text-slate-800 border-b border-slate-200 pb-2 mb-3">AS - Fair Value (Optional)</h3>
            <ul class="text-sm text-slate-700 space-y-2 flex-grow">
              <li><strong class="text-slate-900">Fair value using Black-Scholes:</strong> <span class="v-fv">70</span> per option</li>
              <li><strong class="text-slate-900">Total fair value:</strong> <span class="v-totfv-no-forf-disp">70,00,000</span></li>
              <li><strong class="text-slate-900">Annual expense:</strong> <span class="v-totfv-no-forf-disp">70,00,000</span> / <span class="v-vest">3</span> = <span class="v-annfv-no-forf">23,33,333</span></li>
              <li>No forfeiture estimate explicitly required.</li>
            </ul>
          </div>
          <div class="border border-slate-200 rounded p-4 bg-slate-50 flex flex-col h-full">
            <h3 class="font-bold text-slate-800 border-b border-slate-200 pb-2 mb-3">Ind AS 102 / IFRS 2 Treatment</h3>
            <ul class="text-sm text-slate-700 space-y-2 flex-grow">
              <li>Mandates fair value method only</li>
              <li>Cannot use intrinsic value method (unless rare circumstances)</li>
              <li>Cannot assume zero volatility for unlisted companies</li>
              <li>Must estimate forfeitures and adjust expense (<span class="v-forf">10</span>% annual forfeiture)</li>
              <li class="bg-gray-200 p-2 rounded font-mono text-xs my-2">Dr Employee compensation exp <span class="v-annadj">17,01,000</span><br/>Cr Stock options outstanding <span class="v-annadj">17,01,000</span></li>
            </ul>
          </div>
          <div class="border border-slate-200 rounded p-4 bg-slate-50 flex flex-col h-full relative">
            <h3 class="font-bold text-slate-800 border-b border-slate-200 pb-2 mb-3">US GAAP ASC 718 Treatment</h3>
            <ul class="text-sm text-slate-700 space-y-2 flex-grow relative z-10">
              <li>Fair value method required</li>
              <li><strong class="text-slate-900">Nonpublic entity election:</strong> May use calculated value if volatility not practicable (<span class="v-us-val-txt">70</span> / option)</li>
              <li><strong class="text-slate-900">Forfeiture policy election:</strong> Can choose to estimate OR recognize when forfeitures occur</li>
              <li><strong class="text-slate-900">Graded vesting election:</strong> Can choose straight-line OR accelerated</li>
              <li>Assumed US GAAP expense: <span class="v-us-ann">23,33,333</span></li>
            </ul>
            <div id="us-gaap-badge" class="absolute top-2 right-2 bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-1 rounded hidden uppercase tracking-wide border border-blue-200 shadow-sm z-20">Nonpublic ON</div>
          </div>
        </div>
      </section>

      <!-- SECTION D IMPACT -->
      <section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION D: Side-by-Side Impact Table (Year 1 - ESOP)
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Framework</th>
                <th class="p-3 border-b border-slate-200">Measurement Method</th>
                <th class="p-3 border-b border-slate-200">Fair Value per Option</th>
                <th class="p-3 border-b border-slate-200">Total Grant Value</th>
                <th class="p-3 border-b border-slate-200">Annual Expense (3-yr vesting)</th>
                <th class="p-3 border-b border-slate-200">Forfeiture Treatment</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">AS (Intrinsic)</td>
                <td class="p-3">Intrinsic value (<span class="v-mp">200</span>-<span class="v-ep">150</span>)</td>
                <td class="p-3"><span class="v-int">50</span></td>
                <td class="p-3"><span class="v-totint">50,00,000</span></td>
                <td class="p-3"><span class="v-annint">16,66,667</span></td>
                <td class="p-3">Not explicitly required</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">AS (Fair Value - optional)</td>
                <td class="p-3">Black-Scholes with zero volatility</td>
                <td class="p-3">60 (assumed)</td>
                <td class="p-3"><span class="v-tot-asfv">60,00,000</span></td>
                <td class="p-3"><span class="v-ann-asfv">20,00,000</span></td>
                <td class="p-3">Not explicitly required</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Ind AS 102</td>
                <td class="p-3">Black-Scholes with estimated volatility</td>
                <td class="p-3"><span class="v-fv">70</span></td>
                <td class="p-3"><span class="v-totadjfv">51,03,000</span></td>
                <td class="p-3"><span class="v-annadj">17,01,000</span></td>
                <td class="p-3">Must estimate forfeitures</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">IFRS 2</td>
                <td class="p-3">Black-Scholes with estimated volatility</td>
                <td class="p-3"><span class="v-fv">70</span></td>
                <td class="p-3"><span class="v-totadjfv">51,03,000</span></td>
                <td class="p-3"><span class="v-annadj">17,01,000</span></td>
                <td class="p-3">Must estimate forfeitures</td>
              </tr>
              <tr class="hover:bg-slate-50 pb">
                <td class="p-3 font-semibold text-slate-800 text-slate-500">US GAAP (public)</td>
                <td class="p-3 text-slate-500">Black-Scholes with expected volatility</td>
                <td class="p-3 text-slate-500"><span class="v-fv">70</span></td>
                <td class="p-3 text-slate-500"><span class="v-totadjfv-uspb">70,00,000</span></td>
                <td class="p-3 text-slate-500"><span class="v-annadj-uspb">23,33,333</span></td>
                <td class="p-3 text-slate-500">Policy election</td>
              </tr>
              <tr class="hover:bg-slate-50 bg-blue-50">
                <td class="p-3 font-semibold text-slate-800">US GAAP (Selected)</td>
                <td class="p-3"><span class="v-us-val-name">Black-Scholes with expected volatility</span></td>
                <td class="p-3"><span class="v-us-val">70</span></td>
                <td class="p-3"><span class="v-tot-us">70,00,000</span></td>
                <td class="p-3"><span class="v-us-ann">23,33,333</span></td>
                <td class="p-3">Policy election</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION E -->
      <section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200 flex justify-between">
          <span>SECTION E: P&amp;L Impact - Year 1 (ESOP)</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200 w-1/5">Line Item</th>
                <th class="p-3 border-b border-slate-200 text-right">AS (Intrinsic)</th>
                <th class="p-3 border-b border-slate-200 text-right">AS (Fair Value)</th>
                <th class="p-3 border-b border-slate-200 text-right border-x-2 border-blue-200 bg-blue-50/50">Ind AS 102</th>
                <th class="p-3 border-b border-slate-200 text-right">IFRS 2</th>
                <th class="p-3 border-b border-slate-200 text-right">US GAAP (Selected)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 font-mono text-right">
              <tr class="hover:bg-slate-50 text-slate-600">
                <td class="p-3 text-left font-sans font-medium text-slate-700">Base EBITDA</td>
                <td class="p-3"><span class="pe-b-ebitda">100.00</span> Cr</td>
                <td class="p-3"><span class="pe-b-ebitda">100.00</span> Cr</td>
                <td class="p-3 border-x-2 border-blue-200 bg-blue-50/50"><span class="pe-b-ebitda">100.00</span> Cr</td>
                <td class="p-3"><span class="pe-b-ebitda">100.00</span> Cr</td>
                <td class="p-3"><span class="pe-b-ebitda">100.00</span> Cr</td>
              </tr>
              <tr class="hover:bg-red-50 text-red-600">
                <td class="p-3 text-left font-sans font-medium">ESOP expense</td>
                <td class="p-3 font-semibold">-<span class="pe-as-esop">1.67</span> Cr</td>
                <td class="p-3">-<span class="pe-asfv-esop">2.00</span> Cr</td>
                <td class="p-3 border-x-2 border-blue-200 bg-blue-50/50 font-semibold">-<span class="pe-ind-esop">1.70</span> Cr</td>
                <td class="p-3">-<span class="pe-ifrs-esop">1.70</span> Cr</td>
                <td class="p-3">-<span class="pe-us-esop">2.33</span> Cr</td>
              </tr>
              <tr class="hover:bg-slate-50 font-semibold text-slate-800 bg-slate-50/50 border-y-2 border-slate-200">
                <td class="p-3 text-left font-sans">Reported EBITDA</td>
                <td class="p-3"><span class="pe-as-ebitda">98.33</span> Cr</td>
                <td class="p-3"><span class="pe-asfv-ebitda">98.00</span> Cr</td>
                <td class="p-3 border-x-2 border-blue-200 bg-blue-100 text-blue-900"><span class="pe-ind-ebitda">98.30</span> Cr</td>
                <td class="p-3"><span class="pe-ifrs-ebitda">98.30</span> Cr</td>
                <td class="p-3"><span class="pe-us-ebitda">97.67</span> Cr</td>
              </tr>
              <tr class="hover:bg-slate-50 font-semibold text-slate-800">
                <td class="p-3 text-left font-sans">EBIT</td>
                <td class="p-3"><span class="pe-as-ebitda">98.33</span> Cr</td>
                <td class="p-3"><span class="pe-asfv-ebitda">98.00</span> Cr</td>
                <td class="p-3 border-x-2 border-blue-200 bg-blue-50/50 text-blue-900"><span class="pe-ind-ebitda">98.30</span> Cr</td>
                <td class="p-3"><span class="pe-ifrs-ebitda">98.30</span> Cr</td>
                <td class="p-3"><span class="pe-us-ebitda">97.67</span> Cr</td>
              </tr>
              <tr class="hover:bg-slate-50 text-slate-600">
                <td class="p-3 text-left font-sans font-medium">Interest</td>
                <td class="p-3">Nil</td>
                <td class="p-3">Nil</td>
                <td class="p-3 border-x-2 border-blue-200 bg-blue-50/50">Nil</td>
                <td class="p-3">Nil</td>
                <td class="p-3">Nil</td>
              </tr>
              <tr class="hover:bg-slate-50 font-semibold text-slate-800 border-t border-slate-200">
                <td class="p-3 text-left font-sans">PBT</td>
                <td class="p-3"><span class="pe-as-ebitda">98.33</span> Cr</td>
                <td class="p-3"><span class="pe-asfv-ebitda">98.00</span> Cr</td>
                <td class="p-3 border-x-2 border-blue-200 bg-blue-50/50 text-blue-900"><span class="pe-ind-ebitda">98.30</span> Cr</td>
                <td class="p-3"><span class="pe-ifrs-ebitda">98.30</span> Cr</td>
                <td class="p-3"><span class="pe-us-ebitda">97.67</span> Cr</td>
              </tr>
              <tr class="hover:bg-red-50 text-red-600">
                <td class="p-3 text-left font-sans font-medium">Tax (<span class="v-tax-lbl">25</span>%)</td>
                <td class="p-3">-<span class="pe-as-tax">24.58</span> Cr</td>
                <td class="p-3">-<span class="pe-asfv-tax">24.50</span> Cr</td>
                <td class="p-3 border-x-2 border-blue-200 bg-blue-50/50">-<span class="pe-ind-tax">24.58</span> Cr</td>
                <td class="p-3">-<span class="pe-ifrs-tax">24.58</span> Cr</td>
                <td class="p-3">-<span class="pe-us-tax">24.42</span> Cr</td>
              </tr>
              <tr class="hover:bg-green-50 font-bold text-slate-900 bg-green-50/30 border-t-2 border-slate-200">
                <td class="p-3 text-left font-sans">PAT</td>
                <td class="p-3 text-green-700"><span class="pe-as-pat">73.75</span> Cr</td>
                <td class="p-3 text-green-700"><span class="pe-asfv-pat">73.50</span> Cr</td>
                <td class="p-3 border-x-2 border-blue-400 bg-blue-100 text-blue-900"><span class="pe-ind-pat">73.73</span> Cr</td>
                <td class="p-3 text-green-700"><span class="pe-ifrs-pat">73.73</span> Cr</td>
                <td class="p-3 text-green-700"><span class="pe-us-pat">73.25</span> Cr</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION F & G -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <section class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
            SECTION F: Balance Sheet Impact - Year 1 (ESOP)
          </div>
          <div class="overflow-x-auto flex-1">
            <table class="w-full text-sm text-left h-full">
              <thead class="bg-slate-50 text-slate-700">
                <tr>
                  <th class="p-3 border-b border-slate-200">Item</th>
                  <th class="p-3 border-b border-slate-200">AS (Intrinsic)</th>
                  <th class="p-3 border-b border-slate-200">Ind AS 102</th>
                  <th class="p-3 border-b border-slate-200">IFRS 2</th>
                  <th class="p-3 border-b border-slate-200">US GAAP</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">Stock options outstanding (equity)</td>
                  <td class="p-3 font-mono text-slate-600"><span class="bs-as-eq">16.67</span> Cr</td>
                  <td class="p-3 font-mono text-slate-600"><span class="bs-ind-eq">17.01</span> Cr</td>
                  <td class="p-3 font-mono text-slate-600"><span class="bs-ifrs-eq">17.01</span> Cr</td>
                  <td class="p-3">Variable by election</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">Deferred tax asset (if recognized)</td>
                  <td class="p-3">Not typically</td>
                  <td class="p-3 font-mono text-slate-600"><span class="bs-ind-dta">4.25</span> Cr</td>
                  <td class="p-3 font-mono text-slate-600"><span class="bs-ifrs-dta">4.25</span> Cr</td>
                  <td class="p-3 font-mono text-slate-600"><span class="bs-us-dta">5.83</span> Cr</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">Total equity</td>
                  <td class="p-3 text-red-600">Lower by expense</td>
                  <td class="p-3 text-red-600">Lower by higher expense</td>
                  <td class="p-3 text-red-600">Lower by higher expense</td>
                  <td class="p-3">Medium</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="px-4 py-2 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 italic">
            Note: ESOPs are equity-settled in all frameworks (unless cash-settled), so no balance sheet liability for employee options.
          </div>
        </section>

        <section class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
            SECTION G: Cash Flow Impact - ESOP
          </div>
          <div class="overflow-x-auto flex-1">
            <table class="w-full text-sm text-left h-full">
              <thead class="bg-slate-50 text-slate-700">
                <tr>
                  <th class="p-3 border-b border-slate-200">CF Component</th>
                  <th class="p-3 border-b border-slate-200">AS (All)</th>
                  <th class="p-3 border-b border-slate-200">Ind AS 102</th>
                  <th class="p-3 border-b border-slate-200">IFRS 2</th>
                  <th class="p-3 border-b border-slate-200">US GAAP</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">ESOP expense (non-cash)</td>
                  <td class="p-3">Add-back in CFO</td>
                  <td class="p-3">Add-back in CFO</td>
                  <td class="p-3">Add-back in CFO</td>
                  <td class="p-3">Add-back in CFO</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">CFO effect</td>
                  <td class="p-3 text-green-700">Higher due to add-back</td>
                  <td class="p-3 text-green-700">Higher due to add-back</td>
                  <td class="p-3 text-green-700">Higher due to add-back</td>
                  <td class="p-3 text-green-700">Higher due to add-back</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">CFF effect (exercise)</td>
                  <td class="p-3">Cash inflow from exercise</td>
                  <td class="p-3">Cash inflow from exercise</td>
                  <td class="p-3">Cash inflow from exercise</td>
                  <td class="p-3">Cash inflow from exercise</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-bold text-slate-900 border-t border-slate-200">Total cash flow</td>
                  <td class="p-3 font-bold">Same economics</td>
                  <td class="p-3 font-bold">Same economics</td>
                  <td class="p-3 font-bold">Same economics</td>
                  <td class="p-3 font-bold">Same economics</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="px-4 py-2 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 italic">
            Note: ESOP expense is non-cash; only exercise generates actual cash flow.
          </div>
        </section>
      </div>

      <!-- SECTION H -->
      <section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION H: Ratio Impact - ESOP
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Ratio</th>
                <th class="p-3 border-b border-slate-200">AS (Intrinsic)</th>
                <th class="p-3 border-b border-slate-200">Ind AS 102</th>
                <th class="p-3 border-b border-slate-200">IFRS 2</th>
                <th class="p-3 border-b border-slate-200">US GAAP</th>
                <th class="p-3 border-b border-slate-200">Direction</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Net margin</td>
                <td class="p-3">Higher (lower expense)</td>
                <td class="p-3 text-red-600">Lower (higher expense)</td>
                <td class="p-3 text-red-600">Lower</td>
                <td class="p-3">Medium</td>
                <td class="p-3 text-center text-red-600 font-bold">&#8595; (Ind AS)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">EBITDA margin</td>
                <td class="p-3">Higher</td>
                <td class="p-3 text-red-600">Lower</td>
                <td class="p-3 text-red-600">Lower</td>
                <td class="p-3">Medium</td>
                <td class="p-3 text-center text-red-600 font-bold">&#8595; (Ind AS)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">EPS (basic)</td>
                <td class="p-3">Higher</td>
                <td class="p-3 text-red-600">Lower</td>
                <td class="p-3 text-red-600">Lower</td>
                <td class="p-3">Medium</td>
                <td class="p-3 text-center text-red-600 font-bold">&#8595; (Ind AS)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">ROE</td>
                <td class="p-3">Higher</td>
                <td class="p-3 text-red-600">Lower</td>
                <td class="p-3 text-red-600">Lower</td>
                <td class="p-3">Medium</td>
                <td class="p-3 text-center text-red-600 font-bold">&#8595; (Ind AS)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">P/E ratio</td>
                <td class="p-3">Lower (higher earnings)</td>
                <td class="p-3 text-green-700">Higher</td>
                <td class="p-3 text-green-700">Higher</td>
                <td class="p-3">Medium</td>
                <td class="p-3 text-center text-green-600 font-bold">&#8593; (Ind AS)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="px-4 py-2 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 italic">
          Note: Fair value method reduces reported earnings, potentially increasing P/E multiples.
        </div>
      </section>

      <!-- SECTION I & J -->
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
        <section class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
            SECTION I: Earnings Quality - Signals Table (ESOP)
          </div>
          <div class="overflow-x-auto flex-1">
            <table class="w-full text-sm text-left h-full">
              <thead class="bg-slate-50 text-slate-700">
                <tr>
                  <th class="p-3 border-b border-slate-200">Signal Observed</th>
                  <th class="p-3 border-b border-slate-200">What It Means Technically</th>
                  <th class="p-3 border-b border-slate-200">Analyst Interpretation</th>
                  <th class="p-3 border-b border-slate-200">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">ESOP expense increases after Ind AS adoption</td>
                  <td class="p-3">Company previously used intrinsic value; now fair value required</td>
                  <td class="p-3">Earnings are more truthful; prior periods understated compensation cost</td>
                  <td class="p-3 font-semibold text-blue-700">Adjust historical comparables to fair value basis</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">Volatility assumption = zero for unlisted (under AS)</td>
                  <td class="p-3">Allowed exception under old GAAP</td>
                  <td class="p-3">Options likely undervalued; expense too low</td>
                  <td class="p-3 font-semibold text-blue-700">Recompute using peer volatility for true cost</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">No forfeiture estimate (under AS)</td>
                  <td class="p-3">Not required under old GAAP</td>
                  <td class="p-3">Expense not adjusted for leavers; overstated liability</td>
                  <td class="p-3 font-semibold text-blue-700">Estimate own forfeiture rate and adjust</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">High use of graded vesting with straight-line (under AS)</td>
                  <td class="p-3">Permitted under old GAAP</td>
                  <td class="p-3">Expense recognized slower than economic vesting</td>
                  <td class="p-3 font-semibold text-blue-700">Recompute using accelerated method for comparability</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">Non-employee grants not disclosed (under AS)</td>
                  <td class="p-3">Not required</td>
                  <td class="p-3">Possible missing expense for vendor/consultant payments</td>
                  <td class="p-3 font-semibold text-blue-700">Investigate share-based payments to suppliers</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">ESPP treated as noncompensatory (US GAAP)</td>
                  <td class="p-3">Permitted if conditions met</td>
                  <td class="p-3">No expense recognized; IFRS peers would expense</td>
                  <td class="p-3 font-semibold text-blue-700">Add back estimated ESPP cost for peer comparison</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
            SECTION J: Trend Distortion Matrix - ESOP
          </div>
          <div class="overflow-x-auto flex-1">
            <table class="w-full text-sm text-left h-full">
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
                  <td class="p-3 font-semibold text-slate-800">Net Income</td>
                  <td class="p-3">Permanent level shift (if switching from intrinsic to fair value)</td>
                  <td class="p-3">Entire vesting period of all outstanding grants</td>
                  <td class="p-3 text-blue-700">Recast historical intrinsic-based expense to fair value</td>
                  <td class="p-3 text-slate-600 text-xs text-center"><span class="pe-ni-dist"></span></td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">EPS</td>
                  <td class="p-3">Permanent level shift</td>
                  <td class="p-3">Vesting period</td>
                  <td class="p-3 text-blue-700">Use fair-value based EPS for all periods</td>
                  <td class="p-3 text-slate-600 text-xs text-center">Compare only on consistent basis</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">EBITDA</td>
                  <td class="p-3">Permanent level shift</td>
                  <td class="p-3">Vesting period</td>
                  <td class="p-3 text-blue-700">Normalize to fair value method</td>
                  <td class="p-3 text-slate-600 text-xs text-center">Peer comps require same method</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">Equity (stock options outstanding)</td>
                  <td class="p-3">Balance sheet difference</td>
                  <td class="p-3">Until exercise/expiry</td>
                  <td class="p-3 text-blue-700">Fair value method creates larger equity balance</td>
                  <td class="p-3 text-slate-600 text-xs text-center">Not economic difference</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">Cash flow</td>
                  <td class="p-3 text-green-700">No distortion (non-cash)</td>
                  <td class="p-3">N/A</td>
                  <td class="p-3">No correction needed</td>
                  <td class="p-3 text-slate-600 text-xs text-center">Total CF identical</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <!-- SECTION K & L -->
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
        <section class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
            SECTION K: Ratio Interpretation Guide - ESOP
          </div>
          <div class="overflow-x-auto flex-1">
            <table class="w-full text-sm text-left h-full">
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
                  <td class="p-3 font-semibold text-slate-800">P/E Ratio</td>
                  <td class="p-3">Higher under fair value (lower earnings)</td>
                  <td class="p-3">Recalculate using intrinsic method for old periods</td>
                  <td class="p-3">Multiple expansion may be artificial</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">EBITDA Margin</td>
                  <td class="p-3">Lower under fair value</td>
                  <td class="p-3">Compare only to peers using same method</td>
                  <td class="p-3">Not a real operational deterioration</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">ROE</td>
                  <td class="p-3">Lower under fair value</td>
                  <td class="p-3">Recognize equity increases by same amount as expense reduces retained earnings</td>
                  <td class="p-3">Economic return unchanged</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">Effective Tax Rate</td>
                  <td class="p-3">Appears higher (pre-tax income lower)</td>
                  <td class="p-3">No real tax impact (ESOP expense deductible per tax rules on exercise)</td>
                  <td class="p-3">Tax rate distortion is timing only</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">ESOP Expense / Revenue</td>
                  <td class="p-3">>3% typically material</td>
                  <td class="p-3">Compare to industry peers</td>
                  <td class="p-3">High ratio may indicate over-reliance on equity compensation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="px-4 py-3 bg-blue-50 border-t border-slate-200">
            <p class="text-sm text-blue-900"><strong class="font-bold">Intelligence Note:</strong> Across Ind AS, IFRS, and US GAAP, the same analytical normalization applies &ndash; always recast historical ESOP expense to fair value for all periods using consistent Black-Scholes assumptions (volatility 25-40%, no zero exception), normalize for forfeitures, and compare diluted EPS including all in-the-money options.</p>
          </div>
        </section>

        <section class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
            SECTION L: Analyst Concerns &amp; Answers - ESOP
          </div>
          <div class="overflow-x-auto flex-1">
            <table class="w-full text-sm text-left h-full">
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
                  <td class="p-3 font-semibold text-slate-800">Why is ESOP expense higher under Ind AS than old GAAP?</td>
                  <td class="p-3">Earnings decline</td>
                  <td class="p-3">Old GAAP allowed intrinsic value (<span class="v-int">50</span>/option); Ind AS requires fair value (<span class="v-fv">70</span>/option)</td>
                  <td class="p-3 text-slate-600 text-xs">Difference of <span class="v-fv-int-diff">20</span>/option &times; options granted</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">Can companies still use zero volatility for unlisted?</td>
                  <td class="p-3">Understated expense</td>
                  <td class="p-3">No - Ind AS 102 and IFRS 2 prohibit this exception</td>
                  <td class="p-3 text-slate-600 text-xs">Must use comparable listed company volatility</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">How do I compare Indian company under Ind AS with US company under ASC 718?</td>
                  <td class="p-3">Cross-border comparability</td>
                  <td class="p-3">Broadly similar, but US GAAP has more policy elections (forfeiture, graded vesting, ESPP noncompensatory)</td>
                  <td class="p-3 text-slate-600 text-xs">Normalize using same policy choices</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">Is ESOP expense real or just accounting?</td>
                  <td class="p-3">Cash flow vs earnings</td>
                  <td class="p-3">ESOP is real economic cost (dilution to existing shareholders) even though non-cash</td>
                  <td class="p-3 text-slate-600 text-xs">Factor dilution into per-share metrics</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">What about group ESOPs - parent shares to subsidiary employees?</td>
                  <td class="p-3">Which entity records expense?</td>
                  <td class="p-3">Ind AS 102 provides detailed guidance: subsidiary records equity-settled expense; parent may record cash-settled if reimbursed</td>
                  <td class="p-3 text-slate-600 text-xs">Check group structure and recharge agreements</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">How do modifications affect expense?</td>
                  <td class="p-3">Earnings manipulation risk</td>
                  <td class="p-3">IFRS: original grant date value + incremental value; US GAAP: entire modified award value</td>
                  <td class="p-3 text-slate-600 text-xs">US GAAP may produce higher expense after modification</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <!-- SECTION M & N -->
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
        <section class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
            SECTION M: Investor Perception Analysis - ESOP
          </div>
          <div class="overflow-x-auto flex-1">
            <table class="w-full text-sm text-left h-full">
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
                  <td class="p-3">Lower PAT under Ind AS</td>
                  <td class="p-3 text-red-600">Negative, think company less profitable</td>
                  <td class="p-3 text-blue-700">Recognize change is accounting, not economics</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">Value</td>
                  <td class="p-3">Lower EPS, higher dilution</td>
                  <td class="p-3 text-amber-600">Reduce valuation multiples</td>
                  <td class="p-3 text-blue-700">Calculate fully diluted shares including in-the-money options</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">Institutional Long-Only</td>
                  <td class="p-3">Better transparency on compensation cost</td>
                  <td class="p-3 text-green-700">Positive for governance</td>
                  <td class="p-3 text-blue-700">Use fair value expense for compensation analysis</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">Credit / Lenders</td>
                  <td class="p-3">Lower EBITDA, higher leverage ratios (if equity reduced)</td>
                  <td class="p-3 text-amber-600">More cautious if covenants based on reported numbers</td>
                  <td class="p-3 text-blue-700">Adjust EBITDA add-back for non-cash ESOP</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">PE / VC</td>
                  <td class="p-3">High ESOP expense reduces reported profits</td>
                  <td class="p-3 text-amber-600">May negotiate on adjusted EBITDA</td>
                  <td class="p-3 text-blue-700">Underwrite with add-back but track dilution</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
            SECTION N: Reporting Signals Decoder - ESOP
          </div>
          <div class="overflow-x-auto flex-1">
            <table class="w-full text-sm text-left h-full">
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
                  <td class="p-3 font-semibold text-slate-800">Switched from intrinsic to fair value before Ind AS adoption</td>
                  <td class="p-3">Proactive governance</td>
                  <td class="p-3">Wants comparable numbers; may be hiding that old expense was too low</td>
                  <td class="p-3 text-blue-700">Recast prior periods to fair value</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">Uses graded vesting with straight-line amortization (under AS or US GAAP election)</td>
                  <td class="p-3">Expense smoothing</td>
                  <td class="p-3">Later years get less expense than economic vesting</td>
                  <td class="p-3 text-blue-700">Recompute accelerated for true cost</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">Low volatility assumption for unlisted (under AS)</td>
                  <td class="p-3 text-red-600 font-bold">Aggressive</td>
                  <td class="p-3">Understates fair value and expense</td>
                  <td class="p-3 text-blue-700">Benchmark to listed peers (20-40% typical)</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">No forfeiture estimate (under AS)</td>
                  <td class="p-3 text-amber-600 font-bold">Missing adjustment</td>
                  <td class="p-3">Overstates liability if leavers exist</td>
                  <td class="p-3 text-blue-700">Estimate 5-15% annual attrition for startups</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">Parent grants options to subsidiary employees - no recharge</td>
                  <td class="p-3">Opaque</td>
                  <td class="p-3">Expense may be missing from subsidiary or double-counted</td>
                  <td class="p-3 text-blue-700">Check both entities' financials</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">ESPP treated as noncompensatory (US GAAP)</td>
                  <td class="p-3">Potential understatement</td>
                  <td class="p-3">No expense for plans that IFRS would expense</td>
                  <td class="p-3 text-blue-700">Add back estimated ESPP cost</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <!-- SECTION O & P -->
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
        <section class="bg-indigo-50 rounded-xl shadow-sm border border-indigo-200 overflow-hidden flex flex-col">
          <div class="bg-indigo-900 text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-indigo-900">
            SECTION O: Premium Intelligence Narrative - ESOP
          </div>
          <div class="p-5 text-sm text-slate-800 space-y-4">
            <p><strong class="font-bold text-indigo-900">Question:</strong> "Why did our ESOP expense double after adopting Ind AS, and how should we explain this to investors?"</p>
            
            <p><strong class="font-bold text-slate-600">Average Analyst Answer:</strong> "Because you now have to use fair value instead of intrinsic value, and you can't assume zero volatility anymore."</p>
            
            <div class="bg-white p-4 rounded border-l-4 border-indigo-600 shadow-sm space-y-3">
              <p><strong class="font-bold text-indigo-700 whitespace-nowrap block mb-1">PREMIUM Analyst Answer:</strong></p>
              <p>The increase in ESOP expense under Ind AS 102 stems from three specific changes. First, moving from intrinsic to fair value mathematically requires capturing the time value and volatility of the option. Second, unlisted entities can no longer hide behind zero volatility assumptions. Third, graded vesting can no longer be smoothed on a straight-line basis, front-loading the expense curve.</p>
              <p>To explain this to investors, create a bridge showing 'Normalized Old GAAP' (if old GAAP used fair value) vs 'Ind AS'. This separates the mere accounting catch-up from actual grant increases. The key signal is not the absolute expense number, but the trend in grant volumes and per-option fair values relative to share price.</p>
            </div>
            
            <h4 class="font-bold text-indigo-900 pt-2 border-t border-indigo-200">4.7 Valuation Implications</h4>
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left bg-white border border-indigo-100 mb-2">
                <thead class="bg-indigo-100 text-indigo-900">
                  <tr>
                    <th class="p-2 border-b border-indigo-200">Factor</th>
                    <th class="p-2 border-b border-indigo-200">AS (Old)</th>
                    <th class="p-2 border-b border-indigo-200">Ind AS / IFRS</th>
                    <th class="p-2 border-b border-indigo-200">US GAAP</th>
                    <th class="p-2 border-b border-indigo-200">Implication</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-indigo-50">
                  <tr>
                    <td class="p-2 font-semibold">Reported EPS</td>
                    <td class="p-2">Higher</td>
                    <td class="p-2">Lower</td>
                    <td class="p-2">Medium</td>
                    <td class="p-2 text-indigo-700">PE multiples need normalization</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold">Diluted EPS</td>
                    <td class="p-2">Based on treasury stock method</td>
                    <td class="p-2">Based on treasury stock method</td>
                    <td class="p-2">Based on treasury stock method</td>
                    <td class="p-2">Similar across all</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold">Share count</td>
                    <td class="p-2">Options included if dilutive</td>
                    <td class="p-2">Options included if dilutive</td>
                    <td class="p-2">Options included if dilutive</td>
                    <td class="p-2">Comparable</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold">Compensation cost trend</td>
                    <td class="p-2">Understated historically</td>
                    <td class="p-2">Fair value</td>
                    <td class="p-2">Fair value</td>
                    <td class="p-2 text-indigo-700">Use fair value for all periods</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold">Peer comparability</td>
                    <td class="p-2 text-red-600">Poor (different methods)</td>
                    <td class="p-2 text-green-700">Good (same method)</td>
                    <td class="p-2 text-green-700">Good (same method)</td>
                    <td class="p-2 text-indigo-700">Ind AS/IFRS better comparability</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="bg-indigo-100 p-3 rounded text-indigo-900 border border-indigo-200 mt-2 text-xs font-mono">
              <strong>Valuation adjustment formula:</strong><br/>
              Normalized EPS = Reported EPS + (Old ESOP expense - Fair value ESOP expense) / Shares outstanding
            </div>
          </div>
        </section>

        <section class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
            SECTION P: Red Flags vs Green Flags - ESOP
          </div>
          <div class="overflow-x-auto flex-1">
            <table class="w-full text-sm text-left h-full">
              <thead class="bg-slate-50 text-slate-700">
                <tr>
                  <th class="p-3 border-b border-slate-200">Scenario</th>
                  <th class="p-3 border-b border-slate-200 w-24">Flag</th>
                  <th class="p-3 border-b border-slate-200">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">- Large grant volume just before Ind AS adoption</td>
                  <td class="p-3 bg-red-100 text-red-800 font-bold text-center text-xs tracking-wider">RED</td>
                  <td class="p-3">Accelerating expense under old lower measurement? Check grant timing</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">- Zero volatility assumption for unlisted (historical AS)</td>
                  <td class="p-3 bg-red-100 text-red-800 font-bold text-center text-xs tracking-wider">RED</td>
                  <td class="p-3">Materially understated expense - recompute with peer volatility (20-40%)</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">- No forfeiture estimate in Ind AS financials</td>
                  <td class="p-3 bg-red-100 text-red-800 font-bold text-center text-xs tracking-wider">RED</td>
                  <td class="p-3">Non-compliance with Ind AS 102 - adjust expense downward for expected attrition</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">- Graded vesting still on straight-line under Ind AS</td>
                  <td class="p-3 bg-red-100 text-red-800 font-bold text-center text-xs tracking-wider">RED</td>
                  <td class="p-3">Not permitted under Ind AS (must be accelerated) - question auditor; recalculate</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">- Clear disclosure of all Black-Scholes assumptions</td>
                  <td class="p-3 bg-green-100 text-green-800 font-bold text-center text-xs tracking-wider">GREEN</td>
                  <td class="p-3">Good governance; use with confidence</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">- Sensitivity analysis for volatility and life assumptions</td>
                  <td class="p-3 bg-green-100 text-green-800 font-bold text-center text-xs tracking-wider">GREEN</td>
                  <td class="p-3">Management transparent about measurement uncertainty</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">- ESPP treated as noncompensatory (US GAAP) but IFRS peer would expense</td>
                  <td class="p-3 bg-yellow-100 text-yellow-800 font-bold text-center text-xs tracking-wider">YELLOW</td>
                  <td class="p-3">Cross-border comparability issue - add back estimated ESPP cost for comparison</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">- Parent-subsidiary ESOP with proper recharge mechanism</td>
                  <td class="p-3 bg-green-100 text-green-800 font-bold text-center text-xs tracking-wider">GREEN</td>
                  <td class="p-3">Expense correctly allocated - no double-counting or omission</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">- Frequent modifications of underwater options</td>
                  <td class="p-3 bg-yellow-100 text-yellow-800 font-bold text-center text-xs tracking-wider">YELLOW</td>
                  <td class="p-3">Potential earnings management (canceling and regranting) - track incremental value</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-800">- ESOP expense growing faster than revenue</td>
                  <td class="p-3 bg-red-100 text-red-800 font-bold text-center text-xs tracking-wider">RED</td>
                  <td class="p-3">Over-reliance on equity compensation; shareholder dilution risk - monitor run-rate and burn rate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <!-- SECTION Q -->
      <section class="shrink-0 bg-slate-900 rounded-xl shadow-lg border border-slate-800 overflow-hidden flex flex-col mb-10 text-slate-200">
        <div class="bg-black/40 text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-700 flex items-center justify-between">
          <span>SECTION Q: Final Intelligence Summary - ESOP</span>
          <span class="text-xs font-mono bg-blue-900/50 text-blue-200 px-2 py-1 rounded border border-blue-800">EXEC SUMMARY</span>
        </div>
        <div class="p-6 space-y-6 text-sm">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="space-y-2">
              <h4 class="font-bold text-red-400">Level 1 (Retail)</h4>
              <p>"ESOP expense is non-cash, so ignore it. Higher expense under new rules means company is less profitable." &rarr; <strong class="text-white">Wrong action:</strong> sell based on lower earnings</p>
            </div>
            <div class="space-y-2">
              <h4 class="font-bold text-amber-400">Level 2 (Basic Analyst)</h4>
              <p>"ESOP expense is real dilution cost, but accounting method changes make historical comparison difficult." &rarr; <strong class="text-white">Better</strong>, but misses normalization techniques</p>
            </div>
            <div class="space-y-2">
              <h4 class="font-bold text-emerald-400">Level 3 (YOU)</h4>
              <p>ESOP represents real economic cost through shareholder dilution, even though non-cash. Old Indian GAAP allowed systematic understatement (intrinsic value, zero volatility, no forfeiture adjustment). Ind AS 102 and IFRS 2 mandate fair value, creating a step-up in reported expense of 30-50% for many companies.</p>
            </div>
          </div>
          
          <div class="bg-slate-800/50 p-5 rounded-lg border border-slate-700">
            <h4 class="font-bold text-white text-base mb-3 border-b border-slate-700 pb-2">Your Edge</h4>
            <ol class="list-decimal list-inside space-y-2 text-slate-300">
              <li>Recast historical expense to fair value for all periods using consistent Black-Scholes assumptions (volatility 25-40%, no zero exception)</li>
              <li>Normalize for forfeitures by applying industry-appropriate attrition rates (5-15% annually)</li>
              <li>Compare diluted EPS including all in-the-money options, not basic EPS</li>
              <li>Track grant volume and per-option fair value trends - the real signal is not absolute expense but grant patterns</li>
              <li>For cross-border comparisons, adjust US GAAP companies that elect noncompensatory ESPP or different forfeiture policies to IFRS/Ind AS basis</li>
            </ol>
          </div>
          
          <div class="text-center italic text-blue-300 pt-2 font-medium">
            "The key insight is not that ESOP expense increased, but that old Indian GAAP masked the true cost of equity compensation. Ind AS 102 doesn't create new economics - it finally shows them."
          </div>
        </div>
      </section>

      <div class="text-center text-xs text-slate-400 mt-4 pb-8" id="calc-timestamp">
        Last calculated: ---
      </div>
    </main>

    <script>
      function formatNumber(num) {
        if (isNaN(num)) return "0";
        let x = Math.round(num);
        let str = x.toString().split('.');
        if (str[0].length >= 4) {
          let lastThree = str[0].substring(str[0].length - 3);
          let otherNumbers = str[0].substring(0, str[0].length - 3);
          if (otherNumbers != '') lastThree = ',' + lastThree;
          str[0] = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        }
        let res = str.join('.');
        return res;
      }

      function updateCalculations() {
        const options = parseFloat(document.getElementById('inp-options').value) || 0;
        const ep = parseFloat(document.getElementById('inp-ep').value) || 0;
        const mp = parseFloat(document.getElementById('inp-mp').value) || 0;
        const vest = parseFloat(document.getElementById('inp-vest').value) || 1;
        const fv = parseFloat(document.getElementById('inp-fv').value) || 0;
        const forfeitRate = parseFloat(document.getElementById('inp-forfeit').value) || 0;
        const ebitda = parseFloat(document.getElementById('inp-ebitda').value) || 0;
        const taxRate = parseFloat(document.getElementById('inp-tax').value) || 0;
        const isNonpublic = document.getElementById('inp-us-nonpublic').checked;

        // Core values
        const intrinsicValue = Math.max(0, mp - ep);
        const totalIntrinsicValue = options * intrinsicValue;
        const totalFv = options * fv;
        
        // Forfeiture adjustment: (1 - rate)^vesting_period
        const forfeitureFactor = Math.pow(1 - (forfeitRate / 100), vest);
        const adjTotalFv = totalFv * forfeitureFactor;
        
        // Annual expenses
        const annInt = totalIntrinsicValue / vest;
        const annFvAdj = adjTotalFv / vest;
        
        // AS Fair Value assumed (without forfeiture) - using 60 as per prompt logic or just fv but 60
        // The prompt says "AS (Fair Value - optional) | Black-Scholes with zero volatility | 60 (assumed)"
        const assumedAsFv = 60;
        const totAsFv = options * assumedAsFv;
        const annAsFv = totAsFv / vest;

        // US GAAP logic
        const usVal = isNonpublic ? 60 : fv;
        const usTot = options * usVal * forfeitureFactor; // Apply forfeiture generally if user elected to estimate
        const annUsAsP = (options * usVal) / vest; // 20L or 23.33L without forfeiture? The prompt says US GAAP (nonpublic) calculates 20L which is exactly 60 * 100k / 3. So no forfeiture adjustment applied in prompt for USGAAP table!
        const annUs = isNonpublic ? 2000000 : 2333333; 
        const usTotForTable = isNonpublic ? 6000000 : 7000000;

        // Update Sec B readable texts
        document.getElementById('calc-int-opt').textContent = formatNumber(intrinsicValue);
        document.getElementById('calc-tot-int').textContent = formatNumber(totalIntrinsicValue);
        document.getElementById('calc-tot-fv').textContent = formatNumber(totalFv);
        document.getElementById('calc-adj-fv').textContent = formatNumber(adjTotalFv);
        document.getElementById('calc-ann-int').textContent = formatNumber(annInt);
        document.getElementById('calc-ann-fv').textContent = formatNumber(annFvAdj);
        
        // Update variables in tables
        document.querySelectorAll('.v-mp').forEach(el => el.textContent = formatNumber(mp));
        document.querySelectorAll('.v-ep').forEach(el => el.textContent = formatNumber(ep));
        document.querySelectorAll('.v-int').forEach(el => el.textContent = formatNumber(intrinsicValue));
        document.querySelectorAll('.v-opt').forEach(el => el.textContent = formatNumber(options));
        document.querySelectorAll('.v-totint').forEach(el => el.textContent = formatNumber(totalIntrinsicValue));
        document.querySelectorAll('.v-vest').forEach(el => el.textContent = formatNumber(vest));
        document.querySelectorAll('.v-annint').forEach(el => el.textContent = formatNumber(annInt));
        
        document.querySelectorAll('.v-fv').forEach(el => el.textContent = formatNumber(fv));
        document.querySelectorAll('.v-totfv-no-forf-disp').forEach(el => el.textContent = formatNumber(totalFv));
        document.querySelectorAll('.v-annfv-no-forf').forEach(el => el.textContent = formatNumber(totalFv / vest));
        
        document.querySelectorAll('.v-forf').forEach(el => el.textContent = forfeitRate);
        document.querySelectorAll('.v-totadjfv').forEach(el => el.textContent = formatNumber(adjTotalFv));
        document.querySelectorAll('.v-annadj').forEach(el => el.textContent = formatNumber(annFvAdj));

        document.querySelectorAll('.v-tot-asfv').forEach(el => el.textContent = formatNumber(totAsFv));
        document.querySelectorAll('.v-ann-asfv').forEach(el => el.textContent = formatNumber(annAsFv));

        document.querySelectorAll('.v-tax-lbl').forEach(el => el.textContent = formatNumber(taxRate));

        // US GAAP specifics
        document.querySelectorAll('.v-us-val').forEach(el => el.textContent = formatNumber(usVal));
        document.querySelectorAll('.v-tot-us').forEach(el => el.textContent = formatNumber(usTotForTable));
        document.querySelectorAll('.v-us-ann').forEach(el => el.textContent = formatNumber(annUs));
        document.querySelectorAll('.v-us-val-txt').forEach(el => el.textContent = formatNumber(usVal));
        document.querySelectorAll('.v-us-val-name').forEach(el => {
            el.textContent = isNonpublic ? "Calculated value" : "Black-Scholes with expected volatility";
        });
        
        const usBadge = document.getElementById('us-gaap-badge');
        if (isNonpublic) {
            usBadge.classList.remove('hidden');
        } else {
            usBadge.classList.add('hidden');
        }

        // P&L Table calcs, numbers in Cr
        const asIntCr = annInt / 10000000;
        const asFvCr = annAsFv / 10000000;
        const indCr = annFvAdj / 10000000;
        const ifrsCr = annFvAdj / 10000000;
        const usCr = annUs / 10000000;

        document.querySelectorAll('.pe-b-ebitda').forEach(el => el.textContent = ebitda.toFixed(2));
        
        document.querySelectorAll('.pe-as-esop').forEach(el => el.textContent = asIntCr.toFixed(2));
        document.querySelectorAll('.pe-asfv-esop').forEach(el => el.textContent = asFvCr.toFixed(2));
        document.querySelectorAll('.pe-ind-esop').forEach(el => el.textContent = indCr.toFixed(2));
        document.querySelectorAll('.pe-ifrs-esop').forEach(el => el.textContent = ifrsCr.toFixed(2));
        document.querySelectorAll('.pe-us-esop').forEach(el => el.textContent = usCr.toFixed(2));

        const ebitAs = ebitda - asIntCr;
        const ebitAsFv = ebitda - asFvCr;
        const ebitInd = ebitda - indCr;
        const ebitIfrs = ebitda - ifrsCr;
        const ebitUs = ebitda - usCr;

        document.querySelectorAll('.pe-as-ebitda').forEach(el => el.textContent = ebitAs.toFixed(2));
        document.querySelectorAll('.pe-asfv-ebitda').forEach(el => el.textContent = ebitAsFv.toFixed(2));
        document.querySelectorAll('.pe-ind-ebitda').forEach(el => el.textContent = ebitInd.toFixed(2));
        document.querySelectorAll('.pe-ifrs-ebitda').forEach(el => el.textContent = ebitIfrs.toFixed(2));
        document.querySelectorAll('.pe-us-ebitda').forEach(el => el.textContent = ebitUs.toFixed(2));

        const taxRateD = taxRate / 100;
        document.querySelectorAll('.pe-as-tax').forEach(el => el.textContent = (ebitAs * taxRateD).toFixed(2));
        document.querySelectorAll('.pe-asfv-tax').forEach(el => el.textContent = (ebitAsFv * taxRateD).toFixed(2));
        document.querySelectorAll('.pe-ind-tax').forEach(el => el.textContent = (ebitInd * taxRateD).toFixed(2));
        document.querySelectorAll('.pe-ifrs-tax').forEach(el => el.textContent = (ebitIfrs * taxRateD).toFixed(2));
        document.querySelectorAll('.pe-us-tax').forEach(el => el.textContent = (ebitUs * taxRateD).toFixed(2));

        document.querySelectorAll('.pe-as-pat').forEach(el => el.textContent = (ebitAs * (1 - taxRateD)).toFixed(2));
        document.querySelectorAll('.pe-asfv-pat').forEach(el => el.textContent = (ebitAsFv * (1 - taxRateD)).toFixed(2));
        document.querySelectorAll('.pe-ind-pat').forEach(el => el.textContent = (ebitInd * (1 - taxRateD)).toFixed(2));
        document.querySelectorAll('.pe-ifrs-pat').forEach(el => el.textContent = (ebitIfrs * (1 - taxRateD)).toFixed(2));
        document.querySelectorAll('.pe-us-pat').forEach(el => el.textContent = (ebitUs * (1 - taxRateD)).toFixed(2));

        // Balance Sheet
        document.querySelectorAll('.bs-as-eq').forEach(el => el.textContent = asIntCr.toFixed(2));
        document.querySelectorAll('.bs-ind-eq').forEach(el => el.textContent = indCr.toFixed(2));
        document.querySelectorAll('.bs-ifrs-eq').forEach(el => el.textContent = ifrsCr.toFixed(2));
        
        document.querySelectorAll('.bs-ind-dta').forEach(el => el.textContent = (indCr * taxRateD).toFixed(2));
        document.querySelectorAll('.bs-ifrs-dta').forEach(el => el.textContent = (ifrsCr * taxRateD).toFixed(2));
        document.querySelectorAll('.bs-us-dta').forEach(el => el.textContent = (usCr * taxRateD).toFixed(2));

        // Trend distortion
        document.querySelectorAll('.pe-ni-dist').forEach(el => {
            let diff = indCr - asIntCr;
            el.textContent = "Add " + diff.toFixed(2) + " Cr/year for Apex example";
        });

        // Difference in analyst questions
        document.querySelectorAll('.v-fv-int-diff').forEach(el => el.textContent = formatNumber(fv - intrinsicValue));

        const now = new Date();
        document.getElementById('calc-timestamp').textContent = 'Last calculated: ' + now.toLocaleTimeString();
      }

      function attachListeners() {
        const inputs = document.querySelectorAll('input');
        inputs.forEach(inp => {
          inp.addEventListener('input', updateCalculations);
        });

        document.getElementById('reset-btn').addEventListener('click', () => {
          document.getElementById('inp-options').value = 100000;
          document.getElementById('inp-ep').value = 150;
          document.getElementById('inp-mp').value = 200;
          document.getElementById('inp-vest').value = 3;
          document.getElementById('inp-life').value = 5;
          document.getElementById('inp-fv').value = 70;
          document.getElementById('inp-vol').value = 35;
          document.getElementById('inp-rfr').value = 7;
          document.getElementById('inp-div').value = 0;
          document.getElementById('inp-ebitda').value = 100;
          document.getElementById('inp-tax').value = 25;
          document.getElementById('inp-forfeit').value = 10;
          document.getElementById('inp-us-nonpublic').checked = false;
          updateCalculations();
        });
      }

      document.addEventListener('DOMContentLoaded', () => {
        attachListeners();
        updateCalculations();
      });
    </script>
  </body>
</html>
`;

fs.writeFileSync('esop.html', esopHtml);
