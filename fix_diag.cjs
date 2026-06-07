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
  
  // Remove existing listeners
  cnt = cnt.replace(/if\s*\(diagBtn\s*&&\s*diagPanel\)\s*\{\s*diagBtn\.addEventListener\("click"[\s\S]*?\}\);?\s*\}/g, "");
  
  let injection = `
<!-- Global Diagnostic UI Fix -->
<style>
  body.diagnostic-active [data-diagnostic="tracked"] {
    outline: 3px dashed #6366f1 !important;
    outline-offset: 4px;
    box-shadow: 0 0 15px rgba(99, 102, 241, 0.4) !important;
    transition: all 0.3s ease;
  }
</style>
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const glDiagBtn = document.getElementById("diagnostic-btn");
    const glDiagPanel = document.getElementById("diagnostic-panel");
    const glDiagConsole = document.getElementById("diag-console");
    
    if (glDiagBtn && glDiagPanel) {
      if (!glDiagBtn.dataset.listenerAttached) {
        glDiagBtn.dataset.listenerAttached = 'true';
        glDiagBtn.addEventListener("click", () => {
          glDiagPanel.classList.toggle("hidden");
          const isHidden = glDiagPanel.classList.contains("hidden");
          
          if (isHidden) {
             glDiagBtn.textContent = "Diagnostic Mode";
             document.body.classList.remove("diagnostic-active");
          } else {
             glDiagBtn.textContent = "Close Console";
             document.body.classList.add("diagnostic-active");
             if (glDiagConsole) {
                let existing = glDiagConsole.innerHTML;
                if (!existing.includes("Tracker highlighting enabled")) {
                   glDiagConsole.innerHTML = '<div><span class="text-indigo-300">[' + new Date().toLocaleTimeString() + '] [INFO]</span> Diagnostic Mode Active. Tracker highlighting enabled.</div>' + existing;
                }
             }
          }
        });
      }
    }
  });
</script>
`;

  if (!cnt.includes('Global Diagnostic UI Fix')) {
      cnt = cnt.replace('</body>', injection + '\n</body>');
      fs.writeFileSync(file, cnt);
  } else {
      cnt = cnt.replace(/<!-- Global Diagnostic UI Fix -->[\s\S]*?<\/script>\n/, injection + '\n');
      fs.writeFileSync(file, cnt);
  }
}
console.log("Fix applied!");
