const fs = require('fs');
let html = fs.readFileSync('cashflows.html', 'utf8');

const injection = `
        // Extrapolations for Sections I, J, K, L
        // Section J Overrides
        const j1 = document.getElementById('cf-j-1');
        if (j1) j1.textContent = "(Ind AS: " + formatNumber(indCfo) + " Cr vs IFRS: " + formatNumber(indCfo) + " Cr)";
        
        const j2 = document.getElementById('cf-j-2');
        if (j2) j2.textContent = "(FCF: " + formatNumber(indCfo - purchM) + " Cr)";
        
        const j3 = document.getElementById('cf-j-3');
        if (j3) j3.textContent = "(Ind AS Cash: " + formatNumber(indClose) + " Cr vs AS: " + formatNumber(asClose) + " Cr)";
        
        const j4 = document.getElementById('cf-j-4');
        if (j4) j4.textContent = "(Difference: " + formatNumber(od) + " Cr)";
        
        const j5 = document.getElementById('cf-j-5');
        const asCov = intExp !== 0 ? (asCfo / intExp).toFixed(2) : 0;
        const indCov = intExp !== 0 ? (indCfo / intExp).toFixed(2) : 0;
        if (j5) j5.textContent = "(Ind AS: " + indCov + "x vs AS 3: " + asCov + "x)";

        // Section K
        const k1 = document.getElementById('cf-k-1');
        if (k1 && rev !== 0) k1.textContent = "(AS 3: " + (asCfo/rev*100).toFixed(1) + "% | Ind AS: " + (indCfo/rev*100).toFixed(1) + "% | US: " + (usCfo/rev*100).toFixed(1) + "%)";
        
        const k2 = document.getElementById('cf-k-2');
        if (k2 && pbt !== 0) k2.textContent = "(AS 3: " + (asCfo/pbt).toFixed(2) + "x | Ind AS: " + (indCfo/pbt).toFixed(2) + "x | US: " + (usCfo/pbt).toFixed(2) + "x)";

        const k3 = document.getElementById('cf-k-3');
        if (k3) k3.textContent = "(AS 3 FCF: " + formatNumber(asCfo - purchM) + " | Ind AS: " + formatNumber(indCfo - purchM) + " | US: " + formatNumber(usCfo - purchM) + ")";
        
        const k4 = document.getElementById('cf-k-4');
        const asDebt = totalDebt !== 0 ? (asCfo/totalDebt).toFixed(2) : "0.00";
        const indDebt = totalDebt !== 0 ? (indCfo/totalDebt).toFixed(2) : "0.00";
        if (k4) k4.textContent = "(AS 3: " + asDebt + "x | Ind AS: " + indDebt + "x)";

        const k5 = document.getElementById('cf-k-5');
        if (k5 && assets !== 0) k5.textContent = "(AS 3: " + (asCfo/assets*100).toFixed(1) + "% | Ind AS: " + (indCfo/assets*100).toFixed(1) + "%)";

        const k6 = document.getElementById('cf-k-6');
        if (k6 && divPaid !== 0) k6.textContent = "(AS 3: " + (asCfo/divPaid).toFixed(2) + "x | Ind AS: " + (indCfo/divPaid).toFixed(2) + "x)";

        // Section I
        const i1 = document.getElementById('cf-i-1');
        if (i1) i1.textContent = "Current CFO/PBT: " + (pbt !== 0 ? (indCfo/pbt).toFixed(2) : "0.00") + "x";
        
        const i3 = document.getElementById('cf-i-3');
        if (i3) i3.textContent = "Difference: " + formatNumber(Math.abs(indCfo - asCfo)) + " Cr";

        const i5 = document.getElementById('cf-i-5');
        if (i5) i5.textContent = "Overdraft impact: " + formatNumber(od) + " Cr";

        // Section L
        const l1 = document.getElementById('cf-l-1');
        if (l1) l1.textContent = "Delta observed: " + formatNumber(Math.abs(indCfo - asCfo)) + " Cr";
        const l2 = document.getElementById('cf-l-2');
        if (l2) l2.textContent = "Reported FCF: " + formatNumber(indCfo - purchM) + " Cr";
        const l3 = document.getElementById('cf-l-3');
        if (l3) l3.textContent = "Unrestricted cash: " + formatNumber(asClose) + " Cr";
`;

html = html.replace('const now = new Date();', injection + '\n        const now = new Date();');

fs.writeFileSync('cashflows.html', html);
console.log('Appended assignment code into cashflows.html.');
