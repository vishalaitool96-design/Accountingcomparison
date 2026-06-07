const fs = require('fs');

let html = fs.readFileSync('revenue.html', 'utf8');

const replacementB = `    <!-- SECTION B: Transaction Fact Pattern -->
      <section class="shrink-0 mt-6 bg-amber-50 rounded-xl shadow-sm border border-amber-200 overflow-hidden flex flex-col h-full" id="section-b">
        <div class="bg-amber-600 text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-amber-300 flex justify-between items-center flex-wrap gap-2">
          <span>SECTION B: Transaction Fact Pattern (EDITABLE)</span>
          <div>
            <button id="reset-btn" class="bg-white text-amber-700 hover:bg-amber-100 text-xs px-3 py-1 rounded shadow-sm mr-2 transition-colors cursor-pointer font-bold">Reset to Default</button>
            <button id="copy-btn" class="bg-amber-800 hover:bg-amber-900 text-white text-xs px-3 py-1 rounded shadow-sm transition-colors border border-amber-500 cursor-pointer font-bold">Copy Results</button>
          </div>
        </div>
        <div class="p-5 flex-1 relative">
          <div class="absolute right-4 top-4 text-amber-700 opacity-10 font-bold text-6xl pointer-events-none">FACTS</div>
          <div id="validation-warning" class="hidden mb-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700 text-sm font-bold"></div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 relative z-10 text-sm">
            <div class="space-y-3">
              <div class="flex items-center justify-between"><label class="font-bold text-slate-700">Contract Price (Rs. Cr):</label> <input type="number" id="input-price" value="150" min="0" step="1" class="w-24 p-1 border border-slate-300 bg-white rounded text-right"></div>
              <div class="flex items-center justify-between"><label class="font-bold text-slate-700">Advance %:</label> <input type="number" id="input-adv-pct" value="30" min="0" max="100" step="0.1" class="w-24 p-1 border border-slate-300 bg-white rounded text-right"></div>
              <div class="flex items-center justify-between"><label class="font-bold text-slate-700">Shipment %:</label> <input type="number" id="input-ship-pct" value="40" min="0" max="100" step="0.1" class="w-24 p-1 border border-slate-300 bg-white rounded text-right"></div>
              <div class="flex items-center justify-between"><label class="font-bold text-slate-700">Acceptance %:</label> <input type="number" id="input-acc-pct" value="30" min="0" max="100" step="0.1" class="w-24 p-1 border border-slate-300 bg-white rounded text-right"></div>
            </div>
            <div class="space-y-3">
              <div class="flex items-center justify-between"><label class="font-bold text-slate-700">Duration (months):</label> <input type="number" id="input-duration" value="18" min="1" step="1" class="w-24 p-1 border border-slate-300 bg-white rounded text-right"></div>
              <div class="flex items-center justify-between"><label class="font-bold text-slate-700">Est. Total Cost (Rs. Cr):</label> <input type="number" id="input-total-cost" value="120" min="0" step="1" class="w-24 p-1 border border-slate-300 bg-white rounded text-right"></div>
              <div class="flex items-center justify-between"><label class="font-bold text-teal-800">Cost Incurred Y1 (Rs. Cr):</label> <input type="number" id="input-cost-incurred" value="72" min="0" step="1" class="w-24 p-1 border border-teal-500 bg-teal-50 rounded text-right font-bold text-teal-900"></div>
              <div class="flex items-center justify-between"><label class="font-bold text-teal-800">Progress Y1 (%):</label> <input type="number" id="input-progress-pct" value="60" min="0" max="100" step="0.1" class="w-24 p-1 border border-teal-500 bg-teal-50 rounded text-right font-bold text-teal-900"></div>
            </div>
          </div>
          <div class="flex justify-between items-end mt-4 pt-4 border-t border-amber-200">
            <div class="text-xs text-amber-700 opacity-80">
              Other inputs (Base Revenue, Equity, etc.) are editable in sections below.
            </div>
            <div class="text-xs font-mono text-slate-500" id="update-timestamp">Last updated: -</div>
          </div>
        </div>
      </section>`;

const bRegex = /<!-- SECTION B: Transaction Fact Pattern -->[\s\S]*?<!-- SECTION C: Side-by-Side Treatment -->/;
html = html.replace(bRegex, replacementB + '\n\n    <!-- SECTION C: Side-by-Side Treatment -->');

