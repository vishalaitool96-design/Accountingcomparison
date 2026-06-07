const fs = require('fs');
const path = require('path');

const navHtml = `
<nav class="bg-[#0A2540] text-white shadow-md relative z-50 font-sans">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex items-center">
        <a href="/index.html" class="flex-shrink-0 flex items-center text-xl tracking-tight text-white font-bold" style="font-family: 'Inter', sans-serif;">
          <span class="text-blue-400 mr-2">📊</span> AccGuide
        </a>
      </div>
      <div class="hidden md:flex space-x-2 items-center" id="desktop-nav">
        <a href="/index.html" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#1a365d] transition-colors nav-link">Home</a>
        
        <div class="relative group dropdown-container">
          <button class="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#1a365d] transition-colors inline-flex items-center dropdown-btn nav-link" onclick="toggleDropdown('std-drop')">
            Standards Comparison
            <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
          <div id="std-drop" class="absolute left-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 dropdown-menu" style="top: 100%;">
            <div class="py-1" role="menu" aria-orientation="vertical">
              <a href="/revenue.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Revenue</a>
              <a href="/leases.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Leases</a>
              <a href="/impairment.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Impairment</a>
              <a href="/financial-instruments.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Financial Instruments</a>
              <div class="border-t border-gray-100 my-1"></div>
              <a href="/standards-comparison.html" class="block px-4 py-2 text-sm text-blue-600 font-medium hover:bg-gray-50">View all topics &rarr;</a>
            </div>
          </div>
        </div>

        <div class="relative group dropdown-container">
          <button class="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#1a365d] transition-colors inline-flex items-center dropdown-btn nav-link" onclick="toggleDropdown('rcd-drop')">
            Real Company Data
            <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
          <div id="rcd-drop" class="absolute right-0 mt-0 w-[420px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 dropdown-menu" style="top: 100%;">
            <div class="p-4 grid grid-cols-2 gap-6 text-left">
              <div>
                <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 border-b border-gray-100 pb-1">By Industry</h3>
                <div class="space-y-1">
                  <a href="/airlines.html" class="block px-2 py-1.5 text-sm text-gray-700 hover:bg-[#F7F9FC] hover:text-[#0A2540] rounded transition-colors">Airlines</a>
                  <a href="/telecom.html" class="block px-2 py-1.5 text-sm text-gray-700 hover:bg-[#F7F9FC] hover:text-[#0A2540] rounded transition-colors">Telecom</a>
                  <a href="/metals.html" class="block px-2 py-1.5 text-sm text-gray-700 hover:bg-[#F7F9FC] hover:text-[#0A2540] rounded transition-colors">Metals & Mining</a>
                  <a href="/it-services.html" class="block px-2 py-1.5 text-sm text-gray-700 hover:bg-[#F7F9FC] hover:text-[#0A2540] rounded transition-colors">IT Services</a>
                </div>
              </div>
              <div>
                <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 border-b border-gray-100 pb-1">By Alphabet</h3>
                <div class="grid grid-cols-2 gap-1">
                  <a href="/a-c.html" class="block px-2 py-1 text-sm text-gray-700 hover:bg-[#F7F9FC] hover:text-[#0A2540] rounded font-mono">A-C</a>
                  <a href="/d-f.html" class="block px-2 py-1 text-sm text-gray-700 hover:bg-[#F7F9FC] hover:text-[#0A2540] rounded font-mono">D-F</a>
                  <a href="/g-i.html" class="block px-2 py-1 text-sm text-gray-700 hover:bg-[#F7F9FC] hover:text-[#0A2540] rounded font-mono">G-I</a>
                  <a href="/j-l.html" class="block px-2 py-1 text-sm text-gray-700 hover:bg-[#F7F9FC] hover:text-[#0A2540] rounded font-mono">J-L</a>
                  <a href="/m-o.html" class="block px-2 py-1 text-sm text-gray-700 hover:bg-[#F7F9FC] hover:text-[#0A2540] rounded font-mono">M-O</a>
                  <a href="/p-r.html" class="block px-2 py-1 text-sm text-gray-700 hover:bg-[#F7F9FC] hover:text-[#0A2540] rounded font-mono">P-R</a>
                  <a href="/s-u.html" class="block px-2 py-1 text-sm text-gray-700 hover:bg-[#F7F9FC] hover:text-[#0A2540] rounded font-mono">S-U</a>
                  <a href="/v-z.html" class="block px-2 py-1 text-sm text-gray-700 hover:bg-[#F7F9FC] hover:text-[#0A2540] rounded font-mono">V-Z</a>
                </div>
              </div>
            </div>
            <div class="border-t border-gray-100 p-3 bg-gray-50 rounded-b-md text-center">
              <a href="/all-companies.html" class="inline-block px-4 py-2 text-sm text-[#0A2540] bg-white border border-gray-200 shadow-sm font-medium hover:bg-gray-50 rounded transition-all">View all companies &rarr;</a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="flex items-center md:hidden">
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#1a365d] focus:outline-none" aria-controls="mobile-menu" aria-expanded="false" id="mobile-menu-btn">
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>

  <div class="md:hidden hidden bg-[#0A2540]" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-inner">
      <a href="/index.html" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#1a365d]">Home</a>
      
      <div>
        <button class="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#1a365d] flex justify-between mobile-dropdown-btn">
          Standards Comparison
          <svg class="h-5 w-5 transform transition-transform" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden pl-4 pr-2 py-2 space-y-1 bg-[#051626] rounded-md mt-1 mobile-dropdown-content">
          <a href="/revenue.html" class="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-[#1a365d]">Revenue</a>
          <a href="/leases.html" class="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-[#1a365d]">Leases</a>
          <a href="/impairment.html" class="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-[#1a365d]">Impairment</a>
          <a href="/financial-instruments.html" class="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-[#1a365d]">Financial Instruments</a>
          <a href="/all-topics.html" class="block px-3 py-2 mt-2 rounded-md text-sm font-medium text-blue-400 hover:text-white hover:bg-[#1a365d] border-t border-gray-700 pt-3">View all topics &rarr;</a>
        </div>
      </div>

      <div>
        <button class="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#1a365d] flex justify-between mobile-dropdown-btn">
          Real Company Data
          <svg class="h-5 w-5 transform transition-transform" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden pl-4 pr-2 py-2 space-y-2 bg-[#051626] rounded-md mt-1 mobile-dropdown-content text-gray-300">
          <div>
             <div class="text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-1 px-3 mt-2">By Industry</div>
             <a href="/airlines.html" class="block px-3 py-1.5 rounded-md text-sm hover:text-white hover:bg-[#1a365d]">Airlines</a>
             <a href="/telecom.html" class="block px-3 py-1.5 rounded-md text-sm hover:text-white hover:bg-[#1a365d]">Telecom</a>
             <a href="/metals.html" class="block px-3 py-1.5 rounded-md text-sm hover:text-white hover:bg-[#1a365d]">Metals & Mining</a>
             <a href="/it-services.html" class="block px-3 py-1.5 rounded-md text-sm hover:text-white hover:bg-[#1a365d]">IT Services</a>
          </div>
          <div>
            <div class="text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-1 px-3 mt-4">By Alphabet</div>
            <div class="grid grid-cols-3 gap-1 px-3">
              <a href="/a-c.html" class="block py-1.5 text-center rounded-md text-sm bg-[#0A2540] hover:bg-[#1a365d] border border-gray-700">A-C</a>
              <a href="/d-f.html" class="block py-1.5 text-center rounded-md text-sm bg-[#0A2540] hover:bg-[#1a365d] border border-gray-700">D-F</a>
              <a href="/g-i.html" class="block py-1.5 text-center rounded-md text-sm bg-[#0A2540] hover:bg-[#1a365d] border border-gray-700">G-I</a>
              <a href="/j-l.html" class="block py-1.5 text-center rounded-md text-sm bg-[#0A2540] hover:bg-[#1a365d] border border-gray-700">J-L</a>
              <a href="/m-o.html" class="block py-1.5 text-center rounded-md text-sm bg-[#0A2540] hover:bg-[#1a365d] border border-gray-700">M-O</a>
              <a href="/p-r.html" class="block py-1.5 text-center rounded-md text-sm bg-[#0A2540] hover:bg-[#1a365d] border border-gray-700">P-R</a>
              <a href="/s-u.html" class="block py-1.5 text-center rounded-md text-sm bg-[#0A2540] hover:bg-[#1a365d] border border-gray-700">S-U</a>
              <a href="/v-z.html" class="block py-1.5 text-center rounded-md text-sm bg-[#0A2540] hover:bg-[#1a365d] border border-gray-700">V-Z</a>
            </div>
          </div>
          <a href="/all-companies.html" class="block px-3 py-2 mt-4 rounded-md text-sm font-medium text-blue-400 hover:text-white hover:bg-[#1a365d] border-t border-gray-700 pt-3">View all companies &rarr;</a>
        </div>
      </div>
    </div>
  </div>
</nav>

<script>
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

document.querySelectorAll('.mobile-dropdown-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    this.nextElementSibling.classList.toggle('hidden');
    const svg = this.querySelector('svg');
    if (this.nextElementSibling.classList.contains('hidden')) {
      svg.style.transform = 'rotate(0deg)';
    } else {
      svg.style.transform = 'rotate(180deg)';
    }
  });
});

function toggleDropdown(id) {
  if (window.innerWidth > 768) {
    const el = document.getElementById(id);
    if (el.classList.contains('invisible')) {
       document.querySelectorAll('.dropdown-menu').forEach(menu => {
         menu.classList.add('invisible', 'opacity-0');
       });
       el.classList.remove('invisible', 'opacity-0');
    } else {
       el.classList.add('invisible', 'opacity-0');
    }
  }
}

document.addEventListener('click', function(event) {
  if (!event.target.closest('.dropdown-container')) {
    if (window.innerWidth > 768) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
         menu.classList.add('invisible', 'opacity-0');
      });
    }
  }
});
</script>
`;

