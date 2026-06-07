const fs = require('fs');
let html = fs.readFileSync('revenue.html', 'utf-8');

// Section B replacement
let sectionB = `<!-- SECTION B: Transaction Fact Pattern -->
      <section class="shrink-0 mt-6 bg-amber-50 rounded-xl shadow-sm border border-amber-200 overflow-hidden flex flex-col h-full" id="section-b">
        <div class="bg-amber-600 text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-amber-300 flex justify-between items-center">
          <span>SECTION B: Transaction Fact Pattern (EDITABLE)</span>
          <div>
            <button id="reset-btn" class="bg-white text-amber-700 hover:bg-amber-100 text-xs px-3 py-1 rounded shadow-sm mr-2 transition-colors inline-block cursor-pointer">Reset</button>
            <button id="copy-btn" class="bg-amber-800 hover:bg-amber-900 text-white text-xs px-3 py-1 rounded shadow-sm transition-colors border border-amber-500 inline-block cursor-pointer">Copy Results</button>
          </div>
        </div>
        <div class="p-5 flex-1 relative">
          <div class="absolute right-4 top-4 text-amber-700 opacity-10 font-bold text-6xl pointer-events-none">FACTS</div>
          <div id="validation-warning" class="hidden mb-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700 text-sm font-bold"></div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 relative z-10 text-sm">
            <div class="space-y-3">
              <div class="flex items-center justify-between"><label class="font-bold text-slate-700">Contract Price (Rs. Cr):</label> <input type="number" id="input-price" value="150" min="0" step="1" class="w-24 p-1 border border-slate-300 rounded text-right"></div>
              <div class="flex items-center justify-between"><label class="font-bold text-slate-700">Advance %:</label> <input type="number" id="input-adv" value="30" min="0" max="100" step="0.1" class="w-24 p-1 border border-slate-300 rounded text-right"></div>
              <div class="flex items-center justify-between"><label class="font-bold text-slate-700">Shipment %:</label> <input type="number" id="input-ship" value="40" min="0" max="100" step="0.1" class="w-24 p-1 border border-slate-300 rounded text-right"></div>
              <div class="flex items-center justify-between"><label class="font-bold text-slate-700">Acceptance %:</label> <input type="number" id="input-acc" value="30" min="0" max="100" step="0.1" class="w-24 p-1 border border-slate-300 rounded text-right"></div>
            </div>
            <div class="space-y-3">
              <div class="flex items-center justify-between"><label class="font-bold text-slate-700">Duration (months):</label> <input type="number" id="input-duration" value="18" min="1" step="1" class="w-24 p-1 border border-slate-300 rounded text-right"></div>
              <div class="flex items-center justify-between"><label class="font-bold text-slate-700">Est. Total Cost (Rs. Cr):</label> <input type="number" id="input-total-cost" value="120" min="0" step="1" class="w-24 p-1 border border-slate-300 rounded text-right"></div>
              <div class="flex items-center justify-between"><label class="font-bold text-teal-800">Cost Incurred Y1 (Rs. Cr):</label> <input type="number" id="input-cost-incurred" value="72" min="0" step="1" class="w-24 p-1 border border-teal-500 bg-teal-50 rounded text-right font-bold text-teal-900"></div>
              <div class="flex items-center justify-between"><label class="font-bold text-teal-800">Progress by Y1 (%):</label> <input type="number" id="input-progress" value="60" min="0" max="100" step="0.1" class="w-24 p-1 border border-teal-500 bg-teal-50 rounded text-right font-bold text-teal-900"></div>
            </div>
          </div>
          <div class="flex justify-between items-end mt-4 pt-4 border-t border-amber-200">
            <div class="text-xs text-amber-700">Base Business editable in Sections E & H.</div>
            <div class="text-xs font-mono text-slate-500" id="update-timestamp">Last updated: -</div>
          </div>
        </div>
      </section>`;

html = html.replace(/<!-- SECTION B: Transaction Fact Pattern -->[\s\S]*?<!-- SECTION C: Side-by-Side Treatment -->/, sectionB + "\n\n    <!-- SECTION C: Side-by-Side Treatment -->");

let sectionC = `<!-- SECTION C: Side-by-Side Treatment -->
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
                <td class="p-3 border-r border-slate-200 align-top"><span class="font-bold text-[#1a365d] block mb-1">Year 1</span><span id="c-as-y1">No revenue in Year 1</span></td>
                <td class="p-3 border-r border-slate-200 align-top"><span class="font-bold text-[#1a365d] block mb-1">Year 1</span><span id="c-indas-y1">Rs. 90 Cr revenue (60% of Rs. 150 Cr)</span></td>
                <td class="p-3 border-r border-slate-200 align-top"><span class="font-bold text-[#1a365d] block mb-1">Year 1</span>Same as Ind AS 115</td>
                <td class="p-3 align-top"><span class="font-bold text-[#1a365d] block mb-1">Year 1</span>Same as Ind AS 115</td>
              </tr>
              <tr class="bg-slate-50">
                <td class="p-3 border-r border-slate-200 align-top"><span class="font-bold text-[#1a365d] block mb-1">Year 2</span><span id="c-as-y2">Full Rs. 150 Cr in Year 2</span></td>
                <td class="p-3 border-r border-slate-200 align-top"><span class="font-bold text-[#1a365d] block mb-1">Year 2</span><span id="c-indas-y2">Rs. 60 Cr revenue</span></td>
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
                  <p id="c-je-as-y1"></p>
                  <p class="pt-2"><span class="text-slate-500 italic"># Year 2 (FY 2026-27)</span></p>
                  <p id="c-je-as-y2"></p>
                </div>
              </div>
              <div class="h-full">
                <h4 class="font-bold text-slate-800 mb-2 border-b border-slate-200 pb-1">Ind AS 115 / IFRS 15 / ASC 606 Treatment</h4>
                <div class="bg-slate-100 p-3 rounded font-mono text-slate-700 space-y-2 h-full">
                  <p><span class="text-slate-500 italic"># Year 1 (FY 2025-26)</span></p>
                  <p id="c-je-ind-y1"></p>
                  <p class="pt-2"><span class="text-slate-500 italic"># Year 2 (FY 2026-27)</span></p>
                  <p id="c-je-ind-y2"></p>
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>`;

html = html.replace(/<!-- SECTION C: Side-by-Side Treatment -->[\s\S]*?<!-- SECTION D: Side-by-Side Impact Table -->/, sectionC + "\n\n    <!-- SECTION D: Side-by-Side Impact Table -->");

let sectionD = `<tbody class="divide-y divide-slate-200">
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
          </tbody>`;
html = html.replace(/<tbody class="divide-y divide-slate-200">[\s\S]*?<\/tbody>/, sectionD); // Wait, this matches the first tbody. We should be careful and replace by explicit markers.

fs.writeFileSync('update2.js', '');