const replacementC = `<!-- SECTION C: Side-by-Side Treatment -->
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION C: Side-by-Side Treatment
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left h-full">
            <thead class="bg-slate-100 text-slate-700">
              <tr>
                <th class="p-3 border-b border-r border-slate-200 w-1/4">AS 9</th>
                <th class="p-3 border-b border-r border-slate-200 w-1/4">Ind AS 115</th>
                <th class="p-3 border-b border-r border-slate-200 w-1/4">IFRS 15</th>
                <th class="p-3 border-b border-slate-200 w-1/4">ASC 606</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 bg-white">
              <tr>
                <td class="p-3 border-r border-slate-200 align-top"><span class="font-bold text-[#1a365d] block mb-1">Year 1</span><span id="c-as-y1-text">No revenue in Year 1</span></td>
                <td class="p-3 border-r border-slate-200 align-top"><span class="font-bold text-[#1a365d] block mb-1">Year 1</span><span id="c-ind-y1-text">Rs. 90 Cr revenue (60% of Rs. 150 Cr)</span></td>
                <td class="p-3 border-r border-slate-200 align-top"><span class="font-bold text-[#1a365d] block mb-1">Year 1</span>Same as Ind AS 115</td>
                <td class="p-3 align-top"><span class="font-bold text-[#1a365d] block mb-1">Year 1</span>Same as Ind AS 115</td>
              </tr>
              <tr class="bg-slate-50">
                <td class="p-3 border-r border-slate-200 align-top"><span class="font-bold text-[#1a365d] block mb-1">Year 2</span><span id="c-as-y2-text">Full Rs. 150 Cr in Year 2</span></td>
                <td class="p-3 border-r border-slate-200 align-top"><span class="font-bold text-[#1a365d] block mb-1">Year 2</span><span id="c-ind-y2-text">Rs. 60 Cr revenue</span></td>
                <td class="p-3 border-r border-slate-200 align-top"><span class="font-bold text-[#1a365d] block mb-1">Year 2</span>Same as Ind AS 115</td>
                <td class="p-3 align-top"><span class="font-bold text-[#1a365d] block mb-1">Year 2</span>Same as Ind AS 115</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="border-t border-slate-200 shrink-0 mt-auto">
          <details class="group">
            <summary class="cursor-pointer font-bold text-sm bg-slate-50 p-3 hover:bg-slate-100 flex justify-between items-center text-[#1a365d]">
              View Journal Entry Details (Year 1 & 2)
              <span class="transition duration-300 group-open:-rotate-180">▼</span>
            </summary>
            <div class="p-4 bg-white grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px] xl:text-xs">
              <div>
                <h4 class="font-bold text-slate-800 mb-2 border-b border-slate-200 pb-1">AS 9 Treatment</h4>
                <div class="bg-slate-100 p-3 rounded font-mono text-slate-700 space-y-2">
                  <p><span class="text-slate-500 italic"># Year 1 (FY 2025-26)</span></p>
                  <div id="je-as-y1">
                    <p>Dr Bank ₹45 Cr<br>&nbsp;&nbsp;Cr Advance from customer ₹45 Cr</p>
                    <p>Dr WIP (inventory) ₹72 Cr<br>&nbsp;&nbsp;Cr Cash/Payables ₹72 Cr</p>
                  </div>
                  <p class="pt-2"><span class="text-slate-500 italic"># Year 2 (FY 2026-27)</span></p>
                  <div id="je-as-y2">
                    <p>Equipment shipped and accepted.<br>Remaining costs: ₹48 Cr (Total cost = ₹72 + ₹48 = ₹120 Cr).<br>Full revenue of ₹150 Cr recognized in Year 2.<br>Profit = ₹30 Cr.</p>
                  </div>
                </div>
              </div>
              <div class="h-full">
                <h4 class="font-bold text-slate-800 mb-2 border-b border-slate-200 pb-1">Ind AS 115 / IFRS 15 / ASC 606 Treatment</h4>
                <div class="bg-slate-100 p-3 rounded font-mono text-slate-700 space-y-2 h-full">
                  <p><span class="text-slate-500 italic"># Year 1 (FY 2025-26)</span></p>
                  <div id="je-ind-y1">
                    <p>Dr Contract Asset ₹45 Cr <br>Dr Contract Liability (Advance utilized) ₹45 Cr <br>&nbsp;&nbsp;Cr Revenue ₹90 Cr</p>
                  </div>
                  <p class="pt-2"><span class="text-slate-500 italic"># Year 2 (FY 2026-27)</span></p>
                  <div id="je-ind-y2">
                    <p>Remaining progress 40%.<br>Revenue = ₹60 Cr.<br>Costs = ₹48 Cr.<br>Profit = ₹12 Cr.</p>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>`;

html = html.replace(/<!-- SECTION C: Side-by-Side Treatment -->[\s\S]*?<!-- SECTION D: Side-by-Side Impact Table -->/, replacementC + '\n\n    <!-- SECTION D: Side-by-Side Impact Table -->');

const replacementD = `<!-- SECTION D: Side-by-Side Impact Table -->
    <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
      <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
        SECTION D: Side-by-Side Impact Table (Project Only)
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left">
          <thead class="bg-slate-100 text-slate-700">
            <tr>
              <th class="p-3 border-r border-slate-200 w-1/5">P&L Impact</th>
              <th class="p-3 border-r border-slate-200 w-1/5">AS 9</th>
              <th class="p-3 border-r border-slate-200 w-1/5">Ind AS 115</th>
              <th class="p-3 border-r border-slate-200 w-1/5">IFRS 15</th>
              <th class="p-3 w-1/5">ASC 606</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200">
            <tr class="hover:bg-slate-50">
              <td class="p-3 font-bold">FY 25-26 Revenue</td><td class="p-3" id="d-as-r1">Rs. 0</td><td class="p-3" id="d-ind-r1">Rs. 90 Cr</td><td class="p-3" id="d-ifrs-r1">Rs. 90 Cr</td><td class="p-3" id="d-asc-r1">Rs. 90 Cr</td>
            </tr>
            <tr class="bg-slate-50 hover:bg-slate-100">
              <td class="p-3 font-bold">FY 25-26 Cost</td><td class="p-3" id="d-as-c1">Rs. 0</td><td class="p-3" id="d-ind-c1">Rs. 72 Cr</td><td class="p-3" id="d-ifrs-c1">Rs. 72 Cr</td><td class="p-3" id="d-asc-c1">Rs. 72 Cr</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-3 font-bold text-[#1a365d]">FY 25-26 Profit</td><td class="p-3 font-bold" id="d-as-p1">Rs. 0</td><td class="p-3 font-bold text-teal-600" id="d-ind-p1">Rs. 18 Cr</td><td class="p-3 font-bold text-teal-600" id="d-ifrs-p1">Rs. 18 Cr</td><td class="p-3 font-bold text-teal-600" id="d-asc-p1">Rs. 18 Cr</td>
            </tr>
            <tr class="border-t-4 border-slate-200 bg-slate-50 hover:bg-slate-100">
              <td class="p-3 font-bold">FY 26-27 Revenue</td><td class="p-3" id="d-as-r2">Rs. 150 Cr</td><td class="p-3" id="d-ind-r2">Rs. 60 Cr</td><td class="p-3" id="d-ifrs-r2">Rs. 60 Cr</td><td class="p-3" id="d-asc-r2">Rs. 60 Cr</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-3 font-bold">FY 26-27 Cost</td><td class="p-3" id="d-as-c2">Rs. 120 Cr</td><td class="p-3" id="d-ind-c2">Rs. 48 Cr</td><td class="p-3" id="d-ifrs-c2">Rs. 48 Cr</td><td class="p-3" id="d-asc-c2">Rs. 48 Cr</td>
            </tr>
            <tr class="bg-slate-50 hover:bg-slate-100">
              <td class="p-3 font-bold text-[#1a365d]">FY 26-27 Profit</td><td class="p-3 font-bold text-teal-600" id="d-as-p2">Rs. 30 Cr</td><td class="p-3 font-bold" id="d-ind-p2">Rs. 12 Cr</td><td class="p-3 font-bold" id="d-ifrs-p2">Rs. 12 Cr</td><td class="p-3 font-bold" id="d-asc-p2">Rs. 12 Cr</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>`;

