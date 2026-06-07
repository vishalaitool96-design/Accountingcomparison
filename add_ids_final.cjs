const fs = require('fs');
let html = fs.readFileSync('revenue.html', 'utf-8');

const sectionsToMatch = [
  'SECTION A', 'SECTION B', 'SECTION C', 'SECTION D', 'SECTION E', 'SECTION F',
  'SECTION G', 'SECTION H', 'SECTION I', 'SECTION J', 'SECTION K', 'SECTION L',
  'SECTION M', 'SECTION N', 'SECTION O', 'SECTION P'
];

sectionsToMatch.forEach(sec => {
  const lc = sec.split(' ')[1].toLowerCase();
  // Find <section class="...">\n      <div class="...">\n        SECTION X
  const searchStr = sec + ':';
  // Let's find index of searchStr
  let index = html.indexOf(searchStr);
  if (index === -1) {
    index = html.indexOf(sec + ' -');
    if(index === -1) {
      index = html.indexOf(sec);
    }
  }
  
  if (index !== -1) {
    // walk backward to <section 
    let sectionIdx = html.lastIndexOf('<section class="shrink-0', index);
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
console.log('Done replacement');
