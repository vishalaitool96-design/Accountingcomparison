const fs = require('fs');

let content = fs.readFileSync('cashflows.html', 'utf-8');

const replacement = `<section id="section-a" data-diagnostic="tracked" class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION A: Core Technical Comparison Table
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-100 text-slate-700">
              <tr>
                <th class="p-3 border-r border-slate-200 w-[16%]">Parameter</th>
                <th class="p-3 border-r border-slate-200 w-[16%]">AS (Old Indian GAAP)</th>
                <th class="p-3 border-r border-slate-200 w-[16%]">Ind AS (Ind AS 7)</th>
                <th class="p-3 border-r border-slate-200 w-[16%]">IFRS (IAS 7)</th>
                <th class="p-3 border-r border-slate-200 w-[16%]">US GAAP (ASC 230)</th>
                <th class="p-3 w-[16%]">Logic Shift</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">`;

content = content.replace(/<section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">\s*<div class="bg-\[#1a365d\] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">\s*SECTION A: Core Technical Comparison Table\s*<\/div>\s*<div class="overflow-x-auto">\s*<table class="w-full text-sm text-left">\s*<thead class="bg-slate-50 text-slate-700">[\s\S]*?<\/thead>\s*<tbody class="divide-y divide-slate-100">/, replacement);

content = content.replace(/class="p-3 bg-red-50 text-red-800"/g, 'class="p-3 text-slate-600"');
content = content.replace(/class="p-3 font-bold bg-amber-50 text-amber-800"/g, 'class="p-3 text-slate-600"');
content = content.replace(/class="p-3 bg-indigo-50 text-indigo-900 font-bold border-t border-indigo-200"/g, 'class="p-3 font-bold text-slate-600"');
content = content.replace(/<td class="p-3 font-semibold text-slate-800">/g, '<td class="p-3 font-bold">');


const sectionStart = content.indexOf('SECTION A: Core Technical Comparison Table');
const sectionEnd = content.indexOf('<!-- SECTION B -->', sectionStart);

if (sectionStart !== -1 && sectionEnd !== -1) {
  let sectionContent = content.substring(sectionStart, sectionEnd);
  
  let i = 0;
  sectionContent = sectionContent.replace(/<tr class="hover:bg-slate-50">/g, (match) => {
    const res = i % 2 === 0 ? '<tr class="hover:bg-slate-50">' : '<tr class="bg-slate-50 hover:bg-slate-100">';
    i++;
    return res;
  });

  content = content.substring(0, sectionStart) + sectionContent + content.substring(sectionEnd);
}

fs.writeFileSync('cashflows.html', content);
