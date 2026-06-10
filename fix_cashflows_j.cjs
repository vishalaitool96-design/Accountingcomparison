const fs = require('fs');
let html = fs.readFileSync('cashflows.html', 'utf8');

// Section J Example replaces
html = html.replace(
  'IFRS peer with interest in operating - normalize',
  'IFRS peer with interest in operating - normalize <span class="text-indigo-600 font-bold ml-1" id="cf-j-1"></span>'
);
html = html.replace(
  'Ignore classification; economic FCF identical',
  'Ignore classification; economic FCF identical <span class="text-indigo-600 font-bold ml-1" id="cf-j-2"></span>'
);
html = html.replace(
  'higher cash balance due to overdraft inclusion',
  'higher cash balance due to overdraft <span class="text-indigo-600 font-bold ml-1" id="cf-j-3"></span>'
);
html = html.replace(
  'lower due to cash overdraft netting',
  'lower due to cash overdraft netting <span class="text-indigo-600 font-bold ml-1" id="cf-j-4"></span>'
);
html = html.replace(
  'shows 2x coverage vs operating classification - same economics',
  'shows differing coverage <span class="text-indigo-600 font-bold ml-1" id="cf-j-5"></span> - same economics'
);

// Section K Reported Value replaces
html = html.replace(
  'Higher under US GAAP; varies under IFRS/Ind AS',
  'Higher under US GAAP; varies under IFRS/Ind AS <br><span class="text-indigo-600 font-bold" id="cf-k-1"></span>'
);
html = html.replace(
  '>1.0 generally good; but distorted by classification differences',
  '>1.0 generally good; distorted by classification <br><span class="text-indigo-600 font-bold" id="cf-k-2"></span>'
);
html = html.replace(
  'Appears different due to CFO classification differences',
  'Appears different due to classification <br><span class="text-indigo-600 font-bold" id="cf-k-3"></span>'
);
html = html.replace(
  'Distorted if interest/dividends classified financing',
  'Distorted if interest/dividends classified financing <br><span class="text-indigo-600 font-bold" id="cf-k-4"></span>'
);
html = html.replace(
  'Varying CFO classification shifts the ratio',
  'Varying CFO classification shifts the ratio <br><span class="text-indigo-600 font-bold" id="cf-k-5"></span>'
);
html = html.replace(
  'Only includes operating cash; misses true cash generation if distorted',
  'Only includes operating cash; misses true cash <br><span class="text-indigo-600 font-bold" id="cf-k-6"></span>'
);

fs.writeFileSync('cashflows.html', html);
console.log('Spans added to Section J and K.');
