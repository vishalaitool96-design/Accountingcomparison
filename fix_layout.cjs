const fs = require('fs');

function fixLease() {
  let s = fs.readFileSync('lease.html', 'utf8');

  // Find where section B starts
  const sectionBStart = s.indexOf('<section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full mb-8">');
  
  if (sectionBStart === -1) {
    console.log("Could not find section B in lease.html");
    return;
  }

  const oldBStr = `<section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full mb-8">
        <div class="bg-amber-600 text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-amber-300 flex justify-between items-center flex-wrap gap-2">
          <span>SECTION B: Transaction Fact Pattern (EDITABLE)</span>
        </div>
        <div class="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-amber-50">`;

  const newBStr = `      <div class="shrink-0 mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
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

  s = s.replace(oldBStr, newBStr);

  // Now find the end of Section B and replace it to add the closing div for the extra flex-1 relative we added
  const endSectionB = `          </div>
        </div>
      </section>`;
      
  const newEndSectionB = `          </div>
          </div>
        </section>`;
        
  // Need to be careful because we also need to change Section C styling if we want it to match
  s = s.replace(endSectionB, newEndSectionB);

  // At the end of Section C in lease.html:
  /*
        </div>
      </section>

      <!-- SECTION D: Financial Statement Impact -->
  */
  s = s.replace(`        </div>
      </section>

      <!-- SECTION D`, `        </div>
      </section>
      </div>

      <!-- SECTION D`);

  // Wait, I need to make sure Section C itself has h-full.
  s = s.replace(`<section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col mb-8">`, `<section id="section-c" data-diagnostic="tracked" class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">`);
  
  // Section C header
  s = s.replace(`<div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION C: Output & Accounting Differences
        </div>`, `<div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION C: Output & Accounting Differences
        </div>`);

  fs.writeFileSync('lease.html', s);
  console.log("Fixed lease");
}

function fixFI() {
  let s = fs.readFileSync('financial-instruments.html', 'utf8');

  const oldBStr = `      <!-- SECTION B -->
      <section id="section-b-container" data-diagnostic="tracked" class="shrink-0 mt-6 bg-amber-50 rounded-xl shadow-sm border border-amber-200 overflow-hidden flex flex-col h-full font-sans">
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
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 text-sm">`;

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

  // Close grid wrapping after Section C
  s = s.replace(`        </div>
      </section>

      <!-- SECTION D`, `        </div>
      </section>
      </div>

      <!-- SECTION D`);

  // Section C styling in FI:
  const sectionCOld = `      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">`;
  const sectionCNew = `      <section id="section-c" data-diagnostic="tracked" class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">`;
  s = s.replace(sectionCOld, sectionCNew);

  fs.writeFileSync('financial-instruments.html', s);
  console.log("Fixed FI");
}

fixLease();
fixFI();
