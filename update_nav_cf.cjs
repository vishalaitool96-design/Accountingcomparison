const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'ppe_intel.html');

const navLink = '      <a href="cashflows.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">Cash Flows</a>\n    </nav>';

for (const f of files) {
  if (f === 'cashflows.html') continue; // already has it hardcoded correctly as active
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace('    </nav>', navLink);
  fs.writeFileSync(f, content);
  console.log('Updated nav in', f);
}

// Update index.html to add the card
let index = fs.readFileSync('index.html', 'utf8');
const cfCard = `      <div class="bg-white rounded shadow-sm border border-slate-200 p-6 flex flex-col h-full hover:shadow-md transition-shadow">
        <h3 class="text-lg font-bold text-[#1a365d] mb-2 uppercase tracking-wide">09. Statement of Cash Flows</h3>
        <p class="text-sm text-slate-600 mb-6 flex-1">AS 3 vs Ind AS 7 vs IAS 7 vs ASC 230 - Analyze presentation choices, overdraft netting, and classification differences affecting liquidity ratios.</p>
        <a href="cashflows.html" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-center text-sm transition-colors mt-auto">Compare &rarr;</a>
      </div>
    </div>
  </main>`;

if (!index.includes('09. Statement of Cash Flows')) {
  index = index.replace('    </div>\n  </main>', cfCard);
  fs.writeFileSync('index.html', index);
  console.log('Updated index.html card');
}
