const fs = require('fs');
const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Financial Instruments | Standards Hub</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      html { scroll-behavior: smooth; }
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
      <a href="financial-instruments.html" class="px-6 py-3 text-sm font-semibold border-b-4 border-blue-600 bg-blue-50 text-blue-900 block whitespace-nowrap">Financial Instruments</a>
      <a href="revenue.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">Revenue</a>
      <a href="deferred-tax.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">Deferred Tax</a>
      <a href="consolidation.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">Consolidation</a>
      <a href="impairment.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">Impairment</a>
    </nav>

    <main class="flex-1 p-4 md:p-6 lg:p-8 flex flex-col gap-10 overflow-y-auto" id="main-content">
      <div class="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div class="border-l-8 border-teal-600 pl-4 py-1 shrink-0">
          <h2 class="text-2xl font-bold text-[#1a365d] uppercase tracking-wide">Financial Instruments</h2>
          <p class="text-sm text-slate-600">Premium Analysis Guide: AS vs Ind AS 109 vs IFRS 9 vs US GAAP ASC 815/326</p>
        </div>
      </div>

      <!-- SECTION A -->
      <section class="shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
        <div class="bg-[#1a365d] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm border-b border-slate-200">
          SECTION A: Core Technical Comparison Table
        </div>
        <div class="overflow-x-auto flex-1">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-50 text-slate-700">
              <tr>
                <th class="p-3 border-b border-slate-200 w-1/5">Parameter</th>
                <th class="p-3 border-b border-slate-200 w-1/5">AS (Old Indian GAAP)</th>
                <th class="p-3 border-b border-slate-200 w-1/5">Ind AS</th>
                <th class="p-3 border-b border-slate-200 w-1/5">IFRS</th>
                <th class="p-3 border-b border-slate-200 w-1/5">US GAAP</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Core principle</td>
                <td class="p-3">Financial instruments are less comprehensively covered; classification and measurement are simpler and less rule-rich.</td>
                <td class="p-3">Financial instruments are based on contractual rights and obligations, with classification driven by business model and cash flow characteristics.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Financial instruments are covered by detailed recognition, measurement, and disclosure guidance.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Definition</td>
                <td class="p-3">Includes instruments creating financial asset, liability, or equity relationships.</td>
                <td class="p-3">Same broad concept as IFRS.</td>
                <td class="p-3">A contract that gives rise to a financial asset of one entity and a financial liability or equity instrument of another.</td>
                <td class="p-3">Same general concept, but applied through US GAAP codification.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Recognition</td>
                <td class="p-3">Often more limited and practice-driven.</td>
                <td class="p-3">Recognize when the entity becomes party to the contractual provisions.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Recognize when control/rights and obligations arise under applicable guidance.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Initial measurement</td>
                <td class="p-3">Usually at cost or fair value depending on guidance.</td>
                <td class="p-3">Generally fair value + transaction costs (except FVPL items).</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Generally fair value + transaction costs (except for trading items).</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Asset Classification</td>
                <td class="p-3">Less formal.</td>
                <td class="p-3">Amortised cost, FVOCI, or FVTPL depending on business model and SPPI test.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Category-based model (e.g., HTM, trading, AFS) - different buckets from IFRS.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Liability Classification</td>
                <td class="p-3">Simplified.</td>
                <td class="p-3">Amortised cost, except liabilities at FVTPL.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Broadly similar intent, but detailed rules and presentation differ.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Derivatives</td>
                <td class="p-3">Usually less systematically addressed.</td>
                <td class="p-3">Generally measured at fair value through P&L unless hedge accounting applies.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Generally measured at fair value through earnings, with hedge accounting under ASC 815.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-3 font-semibold text-slate-800">Impairment model</td>
                <td class="p-3">Limited or less codified; often incurred loss.</td>
                <td class="p-3">Expected credit loss (ECL) model for applicable assets and loan commitments.</td>
                <td class="p-3">Same as Ind AS.</td>
                <td class="p-3">Expected credit loss model (CECL under ASC 326) - different mechanics.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="p-4 bg-teal-50 border-t border-slate-200 text-sm text-teal-900 border-t border-white">
          <span class="font-bold">KEY INSIGHT:</span> AS significantly understates total financial expense and hides derivative risk and credit losses. Ind AS, IFRS, and US GAAP give similar numbers here, but US GAAP classification and ECL calculation can differ in more complex cases.
        </div>
      </section>
`;
fs.writeFileSync('financial-instruments.html', html);
