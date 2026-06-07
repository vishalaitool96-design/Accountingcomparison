const fs = require('fs');
let html = fs.readFileSync('revenue.html', 'utf-8');

const regex = /<section( class="shrink-0 mt-6 bg-[^"]+")>\\s*<div class="bg-\\[#1a365d\\][^>]+>\\s*(?:<span[^>]*>)?\\s*SECTION ([A-Za-z])/g;

html = html.replace(regex, (match, classes, letter) => {
  const idValue = letter.toLowerCase();
  return '<section id="section-' + idValue + '" data-diagnostic="tracked"' + classes + '>' + match.substring(match.indexOf('<div'));
});

// Also manually add to A and B
html = html.replace('SECTION A: Core Technical Comparison Table', 'SECTION A: Core Technical Comparison Table');

fs.writeFileSync('revenue.html', html);
console.log('Sections extracted again!');
