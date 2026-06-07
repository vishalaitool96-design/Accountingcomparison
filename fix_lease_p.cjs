const fs = require('fs');

const sectionP = `<!-- SECTION P: Red Flags vs Green Flags (Visual Indicator Matrix) -->
      <section
        id="section-p"
        class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col"
      >
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION P: Red Flags vs Green Flags (Visual Indicator Matrix)
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-100 text-slate-700">
              <tr>
                <th class="p-3 border-r border-slate-200 w-1/2">Scenario</th>
                <th class="p-3 border-r border-slate-200 text-center w-24">Flag</th>
                <th class="p-3">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr class="bg-[#fee]">
                <td class="p-3 font-medium">Spike in 'short-term lease' expenses kept off balance sheet.</td>
                <td class="p-3 text-center font-bold text-red-700 uppercase tracking-widest">
                  <span class="text-red-500 mr-1">🔴</span>RED
                </td>
                <td class="p-3 text-red-900">Ensure management isn't structuring leases to &lt;12 months just to evade capitalization.</td>
              </tr>
              <tr class="bg-[#fee]">
                <td class="p-3 font-medium">Unusually high discount rates applied to lease liabilities.</td>
                <td class="p-3 text-center font-bold text-red-700 uppercase tracking-widest">
                  <span class="text-red-500 mr-1">🔴</span>RED
                </td>
                <td class="p-3 text-red-900">Compare to actual borrowing rates. High rates artificially shrink the reported lease liability.</td>
              </tr>
              <tr class="bg-[#efe]">
                <td class="p-3 font-medium">Clear reconciliation provided between pre and post Ind AS 116.</td>
                <td class="p-3 text-center font-bold text-green-700 uppercase tracking-widest">
                  <span class="text-green-500 mr-1">🟢</span>GREEN
                </td>
                <td class="p-3 text-green-900">Use management's reconciliation for accurate historical peer comparisons.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
`;

let html = fs.readFileSync('lease.html', 'utf8');
if (!html.includes('SECTION P: Red Flags vs Green Flags')) {
  let oIndex = html.indexOf('SECTION O: Premium Intelligence Narrative');
  let oEnd = html.indexOf('</section>', oIndex) + 10;
  html = html.slice(0, oEnd) + '\n\n      ' + sectionP + html.slice(oEnd);
  fs.writeFileSync('lease.html', html);
  console.log('updated lease.html');
}
