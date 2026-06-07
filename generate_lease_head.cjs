const fs = require('fs');

const head = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lease Accounting Comparison | Standards Hub</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      html { scroll-behavior: smooth; }
      th, td { border-right: 1px solid #e2e8f0; }
      th:last-child, td:last-child { border-right: none; }
    </style>
  </head>
  <body class="bg-[#f7fafc] font-sans h-screen w-full flex flex-col overflow-hidden border-8 border-slate-200 text-slate-800">
    <header class="bg-[#1a365d] text-white p-4 shrink-0 shadow-md">
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-end">
        <div>
          <h1 class="text-2xl font-bold tracking-tight">Accounting Standards Comparison Hub</h1>
          <p class="text-slate-300 text-sm italic">AS vs Ind AS vs IFRS vs US GAAP</p>
        </div>
      </div>
    </header>

    <nav class="bg-white border-b border-slate-200 flex shrink-0 overflow-x-auto">
      <a href="index.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">Home</a>
      <a href="lease.html" class="px-6 py-3 text-sm font-semibold border-b-4 border-blue-600 bg-blue-50 text-blue-900 block whitespace-nowrap">Lease</a>
      <a href="ppe.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">PPE</a>
      <a href="financial-instruments.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">Financial Instruments</a>
      <a href="revenue.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">Revenue</a>
      <a href="deferred-tax.html" class="px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 border-b-4 border-transparent block whitespace-nowrap">Deferred Tax</a>
    </nav>

    <main class="flex-1 p-4 md:p-6 lg:p-8 flex flex-col gap-10 overflow-y-auto" id="main-content">
      <div class="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div class="border-l-8 border-teal-600 pl-4 py-1 shrink-0">
          <h2 class="text-2xl font-bold text-[#1a365d] uppercase tracking-wide">Lease Accounting</h2>
          <p class="text-sm text-slate-600">Premium Analysis Guide: AS vs Ind AS 116 vs IFRS 16 vs US GAAP ASC 842</p>
        </div>
        <div class="flex gap-2 items-center">
            <button id="btn-reset" class="px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded text-sm font-bold text-slate-700">Reset to Default</button>
        </div>
      </div>
`;
fs.writeFileSync('lease.html', head);
console.log('Appended head');