html = html.replace(/<!-- SECTION D: Side-by-Side Impact Table -->[\s\S]*?<!-- METRICS GRID: E, F, G, H -->/, replacementD + '\n\n    <!-- METRICS GRID: E, F, G, H -->');

const replacementE = `<!-- SECTION E: P&L Impact -->
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200 flex justify-between items-center">
          <span>SECTION E: P&L Impact - Year 1</span>
        </div>
        <div class="p-3 bg-amber-50 border-b border-slate-200 text-xs flex flex-wrap gap-4 items-center">
          <span class="font-bold text-[#1a365d]">Base Business (Y1):</span>
          <div class="flex items-center gap-2"><label class="font-medium text-slate-700">Revenue (Rs. Cr):</label><input type="number" id="input-base-rev" value="400" step="1" class="w-16 p-1 border border-slate-300 rounded text-right bg-white"></div>
          <div class="flex items-center gap-2"><label class="font-medium text-slate-700">EBIT (Rs. Cr):</label><input type="number" id="input-base-ebit" value="40" step="1" class="w-16 p-1 border border-slate-300 rounded text-right bg-white"></div>
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left h-full">
            <thead class="bg-slate-100 text-slate-700">
              <tr>
                <th class="p-3 border-r border-slate-200">Line item - FY 25-26</th>
                <th class="p-3 border-r border-slate-200">AS 9</th>
                <th class="p-3 border-r border-slate-200">Ind AS 115</th>
                <th class="p-3 border-r border-slate-200">IFRS 15</th>
                <th class="p-3">ASC 606</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr><td class="p-3 font-medium">Revenue - base</td><td class="p-3" id="e-base-r-as">Rs. 400 Cr</td><td class="p-3" id="e-base-r-in">Rs. 400 Cr</td><td class="p-3" id="e-base-r-if">Rs. 400 Cr</td><td class="p-3" id="e-base-r-us">Rs. 400 Cr</td></tr>
              <tr class="bg-slate-50"><td class="p-3 font-medium">Revenue - project</td><td class="p-3" id="e-proj-r-as">Rs. 0 Cr</td><td class="p-3 text-teal-600 font-semibold" id="e-proj-r-in">Rs. 90 Cr</td><td class="p-3 text-teal-600 font-semibold" id="e-proj-r-if">Rs. 90 Cr</td><td class="p-3 text-teal-600 font-semibold" id="e-proj-r-us">Rs. 90 Cr</td></tr>
              <tr class="font-bold bg-teal-50"><td class="p-3">Total revenue</td><td class="p-3" id="e-tot-r-as">Rs. 400 Cr</td><td class="p-3 text-teal-700" id="e-tot-r-in">Rs. 490 Cr</td><td class="p-3 text-teal-700" id="e-tot-r-if">Rs. 490 Cr</td><td class="p-3 text-teal-700" id="e-tot-r-us">Rs. 490 Cr</td></tr>
              <tr><td class="p-3 font-medium">EBIT - base</td><td class="p-3" id="e-base-eb-as">Rs. 40 Cr</td><td class="p-3" id="e-base-eb-in">Rs. 40 Cr</td><td class="p-3" id="e-base-eb-if">Rs. 40 Cr</td><td class="p-3" id="e-base-eb-us">Rs. 40 Cr</td></tr>
              <tr class="bg-slate-50"><td class="p-3 font-medium">EBIT - project</td><td class="p-3" id="e-proj-eb-as">Rs. 0 Cr</td><td class="p-3 text-teal-600 font-semibold" id="e-proj-eb-in">Rs. 18 Cr</td><td class="p-3 text-teal-600 font-semibold" id="e-proj-eb-if">Rs. 18 Cr</td><td class="p-3 text-teal-600 font-semibold" id="e-proj-eb-us">Rs. 18 Cr</td></tr>
              <tr class="font-bold"><td class="p-3">Total EBIT</td><td class="p-3" id="e-tot-eb-as">Rs. 40 Cr</td><td class="p-3" id="e-tot-eb-in">Rs. 58 Cr</td><td class="p-3" id="e-tot-eb-if">Rs. 58 Cr</td><td class="p-3" id="e-tot-eb-us">Rs. 58 Cr</td></tr>
              <tr class="bg-slate-50"><td class="p-3 font-medium">Tax (25%)</td><td class="p-3" id="e-tax-as">Rs. 10 Cr</td><td class="p-3" id="e-tax-in">Rs. 14.5 Cr</td><td class="p-3" id="e-tax-if">Rs. 14.5 Cr</td><td class="p-3" id="e-tax-us">Rs. 14.5 Cr</td></tr>
              <tr class="font-bold text-[#1a365d] border-t-2 border-slate-300"><td class="p-3">PAT (Profit After Tax)</td><td class="p-3" id="e-pat-as">Rs. 30 Cr</td><td class="p-3" id="e-pat-in">Rs. 43.5 Cr</td><td class="p-3" id="e-pat-if">Rs. 43.5 Cr</td><td class="p-3" id="e-pat-us">Rs. 43.5 Cr</td></tr>
            </tbody>
          </table>
        </div>
      </section>`;

html = html.replace(/<!-- SECTION E: P&L Impact -->[\s\S]*?<!-- SECTION F: Balance Sheet Impact -->/, replacementE + '\n\n      <!-- SECTION F: Balance Sheet Impact -->');


