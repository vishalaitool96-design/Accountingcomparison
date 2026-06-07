const fs = require('fs');

let html = fs.readFileSync('ppe.html', 'utf8');

// The block to extract starts with '      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">\n        <!-- 4.3 Ratio Interpretation Guide -->'
// and ends with its corresponding '      </div>\n\n      <!-- SECTION K: Analyst Concerns'
const regex = /<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">\s*<!-- 4\.3 Ratio Interpretation Guide -->(.*?)<\/section>\s*<\/div>/s;
const match = html.match(regex);

if (match) {
  let block = match[1] + '</section>';
  html = html.replace(match[0], "");
  
  // replace the title inside the block
  block = block.replace(/Ratio Interpretation Guide/g, 'SECTION K: Ratio Interpretation Guide');
  block = block.replace(/SECTION K: SECTION K:/g, 'SECTION K:');
  
  // Now place it after SECTION J closing </section>
  // Let's find SECTION J
  const jIndex = html.indexOf('SECTION J: Trend Distortion Matrix');
  if (jIndex !== -1) {
    const endSectionStr = '</section>';
    const jEnd = html.indexOf(endSectionStr, jIndex);
    if (jEnd !== -1) {
       const insertPos = jEnd + endSectionStr.length;
       html = html.slice(0, insertPos) + '\n\n      ' + block + html.slice(insertPos);
    }
  }
}

// Now rename the later sections
html = html.replace(/SECTION K: Analyst/g, 'SECTION L: Analyst');
html = html.replace(/SECTION L & M:/g, 'SECTION M & N:');
html = html.replace(/SECTION L: Investor/g, 'SECTION M: Investor');
html = html.replace(/SECTION M: Reporting/g, 'SECTION N: Reporting');
html = html.replace(/SECTION N: Premium/g, 'SECTION O: Premium');
html = html.replace(/SECTION O: Red Flags/g, 'SECTION P: Red Flags');
html = html.replace(/SECTION P: Final/g, 'SECTION Q: Final');

// Also the HTML comments:
html = html.replace(/<!-- SECTION K: /g, '<!-- SECTION L: ');
html = html.replace(/<!-- SECTION L & M/g, '<!-- SECTION M & N');
html = html.replace(/<!-- SECTION L: /g, '<!-- SECTION M: ');
html = html.replace(/<!-- SECTION M: /g, '<!-- SECTION N: ');
html = html.replace(/<!-- SECTION N: /g, '<!-- SECTION O: ');
html = html.replace(/<!-- SECTION O: /g, '<!-- SECTION P: ');
html = html.replace(/<!-- SECTION P: /g, '<!-- SECTION Q: ');


fs.writeFileSync('ppe.html', html);
console.log("Updated ppe.html");
