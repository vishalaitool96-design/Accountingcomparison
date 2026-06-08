const fs = require('fs');

let html = fs.readFileSync('lease.html', 'utf8');

// Define logSectionUpdate
const logDefinition = `
        function logSectionUpdate(name) {
          const glDiagConsole = document.getElementById("diag-history-log");
          if (!glDiagConsole) return;
          const time = new Date().toLocaleTimeString("en-US", { hour12: false });
          const entry = document.createElement("div");
          entry.className = "flex justify-between items-center text-[13px]";
          entry.innerHTML = \`<div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2"><div class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span><span class="font-medium">\${name}</span></div> <span class="text-slate-500 text-xs ml-3 sm:ml-0">recalculated</span></div><span class="text-[12px] text-slate-400 shrink-0">\${time}</span>\`;
          glDiagConsole.prepend(entry);
        }
`;

if (!html.includes('function logSectionUpdate')) {
  html = html.replace('function recalculateAll() {', logDefinition + '\\n        function recalculateAll() {');
}

// Now insert logSectionUpdate calls
html = html.replace(
  'document.getElementById("v-pv").innerText = "" + format(pv) + " Cr";',
  'logSectionUpdate("Side-by-side treatment");\\n            document.getElementById("v-pv").innerText = "" + format(pv) + " Cr";'
);

html = html.replace(
  'document.getElementById("d-liab-us").innerText = `${format(liab_year1)} Cr`;',
  'document.getElementById("d-liab-us").innerText = `${format(liab_year1)} Cr`;\\n            logSectionUpdate("Impact table — Year 1");'
);

html = html.replace(
  'tableBody.innerHTML = tableHTML;',
  'tableBody.innerHTML = tableHTML;\\n            logSectionUpdate("Amortization schedule");'
);

html = html.replace(
  'document.getElementById("e-pat-us").innerText =\\n              `${format(pat_as)} Cr`;',
  'document.getElementById("e-pat-us").innerText =\\n              `${format(pat_as)} Cr`;\\n            logSectionUpdate("P&L impact");'
);

html = html.replace(
  'document.getElementById("f-eq-if").innerText =\\n              `Lower by ${format(eq_reduction)} Cr`;',
  'document.getElementById("f-eq-if").innerText =\\n              `Lower by ${format(eq_reduction)} Cr`;\\n            logSectionUpdate("Balance sheet impact");'
);

html = html.replace(
  'document.getElementById("g-tot-us").innerText =\\n              `-${format(pmt)} Cr`;',
  'document.getElementById("g-tot-us").innerText =\\n              `-${format(pmt)} Cr`;\\n            logSectionUpdate("Cash flow impact");'
);

html = html.replace(
  'setDirSpan("h-dir-roe", { t: "Stable", c: "text-slate-600" });\\n            }',
  'setDirSpan("h-dir-roe", { t: "Stable", c: "text-slate-600" });\\n            }\\n            logSectionUpdate("Ratio impact");'
);

html = html.replace(
  'document.getElementById("j-cfo-as").innerText = format(pmt) + " Cr";\\n            }',
  'document.getElementById("j-cfo-as").innerText = format(pmt) + " Cr";\\n            }\\n            logSectionUpdate("Trend distortion matrix");'
);

html = html.replace(
  'document.getElementById("k-ic-val").className = "p-2 font-bold text-red-600";\\n            }',
  'document.getElementById("k-ic-val").className = "p-2 font-bold text-red-600";\\n            }\\n            logSectionUpdate("Ratio interpretation guide");'
);


fs.writeFileSync('lease.html', html);
console.log('Done inserting JS updates');
