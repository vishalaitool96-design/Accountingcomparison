const fs = require('fs');

let html = fs.readFileSync('revenue.html', 'utf8');

html = html.replace(/<!-- SECTION P: Ratio Interpretation Guide -->/g, '<!-- SECTION K: Ratio Interpretation Guide -->');
html = html.replace(/<!-- SECTION P: Analyst Concerns & Answers -->/g, '<!-- SECTION L: Analyst Concerns & Answers -->');
html = html.replace(/<!-- SECTION M & N: Investor Perception & Signals -->/g, '<!-- SECTION M & N: Investor Perception & Signals -->');
html = html.replace(/<!-- SECTION P: Investor Perception Analysis -->/g, '<!-- SECTION M: Investor Perception Analysis -->');
html = html.replace(/<!-- SECTION P: Reporting Signals Decoder -->/g, '<!-- SECTION N: Reporting Signals Decoder -->');
html = html.replace(/<!-- SECTION P: Premium Intelligence Narrative -->/g, '<!-- SECTION O: Premium Intelligence Narrative -->');
html = html.replace(/<!-- SECTION P: Red Flags vs Green Flags Matrix -->/g, '<!-- SECTION P: Red Flags vs Green Flags Matrix -->');

fs.writeFileSync('revenue.html', html);
console.log("Updated revenue comments.");
