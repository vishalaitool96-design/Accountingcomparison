const fs = require('fs');

const standardTemplate = (levels) => `<!-- SECTION Q: Final Intelligence Summary -->
      <section
        id="section-q"
        class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col"
      >
        <div
          class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200"
        >
          SECTION Q: Final Intelligence Summary
        </div>
        <div class="p-6 bg-white">
          <p class="font-bold text-lg text-slate-800 pb-3 border-b border-slate-100 mb-4">
            The Sophistication Hierarchy
          </p>
          <ul class="space-y-4 text-sm text-slate-700">
${levels}
          </ul>
        </div>
      </section>`;

const level = (num, title, text, actionText, actionType) => {
   let actCls = actionType === 'red' ? 'text-red-600' : (actionType === 'amber' ? 'text-amber-600' : 'text-green-600');
   return `            <li class="flex flex-col sm:flex-row sm:items-start gap-2">
              <span class="font-bold whitespace-nowrap">Level ${num} (${title}):</span>
              <span>
                &quot;${text}&quot; &rarr; 
                <span class="${actCls} font-bold">${actionText}</span>
              </span>
            </li>`;
};

// We will inject this before </main> or before footer
const processFile = (filename, rowsText) => {
  if(!fs.existsSync(filename)) return;
  let html = fs.readFileSync(filename, 'utf8');
  let qIdx = html.indexOf('<!-- SECTION Q');
  
  if(qIdx !== -1) {
    // replace existing
    let endSec = html.indexOf('</section>', qIdx);
    if(endSec !== -1) {
      endSec += 10;
      let newSec = standardTemplate(rowsText);
      html = html.slice(0, qIdx) + newSec + html.slice(endSec);
    }
  } else {
    // append before the end
    // First try finding <div class="mt-4 text-center pb-4
    let target = '<div class="mt-4 text-center pb-4 shrink-0';
    let targetIdx = html.indexOf(target);
    if(targetIdx === -1) {
       targetIdx = html.indexOf('</main>');
    }
    
    if(targetIdx !== -1) {
      let spacing = html.slice(targetIdx - 6, targetIdx).includes('      ') ? '' : '      ';
      html = html.slice(0, targetIdx) + spacing + standardTemplate(rowsText) + '\n\n      ' + html.slice(targetIdx);
    }
  }
  fs.writeFileSync(filename, html);
  console.log("Updated", filename);
};

processFile('cashflows.html', 
  level(1, 'Retail', "Company A's operating cash flow is higher than Company B's, so Company A is better.", "Wrong action (non-comparable CFO)", "red") + '\n' +
  level(2, 'Basic', "Different accounting standards classify cash flows differently. I'll compare companies only within the same standard.", "Misses cross-border opportunities", "amber") + '\n' +
  level(3, 'YOU', "Cash flow classification differences across standards are presentation choices, not economic differences. Re-classify interest and dividends to match US GAAP strictness to reveal true peer comparability.", "Finds hidden leverage disguised as operational efficiency", "green")
);

processFile('consolidation.html', 
  level(1, 'Retail', "Revenue up 60%, debt up 260% = risky growth!", "Panic sells", "red") + '\n' +
  level(2, 'Basic', "It's just consolidation accounting, ignore the gross numbers and look at EPS.", "Misses the true economic scale and leverage risk.", "amber") + '\n' +
  level(3, 'YOU', "Focus purely on 'Profit Attributable to Parent' for earnings, but use the grossed-up balance sheet to identify severe hidden leverage in subsidiaries that could cause group-wide covenants to trip. Exploiting the P/E optical contraction is where the alpha lies.", "Exploits optical mispricing", "green")
);

processFile('deferred-tax.html', 
  level(1, 'Retail', "Deferred tax asset increased, so future tax savings will boost profit.", "Wrong action. (DTA may never realise.)", "red") + '\n' +
  level(2, 'Basic', "Effective tax rate is low, so earnings quality is good.", "Misses normalization. (Low ETR may be from aggressive DTA recognition.)", "amber") + '\n' +
  level(3, 'YOU', "Deferred tax is management's educated guess on future profitability. Ignore the non-cash P&L tax credit; look straight to the valuation allowance. Base valuation purely on expected cash taxes paid.", "Forecasts effectively without DTA distortions", "green")
);

