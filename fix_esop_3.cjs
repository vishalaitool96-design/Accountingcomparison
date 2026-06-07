const fs = require('fs');

let content = fs.readFileSync('esop.html', 'utf-8');

// Find the section A table content
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

fs.writeFileSync('esop.html', content);
