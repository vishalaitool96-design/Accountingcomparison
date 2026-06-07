const fs = require('fs');
let html = fs.readFileSync('esop.html', 'utf8');

let lines = html.split('\n');
// the syntax error is around line 2327
for (let i = 2320; i < 2335; i++) {
  if (lines[i].includes('</div>')) {
    console.log('Found </div> at line', i, lines[i]);
    lines.splice(i, 1);
    break;
  }
}

// Since I removed the grid container, I should add 'mt-6' to Section P so it spaces properly
for(let i=2160; i< 2180;i++){
  if (lines[i].includes('<section') && lines[i+1].includes('class="bg-white rounded-xl shadow-sm border border-slate-200')) {
     lines[i+1] = lines[i+1].replace('class="bg-white', 'class="mt-6 bg-white');
     break;
  }
}


fs.writeFileSync('esop.html', lines.join('\n'));
console.log('Fixed esop.html');
