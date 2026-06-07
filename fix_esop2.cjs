const fs = require('fs');
let html = fs.readFileSync('esop.html', 'utf8');

let lines = html.split('\n');

// Restore the div at 2324
lines.splice(2324, 0, '          </div>');

// Now remove the div at 2327 (which is the orphaned grid div)
for (let i = 2324; i < 2335; i++) {
   if (lines[i] === '      </div>') {
      lines.splice(i, 1);
      break;
   }
}

fs.writeFileSync('esop.html', lines.join('\n'));
