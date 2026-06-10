const fs = require('fs');
let html = fs.readFileSync('cashflows.html', 'utf8');

const regexReplace = (pattern, replacement) => {
    html = html.replace(new RegExp(pattern, 'g'), replacement);
};

// Section J specific
regexReplace('shows 2x coverage vs\\s*operating classification - same economics', 'shows differing coverage <span class="text-indigo-600 font-bold ml-1" id="cf-j-5"></span> - same economics');

// Section K specific
regexReplace('>1.0 generally good; but distorted by classification\\s*differences', '>1.0 generally good; distorted by classification <br><span class="text-indigo-600 font-bold" id="cf-k-2"></span>');
regexReplace('Distorted if interest/dividends classified\\s*financing', 'Distorted if interest/dividends classified financing <br><span class="text-indigo-600 font-bold" id="cf-k-4"></span>');
regexReplace('Varying CFO classification shifts\\s*the ratio', 'Varying CFO classification shifts the ratio <br><span class="text-indigo-600 font-bold" id="cf-k-5"></span>');
regexReplace('Only includes operating cash; misses true cash\\s*generation if distorted', 'Only includes operating cash; misses true cash <br><span class="text-indigo-600 font-bold" id="cf-k-6"></span>');

// Section I specific
regexReplace('Stress-test revenue recognition policies and receivable\\s*collection', 'Stress-test revenue recognition policies <span class="text-indigo-600 font-bold block mt-1" id="cf-i-2"></span>');
regexReplace('Reclassify consistently using cash flow from operations before\\s*interest and taxes', 'Reclassify consistently <span class="text-indigo-600 font-bold block mt-1" id="cf-i-3"></span>');
regexReplace('Normalize by reclassifying dividends to financing for\\s*comparability', 'Normalize by reclassifying dividends <span class="text-indigo-600 font-bold block mt-1" id="cf-i-4"></span>');
regexReplace('Recalculate net debt excluding overdraft from cash for\\s*leverage analysis', 'Recalculate net debt excluding overdraft <span class="text-indigo-600 font-bold block mt-1" id="cf-i-5"></span>');

// Section L specific
regexReplace('Normalizing CFO across peers under differing\\s*frameworks', 'Normalizing CFO across peers under differing frameworks <span class="text-indigo-600 font-bold block mt-1" id="cf-l-1"></span>');
regexReplace('Identifying true free cash flow \\(FCF\\) available to\\s*equity', 'Identifying true free cash flow (FCF) <span class="text-indigo-600 font-bold block mt-1" id="cf-l-2"></span>');
regexReplace('Assessing liquidity\\s*uniformly', 'Assessing liquidity uniformly <span class="text-indigo-600 font-bold block mt-1" id="cf-l-3"></span>');

fs.writeFileSync('cashflows.html', html);
