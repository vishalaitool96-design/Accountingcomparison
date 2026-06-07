const fs = require('fs');
let html = fs.readFileSync('revenue.html', 'utf-8');

const copyLogic = `
    const copyBtn = document.getElementById("copy-btn");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        recalc(); // Force recalculation
        
        // Let's create a textual summary of the output to copy
        const p = parseFloat(I.price.value)||0;
        const ci = parseFloat(I.costInc.value)||0;
        const pr = Math.min((parseFloat(I.progPct.value)||0), 100);
        let asY1Rev = 0; let indY1Rev = p * (pr / 100);
        
        const summary = 'REVENUE RECOGNITION SUMMARY\\n' +
        '---------------------------\\n' +
        'Contract Price: Rs. ' + p + ' Cr\\n' +
        'Progress: ' + pr + '%\\n' +
        'AS Revenue (Y1): Rs. ' + asY1Rev + ' Cr\\n' +
        'Ind AS / IFRS 15 Revenue (Y1): Rs. ' + indY1Rev + ' Cr\\n';
        
        navigator.clipboard.writeText(summary).then(() => {
          const originalText = copyBtn.innerText;
          copyBtn.innerText = "Copied!";
          copyBtn.classList.remove("bg-amber-800");
          copyBtn.classList.add("bg-green-600");
          
          dLog("Successfully copied results to clipboard.");
          
          setTimeout(() => {
            copyBtn.innerText = originalText;
            copyBtn.classList.remove("bg-green-600");
            copyBtn.classList.add("bg-amber-800");
          }, 2000);
        }).catch(err => {
          dLog("Failed to copy: " + err, "error");
        });
      });
    }
`;

// Insert it right after the reset-btn logic
const searchStr = 'dLog("Reset to default values.");\\n    });';
html = html.replace(searchStr, searchStr + '\\n' + copyLogic);

fs.writeFileSync('revenue.html', html);
console.log('Added copy button logic');
