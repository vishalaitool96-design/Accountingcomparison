const fs = require('fs');

const standardTemplate = (question, average, premium) => `<!-- SECTION O: Premium Intelligence Narrative -->
      <section
        id="section-o"
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

// Need to do this manually for each so we don't screw up extracting the text.

const leaseHtmlData = {
  question: `"ABC Ltd's reported EBITDA jumped noticeably and Debt spiked after moving to Ind AS 116 / IFRS 16 lease accounting. Is this a genuine operational improvement paired with risky leverage?"`,
  average: `"It's mainly due to the new lease standard adding assets and liabilities; we ignore it."`,
  premium: `This is a classic reporting illusion. Because operating rent expenses are pushed below the EBITDA line (replaced by depreciation and interest), operating margins look structurally higher. Simultaneously, the capitalization of future rent creates a phantom spike in debt, artificially depressing Return on Assets (ROA) and inflating Debt-to-Equity ratios.<br/><br/>The underlying cash generation hasn't changed. A sophisticated analyst strips out lease liabilities to assess true financial risk against covenants, and deducts actual cash rent paid from EBITDA to find the company's true sustainable operating leverage. Focusing purely on reported statutory figures will lead to paying the wrong multiple for a distorted margin profile.`
};

let leaseHtml = fs.readFileSync('lease.html', 'utf8');
if (!leaseHtml.includes('SECTION O: Premium Intelligence Narrative')) {
  // Insert after SECTION N
  const nIndex = leaseHtml.indexOf('SECTION N: Reporting Signals');
  if (nIndex !== -1) {
    const endSectionStr = '</section>';
    const nEnd = leaseHtml.indexOf(endSectionStr, nIndex);
    if (nEnd !== -1) {
       const insertPos = nEnd + endSectionStr.length;
       leaseHtml = leaseHtml.slice(0, insertPos) + '\n\n      ' + standardTemplate(leaseHtmlData.question, leaseHtmlData.average, leaseHtmlData.premium) + leaseHtml.slice(insertPos);
       fs.writeFileSync('lease.html', leaseHtml);
       console.log("Added Section O to lease.html");
    }
  }
}
