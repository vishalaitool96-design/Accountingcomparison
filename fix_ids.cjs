const fs = require('fs');
let html = fs.readFileSync('revenue.html', 'utf-8');

html = html.replace(/ id="section-[a-z]"/g, '');
html = html.replace(/ data-diagnostic="tracked"/g, '');

const sectionsToMatch = [
  'SECTION A', 'SECTION B', 'SECTION C', 'SECTION D', 'SECTION E', 'SECTION F',
  'SECTION G', 'SECTION H', 'SECTION I', 'SECTION J', 'SECTION K', 'SECTION L',
  'SECTION M', 'SECTION N', 'SECTION O', 'SECTION P'
];

sectionsToMatch.forEach(sec => {
  const lc = sec.split(' ')[1].toLowerCase();
  
  // Find the exact inner text header
  const searchStr = '<div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">\\n        ' + sec;
  let index = html.indexOf(searchStr);
  
  // if formatting differs slightly, use a generic regex for this specific section
  if (index === -1) {
    const rx = new RegExp('<div class="bg-\\\\[#1a365d\\\\].+?>\\\\s*(?:<span.*?>)?\\\\s*' + sec, 'g');
    const m = rx.exec(html);
    if (m) {
      index = m.index;
    }
  }

  if (index !== -1) {
    // walk backward to <section 
    let sectionIdx = html.lastIndexOf('<section class="', index);
    if (sectionIdx !== -1) {
      // Check if it already has id
      const sectionTag = html.substring(sectionIdx, html.indexOf('>', sectionIdx)+1);
      if (!sectionTag.includes('id=')) {
         html = html.substring(0, sectionIdx) + 
                sectionTag.replace('<section ', '<section id="section-' + lc + '" data-diagnostic="tracked" ') + 
                html.substring(html.indexOf('>', sectionIdx)+1);
      }
    }
  }
});

fs.writeFileSync('revenue.html', html);
console.log('Fixed ids!');