processFile('esop.html', 
  level(1, 'Retail', "ESOP is non-cash, so I can just add it back to EBITDA and ignore it.", "Wrong action. You will overpay for a dilutive business.", "red") + '\n' +
  level(2, 'Basic', "I'll track the diluted EPS, but still use Adjusted EBITDA for my multiples.", "Still over-values the enterprise by ignoring the real economic cost of compensation.", "amber") + '\n' +
  level(3, 'YOU', "ESOPs transfer wealth from equity holders to employees. Recognize recurring grants as a true operating cost and deduct them from Free Cash Flow. Demand transparent performance-linked vesting rather than time-based giveaways.", "Accurately values economic reality", "green")
);

processFile('financial-instruments.html', 
  level(1, 'Retail', "Profit dropped natively, so the company did worse.", "Wrong action (misunderstands mark-to-market).", "red") + '\n' +
  level(2, 'Basic', "Accounting changed for financial instruments, so I'll wait for more periods.", "Misses the normalization opportunity.", "amber") + '\n' +
  level(3, 'YOU', "The economics of derivatives, credit losses, and debt were always there, but AS hid them. Normalize earnings by removing market-driven derivative mark-to-market swings to value the core operating engine.", "Finds true core operating engine", "green")
);

processFile('impairment.html', 
  level(1, 'Retail', "Impairment is bad; company lost money.", "Wrong action: sell at the bottom.", "red") + '\n' +
  level(2, 'Basic', "Impairment is non-cash and one-time; ignore it.", "Misses the signal of poor past capital allocation.", "amber") + '\n' +
  level(3, 'YOU', "Impairment reveals management's capital allocation quality. Normalize by extracting the non-cash charge to find the true core earnings run-rate. Then, apply a permanent 'management discount' multiple for repeatedly destroying shareholder capital.", "Prices management's capital allocation accurately", "green")
);

processFile('lease.html', 
  level(1, 'Retail', "EBITDA jumped 30%. Company is getting highly profitable!", "Wrong action. Fooled by rent geography shift.", "red") + '\n' +
  level(2, 'Basic', "Debt has spiked due to leases. They are over-leveraged.", "Fails to distinguish operational facility financing from true financial risk.", "amber") + '\n' +
  level(3, 'YOU', "Strip out formatting changes. For valuation, deduct cash rent paid from EBITDA to find true operating leverage. For risk, separate financial debt from Right-of-Use lease liability to assess true bankruptcy probability.", "Extracts true operating leverage", "green")
);

processFile('ppe.html', 
  level(1, 'Retail', "PPE exploded and depreciation shot up. Returns on assets are plunging.", "Wrong action. Misses componentization details.", "red") + '\n' +
  level(2, 'Basic', "Management changed depreciation policies, earnings are artificially depressed.", "Misses that underlying economics haven't changed.", "amber") + '\n' +
  level(3, 'YOU', "Focus entirely on actual cash capital expenditure lifecycle. Componentization forces realistic depreciation that lowers early-year P&L, but cash generation is identical. Anchor valuation on sustainable cash flow.", "Finds true sustainable cash flow", "green")
);

processFile('revenue.html', 
  level(1, 'Retail', "Topline growth is massive! Buy the breakout.", "Wrong action (misses unbilled or front-loaded recognition).", "red") + '\n' +
  level(2, 'Basic', "Revenue is volatile, I will wait 3 years to see the trend.", "Misses the opportunity to forecast cash accurately today.", "amber") + '\n' +
  level(3, 'YOU', "Ignore the timing optics. Rebuild the contract-level cash inflows. Target high contract liabilities (deferred revenue) as the ultimate predictor of cash flow safety, and discount massive unbilled revenue accumulations.", "Anchors on pure cash generation safely", "green")
);
