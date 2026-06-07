const fs = require('fs');
let s = fs.readFileSync('financial-instruments.html', 'utf8');

// Fix Section D inside financial-instruments.html
const sectionDOld = `      <!-- SECTION D -->
      <section id="section-c" data-diagnostic="tracked" class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">`;

const sectionDNew = `      <!-- SECTION D -->
      <section class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">`;

s = s.replace(sectionDOld, sectionDNew);

fs.writeFileSync('financial-instruments.html', s);
console.log("Fixed FI Section D");