const replacementF = `<!-- SECTION F: Balance Sheet Impact -->
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION F: Balance Sheet Impact - End of Year 1
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left h-full">
            <thead class="bg-slate-100 text-slate-700">
              <tr>
                <th class="p-3 border-r border-slate-200">Item</th>
                <th class="p-3 border-r border-slate-200">AS 9</th>
                <th class="p-3 border-r border-slate-200">Ind AS 115</th>
                <th class="p-3 border-r border-slate-200">IFRS 15</th>
                <th class="p-3">ASC 606</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr><td class="p-3 font-medium">Cash (advance)</td><td class="p-3" id="f-cash-as">Rs. 45 Cr</td><td class="p-3" id="f-cash-in">Rs. 45 Cr</td><td class="p-3" id="f-cash-if">Rs. 45 Cr</td><td class="p-3" id="f-cash-us">Rs. 45 Cr</td></tr>
              <tr class="bg-slate-50"><td class="p-3 font-medium">Contract/WIP asset</td><td class="p-3" id="f-asset-as">Rs. 72 Cr (Inv)</td><td class="p-3 font-semibold text-blue-700" id="f-asset-in">Rs. 45 Cr (Asset)</td><td class="p-3 font-semibold text-blue-700" id="f-asset-if">Rs. 45 Cr (Asset)</td><td class="p-3 font-semibold text-blue-700" id="f-asset-us">Rs. 45 Cr (Asset)</td></tr>
              <tr><td class="p-3 font-medium">Advance/contract liability</td><td class="p-3" id="f-liab-as">Rs. 45 Cr</td><td class="p-3" id="f-liab-in">Rs. 0</td><td class="p-3" id="f-liab-if">Rs. 0</td><td class="p-3" id="f-liab-us">Rs. 0</td></tr>
              <tr class="font-bold border-t-2 border-slate-300 bg-teal-50"><td class="p-3">Project equity impact</td><td class="p-3" id="f-eq-as">Rs. 0</td><td class="p-3 text-teal-700" id="f-eq-in">+Rs. 18 Cr</td><td class="p-3 text-teal-700" id="f-eq-if">+Rs. 18 Cr</td><td class="p-3 text-teal-700" id="f-eq-us">+Rs. 18 Cr</td></tr>
            </tbody>
          </table>
        </div>
      </section>`;

html = html.replace(/<!-- SECTION F: Balance Sheet Impact -->[\s\S]*?<!-- SECTION G: Cash Flow Impact -->/, replacementF + '\n\n      <!-- SECTION G: Cash Flow Impact -->');


const replacementG = `<!-- SECTION G: Cash Flow Impact -->
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION G: Cash Flow Impact - Year 1
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left h-full">
            <thead class="bg-slate-100 text-slate-700">
              <tr>
                <th class="p-3 border-r border-slate-200">CF Component</th>
                <th class="p-3 border-r border-slate-200">AS 9</th>
                <th class="p-3 border-r border-slate-200">Ind AS 115</th>
                <th class="p-3 border-r border-slate-200">IFRS 15</th>
                <th class="p-3">ASC 606</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr><td class="p-3 font-medium">CFO - cash from proj</td><td class="p-3" id="g-in-as">+Rs. 45 Cr</td><td class="p-3" id="g-in-in">+Rs. 45 Cr</td><td class="p-3" id="g-in-if">+Rs. 45 Cr</td><td class="p-3" id="g-in-us">+Rs. 45 Cr</td></tr>
              <tr class="bg-slate-50"><td class="p-3 font-medium">CFO - project costs</td><td class="p-3" id="g-out-as">-Rs. 72 Cr</td><td class="p-3" id="g-out-in">-Rs. 72 Cr</td><td class="p-3" id="g-out-if">-Rs. 72 Cr</td><td class="p-3" id="g-out-us">-Rs. 72 Cr</td></tr>
              <tr class="font-bold text-red-600 border-t-2 border-slate-300"><td class="p-3 text-[#1a365d]">Net CFO (project)</td><td class="p-3" id="g-net-as">-Rs. 27 Cr</td><td class="p-3" id="g-net-in">-Rs. 27 Cr</td><td class="p-3" id="g-net-if">-Rs. 27 Cr</td><td class="p-3" id="g-net-us">-Rs. 27 Cr</td></tr>
            </tbody>
          </table>
        </div>
      </section>`;

html = html.replace(/<!-- SECTION G: Cash Flow Impact -->[\s\S]*?<!-- SECTION H: Ratio Impact -->/, replacementG + '\n\n      <!-- SECTION H: Ratio Impact -->');

const replacementH = `<!-- SECTION H: Ratio Impact -->
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION H: Ratio Impact - Year 1
        </div>
        <div class="p-3 bg-amber-50 border-b border-slate-200 text-xs flex flex-wrap gap-4 items-center">
          <span class="font-bold text-[#1a365d]">Ratio Baseline:</span>
          <div class="flex items-center gap-1"><label>Prev Rev (Cr):</label><input type="number" id="input-prev-rev" value="400" step="1" class="w-16 p-1 border border-slate-300 rounded text-right bg-white"></div>
          <div class="flex items-center gap-1"><label>Equity (Cr):</label><input type="number" id="input-equity" value="200" step="1" class="w-16 p-1 border border-slate-300 rounded text-right bg-white"></div>
          <div class="flex items-center gap-1"><label>Assets (Cr):</label><input type="number" id="input-assets" value="500" step="1" class="w-16 p-1 border border-slate-300 rounded text-right bg-white"></div>
          <div class="flex items-center gap-1"><label>Shares (Cr):</label><input type="number" id="input-shares" value="10" step="0.1" class="w-16 p-1 border border-slate-300 rounded text-right bg-white"></div>
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left h-full">
            <thead class="bg-slate-100 text-slate-700">
              <tr>
                <th class="p-3 border-r border-slate-200">Ratio</th>
                <th class="p-3 border-r border-slate-200">AS 9</th>
                <th class="p-3 border-r border-slate-200">Ind AS/IFRS/US GAAP</th>
                <th class="p-3">Direction (Distorted)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr><td class="p-3 font-medium">Rev growth YOY</td><td class="p-3" id="h-gro-as">+0.0%</td><td class="p-3" id="h-gro-in">+22.5%</td><td class="p-3 text-blue-600 font-semibold" id="h-dir-gro">↑</td></tr>
              <tr class="bg-slate-50"><td class="p-3 font-medium">EBIT margin</td><td class="p-3" id="h-mar-as">10.0%</td><td class="p-3" id="h-mar-in">11.8%</td><td class="p-3 text-blue-600 font-semibold" id="h-dir-mar">↑</td></tr>
              <tr><td class="p-3 font-medium">ROE</td><td class="p-3" id="h-roe-as">15.0%</td><td class="p-3" id="h-roe-in">21.8%</td><td class="p-3 text-blue-600 font-semibold" id="h-dir-roe">↑</td></tr>
              <tr class="bg-slate-50"><td class="p-3 font-medium">Asset turnover</td><td class="p-3" id="h-ato-as">0.80x</td><td class="p-3" id="h-ato-in">0.98x</td><td class="p-3 text-blue-600 font-semibold" id="h-dir-ato">↑</td></tr>
              <tr><td class="p-3 font-medium">EPS</td><td class="p-3" id="h-eps-as">Rs. 3.00</td><td class="p-3" id="h-eps-in">Rs. 4.35</td><td class="p-3 text-blue-600 font-semibold" id="h-dir-eps">↑</td></tr>
            </tbody>
          </table>
        </div>
        <div class="p-4 bg-blue-50 border-t border-slate-200 border-l-4 border-l-blue-500 shrink-0 text-sm text-blue-900 mt-auto">
          <p><b>Section Note - Outcome Alignment:</b> For this revenue mix, Ind AS, IFRS and US GAAP drive the same P&L, BS, CF and ratio impacts — differences versus AS relate only to timing and presentation.</p>
        </div>
      </section>`;

