const fs = require('fs');
let html = fs.readFileSync('cashflows.html', 'utf8');

// Section I Action replaces
html = html.replace(
  'Analyze sustainability of working capital changes',
  'Analyze sustainability of working capital changes <span class="text-indigo-600 font-bold block mt-1" id="cf-i-1"></span>'
);
html = html.replace(
  'Stress-test revenue recognition policies and receivable collection',
  'Stress-test revenue recognition policies <span class="text-indigo-600 font-bold block mt-1" id="cf-i-2"></span>'
);
html = html.replace(
  'Reclassify consistently using cash flow from operations before interest and taxes',
  'Reclassify consistently <span class="text-indigo-600 font-bold block mt-1" id="cf-i-3"></span>'
);
html = html.replace(
  'Normalize by reclassifying dividends to financing for comparability',
  'Normalize by reclassifying dividends <span class="text-indigo-600 font-bold block mt-1" id="cf-i-4"></span>'
);
html = html.replace(
  'Recalculate net debt excluding overdraft from cash for leverage analysis',
  'Recalculate net debt excluding overdraft <span class="text-indigo-600 font-bold block mt-1" id="cf-i-5"></span>'
);

// Section L Analyst concerns
html = html.replace(
  'Normalizing CFO across peers under differing frameworks',
  'Normalizing CFO across peers under differing frameworks <span class="text-indigo-600 font-bold block mt-1" id="cf-l-1"></span>'
);
html = html.replace(
  'Identifying true free cash flow (FCF) available to equity',
  'Identifying true free cash flow (FCF) <span class="text-indigo-600 font-bold block mt-1" id="cf-l-2"></span>'
);
html = html.replace(
  'Assessing liquidity uniformly',
  'Assessing liquidity uniformly <span class="text-indigo-600 font-bold block mt-1" id="cf-l-3"></span>'
);


fs.writeFileSync('cashflows.html', html);
console.log('Spans added to Section I and L.');
