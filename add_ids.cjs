const fs = require('fs');
let html = fs.readFileSync('revenue.html', 'utf-8');

function addSectionIds(match, classAttr, sectionHeader) {
  const matchSectionId = sectionHeader.match(/SECTION ([A-Z])/);
  if (matchSectionId) {
    const id = matchSectionId[1].toLowerCase();
    return '<section id="section-' + id + '" data-section-diagnostic="true" class="' + classAttr + '">\\n      <div' + sectionHeader.substring(sectionHeader.indexOf(' class=')) + '';
  }
  return match;
}

const sectionRegex = new RegExp('<section class="([^"]+)">\\\\n\\\\s*<div([^>]+>\\\\n\\\\s*SECTION [A-Z].*?<\\\\/div>)', 'gs');
html = html.replace(sectionRegex, addSectionIds);
fs.writeFileSync('revenue.html', html);
console.log('Added block IDs');
