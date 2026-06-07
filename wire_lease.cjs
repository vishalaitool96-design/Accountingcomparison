const fs = require('fs');
let s = fs.readFileSync('lease.html', 'utf8');

const replacement = `
      const resetBtn = document.getElementById('reset-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          document.getElementById('inp-pmt').value = 12;
          document.getElementById('inp-term').value = 5;
          document.getElementById('inp-rate').value = 10;
          document.getElementById('inp-ebitda').value = 80;
          document.getElementById('inp-rev').value = 200;
          document.getElementById('inp-assets').value = 500;
          document.getElementById('inp-equity').value = 300;
          document.getElementById('inp-ownership').value = "No";
          recalc();
        });
      }

      const copyBtn = document.getElementById('copy-btn');
      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          alert('Results functionality not implemented yet.');
        });
      }
`;

// Insert it right after: function recalc() { ... } ... we need to find where the scripts start.
// Let's just put it at the end inside the <script> tags. Wait, finding `</script>` is easier.
// Let's put it at the very bottom of the first <script> tag before the </body>.

s = s.replace(/(<\/script>\s*<\/body>)/, replacement + '$1');

fs.writeFileSync('lease.html', s);
console.log("Wired up buttons for lease");
