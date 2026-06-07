const fs = require('fs');

let s = fs.readFileSync('consolidation.html', 'utf8');

// Replace all the `flex items-center justify-between col-span-full md:col-span-1` 
// with standard stacked block layout like lease.html

s = s.replace(/<div class="flex items-center justify-between col-span-full md:col-span-1">\s*<label class="font-bold text-slate-700">(.*?)<\/label>\s*<input type="(.*?)" id="(.*?)" value="(.*?)" class="w-24 p-1 border border-slate-300 bg-white rounded text-right(.*?)">\s*<\/div>/g, 
  (match, labelText, type, id, value, extraClass) => {
    return `<div>
                  <label class="block text-sm font-bold text-slate-700 mb-1">${labelText}</label>
                  <input type="${type}" id="${id}" value="${value}" class="w-full p-2 border border-slate-300 rounded bg-white text-slate-800">
                </div>`;
  }
);

// We also need to fix Business & Profile config, which contains flex justify-between
fs.writeFileSync('consolidation.html', s);
console.log("Fixed consolidation inputs");
