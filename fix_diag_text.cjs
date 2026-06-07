const fs = require('fs');

const filesToFix = [
  "cashflows.html",
  "consolidation.html",
  "deferred-tax.html",
  "esop.html",
  "financial-instruments.html",
  "impairment.html",
  "lease.html",
  "ppe.html",
  "revenue.html"
];

for (let file of filesToFix) {
  let cnt = fs.readFileSync(file, 'utf8');
  
  // Find the exact location of <h3 class="font-bold text-lg mb-2">Diagnostic Mode Console</h3>
  let target = '<h3 class="font-bold text-lg mb-2">Diagnostic Mode Console</h3>';
  
  let newHtml = `        <h3 class="font-bold text-lg mb-2">Diagnostic Mode Console</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
          <div class="bg-white p-3 rounded shadow-sm border border-indigo-100">
             <h4 class="font-bold text-indigo-800 mb-1">Live Updating Sections</h4>
             <p class="text-xs text-slate-600 font-mono">Section C, D, E, F, G, H, I, J, K</p>
          </div>
          <div class="bg-white p-3 rounded shadow-sm border border-indigo-100">
             <h4 class="font-bold text-indigo-800 mb-1">Static Sections</h4>
             <p class="text-xs text-slate-600 font-mono">Section A, B, L, M, N, O, P</p>
          </div>
        </div>`;
        
   // Check if it already has Live Updating Sections
  if (cnt.includes('Live Updating Sections')) {
     continue;
  }
  
  cnt = cnt.replace(target, newHtml);
  fs.writeFileSync(file, cnt);
}
console.log("Fix added.");
