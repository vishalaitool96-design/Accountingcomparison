const fs = require('fs');
let html = fs.readFileSync('revenue.html', 'utf-8');

const regex = /<section( class="shrink-0 mt-6 bg-[^>]+ flex-col(?: h-full)?")>\\s*<div class="bg-\\[#1a365d\\] text-white[^>]+>\\s*(?:<span.*?>)?\\s*SECTION ([A-Za-z])/g;

html = html.replace(regex, (match, classes, letter) => {
  const idValue = letter.toLowerCase();
  return '<section id="section-' + idValue + '" data-diagnostic="tracked"' + classes + '>' + match.substring(match.indexOf('<div'));
});

fs.writeFileSync('revenue.html', html);
console.log('Sections extracted!');
