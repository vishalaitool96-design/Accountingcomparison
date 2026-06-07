const fs = require('fs');

const standardTemplate = (question, average, premium, sectionId = 'section-o') => `<!-- SECTION O: Premium Intelligence Narrative -->
      <section
        id="${sectionId}"
        class="shrink-0 mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col"
      >
        <div
          class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200"
        >
          SECTION O: Premium Intelligence Narrative
        </div>
        <div class="p-5 text-sm space-y-4 text-slate-700 leading-relaxed">
          <p>
            <span class="font-bold text-[#1a365d]">Question:</span> ${question}
          </p>
          <p>
            <span class="font-bold text-slate-500">Average Analyst Answer:</span> ${average}
          </p>
          <div class="p-4 bg-teal-50 border border-teal-200 rounded-lg text-teal-900">
            <p>
              <span class="font-bold text-teal-800 text-base">PREMIUM Analyst Answer:</span><br/><br/>
              ${premium}
            </p>
          </div>
        </div>
      </section>`;

// Replace logic for cashflows.html
let html = fs.readFileSync('cashflows.html', 'utf8');

// Cashflows
let oStart = html.indexOf('<!-- SECTION O -->');
if (oStart !== -1) {
  let oEnd = html.indexOf('</section>', oStart) + 10;
  let qStart = html.indexOf('"Two', oStart);
  let qEnd = html.indexOf('correct?"', qStart) + 9;
  
  let aStart = html.indexOf('"Check', oStart);
  let aEnd = html.indexOf('classification."', aStart) + 17;
  
  let pStart = html.indexOf('The difference', oStart);
  let pEnd = html.indexOf('decisions.', pStart) + 10;
  
  if (qStart !== -1 && aStart !== -1 && pStart !== -1) {
      let qText = html.slice(qStart, qEnd);
      let aText = html.slice(aStart, aEnd);
      let pText = html.slice(pStart, pEnd);
      
      let newSection = standardTemplate(qText, aText, pText);
      html = html.slice(0, oStart) + newSection + html.slice(oEnd);
      fs.writeFileSync('cashflows.html', html);
      console.log('updated cashflows.html');
  }
}

// Consolidation
html = fs.readFileSync('consolidation.html', 'utf8');
oStart = html.indexOf('<!-- SECTION O -->');
if (oStart !== -1) {
  let oEnd = html.indexOf('</section>', oStart) + 10;
  
  let qText = `"ABC Ltd's revenue jumped 60%, debt spiked 260%, but EPS barely moved (+3.8%) after Ind AS 110 adoption. What's happening?"`;
  let aText = `"It's just consolidation accounting effects."`;
  let pText = `This is the unveiling of economic reality and it's a POSITIVE development.
              
              1. Revenue reflects the true scale of operations controlled by the parent.
              2. Margins dip optically because the subsidiary's lower margin averages in, but actual profit rupees generated remain identical.
              3. Debt spikes as non-recourse project debt enters the balance sheet, scaring retail investors.
              4. EPS is largely protected due to NCI deduction.
              
              Value investors should exploit the optical deterioration in return ratios caused by grossing-up the balance sheet to pick up shares on the cheap. Focus on 'Profit Attributable to Parent', ignore consolidated 'Net Margin', and strip out non-recourse subsidiary debt for corporate-level risk analysis.`;
  pText = pText.replace(/\\n/g, '<br/>');
  
  let newSection = standardTemplate(qText, aText, pText);
  html = html.slice(0, oStart) + newSection + html.slice(oEnd);
  fs.writeFileSync('consolidation.html', html);
  console.log('updated consolidation.html');
}

// Deferred tax
html = fs.readFileSync('deferred-tax.html', 'utf8');
oStart = html.indexOf('<!-- SECTION O -->');
if (oStart !== -1) {
  let oEnd = html.indexOf('</section>', oStart) + 10;
  let qText = `"Why can two identical companies have the same pre-tax income but different net income and ETR under the same standard?"`;
  let aText = `"Because one has more deferred tax assets."`;
  let pText = `"The difference arises from management judgement on DTA recognition and valuation allowances. Under Ind AS/IFRS, DTA is recognised only if "probable" future profit exists; under US GAAP, a "more likely than not" threshold applies. Two identical loss-making companies can report different net income if one management believes recovery is probable and the other does not. The same applies to uncertain tax positions – IFRS uses expected value, US GAAP uses a binary "more likely than not" then measurement at the largest benefit >50% likely. The correct move is to ignore reported deferred tax adjustments for valuation purposes and instead forecast cash tax paid. For peer comps, compare cash effective tax rates, not book ETRs. The key signal is not the DTA amount, but changes in the valuation allowance – it tells you precisely what management secretly thinks about future core earnings."`;
  
  let newSection = standardTemplate(qText, aText, pText);
  html = html.slice(0, oStart) + newSection + html.slice(oEnd);
  fs.writeFileSync('deferred-tax.html', html);
  console.log('updated deferred-tax.html');
}

// esop
html = fs.readFileSync('esop.html', 'utf8');
oStart = html.indexOf('<!-- SECTION O & P -->');
if (oStart !== -1) {
  let oEnd = html.indexOf('</section>', oStart) + 10;
  let qText = `"Why does the income statement show a massive ESOP expense, but cash flow isn't impacted? Is this a real cost?"`;
  let aText = `"It's just a non-cash accounting adjustment. Focus on cash flow and ignore it."`;
  let pText = `"It IS a real cost—it's dilution. Under Ind AS / IFRS, ESOPs are expensed at fair value because you are effectively paying employees with equity instead of cash. The old AS intrinsic value method allowed companies to issue options at market price and report zero expense, artificially inflating profits. The 'expense' hitting the P&L now reflects the true economic transfer of wealth from shareholders to employees. However, it's non-cash, which is why it gets added back in CFO. 
  
  To analyze properly: 
  1) Track the dilution (share count increase).
  2) Treat regular, recurring ESOP grants as a real operating cost when calculating normalized free cash flow.
  3) Don't blindly add it back to EBITDA for valuation multiples, or you are overvaluing the company."`;
  
  let newSection = standardTemplate(qText, aText, pText);
  html = html.slice(0, oStart) + newSection + html.slice(oEnd);
  fs.writeFileSync('esop.html', html);
  console.log('updated esop.html');
}