const layoutHead = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AccGuide | Financial Standards & Data</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
          },
          colors: {
            navy: '#0A2540',
            lightgray: '#F7F9FC',
          }
        }
      }
    }
  </script>
  <style>
    body { font-family: 'Inter', sans-serif; background-color: #FAFAFB; color: #334155; }
    .card { background: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); border: 1px solid #E2E8F0; transition: transform 0.2s, box-shadow 0.2s; }
    .card:hover { transform: translateY(-2px); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); }
    th { font-weight: 600; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.05em; background-color: #F8FAFC; }
    
    .share-menu { position: fixed; bottom: 20px; right: 20px; z-index: 10000; }
    .share-trigger { background: #0A2540; color: white; border: none; padding: 12px 24px; border-radius: 40px; cursor: pointer; font-size: 14px; font-weight: 500; box-shadow: 0 4px 12px rgba(0,0,0,0.15); display: flex; align-items: center; gap: 8px; transition: all 0.2s; }
    .share-trigger:hover { background: #1a365d; transform: translateY(-1px); }
    .share-dropdown { position: absolute; bottom: 100%; right: 0; margin-bottom: 10px; background: white; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15); min-width: 200px; overflow: hidden; display: none; }
    .share-dropdown.show { display: block; }
    .share-dropdown button { width: 100%; padding: 12px 16px; border: none; background: white; text-align: left; cursor: pointer; font-size: 14px; display: flex; align-items: center; gap: 10px; transition: background 0.2s; }
    .share-dropdown button:hover { background: #f0f0f0; }
    .share-dropdown hr { margin: 0; border: none; border-top: 1px solid #eee; }
    .toast { position: fixed; bottom: 80px; right: 20px; background: #333; color: white; padding: 10px 20px; border-radius: 8px; font-size: 14px; opacity: 0; transition: opacity 0.3s; pointer-events: none; z-index: 10001; }
    .toast.show { opacity: 1; }
  </style>
</head>
<body class="flex flex-col min-h-screen">
${navHtml}
`;

const layoutFooter = `
<footer class="bg-[#0A2540] text-gray-300 py-12 mt-auto border-t border-gray-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div class="col-span-1 md:col-span-2">
        <div class="flex items-center text-xl font-bold tracking-tight text-white mb-4">
          <span class="text-blue-400 mr-2">📊</span> AccGuide
        </div>
        <p class="text-sm text-gray-400 mb-4 max-w-md">Compare Indian AS, IFRS, and US GAAP with clear explanations. Analyze real-world company data and understand the financial statement impact of accounting policy choices.</p>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="/index.html" class="hover:text-white transition-colors">Home</a></li>
          <li><a href="/standards-comparison.html" class="hover:text-white transition-colors">Standards Comparison</a></li>
          <li><a href="/real-company-data.html" class="hover:text-white transition-colors">Real Company Data</a></li>
          <li><a href="#" class="hover:text-white transition-colors">About Us</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Popular Topics</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="/revenue.html" class="hover:text-white transition-colors">Revenue (Ind AS 115)</a></li>
          <li><a href="/leases.html" class="hover:text-white transition-colors">Leases (Ind AS 116)</a></li>
          <li><a href="/impairment.html" class="hover:text-white transition-colors">Impairment (Ind AS 36)</a></li>
          <li><a href="/financial-instruments.html" class="hover:text-white transition-colors">Financial Instruments</a></li>
        </ul>
      </div>
    </div>
    <div class="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-500 flex justify-between items-center">
      <p>&copy; 2026 AccGuide. All rights reserved.</p>
    </div>
  </div>
</footer>

<div class="share-menu">
  <button class="share-trigger" id="shareTrigger">
    📤 Share
    <span style="font-size: 12px;">▼</span>
  </button>
  <div class="share-dropdown" id="shareDropdown">
    <button id="copyLinkBtn">🔗 Copy Page Link</button>
    <button id="copyContentBtn">📄 Copy Page Content (Rich Text)</button>
    <hr>
    <button id="shareNativeBtn" style="color: #25D366;">📱 Share via... (Mobile)</button>
  </div>
</div>

<div class="toast" id="toast">Copied to clipboard!</div>

<script>
  // Add share script functionality
  function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message || 'Copied to clipboard!';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
  }
  
  function getPageContentHTML() {
    const contentArea = document.querySelector('main, article, .content, .page-content, body');
    if (contentArea) {
      const clone = contentArea.cloneNode(true);
      clone.querySelectorAll('script, iframe, button.share-menu, .share-menu').forEach(el => el.remove());
      return clone.innerHTML;
    }
    return document.body.innerHTML;
  }
  
  const nativeBtn = document.getElementById('shareNativeBtn');
  if (nativeBtn) {
    nativeBtn.addEventListener('click', async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: document.title,
            text: 'Check out this accounting standards comparison',
            url: window.location.href
          });
        } catch (err) {
          if (err.name !== 'AbortError') showToast('Share cancelled or failed');
        }
      } else {
        await navigator.clipboard.writeText(window.location.href);
        showToast('Link copied! (Native share not supported)');
      }
      document.getElementById('shareDropdown').classList.remove('show');
    });
  }
  
  document.getElementById('copyLinkBtn').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast('Page link copied!');
    } catch (err) {
      showToast('Failed to copy link');
    }
    document.getElementById('shareDropdown').classList.remove('show');
  });
  
  document.getElementById('copyContentBtn').addEventListener('click', async () => {
    try {
      const pageHTML = getPageContentHTML();
      const pageText = document.title + '\\n\\n' + document.body.innerText.slice(0, 5000);
      
      const htmlBlob = new Blob([pageHTML], { type: 'text/html' });
      const textBlob = new Blob([pageText], { type: 'text/plain' });
      
      await navigator.clipboard.write([
        new ClipboardItem({
          'text/html': htmlBlob,
          'text/plain': textBlob
        })
      ]);
      showToast('Page content copied!');
    } catch (err) {
      console.error('Copy failed:', err);
      try {
        const text = document.body.innerText;
        await navigator.clipboard.writeText(text);
        showToast('Copied as plain text (fallback)');
      } catch (e) {
        showToast('Failed to copy');
      }
    }
    document.getElementById('shareDropdown').classList.remove('show');
  });
  
  const trigger = document.getElementById('shareTrigger');
  const dropdown = document.getElementById('shareDropdown');
  
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('show');
  });
  
  document.addEventListener('click', (e) => {
    if (!trigger.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('show');
    }
  });

  // Set active nav highlighting dynamically
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === '/' + currentPath || (href === '/index.html' && currentPath === '')) {
      link.classList.add('bg-[#1a365d]');
    } else if (href !== '/index.html' && currentPath !== 'index.html') {
       link.classList.remove('bg-[#1a365d]');
    }
  });
