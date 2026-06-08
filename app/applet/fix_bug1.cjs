const fs = require('fs');

let html = fs.readFileSync('lease.html', 'utf8');

const liveHTML = `
              <span class="px-2 py-1 rounded bg-green-100 text-green-800">Side-by-side treatment</span>
              <span class="px-2 py-1 rounded bg-green-100 text-green-800">Impact table Year 1</span>
              <span class="px-2 py-1 rounded bg-green-100 text-green-800">Amortization schedule</span>
              <span class="px-2 py-1 rounded bg-green-100 text-green-800">P&amp;L impact</span>
              <span class="px-2 py-1 rounded bg-green-100 text-green-800">Balance sheet impact</span>
              <span class="px-2 py-1 rounded bg-green-100 text-green-800">Cash flow impact</span>
              <span class="px-2 py-1 rounded bg-green-100 text-green-800">Ratio impact</span>
              <span class="px-2 py-1 rounded bg-green-100 text-green-800">Trend distortion matrix</span>
              <span class="px-2 py-1 rounded bg-green-100 text-green-800">Ratio interpretation guide</span>
`;

const staticHTML = `
              <span class="px-2 py-1 rounded bg-slate-100 text-slate-600">Core comparison table</span>
              <span class="px-2 py-1 rounded bg-slate-100 text-slate-600">Earnings quality signals</span>
              <span class="px-2 py-1 rounded bg-slate-100 text-slate-600">Analyst concerns &amp; answers</span>
              <span class="px-2 py-1 rounded bg-slate-100 text-slate-600">Standard &amp; exam notes</span>
              <span class="px-2 py-1 rounded bg-slate-100 text-slate-600">Disclosure requirements</span>
              <span class="px-2 py-1 rounded bg-slate-100 text-slate-600">Ind AS vs IFRS divergences</span>
              <span class="px-2 py-1 rounded bg-slate-100 text-slate-600">Real company examples</span>
              <span class="px-2 py-1 rounded bg-slate-100 text-slate-600">Summary &amp; verdict</span>
`;

html = html.replace(
  /<div\s+class="flex flex-wrap gap-2 text-\[11px\]"\s+id="diag-live-sections"\s*>\s*<\/div>/g,
  '<div class="flex flex-wrap gap-2 text-[11px]" id="diag-live-sections">' + liveHTML + '</div>'
);

html = html.replace(
  /<div\s+class="flex flex-wrap gap-2 text-\[11px\]"\s+id="diag-static-sections"\s*>\s*<\/div>/g,
  '<div class="flex flex-wrap gap-2 text-[11px]" id="diag-static-sections">' + staticHTML + '</div>'
);

// We need to stop the global JS logic from completely clearing or appending pills
html = html.replace(
  /if \(liveSectionsContainer\) liveSectionsContainer\.appendChild\(pill\);/g,
  '// disabled pill generation'
);
html = html.replace(
  /if \(staticSectionsContainer\)\s*staticSectionsContainer\.appendChild\(pill\);/g,
  '// disabled pill generation'
);

fs.writeFileSync('lease.html', html);
console.log('Done HTML part');
