const fs = require('fs');

function fixFI() {
  let s = fs.readFileSync('financial-instruments.html', 'utf8');

  const oldBStr = `      <!-- SECTION B -->
      <section class="shrink-0 mt-6 bg-[#fffff0] rounded-xl shadow-sm border border-amber-200 overflow-hidden flex flex-col p-6">
        <div class="border-l-4 border-amber-500 pl-4 mb-6">
          <h3 class="text-lg font-bold text-amber-800 uppercase tracking-wide">SECTION B: Transaction Fact Pattern (Editable)</h3>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">`;

  const newBStr = `      <!-- SECTION B -->
      <div class="shrink-0 mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section id="section-b-container" data-diagnostic="tracked" class="shrink-0 bg-amber-50 rounded-xl shadow-sm border border-amber-200 overflow-hidden flex flex-col h-full font-sans">
          <div class="bg-amber-600 text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-amber-300 flex justify-between items-center flex-wrap gap-2">
            <span>SECTION B: Transaction Fact Pattern (EDITABLE)</span>
            <div>
              <button id="reset-btn" class="bg-white text-amber-700 hover:bg-amber-100 text-xs px-3 py-1 rounded shadow-sm mr-2 transition-colors cursor-pointer font-bold">Reset to Default</button>
              <button id="copy-btn" class="bg-amber-800 hover:bg-amber-900 text-white text-xs px-3 py-1 rounded shadow-sm transition-colors border border-amber-500 cursor-pointer font-bold">Copy Results</button>
            </div>
          </div>
          <div class="p-5 flex-1 relative bg-amber-50">
            <div class="absolute right-4 top-4 text-amber-700 opacity-10 font-bold text-6xl pointer-events-none select-none">FACTS</div>
            <div id="validation-warning" class="hidden mb-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700 text-sm font-bold"></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 relative z-10 text-sm">`;

  // We need to be careful with the grid classes here
  s = s.replace(oldBStr, newBStr);

  // remove the old reset button
  s = s.replace(/<button id="reset-btn" class="mt-4 px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded font-semibold text-sm transition-colors">Reset to Default<\/button>\n/g, '');

  // Need to close the extra div for <div class="p-5 flex-1 relative bg-amber-50">
  // Currently the ending is:
  /*
          </div>
        </div>
      </section>

      <!-- SECTION C -->
  */
  s = s.replace(/          <\/div>\s*<\/div>\s*<\/section>\s*<!-- SECTION C/g, '          </div>\n        </div>\n        </section>\n\n      <!-- SECTION C');

  // Close grid wrapping after Section C
  s = s.replace(`        </div>
      </section>

      <!-- SECTION D`, `        </div>
      </section>
      </div>

      <!-- SECTION D`);

  // Section C styling in FI:
  const sectionCOld = `      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">`;
  const sectionCNew = `      <section id="section-c" data-diagnostic="tracked" class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">`;
  s = s.replace(sectionCOld, sectionCNew);

  fs.writeFileSync('financial-instruments.html', s);
  console.log("Fixed FI");
}

fixFI();