html = html.replace(/<!-- SECTION H: Ratio Impact -->[\s\S]*?<!-- SECTION H\.1: Ratio Interpretation Guide -->/, replacementH + '\n    </div>\n\n    <!-- SECTION H.1: Ratio Interpretation Guide -->');


// Add the ID to section I td text so we can change it dynamically if needed
const replacementI = `<!-- SECTION I: Earnings Quality - Signals Table -->
    <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
      <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
        SECTION I: Earnings Quality - Signals Table
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left">
          <thead class="bg-slate-100 text-slate-700">
            <tr>
              <th class="p-3 border-r border-slate-200 w-1/4">Signal observed</th>
              <th class="p-3 border-r border-slate-200 w-1/4">What it means technically</th>
              <th class="p-3 border-r border-slate-200 w-1/4">Analyst interpretation</th>
              <th class="p-3 w-1/4">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200">
            <tr class="hover:bg-slate-50">
              <td class="p-3 font-semibold text-[#1a365d]" id="i-sig-1">Sharp jump in revenue in transition year vs AS</td>
              <td class="p-3" id="i-tech-1">Over-time contracts now recognized using cost-to-cost model; earlier AS deferred revenue.</td>
              <td class="p-3">Earnings are front-loaded, not necessarily "better"; economics unchanged.</td>
              <td class="p-3 font-semibold text-slate-800">Normalize by spreading project revenue over life.</td>
            </tr>
            <tr class="bg-slate-50 hover:bg-slate-100">
              <td class="p-3 font-semibold text-[#1a365d]" id="i-sig-2">Higher contract assets replacing inventory and advances</td>
              <td class="p-3">Same project WIP now presented as contract asset instead of inventory/advance.</td>
              <td class="p-3">No real change in risk; just reflects enforceable right to payment.</td>
              <td class="p-3 font-semibold text-slate-800">Treat as working capital, adjust WC metrics.</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-3 font-semibold text-[#1a365d]">Increase in disclosure volume on revenue</td>
              <td class="p-3">New standards require detailed contract and performance obligation disclosures.</td>
              <td class="p-3">More transparency → higher earnings quality if consistent.</td>
              <td class="p-3 font-semibold text-slate-800">Read revenue note like a mini-MD&A.</td>
            </tr>
            <tr class="bg-slate-50 hover:bg-slate-100">
              <td class="p-3 font-semibold text-[#1a365d]" id="i-sig-4">Margin stability despite revenue timing change</td>
              <td class="p-3" id="i-tech-4">Revenue moved forward but margin % remains similar across project life.</td>
              <td class="p-3">Underlying project economics are stable; only timing shifted.</td>
              <td class="p-3 font-semibold text-slate-800">Focus on lifetime contract, not single-year spikes.</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="p-3 font-semibold text-[#1a365d]">Greater judgment disclosures on variable consideration</td>
              <td class="p-3">Management now explicitly estimates and constrains variable consideration.</td>
              <td class="p-3">Earnings more judgment-sensitive; scope for optimism/conservatism.</td>
              <td class="p-3 font-semibold text-slate-800">Track estimate changes; challenge assumptions.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>`;
html = html.replace(/<!-- SECTION I: Earnings Quality - Signals Table -->[\s\S]*?<!-- SECTION J: Trend Distortion Matrix -->/, replacementI + '\n\n    <!-- SECTION J: Trend Distortion Matrix -->');


const replacementJ = `<!-- SECTION J: Trend Distortion Matrix -->
    <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
      <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
        SECTION J: Trend Distortion Matrix
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left">
          <thead class="bg-slate-100 text-slate-700">
            <tr>
              <th class="p-3 border-r border-slate-200">Metric</th>
              <th class="p-3 border-r border-slate-200">Distortion type</th>
              <th class="p-3 border-r border-slate-200">Duration</th>
              <th class="p-3 border-r border-slate-200">Correction method</th>
              <th class="p-3">Example</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200">
            <tr><td class="p-3 font-bold">Rev. growth</td><td class="p-3">One-time level shift</td><td class="p-3">2-3 years</td><td class="p-3">Recompute under old milestone basis.</td><td class="p-3" id="j-ex-gro">Rep. 28% vs Norm. 8%</td></tr>
            <tr class="bg-slate-50"><td class="p-3 font-bold">EBIT margin</td><td class="p-3">Temp elevation / Depression</td><td class="p-3">Until old rolls off</td><td class="p-3">Adjust EBIT to align with milestones.</td><td class="p-3" id="j-ex-mar">Rep. 11.8% vs Norm. 10.5%</td></tr>
            <tr><td class="p-3 font-bold">ROE</td><td class="p-3">Trans. spike / drop</td><td class="p-3">1-2 years</td><td class="p-3">Recalculate using average norm. earnings.</td><td class="p-3" id="j-ex-roe">Rep. 21.8% vs Norm. 16%</td></tr>
            <tr class="bg-slate-50"><td class="p-3 font-bold">WC days</td><td class="p-3">Structural shift</td><td class="p-3">Permanent</td><td class="p-3">Combine contract assets and trade receivables.</td><td class="p-3">Asset days look high vs Inv.</td></tr>
            <tr><td class="p-3 font-bold">EPS growth</td><td class="p-3">One-time boost / drag</td><td class="p-3">1-2 cycles</td><td class="p-3">Create pro forma EPS using old logic.</td><td class="p-3" id="j-ex-eps">EPS +45% vs +15%</td></tr>
          </tbody>
        </table>
      </div>
    </section>`;

