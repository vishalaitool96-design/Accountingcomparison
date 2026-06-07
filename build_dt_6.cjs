const fs = require('fs');

const sectionN_to_Footer = `
      <!-- SECTION N -->
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
                <td class="p-3 font-semibold text-slate-800">Emphasises "low ETR from permanent benefits"</td>
                <td class="p-3 text-teal-600 font-bold">Positive spin</td>
                <td class="p-3">May be sustainable if truly permanent (e.g., tax holidays).</td>
                <td class="p-3">Verify expiry date of tax incentives.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Avoids disclosing valuation allowance movement</td>
                <td class="p-3 text-red-600 font-bold">Opacity</td>
                <td class="p-3">DTA may be at risk; management hiding impairment.</td>
                <td class="p-3">Request full rollforward of valuation allowance.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Provides detailed tax reconciliation and uncertain position table</td>
                <td class="p-3 text-emerald-600 font-bold">Transparency</td>
                <td class="p-3">High-quality tax governance; management not hiding risk.</td>
                <td class="p-3">Green flag; rely more on reported ETR.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Suddenly reverses large DTA without explanation</td>
                <td class="p-3 text-amber-600 font-bold">Earnings management</td>
                <td class="p-3">Prior periods likely overstated profit.</td>
                <td class="p-3">Recast prior year earnings; treat as red flag.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION O -->
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col p-6">
        <div class="border-l-4 border-[#1a365d] pl-4 mb-4">
          <h3 class="text-lg font-bold text-[#1a365d] uppercase tracking-wide">SECTION O: Premium Intelligence Narrative</h3>
        </div>
        <div class="text-sm text-slate-700 space-y-4">
          <p><strong>Question:</strong> "Why can two identical companies have the same pre-tax income but different net income and ETR under the same standard?"</p>
          <p><strong>Average Analyst Answer:</strong> "Because one has more deferred tax assets."</p>
          <p><strong>PREMIUM Analyst Answer:</strong> "The difference arises from management judgement on DTA recognition and valuation allowances. Under Ind AS/IFRS, DTA is recognised only if "probable" future profit exists; under US GAAP, a "more likely than not" threshold applies. Two identical loss-making companies can report different net income if one management believes recovery is probable and the other does not. The same applies to uncertain tax positions – IFRS uses expected value, US GAAP uses a binary "more likely than not" then measurement at the largest benefit >50% likely. 
          
          The correct move is to ignore reported deferred tax adjustments for valuation purposes and instead forecast cash tax paid. For peer comps, compare cash effective tax rates, not book ETRs. The key signal is not the deferred tax number itself, but management's willingness to take a valuation allowance – that tells you their real confidence in future profits."</p>
        </div>
      </section>

      <!-- SECTION P -->
      <section class="shrink-0 mt-6 space-y-6">
        <h3 class="text-lg font-bold text-[#1a365d] uppercase tracking-wide border-l-4 border-[#1a365d] pl-4">SECTION P: Red Flags vs Green Flags Matrix</h3>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="bg-white rounded-xl shadow-sm border border-red-200 overflow-hidden">
            <div class="bg-red-50 text-red-800 px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-red-100">
              Red Flags
            </div>
            <ul class="divide-y divide-slate-100 text-sm">
              <li class="p-3 flex items-start gap-2 hover:bg-slate-50"><span class="text-red-500 font-bold">-</span> <span>Large DTA with no valuation allowance despite recent losses</span></li>
              <li class="p-3 flex items-start gap-2 hover:bg-slate-50"><span class="text-red-500 font-bold">-</span> <span>Valuation allowance increases every year</span></li>
              <li class="p-3 flex items-start gap-2 hover:bg-slate-50"><span class="text-red-500 font-bold">-</span> <span>No disclosure of uncertain tax positions in cross-border firms</span></li>
              <li class="p-3 flex items-start gap-2 hover:bg-slate-50"><span class="text-red-500 font-bold">-</span> <span>ETR below statutory rate for >3 years with no permanent benefit explanation</span></li>
              <li class="p-3 flex items-start gap-2 hover:bg-slate-50"><span class="text-red-500 font-bold">-</span> <span>Deferred tax liability declines while capex grows</span></li>
            </ul>
          </div>
          
          <div class="bg-white rounded-xl shadow-sm border border-emerald-200 overflow-hidden">
            <div class="bg-emerald-50 text-emerald-800 px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-emerald-100">
              Green Flags
            </div>
            <ul class="divide-y divide-slate-100 text-sm">
              <li class="p-3 flex items-start gap-2 hover:bg-slate-50"><span class="text-emerald-500 font-bold">-</span> <span>DTA with reasonable valuation allowance linked to clear forecast</span></li>
              <li class="p-3 flex items-start gap-2 hover:bg-slate-50"><span class="text-emerald-500 font-bold">-</span> <span>Stable or decreasing valuation allowance as profits improve</span></li>
              <li class="p-3 flex items-start gap-2 hover:bg-slate-50"><span class="text-emerald-500 font-bold">-</span> <span>Full rollforward of unrecognised tax benefits</span></li>
              <li class="p-3 flex items-start gap-2 hover:bg-slate-50"><span class="text-emerald-500 font-bold">-</span> <span>Clear reconciliation of ETR with identifiable drivers</span></li>
              <li class="p-3 flex items-start gap-2 hover:bg-slate-50"><span class="text-emerald-500 font-bold">-</span> <span>DTL grows in line with capital investment</span></li>
            </ul>
          </div>
        </div>

        <div class="bg-amber-50 rounded-xl shadow-sm border border-amber-200 overflow-hidden">
          <div class="bg-amber-100 text-amber-800 px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-amber-200">
            Amber (Watch List)
          </div>
          <ul class="divide-y divide-amber-100 text-sm">
            <li class="p-3 flex justify-between items-center hover:bg-amber-100/50">
              <span class="font-semibold text-slate-800">Large DTAs from past losses expiring within 2 years</span>
              <span class="text-slate-600">Model probability of utilisation; discount value heavily.</span>
            </li>
            <li class="p-3 flex justify-between items-center hover:bg-amber-100/50">
              <span class="font-semibold text-slate-800">Change in tax rate not applied to opening DTL/DTA correctly</span>
              <span class="text-slate-600">Recalculate yourself; restate prior periods.</span>
            </li>
            <li class="p-3 flex justify-between items-center hover:bg-amber-100/50">
              <span class="font-semibold text-slate-800">No mention of tax rate change impact on OCI items</span>
              <span class="text-slate-600">Check comprehensive income for mis-statement.</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- SECTION Q -->
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col p-6 mb-4">
        <div class="border-l-4 border-teal-600 pl-4 mb-4">
          <h3 class="text-lg font-bold text-[#1a365d] uppercase tracking-wide">SECTION Q: Final Intelligence Summary</h3>
        </div>
        <div class="text-sm text-slate-700 space-y-4">
          <p class="font-bold text-lg text-slate-800 pb-2 border-b border-slate-100">The Sophistication Hierarchy</p>
          <ul class="space-y-3">
            <li><strong>Level 1 (Retail Inventor):</strong> "Deferred tax asset increased, so future tax savings will boost profit." &rarr; <span class="text-red-600 font-bold">Wrong action. (DTA may never realise.)</span></li>
            <li><strong>Level 2 (Basic Analyst):</strong> "Effective tax rate is low, so earnings quality is good." &rarr; <span class="text-amber-600 font-bold">Misses the normalisation. (Low ETR may be from one-offs or aggressive DTA recognition.)</span></li>
            <li><strong>Level 3 (YOU):</strong> Tax economics were always there, but AS hid timing differences. Normalise cash tax, adjust for valuation allowance risk, and do not confuse deferred tax expense with real cash flow.</li>
          </ul>
          <div class="bg-teal-50 p-4 rounded text-teal-900 border border-teal-100 mt-4">
            <strong>Your Edge:</strong> You standardise effective tax rates across peers by comparing cash tax paid / operating cash flow, adjust for DTA expiry risk, and never value a company based on reported deferred tax assets without a realistic probability of recovery.
          </div>
        </div>
      </section>

      <div class="mt-4 text-center pb-4 shrink-0 border-t border-slate-200">
        <p class="text-sm text-slate-500 pt-4">Generated for Accounting Standards Comparison Hub | Premium Guide</p>
      </div>
    </main>

    <script>
      function updateCalculations() {
        const cost = parseFloat(document.getElementById('dt-cost').value) || 0;
        const life = parseFloat(document.getElementById('dt-life').value) || 1;
        const taxDepRate = parseFloat(document.getElementById('dt-tax-rate').value) / 100 || 0;
        const effectiveTaxRate = parseFloat(document.getElementById('dt-eff-tax').value) / 100 || 0;
        const pbt = parseFloat(document.getElementById('dt-pbt').value) || 0;
        const currentTax = parseFloat(document.getElementById('dt-current-tax').value) || 0;
        
        const bookDep = cost / life;
        const taxDep = cost * taxDepRate;
        const tempDiff = Math.abs(bookDep - taxDep);
        const dtl = tempDiff * effectiveTaxRate;

        document.getElementById('calc-book-dep').innerText = bookDep.toFixed(2) + ' Cr';
        document.getElementById('calc-tax-dep').innerText = taxDep.toFixed(2) + ' Cr';
        document.getElementById('calc-temp-diff').innerText = tempDiff.toFixed(2) + ' Cr';
        document.getElementById('calc-dtl').innerText = dtl.toFixed(2) + ' Cr';

        document.querySelectorAll('.val-dtl').forEach(el => el.innerText = dtl.toFixed(2) + ' Cr');
        document.getElementById('val-usgaap-dtl').innerText = dtl.toFixed(2) + ' Cr (assuming no valuation allowance)';

        document.querySelectorAll('.val-pbt').forEach(el => el.innerText = pbt.toFixed(2) + ' Cr');
        document.querySelectorAll('.val-curr-tax').forEach(el => el.innerText = '-' + currentTax.toFixed(2) + ' Cr');
        document.querySelectorAll('.val-curr-tax-pos').forEach(el => el.innerText = currentTax.toFixed(2) + ' Cr');
        document.querySelectorAll('.val-dtl-exp').forEach(el => el.innerText = '-' + dtl.toFixed(2) + ' Cr');
        document.getElementById('val-usgaap-dtl-exp').innerText = '-' + dtl.toFixed(2) + ' Cr (assume no valuation allowance)';

        const totalTax = currentTax + dtl;
        document.querySelectorAll('.val-total-tax').forEach(el => el.innerText = '-' + totalTax.toFixed(2) + ' Cr');

        const etr = pbt > 0 ? (totalTax / pbt) * 100 : 0;
        document.querySelectorAll('.val-etr').forEach(el => el.innerText = etr.toFixed(2) + '%');

        const now = new Date();
        const timeStr = now.toLocaleTimeString();
        document.getElementById('last-updated').innerText = timeStr;
      }

      document.querySelectorAll('input.dt-input').forEach(input => {
          input.addEventListener('input', updateCalculations);
      });

      document.getElementById('reset-btn').addEventListener('click', () => {
          document.getElementById('dt-cost').value = "100";
          document.getElementById('dt-life').value = "5";
          document.getElementById('dt-tax-rate').value = "40";
          document.getElementById('dt-eff-tax').value = "25";
          document.getElementById('dt-pbt').value = "100";
          document.getElementById('dt-current-tax').value = "25";
          document.getElementById('dt-equity').value = "300";
          document.getElementById('dt-assets').value = "500";
          updateCalculations();
      });

      updateCalculations();
    </script>
  </body>
</html>
`;

fs.appendFileSync('deferred-tax.html', sectionN_to_Footer);
console.log('section N to Footer done');
