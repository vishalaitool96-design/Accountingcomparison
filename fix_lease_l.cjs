const fs = require('fs');

let html = fs.readFileSync('lease.html', 'utf8');

if (!html.includes('SECTION L: Analyst Concerns')) {
  const sectionL = `
      <!-- SECTION L: Analyst Concerns & Answers -->
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION L: Analyst Concerns & Answers
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700 border-b border-slate-200">
              <tr>
                <th class="p-3 border-r border-slate-200 w-1/4">Analyst Question</th>
                <th class="p-3 border-r border-slate-200 w-1/4">Concern</th>
                <th class="p-3 border-r border-slate-200 w-1/4">Answer</th>
                <th class="p-3 w-1/4">Evidence</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">"Is the company taking on more debt?"</td>
                <td class="p-3 text-slate-600">Total debt on BS surged suddenly without any new operational borrowing.</td>
                <td class="p-3 text-slate-800">No. Operating leases were simply pushed onto the balance sheet.</td>
                <td class="p-3 text-slate-600 font-mono text-xs">Check Notes to Accounts for Lease Liabilities vs Traditional Bank Debt.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">"Is margin structurally improving?"</td>
                <td class="p-3 text-slate-600">EBITDA margin jumped by ~10-15% this year.</td>
                <td class="p-3 text-slate-800">No. Rent expense was removed from EBITDA and replaced by depreciation and interest below the line.</td>
                <td class="p-3 text-slate-600 font-mono text-xs">Compare 'Pre-Ind AS 116 EBITDA' or deduct cash rent paid.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">"Did operating cash flow get better?"</td>
                <td class="p-3 text-slate-600">CFO is much higher than last year.</td>
                <td class="p-3 text-slate-800">No. The principal portion of rent is now a Financing outflow, inflating Operating flows artificially.</td>
                <td class="p-3 text-slate-600 font-mono text-xs">Look at Cash CFF outflow for "Principal portion of lease payments".</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-bold">"Why did Earnings per Share drop?"</td>
                <td class="p-3 text-slate-600">Net income is lower despite identical business operations.</td>
                <td class="p-3 text-slate-800">Early years of a lease term have higher interest expense, front-loading the P&L hit compared to straight-line rent.</td>
                <td class="p-3 text-slate-600 font-mono text-xs">ROU Amortization schedule showing front-loaded total expense.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
`;

  // Find where SECTION K ends
  // Actually find <div class="mt-4 text-center pb-4 shrink-0 border-t border-slate-200"> 
  // which is at the end of the file or just after SECTION K.
  
  // Find SECTION K
  const kIndex = html.indexOf('SECTION K: Ratio Interpretation Guide');
  if (kIndex !== -1) {
    const endSectionStr = '</section>';
    const kEnd = html.indexOf(endSectionStr, kIndex);
    if (kEnd !== -1) {
       const insertPos = kEnd + endSectionStr.length;
       html = html.slice(0, insertPos) + '\n' + sectionL + html.slice(insertPos);
    }
  }
  fs.writeFileSync('lease.html', html);
  console.log("Updated lease.html");
} else {
  console.log("lease.html already has Analyst Concerns");
}
