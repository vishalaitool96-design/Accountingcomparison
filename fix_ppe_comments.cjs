const fs = require('fs');

let html = fs.readFileSync('ppe.html', 'utf8');

html = html.replace(/<!-- SECTION Q: Analyst Concerns &amp; Answers -->/g, '<!-- SECTION L: Analyst Concerns & Answers -->');
html = html.replace(/<!-- SECTION Q: Investor Perception Analysis -->/g, '<!-- SECTION M: Investor Perception Analysis -->');
html = html.replace(/<!-- SECTION Q: Reporting Signals Decoder -->/g, '<!-- SECTION N: Reporting Signals Decoder -->');
html = html.replace(/<!-- SECTION Q: Premium Intelligence Narrative -->/g, '<!-- SECTION O: Premium Intelligence Narrative -->');
html = html.replace(/<!-- SECTION Q: Red Flags vs Green Flags Matrix -->/g, '<!-- SECTION P: Red Flags vs Green Flags (Visual Indicator Matrix) -->');
html = html.replace(/<!-- SECTION Q: Final Intelligence Summary -->/g, '<!-- SECTION Q: Final Intelligence Summary -->');

html = html.replace(/<!-- SECTION M & N: Investor Perception & Signals -->/g, '<!-- SECTION M & N: Investor Perception & Signals -->');
// Wait, I messed up `SECTION L & M:` it became `SECTION M & N:` which is fine.

fs.writeFileSync('ppe.html', html);
console.log("Updated ppe comments.");