html = html.replace(/<!-- SECTION J: Trend Distortion Matrix -->[\s\S]*?<!-- SECTION K: Analyst Concerns & Answers -->/, replacementJ + '\n\n    <!-- SECTION K: Analyst Concerns & Answers -->');

const replacementK = `<!-- SECTION K: Analyst Concerns & Answers -->
    <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
      <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
        SECTION K: Analyst Concerns & Answers
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left">
          <thead class="bg-slate-100 text-slate-700">
            <tr>
              <th class="p-3 border-r border-slate-200 w-1/4">Analyst question</th>
              <th class="p-3 border-r border-slate-200 w-1/4">Concern</th>
              <th class="p-3 border-r border-slate-200 w-1/4">Answer</th>
              <th class="p-3 w-1/4">Evidence</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200">
            <tr><td class="p-3 italic font-medium">"Is revenue growth real or accounting?"</td><td class="p-3">Fear that growth is standard-driven.</td><td class="p-3 text-slate-700" id="k-ans-1">Largely timing: same contracts, recognized over time now. Growth moved from X% to Y%.</td><td class="p-3 text-emerald-700 font-semibold">Same total project profit; cash flows unchanged.</td></tr>
            <tr class="bg-slate-50"><td class="p-3 italic font-medium">"Has margin quality improved?"</td><td class="p-3">Window-dressing.</td><td class="p-3 text-slate-700" id="k-ans-2">Lifetime margins unchanged; only period allocation changed. Margin moved from X% to Y%.</td><td class="p-3 text-emerald-700 font-semibold">Contract margin tables in notes.</td></tr>
            <tr><td class="p-3 italic font-medium">"Are contract assets riskier than inventory?"</td><td class="p-3">Uncollectible risk.</td><td class="p-3 text-slate-700">No - represent enforceable rights to payment.</td><td class="p-3 text-emerald-700 font-semibold">Right to payment disclosed.</td></tr>
            <tr class="bg-slate-50"><td class="p-3 italic font-medium">"Are IFRS and US GAAP outcomes different?"</td><td class="p-3">Lack of global comparability.</td><td class="p-3 text-slate-700">For these contracts, Ind AS, IFRS and ASC 606 are identical.</td><td class="p-3 text-emerald-700 font-semibold">Revenue profiles of peers.</td></tr>
          </tbody>
        </table>
      </div>
    </section>`;

html = html.replace(/<!-- SECTION K: Analyst Concerns & Answers -->[\s\S]*?<!-- SECTION L & M: Investor Perception & Signals -->/, replacementK + '\n\n    <!-- SECTION L & M: Investor Perception & Signals -->');


const replacementN = `<span class="font-bold text-[#1a365d]">Question:</span> "ABC Company's reported revenue growth changed to <span id="n-dyn-growth" class="text-teal-700 font-bold bg-teal-50 px-1 rounded">22.5%</span> after moving from AS to Ind AS/IFRS-style revenue recognition. Is this a genuine structural re-rating story or an accounting mirage?"`;

html = html.replace(/<span class="font-bold text-\[#1a365d\]">Question:<\/span> "ABC Company's revenue and EPS spiked after moving from AS to Ind AS\/IFRS-style revenue recognition. Is this a genuine structural re-rating story or an accounting mirage?"/, replacementN);


