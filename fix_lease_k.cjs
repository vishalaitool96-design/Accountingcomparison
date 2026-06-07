const fs = require('fs');

let html = fs.readFileSync('lease.html', 'utf8');

if (!html.includes('Ratio Interpretation Guide')) {
  const sectionK = `
      <!-- SECTION K: Ratio Interpretation Guide -->
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION K: Ratio Interpretation Guide
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700 border-b border-slate-200">
              <tr>
                <th class="p-2 border-r border-slate-200 w-1/4">Ratio</th>
                <th class="p-2 border-r border-slate-200 w-1/4">Rep. Value</th>
                <th class="p-2 border-r border-slate-200 w-1/4">What analyst should do</th>
                <th class="p-2 w-1/4">Correct interpretation</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-2 font-bold">Debt/Equity</td>
                <td class="p-2 text-red-600">Higher under Ind AS</td>
                <td class="p-2 text-xs text-slate-600">Exclude lease liabilities for classical debt covenants.</td>
                <td class="p-2 text-xs">A spike is a reporting illusion; real debt didn't change unless new leases were signed.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-2 font-bold">EBITDA Margin</td>
                <td class="p-2 text-green-600">Higher under Ind AS</td>
                <td class="p-2 text-xs text-slate-600">Subtract right-of-use asset depreciation or actual lease payments.</td>
                <td class="p-2 text-xs">EBITDA is artificially boosted because rent is shifted below the EBITDA line.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-2 font-bold">Return on Assets (ROA)</td>
                <td class="p-2 text-red-600">Lower under Ind AS</td>
                <td class="p-2 text-xs text-slate-600">Remove ROU Assets from the asset base.</td>
                <td class="p-2 text-xs">The asset base expanded mechanically, making capital efficiency look worse initially.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-2 font-bold">Interest Coverage</td>
                <td class="p-2 text-red-600">Lower under Ind AS</td>
                <td class="p-2 text-xs text-slate-600">Exclude the implied lease interest expense.</td>
                <td class="p-2 text-xs">Interest expense includes a non-cash lease interest component; true cash-interest coverage is stronger.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
`;

  // Find where SECTION J ends
  const jIndex = html.indexOf('SECTION J: Trend Distortion Matrix');
  if (jIndex !== -1) {
    const endSectionStr = '</section>';
    const jEnd = html.indexOf(endSectionStr, jIndex);
    if (jEnd !== -1) {
       const insertPos = jEnd + endSectionStr.length;
       html = html.slice(0, insertPos) + '\n' + sectionK + html.slice(insertPos);
    }
  }
  fs.writeFileSync('lease.html', html);
  console.log("Updated lease.html");
} else {
  console.log("lease.html already has Ratio Interpretation Guide");
}
