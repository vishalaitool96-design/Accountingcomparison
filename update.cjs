const fs = require('fs');
let html = fs.readFileSync('lease.html', 'utf8');

const sIdx = html.indexOf('              const iRent = document.getElementById("input-ppe-cost");');
const eIdx = html.indexOf('              // Copy button');

if (sIdx === -1 || eIdx === -1) {
    console.error('Not found', sIdx, eIdx);
    process.exit(1);
}

const newScript = `              const iRent = document.getElementById("input-rent");
              const iTerm = document.getElementById("input-term");
              const iRate = document.getElementById("input-rate");
              const iShortTerm = document.getElementById("input-short-term");
              const iLowVal = document.getElementById("input-low-val");
              const iBaseRev = document.getElementById("input-base-rev");
              const iBaseRevSide = document.getElementById("input-base-rev-side");
              const iBaseEBITDA = document.getElementById("input-base-ebitda");
              const iBaseEBITDASide = document.getElementById("input-base-ebitda-side");
              const iBaseAssetsSide = document.getElementById("input-base-assets-side");
              const iBaseLiabSide = document.getElementById("input-base-liab-side");
              const iBaseDebtSide = document.getElementById("input-base-debt-side");
              const pvDisplay = document.getElementById("calc-pv-display");
              const resetBtn = document.getElementById("reset-btn");
              const pvCalcBtn = document.getElementById("pv-calc-btn");
              const valWarning = document.getElementById("validation-warning");

              function get(id) { return document.getElementById(id); }
              function set(el, val) { const e = get(el); if (e) e.innerHTML = val; }
              function f(n) { if (n === 0) return "Rs. 0 Cr"; return "Rs. " + n.toFixed(2) + " Cr"; }
              function p(n) { return (n * 100).toFixed(1) + "%"; }
              function dir(n, o) { 
                  if (n > o + 0.001) return "<span class='text-teal-600 font-bold'>↑</span>";
                  if (n < o - 0.001) return "<span class='text-red-600 font-bold'>↓</span>";
                  return "<span class='text-slate-400 font-bold'>↔</span>";
              }

              function calc() {
                dLog("Recalculation triggered...");
                if (document.activeElement === iBaseRevSide && iBaseRev) iBaseRev.value = iBaseRevSide.value;
                if (document.activeElement === iBaseRev && iBaseRevSide) iBaseRevSide.value = iBaseRev.value;
                if (document.activeElement === iBaseEBITDASide && iBaseEBITDA) iBaseEBITDA.value = iBaseEBITDASide.value;
                if (document.activeElement === iBaseEBITDA && iBaseEBITDASide) iBaseEBITDASide.value = iBaseEBITDA.value;
                try {
                  const rent = parseFloat(iRent?.value) || 0;
                  const term = parseFloat(iTerm?.value) || 0;
                  const rate = (parseFloat(iRate?.value) || 0) / 100;
                  const isShortTerm = iShortTerm?.value === "yes";
                  const isLowVal = iLowVal?.value === "yes";
                  const isExempt = isShortTerm || isLowVal;
                  const bRev = parseFloat(iBaseRevSide?.value) || 400;
                  const bEbitda = parseFloat(iBaseEBITDASide?.value) || 80;
                  const bAssets = parseFloat(iBaseAssetsSide?.value) || 1000;
                  const bLiab = parseFloat(iBaseLiabSide?.value) || 500;
                  const bDebt = parseFloat(iBaseDebtSide?.value) || 500;
                  const bEq = bAssets - bLiab;

                  if (valWarning) {
                      valWarning.classList.add("hidden");
                      valWarning.textContent = "";
                      if (rate > 0.3) {
                         valWarning.innerHTML = "Warning: Discount rate is very high (>30%).";
                         valWarning.classList.remove("hidden");
                      }
                      if (rent < 0 || term < 0 || rate < 0) {
                         valWarning.innerHTML = "Error: Negative inputs are not allowed.";
                         valWarning.classList.remove("hidden");
                         return;
                      }
                  }

                  let pv = 0;
                  if (rate > 0) { pv = rent * ((1 - Math.pow(1 + rate, -term)) / rate); } else { pv = rent * term; }
                  const recognizedPv = isExempt ? 0 : pv;
                  if (pvDisplay) pvDisplay.textContent = f(pv).replace("Rs. ", " ");
                  const dep = term > 0 ? recognizedPv / term : 0;
                  const intExp = recognizedPv * rate;
                  const lLiabY1 = recognizedPv > 0 ? recognizedPv + intExp - rent : 0;
                  const rAssetY1 = recognizedPv > 0 ? recognizedPv - dep : 0;

                  if(get("d-exp-as")) set("d-exp-as", f(rent) + " rent expense<br><span class='text-xs text-slate-500 font-normal'>(Off-balance-sheet)</span>");
                  if(get("d-rou-in")) set("d-rou-in", f(recognizedPv));
                  if(get("d-liab-in")) set("d-liab-in", f(recognizedPv));
                  const dExpIn = isExempt ? f(rent) + " rent expense" : f(dep) + " (Dep) + " + f(intExp) + " (Int) = <br>" + f(dep + intExp);
                  if(get("d-exp-in")) set("d-exp-in", dExpIn);
                  if(get("d-rou-if")) set("d-rou-if", f(recognizedPv));
                  if(get("d-liab-if")) set("d-liab-if", f(recognizedPv));
                  if(get("d-exp-if")) set("d-exp-if", dExpIn);
                  const usRecognizedPv = isShortTerm ? 0 : pv;
                  if(get("d-rou-us")) set("d-rou-us", f(usRecognizedPv));
                  if(get("d-liab-us")) set("d-liab-us", f(usRecognizedPv));
                  if(get("d-exp-us")) set("d-exp-us", f(rent) + " straight-line<br>operating lease expense");

                  ["as", "in", "if", "us"].forEach(s => set("pl-base-" + s, f(bEbitda)));
                  set("pl-dep-as", "- " + f(rent) + " (Rent)");
                  ["in", "if"].forEach(s => set("pl-dep-" + s, isExempt ? "- " + f(rent) + " (Rent)" : "- " + f(dep) + " (Dep)"));
                  set("pl-dep-us", "- " + f(rent) + " (Rent)");
                  const rebitdaAs = bEbitda - rent;
                  const rebitdaIn = isExempt ? bEbitda - rent : bEbitda;
                  const rebitdaUs = bEbitda - rent;
                  set("pl-rep-ebitda-as", f(rebitdaAs));
                  ["in", "if"].forEach(s => set("pl-rep-ebitda-" + s, f(rebitdaIn)));
                  set("pl-rep-ebitda-us", f(rebitdaUs));
                  const ebitAs = rebitdaAs;
                  const trueEbitIn = isExempt ? bEbitda - rent : bEbitda - dep;
                  const ebitUs = rebitdaUs;
                  set("pl-ebit-as", f(ebitAs));
                  ["in", "if"].forEach(s => set("pl-ebit-" + s, f(trueEbitIn)));
                  set("pl-ebit-us", f(ebitUs));
                  set("pl-acc-as", "Nil");
                  ["in", "if"].forEach(s => set("pl-acc-" + s, isExempt ? "Nil" : "- " + f(intExp)));
                  set("pl-acc-us", "Nil<br><span class='text-xs text-slate-500 truncate d-block max-w-24'>(Embedded)</span>");
                  const pbtAs = bEbitda - rent;
                  const pbtIn = isExempt ? bEbitda - rent : bEbitda - dep - intExp;
                  set("pl-pbt-as", f(pbtAs));
                  ["in", "if"].forEach(s => set("pl-pbt-" + s, f(pbtIn)));
                  set("pl-pbt-us", f(pbtAs));
                  set("pl-tax-as", "- " + f(pbtAs * 0.25));
                  ["in", "if"].forEach(s => set("pl-tax-" + s, "- " + f(pbtIn * 0.25)));
                  set("pl-tax-us", "- " + f(pbtAs * 0.25));
                  set("pl-pat-as", f(pbtAs * 0.75));
                  ["in", "if"].forEach(s => set("pl-pat-" + s, f(pbtIn * 0.75)));
                  set("pl-pat-us", f(pbtAs * 0.75));

                  set("bs-ppe-as", "Nil");
                  ["in", "if"].forEach(s => set("bs-ppe-" + s, isExempt ? "Nil" : f(rAssetY1)));
                  const intExpUs = usRecognizedPv * rate;
                  const usDep = rent - intExpUs;
                  const usAssetY1 = usRecognizedPv > 0 ? usRecognizedPv - usDep : 0;
                  const usLiabY1 = usRecognizedPv > 0 ? usRecognizedPv + intExpUs - rent : 0;
                  set("bs-ppe-us", isShortTerm ? "Nil" : f(usAssetY1));
                  set("bs-aro-as", "Nil");
                  ["in", "if"].forEach(s => set("bs-aro-" + s, isExempt ? "Nil" : f(lLiabY1)));
                  set("bs-aro-us", isShortTerm ? "Nil" : f(usLiabY1));
                  set("bs-ta-as", "Lower");
                  ["in", "if"].forEach(s => set("bs-ta-" + s, isExempt ? "Lower" : "Higher"));
                  set("bs-ta-us", isShortTerm ? "Lower" : "Higher");
                  set("bs-tl-as", "Lower");
                  ["in", "if"].forEach(s => set("bs-tl-" + s, isExempt ? "Lower" : "Higher"));
                  set("bs-tl-us", isShortTerm ? "Lower" : "Higher");
                  set("bs-eq-as", "Higher");
                  ["in", "if"].forEach(s => set("bs-eq-" + s, isExempt ? "Higher" : "Slightly lower"));
                  set("bs-eq-us", isShortTerm ? "Higher" : "Slightly lower");

                  ["as", "in", "if", "us"].forEach(s => set("g-pay-" + s, f(rent)));
                  set("g-cfo-as", "Usually operating<br><span class='text-slate-500 font-normal'>(" + f(rent) + ")</span>");
                  ["in", "if"].forEach(s => set("g-cfo-" + s, isExempt ? "Usually operating<br><span class='text-slate-500 font-normal'>(" + f(rent) + ")</span>" : "Interest may be<br>operating/financing<br><span class='text-slate-500 font-normal'>(" + f(intExp) + ")</span>"));
                  set("g-cfo-us", isShortTerm ? "Usually operating<br><span class='text-slate-500 font-normal'>(" + f(rent) + ")</span>" : "Classification differs");
                  set("g-cff-as", "Nil / Absent");
                  ["in", "if"].forEach(s => set("g-cff-" + s, isExempt ? "Nil / Absent" : "Principal repayment<br>is financing<br><span class='text-slate-500 font-normal'>(" + f(rent - intExp) + ")</span>"));
                  set("g-cff-us", isShortTerm ? "Nil / Absent" : "Similar");
                  ["as", "in", "if", "us"].forEach(s => set("g-tot-" + s, "Same"));

                  const ebmAs = bRev > 0 ? rebitdaAs / bRev : 0;
                  const ebmIn = bRev > 0 ? rebitdaIn / bRev : 0;
                  set("rt-ebitdam-as", p(ebmAs));
                  ["in", "if"].forEach(s => set("rt-ebitdam-" + s, p(ebmIn)));
                  set("rt-ebitdam-us", p(ebmAs));
                  const eqAs = bEq;
                  const eqIn = bEq + (pbtIn * 0.75) - (pbtAs * 0.75);
                  const deAs = eqAs > 0 ? bDebt / eqAs : 0;
                  const deIn = eqIn > 0 ? (bDebt + lLiabY1) / eqIn : 0;
                  set("rt-de-as", deAs.toFixed(2) + "x");
                  ["in", "if"].forEach(s => set("rt-de-" + s, deIn.toFixed(2) + "x"));
                  const deUs = eqAs > 0 ? (bDebt + usLiabY1) / eqAs : 0;
                  set("rt-de-us", deUs.toFixed(2) + "x");
                  const roaAs = bAssets > 0 ? ebitAs / bAssets : 0;
                  const roaIn = (bAssets + rAssetY1) > 0 ? trueEbitIn / (bAssets + rAssetY1) : 0;
                  const roaUs = (bAssets + usAssetY1) > 0 ? ebitUs / (bAssets + usAssetY1) : 0;
                  set("rt-roa-as", p(roaAs));
                  ["in", "if"].forEach(s => set("rt-roa-" + s, p(roaIn)));
                  set("rt-roa-us", p(roaUs));
                  set("rt-dir-ebitdam", dir(ebmIn, ebmAs));
                  set("rt-dir-de", dir(deIn, deAs));
                  set("rt-dir-roa", dir(roaIn, roaAs));

                  const now = new Date();
                } catch (e) { dLog(e.message, "error"); }
              }

              const inputs = [iRent, iTerm, iRate, iBaseRev, iBaseEBITDA, iBaseRevSide, iBaseEBITDASide, iBaseAssetsSide, iBaseLiabSide, iBaseDebtSide, iShortTerm, iLowVal];
              inputs.forEach(el => { if (el) el.addEventListener("input", calc); });
              
              if (resetBtn) {
                 resetBtn.addEventListener("click", () => {
                     if (iRent) iRent.value = "12";
                     if (iTerm) iTerm.value = "5";
                     if (iRate) iRate.value = "10";
                     if (iShortTerm) iShortTerm.value = "no";
                     if (iLowVal) iLowVal.value = "no";
                     if (iBaseRevSide) iBaseRevSide.value = "400";
                     if (iBaseEBITDASide) iBaseEBITDASide.value = "80";
                     if (iBaseAssetsSide) iBaseAssetsSide.value = "1000";
                     if (iBaseLiabSide) iBaseLiabSide.value = "500";
                     if (iBaseDebtSide) iBaseDebtSide.value = "500";
                     if (iBaseRev) iBaseRev.value = "400";
                     if (iBaseEBITDA) iBaseEBITDA.value = "80";
                     calc();
                 });
              }
              if (pvCalcBtn) {
                 pvCalcBtn.addEventListener("click", () => {
                     const rent = parseFloat(iRent?.value) || 0;
                     const term = parseFloat(iTerm?.value) || 0;
                     const rate = parseFloat(iRate?.value) || 0;
                     const formula = \`PV = \${rent} × [(1 - (1 + \${rate/100})^{-\${term}}) / \${rate/100}]\`;
                     alert("Present Value Calculation:\\n\\n" + formula + "\\n\\nThe initially recognized Lease Liability and ROU Asset equal this PV amount.");
                 });
              }
              calc();

`;

html = html.substring(0, sIdx) + newScript + html.substring(eIdx);
fs.writeFileSync('lease.html', html);
console.log('Fixed functionality!');