// APPEND THE SCRIPT TO THE BOTTOM
const jsLogic = `
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      // Elements
      const I = {
        price: document.getElementById('input-price'),
        advPct: document.getElementById('input-adv-pct'),
        shipPct: document.getElementById('input-ship-pct'),
        accPct: document.getElementById('input-acc-pct'),
        dur: document.getElementById('input-duration'),
        totCost: document.getElementById('input-total-cost'),
        costInc: document.getElementById('input-cost-incurred'),
        progPct: document.getElementById('input-progress-pct'),
        bRev: document.getElementById('input-base-rev'),
        bEbit: document.getElementById('input-base-ebit'),
        pRev: document.getElementById('input-prev-rev'),
        eq: document.getElementById('input-equity'),
        ass: document.getElementById('input-assets'),
        shr: document.getElementById('input-shares')
      };

      const W = document.getElementById('validation-warning');
      const timestamp = document.getElementById('update-timestamp');

      // Sync progress & cost
      I.costInc.addEventListener('input', () => {
        const c = parseFloat(I.costInc.value) || 0;
        const tot = parseFloat(I.totCost.value) || 0;
        if (tot > 0) I.progPct.value = ((c / tot) * 100).toFixed(1);
        recalc();
      });
      I.progPct.addEventListener('input', () => {
        const p = parseFloat(I.progPct.value) || 0;
        const tot = parseFloat(I.totCost.value) || 0;
        I.costInc.value = ((p / 100) * tot).toFixed(0);
        recalc();
      });

      Object.values(I).forEach(el => {
        if (el !== I.costInc && el !== I.progPct) {
          el.addEventListener('input', recalc);
        }
      });

      document.getElementById('reset-btn').addEventListener('click', () => {
        I.price.value = 150;
        I.advPct.value = 30;
        I.shipPct.value = 40;
        I.accPct.value = 30;
        I.dur.value = 18;
        I.totCost.value = 120;
        I.costInc.value = 72;
        I.progPct.value = 60;
        I.bRev.value = 400;
        I.bEbit.value = 40;
        I.pRev.value = 400;
        I.eq.value = 200;
        I.ass.value = 500;
        I.shr.value = 10;
        recalc();
      });

      document.getElementById('copy-btn').addEventListener('click', () => {
         const t = \`Revenue Y1: \${document.getElementById('d-ind-r1').innerText}
Profit Y1: \${document.getElementById('d-ind-p1').innerText}
EBIT Margin: \${document.getElementById('h-mar-in').innerText}
ROE: \${document.getElementById('h-roe-in').innerText}\`;
         navigator.clipboard.writeText(t);
         const b = document.getElementById('copy-btn');
         const old = b.innerText;
         b.innerText = "Copied!";
         setTimeout(() => b.innerText = old, 2000);
      });

      function f(n) { return 'Rs. ' + n.toFixed(2).replace(/\\.00$/, '') + (n !== 0 ? ' Cr' : ''); }
      function fC(n) { return (n>0?'+':'') + 'Rs. ' + Math.abs(n).toFixed(2).replace(/\\.00$/, '') + ' Cr'; }
      function get(el) { return document.getElementById(el); }
      function set(el, val) { const e = get(el); if(e) e.innerHTML = val; }

      function recalc() {
        const d = new Date();
        timestamp.innerText = 'Last updated: ' + d.toLocaleTimeString();

        const p = parseFloat(I.price.value)||0;
        const ad = parseFloat(I.advPct.value)||0;
        const sh = parseFloat(I.shipPct.value)||0;
        const ac = parseFloat(I.accPct.value)||0;
        const tc = parseFloat(I.totCost.value)||0;
        let ci = parseFloat(I.costInc.value)||0;
        const pr = Math.min((parseFloat(I.progPct.value)||0), 100);

        const br = parseFloat(I.bRev.value)||0;
        const be = parseFloat(I.bEbit.value)||0;
        const prV = parseFloat(I.pRev.value)||0;
        const eq = parseFloat(I.eq.value)||0;
        const ass = parseFloat(I.ass.value)||0;
        const shr = parseFloat(I.shr.value)||1;

        let w = [];
        if (p < 0 || tc < 0 || ci < 0) w.push("Values cannot be negative.");
        if (ci > tc) w.push("Cost incurred exceeds total estimated cost.");
        if (ad+sh+ac !== 100) w.push("Payment terms do not sum to 100%.");
        if (w.length > 0) {
          W.innerHTML = w.join('<br>');
          W.classList.remove('hidden');
        } else {
          W.classList.add('hidden');
        }

        // Section C
        let asY1Rev = 0; // standard assumption = no milestone Y1
        let indY1Rev = p * (pr / 100);
        
        set('c-as-y1-text', f(asY1Rev) + ' revenue in Year 1');
        set('c-ind-y1-text', f(indY1Rev) + ' revenue (' + pr.toFixed(1) + '% of ' + f(p) + ')');
        set('c-as-y2-text', 'Remaining ' + f(p - asY1Rev) + ' in Year 2');
        set('c-ind-y2-text', f(p - indY1Rev) + ' revenue');

        const asAdvCash = p * (ad/100);
        set('c-je-as-y1', \`Dr Bank \${f(asAdvCash)}<br>&nbsp;&nbsp;Cr Advance \${f(asAdvCash)}<br>Dr WIP \${f(ci)}<br>&nbsp;&nbsp;Cr Cash/Payables \${f(ci)}\`);
        set('c-je-as-y2', \`Equipment accepted.<br>Rem. costs: \${f(tc-ci)} (Total \${f(tc)}).<br>Revenue: \${f(p - asY1Rev)}.<br>Profit: \${f((p-asY1Rev) - (tc-ci))}.\`);
        
        set('je-as-y1', get('c-je-as-y1').innerHTML);
        set('je-as-y2', get('c-je-as-y2').innerHTML);

        const ca = p * (pr/100);
        const cl = asAdvCash; // assuming advance utilized against revenue
        set('je-ind-y1', \`Dr Bank \${f(asAdvCash)}<br>Dr Contract Asset (if unbilled) \${f(ca>cl?ca-cl:0)}<br>Dr Contract Liab (Adv utilized) \${f(ca>cl?cl:ca)}<br>&nbsp;&nbsp;Cr Revenue \${f(ca)}\`);
        set('je-ind-y2', \`Rem. progress \${(100 - pr).toFixed(1)}%.<br>Revenue = \${f(p - ca)}.<br>Costs = \${f(tc - ci)}.<br>Profit = \${f((p-ca) - (tc-ci))}.\`);

        // D: Impact
        let y1p_as = asY1Rev - 0; // Wait, AS9 doesn't hit P&L costs if no rev
        let asY1Cost = 0; // defer costs to WIP
        let indY1Cost = ci;
        let y1p_ind = indY1Rev - indY1Cost;

        set('d-as-r1', f(asY1Rev)); set('d-ind-r1', f(indY1Rev)); set('d-ifrs-r1', f(indY1Rev)); set('d-asc-r1', f(indY1Rev));
        set('d-as-c1', f(asY1Cost)); set('d-ind-c1', f(indY1Cost)); set('d-ifrs-c1', f(indY1Cost)); set('d-asc-c1', f(indY1Cost));
        set('d-as-p1', f(y1p_as)); set('d-ind-p1', f(y1p_ind)); set('d-ifrs-p1', f(y1p_ind)); set('d-asc-p1', f(y1p_ind));

        let asY2Rev = p - asY1Rev;
        let asY2Cost = tc - asY1Cost;
        let y2p_as = asY2Rev - asY2Cost;

        let indY2Rev = p - indY1Rev;
        let indY2Cost = tc - indY1Cost;
        let y2p_ind = indY2Rev - indY2Cost;

        set('d-as-r2', f(asY2Rev)); set('d-ind-r2', f(indY2Rev)); set('d-ifrs-r2', f(indY2Rev)); set('d-asc-r2', f(indY2Rev));
        set('d-as-c2', f(asY2Cost)); set('d-ind-c2', f(indY2Cost)); set('d-ifrs-c2', f(indY2Cost)); set('d-asc-c2', f(indY2Cost));
        set('d-as-p2', f(y2p_as)); set('d-ind-p2', f(y2p_ind)); set('d-ifrs-p2', f(y2p_ind)); set('d-asc-p2', f(y2p_ind));

        // E: P&L Year 1
        ['as','in','if','us'].forEach(s => {
          set('e-base-r-'+s, f(br));
          set('e-base-eb-'+s, f(be));
        });
        set('e-proj-r-as', f(asY1Rev)); set('e-proj-eb-as', f(y1p_as));
        ['in','if','us'].forEach(s => { set('e-proj-r-'+s, f(indY1Rev)); set('e-proj-eb-'+s, f(y1p_ind)); });

        let totR_as = br + asY1Rev; let totEb_as = be + y1p_as; let t_as = totEb_as * 0.25; let pat_as = totEb_as - t_as;
        let totR_in = br + indY1Rev; let totEb_in = be + y1p_ind; let t_in = totEb_in * 0.25; let pat_in = totEb_in - t_in;

        set('e-tot-r-as', f(totR_as)); set('e-tot-eb-as', f(totEb_as)); set('e-tax-as', f(t_as)); set('e-pat-as', f(pat_as));
        ['in','if','us'].forEach(s => { set('e-tot-r-'+s, f(totR_in)); set('e-tot-eb-'+s, f(totEb_in)); set('e-tax-'+s, f(t_in)); set('e-pat-'+s, f(pat_in)); });

        // F: BS
        ['as','in','if','us'].forEach(s => set('f-cash-'+s, f(asAdvCash)));
        set('f-asset-as', f(ci) + ' (Inv)');
        ['in','if','us'].forEach(s => {
             let ca1 = Math.max(0, indY1Rev - asAdvCash);
             set('f-asset-'+s, f(ca1) + ' (Asset)');
             let cl1 = Math.max(0, asAdvCash - indY1Rev);
             set('f-liab-'+s, f(cl1));
        });
        set('f-liab-as', f(asAdvCash - asY1Rev));
        
        set('f-eq-as', f(y1p_as));
        ['in','if','us'].forEach(s => set('f-eq-'+s, fC(y1p_ind)));

        // G: CF
        ['as','in','if','us'].forEach(s => {
          set('g-in-'+s, fC(asAdvCash));
          set('g-out-'+s, fC(-ci));
          set('g-net-'+s, fC(asAdvCash - ci));
        });

        // H: Ratio
        let g_as = prV? ((totR_as - prV)/prV)*100 : 0;
        let g_in = prV? ((totR_in - prV)/prV)*100 : 0;
        set('h-gro-as', (g_as>0?'+':'')+g_as.toFixed(1)+'%'); set('h-gro-in', (g_in>0?'+':'')+g_in.toFixed(1)+'%');
        set('h-dir-gro', g_in>g_as ? '↑' : (g_in<g_as?'↓':'='));

        let m_as = totR_as? (totEb_as/totR_as)*100 : 0;
        let m_in = totR_in? (totEb_in/totR_in)*100 : 0;
        set('h-mar-as', m_as.toFixed(1)+'%'); set('h-mar-in', m_in.toFixed(1)+'%');
        set('h-dir-mar', m_in>m_as ? '↑' : (m_in<m_as?'↓':'='));

        let roe_as = eq? (pat_as/eq)*100 : 0;
        let roe_in = eq? (pat_in/eq)*100 : 0;
        set('h-roe-as', roe_as.toFixed(1)+'%'); set('h-roe-in', roe_in.toFixed(1)+'%');
        set('h-dir-roe', roe_in>roe_as ? '↑' : (roe_in<roe_as?'↓':'='));

        let ato_as = ass? (totR_as/ass) : 0;
        let ato_in = ass? (totR_in/ass) : 0;
        set('h-ato-as', ato_as.toFixed(2)+'x'); set('h-ato-in', ato_in.toFixed(2)+'x');
        set('h-dir-ato', ato_in>ato_as ? '↑' : (ato_in<ato_as?'↓':'='));

        let eps_as = pat_as/shr;
        let eps_in = pat_in/shr;
        set('h-eps-as', f(eps_as)); set('h-eps-in', f(eps_in));
        set('h-dir-eps', eps_in>eps_as ? '↑' : (eps_in<eps_as?'↓':'='));

        // I
        if(indY1Rev > asY1Rev) {
           set('i-sig-1', 'Sharp jump in revenue in transition year vs AS');
           set('i-tech-1', 'Over-time contracts recognized using cost-to-cost model vs AS zero rev.');
        } else {
           set('i-sig-1', 'Revenue muted or equal in transition year');
           set('i-tech-1', 'Different profile based on new estimates.');
        }
        
        // J
        set('j-ex-gro', \`Rep. \${g_in.toFixed(1)}% vs Norm. \${g_as.toFixed(1)}%\`);
        set('j-ex-mar', \`Rep. \${m_in.toFixed(1)}% vs Norm. \${m_as.toFixed(1)}%\`);
        set('j-ex-roe', \`Rep. \${roe_in.toFixed(1)}% vs Norm. \${roe_as.toFixed(1)}%\`);
        let epsGrAs = eps_as? ((eps_as - (be*0.75/shr))/(be*0.75/shr))*100 : 0;
        let epsGrIn = eps_in? ((eps_in - (be*0.75/shr))/(be*0.75/shr))*100 : 0;
        set('j-ex-eps', \`EPS \${epsGrIn>=0?'+':''}\${epsGrIn.toFixed(0)}% vs \${epsGrAs>=0?'+':''}\${epsGrAs.toFixed(0)}%\`);

        // K
        const diffP = ((totR_in/totR_as)-1)*100;
        set('k-ans-1', 'Largely timing: same contracts, recognized over time now. Growth moved from ' + g_as.toFixed(1) + '% to ' + g_in.toFixed(1) + '%.');
        set('k-ans-2', 'Lifetime margins unchanged; only period allocation changed. Margin moved from ' + m_as.toFixed(1) + '% to ' + m_in.toFixed(1) + '%.');

        // N
        set('n-dyn-growth', g_in.toFixed(1) + '%');
      }

      recalc();
    });
  </script>
</body>`;

html = html.replace(/<\/body>/, jsLogic);

fs.writeFileSync('revenue.html', html);
console.log("Updated revenue.html with complete interactive logic.");
