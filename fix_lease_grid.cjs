const fs = require('fs');

let s = fs.readFileSync('lease.html', 'utf8');

const targetStr = `      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          Lease Amortization Schedule (Year by Year)
        </div>`;

const replaceStr = `      </div>
      
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          Lease Amortization Schedule (Year by Year)
        </div>`;

s = s.replace(targetStr, replaceStr);

fs.writeFileSync('lease.html', s);
console.log("Fixed lease grid closure");
