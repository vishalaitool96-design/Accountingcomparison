const fs = require('fs');

const files = [
  'financial-instruments.html',
  'deferred-tax.html',
  'consolidation.html',
  'impairment.html',
  'esop.html',
  'lease.html',
  'ppe.html',
  'revenue.html',
  'cashflows.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');

  // Regex to match the section wrapper for Section A
  // Usually it looks like:
  // <!-- SECTION A.* -->
  // <section ...
  //   <div class="bg-[#1a365d]...
  //     SECTION A: ...
  //   </div>
  //   <div class="overflow-x-auto...
  //     <table ...
  //       <thead ...
  //         <tr>
  //           ...
  //         </tr>
  //       </thead>
  
  // We'll replace the `<section>` tag up to `</thead>` with a standardized version using JS Regex, preserving the `<th>` text contents.
  let isModified = false;
  
  const theadRegex = /<thead[^>]*>([\s\S]*?)<\/thead>/;
  const theadMatch = content.match(theadRegex);
  
  if (theadMatch) {
    const trMatch = theadMatch[1].match(/<tr[^>]*>([\s\S]*?)<\/tr>/);
    if (trMatch) {
      const ths = [];
      const thRegex = /<th[^>]*>([\s\S]*?)<\/th>/g;
      let th;
      while ((th = thRegex.exec(trMatch[1])) !== null) {
        ths.push(th[1].trim());
      }
      
      if (ths.length > 0) {
        // Standardize them
        const newThead = `
            <thead class="bg-slate-100 text-slate-800">
              <tr>
                <th class="p-3 border-r border-b border-slate-200 w-[12%]">${ths[0] || 'Parameter'}</th>
                <th class="p-3 border-r border-b border-slate-200 w-[18%]">${ths[1] || 'AS (Old Indian GAAP)'}</th>
                <th class="p-3 border-r border-b border-slate-200 w-[17%]">${ths[2] || 'Ind AS'}</th>
                <th class="p-3 border-r border-b border-slate-200 w-[17%]">${ths[3] || 'IFRS'}</th>
                <th class="p-3 border-r border-b border-slate-200 w-[18%]">${ths[4] || 'US GAAP'}</th>
                <th class="p-3 border-b border-slate-200 bg-blue-50 text-blue-900 w-[18%]">${ths[5] || 'Logic Shift'}</th>
              </tr>
            </thead>`;
            
        // Now find the wrapper
        // From `<!-- SECTION` or `<section id="section-1"` or `<section class="shrink-...` until `</thead>`
        
        // Wait, multiple tables might be in the file. We only want Section A.
        const sectionAStartRegex = /(<!-- SECTION A(?:[^>]+)?-->\s*)?<section[^>]+>\s*<div[^>]*bg-\[#1a365d\][^>]*>([\s\S]*?)<\/div>\s*<div[^>]*overflow-x-auto[^>]*>\s*<table[^>]*>\s*<thead[^>]*>[\s\S]*?<\/thead>/i;
        
        const replaceMatch = content.match(sectionAStartRegex);
        if (replaceMatch) {
          const title = replaceMatch[2].trim();
          const newHeader = `<!-- SECTION A: Core Technical Comparison Table -->
      <section
        id="section-a"
        data-diagnostic="tracked"
        class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full"
      >
        <div
          class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200"
        >
          ${title}
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-xs text-left min-w-[1200px]">` + newThead;
          
          content = content.replace(sectionAStartRegex, newHeader);
          isModified = true;
          
          // Also need to standardize tbody class
          // Look for <tbody class="..."> immediately after `</thead>`
          content = content.replace(/<\/thead>\s*<tbody[^>]*>/, `</thead>\n            <tbody class="divide-y divide-slate-200 text-slate-800">`);
        }
      }
    }
  }

  // Also style the <td>s?
  // Let's replace `<tr class="hover:bg-slate-50">` with standard
  // Wait, no, maybe the padding is already `p-3`. In ppe.html it is `p-3` and some `p-4`.
  // Let's just do a string replace for `<td class="p-4` with `<td class="p-3` and `<td class="p-2` with `<td class="p-3`.
  
  if (isModified) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  } else {
    console.log(`Failed to find SECTION A in ${file}`);
  }
}
