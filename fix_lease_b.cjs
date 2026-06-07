const fs = require('fs');
let s = fs.readFileSync('lease.html', 'utf8');

const oldStr = `<section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full mb-8">
        <div class="bg-amber-600 text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-amber-300 flex justify-between items-center flex-wrap gap-2">
          <span>SECTION B: Transaction Fact Pattern (EDITABLE)</span>
        </div>
        <div class="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-amber-50">`;

const newStr = `<section id="section-b-container" data-diagnostic="tracked" class="shrink-0 bg-amber-50 rounded-xl shadow-sm border border-amber-200 overflow-hidden flex flex-col h-full font-sans mb-8">
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
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 text-sm">`;

s = s.replace(oldStr, newStr);

// need to close the extra div for <div class="p-5 flex-1 relative bg-amber-50">. 
// currently the ending is:
/*
          <div>
            <label class="block text-sm font-bold text-slate-700 mb-1">Transfer of Ownership / Purchase Option?</label>
            <select id="inp-ownership" class="w-full p-2 border border-slate-300 rounded bg-white text-slate-800 focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
        </div>
      </section>
*/

s = s.replace(`        </div>
      </section>

      <!-- SECTION C: Output & Accounting Differences -->`, `        </div>
        </div>
      </section>

      <!-- SECTION C: Output & Accounting Differences -->`);


fs.writeFileSync('lease.html', s);
