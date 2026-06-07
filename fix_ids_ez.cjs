const fs = require('fs');
let html = fs.readFileSync('revenue.html', 'utf-8');

const sectionsToMatch = [
  'SECTION A', 'SECTION B', 'SECTION C', 'SECTION D', 'SECTION E', 'SECTION F',
  'SECTION G', 'SECTION H', 'SECTION I', 'SECTION J', 'SECTION K', 'SECTION L',
  'SECTION M', 'SECTION N', 'SECTION O', 'SECTION P'
];

sectionsToMatch.forEach(sec => {
  const lc = sec.split(' ')[1].toLowerCase();
  
  // just match SECTION X: or SECTION X -
  const idx = html.indexOf(sec + ':');
  let idx2 = html.indexOf(sec + ' -');
  let idx3 = html.indexOf(sec + ' ('); // for SECTION B
  let index = idx !== -1 ? idx : (idx2 !== -1 ? idx2 : idx3);
  
  if (index !== -1) {
    let sectionIdx = html.lastIndexOf('<section ', index);
    if (sectionIdx !== -1) {
      const sectionTag = html.substring(sectionIdx, html.indexOf('>', sectionIdx)+1);
      if (!sectionTag.includes('id="section-')) {
         html = html.substring(0, sectionIdx) + 
                sectionTag.replace('<section ', '<section id="section-' + lc + '" data-diagnostic="tracked" ') + 
                html.substring(html.indexOf('>', sectionIdx)+1);
      }
    }
  }
});

fs.writeFileSync('revenue.html', html);
console.log('Fixed ids!');
