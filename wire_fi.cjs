const fs = require('fs');
let s = fs.readFileSync('financial-instruments.html', 'utf8');

const replacement = `
      const resetBtn = document.getElementById('reset-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          document.getElementById('fi-bond-face').value = 100;
          document.getElementById('fi-bond-rate').value = 8;
          document.getElementById('fi-bond-term').value = 5;
          document.getElementById('fi-receivable').value = 50;
          document.getElementById('fi-ecl-rate').value = 2;
          document.getElementById('fi-deriv-notional').value = 100;
          document.getElementById('fi-deriv-loss').value = 2;
          document.getElementById('fi-revenue').value = 200;
          document.getElementById('fi-opex').value = 150;
          document.getElementById('fi-tax-rate').value = 25;
          document.getElementById('fi-equity').value = 131.25;
          document.getElementById('fi-assets').value = 250;
          updateCalculations();
        });
      }

      const copyBtn = document.getElementById('copy-btn');
      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          alert('Results functionality not implemented yet.');
        });
      }
`;

s = s.replace(/(<\/script>\s*<\/body>)/, replacement + '$1');

fs.writeFileSync('financial-instruments.html', s);
console.log("Wired up buttons for FI");
