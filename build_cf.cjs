const fs = require('fs');

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cash Flows | Standards Hub</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      html { scroll-behavior: smooth; }
      body { font-family: 'Inter', system-ui, sans-serif; }
    </style>
  </head>
  <body class="bg-[#f7fafc] font-sans h-screen w-full flex flex-col overflow-hidden border-8 border-slate-200 text-slate-800">
    <header class="bg-[#1a365d] text-white p-4 shrink-0 shadow-md">
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-end">
        <div>
          <h1 class="text-2xl font-bold tracking-tight">Accounting Standards Comparison Hub</h1>
          <p class="text-slate-300 text-sm italic">AS (Old Indian GAAP) vs Ind AS vs IFRS vs US GAAP</p>
        </div>
      </div>
    </header>

    <nav class="bg-white border-b border-slate-200 flex shrink-0 overflow-x-auto">
      <a href="index.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">Home</a>
      <a href="lease.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">Lease</a>
      <a href="ppe.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">PPE</a>
      <a href="financial-instruments.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">Financial Instruments</a>
      <a href="revenue.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">Revenue</a>
      <a href="deferred-tax.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">Deferred Tax</a>
      <a href="consolidation.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">Consolidation</a>
      <a href="impairment.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">Impairment</a>
      <a href="esop.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">ESOP</a>
      <a href="cashflows.html" class="px-6 py-3 text-sm font-semibold border-b-4 border-blue-600 bg-blue-50 text-blue-900 block whitespace-nowrap">Cash Flows</a>
    </nav>

    <main class="flex-1 p-4 md:p-6 lg:p-8 flex flex-col gap-10 overflow-y-auto" id="main-content">
      <div class="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div class="border-l-8 border-teal-600 pl-4 py-1 shrink-0">
          <h2 class="text-2xl font-bold text-[#1a365d] uppercase tracking-wide">Statement of Cash Flows</h2>
          <p class="text-sm text-slate-600">Premium Analysis Guide: AS vs Ind AS vs IFRS vs US GAAP</p>
        </div>
      </div>

      <!-- SECTION A -->
      <section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION A: Core Technical Comparison Table
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Parameter</th>
                <th class="p-3 border-b border-slate-200">AS 3 (Old Indian GAAP)</th>
                <th class="p-3 border-b border-slate-200">Ind AS 7</th>
                <th class="p-3 border-b border-slate-200">IAS 7 (IFRS)</th>
                <th class="p-3 border-b border-slate-200">US GAAP (ASC 230)</th>
                <th class="p-3 border-b border-slate-200">Logic Shift</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Core objective</td>
                <td class="p-3">Provide information about historical changes in cash.</td>
                <td class="p-3">Provide information about historical changes in cash and cash equivalents.</td>
                <td class="p-3">Provide information about historical changes in cash and cash equivalents.</td>
                <td class="p-3">Provide information about cash receipts and cash payments.</td>
                <td class="p-3 bg-slate-50 text-slate-800">Consistent across all frameworks.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Applicability / Scope</td>
                <td class="p-3">Exemptions exist for SMCs and certain non-corporate entities.</td>
                <td class="p-3">Mandatory for all entities preparing financial statements under Ind AS.</td>
                <td class="p-3">Mandatory for all entities.</td>
                <td class="p-3">Mandatory for all entities.</td>
                <td class="p-3 bg-slate-50 text-slate-800">Universal application in modern frameworks.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Classification structure</td>
                <td class="p-3">Operating, Investing, Financing.</td>
                <td class="p-3">Operating, Investing, Financing.</td>
                <td class="p-3">Operating, Investing, Financing.</td>
                <td class="p-3">Operating, Investing, Financing.</td>
                <td class="p-3 bg-slate-50 text-slate-800">Consistent core structure across all frameworks.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Definition - Cash and cash equivalents</td>
                <td class="p-3">Short-term, highly liquid investments convertible to known cash.</td>
                <td class="p-3">Short-term, highly liquid investments readily convertible to known cash.</td>
                <td class="p-3">Short-term, highly liquid investments readily convertible to known cash.</td>
                <td class="p-3">Similar, but explicit rules on restricted cash.</td>
                <td class="p-3 bg-slate-50 text-slate-800">Generally aligned across standards.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Bank overdrafts treatment</td>
                <td class="p-3">Classified as financing liabilities. Not part of cash equivalents.</td>
                <td class="p-3">Included in cash equivalents if repayable on demand and form an integral part of cash management.</td>
                <td class="p-3">Included in cash equivalents if repayable on demand and form an integral part of cash management.</td>
                <td class="p-3">Excluded from cash equivalents. Treated as financing activities.</td>
                <td class="p-3 font-bold bg-amber-50 text-amber-800">Significant difference between IFRS/Ind AS and US GAAP/AS 3.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Restricted cash treatment</td>
                <td class="p-3">Not specifically addressed.</td>
                <td class="p-3">Judgment required; generally excluded from cash equivalents if restricted.</td>
                <td class="p-3">Judgment required; generally excluded from cash equivalents if restricted.</td>
                <td class="p-3">Must be included in the total cash balance shown in the cash flow statement; reconciled to balance sheet.</td>
                <td class="p-3 font-bold bg-amber-50 text-amber-800">US GAAP is prescriptive; IFRS/Ind AS require judgment.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Operating activities - Direct vs Indirect method</td>
                <td class="p-3">Direct and Indirect permitted.</td>
                <td class="p-3">Direct method explicitly encouraged, but Indirect permitted.</td>
                <td class="p-3">Direct method encouraged, Indirect permitted.</td>
                <td class="p-3">Direct method encouraged, Indirect permitted (if Direct used, reconciliation to net income required).</td>
                <td class="p-3 bg-slate-50 text-slate-800">Indirect method is the practical standard globally.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Operating activities - Starting point (Indirect method)</td>
                <td class="p-3">Net profit or loss.</td>
                <td class="p-3">Profit or loss (flexible).</td>
                <td class="p-3">Profit or loss (flexible).</td>
                <td class="p-3">Net income only.</td>
                <td class="p-3 bg-slate-50 text-slate-800">US GAAP is strict on using Net Income.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Interest paid classification</td>
                <td class="p-3">Financing activity (for non-financial enterprises).</td>
                <td class="p-3">Operating OR Financing activity (policy choice).</td>
                <td class="p-3">Operating OR Financing activity (policy choice).</td>
                <td class="p-3">Operating activity (no choice).</td>
                <td class="p-3 font-bold bg-amber-50 text-amber-800">Major comparability issue across standards and peers.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Interest received classification</td>
                <td class="p-3">Investing activity (for non-financial enterprises).</td>
                <td class="p-3">Operating OR Investing activity (policy choice).</td>
                <td class="p-3">Operating OR Investing activity (policy choice).</td>
                <td class="p-3">Operating activity (no choice).</td>
                <td class="p-3 font-bold bg-amber-50 text-amber-800">US GAAP includes all interest in operating.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Dividends paid classification</td>
                <td class="p-3">Financing activity.</td>
                <td class="p-3">Financing OR Operating activity (policy choice).</td>
                <td class="p-3">Financing OR Operating activity (policy choice).</td>
                <td class="p-3">Financing activity (no choice).</td>
                <td class="p-3 bg-slate-50 text-slate-800">IFRS/Ind AS flexibility allows variation.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Dividends received classification</td>
                <td class="p-3">Investing activity.</td>
                <td class="p-3">Operating OR Investing activity (policy choice).</td>
                <td class="p-3">Operating OR Investing activity (policy choice).</td>
                <td class="p-3">Operating activity (no choice).</td>
                <td class="p-3 font-bold bg-amber-50 text-amber-800">US GAAP treats as operating return on investment.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Taxes paid classification</td>
                <td class="p-3">Operating activity; separate disclosure.</td>
                <td class="p-3">Operating activity unless specifically identifiable with investing/financing.</td>
                <td class="p-3">Operating activity unless specifically identifiable with investing/financing.</td>
                <td class="p-3">Operating activity (no allocation permitted).</td>
                <td class="p-3 bg-slate-50 text-slate-800">US GAAP bans allocation to investing/financing.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Extraordinary items classification</td>
                <td class="p-3">Classified according to nature and separately disclosed.</td>
                <td class="p-3">Prohibited.</td>
                <td class="p-3">Prohibited.</td>
                <td class="p-3">Prohibited.</td>
                <td class="p-3 bg-red-50 text-red-800">Elimination of extraordinary items globally.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Lease payments classification (Lessee)</td>
                <td class="p-3">Not specifically addressed (finance leases = financing).</td>
                <td class="p-3">Principal = Financing; Interest = Operating/Financing.</td>
                <td class="p-3">Principal = Financing; Interest = Operating/Financing.</td>
                <td class="p-3">Operating lease = Operating activity; Finance lease = Financing (principal) &amp; Operating (interest).</td>
                <td class="p-3 font-bold bg-amber-50 text-amber-800">US GAAP operating leases remain in operating cash flows.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Foreign currency cash flows</td>
                <td class="p-3">Recorded at exchange rate on transaction date.</td>
                <td class="p-3">Recorded at exchange rate on transaction date; unrealized gains/losses separately presented.</td>
                <td class="p-3">Recorded at exchange rate on transaction date; unrealized gains/losses separately presented.</td>
                <td class="p-3">Similar to Ind AS/IFRS.</td>
                <td class="p-3 bg-slate-50 text-slate-800">Consistent approach.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Non-cash transactions</td>
                <td class="p-3">Excluded.</td>
                <td class="p-3">Excluded; disclosed elsewhere.</td>
                <td class="p-3">Excluded; disclosed elsewhere.</td>
                <td class="p-3">Excluded; disclosed elsewhere.</td>
                <td class="p-3 bg-slate-50 text-slate-800">Consistent principle.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Changes in ownership interests in subsidiaries (no loss of control)</td>
                <td class="p-3">Not specifically addressed.</td>
                <td class="p-3">Financing activity.</td>
                <td class="p-3">Financing activity.</td>
                <td class="p-3">Financing activity.</td>
                <td class="p-3 bg-slate-50 text-slate-800">Aligned. Transactions with owners in capacity as owners.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Acquisition/loss of subsidiaries</td>
                <td class="p-3">Investing activity (net of cash acquired/disposed).</td>
                <td class="p-3">Investing activity (net of cash acquired/disposed).</td>
                <td class="p-3">Investing activity (net of cash acquired/disposed).</td>
                <td class="p-3">Investing activity (net of cash acquired/disposed).</td>
                <td class="p-3 bg-slate-50 text-slate-800">Consistent logic.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Investments in associates/joint ventures (equity method)</td>
                <td class="p-3">Not specifically addressed.</td>
                <td class="p-3">Include only cash flows between investor and investee (e.g., dividends).</td>
                <td class="p-3">Include only cash flows between investor and investee (e.g., dividends).</td>
                <td class="p-3">Include only cash flows between investor and investee (e.g., dividends).</td>
                <td class="p-3 bg-slate-50 text-slate-800">Consistent focus on actual cash movements.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Deferred/contingent consideration in business combinations</td>
                <td class="p-3">Not specifically addressed.</td>
                <td class="p-3">Generally Investing (if related to original transaction/liability).</td>
                <td class="p-3">Generally Investing (if related to original transaction/liability).</td>
                <td class="p-3">Operating (if soon after acquisition - &lt;= 3 months) or Financing (later).</td>
                <td class="p-3 font-bold bg-amber-50 text-amber-800">US GAAP is prescriptive and different.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Disclosure of changes in financing liabilities</td>
                <td class="p-3">Not explicitly required.</td>
                <td class="p-3">Explicitly required (roll-forward of debt/lease liabilities, separating cash and non-cash changes).</td>
                <td class="p-3">Explicitly required.</td>
                <td class="p-3">Not explicitly required as a single roll-forward, but expected via other disclosures.</td>
                <td class="p-3 bg-red-50 text-red-800">IFRS/Ind AS requirement adds significant transparency.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Overall disclosure volume</td>
                <td class="p-3">Low to moderate.</td>
                <td class="p-3">High.</td>
                <td class="p-3">High.</td>
                <td class="p-3">High.</td>
                <td class="p-3 bg-slate-50 text-slate-800">Modern frameworks demand more data.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Derivative cash flows - hedging relationships</td>
                <td class="p-3">Not specifically addressed.</td>
                <td class="p-3">Classified in same category as the cash flows of the hedged item.</td>
                <td class="p-3">Classified in same category as the cash flows of the hedged item.</td>
                <td class="p-3">Generally same as Ind AS/IFRS, but some complex exceptions.</td>
                <td class="p-3 bg-slate-50 text-slate-800">Consistent matching principle.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="px-4 py-3 bg-blue-50 border-t border-slate-200">
          <p class="text-sm text-blue-900"><strong class="font-bold">KEY INSIGHT:</strong> The Cash Flow Statement itself does not impact P&amp;L - it is a presentation statement. However, classification differences across standards significantly affect financial ratios and performance metrics derived from cash flow information. Total cash generated from operations is economically identical across all standards - only classification and presentation differ.</p>
        </div>
      </section>

      <!-- SECTION B -->
      <section class="shrink-0 bg-yellow-50 rounded-xl shadow-sm border border-yellow-200 overflow-hidden flex flex-col">
        <div class="bg-yellow-100 text-yellow-900 px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-yellow-200 flex justify-between items-center">
          <span>SECTION B: Transaction Fact Pattern (Editable)</span>
          <button id="reset-btn" class="bg-yellow-600 text-white px-3 py-1 rounded text-xs font-semibold hover:bg-yellow-700 transition">Reset to Default</button>
        </div>
        <div class="p-4 flex flex-col md:flex-row gap-6">
          <div class="flex-1 space-y-4">
            <h3 class="font-bold text-slate-800 border-b border-yellow-200 pb-2">Business Profile (Read-only)</h3>
            <div class="space-y-2 text-sm text-slate-700">
              <p><strong class="font-semibold w-32 inline-block">Company:</strong> Apex Technologies Ltd.</p>
              <p><strong class="font-semibold w-32 inline-block">Period:</strong> Year ended 31 March 2026</p>
            </div>
            
            <h3 class="font-bold text-slate-800 border-b border-yellow-200 pb-2 mt-6">Ind AS / IAS 7 Policy Elections</h3>
            <div class="space-y-4 text-sm bg-white p-3 rounded border border-yellow-200 shadow-sm">
              <div class="flex items-center justify-between">
                <label class="font-semibold text-slate-700">Interest Paid &amp; Received</label>
                <select id="sel-interest" class="p-1 border border-slate-300 rounded focus:ring-yellow-400">
                  <option value="Op_Op">Paid: Operating / Recv: Operating</option>
                  <option value="Op_Inv">Paid: Operating / Recv: Investing</option>
                  <option value="Fin_Op">Paid: Financing / Recv: Operating</option>
                  <option value="Fin_Inv" selected>Paid: Financing / Recv: Investing</option>
                </select>
              </div>
              <div class="flex items-center justify-between">
                <label class="font-semibold text-slate-700">Dividends Paid &amp; Received</label>
                <select id="sel-dividend" class="p-1 border border-slate-300 rounded focus:ring-yellow-400">
                  <option value="Fin_Inv" selected>Paid: Financing / Recv: Investing</option>
                  <option value="Fin_Op">Paid: Financing / Recv: Operating</option>
                  <option value="Op_Inv">Paid: Operating / Recv: Investing</option>
                  <option value="Op_Op">Paid: Operating / Recv: Operating</option>
                </select>
              </div>
            </div>
          </div>
          
          <div class="flex-[2] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <!-- Inputs -->
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Net Profit before tax (Cr)</label>
              <input type="number" id="inp-pbt" value="100.00" step="0.01" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Depreciation (Cr)</label>
              <input type="number" id="inp-dep" value="20.00" step="0.01" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Profit on machinery sale (Cr)</label>
              <input type="number" id="inp-prof-sale" value="5.00" step="0.01" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Increase in trade rec. (Cr)</label>
              <input type="number" id="inp-inc-rec" value="15.00" step="0.01" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Decrease in inventory (Cr)</label>
              <input type="number" id="inp-dec-inv" value="8.00" step="0.01" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Increase in payables (Cr)</label>
              <input type="number" id="inp-inc-pay" value="10.00" step="0.01" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Interest expense (Cr)</label>
              <input type="number" id="inp-int-exp" value="12.00" step="0.01" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Interest received (Cr)</label>
              <input type="number" id="inp-int-rec" value="4.00" step="0.01" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Dividend paid (Cr)</label>
              <input type="number" id="inp-div-paid" value="6.00" step="0.01" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Tax paid (Cr)</label>
              <input type="number" id="inp-tax-paid" value="25.00" step="0.01" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Purchase of machinery (Cr)</label>
              <input type="number" id="inp-purch" value="50.00" step="0.01" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Sale proceeds machinery (Cr)</label>
              <input type="number" id="inp-sale" value="15.00" step="0.01" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Proceeds issue shares (Cr)</label>
              <input type="number" id="inp-issue" value="40.00" step="0.01" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Repayment of LT loan (Cr)</label>
              <input type="number" id="inp-repay" value="20.00" step="0.01" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Opening cash (Cr)</label>
              <input type="number" id="inp-open-cash" value="30.00" step="0.01" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Bank overdraft (Cr)</label>
              <input type="number" id="inp-od" value="5.00" step="0.01" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-600">Tax rate (%)</label>
              <input type="number" id="inp-tax-rate" value="25" step="1" class="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-sm font-mono">
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION C -->
      <section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION C: Side-by-Side Treatment
        </div>
        <div class="p-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div class="border border-slate-200 rounded p-4 bg-slate-50 flex flex-col h-full">
            <h3 class="font-bold text-slate-800 border-b border-slate-200 pb-2 mb-3">AS 3 (Old Indian GAAP)</h3>
            <ul class="text-sm text-slate-700 space-y-2 flex-grow">
              <li><strong class="text-slate-900">Interest paid:</strong> Financing activity (non-financial enterprise)</li>
              <li><strong class="text-slate-900">Interest received:</strong> Investing activity (non-financial enterprise)</li>
              <li><strong class="text-slate-900">Dividends paid:</strong> Financing activity</li>
              <li><strong class="text-slate-900">Dividends received:</strong> Investing activity</li>
              <li><strong class="text-slate-900">Taxes paid:</strong> Operating activity (separate disclosure)</li>
              <li><strong class="text-slate-900">Extraordinary items:</strong> Required separate classification</li>
              <li><strong class="text-slate-900">Bank overdraft:</strong> Not included in cash equivalents</li>
              <li><strong class="text-slate-900">Indirect method starting point:</strong> Net profit/loss</li>
            </ul>
          </div>
          <div class="border border-slate-200 rounded p-4 bg-slate-50 flex flex-col h-full">
            <h3 class="font-bold text-slate-800 border-b border-slate-200 pb-2 mb-3">Ind AS 7 Treatment</h3>
            <ul class="text-sm text-slate-700 space-y-2 flex-grow">
              <li><strong class="text-slate-900">Interest paid:</strong> Operating OR Financing (policy choice)</li>
              <li><strong class="text-slate-900">Interest received:</strong> Operating OR Investing (policy choice)</li>
              <li><strong class="text-slate-900">Dividends paid:</strong> Financing OR Operating (policy choice)</li>
              <li><strong class="text-slate-900">Dividends received:</strong> Operating OR Investing (policy choice)</li>
              <li><strong class="text-slate-900">Taxes paid:</strong> Operating unless specifically identifiable with investing/financing</li>
              <li><strong class="text-slate-900">Extraordinary items:</strong> Not applicable (prohibited)</li>
              <li><strong class="text-slate-900">Bank overdraft:</strong> Included if criteria met</li>
              <li><strong class="text-slate-900">Changes in financing liabilities:</strong> Required disclosure</li>
            </ul>
          </div>
          <div class="border border-slate-200 rounded p-4 bg-slate-50 flex flex-col h-full">
            <h3 class="font-bold text-slate-800 border-b border-slate-200 pb-2 mb-3">IAS 7 (IFRS) Treatment</h3>
            <ul class="text-sm text-slate-700 space-y-2 flex-grow">
              <li>Same as Ind AS 7 (fully converged)</li>
              <li>Provides choices for interest and dividends classification.</li>
              <li>Bank overdrafts integral to cash management included in cash equivalents.</li>
              <li>Extraordinary items prohibited.</li>
            </ul>
          </div>
          <div class="border border-slate-200 rounded p-4 bg-slate-50 flex flex-col h-full relative">
            <h3 class="font-bold text-slate-800 border-b border-slate-200 pb-2 mb-3">US GAAP ASC 230 Treatment</h3>
            <ul class="text-sm text-slate-700 space-y-2 flex-grow relative z-10">
              <li><strong class="text-slate-900">Interest paid:</strong> Operating activity (no choice)</li>
              <li><strong class="text-slate-900">Interest received:</strong> Operating activity (no choice)</li>
              <li><strong class="text-slate-900">Dividends paid:</strong> Financing activity (no choice)</li>
              <li><strong class="text-slate-900">Dividends received:</strong> Operating activity (no choice)</li>
              <li><strong class="text-slate-900">Taxes paid:</strong> Always operating (no allocation)</li>
              <li><strong class="text-slate-900">Bank overdraft:</strong> Not included (financing activity)</li>
              <li><strong class="text-slate-900">Restricted cash:</strong> Included in total cash but separately disclosed</li>
              <li><strong class="text-slate-900">Indirect starting point:</strong> Net income only</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION D IMPACT -->
      <section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION D: Side-by-Side Impact Table (Year 1 - Cash Flow Classification)
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Cash Flow Item</th>
                <th class="p-3 border-b border-slate-200">AS 3</th>
                <th class="p-3 border-b border-slate-200">Ind AS 7</th>
                <th class="p-3 border-b border-slate-200">IAS 7</th>
                <th class="p-3 border-b border-slate-200">US GAAP (ASC 230)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Bank overdraft in cash equivalents</td>
                <td class="p-3">Not included</td>
                <td class="p-3">Included if criteria met</td>
                <td class="p-3">Same as Ind AS</td>
                <td class="p-3">Not included (financing activity)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Interest paid - non-financial</td>
                <td class="p-3 text-slate-600">Financing</td>
                <td class="p-3 text-blue-800 font-medium bg-blue-50/50">Operating OR Financing (policy choice)</td>
                <td class="p-3">Same as Ind AS</td>
                <td class="p-3 text-slate-600">Operating (no choice)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Interest received - non-financial</td>
                <td class="p-3 text-slate-600">Investing</td>
                <td class="p-3 text-blue-800 font-medium bg-blue-50/50">Operating OR Investing (policy choice)</td>
                <td class="p-3">Same as Ind AS</td>
                <td class="p-3 text-slate-600">Operating (no choice)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Dividends paid - non-financial</td>
                <td class="p-3 text-slate-600">Financing</td>
                <td class="p-3 text-blue-800 font-medium bg-blue-50/50">Financing OR Operating (policy choice)</td>
                <td class="p-3">Same as Ind AS</td>
                <td class="p-3 text-slate-600">Financing (no choice)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Dividends received - non-financial</td>
                <td class="p-3 text-slate-600">Investing</td>
                <td class="p-3 text-blue-800 font-medium bg-blue-50/50">Operating OR Investing (policy choice)</td>
                <td class="p-3">Same as Ind AS</td>
                <td class="p-3 text-slate-600">Operating (no choice)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Taxes paid</td>
                <td class="p-3">Operating (separate disclosure)</td>
                <td class="p-3">Operating unless specifically identifiable</td>
                <td class="p-3">Same as Ind AS</td>
                <td class="p-3">Operating only (no allocation)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Extraordinary items classification</td>
                <td class="p-3">Required separate classification</td>
                <td class="p-3 text-red-600">Not applicable (prohibited)</td>
                <td class="p-3 text-red-600">Not applicable</td>
                <td class="p-3 text-red-600">Not applicable</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Indirect method starting point</td>
                <td class="p-3">Net profit/loss</td>
                <td class="p-3">Profit or loss (flexible)</td>
                <td class="p-3">Profit or loss (flexible)</td>
                <td class="p-3">Net income only</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Lease payments - operating lease (lessee)</td>
                <td class="p-3">Not specifically addressed</td>
                <td class="p-3">Principal = financing; Interest = operating/financing</td>
                <td class="p-3">Same as Ind AS</td>
                <td class="p-3">Operating activity</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Changes in financing liabilities disclosure</td>
                <td class="p-3">Not required</td>
                <td class="p-3 font-bold text-green-700">Required</td>
                <td class="p-3 font-bold text-green-700">Required</td>
                <td class="p-3">Not explicitly required</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION E -->
      <section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200 flex justify-between">
          <span>SECTION E: P&amp;L Impact - Cash Flow Statement (No direct P&amp;L impact)</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Metric</th>
                <th class="p-3 border-b border-slate-200">AS 3</th>
                <th class="p-3 border-b border-slate-200 bg-blue-50/50">Ind AS 7</th>
                <th class="p-3 border-b border-slate-200">IAS 7</th>
                <th class="p-3 border-b border-slate-200">US GAAP</th>
                <th class="p-3 border-b border-slate-200">Key Difference</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 font-mono">
              <tr class="hover:bg-slate-50 text-slate-800">
                <td class="p-3 text-left font-sans font-medium">Operating Cash Flow (CFO) - Example</td>
                <td class="p-3"><span id="pe-as-cfo">89</span> Cr</td>
                <td class="p-3 bg-blue-50/50 font-semibold"><span id="pe-ind-cfo">85</span> Cr*</td>
                <td class="p-3 font-semibold"><span id="pe-ifrs-cfo">85</span> Cr*</td>
                <td class="p-3"><span id="pe-us-cfo">89</span> Cr</td>
                <td class="p-3 font-sans text-xs text-slate-600">Varies based on policy choices for interest/dividends</td>
              </tr>
              <tr class="hover:bg-slate-50 text-slate-800">
                <td class="p-3 text-left font-sans font-medium">Investing Cash Flow (CFI)</td>
                <td class="p-3">(<span id="pe-as-cfi">31</span>) Cr</td>
                <td class="p-3 bg-blue-50/50 font-semibold">(<span id="pe-ind-cfi">31</span>) Cr</td>
                <td class="p-3 font-semibold">(<span id="pe-ifrs-cfi">31</span>) Cr</td>
                <td class="p-3">(<span id="pe-us-cfi">35</span>) Cr</td>
                <td class="p-3 font-sans text-xs text-slate-600">US GAAP excludes interest received from CFI</td>
              </tr>
              <tr class="hover:bg-slate-50 text-slate-800">
                <td class="p-3 text-left font-sans font-medium">Financing Cash Flow (CFF)</td>
                <td class="p-3"><span id="pe-as-cff">2</span> Cr</td>
                <td class="p-3 bg-blue-50/50 font-semibold"><span id="pe-ind-cff">14</span> Cr*</td>
                <td class="p-3 font-semibold"><span id="pe-ifrs-cff">14</span> Cr*</td>
                <td class="p-3"><span id="pe-us-cff">9</span> Cr</td>
                <td class="p-3 font-sans text-xs text-slate-600">Varies based on interest/dividend classification</td>
              </tr>
              <tr class="hover:bg-slate-50 font-bold border-t-2 border-slate-200">
                <td class="p-3 text-left font-sans">Net Cash Flow</td>
                <td class="p-3"><span id="pe-as-net">60</span> Cr</td>
                <td class="p-3 bg-blue-100 text-blue-900"><span id="pe-ind-net">68</span> Cr*</td>
                <td class="p-3 text-blue-900"><span id="pe-ifrs-net">68</span> Cr*</td>
                <td class="p-3"><span id="pe-us-net">63</span> Cr</td>
                <td class="p-3 font-sans text-xs text-slate-600 font-normal">Differences due to overdraft inclusion</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="px-4 py-2 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 italic">
          *Range depends on policy elections under Ind AS/IAS 7
        </div>
      </section>

      <!-- SECTION F -->
      <section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION F: Balance Sheet Impact
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Item</th>
                <th class="p-3 border-b border-slate-200">AS 3</th>
                <th class="p-3 border-b border-slate-200">Ind AS 7</th>
                <th class="p-3 border-b border-slate-200">IAS 7</th>
                <th class="p-3 border-b border-slate-200">US GAAP</th>
                <th class="p-3 border-b border-slate-200">Logic</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Cash and cash equivalents presentation</td>
                <td class="p-3">Excludes bank overdrafts</td>
                <td class="p-3 font-bold text-amber-700">Includes bank overdrafts meeting criteria as reduction</td>
                <td class="p-3 font-bold text-amber-700">Same as Ind AS</td>
                <td class="p-3">Excludes bank overdrafts; restricted cash included but separately disclosed</td>
                <td class="p-3 text-slate-600">Classification choice affects reported cash balance</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Bank overdraft balance sheet classification</td>
                <td class="p-3">Current liability</td>
                <td class="p-3">Current liability (but netted in cash flow statement)</td>
                <td class="p-3">Same as Ind AS</td>
                <td class="p-3">Current liability</td>
                <td class="p-3 text-slate-600">Consistent on balance sheet; cash flow treatment differs</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Restricted cash</td>
                <td class="p-3">Not separately addressed</td>
                <td class="p-3">Judgment required for inclusion in cash equivalents</td>
                <td class="p-3">Same as Ind AS</td>
                <td class="p-3 font-bold text-blue-700">Included in total cash in cash flow statement; reconciled to balance sheet</td>
                <td class="p-3 text-slate-600">US GAAP more prescriptive on inclusion</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Lease liabilities (financing activities)</td>
                <td class="p-3">Not applicable under AS 3</td>
                <td class="p-3">Liability presented; principal repayments = financing cash flows</td>
                <td class="p-3">Same as Ind AS</td>
                <td class="p-3 font-bold text-blue-700">Operating lease liability; payments = operating cash flows</td>
                <td class="p-3 text-slate-600">Different balance sheet and cash flow classification</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION G -->
      <section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION G: Cash Flow Impact - Reconciliation
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Component</th>
                <th class="p-3 border-b border-slate-200">AS 3</th>
                <th class="p-3 border-b border-slate-200 bg-blue-50/50">Ind AS 7</th>
                <th class="p-3 border-b border-slate-200">IAS 7</th>
                <th class="p-3 border-b border-slate-200">US GAAP</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 font-mono">
              <tr class="hover:bg-slate-50 text-slate-800">
                <td class="p-3 text-left font-sans font-bold border-b-2 border-slate-200">Total cash generated (economic)</td>
                <td class="p-3 font-bold border-b-2 border-slate-200"><span id="secg-tot">63</span> Cr</td>
                <td class="p-3 font-bold bg-blue-50/50 border-b-2 border-slate-200"><span id="secg-tot2">63</span> Cr</td>
                <td class="p-3 font-bold border-b-2 border-slate-200"><span id="secg-tot3">63</span> Cr</td>
                <td class="p-3 font-bold border-b-2 border-slate-200"><span id="secg-tot4">63</span> Cr</td>
              </tr>
              <tr class="hover:bg-slate-50 text-slate-700">
                <td class="p-3 text-left font-sans font-medium">Presentation as operating CF</td>
                <td class="p-3"><span id="secg-as-cfo">89</span> Cr</td>
                <td class="p-3 bg-blue-50/50"><span id="secg-ind-cfo">85</span> Cr</td>
                <td class="p-3"><span id="secg-ifrs-cfo">85</span> Cr</td>
                <td class="p-3"><span id="secg-us-cfo">89</span> Cr</td>
              </tr>
              <tr class="hover:bg-slate-50 text-slate-700">
                <td class="p-3 text-left font-sans font-medium">Presentation as investing CF</td>
                <td class="p-3"><span id="secg-as-cfi">31</span> Cr inflow from interest</td>
                <td class="p-3 bg-blue-50/50"><span id="secg-ind-cfi">31</span> Cr (depends on choice)</td>
                <td class="p-3">Same as Ind AS</td>
                <td class="p-3"><span id="secg-us-cfi">0</span> from interest (interest in operating)</td>
              </tr>
              <tr class="hover:bg-slate-50 text-slate-700">
                <td class="p-3 text-left font-sans font-medium">Presentation as financing CF</td>
                <td class="p-3"><span id="secg-as-cff">2</span> Cr</td>
                <td class="p-3 bg-blue-50/50"><span id="secg-ind-cff">14</span> Cr (depends on choice)</td>
                <td class="p-3">Same as Ind AS</td>
                <td class="p-3"><span id="secg-us-cff">9</span> Cr</td>
              </tr>
              <tr class="hover:bg-green-50 font-bold bg-slate-50/50 border-t-2 border-slate-200">
                <td class="p-3 text-left font-sans">Cash and cash equivalents closing</td>
                <td class="p-3 text-green-700"><span id="secg-as-close">90</span> Cr</td>
                <td class="p-3 bg-blue-100 text-blue-900"><span id="secg-ind-close">103</span> Cr (including overdraft)</td>
                <td class="p-3 text-blue-900"><span id="secg-ifrs-close">103</span> Cr</td>
                <td class="p-3 text-green-700"><span id="secg-us-close">93</span> Cr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="px-4 py-2 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 font-bold">
          Note: Total cash generated from operations is economically identical across all standards - only classification and presentation differ.
        </div>
      </section>

      <!-- SECTION H -->
      <section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION H: Ratio Impact
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Ratio</th>
                <th class="p-3 border-b border-slate-200">AS 3</th>
                <th class="p-3 border-b border-slate-200">Ind AS 7</th>
                <th class="p-3 border-b border-slate-200">IAS 7</th>
                <th class="p-3 border-b border-slate-200">US GAAP</th>
                <th class="p-3 border-b border-slate-200">Direction &amp; Interpretation</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Operating Cash Flow Margin (CFO/Revenue)</td>
                <td class="p-3">Highest (includes interest received in CFO?)</td>
                <td class="p-3 text-amber-600">Lower/Medium (depends on policy choices)</td>
                <td class="p-3 text-amber-600">Same as Ind AS</td>
                <td class="p-3">Highest (interest always in CFO)</td>
                <td class="p-3 font-semibold text-slate-700">Not comparable across standards without adjustment</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Free Cash Flow (CFO - Capex)</td>
                <td class="p-3">Varies based on classification</td>
                <td class="p-3 text-amber-600">Varies based on interest classification</td>
                <td class="p-3 text-amber-600">Same as Ind AS</td>
                <td class="p-3">Lower if interest classified as CFO</td>
                <td class="p-3 font-semibold text-slate-700">Economic FCF is identical - only labels differ</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Cash Flow Coverage Ratio (CFO/Total Debt)</td>
                <td class="p-3">Appears stronger if interest in financing</td>
                <td class="p-3">Appears weaker if interest in operating</td>
                <td class="p-3">Same as Ind AS</td>
                <td class="p-3">Appears strongest</td>
                <td class="p-3 font-semibold text-red-600">Misleading - use total cash flow from all activities</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Cash Return on Assets (CFO/Total Assets)</td>
                <td class="p-3">Varies</td>
                <td class="p-3">Varies</td>
                <td class="p-3">Varies</td>
                <td class="p-3">Varies</td>
                <td class="p-3 font-semibold text-slate-700">Normalize by using total net cash flow</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Dividend Coverage Ratio (CFO/Dividends)</td>
                <td class="p-3">Higher (CFO excludes dividends)</td>
                <td class="p-3">Lower (CFO may include dividends if classified as operating)</td>
                <td class="p-3">Same as Ind AS</td>
                <td class="p-3">Higher (CFO excludes dividends)</td>
                <td class="p-3 font-semibold text-slate-700">Policy choice distorts - use cash flow before dividends</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Interest Coverage (Cash Basis) (CFO/Interest Paid)</td>
                <td class="p-3">Higher (interest in financing, not reducing CFO)</td>
                <td class="p-3">Lower (interest in operating reduces CFO)</td>
                <td class="p-3">Same as Ind AS</td>
                <td class="p-3">Lower (interest in operating reduces CFO)</td>
                <td class="p-3 font-semibold text-slate-700">True coverage is identical - economic cash flow before interest is same</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Liquidity Ratio (Cash &amp; Cash Equivalents/Current Liabilities)</td>
                <td class="p-3 text-red-600">Lower (excludes overdraft)</td>
                <td class="p-3 text-green-700">Higher (includes overdraft as cash equivalent)</td>
                <td class="p-3 text-green-700">Same as Ind AS</td>
                <td class="p-3 text-amber-600">Medium (excludes overdraft but may include restricted cash)</td>
                <td class="p-3 font-semibold text-slate-700">Not comparable - adjust for overdraft treatment</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION I -->
      <section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION I: Earnings Quality - Signals Table
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Signal Observed</th>
                <th class="p-3 border-b border-slate-200">What It Means Technically</th>
                <th class="p-3 border-b border-slate-200">Analyst Interpretation</th>
                <th class="p-3 border-b border-slate-200">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">CFO > Net Income significantly</td>
                <td class="p-3">Non-cash charges or working capital sources exceed uses</td>
                <td class="p-3">Quality of earnings may be high if working capital changes are sustainable; but one-time working capital benefits may reverse</td>
                <td class="p-3 font-semibold text-blue-700">Analyze sustainability of working capital changes</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">CFO &lt; Net Income consistently</td>
                <td class="p-3">Aggressive revenue recognition, build-up of receivables, or high non-cash charges</td>
                <td class="p-3 text-red-600">Red flag - earnings not converting to cash; potential quality issues</td>
                <td class="p-3 font-semibold text-blue-700">Stress-test revenue recognition policies and receivable collection</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Interest classified as operating (Ind AS/IAS 7 policy choice)</td>
                <td class="p-3">Company elected to show higher operating cash flow by excluding interest from CFO (if classified as financing)</td>
                <td class="p-3">Presentation choice - not economic; creates artificially higher CFO compared to peers with different policy</td>
                <td class="p-3 font-semibold text-blue-700">Reclassify consistently using cash flow from operations before interest and taxes</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Dividends classified as operating (Ind AS/IAS 7 policy choice)</td>
                <td class="p-3">Rare - may be used by entities wanting to show lower financing outflows</td>
                <td class="p-3">Unusual policy - check if appropriate for business model; may mislead on dividend sustainability</td>
                <td class="p-3 font-semibold text-blue-700">Normalize by reclassifying dividends to financing for comparability</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Bank overdraft included in cash equivalents (Ind AS/IAS 7)</td>
                <td class="p-3">Company has right of offset and overdraft is integral to cash management</td>
                <td class="p-3">Legitimate under IFRS/Ind AS but reduces reported net debt artificially</td>
                <td class="p-3 font-semibold text-blue-700">Recalculate net debt excluding overdraft from cash for leverage analysis</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Restricted cash included in total cash (US GAAP)</td>
                <td class="p-3">Legal or contractual restrictions exist but cash is still reported in cash flow statement</td>
                <td class="p-3">Not available for general use - liquidity may be overstated</td>
                <td class="p-3 font-semibold text-blue-700">Adjust available cash by excluding restricted portion</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Disclosure of changes in financing liabilities (IFRS/Ind AS only)</td>
                <td class="p-3">Company provides roll-forward of debt, leases, and other financing obligations</td>
                <td class="p-3 text-green-700">Good governance - allows tracking of non-cash changes (e.g., new leases, conversions)</td>
                <td class="p-3 font-semibold text-blue-700">Use this disclosure to understand true financing cash needs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION J -->
      <section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION J: Trend Distortion Matrix
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Metric</th>
                <th class="p-3 border-b border-slate-200">Distortion Type</th>
                <th class="p-3 border-b border-slate-200">Duration</th>
                <th class="p-3 border-b border-slate-200">Correction Method</th>
                <th class="p-3 border-b border-slate-200">Example</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Operating Cash Flow (CFO)</td>
                <td class="p-3 text-amber-600">Classification-driven level shift (if interest/dividend classification changes)</td>
                <td class="p-3">Persistent as long as policy remains</td>
                <td class="p-3 font-semibold">Calculate cash flow from operations before interest and taxes by adding back interest and taxes to CFO</td>
                <td class="p-3 text-slate-600">Ind AS company with interest in financing has higher CFO than IFRS peer with interest in operating - normalize</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Free Cash Flow (FCF)</td>
                <td class="p-3 text-green-600">No economic distortion (only classification)</td>
                <td class="p-3">Persistent</td>
                <td class="p-3 font-semibold">Use consistent definition across periods: FCF = CFO (standardized) - Capex</td>
                <td class="p-3 text-slate-600">Ignore classification; economic FCF identical</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Cash and cash equivalents balance</td>
                <td class="p-3 text-amber-600">Level shift (if overdraft included)</td>
                <td class="p-3">Persistent</td>
                <td class="p-3 font-semibold">Calculate unrestricted cash available for operations by deducting overdrafts and restricted cash</td>
                <td class="p-3 text-slate-600">Ind AS shows higher cash balance due to overdraft inclusion</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Net debt</td>
                <td class="p-3 text-amber-600">Level shift (if overdraft netted against cash)</td>
                <td class="p-3">Persistent</td>
                <td class="p-3 font-semibold">Calculate gross debt separately from cash</td>
                <td class="p-3 text-slate-600">Ind AS net debt lower due to cash overdraft netting</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">CFO/Interest coverage</td>
                <td class="p-3 text-red-600">Significant distortion (interest classification changes denominator)</td>
                <td class="p-3">Persistent</td>
                <td class="p-3 font-semibold">Use cash flow before interest and taxes / interest paid for all periods</td>
                <td class="p-3 text-slate-600">Company with interest in financing shows 2x coverage vs operating classification - same economics</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION K -->
      <section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION K: Ratio Interpretation Guide
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Ratio</th>
                <th class="p-3 border-b border-slate-200">Reported Value</th>
                <th class="p-3 border-b border-slate-200">What Analyst Should Do</th>
                <th class="p-3 border-b border-slate-200">Correct Interpretation</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Operating Cash Flow Margin (CFO/Revenue)</td>
                <td class="p-3">Higher under US GAAP; varies under IFRS/Ind AS</td>
                <td class="p-3 font-bold text-blue-700">Recast all to common basis: CFO before interest and taxes</td>
                <td class="p-3">Economic cash generation from operations is identical; only labels differ</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Cash Flow to Net Income (CFO/NI)</td>
                <td class="p-3">>1.0 generally good; but distorted by classification differences</td>
                <td class="p-3 font-bold text-blue-700">Calculate cash flow before interest and taxes / EBIT for apples-to-apples</td>
                <td class="p-3">True cash conversion quality independent of financing classification</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Free Cash Flow (CFO - Capex)</td>
                <td class="p-3">Appears different due to CFO classification differences</td>
                <td class="p-3 font-bold text-blue-700">Calculate total net cash flow from all activities - non-operating investing</td>
                <td class="p-3">Economic FCF is identical - ignore classification differences</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Cash Flow Coverage (CFO/Total Debt)</td>
                <td class="p-3">Appears stronger if interest in financing (CFO not reduced)</td>
                <td class="p-3 font-bold text-blue-700">Use (CFO + interest paid)/Total Debt or use EBITDA/Total Debt</td>
                <td class="p-3">Coverage unaffected by classification; use pre-interest cash flow</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Net Debt / EBITDA</td>
                <td class="p-3">Appears lower under Ind AS (overdraft in cash)</td>
                <td class="p-3 font-bold text-blue-700">Add back overdrafts to net debt; exclude restricted cash</td>
                <td class="p-3">Leverage higher than reported - adjust for netting</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="px-4 py-3 bg-blue-50 border-t border-slate-200">
          <p class="text-sm text-blue-900"><strong class="font-bold">Intelligence Note:</strong> The Cash Flow Statement itself does not impact P&amp;L - it is a presentation statement. However, classification differences affect financial ratios and performance metrics. Total cash generated from operations is economically identical across all standards - only classification and presentation differ.</p>
        </div>
      </section>

      <!-- SECTION L -->
      <section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION L: Analyst Concerns &amp; Answers
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200 w-1/4">Analyst Question</th>
                <th class="p-3 border-b border-slate-200 w-1/6">Concern</th>
                <th class="p-3 border-b border-slate-200 w-1/3">Answer</th>
                <th class="p-3 border-b border-slate-200">Evidence</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Why does operating cash flow differ between two similar companies under IFRS?</td>
                <td class="p-3 text-red-600">Classification inconsistency</td>
                <td class="p-3">Under IAS 7/Ind AS 7, companies can choose to classify interest as operating OR financing, and dividends as operating OR financing</td>
                <td class="p-3 text-slate-600">Two identical companies can show different CFO solely due to policy choice</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Should I include bank overdrafts in cash when analyzing liquidity?</td>
                <td class="p-3 text-red-600">Overstated available cash</td>
                <td class="p-3">Under IFRS/Ind AS, overdrafts included if repayable on demand AND integral to cash management; under US GAAP, never included</td>
                <td class="p-3 text-slate-600">For cross-border comparability, exclude overdrafts from cash for all companies</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">How do I compare US GAAP and IFRS cash flow statements?</td>
                <td class="p-3 text-red-600">Cross-border comparability</td>
                <td class="p-3">Normalize to common classification - move all interest and dividends to operating for US GAAP companies; for IFRS, reclassify interest and dividends to match US GAAP or use pre-interest CF</td>
                <td class="p-3 text-slate-600">Prepare bridge table: IFRS CFO + interest in financing = comparable to US GAAP CFO</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Why does Ind AS 7 encourage direct method but no one uses it?</td>
                <td class="p-3 text-slate-600">Practicality vs principle</td>
                <td class="p-3">Direct method requires tracking gross cash receipts/payments - more costly; most ERP systems not configured to provide this data easily</td>
                <td class="p-3 text-slate-600">Most Indian companies use indirect method despite encouragement</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">How do I treat restricted cash in analysis?</td>
                <td class="p-3 text-red-600">Liquidity overstatement</td>
                <td class="p-3">US GAAP includes restricted cash in total cash in cash flow statement but reconciles to balance sheet; IFRS requires judgment</td>
                <td class="p-3 text-slate-600">Exclude restricted cash from available-for-use liquidity metrics</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">What's the most important disclosure in Ind AS 7 that AS 3 lacked?</td>
                <td class="p-3 text-red-600">Missing transparency</td>
                <td class="p-3">Changes in financing liabilities - shows both cash and non-cash changes to debt, leases, and other obligations</td>
                <td class="p-3 text-slate-600">Critical for understanding true financing cash needs and non-cash financing activities</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION M -->
      <section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION M: Investor Perception Analysis
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Investor Type</th>
                <th class="p-3 border-b border-slate-200">What They See</th>
                <th class="p-3 border-b border-slate-200">Likely Reaction</th>
                <th class="p-3 border-b border-slate-200">Sophisticated Response</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Retail</td>
                <td class="p-3">CFO number in financial highlights</td>
                <td class="p-3 text-amber-600">Compare CFO across companies without understanding classification differences</td>
                <td class="p-3 font-semibold text-blue-700">May draw incorrect conclusions about relative performance</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Value Investors</td>
                <td class="p-3">Free cash flow generation</td>
                <td class="p-3">Focus on total cash flow, not operating classification; adjust for working capital sustainability</td>
                <td class="p-3 font-semibold text-blue-700">Reclassify all cash flows to consistent basis before comparing; ignore presentation differences</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Institutional Long-Only</td>
                <td class="p-3">CFO trends and cash conversion</td>
                <td class="p-3">Understand classification differences; request policy election disclosures</td>
                <td class="p-3 font-semibold text-blue-700">Use standardized cash flow before interest and taxes for peer comparisons; value based on total FCF</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Credit / Lenders</td>
                <td class="p-3">CFO coverage ratios for covenant testing</td>
                <td class="p-3 text-amber-600">Most impacted - classification differences can artificially inflate or deflate coverage ratios</td>
                <td class="p-3 font-semibold text-blue-700">Write covenants based on cash flow available for debt service = CFO + interest + taxes - maintenance Capex</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">PE / VC</td>
                <td class="p-3">Cash burn rate and runway</td>
                <td class="p-3">Focus on total cash flow from all activities; less concerned with classification</td>
                <td class="p-3 font-semibold text-blue-700">Use simple cash balance change; operating classification irrelevant for cash runway analysis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION N -->
      <section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION N: Reporting Signals Decoder
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200">Management Action</th>
                <th class="p-3 border-b border-slate-200">Signal</th>
                <th class="p-3 border-b border-slate-200">What It Really Means</th>
                <th class="p-3 border-b border-slate-200">Your Move</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Interest classified as financing (IFRS/Ind AS)</td>
                <td class="p-3 text-blue-600 font-bold">Conservative policy choice</td>
                <td class="p-3">CFO higher than if classified as operating; may be trying to show stronger operating performance</td>
                <td class="p-3 font-semibold">Reclassify interest to operating for apples-to-apples with US GAAP peers</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Interest classified as operating (IFRS/Ind AS)</td>
                <td class="p-3 text-blue-600 font-bold">More conservative CFO presentation</td>
                <td class="p-3">CFO lower but more comparable to US GAAP; may be trying to show realistic operating cash flow</td>
                <td class="p-3 font-semibold">No adjustment needed for US GAAP comparison</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Dividends classified as operating (IFRS/Ind AS - rare)</td>
                <td class="p-3 text-red-600 font-bold">Highly unusual - potential red flag</td>
                <td class="p-3">Inflates financing cash flow (less negative) by hiding dividend outflows in operating; may mislead on dividend sustainability</td>
                <td class="p-3 font-semibold">Always reclassify dividends to financing for analysis</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Changes classification policy between periods</td>
                <td class="p-3 text-red-600 font-bold">Red flag - lack of consistency</td>
                <td class="p-3">May be trying to manage reported CFO trends; requires disclosure and retrospective restatement</td>
                <td class="p-3 font-semibold">Restate prior periods to same policy; question management motivation</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">No disclosure of changes in financing liabilities (IFRS/Ind AS)</td>
                <td class="p-3 text-red-600 font-bold">Non-compliance with Ind AS 7</td>
                <td class="p-3">Hiding non-cash financing activities (e.g., new leases, debt conversions)</td>
                <td class="p-3 font-semibold">Request disclosure; adjust analysis to include non-cash financing</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Uses direct method (rare)</td>
                <td class="p-3 text-green-700 font-bold">Very good governance</td>
                <td class="p-3">Provides transparent gross cash receipts/payments; most transparent presentation</td>
                <td class="p-3 font-semibold">Highly positive signal - use direct method data for more accurate cash flow forecasting</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION O -->
      <section class="shrink-0 bg-blue-900 rounded-xl shadow-sm border border-blue-800 overflow-hidden flex flex-col text-white relative">
        <div class="absolute top-0 right-0 bg-amber-400 text-amber-900 font-black px-3 py-1 text-xs uppercase tracking-widest rounded-bl-lg z-10">Premium Intel</div>
        <div class="p-6 md:p-8 flex flex-col gap-4 relative z-0">
          <h3 class="text-xl font-bold text-blue-100 border-b border-blue-800 pb-2">SECTION O: Premium Intelligence Narrative</h3>
          
          <div class="space-y-4 text-blue-50">
            <p><strong class="text-amber-300 font-bold">Question:</strong> "Two different companies report different operating cash flow for the same economic activity. Which one is correct?"</p>
            <p><strong class="text-blue-300">Average Analyst Answer:</strong> "Check which accounting standard they follow - IFRS, US GAAP, or Indian AS - and read the policy note on interest classification."</p>
            <p><strong class="text-amber-400 font-bold">PREMIUM Analyst Answer:</strong> The difference in reported operating cash flow is not about 'correct' or 'incorrect' - it's about classification philosophy. US GAAP takes a strict approach: interest paid and received are always operating. IFRS and Ind AS offer a choice, recognizing that interest might be a financing cost or an operating return depending on the business model. However, this flexibility creates a trap for the unwary analyst. A company classifying interest paid as financing will artificially inflate its CFO compared to a US GAAP peer. The sophisticated investor recasts all cash flows to a common basis before making allocation decisions.</p>
          </div>
        </div>
      </section>

      <!-- SECTION P -->
      <section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION P: Red Flags vs Green Flags
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200 w-1/2">Scenario</th>
                <th class="p-3 border-b border-slate-200 w-1/6">Flag</th>
                <th class="p-3 border-b border-slate-200">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 border-l-4 border-yellow-400">Interest classified as financing (IFRS/Ind AS) and company touts strong CFO growth</td>
                <td class="p-3 font-bold text-yellow-600">YELLOW</td>
                <td class="p-3 text-slate-700">Presentation-driven improvement, not economic - recast to operating for apples-to-apples</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 border-l-4 border-red-500">Dividends classified as operating (IFRS/Ind AS - very rare)</td>
                <td class="p-3 font-bold text-red-600">RED</td>
                <td class="p-3 text-slate-700">Unusual policy choice - likely to inflate financing cash flow; question management intent</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 border-l-4 border-green-500">Consistent CFO > Net Income with stable working capital</td>
                <td class="p-3 font-bold text-green-600">GREEN</td>
                <td class="p-3 text-slate-700">High earnings quality; earnings are converting to cash</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 border-l-4 border-yellow-400">CFO > Net Income but working capital improvements unsustainable (e.g., huge payables build-up)</td>
                <td class="p-3 font-bold text-yellow-600">YELLOW</td>
                <td class="p-3 text-slate-700">One-time benefit will reverse - normalize working capital to sustainable levels</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 border-l-4 border-red-500">CFO < Net Income for multiple years</td>
                <td class="p-3 font-bold text-red-600">RED</td>
                <td class="p-3 text-slate-700">Earnings quality concern - aggressive revenue recognition or poor collection</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 border-l-4 border-green-500">Disclosure of changes in financing liabilities (IFRS/Ind AS)</td>
                <td class="p-3 font-bold text-green-600">GREEN</td>
                <td class="p-3 text-slate-700">Good governance - shows both cash and non-cash financing changes</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 border-l-4 border-red-500">No disclosure of non-cash investing/financing activities</td>
                <td class="p-3 font-bold text-red-600">RED</td>
                <td class="p-3 text-slate-700">Hiding material transactions (e.g., asset acquisitions through debt, share-based acquisitions)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 border-l-4 border-yellow-400">Reclassification of cash equivalents between periods</td>
                <td class="p-3 font-bold text-yellow-600">YELLOW</td>
                <td class="p-3 text-slate-700">Check for consistency - frequent changes may signal earnings management</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 border-l-4 border-green-600">Direct method used (rare)</td>
                <td class="p-3 font-bold text-green-700">GREEN (Strong)</td>
                <td class="p-3 text-slate-700">Most transparent presentation - indicates strong accounting systems and governance</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800 border-l-4 border-red-500">Policy election for interest classification changes during period</td>
                <td class="p-3 font-bold text-red-600">RED</td>
                <td class="p-3 text-slate-700">Lack of consistency - may be managing reported CFO trend; requires restatement</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION Q -->
      <section class="shrink-0 bg-slate-900 rounded-xl shadow-sm border border-slate-800 overflow-hidden flex flex-col text-white mb-8">
        <div class="p-6 md:p-8 flex flex-col gap-6">
          <h3 class="text-xl font-bold text-slate-100 border-b border-slate-700 pb-2">SECTION Q: Final Intelligence Summary</h3>
          
          <div class="space-y-4 text-slate-300">
            <p><strong class="text-slate-100">Level 1 (Retail):</strong> "Company A's operating cash flow is higher than Company B's, so Company A is better." &rarr; <span class="text-red-400">Wrong action: make investment decision based on non-comparable CFO numbers</span></p>
            <p><strong class="text-slate-100">Level 2 (Basic):</strong> "Different accounting standards classify cash flows differently. I'll compare companies only within the same standard." &rarr; <span class="text-amber-400">Better, but still misses cross-border opportunities</span></p>
            <p><strong class="text-slate-100">Level 3 (YOU):</strong> Cash flow classification differences across AS 3, Ind AS 7, IAS 7, and ASC 230 are presentation choices, not economic differences. A company that generates 100 Cr before interest and taxes generates exactly that regardless of whether interest appears above or below the CFO line, or whether overdrafts are netted against cash.</p>
            
            <h4 class="text-lg font-bold text-white pt-4">The Five Non-Negotiable Adjustments You Make Every Time:</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>Normalize interest: Reclassify all interest paid to operating (US GAAP basis) OR use pre-interest cash flow for all comparisons</li>
              <li>Normalize dividends: Reclassify all dividends paid to financing (never operating)</li>
              <li>Exclude overdrafts: Remove all bank overdrafts from cash equivalents for liquidity analysis</li>
              <li>Adjust leases: Reclassify US GAAP operating lease payments from operating to financing for IFRS comparability</li>
              <li>Use total cash flow: For valuation, focus on total net cash flow and free cash flow to firm - these are unaffected by classification games</li>
            </ul>

            <h4 class="text-lg font-bold text-white pt-4">Your Edge:</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>You never compare reported CFO across companies without first normalizing for classification differences</li>
              <li>You demand the changes in financing liabilities disclosure (Ind AS/IAS 7) to understand true financing cash needs</li>
              <li>You recast all cash flow statements to a standardized format before any cross-border or cross-standard comparison</li>
              <li>You identify companies using aggressive classification (e.g., interest as financing to inflate CFO) and flag them for management quality concerns</li>
              <li>You understand that economic cash generation is identical regardless of standard - only the presentation differs</li>
            </ul>
          </div>
        </div>
      </section>

      <div class="text-center text-xs text-slate-500 font-mono mt-4 mb-8" id="calc-timestamp">
        Last calculated: --
      </div>

    </main>

    <script>
      function formatNumber(num) {
        if (num === null || num === undefined || isNaN(num)) return "0.00";
        return Number(num).toFixed(2);
      }

      function updateCalculations() {
        const pbt = parseFloat(document.getElementById('inp-pbt').value) || 0;
        const dep = parseFloat(document.getElementById('inp-dep').value) || 0;
        const profSale = parseFloat(document.getElementById('inp-prof-sale').value) || 0;
        const incRec = parseFloat(document.getElementById('inp-inc-rec').value) || 0;
        const decInv = parseFloat(document.getElementById('inp-dec-inv').value) || 0;
        const incPay = parseFloat(document.getElementById('inp-inc-pay').value) || 0;
        
        const intExp = parseFloat(document.getElementById('inp-int-exp').value) || 0;
        const intRec = parseFloat(document.getElementById('inp-int-rec').value) || 0;
        const divPaid = parseFloat(document.getElementById('inp-div-paid').value) || 0;
        const taxPaid = parseFloat(document.getElementById('inp-tax-paid').value) || 0;
        
        const purchM = parseFloat(document.getElementById('inp-purch').value) || 0;
        const saleM = parseFloat(document.getElementById('inp-sale').value) || 0;
        const issueSh = parseFloat(document.getElementById('inp-issue').value) || 0;
        const repayL = parseFloat(document.getElementById('inp-repay').value) || 0;
        
        const openCash = parseFloat(document.getElementById('inp-open-cash').value) || 0;
        const od = parseFloat(document.getElementById('inp-od').value) || 0;

        const selInt = document.getElementById('sel-interest').value;
        const selDiv = document.getElementById('sel-dividend').value;

        // Base Operating CF before interest, tax, dividends
        let cfoBase = pbt + dep - profSale - incRec + decInv + incPay; 

        // AS 3
        const asCfo = cfoBase + intExp - intRec - taxPaid;
        const asCfi = -purchM + saleM + intRec;
        const asCff = issueSh - repayL - intExp - divPaid;
        const asNet = asCfo + asCfi + asCff;
        const asClose = openCash + asNet;

        // US GAAP
        const usCfo = cfoBase + intExp - intRec - intExp + intRec - taxPaid; // net income starts with interest netted. 
        // effectively: cfoBase - taxPaid. Because intExp reduces NI and is operating. intRec increases NI and is operating.
        const usCfi = -purchM + saleM;
        const usCff = issueSh - repayL - divPaid;
        const usNet = usCfo + usCfi + usCff + od; // overdraft increases cash but is financing
        const usNetDisplay = usCfo + usCfi + usCff;
        const usClose = openCash + usNetDisplay;

        // Ind AS / IAS
        let indCfo = cfoBase - taxPaid;
        let indCfi = -purchM + saleM;
        let indCff = issueSh - repayL;

        if (selInt === 'Op_Op') {
          indCfo += (-intExp + intRec); 
        } else if (selInt === 'Op_Inv') {
          indCfo -= intExp;
          indCfi += intRec;
        } else if (selInt === 'Fin_Op') {
          indCff -= intExp;
          indCfo += intRec;
        } else if (selInt === 'Fin_Inv') {
          indCff -= intExp;
          indCfi += intRec;
        }

        if (selDiv === 'Op_Op') {
          indCfo -= divPaid; 
          // div receipt is not in our input right now, assume 0
        } else if (selDiv === 'Op_Inv') {
          indCfo -= divPaid;
        } else if (selDiv === 'Fin_Op') {
          indCff -= divPaid;
        } else if (selDiv === 'Fin_Inv') {
          indCff -= divPaid;
        }

        const indNet = indCfo + indCfi + indCff;
        const indClose = (openCash - od) + indNet;
        
        // Updates for Section E
        document.getElementById('pe-as-cfo').textContent = formatNumber(asCfo);
        document.getElementById('pe-ind-cfo').textContent = formatNumber(indCfo);
        document.getElementById('pe-ifrs-cfo').textContent = formatNumber(indCfo);
        document.getElementById('pe-us-cfo').textContent = formatNumber(usCfo);

        document.getElementById('pe-as-cfi').textContent = formatNumber(asCfi);
        document.getElementById('pe-ind-cfi').textContent = formatNumber(indCfi);
        document.getElementById('pe-ifrs-cfi').textContent = formatNumber(indCfi);
        document.getElementById('pe-us-cfi').textContent = formatNumber(usCfi);

        document.getElementById('pe-as-cff').textContent = formatNumber(asCff);
        document.getElementById('pe-ind-cff').textContent = formatNumber(indCff);
        document.getElementById('pe-ifrs-cff').textContent = formatNumber(indCff);
        document.getElementById('pe-us-cff').textContent = formatNumber(usCff);

        document.getElementById('pe-as-net').textContent = formatNumber(asNet);
        document.getElementById('pe-ind-net').textContent = formatNumber(indNet);
        document.getElementById('pe-ifrs-net').textContent = formatNumber(indNet);
        document.getElementById('pe-us-net').textContent = formatNumber(usNetDisplay);

        // Updates for Section G
        const econGen = (cfoBase - taxPaid) + (-purchM + saleM) + (issueSh - repayL) + (intRec - intExp) - divPaid;
        document.getElementById('secg-tot').textContent = formatNumber(econGen);
        document.getElementById('secg-tot2').textContent = formatNumber(econGen);
        document.getElementById('secg-tot3').textContent = formatNumber(econGen);
        document.getElementById('secg-tot4').textContent = formatNumber(econGen);

        document.getElementById('secg-as-cfo').textContent = formatNumber(asCfo);
        document.getElementById('secg-ind-cfo').textContent = formatNumber(indCfo);
        document.getElementById('secg-ifrs-cfo').textContent = formatNumber(indCfo);
        document.getElementById('secg-us-cfo').textContent = formatNumber(usCfo);

        document.getElementById('secg-as-cfi').textContent = formatNumber(asCfi);
        document.getElementById('secg-ind-cfi').textContent = formatNumber(indCfi);
        document.getElementById('secg-us-cfi').textContent = formatNumber(usCfi);

        document.getElementById('secg-as-cff').textContent = formatNumber(asCff);
        document.getElementById('secg-ind-cff').textContent = formatNumber(indCff);
        document.getElementById('secg-us-cff').textContent = formatNumber(usCff);

        document.getElementById('secg-as-close').textContent = formatNumber(asClose);
        document.getElementById('secg-ind-close').textContent = formatNumber(indClose);
        document.getElementById('secg-ifrs-close').textContent = formatNumber(indClose);
        document.getElementById('secg-us-close').textContent = formatNumber(usClose);

        const now = new Date();
        document.getElementById('calc-timestamp').textContent = 'Last calculated: ' + now.toLocaleTimeString();
      }

      function attachListeners() {
        const inputs = document.querySelectorAll('input, select');
        inputs.forEach(inp => {
          inp.addEventListener('input', updateCalculations);
          inp.addEventListener('change', updateCalculations);
        });

        document.getElementById('reset-btn').addEventListener('click', () => {
          document.getElementById('inp-pbt').value = 100.00;
          document.getElementById('inp-dep').value = 20.00;
          document.getElementById('inp-prof-sale').value = 5.00;
          document.getElementById('inp-inc-rec').value = 15.00;
          document.getElementById('inp-dec-inv').value = 8.00;
          document.getElementById('inp-inc-pay').value = 10.00;
          document.getElementById('inp-int-exp').value = 12.00;
          document.getElementById('inp-int-rec').value = 4.00;
          document.getElementById('inp-div-paid').value = 6.00;
          document.getElementById('inp-tax-paid').value = 25.00;
          document.getElementById('inp-purch').value = 50.00;
          document.getElementById('inp-sale').value = 15.00;
          document.getElementById('inp-issue').value = 40.00;
          document.getElementById('inp-repay').value = 20.00;
          document.getElementById('inp-open-cash').value = 30.00;
          document.getElementById('inp-od').value = 5.00;
          
          document.getElementById('sel-interest').value = 'Fin_Inv';
          document.getElementById('sel-dividend').value = 'Fin_Inv';

          updateCalculations();
        });
      }

      document.addEventListener('DOMContentLoaded', () => {
        attachListeners();
        updateCalculations();
      });
    </script>
  </body>
</html>`;

fs.writeFileSync('cashflows.html', html);
console.log('Created cashflows.html');
