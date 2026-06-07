const fs = require('fs');
const html = `
      <!-- SECTION B -->
      <section class="shrink-0 mt-6 bg-[#fffff0] rounded-xl shadow-sm border border-amber-200 overflow-hidden flex flex-col p-6">
        <div class="border-l-4 border-amber-500 pl-4 mb-6">
          <h3 class="text-lg font-bold text-amber-800 uppercase tracking-wide">SECTION B: Transaction Fact Pattern (Editable)</h3>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <h4 class="font-bold text-slate-700 border-b pb-2">Inputs</h4>
            <div class="grid grid-cols-2 gap-4 items-center">
              <label class="text-sm font-semibold text-slate-700">Bond face value (Cr)</label>
              <input type="number" id="fi-bond-face" value="100" class="fi-input border rounded px-3 py-1 w-full" />
              
              <label class="text-sm font-semibold text-slate-700">Bond coupon rate (%)</label>
              <input type="number" id="fi-bond-rate" value="8" class="fi-input border rounded px-3 py-1 w-full" />
              
              <label class="text-sm font-semibold text-slate-700">Bond term (years)</label>
              <input type="number" id="fi-bond-term" value="5" class="fi-input border rounded px-3 py-1 w-full" />
              
              <label class="text-sm font-semibold text-slate-700">Trade receivable (Cr)</label>
              <input type="number" id="fi-receivable" value="50" class="fi-input border rounded px-3 py-1 w-full" />
              
              <label class="text-sm font-semibold text-slate-700">Expected credit loss rate (%)</label>
              <input type="number" id="fi-ecl-rate" value="2" class="fi-input border rounded px-3 py-1 w-full" />

              <label class="text-sm font-semibold text-slate-700">Derivative notional (Cr)</label>
              <input type="number" id="fi-deriv-notional" value="100" class="fi-input border rounded px-3 py-1 w-full" />
              
              <label class="text-sm font-semibold text-slate-700">Derivative fair value loss (Cr)</label>
              <input type="number" id="fi-deriv-loss" value="2" class="fi-input border rounded px-3 py-1 w-full" />
              
              <label class="text-sm font-semibold text-slate-700">Base Revenue (Cr)</label>
              <input type="number" id="fi-revenue" value="200" class="fi-input border rounded px-3 py-1 w-full" />
              
              <label class="text-sm font-semibold text-slate-700">Operating expense (Cr)</label>
              <input type="number" id="fi-opex" value="150" class="fi-input border rounded px-3 py-1 w-full" />
              
              <label class="text-sm font-semibold text-slate-700">Tax rate (%)</label>
              <input type="number" id="fi-tax-rate" value="25" class="fi-input border rounded px-3 py-1 w-full" />
              
              <label class="text-sm font-semibold text-slate-700">Total Equity (Cr)</label>
              <input type="number" id="fi-equity" value="131.25" class="fi-input border rounded px-3 py-1 w-full" />
              
              <label class="text-sm font-semibold text-slate-700">Total Assets (Cr)</label>
              <input type="number" id="fi-assets" value="250" class="fi-input border rounded px-3 py-1 w-full" />
            </div>
            <button id="reset-btn" class="mt-4 px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded font-semibold text-sm transition-colors">Reset to Default</button>
          </div>
          
          <div class="space-y-4">
            <h4 class="font-bold text-slate-700 border-b pb-2">Read-only Details</h4>
            <div class="bg-white p-4 rounded border border-amber-100 space-y-3">
              <div class="flex justify-between">
                <span class="text-sm font-semibold text-slate-700">Company name</span>
                <span class="text-sm text-slate-800">Apex Instruments Ltd.</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm font-semibold text-slate-700">Bond type</span>
                <span class="text-sm text-slate-800 text-right">5-year bond, annual coupon, issued at par</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm font-semibold text-slate-700">Derivative type</span>
                <span class="text-sm text-slate-800 text-right">Interest rate swap (receive fixed 8%, pay floating LIBOR+1.5%)</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm font-semibold text-slate-700">Hedge accounting</span>
                <span class="text-sm text-slate-800">No hedge accounting applied</span>
              </div>
            </div>
            <div class="text-xs text-slate-500 text-right mt-2">Last recalculated: <span id="last-updated"></span></div>
          </div>
        </div>
      </section>

      <!-- SECTION C -->
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION C: Side-by-Side Treatment
        </div>
        <div class="p-4 overflow-x-auto space-y-6">
          <div class="space-y-2">
            <h4 class="font-bold text-slate-800 border-b border-slate-200 pb-2">AS Treatment (Indian GAAP)</h4>
            <p class="text-sm text-slate-700">
              <strong>Bond:</strong> Recognised at <span class="val-bond-face">100</span> Cr. Interest expense accrued at <span class="val-bond-rate">8</span>% = <span class="val-bond-int">8</span> Cr per year. No fair value adjustment.<br />
              <strong>Trade receivable:</strong> Recognised at <span class="val-receivable">50</span> Cr. No ECL provision - only actual write-offs when known.<br />
              <strong>Interest rate swap:</strong> Not recognised on balance sheet. No fair value change in P&L.<br />
              <strong>Year 1 P&L:</strong> Interest expense <span class="val-bond-int">8</span> Cr. No derivative loss. No credit loss expense. Total financial expense = <span class="val-bond-int">8</span> Cr.<br />
              <strong>Year 1 Balance Sheet:</strong> Bond liability <span class="val-bond-face">100</span> Cr. Receivable <span class="val-receivable">50</span> Cr. No derivative asset/liability. Equity higher due to lower expenses.
            </p>
          </div>
          
          <div class="space-y-2">
            <h4 class="font-bold text-slate-800 border-b border-slate-200 pb-2">Ind AS 109 & IFRS 9 Treatment</h4>
            <p class="text-sm text-slate-700">
              <strong>Bond:</strong> Amortised cost - <span class="val-bond-face">100</span> Cr principal, interest expense = <span class="val-bond-int">8</span> Cr.<br />
              <strong>Trade receivable:</strong> Amortised cost with ECL. Expected credit loss allowance = <span class="val-ecl-rate">2</span>% &times; <span class="val-receivable">50</span> Cr = <span class="val-ecl-amt">1</span> Cr. Net receivable = <span class="val-net-rec">49</span> Cr.<br />
              <strong>Interest rate swap:</strong> Recognised at FVTPL. Fair value loss <span class="val-deriv-loss">2</span> Cr recognised in P&L. Swap liability of <span class="val-deriv-loss">2</span> Cr on BS.<br />
              <strong>Year 1 P&L:</strong> Interest <span class="val-bond-int">8</span> Cr + derivative loss <span class="val-deriv-loss">2</span> Cr + credit loss expense <span class="val-ecl-amt">1</span> Cr = <span class="val-tot-exp">11</span> Cr total financial expense.
            </p>
          </div>

          <div class="space-y-2">
            <h4 class="font-bold text-slate-800 border-b border-slate-200 pb-2">US GAAP ASC 815, ASC 326 Treatment</h4>
            <p class="text-sm text-slate-700">
              Bond at amortised cost (<span class="val-bond-int">8</span> Cr interest), Trade Receivable has CECL allowance (<span class="val-ecl-amt">1</span> Cr), and Swap is at fair value through earnings (<span class="val-deriv-loss">2</span> Cr loss). Total expense: <span class="val-tot-exp">11</span> Cr.
            </p>
          </div>
        </div>
      </section>
`;
fs.appendFileSync('financial-instruments.html', html);