</script>
</body>
</html>
`;


const pages = {};

pages['index.html'] = `
<main class="flex-grow">
  <section class="bg-[#0A2540] text-white pt-20 pb-24 relative overflow-hidden">
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-navy to-[#0A2540]"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
        Navigate Global <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Accounting Standards</span>
      </h1>
      <p class="mt-4 text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-light">
        Compare IFRS, Ind AS, US GAAP, and AS. See real company impacts. Understand exactly what equity analysts miss in the footnotes.
      </p>
      
      <div class="max-w-2xl mx-auto relative">
        <div class="relative flex items-center">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="text" id="homeSearch" class="block w-full pl-12 pr-4 py-4 rounded-full text-gray-900 bg-white shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg border-2 border-transparent" placeholder="Search topics (e.g. 'Leases') or companies...">
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 bg-[#F7F9FC]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8" id="searchable-content">
        
        <div class="card p-6 flex flex-col h-full searchable-item" data-title="Impairment">
          <div class="text-blue-600 mb-4 bg-blue-50 inline-block p-3 rounded-lg w-fit">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          </div>
          <p class="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-1">Featured Topic</p>
          <h3 class="text-2xl font-bold text-[#0A2540] mb-3">Impairment</h3>
          <p class="text-gray-600 mb-6 flex-grow leading-relaxed">Discover how differing rules for measuring Value in Use vs Fair Value impact EPS volatility under Ind AS 36 compared to US GAAP step-tests.</p>
          <a href="/impairment.html" class="text-blue-600 font-semibold hover:text-blue-800 flex items-center transition-colors">
            See example <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </div>

        <div class="card p-6 flex flex-col h-full searchable-item" data-title="Tata Steel">
          <div class="text-amber-500 mb-4 bg-amber-50 inline-block p-3 rounded-lg w-fit">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
          </div>
          <p class="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-1">Featured Company</p>
          <h3 class="text-2xl font-bold text-[#0A2540] mb-3">Tata Steel</h3>
          <p class="text-gray-600 mb-6 flex-grow leading-relaxed">Analyzing component accounting for blast furnaces, European subsidiary impairments, and complex government grants.</p>
          <a href="/tata-steel.html" class="text-blue-600 font-semibold hover:text-blue-800 flex items-center transition-colors border border-blue-600 px-4 py-2 rounded justify-center">
            Read analysis
          </a>
        </div>

        <div class="card p-6 flex flex-col h-full bg-gradient-to-br from-red-50 to-white searchable-item" data-title="Intelligence">
          <div class="text-red-600 mb-4 bg-white inline-block p-3 rounded-lg shadow-sm border border-red-100 w-fit">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          </div>
          <p class="text-sm font-semibold text-red-700 tracking-wider uppercase mb-1">Latest Intelligence</p>
          <h3 class="text-xl font-bold text-[#0A2540] mb-3">Red Flag Alert</h3>
          <p class="text-gray-700 mb-6 flex-grow">Watch out for: <strong class="text-red-700">"Companies changing CGU boundaries before impairment testing."</strong> Aggregating poorly performing assets with profitable ones to avoid write-downs.</p>
          <a href="/standards-comparison.html" class="text-red-700 font-semibold hover:text-red-900 flex items-center transition-colors">
            View all insights <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </div>

      </div>
    </div>
  </section>
</main>
<script>
document.getElementById('homeSearch').addEventListener('input', function(e) {
  const term = e.target.value.toLowerCase();
  const items = document.querySelectorAll('.searchable-item');
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if(text.includes(term)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
});
</script>
`;

const standardsTopics = `
<main class="flex-grow bg-[#FAFAFB] py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-10 text-center md:text-left">
      <h1 class="text-3xl font-bold text-[#0A2540] mb-4">Standards Comparison</h1>
      <p class="text-lg text-gray-600 max-w-3xl">Comprehensive guides detailing differences between Indian GAAP (AS), Ind AS, IFRS, and US GAAP.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <a href="/revenue.html" class="card p-6 block hover:-translate-y-1 transition-transform group">
        <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <h3 class="text-xl font-bold text-[#0A2540] mb-2">Revenue Recognition</h3>
        <p class="text-sm text-gray-500 mb-4">Ind AS 115 vs AS 9. Focus on the 5-step model, distinct performance obligations.</p>
        <span class="text-blue-600 text-sm font-semibold">Compare Standard &rarr;</span>
      </a>

      <a href="/leases.html" class="card p-6 block hover:-translate-y-1 transition-transform group">
        <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
        </div>
        <h3 class="text-xl font-bold text-[#0A2540] mb-2">Lease Accounting</h3>
        <p class="text-sm text-gray-500 mb-4">Ind AS 116 vs AS 19. Capitalization of operating leases, ROU assets.</p>
        <span class="text-blue-600 text-sm font-semibold">Compare Standard &rarr;</span>
      </a>

      <a href="/impairment.html" class="card p-6 block hover:-translate-y-1 transition-transform group">
        <div class="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
        </div>
        <h3 class="text-xl font-bold text-[#0A2540] mb-2">Impairment of Assets</h3>
        <p class="text-sm text-gray-500 mb-4">Ind AS 36 vs AS 28. Cash generating units, goodwill allocation.</p>
        <span class="text-blue-600 text-sm font-semibold">Compare Standard &rarr;</span>
      </a>

      <a href="/financial-instruments.html" class="card p-6 block hover:-translate-y-1 transition-transform group">
        <div class="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
        </div>
        <h3 class="text-xl font-bold text-[#0A2540] mb-2">Financial Instruments</h3>
        <p class="text-sm text-gray-500 mb-4">Ind AS 109 vs AS 30/13. Expected credit loss model, FVOCI, hedging.</p>
        <span class="text-blue-600 text-sm font-semibold">Compare Standard &rarr;</span>
      </a>

      <div class="card p-6 block opacity-60 relative overflow-hidden group">
        <h3 class="text-xl font-bold text-gray-500 mb-2">Business Combinations</h3>
        <p class="text-sm text-gray-400 mb-4">Coming soon. Ind AS 103 covering acquisition method.</p>
      </div>
      
      <div class="card p-6 block opacity-60 relative overflow-hidden group">
        <h3 class="text-xl font-bold text-gray-500 mb-2">Inventory</h3>
        <p class="text-sm text-gray-400 mb-4">Coming soon. Ind AS 2 vs AS 2.</p>
      </div>

    </div>
  </div>
</main>
`;
pages['standards-comparison.html'] = standardsTopics;
pages['all-topics.html'] = standardsTopics;

const genericTopicTemplate = (title) => \`
<main class="flex-grow bg-[#FAFAFB] py-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col lg:flex-row gap-8">
      
      <div class="lg:w-3/4 space-y-8">
        <div>
          <span class="text-blue-600 font-bold tracking-wider text-sm uppercase">Standard Analysis</span>
          <h1 class="text-3xl lg:text-4xl font-bold text-[#0A2540] mt-2 mb-4">\${title}</h1>
          <p class="text-lg text-gray-600"><!-- CONTENT NEEDED: High-level overview of the standard and why it matters --></p>
        </div>

        <div class="card overflow-hidden">
          <div class="bg-[#0A2540] px-6 py-4">
            <h2 class="text-lg font-bold text-white">Quick Reference: Framework Comparison</h2>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-gray-50 border-b border-gray-200">
                  <th class="p-4 text-xs font-semibold text-gray-500 uppercase">Parameter</th>
                  <th class="p-4 text-xs font-semibold text-gray-500 uppercase">AS (Old / IGAAP)</th>
                  <th class="p-4 text-xs font-semibold text-gray-500 uppercase">Ind AS (IFRS Converged)</th>
                  <th class="p-4 text-xs font-semibold text-gray-500 uppercase">US GAAP</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="p-4 font-medium text-gray-900 border-r border-gray-100 bg-gray-50 whitespace-nowrap"><!-- CONTENT NEEDED: Parameter 1 --></td>
                  <td class="p-4 text-gray-700"><!-- CONTENT NEEDED: AS treatment --></td>
                  <td class="p-4 text-gray-700"><!-- CONTENT NEEDED: Ind AS treatment --></td>
                  <td class="p-4 text-gray-700"><!-- CONTENT NEEDED: US GAAP treatment --></td>
                </tr>
                <tr>
                  <td class="p-4 font-medium text-gray-900 border-r border-gray-100 bg-gray-50 whitespace-nowrap"><!-- CONTENT NEEDED: Parameter 2 --></td>
                  <td class="p-4 text-gray-700"><!-- CONTENT NEEDED: AS treatment --></td>
                  <td class="p-4 text-gray-700"><!-- CONTENT NEEDED: Ind AS treatment --></td>
                  <td class="p-4 text-gray-700"><!-- CONTENT NEEDED: US GAAP treatment --></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <hr class="border-gray-200">

        <div>
          <h2 class="text-2xl font-bold text-[#0A2540] mb-4">Numerical Example (₹)</h2>
          <div class="bg-white p-6 rounded-lg border border-gray-200 shadow-sm font-mono text-sm leading-relaxed text-gray-800">
            <!-- CONTENT NEEDED: Walkthrough of a numerical text scenario setup -->
          </div>
        </div>

        <div>
           <h3 class="text-xl font-bold text-[#0A2540] mb-4">Journal Entries</h3>
           <div class="bg-[#F7F9FC] p-4 rounded border border-gray-200 mb-4">
              <p class="text-sm font-semibold text-gray-600 mb-2">Under AS:</p>
              <!-- CONTENT NEEDED: Journal Entries AS -->
           </div>
           <div class="bg-[#F7F9FC] p-4 rounded border border-gray-200">
              <p class="text-sm font-semibold text-gray-600 mb-2">Under Ind AS:</p>
              <!-- CONTENT NEEDED: Journal Entries Ind AS -->
           </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-[#0A2540] mb-4">Financial Statement & Ratio Impact</h2>
          <p class="text-gray-700 mb-4"><!-- CONTENT NEEDED: Paragraph explaining P&L/Balance Sheet effect --></p>
          <ul class="list-disc pl-5 space-y-2 text-gray-700">
             <li><strong>EBITDA:</strong> <!-- CONTENT NEEDED: Ratio impact --></li>
             <li><strong>Debt/Equity:</strong> <!-- CONTENT NEEDED: Ratio impact --></li>
          </ul>
        </div>

        <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
          <h2 class="text-xl font-bold text-red-800 mb-2">Earnings Quality & Red Flags</h2>
          <p class="text-red-900 mb-2"><!-- CONTENT NEEDED: Earnings quality signals --></p>
          <ul class="list-disc pl-5 text-red-900 space-y-1">
             <li><!-- CONTENT NEEDED: Red flag 1 --></li>
             <li><!-- CONTENT NEEDED: Red flag 2 --></li>
          </ul>
        </div>

        <div>
           <h2 class="text-2xl font-bold text-[#0A2540] mb-4">Investor Interpretation & Sophistication</h2>
           <p class="text-gray-700 mb-4"><!-- CONTENT NEEDED: How analysts should view this --></p>
           <div class="bg-white p-4 rounded border border-gray-200">
              <h4 class="font-bold text-sm text-gray-500 uppercase tracking-wider mb-3">Sophistication Hierarchy</h4>
              <div class="mb-3 border-b border-gray-50 pb-2"><span class="font-semibold text-[#0A2540] w-32 inline-block">Level 1 (Basic):</span> <span class="text-gray-600 border border-gray-200 px-2 py-0.5 rounded text-sm"><!-- CONTENT NEEDED --></span></div>
              <div class="mb-3 border-b border-gray-50 pb-2"><span class="font-semibold text-[#0A2540] w-32 inline-block">Level 2 (Int):</span> <span class="text-gray-600 border border-gray-200 px-2 py-0.5 rounded text-sm"><!-- CONTENT NEEDED --></span></div>
              <div class="mb-3 border-b border-gray-50 pb-2"><span class="font-semibold text-[#0A2540] w-32 inline-block">Level 3 (Adv):</span> <span class="text-gray-600 border border-gray-200 px-2 py-0.5 rounded text-sm"><!-- CONTENT NEEDED --></span></div>
              <div><span class="font-semibold text-[#0A2540] w-32 inline-block">Level 4 (Expert):</span> <span class="text-gray-600 border border-gray-200 px-2 py-0.5 rounded text-sm"><!-- CONTENT NEEDED --></span></div>
           </div>
        </div>

      </div>

      <div class="lg:w-1/4">
        <div class="sticky top-6">
          <div class="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 class="text-lg font-bold text-[#0A2540] mb-4 border-b border-gray-100 pb-2">Real World Examples</h3>
            <p class="text-[10px] text-gray-500 mb-4 uppercase tracking-wider font-bold">See companies affected</p>
            <ul class="space-y-3">
              <li>
                <a href="/tata-steel.html" class="flex flex-col group">
                  <span class="text-blue-600 font-semibold group-hover:underline">Tata Steel</span>
                  <span class="text-xs text-gray-500">Metals & Mining</span>
                </a>
              </li>
              <li>
                <a href="#" class="flex flex-col group mt-1">
                  <span class="text-blue-600 font-semibold group-hover:underline"><!-- CONTENT NEEDED: Co 2 text --></span>
                  <span class="text-xs text-gray-500"><!-- CONTENT NEEDED Industry --></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</main>
\`;

pages['revenue.html'] = genericTopicTemplate("Revenue Recognition (Ind AS 115)");
pages['leases.html'] = genericTopicTemplate("Lease Accounting (Ind AS 116)");
pages['impairment.html'] = genericTopicTemplate("Impairment of Assets (Ind AS 36)");
pages['financial-instruments.html'] = genericTopicTemplate("Financial Instruments (Ind AS 109)");

pages['real-company-data.html'] = \`
<main class="flex-grow bg-[#FAFAFB] py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-10 text-center md:text-left">
      <h1 class="text-3xl font-bold text-[#0A2540] mb-4">Real Company Data</h1>
      <p class="text-lg text-gray-600 max-w-3xl">Analyze actual accounting policies, transition effects, and earnings quality metrics for listed companies.</p>
    </div>

    <!-- Filters side by side -->
    <div class="flex flex-col md:flex-row gap-6 mb-10">
      
      <!-- By Industry -->
      <div class="card p-6 flex-1">
        <h2 class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">Filter by Industry</h2>
        <div class="flex flex-wrap gap-2">
          <a href="/airlines.html" class="px-4 py-2 bg-[#F7F9FC] border border-gray-200 rounded hover:border-blue-300 hover:text-blue-600 hover:bg-white text-sm font-medium transition-colors">Airlines</a>
          <a href="/telecom.html" class="px-4 py-2 bg-[#F7F9FC] border border-gray-200 rounded hover:border-blue-300 hover:text-blue-600 hover:bg-white text-sm font-medium transition-colors">Telecom</a>
          <a href="/metals.html" class="px-4 py-2 bg-[#F7F9FC] border border-gray-200 rounded hover:border-blue-300 hover:text-blue-600 hover:bg-white text-sm font-medium transition-colors">Metals & Mining</a>
          <a href="/it-services.html" class="px-4 py-2 bg-[#F7F9FC] border border-gray-200 rounded hover:border-blue-300 hover:text-blue-600 hover:bg-white text-sm font-medium transition-colors">IT Services</a>
        </div>
      </div>

      <!-- By Alphabet -->
      <div class="card p-6 flex-1">
        <h2 class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">Filter by Alphabet</h2>
        <div class="flex flex-wrap gap-2 font-mono">
          <a href="/a-c.html" class="w-12 text-center py-2 bg-[#F7F9FC] border border-gray-200 rounded hover:border-blue-300 hover:text-blue-600 hover:bg-white text-sm transition-colors">A-C</a>
          <a href="/d-f.html" class="w-12 text-center py-2 bg-[#F7F9FC] border border-gray-200 rounded hover:border-blue-300 hover:text-blue-600 hover:bg-white text-sm transition-colors">D-F</a>
          <a href="/g-i.html" class="w-12 text-center py-2 bg-[#F7F9FC] border border-gray-200 rounded hover:border-blue-300 hover:text-blue-600 hover:bg-white text-sm transition-colors">G-I</a>
          <a href="/j-l.html" class="w-12 text-center py-2 bg-[#F7F9FC] border border-gray-200 rounded hover:border-blue-300 hover:text-blue-600 hover:bg-white text-sm transition-colors">J-L</a>
          <a href="/m-o.html" class="w-12 text-center py-2 bg-[#F7F9FC] border border-gray-200 rounded hover:border-blue-300 hover:text-blue-600 hover:bg-white text-sm transition-colors">M-O</a>
          <a href="/p-r.html" class="w-12 text-center py-2 bg-[#F7F9FC] border border-gray-200 rounded hover:border-blue-300 hover:text-blue-600 hover:bg-white text-sm transition-colors">P-R</a>
          <a href="/s-u.html" class="w-12 text-center py-2 bg-[#F7F9FC] border border-gray-200 rounded hover:border-blue-300 hover:text-blue-600 hover:bg-white text-sm transition-colors">S-U</a>
          <a href="/v-z.html" class="w-12 text-center py-2 bg-[#F7F9FC] border border-gray-200 rounded hover:border-blue-300 hover:text-blue-600 hover:bg-white text-sm transition-colors">V-Z</a>
        </div>
      </div>

    </div>

    <!-- Dynamic Company List -->
    <div>
      <h2 class="text-xl font-bold text-[#0A2540] mb-4 flex items-center justify-between border-b pb-2">
        All Monitored Companies (10)
        <a href="/all-companies.html" class="text-sm font-normal text-blue-600 hover:underline">View standard list</a>
      </h2>
      
      <div class="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left tracking-wider">Company Name</th>
              <th scope="col" class="px-6 py-3 text-left tracking-wider">Industry</th>
              <th scope="col" class="px-6 py-3 text-left tracking-wider">Standard</th>
              <th scope="col" class="px-6 py-3 text-right tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap font-medium text-[#0A2540]">Tata Steel</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Metals & Mining</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ind AS</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="/tata-steel.html" class="text-blue-600 hover:text-blue-900 border border-blue-200 bg-blue-50 px-3 py-1.5 rounded hover:bg-blue-100">View</a></td>
            </tr>
            <tr class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap font-medium text-[#0A2540]">Infosys</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">IT Services</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ind AS / IFRS</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" class="text-blue-600 hover:text-blue-900 border border-blue-200 bg-blue-50 px-3 py-1.5 rounded hover:bg-blue-100">View</a></td>
            </tr>
            <tr class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap font-medium text-[#0A2540]">Wipro</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">IT Services</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ind AS / IFRS</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" class="text-blue-600 hover:text-blue-900 border border-blue-200 bg-blue-50 px-3 py-1.5 rounded hover:bg-blue-100">View</a></td>
            </tr>
            <tr class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap font-medium text-[#0A2540]">Reliance Industries</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Conglomerate</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ind AS</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" class="text-blue-600 hover:text-blue-900 border border-blue-200 bg-blue-50 px-3 py-1.5 rounded hover:bg-blue-100">View</a></td>
            </tr>
            <tr class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap font-medium text-[#0A2540]">UltraTech Cement</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Materials</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ind AS</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" class="text-blue-600 hover:text-blue-900 border border-blue-200 bg-blue-50 px-3 py-1.5 rounded hover:bg-blue-100">View</a></td>
            </tr>
            <tr class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap font-medium text-[#0A2540]">IndiGo (InterGlobe)</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Airlines</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ind AS</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" class="text-blue-600 hover:text-blue-900 border border-blue-200 bg-blue-50 px-3 py-1.5 rounded hover:bg-blue-100">View</a></td>
            </tr>
            <tr class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap font-medium text-[#0A2540]">SpiceJet</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Airlines</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ind AS</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" class="text-blue-600 hover:text-blue-900 border border-blue-200 bg-blue-50 px-3 py-1.5 rounded hover:bg-blue-100">View</a></td>
            </tr>
            <tr class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap font-medium text-[#0A2540]">Vodafone Idea</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Telecom</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ind AS</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" class="text-blue-600 hover:text-blue-900 border border-blue-200 bg-blue-50 px-3 py-1.5 rounded hover:bg-blue-100">View</a></td>
            </tr>
            <tr class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap font-medium text-[#0A2540]">Bharti Airtel</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Telecom</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ind AS</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" class="text-blue-600 hover:text-blue-900 border border-blue-200 bg-blue-50 px-3 py-1.5 rounded hover:bg-blue-100">View</a></td>
            </tr>
            <tr class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap font-medium text-[#0A2540]">JSW Steel</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Metals & Mining</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ind AS</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" class="text-blue-600 hover:text-blue-900 border border-blue-200 bg-blue-50 px-3 py-1.5 rounded hover:bg-blue-100">View</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</main>
\`;

pages['tata-steel.html'] = \`
<main class="flex-grow bg-[#FAFAFB] py-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <a href="/real-company-data.html" class="text-sm font-medium text-gray-500 hover:text-blue-600 flex items-center mb-6 w-fit transition-colors">
      <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
      Back to Directory
    </a>

    <div class="bg-[#0A2540] rounded-t-xl p-8 text-white flex flex-col md:flex-row md:items-end justify-between border-b-4 border-blue-500 relative overflow-hidden">
      <!-- Decorative pattern -->
      <div class="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>

      <div class="relative z-10">
        <div class="flex items-center gap-3 mb-3">
           <span class="bg-blue-900 text-blue-200 text-xs font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider shadow-sm">Metals & Mining</span>
           <span class="bg-gray-800 border border-gray-600 text-gray-300 text-xs font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider shadow-sm">Ind AS</span>
        </div>
        <h1 class="text-5xl font-bold mb-2 tracking-tight">Tata Steel Ltd.</h1>
        <p class="text-gray-400 font-light tracking-wide">Financial Reporting & Accounting Intelligence Profile</p>
      </div>
      <div class="mt-6 md:mt-0 text-left md:text-right relative z-10 bg-[#1a365d] p-3 rounded-lg border border-gray-700 w-fit md:w-auto">
         <p class="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-bold">Last Analysis Update</p>
         <p class="font-mono text-sm text-blue-200 border border-gray-600 bg-[#0A2540] px-2 py-0.5 rounded"><!-- CONTENT NEEDED: Date --></p>
      </div>
    </div>

    <div class="bg-white border-x border-b border-gray-200 rounded-b-xl p-8 shadow-sm">
      
      <div class="mb-12">
        <h2 class="text-xl font-bold text-[#0A2540] mb-5 border-b-2 border-gray-100 pb-2 flex items-center">
          <svg class="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Key Accounting Changes (Last 3 Years)
        </h2>
        <ul class="space-y-3">
           <li class="flex items-start">
             <span class="text-blue-500 mr-2 mt-0.5 text-lg">&bull;</span>
             <span class="text-gray-700 leading-relaxed"><!-- CONTENT NEEDED: Note on European Operations Impairment --></span>
           </li>
           <li class="flex items-start">
             <span class="text-blue-500 mr-2 mt-0.5 text-lg">&bull;</span>
             <span class="text-gray-700 leading-relaxed"><!-- CONTENT NEEDED: Implementation of leasing component rules --></span>
           </li>
           <li class="flex items-start">
             <span class="text-blue-500 mr-2 mt-0.5 text-lg">&bull;</span>
             <span class="text-gray-700 leading-relaxed"><!-- CONTENT NEEDED: Change in useful life of blast furnaces --></span>
           </li>
        </ul>
      </div>

      <div class="mb-12">
         <h2 class="text-xl font-bold text-[#0A2540] mb-5 border-b-2 border-gray-100 pb-2 flex items-center">
           <svg class="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
           Topic-Wise Impact Dashboard
         </h2>
         <div class="overflow-x-auto">
           <table class="min-w-full divide-y divide-gray-200 border border-gray-200 shadow-sm rounded-lg overflow-hidden">
             <thead class="bg-gray-50">
               <tr>
                 <th class="px-5 py-4 text-left font-bold text-gray-600 text-[11px] uppercase tracking-wider border-b">Topic</th>
                 <th class="px-5 py-4 text-left font-bold text-gray-600 text-[11px] uppercase tracking-wider border-b">What changed</th>
                 <th class="px-5 py-4 text-left font-bold text-gray-600 text-[11px] uppercase tracking-wider border-b">Why</th>
                 <th class="px-5 py-4 text-left font-bold text-gray-600 text-[11px] uppercase tracking-wider border-b">Financial impact (₹)</th>
                 <th class="px-5 py-4 text-left font-bold text-gray-600 text-[11px] uppercase tracking-wider border-b">Ratio impact</th>
                 <th class="px-5 py-4 text-left font-bold text-gray-600 text-[11px] uppercase tracking-wider border-b">Investor takeaway</th>
               </tr>
             </thead>
             <tbody class="divide-y divide-gray-200 bg-white text-sm text-gray-700">
               <tr class="hover:bg-[#f8f9fc] transition-colors">
                 <td class="px-5 py-4 font-semibold align-top whitespace-nowrap"><a href="/impairment.html" class="text-blue-600 hover:text-blue-800 hover:underline inline-block pb-0.5 border-b border-transparent hover:border-blue-800 transition-colors">Impairment<br><span class="text-xs font-normal text-gray-400">Ind AS 36</span></a></td>
                 <td class="px-5 py-4 align-top"><!-- CONTENT NEEDED --></td>
                 <td class="px-5 py-4 align-top"><!-- CONTENT NEEDED --></td>
                 <td class="px-5 py-4 align-top font-mono text-xs bg-gray-50 border-x border-gray-100"><!-- CONTENT NEEDED --></td>
                 <td class="px-5 py-4 align-top"><!-- CONTENT NEEDED --></td>
                 <td class="px-5 py-4 align-top italic"><!-- CONTENT NEEDED --></td>
               </tr>
               <tr class="hover:bg-[#f8f9fc] transition-colors">
                 <td class="px-5 py-4 font-semibold align-top whitespace-nowrap"><a href="/leases.html" class="text-blue-600 hover:text-blue-800 hover:underline inline-block pb-0.5 border-b border-transparent hover:border-blue-800 transition-colors">Leases<br><span class="text-xs font-normal text-gray-400">Ind AS 116</span></a></td>
                 <td class="px-5 py-4 align-top"><!-- CONTENT NEEDED --></td>
                 <td class="px-5 py-4 align-top"><!-- CONTENT NEEDED --></td>
                 <td class="px-5 py-4 align-top font-mono text-xs bg-gray-50 border-x border-gray-100"><!-- CONTENT NEEDED --></td>
                 <td class="px-5 py-4 align-top"><!-- CONTENT NEEDED --></td>
                 <td class="px-5 py-4 align-top italic"><!-- CONTENT NEEDED --></td>
               </tr>
               <tr class="hover:bg-[#f8f9fc] transition-colors">
                 <td class="px-5 py-4 font-semibold align-top whitespace-nowrap"><a href="/revenue.html" class="text-blue-600 hover:text-blue-800 hover:underline inline-block pb-0.5 border-b border-transparent hover:border-blue-800 transition-colors">Revenue<br><span class="text-xs font-normal text-gray-400">Ind AS 115</span></a></td>
                 <td class="px-5 py-4 align-top"><!-- CONTENT NEEDED --></td>
                 <td class="px-5 py-4 align-top"><!-- CONTENT NEEDED --></td>
                 <td class="px-5 py-4 align-top font-mono text-xs bg-gray-50 border-x border-gray-100"><!-- CONTENT NEEDED --></td>
                 <td class="px-5 py-4 align-top"><!-- CONTENT NEEDED --></td>
                 <td class="px-5 py-4 align-top italic"><!-- CONTENT NEEDED --></td>
               </tr>
             </tbody>
           </table>
         </div>
      </div>

      <div class="bg-gradient-to-r from-red-50 to-white border border-red-200 rounded-lg p-6 shadow-sm relative overflow-hidden">
        <div class="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
        <h2 class="text-lg font-bold text-red-800 mb-3 flex items-center">
          <svg class="h-5 w-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          Intelligence Specific to Tata Steel
        </h2>
        <div class="text-red-900 text-sm leading-relaxed bg-white p-4 rounded border border-red-100">
           <!-- CONTENT NEEDED: specific intelligence -->
           [CONTENT NEEDED: Specific red flags or earnings quality notes]
        </div>
      </div>

    </div>
  </div>
</main>
\`;

const generateGenericList = (title, companies) => \`
<main class="flex-grow bg-[#FAFAFB] py-12">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-8">
      <a href="/real-company-data.html" class="text-sm font-medium text-gray-500 hover:text-blue-600 flex items-center mb-4 transition-colors w-fit">
        <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Back to Directory
      </a>
      <h1 class="text-3xl font-bold text-[#0A2540] mb-2">\${title}</h1>
      <p class="text-gray-600">Companies monitored in the \${title} segment.</p>
    </div>
    
    <div class="bg-white rounded-lg border border-gray-200 shadow-sm divide-y divide-gray-100">
      \${companies.map(c => \`
      <div class="p-5 hover:bg-[#F7F9FC] flex justify-between items-center transition-colors group">
        <span class="font-medium text-[#0A2540] text-lg">\${c.name}</span>
        <a href="\${c.url}" class="text-blue-600 text-sm font-semibold hover:bg-blue-600 hover:text-white px-4 py-1.5 border border-blue-200 rounded transition-colors shadow-sm">\${c.url === '#' ? 'Coming Soon' : 'View Profile'}</a>
      </div>
      \`).join('')}
      
      \${companies.length === 0 ? \`
      <div class="p-8 text-center text-gray-500 italic">
        No companies currently mapped in this category.
      </div>
      \` : ''}
    </div>
  </div>
</main>
\`;

pages['airlines.html'] = generateGenericList("Airlines Industry", [
  {name: "IndiGo (InterGlobe Aviation)", url: "#"},
  {name: "SpiceJet", url: "#"}
]);
pages['telecom.html'] = generateGenericList("Telecom Industry", [
  {name: "Bharti Airtel", url: "#"},
  {name: "Vodafone Idea", url: "#"}
]);
pages['metals.html'] = generateGenericList("Metals & Mining", [
  {name: "Tata Steel", url: "/tata-steel.html"},
  {name: "JSW Steel", url: "#"}
]);
pages['it-services.html'] = generateGenericList("IT Services", [
  {name: "Infosys", url: "#"},
  {name: "Wipro", url: "#"}
]);

pages['a-c.html'] = generateGenericList("Companies: A - C", [
  {name: "Bharti Airtel", url: "#"}
]);
pages['d-f.html'] = generateGenericList("Companies: D - F", []);
pages['g-i.html'] = generateGenericList("Companies: G - I", [
  {name: "Infosys", url: "#"},
  {name: "IndiGo (InterGlobe Aviation)", url: "#"}
]);
pages['j-l.html'] = generateGenericList("Companies: J - L", [
  {name: "JSW Steel", url: "#"}
]);
pages['m-o.html'] = generateGenericList("Companies: M - O", []);
pages['p-r.html'] = generateGenericList("Companies: P - R", [
  {name: "Reliance Industries", url: "#"}
]);
pages['s-u.html'] = generateGenericList("Companies: S - U", [
  {name: "SpiceJet", url: "#"},
  {name: "Tata Steel", url: "/tata-steel.html"},
  {name: "UltraTech Cement", url: "#"}
]);
pages['v-z.html'] = generateGenericList("Companies: V - Z", [
  {name: "Vodafone Idea", url: "#"},
  {name: "Wipro", url: "#"}
]);

pages['all-companies.html'] = generateGenericList("All Monitored Companies (A-Z)", [
  {name: "Bharti Airtel", url: "#"},
  {name: "IndiGo (InterGlobe Aviation)", url: "#"},
  {name: "Infosys", url: "#"},
  {name: "JSW Steel", url: "#"},
  {name: "Reliance Industries", url: "#"},
  {name: "SpiceJet", url: "#"},
  {name: "Tata Steel", url: "/tata-steel.html"},
  {name: "UltraTech Cement", url: "#"},
  {name: "Vodafone Idea", url: "#"},
  {name: "Wipro", url: "#"}
]);

const toRename = ['index.html', 'revenue.html', 'lease.html', 'impairment.html', 'financial-instruments.html'];
toRename.forEach(f => {
  if (fs.existsSync(f) && !fs.existsSync(f.replace('.html', '_old.html'))) {
    fs.renameSync(f, f.replace('.html', '_old.html'));
  }
});

for(const [file, content] of Object.entries(pages)) {
  const fullContent = layoutHead + content + layoutFooter;
  fs.writeFileSync(file, fullContent);
  console.log('Created ' + file);
}

const viteConfigTemplate = \`
import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

const htmlPages = fs.readdirSync(__dirname)
  .filter(file => file.endsWith('.html') && !file.endsWith('_old.html') && file !== 'ppe_intel.html');

const inputObj = {};
htmlPages.forEach(page => {
  const name = page.replace('.html', '');
  inputObj[name] = path.resolve(__dirname, page);
});

export default defineConfig({
  build: {
    rollupOptions: {
      input: inputObj
    }
  }
});
\`;
fs.writeFileSync('vite.config.ts', viteConfigTemplate);
console.log('Updated vite.config.ts');

