const fs = require('fs');

let content = fs.readFileSync('impairment.html', 'utf-8');

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
                <th class="p-3 border-r border-slate-200 w-[16%]">Ind AS (Ind AS 36)</th>
                <th class="p-3 border-r border-slate-200 w-[16%]">IFRS (IAS 36)</th>
                <th class="p-3 border-r border-slate-200 w-[16%]">US GAAP (ASC 350 &amp; 360)</th>
                <th class="p-3 w-[16%]">Logic shift</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">Core philosophy</td>
                <td class="p-3">Impairment recognized if carrying amount > undiscounted future cash flows; loss = difference to fair value.</td>
                <td class="p-3">Single-step model: impair if carrying amount > recoverable amount (higher of fair value less costs to sell and value in use).</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Two-step for long-lived assets: (1) Recoverability test (undiscounted CFs), (2) Loss = fair value - carrying amount. Goodwill: qualitative or quantitative test at reporting unit level.</td>
                <td class="p-3 text-slate-600">From undiscounted CF triggers to discounted recoverable amount / fair value.</td>
              </tr>
              <tr class="bg-slate-50 hover:bg-slate-100">
                <td class="p-3 font-bold">Trigger for impairment</td>
                <td class="p-3">Significant change in operations/market, decline in asset value, or physical damage.</td>
                <td class="p-3">Indications at each reporting date (external + internal).</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Goodwill tested annually or more often if trigger; long-lived assets tested only when triggers exist.</td>
                <td class="p-3 text-slate-600">IFRS/Ind AS more proactive; US GAAP annual goodwill test required.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">Unit of account</td>
                <td class="p-3">Individual asset or cash generating unit (CGU) loosely defined.</td>
                <td class="p-3">CGU = smallest group generating independent cash inflows.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Long-lived assets: asset group level; Goodwill: reporting unit (one level below segment).</td>
                <td class="p-3 text-slate-600">IFRS CGU is more operational; US GAAP reporting unit is more financial-segment-aligned.</td>
              </tr>
              <tr class="bg-slate-50 hover:bg-slate-100">
                <td class="p-3 font-bold">Recoverable amount definition</td>
                <td class="p-3">Not explicitly defined; loss = carrying amount - fair value (if estimable).</td>
                <td class="p-3">Higher of fair value less costs of disposal (FVLCD) and value in use (VIU = PV of future CFs).</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Fair value (market price or DCF) used in step 2; no value in use concept.</td>
                <td class="p-3 text-slate-600">Ind AS/IFRS use VIU; US GAAP fair value only.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">Discounting</td>
                <td class="p-3">Not required for recoverability test.</td>
                <td class="p-3">Required for VIU (pre-tax discount rate).</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Used only in step 2 fair value measurement.</td>
                <td class="p-3 text-slate-600">Discounting embedded in core impairment math under new standards.</td>
              </tr>
              <tr class="bg-slate-50 hover:bg-slate-100">
                <td class="p-3 font-bold">Reversal of impairment</td>
                <td class="p-3">Allowed if conditions improve.</td>
                <td class="p-3">Prohibited for goodwill; allowed for other assets if recoverable amount increases.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Prohibited for all assets (once impaired, carrying amount cannot be increased).</td>
                <td class="p-3 text-slate-600">Key divergence: US GAAP most conservative; AS most flexible.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">Goodwill impairment</td>
                <td class="p-3">Amortized + tested for impairment if trigger.</td>
                <td class="p-3">Not amortized; tested annually; one-step: compare CGU carrying amount (incl. goodwill) vs recoverable amount.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Not amortized; tested annually; two-step (or qualitative option): compare reporting unit fair value vs carrying amount.</td>
                <td class="p-3 text-slate-600">Goodwill treated as a permanent asset under new standards, but tested rigorously.</td>
              </tr>
              <tr class="bg-slate-50 hover:bg-slate-100">
                <td class="p-3 font-bold">Allocation of goodwill</td>
                <td class="p-3">Not systematically required.</td>
                <td class="p-3">Allocate to CGUs expected to benefit from synergy.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Allocate to reporting units at acquisition.</td>
                <td class="p-3 text-slate-600">Systematic allocation required under all new standards.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">Intangible impairment</td>
                <td class="p-3">Same as tangible; no special rules.</td>
                <td class="p-3">Same rules as tangibles; indefinite life intangibles tested annually.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Indefinite life intangibles tested annually like goodwill; finite life tested on triggers.</td>
                <td class="p-3 text-slate-600">Indefinite-lived intangibles get separate attention under new rules.</td>
              </tr>
              <tr class="bg-slate-50 hover:bg-slate-100">
                <td class="p-3 font-bold">Disclosure volume</td>
                <td class="p-3">Minimal: only amount and basis.</td>
                <td class="p-3">Extensive: CGU details, discount rates, sensitivity analysis, assumptions.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Extensive but less required sensitivity than IFRS; fair value hierarchy disclosure.</td>
                <td class="p-3 text-slate-600">IFRS/Ind AS more narrative-heavy; US GAAP more quantitative fair value focus.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>`;

const sectionAStart = Array.from(content.matchAll(/<!-- SECTION A: Core Technical Comparison Table -->|<section[^>]*>[\s\S]*?SECTION A:/g))[0];
if (sectionAStart) {
   const before = content.substring(0, sectionAStart.index);
   const parts = content.substring(sectionAStart.index);
   const endMatch = parts.indexOf('<!-- SECTION B -->');
   if (endMatch !== -1) {
      const remaining = parts.substring(endMatch);
      content = before + '<!-- SECTION A: Core Technical Comparison Table -->\n      ' + replacement + '\n\n      ' + remaining;
   }
}

fs.writeFileSync('impairment.html', content);
