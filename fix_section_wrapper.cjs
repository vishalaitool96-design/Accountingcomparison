const fs = require('fs');

const files = [
  'consolidation.html',
  'impairment.html',
  'esop.html',
  'deferred-tax.html',
  'lease.html',
  'ppe.html',
  'cashflows.html',
  'financial-instruments.html'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    // 1. Remove "h-full" from the section definition
    // Usually: class="... overflow-hidden flex flex-col h-full"
    content = content.replace(
      /(<section[^>]*id="section-a"[^>]*class="[^"]*flex flex-col) h-full(")/g,
      '$1$2'
    );
    
    // Some might have it without id="section-a" or it's section-b.. Let's just find the section surrounding the Core Technical text
    // Actually, safer replace:
    content = content.replace(/(<!-- SECTION A: Core Technical Comparison Table -->\s*<section[^>]*class="[^"]*flex flex-col) h-full([^"]*">)/g, '$1$2');

    // 2. Remove "flex-1" from the div wrapper
    content = content.replace(/(SECTION A: Core Technical Comparison Table\s*<\/div>\s*<div class="overflow-x-auto) flex-1(")/g, '$1$2');

    // 3. Fix the weird JSDOM formatting `\n            <table` -> it was probably an actual `\n` text node. Wait, I inserted `innerHTML` into `thead` and `tbody`, not `table`. So `table` shouldn't have `\n`.
    // Oh, JSDOM probably serialized empty text nodes. Let's just fix `\n            <table` if it exists.
    content = content.replace(/\\n\s*<table/g, '<table');

    fs.writeFileSync(file, content);
  }
}
console.log("Fixed wrapper layout classes.");
