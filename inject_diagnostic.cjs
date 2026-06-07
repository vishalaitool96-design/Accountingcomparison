const fs = require('fs');

const files = [
    'esop.html',
    'cashflows.html',
    'impairment.html'
];

for (const file of files) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf-8');

        // Add Diagnostic Button
        if (!content.includes('id="diagnostic-btn"')) {
            content = content.replace(
                /<div class="(?:[\w\s-]+)">\s*<button id="btn-reset"/,
                match => {
                    return match.replace('<button id="btn-reset"', '<button id="diagnostic-btn" class="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded text-sm font-bold shadow-sm transition-colors focus:ring-2 focus:ring-indigo-500 mr-2 md:mr-0 md:ml-2">Diagnostic Mode</button>\n            <button id="btn-reset"');
                }
            );

            // Also check for 'id="reset-btn"', since some files use that instead
            if (!content.includes('id="diagnostic-btn"')) {
                content = content.replace(
                    /<div class="[^"]*flex[^"]*gap-2[^"]*items-center[^"]*">\s*<button id="reset-btn"/,
                    match => {
                        return match.replace('<button id="reset-btn"', '<button id="diagnostic-btn" class="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded text-sm font-bold shadow-sm transition-colors focus:ring-2 focus:ring-indigo-500 mr-2 md:mr-0 md:ml-2">Diagnostic Mode</button>\n            <button id="reset-btn"');
                    }
                );
            }

            // Some files might just not have a button or it's somewhere else.
            // Let's just blindly try to find the container
            if (!content.includes('id="diagnostic-btn"')) {
                content = content.replace(
                    /<\/h2>\s*<p class="text-sm text-slate-600">.+?<\/p>\s*<\/div>/s,
                    match => {
                        return match + '\n        <div class="flex items-center gap-2"><button id="diagnostic-btn" class="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded text-sm font-bold shadow-sm transition-colors">Diagnostic Mode</button></div>';
                    }
                );
            }
        }

        // Add Diagnostic Panel just before the first section
        if (!content.includes('id="diagnostic-panel"')) {
            const panelHtml = `
      <!-- Diagnostic Panel -->
      <div id="diagnostic-panel" class="hidden mt-4 bg-indigo-50 border-l-4 border-indigo-600 p-4 text-sm text-indigo-900 shadow-sm rounded-r-lg flex flex-col gap-2 shrink-0">
        <h3 class="font-bold text-lg mb-2">Diagnostic Mode Console</h3>
        <div class="mt-2 border-t border-indigo-200 pt-2">
          <h4 class="font-bold mb-1 flex justify-between">
            Recent Updates
            <span id="diag-errors" class="text-red-600 hidden">Errors!</span>
          </h4>
          <div id="diag-console" class="bg-indigo-900 text-indigo-100 font-mono p-3 rounded text-xs h-32 overflow-y-auto whitespace-pre-wrap">System initialized.</div>
        </div>
      </div>
`;
            content = content.replace(
                /<main[^>]*id="main-content"[^>]*>[\s\S]*?(?=<!--[\s]+SECTION|SECTION|\<section)/,
                match => {
                    return match + panelHtml;
                }
            );
        }

        // Add Script logic
        if (!content.includes('function dLog')) {
            const scriptLogic = `
        const diagBtn = document.getElementById("diagnostic-btn");
        const diagPanel = document.getElementById("diagnostic-panel");
        const diagConsole = document.getElementById("diag-console");
        const diagErrors = document.getElementById("diag-errors");

        function dLog(msg, type = "info") {
          if (!diagConsole) return;
          const time = new Date().toLocaleTimeString();
          const prefix = type === "error" ? "[ERROR]" : "[INFO]";
          const color = type === "error" ? "text-red-400" : "text-indigo-300";
          diagConsole.innerHTML =
            '<div><span class="' +
            color +
            '">' +
            time +
            " " +
            prefix +
            "</span> " +
            msg +
            "</div>" +
            diagConsole.innerHTML;
          if (type === "error" && diagErrors) {
            diagErrors.classList.remove("hidden");
          }
        }

        if (diagBtn && diagPanel) {
          diagBtn.addEventListener("click", () => {
            diagPanel.classList.toggle("hidden");
          });
        }
`;
            content = content.replace(/document\.addEventListener\("DOMContentLoaded",\s*(?:function)?\s*\(\)\s*=>\s*\{/, match => {
                return match + scriptLogic;
            });
            content = content.replace(/function updateAll\(\)\s*\{/, match => {
                return match + '\n          dLog("Recalculation triggered...");';
            });
            content = content.replace(/function recalc\(\)\s*\{/, match => {
                return match + '\n          dLog("Recalculation triggered...");';
            });
        }

        fs.writeFileSync(file, content);
        console.log("Updated", file);
    }
}
