const fs = require('fs');

let html = fs.readFileSync('lease.html', 'utf8');

// 1. HTML CHANGES for Section J
html = html.replace(
  '<td class="p-3">Rep. 34% vs Norm. 22%</td>',
  '<td class="p-3">Rep. <span id="j-ebm-in">34.0%</span> vs Norm. <span id="j-ebm-as">22.0%</span></td>'
);
html = html.replace(
  '<td class="p-3">Rep. 8 Cr vs Norm. 10 Cr in Yr 1</td>',
  '<td class="p-3">Rep. <span id="j-pat-in">8.00 Cr</span> vs Norm. <span id="j-pat-as">10.00 Cr</span> in Yr 1</td>'
);
html = html.replace(
  '<td class="p-3">Rep. 145 Cr vs Norm. 100 Cr</td>',
  '<td class="p-3">Rep. <span id="j-debt-in">145.00 Cr</span> vs Norm. <span id="j-debt-as">100.00 Cr</span></td>'
);
html = html.replace(
  '<td class="p-3">Rep. 32 Cr vs Norm. 20 Cr</td>',
  '<td class="p-3">Rep. <span id="j-cfo-in">32.00 Cr</span> vs Norm. <span id="j-cfo-as">20.00 Cr</span></td>'
);

// 2. HTML CHANGES for Section K
// D/E
html = html.replace(
  '<td class="p-2 font-bold">Debt/Equity</td>\\n                <td class="p-2 text-red-600">Higher under Ind AS</td>',
  '<td class="p-2 font-bold">Debt/Equity</td>\\n                <td class="p-2 font-bold" id="k-de-val">Higher under Ind AS</td>'
);
// EBM
html = html.replace(
  '<td class="p-2 font-bold">EBITDA Margin</td>\\n                <td class="p-2 text-green-600">Higher under Ind AS</td>',
  '<td class="p-2 font-bold">EBITDA Margin</td>\\n                <td class="p-2 font-bold" id="k-ebm-val">Higher under Ind AS</td>'
);
// ROA
html = html.replace(
  '<td class="p-2 font-bold">Return on Assets (ROA)</td>\\n                <td class="p-2 text-red-600">Lower under Ind AS</td>',
  '<td class="p-2 font-bold">Return on Assets (ROA)</td>\\n                <td class="p-2 font-bold" id="k-roa-val">Lower under Ind AS</td>'
);
// IC
html = html.replace(
  '<td class="p-2 font-bold">Interest Coverage</td>\\n                <td class="p-2 text-red-600">Lower under Ind AS</td>',
  '<td class="p-2 font-bold">Interest Coverage</td>\\n                <td class="p-2 font-bold" id="k-ic-val">Lower under Ind AS</td>'
);

// We need to inject the new logic into updateAll BEFORE it gets closed at line 2660.
const newLogic = `
            // Direction Arrows logic dynamically calculated
            function getDir(asVal, inVal) {
              if (asVal === null || isNaN(asVal) || asVal === 0) return { t: "N/A", c: "text-slate-500" };
              if (inVal > asVal) return { t: "↑ Ind AS/IFRS", c: "text-green-600" };
              if (inVal < asVal) return { t: "↓ Ind AS/IFRS", c: "text-red-600" };
              return { t: "Stable", c: "text-slate-600" };
            }

            function setDirSpan(id, dirObj) {
               const el = document.getElementById(id);
               if (el) {
                 el.className = "p-3 font-bold " + dirObj.c;
                 el.innerText = dirObj.t;
               }
            }

            setDirSpan("h-dir-ebm", ebm_as, ebm_in);
            if (de_as === 0 && de_in > 0) {
               setDirSpan("h-dir-de", { t: "↑ Ind AS/IFRS", c: "text-red-600" }); // higher debt is typical red/amber
            } else {
               setDirSpan("h-dir-de", getDir(de_as, de_in));
            }
            
            // IC is NA for AS usually because no interest from lease
            setDirSpan("h-dir-ic", { t: "New metric", c: "text-indigo-600" }); 
            
            setDirSpan("h-dir-roa", getDir(roa_as, roa_in));
            
            if (roe_as !== roe_in) {
              setDirSpan("h-dir-roe", getDir(roe_as, roe_in));
            } else {
              setDirSpan("h-dir-roe", { t: "Stable", c: "text-slate-600" });
            }

            if (document.getElementById("j-ebm-in")) {
               document.getElementById("j-ebm-in").innerText = ebm_in.toFixed(1) + "%";
               document.getElementById("j-ebm-as").innerText = ebm_as.toFixed(1) + "%";
               document.getElementById("j-pat-in").innerText = format(pat_in) + " Cr";
               document.getElementById("j-pat-as").innerText = format(pat_as) + " Cr";
               document.getElementById("j-debt-in").innerText = format(tliab_in) + " Cr";
               document.getElementById("j-debt-as").innerText = "0.00 Cr"; // typically 0 under AS 19
               document.getElementById("j-cfo-in").innerText = format(int_in + prin_year1) + " Cr"; // total payment
               document.getElementById("j-cfo-as").innerText = format(pmt) + " Cr";
            }

            if (document.getElementById("k-de-val")) {
               document.getElementById("k-de-val").innerText = de_in > de_as ? "Higher under Ind AS" : "Stable";
               document.getElementById("k-de-val").className = "p-2 font-bold " + (de_in > de_as ? "text-red-600" : "text-slate-600");

               document.getElementById("k-ebm-val").innerText = ebm_in > ebm_as ? "Higher under Ind AS" : "Stable";
               document.getElementById("k-ebm-val").className = "p-2 font-bold " + (ebm_in > ebm_as ? "text-green-600" : "text-slate-600");

               document.getElementById("k-roa-val").innerText = roa_in < roa_as ? "Lower under Ind AS" : "Stable";
               document.getElementById("k-roa-val").className = "p-2 font-bold " + (roa_in < roa_as ? "text-red-600" : "text-slate-600");

               document.getElementById("k-ic-val").innerText = "Lower under Ind AS"; 
               document.getElementById("k-ic-val").className = "p-2 font-bold text-red-600";
            }
`;

html = html.replace('const now = new Date();', newLogic + '\n            const now = new Date();');

// Rename updateAll to recalculateAll
html = html.replace(/function updateAll\(/g, 'function recalculateAll(');
html = html.replace(/updateAll/g, 'recalculateAll'); // replaces EventListener calls too

fs.writeFileSync('lease.html', html);
console.log('Done replacement.');

// note: Interest Coverage is also `<td class="p-2 text-red-600">Lower under Ind AS</td>`. The replace above only hits the first one (ROA). We need to hit both.
// Let's use a regex or specific replace.
// Actually, earlier string replace only executes once by default in Node.js string.replace
// Let's redefine carefully:
