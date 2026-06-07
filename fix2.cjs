const fs = require('fs');
let html = fs.readFileSync('revenue.html', 'utf-8');

const titleBlock = '<div class="border-l-8 border-teal-600 pl-4 py-1 shrink-0">\\n      <h2 class="text-2xl font-bold text-[#1a365d] uppercase tracking-wide">Revenue Recognition</h2>\\n      <p class="text-sm text-slate-600">Premium Analysis Guide: AS vs Ind AS 115 vs IFRS 15 vs US GAAP ASC 606</p>\\n    </div>';

const diagnosticBlock = '<div class="flex flex-col sm:flex-row justify-between items-start gap-4"><div class="border-l-8 border-teal-600 pl-4 py-1 shrink-0"><h2 class="text-2xl font-bold text-[#1a365d] uppercase tracking-wide">Revenue Recognition</h2><p class="text-sm text-slate-600">Premium Analysis Guide: AS vs Ind AS 115 vs IFRS 15 vs US GAAP ASC 606</p></div><button id="diagnostic-btn" class="bg-indigo-600 text-white hover:bg-indigo-700 text-sm px-4 py-2 rounded shadow-sm font-bold transition-colors">Toggle Diagnostic Mode</button></div><div id="diagnostic-panel" class="hidden mt-4 bg-indigo-50 border-l-4 border-indigo-600 p-4 text-sm text-indigo-900 shadow-sm rounded-r-lg flex flex-col gap-2 shrink-0"><h3 class="font-bold text-lg mb-2">Diagnostic Mode Console</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><h4 class="font-bold border-b border-indigo-200 pb-1 mb-1">Live Updating Sections</h4><ul id="diag-updating" class="list-disc pl-5 space-y-1 text-indigo-800 font-medium"><li>Section C (Side-by-Side Treatment)</li><li>Section D (Side-by-Side Impact Table)</li><li>Section E (P&L Impact)</li><li>Section F (Balance Sheet Impact)</li><li>Section G (Cash Flow Impact)</li><li>Section H (Ratio Impact)</li><li>Section I (Earnings Quality Signals)</li><li>Section J (Trend Distortion Matrix)</li><li>Section K (Analyst Concerns)</li></ul></div><div><h4 class="font-bold border-b border-indigo-200 pb-1 mb-1">Static/Hardcoded Sections</h4><ul id="diag-static" class="list-disc pl-5 space-y-1 text-indigo-800 font-medium"><li>Section A (Core Technical Comparison)</li><li>Section L (Investor Perception Analysis)</li><li>Section M (Reporting Signals Decoder)</li><li>Section N (Premium Intelligence Narrative)</li><li>Section O (Red/Green Flags Visual Indicator)</li><li>Section P (Final Intelligence Summary)</li></ul></div></div><div class="mt-4 border-t border-indigo-200 pt-2"><h4 class="font-bold mb-1 flex justify-between">Recent Updates (Console Log) <span id="diag-errors" class="text-red-600 hidden">Errors Detected!</span></h4><div id="diag-console" class="bg-indigo-900 text-indigo-100 font-mono p-3 rounded text-xs h-32 overflow-y-auto whitespace-pre-wrap">System initialized.</div></div></div>';

html = html.replace(titleBlock, diagnosticBlock);

// Replace section manually
function addSectionIds(match, classAttr, sectionHeader) {
  const matchSectionId = sectionHeader.match(/SECTION ([A-Z])/);
  if (matchSectionId) {
    const id = matchSectionId[1].toLowerCase();
    return '<section id="section-' + id + '" class="' + classAttr + '">\\n      <div' + sectionHeader.substring(sectionHeader.indexOf(' class=')) + '';
  }
  return match;
}

const sectionRegex = new RegExp('<section class="([^"]+)">\\\\n\\\\s*<div([^>]+>\\\\n\\\\s*SECTION [A-Z].*?<\\\\/div>)', 'gs');
html = html.replace(sectionRegex, addSectionIds);

const scriptReplacement = 
  '<script>\\n' +
  '  document.addEventListener("DOMContentLoaded", () => {\\n' +
  '    const diagBtn = document.getElementById("diagnostic-btn");\\n' +
  '    const diagPanel = document.getElementById("diagnostic-panel");\\n' +
  '    const diagConsole = document.getElementById("diag-console");\\n' +
  '    const diagErrors = document.getElementById("diag-errors");\\n' +
  '    function dLog(msg, type = "info") {\\n' +
  '      if (!diagConsole) return;\\n' +
  '      const time = new Date().toLocaleTimeString();\\n' +
  '      const prefix = type === "error" ? "[ERROR]" : "[INFO]";\\n' +
  '      const color = type === "error" ? "text-red-400" : "text-indigo-300";\\n' +
  '      diagConsole.innerHTML = "<div><span class=\\"" + color + "\\">" + time + " " + prefix + "</span> " + msg + "</div>" + diagConsole.innerHTML;\\n' +
  '      if(type === "error" && diagErrors) diagErrors.classList.remove("hidden");\\n' +
  '      console.log(prefix + " " + msg);\\n' +
  '    }\\n' +
  '    window.onerror = function(message, source, lineno, colno, error) {\\n' +
  '      dLog(message + " at " + source + ":" + lineno, "error");\\n' +
  '    };\\n' +
  '    if (diagBtn) {\\n' +
  '      diagBtn.addEventListener("click", () => {\\n' +
  '        diagPanel.classList.toggle("hidden");\\n' +
  '      });\\n' +
  '    }\\n' +
  '    const I = {\\n' +
  '      price: document.getElementById("input-price"),\\n' +
  '      advPct: document.getElementById("input-adv-pct"),\\n' +
  '      shipPct: document.getElementById("input-ship-pct"),\\n' +
  '      accPct: document.getElementById("input-acc-pct"),\\n' +
  '      dur: document.getElementById("input-duration"),\\n' +
  '      totCost: document.getElementById("input-total-cost"),\\n' +
  '      costInc: document.getElementById("input-cost-incurred"),\\n' +
  '      progPct: document.getElementById("input-progress-pct"),\\n' +
  '      bRev: document.getElementById("input-base-rev"),\\n' +
  '      bEbit: document.getElementById("input-base-ebit"),\\n' +
  '      pRev: document.getElementById("input-prev-rev"),\\n' +
  '      eq: document.getElementById("input-equity"),\\n' +
  '      ass: document.getElementById("input-assets"),\\n' +
  '      shr: document.getElementById("input-shares")\\n' +
  '    };\\n' +
  '    const W = document.getElementById("validation-warning");\\n' +
  '    const timestamp = document.getElementById("update-timestamp");\\n' +
  '    I.costInc.addEventListener("input", () => {\\n' +
  '      const c = parseFloat(I.costInc.value) || 0;\\n' +
  '      const tot = parseFloat(I.totCost.value) || 0;\\n' +
  '      if (tot > 0) I.progPct.value = ((c / tot) * 100).toFixed(1);\\n' +
  '      recalc();\\n' +
  '    });\\n' +
  '    I.progPct.addEventListener("input", () => {\\n' +
  '      const p = parseFloat(I.progPct.value) || 0;\\n' +
  '      const tot = parseFloat(I.totCost.value) || 0;\\n' +
  '      I.costInc.value = ((p / 100) * tot).toFixed(0);\\n' +
  '      recalc();\\n' +
  '    });\\n' +
  '    Object.values(I).forEach(el => {\\n' +
  '      if (el !== I.costInc && el !== I.progPct) {\\n' +
  '        el.addEventListener("input", recalc);\\n' +
  '      }\\n' +
  '    });\\n' +
  '    document.getElementById("reset-btn").addEventListener("click", () => {\\n' +
  '      I.price.value = 150; I.advPct.value = 30; I.shipPct.value = 40; I.accPct.value = 30;\\n' +
  '      I.dur.value = 18; I.totCost.value = 120; I.costInc.value = 72; I.progPct.value = 60;\\n' +
  '      I.bRev.value = 400; I.bEbit.value = 40; I.pRev.value = 400; I.eq.value = 200;\\n' +
  '      I.ass.value = 500; I.shr.value = 10;\\n' +
  '      recalc();\\n' +
  '      dLog("Reset to default values.");\\n' +
  '    });\\n' +
  '    function f(n) { return "Rs. " + n.toFixed(2).replace(/\\.00$/, "") + (n !== 0 ? " Cr" : ""); }\\n' +
  '    function fC(n) { return (n>0?"+":"") + "Rs. " + Math.abs(n).toFixed(2).replace(/\\.00$/, "") + " Cr"; }\\n' +
  '    function get(el) { return document.getElementById(el); }\\n' +
  '    function set(el, val) { const e = get(el); if(e) e.innerHTML = val; }\\n' +
  '    function updateAllSections(opts) {\\n' +
  '      dLog("Invoked updateAllSections(). Recalculating dynamically linked views...");\\n' +
  '      updateSectionC(opts); updateSectionD(opts); updateSectionE(opts);\\n' +
  '      updateSectionF(opts); updateSectionG(opts); updateSectionH(opts);\\n' +
  '      updateSectionI(opts); updateSectionJ(opts); updateSectionK(opts);\\n' +
  '      dLog("Ignored Section O, L, M, N, P (marked static for now).");\\n' +
  '    }\\n' +
  '    function updateSectionC(opts) {\\n' +
  '      set("c-as-y1-text", f(opts.asY1Rev) + " revenue in Year 1");\\n' +
  '      set("c-ind-y1-text", f(opts.indY1Rev) + " revenue (" + opts.pr.toFixed(1) + "% of " + f(opts.p) + ")");\\n' +
  '      set("c-as-y2-text", "Remaining " + f(opts.p - opts.asY1Rev) + " in Year 2");\\n' +
  '      set("c-ind-y2-text", f(opts.p - opts.indY1Rev) + " revenue in Year 2");\\n' +
  '      set("je-as-y1", "<p>Dr Bank " + f(opts.asAdvCash) + "<br>&nbsp;&nbsp;Cr Advance " + f(opts.asAdvCash) + "<br>Dr WIP " + f(opts.ci) + "<br>&nbsp;&nbsp;Cr Cash/Payables " + f(opts.ci) + "</p>");\\n' +
  '      set("je-as-y2", "<p>Equipment accepted.<br>Rem. costs: " + f(opts.tc-opts.ci) + " (Total " + f(opts.tc) + ").<br>Revenue: " + f(opts.p - opts.asY1Rev) + ".<br>Profit: " + f((opts.p-opts.asY1Rev) - (opts.tc-opts.ci)) + ".</p>");\\n' +
  '      set("je-ind-y1", "<p>Dr Bank " + f(opts.asAdvCash) + "<br>Dr Contract Asset " + f(opts.ca>opts.cl?opts.ca-opts.cl:0) + "<br>Dr Contract Liab " + f(opts.ca>opts.cl?opts.cl:opts.ca) + "<br>&nbsp;&nbsp;Cr Revenue " + f(opts.ca) + "</p>");\\n' +
  '      set("je-ind-y2", "<p>Rem. progress " + (100 - opts.pr).toFixed(1) + "%.<br>Revenue = " + f(opts.p - opts.ca) + ".<br>Costs = " + f(opts.tc - opts.ci) + ".<br>Profit = " + f((opts.p-opts.ca) - (opts.tc-opts.ci)) + ".</p>");\\n' +
  '      dLog("Updated Section C: Side-by-Side Treatment");\\n' +
  '    }\\n' +
  '    function updateSectionD(opts) {\\n' +
  '      set("d-as-r1", f(opts.asY1Rev)); set("d-ind-r1", f(opts.indY1Rev)); set("d-ifrs-r1", f(opts.indY1Rev)); set("d-asc-r1", f(opts.indY1Rev));\\n' +
  '      set("d-as-c1", f(opts.asY1Cost)); set("d-ind-c1", f(opts.indY1Cost)); set("d-ifrs-c1", f(opts.indY1Cost)); set("d-asc-c1", f(opts.indY1Cost));\\n' +
  '      set("d-as-p1", f(opts.y1p_as)); set("d-ind-p1", f(opts.y1p_ind)); set("d-ifrs-p1", f(opts.y1p_ind)); set("d-asc-p1", f(opts.y1p_ind));\\n' +
  '      let asY2Rev = opts.p - opts.asY1Rev; let asY2Cost = opts.tc - opts.asY1Cost; let y2p_as = asY2Rev - asY2Cost;\\n' +
  '      let indY2Rev = opts.p - opts.indY1Rev; let indY2Cost = opts.tc - opts.indY1Cost; let y2p_ind = indY2Rev - indY2Cost;\\n' +
  '      set("d-as-r2", f(asY2Rev)); set("d-ind-r2", f(indY2Rev)); set("d-ifrs-r2", f(indY2Rev)); set("d-asc-r2", f(indY2Rev));\\n' +
  '      set("d-as-c2", f(asY2Cost)); set("d-ind-c2", f(indY2Cost)); set("d-ifrs-c2", f(indY2Cost)); set("d-asc-c2", f(indY2Cost));\\n' +
  '      set("d-as-p2", f(y2p_as)); set("d-ind-p2", f(y2p_ind)); set("d-ifrs-p2", f(y2p_ind)); set("d-asc-p2", f(y2p_ind));\\n' +
  '      dLog("Updated Section D: Side-by-Side Impact Table");\\n' +
  '    }\\n' +
  '    function updateSectionE(opts) {\\n' +
  '      ["as","in","if","us"].forEach(s => { set("e-base-r-"+s, f(opts.br)); set("e-base-eb-"+s, f(opts.be)); });\\n' +
  '      set("e-proj-r-as", f(opts.asY1Rev)); set("e-proj-eb-as", f(opts.y1p_as));\\n' +
  '      ["in","if","us"].forEach(s => { set("e-proj-r-"+s, f(opts.indY1Rev)); set("e-proj-eb-"+s, f(opts.y1p_ind)); });\\n' +
  '      set("e-tot-r-as", f(opts.totR_as)); set("e-tot-eb-as", f(opts.totEb_as)); set("e-tax-as", f(opts.t_as)); set("e-pat-as", f(opts.pat_as));\\n' +
  '      ["in","if","us"].forEach(s => { set("e-tot-r-"+s, f(opts.totR_in)); set("e-tot-eb-"+s, f(opts.totEb_in)); set("e-tax-"+s, f(opts.t_in)); set("e-pat-"+s, f(opts.pat_in)); });\\n' +
  '      dLog("Updated Section E: P&L Impact");\\n' +
  '    }\\n' +
  '    function updateSectionF(opts) {\\n' +
  '      ["as","in","if","us"].forEach(s => set("f-cash-"+s, f(opts.asAdvCash)));\\n' +
  '      set("f-asset-as", f(opts.ci) + " (Inv)");\\n' +
  '      ["in","if","us"].forEach(s => {\\n' +
  '           let ca1 = Math.max(0, opts.indY1Rev - opts.asAdvCash);\\n' +
  '           set("f-asset-"+s, f(ca1) + " (Asset)");\\n' +
  '           let cl1 = Math.max(0, opts.asAdvCash - opts.indY1Rev);\\n' +
  '           set("f-liab-"+s, f(cl1));\\n' +
  '      });\\n' +
  '      set("f-liab-as", f(Math.max(0, opts.asAdvCash - opts.asY1Rev)));\\n' +
  '      set("f-eq-as", fC(opts.y1p_as));\\n' +
  '      ["in","if","us"].forEach(s => set("f-eq-"+s, fC(opts.y1p_ind)));\\n' +
  '      dLog("Updated Section F: Balance Sheet Impact");\\n' +
  '    }\\n' +
  '    function updateSectionG(opts) {\\n' +
  '      ["as","in","if","us"].forEach(s => {\\n' +
  '        set("g-in-"+s, fC(opts.asAdvCash)); set("g-out-"+s, fC(-opts.ci)); set("g-net-"+s, fC(opts.asAdvCash - opts.ci));\\n' +
  '      });\\n' +
  '      dLog("Updated Section G: Cash Flow Impact");\\n' +
  '    }\\n' +
  '    function updateSectionH(opts) {\\n' +
  '      set("h-gro-as", (opts.g_as>=0?"+":"")+opts.g_as.toFixed(1)+"%"); set("h-gro-in", (opts.g_in>=0?"+":"")+opts.g_in.toFixed(1)+"%");\\n' +
  '      set("h-dir-gro", opts.g_in>opts.g_as ? "↑" : (opts.g_in<opts.g_as?"↓":"="));\\n' +
  '      set("h-mar-as", opts.m_as.toFixed(1)+"%"); set("h-mar-in", opts.m_in.toFixed(1)+"%");\\n' +
  '      set("h-dir-mar", opts.m_in>opts.m_as ? "↑" : (opts.m_in<opts.m_as?"↓":"="));\\n' +
  '      set("h-roe-as", opts.roe_as.toFixed(1)+"%"); set("h-roe-in", opts.roe_in.toFixed(1)+"%");\\n' +
  '      set("h-dir-roe", opts.roe_in>opts.roe_as ? "↑" : (opts.roe_in<opts.roe_as?"↓":"="));\\n' +
  '      set("h-ato-as", opts.ato_as.toFixed(2)+"x"); set("h-ato-in", opts.ato_in.toFixed(2)+"x");\\n' +
  '      set("h-dir-ato", opts.ato_in>opts.ato_as ? "↑" : (opts.ato_in<opts.ato_as?"↓":"="));\\n' +
  '      set("h-eps-as", f(opts.eps_as)); set("h-eps-in", f(opts.eps_in));\\n' +
  '      set("h-dir-eps", opts.eps_in>opts.eps_as ? "↑" : (opts.eps_in<opts.eps_as?"↓":"="));\\n\\n' +
  '      set("h1-gro", (opts.g_in>=0?"+":"") + opts.g_in.toFixed(1) + "%");\\n' +
  '      set("h1-mar", opts.m_in.toFixed(1) + "%");\\n' +
  '      set("h1-ato", opts.ato_in.toFixed(2) + "x");\\n' +
  '      set("h1-eps", f(opts.eps_in));\\n' +
  '      dLog("Updated Section H: Ratio Impact");\\n' +
  '    }\\n' +
  '    function updateSectionI(opts) {\\n' +
  '      if(opts.indY1Rev > opts.asY1Rev) {\\n' +
  '         set("i-sig-1", "Sharp jump in revenue vs AS");\\n' +
  '         set("i-tech-1", "Over-time contracts recognized using cost-to-cost model vs AS zero rev.");\\n' +
  '      } else if (opts.indY1Rev < opts.asY1Rev) {\\n' +
  '         set("i-sig-1", "Drop in revenue vs AS");\\n' +
  '         set("i-tech-1", "Over-time constraints slowing down recognition compared to AS.");\\n' +
  '      } else {\\n' +
  '         set("i-sig-1", "Revenue equal in transition year vs AS");\\n' +
  '         set("i-tech-1", "No major shift in timing.");\\n' +
  '      }\\n' +
  '      dLog("Updated Section I: Earnings Quality Signals");\\n' +
  '    }\\n' +
  '    function updateSectionJ(opts) {\\n' +
  '      set("j-ex-gro", "Rep. " + opts.g_in.toFixed(1) + "% vs Norm. " + opts.g_as.toFixed(1) + "%");\\n' +
  '      set("j-ex-mar", "Rep. " + opts.m_in.toFixed(1) + "% vs Norm. " + opts.m_as.toFixed(1) + "%");\\n' +
  '      set("j-ex-roe", "Rep. " + opts.roe_in.toFixed(1) + "% vs Norm. " + opts.roe_as.toFixed(1) + "%");\\n' +
  '      let epsGrAs = opts.eps_as? ((opts.eps_as - (opts.be*0.75/opts.shr))/(opts.be*0.75/opts.shr))*100 : 0;\\n' +
  '      let epsGrIn = opts.eps_in? ((opts.eps_in - (opts.be*0.75/opts.shr))/(opts.be*0.75/opts.shr))*100 : 0;\\n' +
  '      set("j-ex-eps", "EPS " + (epsGrIn>=0?"+":"") + epsGrIn.toFixed(0) + "% vs " + (epsGrAs>=0?"+":"") + epsGrAs.toFixed(0) + "%");\\n' +
  '      dLog("Updated Section J: Trend Distortion Matrix");\\n' +
  '    }\\n' +
  '    function updateSectionK(opts) {\\n' +
  '      set("k-ans-1", "Largely timing: same contracts, recognized over time now. Growth moved from " + opts.g_as.toFixed(1) + "% to " + opts.g_in.toFixed(1) + "%.");\\n' +
  '      set("k-ans-2", "Lifetime margins unchanged; only period allocation changed. Margin moved from " + opts.m_as.toFixed(1) + "% to " + opts.m_in.toFixed(1) + "%.");\\n' +
  '      set("n-dyn-growth", (opts.g_in>=0?"+":"") + opts.g_in.toFixed(1) + "%");\\n' +
  '      dLog("Updated Section K (and N): Analyst Concerns & Narrative");\\n' +
  '    }\\n' +
  '    function recalc() {\\n' +
  '      try {\\n' +
  '        dLog("Calculation triggered from input change.");\\n' +
  '        const d = new Date();\\n' +
  '        if (timestamp) timestamp.innerText = "Last updated: " + d.toLocaleTimeString();\\n' +
  '        const p = parseFloat(I.price.value)||0;\\n' +
  '        const ad = parseFloat(I.advPct.value)||0;\\n' +
  '        const sh = parseFloat(I.shipPct.value)||0;\\n' +
  '        const ac = parseFloat(I.accPct.value)||0;\\n' +
  '        const tc = parseFloat(I.totCost.value)||0;\\n' +
  '        let ci = Math.max(0, parseFloat(I.costInc.value)||0);\\n' +
  '        const pr = Math.min((parseFloat(I.progPct.value)||0), 100);\\n' +
  '        const br = parseFloat(I.bRev.value)||0;\\n' +
  '        const be = parseFloat(I.bEbit.value)||0;\\n' +
  '        const prV = parseFloat(I.pRev.value)||0;\\n' +
  '        const eq = parseFloat(I.eq.value)||0;\\n' +
  '        const ass = parseFloat(I.ass.value)||0;\\n' +
  '        const shr = parseFloat(I.shr.value)||1;\\n' +
  '        let w = [];\\n' +
  '        if (p < 0 || tc < 0 || ci < 0) w.push("Values cannot be negative.");\\n' +
  '        if (ci > tc) w.push("Cost incurred exceeds total estimated cost.");\\n' +
  '        if (ad+sh+ac !== 100) w.push("Payment terms do not sum to 100%.");\\n' +
  '        if (w.length > 0) {\\n' +
  '          if (W) { W.innerHTML = w.join("<br>"); W.classList.remove("hidden"); }\\n' +
  '          dLog("Validation warnings found.", "error");\\n' +
  '        } else {\\n' +
  '          if (W) W.classList.add("hidden");\\n' +
  '        }\\n' +
  '        let asY1Rev = 0; let indY1Rev = p * (pr / 100);\\n' +
  '        const asAdvCash = p * (ad/100);\\n' +
  '        const ca = p * (pr/100); const cl = asAdvCash;\\n' +
  '        let asY1Cost = 0; let indY1Cost = ci;\\n' +
  '        let y1p_as = asY1Rev - asY1Cost; let y1p_ind = indY1Rev - indY1Cost;\\n' +
  '        let totR_as = br + asY1Rev; let totEb_as = be + y1p_as; let t_as = totEb_as * 0.25; let pat_as = totEb_as - t_as;\\n' +
  '        let totR_in = br + indY1Rev; let totEb_in = be + y1p_ind; let t_in = totEb_in * 0.25; let pat_in = totEb_in - t_in;\\n' +
  '        let g_as = prV? ((totR_as - prV)/prV)*100 : 0; let g_in = prV? ((totR_in - prV)/prV)*100 : 0;\\n' +
  '        let m_as = totR_as? (totEb_as/totR_as)*100 : 0; let m_in = totR_in? (totEb_in/totR_in)*100 : 0;\\n' +
  '        let roe_as = eq? (pat_as/eq)*100 : 0; let roe_in = eq? (pat_in/eq)*100 : 0;\\n' +
  '        let ato_as = ass? (totR_as/ass) : 0; let ato_in = ass? (totR_in/ass) : 0;\\n' +
  '        let eps_as = pat_as/shr; let eps_in = pat_in/shr;\\n' +
  '        const opts = { p, ad, sh, ac, tc, ci, pr, br, be, prV, eq, ass, shr, asY1Rev, indY1Rev, asAdvCash, ca, cl, asY1Cost, indY1Cost, y1p_as, y1p_ind, totR_as, totR_in, totEb_as, totEb_in, t_as, t_in, pat_as, pat_in, g_as, g_in, m_as, m_in, roe_as, roe_in, ato_as, ato_in, eps_as, eps_in };\\n' + 
  '        updateAllSections(opts);\\n' +
  '        dLog("Calculation cycle complete.");\\n' +
  '      } catch(err) { dLog(err.message, "error"); }\\n' +
  '    }\\n' +
  '    recalc();\\n' +
  '  });\\n' +
  '</script>';

const oldScriptStart = html.indexOf('<script>');
html = html.substring(0, oldScriptStart) + scriptReplacement + '\\n</body>\\n</html>';

fs.writeFileSync('revenue.html', html);
console.log('Written updated HTML');
