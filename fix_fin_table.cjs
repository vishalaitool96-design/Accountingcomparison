const fs = require('fs');

let content = fs.readFileSync('financial-instruments.html', 'utf-8');

const replacement = `            <thead class="bg-slate-100 text-slate-700">
              <tr>
                <th class="p-3 border-r border-slate-200 w-[16%]">Parameter</th>
                <th class="p-3 border-r border-slate-200 w-[16%]">AS (Old Indian GAAP)</th>
                <th class="p-3 border-r border-slate-200 w-[16%]">Ind AS</th>
                <th class="p-3 border-r border-slate-200 w-[16%]">IFRS</th>
                <th class="p-3 border-r border-slate-200 w-[16%]">US GAAP</th>
                <th class="p-3 w-[16%]">Logic shift</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">`;

// Add ID and data-diagnostic to Section A in FI since revenue has them
let sectionReplacement = `<section id="section-b" data-diagnostic="tracked" class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">`;
content = content.replace(/<section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">(\s*<div class="bg-\[#1a365d\] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">\s*SECTION A:)/, sectionReplacement + '$1');

content = content.replace(/<thead class="bg-slate-50 text-slate-700">[\s\S]*?<tbody class="divide-y divide-slate-100">/, replacement);

// Only do it for Section A to be safe, so split content
let parts = content.split('<!-- SECTION B -->');

let secA = parts[0];

secA = secA.replace(/<td class="p-3 font-semibold text-slate-800">/g, '<td class="p-3 font-bold">');

secA = secA.replace(/<tr class="hover:bg-slate-50">\s*<td class="p-3 font-bold">Definition<\/td>/g, '<tr class="bg-slate-50 hover:bg-slate-100">\n                <td class="p-3 font-bold">Definition</td>');
secA = secA.replace(/<tr class="hover:bg-slate-50">\s*<td class="p-3 font-bold">Initial measurement<\/td>/g, '<tr class="bg-slate-50 hover:bg-slate-100">\n                <td class="p-3 font-bold">Initial measurement</td>');
secA = secA.replace(/<tr class="hover:bg-slate-50">\s*<td class="p-3 font-bold">Liability Classification<\/td>/g, '<tr class="bg-slate-50 hover:bg-slate-100">\n                <td class="p-3 font-bold">Liability Classification</td>');
secA = secA.replace(/<tr class="hover:bg-slate-50">\s*<td class="p-3 font-bold">Impairment model<\/td>/g, '<tr class="bg-slate-50 hover:bg-slate-100">\n                <td class="p-3 font-bold">Impairment model</td>');
secA = secA.replace(/<tr class="hover:bg-slate-50">\s*<td class="p-3 font-bold">Hedge accounting<\/td>/g, '<tr class="bg-slate-50 hover:bg-slate-100">\n                <td class="p-3 font-bold">Hedge accounting</td>');
secA = secA.replace(/<tr class="hover:bg-slate-50">\s*<td class="p-3 font-bold">Disclosures<\/td>/g, '<tr class="bg-slate-50 hover:bg-slate-100">\n                <td class="p-3 font-bold">Disclosures</td>');

if (parts.length > 1) {
    content = secA + '<!-- SECTION B -->' + parts[1];
} else {
    content = secA;
}

fs.writeFileSync('financial-instruments.html', content);
