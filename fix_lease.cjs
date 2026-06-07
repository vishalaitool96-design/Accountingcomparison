const fs = require('fs');
let html = fs.readFileSync('lease.html', 'utf8');

const jsStart = html.indexOf('<script>');
const jsEnd = html.indexOf('</script>', jsStart);

let script = html.substring(jsStart, jsEnd);

// Add set function
script = script.replace(/function f\(n\)/, `function get(id) {
          return document.getElementById(id);
        }

        function set(el, val) {
          const e = get(el);
          if (e) e.innerHTML = val;
        }

        function f(n)`);

const newCalcLogic = `
            // Update Section D
            if(get("d-exp-as")) set("d-exp-as", rent.toFixed(2) + " Cr rent");
            if(get("d-rou-in")) set("d-rou-in", pv.toFixed(2));
            if(get("d-liab-in")) set("d-liab-in", pv.toFixed(2));
            const dExpIn = (dep).toFixed(2) + " Cr (Dep) + " + (intExp).toFixed(2) + " Cr (Int) = " + (dep + intExp).toFixed(2) + " Cr";
            if(get("d-exp-in")) set("d-exp-in", dExpIn);

            if(get("d-rou-if")) set("d-rou-if", pv.toFixed(2));
            if(get("d-liab-if")) set("d-liab-if", pv.toFixed(2));
            if(get("d-exp-if")) set("d-exp-if", dExpIn);

            if(get("d-rou-us")) set("d-rou-us", pv.toFixed(2));
            if(get("d-liab-us")) set("d-liab-us", pv.toFixed(2));
            if(get("d-exp-us")) set("d-exp-us", rent.toFixed(2) + " Cr straight-line operating lease expense");

            // Section E (P&L) Updates Harmonized
            ["as", "in", "if", "us"].forEach(s => set("pl-base-" + s, f(bEbitda)));
            
            set("pl-dep-as", "- " + f(rent)); // AS has rent, no depreciation for operating lease. We'll label it as Lease exp in UI
            ["in", "if"].forEach(s => set("pl-dep-" + s, "- " + f(dep))); // Ind AS / IFRS have Dep
            set("pl-dep-us", "- " + f(rent)); // US GAAP has single lease expense
            
            set("pl-rep-ebitda-as", f(bEbitda - rent));
            ["in", "if"].forEach(s => set("pl-rep-ebitda-" + s, f(bEbitda))); // Rent gone
            set("pl-rep-ebitda-us", f(bEbitda - rent));
            
            const ebitAs = bEbitda - rent;
            const ebitIn = bEbitda - dep;
            const ebitUs = bEbitda - rent;
            
            set("pl-ebit-as", f(ebitAs));
            ["in", "if"].forEach(s => set("pl-ebit-" + s, f(ebitIn)));
            set("pl-ebit-us", f(ebitUs));
            
            set("pl-acc-as", "Rs. 0 Cr");
            ["in", "if"].forEach(s => set("pl-acc-" + s, "- " + f(intExp)));
            set("pl-acc-us", "Rs. 0 Cr"); // Implicit in single lease exp
            
            const pbtAs = bEbitda - rent;
            const pbtIn = bEbitda - dep - intExp;
            
            set("pl-pbt-as", f(pbtAs));
            ["in", "if"].forEach(s => set("pl-pbt-" + s, f(pbtIn)));
            set("pl-pbt-us", f(pbtAs));
            
            set("pl-tax-as", "- " + f(pbtAs * 0.25));
            ["in", "if"].forEach(s => set("pl-tax-" + s, "- " + f(pbtIn * 0.25)));
            set("pl-tax-us", "- " + f(pbtAs * 0.25));
            
            set("pl-pat-as", f(pbtAs * 0.75));
            ["in", "if"].forEach(s => set("pl-pat-" + s, f(pbtIn * 0.75)));
            set("pl-pat-us", f(pbtAs * 0.75));

            // Section F (Balance Sheet) Updates Harmonized
            set("bs-ppe-as", "Rs. 0 Cr"); // Operating lease = No ROU
            ["in", "if", "us"].forEach(s => set("bs-ppe-" + s, f(rAssetY1)));
            
            set("bs-aro-as", "Rs. 0 Cr");
            ["in", "if", "us"].forEach(s => set("bs-aro-" + s, f(lLiabY1)));
            
            set("bs-ta-as", f(bAssets));
            ["in", "if", "us"].forEach(s => set("bs-ta-" + s, f(bAssets + rAssetY1)));
            
            set("bs-tl-as", f(bLiab));
            ["in", "if", "us"].forEach(s => set("bs-tl-" + s, f(bLiab + lLiabY1)));
            
            set("bs-eq-as", f(bEq));
            ["in", "if"].forEach(s => set("bs-eq-" + s, f(bEq + (pbtIn * 0.75) - (pbtAs * 0.75)))); // Ind AS / IFRS have lower PAT in year 1 -> lower retained earnings
            set("bs-eq-us", f(bEq)); // US GAAP has same PAT as AS

            // Section G (Cash Flow)
            ["as", "in", "if", "us"].forEach(s => set("g-pay-" + s, f(rent)));
            
            set("g-cfo-as", "- " + f(rent));
            ["in", "if"].forEach(s => set("g-cfo-" + s, "- " + f(intExp)));
            set("g-cfo-us", "- " + f(rent));
            
            set("g-cff-as", "Rs. 0 Cr");
            ["in", "if"].forEach(s => set("g-cff-" + s, "- " + f(rent - intExp)));
            set("g-cff-us", "Rs. 0 Cr");
            
            ["as", "in", "if", "us"].forEach(s => set("g-tot-" + s, "- " + f(rent)));

            // Section H (Ratio) Updates Harmonized
            const ebmAs = bRev > 0 ? (bEbitda - rent) / bRev : 0;
            const ebmIn = bRev > 0 ? bEbitda / bRev : 0;
            set("rt-ebitdam-as", p(ebmAs));
            ["in", "if"].forEach(s => set("rt-ebitdam-" + s, p(ebmIn)));
            set("rt-ebitdam-us", p(ebmAs));
            
            const eqAs = bEq;
            const eqIn = bEq + (pbtIn * 0.75) - (pbtAs * 0.75);
            const deAs = eqAs > 0 ? bDebt / eqAs : 0;
            const deIn = eqIn > 0 ? (bDebt + lLiabY1) / eqIn : 0;
            set("rt-de-as", deAs.toFixed(2) + "x");
            ["in", "if", "us"].forEach(s => set("rt-de-" + s, deIn.toFixed(2) + "x")); // US GAAP has liability too
            
            const roaAs = bAssets > 0 ? ebitAs / bAssets : 0;
            const roaIn = (bAssets + rAssetY1) > 0 ? ebitIn / (bAssets + rAssetY1) : 0;
            set("rt-roa-as", p(roaAs));
            ["in", "if", "us"].forEach(s => set("rt-roa-" + s, p(roaIn)));
            
            set("rt-dir-ebitdam", dir(ebmIn, ebmAs));
            set("rt-dir-de", dir(deIn, deAs));
            set("rt-dir-roa", dir(roaIn, roaAs));
`;

const replaceRegex = /\/\/ Section D[\s\S]*?(?=dLog\("Calculation successfully completed"\);)/;
script = script.replace(replaceRegex, newCalcLogic);

html = html.substring(0, jsStart) + script + html.substring(jsEnd);
fs.writeFileSync('lease.html', html);
console.log('Successfully updated JS calculations in lease.html');
