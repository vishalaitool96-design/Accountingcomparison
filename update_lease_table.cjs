const fs = require('fs');

const rows = `                  <tr class="hover:bg-slate-50">
                    <td class="p-3 font-bold">Core philosophy</td>
                    <td class="p-3">Focuses on whether risks and rewards are transferred; operating vs finance distinction is central.</td>
                    <td class="p-3">Most leases go on balance sheet using right-of-use (ROU) model; lessee recognizes ROU asset and lease liability.</td>
                    <td class="p-3">Same ROU model as Ind AS.</td>
                    <td class="p-3">Most leases also go on balance sheet, but retains dual classification for lessee.</td>
                    <td class="p-3 text-slate-600 bg-blue-50/50">From off-balance-sheet rental expense to asset + liability recognition.</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-3 font-bold">Lessee accounting model</td>
                    <td class="p-3">Operating leases usually expensed straight-line; finance leases capitalized by substance.</td>
                    <td class="p-3">Single lessee model for most leases.</td>
                    <td class="p-3">Same single model.</td>
                    <td class="p-3">Dual model: finance lease vs operating lease classification remains.</td>
                    <td class="p-3 text-slate-600 bg-blue-50/50">From two-way classification to a more asset-liability-centric model.</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-3 font-bold">Recognition on balance sheet</td>
                    <td class="p-3">Operating leases often stayed off balance sheet, except finance leases.</td>
                    <td class="p-3">Recognize ROU asset and lease liability at commencement for most leases.</td>
                    <td class="p-3">Same as Ind AS.</td>
                    <td class="p-3">Recognize ROU asset and lease liability for most leases, but P&L differs by classification.</td>
                    <td class="p-3 text-slate-600 bg-blue-50/50">Hidden commitments become visible on the balance sheet.</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-3 font-bold">Initial measurement</td>
                    <td class="p-3">Finance lease assets/liab at lower of fair value and PV of minimum lease payments.</td>
                    <td class="p-3">Lease liab = PV of payments; ROU asset = liab adjusted for prepayments, incentives, initial direct costs.</td>
                    <td class="p-3">Same as Ind AS.</td>
                    <td class="p-3">Same initial measurement logic, with classification affecting later expense pattern.</td>
                    <td class="p-3 text-slate-600 bg-blue-50/50">From fixed capitalization rules to discounted PV of lease cash flows.</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-3 font-bold">Subsequent measurement (Lessee)</td>
                    <td class="p-3">Operating rentals expensed straight-line; finance lease liability reduced over time.</td>
                    <td class="p-3">Interest expense on liability + depreciation of ROU asset.</td>
                    <td class="p-3">Same as Ind AS.</td>
                    <td class="p-3">Finance: interest + amortization; Operating: straight-line lease expense with separate ROU/liab.</td>
                    <td class="p-3 text-slate-600 bg-blue-50/50">Expense recognition depends on economic use of right-to-use.</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-3 font-bold">P&L pattern</td>
                    <td class="p-3">Straight-line rent for operating, front-loaded interest for finance leases.</td>
                    <td class="p-3">Front-loaded total expense due to interest + depreciation, except short-term/low-value relief.</td>
                    <td class="p-3">Same as Ind AS.</td>
                    <td class="p-3">Operating lease expense usually straight-line; finance lease expense front-loaded.</td>
                    <td class="p-3 text-slate-600 bg-blue-50/50">Timing of expense is much more explicit and economically linked.</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-3 font-bold">Exemptions (Short-term & Low-value)</td>
                    <td class="p-3">Limited comparable old GAAP concept. Not central.</td>
                    <td class="p-3">Short-term (12m or less) and low-value assets may be expensed instead of capitalized.</td>
                    <td class="p-3">Same as Ind AS.</td>
                    <td class="p-3">Similar short-term exemption. No equivalent broad low-value exemption.</td>
                    <td class="p-3 text-slate-600 bg-blue-50/50">Removes immaterial leases from balance sheet to reduce noise.</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-3 font-bold">Lease term</td>
                    <td class="p-3">Based on contract/enforceable period, but less formalized.</td>
                    <td class="p-3">Includes non-cancellable period + extension/termination options if reasonably certain.</td>
                    <td class="p-3">Same as Ind AS.</td>
                    <td class="p-3">Similar "reasonably certain" framework.</td>
                    <td class="p-3 text-slate-600 bg-blue-50/50">Forces analysts to model options, not just legal minimum term.</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-3 font-bold">Variable payments & Index-linked</td>
                    <td class="p-3">Less structured. Not explicitly modeled.</td>
                    <td class="p-3">Included in liab only if based on index/rate or fixed in substance. Remeasured when index changes.</td>
                    <td class="p-3">Same as Ind AS.</td>
                    <td class="p-3">For operating leases, liab generally not remeasured for CPI changes (expensed as incurred).</td>
                    <td class="p-3 text-slate-600 bg-blue-50/50">Variable economics separated; Key difference between IFRS & US GAAP.</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-3 font-bold">Lease modifications</td>
                    <td class="p-3">Less formalized.</td>
                    <td class="p-3">Depends on whether new lease or reassessment is triggered.</td>
                    <td class="p-3">Same as Ind AS.</td>
                    <td class="p-3">Similar, but classification effects under US GAAP can differ.</td>
                    <td class="p-3 text-slate-600 bg-blue-50/50">Focus shift from form to reassessment of lease economics.</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-3 font-bold">Lessor accounting</td>
                    <td class="p-3">Generally mirrors transfer of risks and rewards.</td>
                    <td class="p-3">Lessor keeps classification model: finance vs operating lease.</td>
                    <td class="p-3">Same as Ind AS.</td>
                    <td class="p-3">Same broad lessor model.</td>
                    <td class="p-3 text-slate-600 bg-blue-50/50">Lessee changed dramatically; lessor changed less.</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-3 font-bold">Sale & leaseback</td>
                    <td class="p-3">Limited older guidance; substance over form.</td>
                    <td class="p-3">Specific accounting; gains recognized only to extent of transferred rights.</td>
                    <td class="p-3">Same as Ind AS.</td>
                    <td class="p-3">Similar, but detailed US guidance may differ in form.</td>
                    <td class="p-3 text-slate-600 bg-blue-50/50">Transactions judged on control transfer and retained rights.</td>
                  </tr>`;

let html = fs.readFileSync('lease.html', 'utf8');

const sIdx = html.indexOf('<tbody class="divide-y divide-slate-100">');
const eIdx = html.indexOf('</tbody>', sIdx);

if (sIdx > -1 && eIdx > -1) {
    html = html.substring(0, sIdx + 41) + '\n' + rows + '\n            ' + html.substring(eIdx);
    fs.writeFileSync('lease.html', html);
    console.log('Fixed table A!');
} else {
    console.log('Could not find tbody for A');
}