// financial-instruments.html
html = fs.readFileSync('financial-instruments.html', 'utf8');
oStart = html.indexOf('<!-- SECTION O -->');
if (oStart !== -1) {
  let oEnd = html.indexOf('</section>', oStart) + 10;
  let qText = `"Why does the new standard show lower profit and higher liabilities even though the company's cash flows haven't changed?"`;
  let aText = `"Because derivatives and credit losses are now recognised on the balance sheet and in profit."`;
  let pText = `"The shift from AS to Ind AS/IFRS/US GAAP for financial instruments is a move from hidden risks to visible economics. Under AS, the interest rate swap was off-balance-sheet, and credit losses were recognised only when incurred - this artificially inflated profit and understated leverage. Under the new standards, the 2 Cr derivative loss and 1 Cr expected credit loss are recognised immediately, reducing PAT by 3 Cr (pre-tax) but also revealing the true cost of risk management and counterparty exposure. For valuation, you should normalise by separating market-driven derivative changes (which may reverse) from structural credit losses. The key insight is not that profit fell, but that the balance sheet now reflects reality."`;
  
  let newSection = standardTemplate(qText, aText, pText);
  html = html.slice(0, oStart) + newSection + html.slice(oEnd);
  fs.writeFileSync('financial-instruments.html', html);
  console.log('updated financial-instruments.html');
}

// impairment.html
html = fs.readFileSync('impairment.html', 'utf8');
oStart = html.indexOf('<!-- SECTION O -->');
if (oStart !== -1) {
  let oEnd = html.indexOf('</section>', oStart) + 10;
  let qText = `"The company took a massive one-time impairment charge. Is this a buying opportunity since 'all the bad news is out'?"`;
  let aText = `"Yes, it's a non-cash charge. The balance sheet is cleaned up, so future earnings will be higher. Buy the dip."`;
  let pText = `"Impairment is essentially management formally admitting that their past capital allocation was a failure. While the charge itself is non-cash and future EPS will mechanically rise (due to lower depreciation), a large impairment often points to deeper issues: poor M&A decisions, flawed forecasting, or structural industry decline. Don't just write it off as 'one-time.' The key is to assess if the factors causing the impairment are truly contained or if they are symptomatic of ongoing weakness. A sophisticated analyst strips out the impairment to see the true core earnings run-rate, but heavily penalizes management's capital allocation track record."`;
  
  let newSection = standardTemplate(qText, aText, pText);
  html = html.slice(0, oStart) + newSection + html.slice(oEnd);
  fs.writeFileSync('impairment.html', html);
  console.log('updated impairment.html');
}

// ppe.html
html = fs.readFileSync('ppe.html', 'utf8');
oStart = html.indexOf('<!-- SECTION O: Premium');
if (oStart !== -1) {
  let oEnd = html.indexOf('</section>', oStart) + 10;
  let qText = `"ABC Ltd's reported PPE growth changed to 22.5% after moving from AS to Ind AS/IFRS-style PPE recognition. Is this a genuine structural re-rating story or an accounting mirage?"`;
  let aText = `"It's mainly due to the new standard; I will look at 2-3 years of numbers and decide later."`;
  let pText = `"The shift isn't just an accounting mirage; it alters the timing of earnings recognition. Componentization forces higher upfront depreciation, suppressing early-year Net Income but preventing earnings shocks later when major parts need replacement. The capitalization of major inspections smooths out maintenance expenses. The sophisticated move is to look past the depressed Year 1 earnings and recognize that cash flow remains unchanged. Instead of waiting 3 years, rebuild the normalized earnings model today, accounting for the component-level write-offs. Focus on the actual capital expenditure cash flows rather than the P&L depreciation charge."`;
  
  let newSection = standardTemplate(qText, aText, pText);
  html = html.slice(0, oStart) + newSection + html.slice(oEnd);
  fs.writeFileSync('ppe.html', html);
  console.log('updated ppe.html');
}

// revenue.html
html = fs.readFileSync('revenue.html', 'utf8');
oStart = html.indexOf('<!-- SECTION O: Premium');
if (oStart !== -1) {
  let oEnd = html.indexOf('</section>', oStart) + 10;
  let qText = `"ABC Company's reported revenue growth changed to 22.5% after moving from AS to Ind AS/IFRS-style revenue recognition. Is this a genuine structural re-rating story or an accounting mirage?"`;
  let aText = `"It's mainly due to the new standard; I will look at 2-3 years of numbers and decide later."`;
  let pText = `"You go step-by-step: rebuild contract-level cash flows, re-create AS 9 timing, reconcile to Ind AS/IFRS/US GAAP numbers, quantify the one-off uplift, and then anchor valuation on normalized multi-year earnings rather than Year-1 optics. Explicitly note that Ind AS, IFRS and US GAAP give the same profile for ABC Company's contracts - so there is no cross-standard risk premium - and focus purely on execution, backlog quality, and margin discipline."`;
  
  let newSection = standardTemplate(qText, aText, pText);
  html = html.slice(0, oStart) + newSection + html.slice(oEnd);
  fs.writeFileSync('revenue.html', html);
  console.log('updated revenue.html');
}

