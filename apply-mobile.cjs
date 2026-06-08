const fs = require('fs');

const filesToFix = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const mobileFix = `
<!-- MOBILE RESPONSIVE FIXES -->
<style id="mobile-responsive-overrides">
  @media (max-width: 767px) {
    /* GENERAL RULES */
    body {
      overflow-x: hidden !important;
      line-height: 1.6 !important;
    }
    
    /* NAVIGATION BAR */
    nav.bg-white.border-b.overflow-x-auto {
      display: none;
      flex-direction: column !important;
      width: 100%;
      height: auto !important;
      overflow-y: auto;
      max-height: 60vh;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    }
    nav.bg-white.border-b.overflow-x-auto.show-mobile-nav {
      display: flex !important;
    }
    nav.bg-white.border-b.overflow-x-auto a {
      width: 100% !important;
      text-align: left !important;
      padding: 12px 20px !important;
      white-space: normal !important;
      border-bottom: 1px solid #e2e8f0 !important;
      border-left: 4px solid transparent !important;
    }
    nav.bg-white.border-b.overflow-x-auto a.border-b-4.border-indigo-600 {
      border-bottom: 1px solid #e2e8f0 !important;
      border-left: 4px solid #4f46e5 !important;
    }
    
    #mobile-nav-toggle {
      display: flex !important;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      min-width: 44px;
      width: 44px !important;
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.3);
      color: white;
      border-radius: 4px;
      font-size: 20px;
      cursor: pointer;
      position: absolute;
      top: 0px;
      right: 0px;
      z-index: 100;
    }

    /* HOMEPAGE TOPIC CARDS & SECTION B */
    header h1 { padding-right: 48px !important; }
    .grid {
      grid-template-columns: 1fr !important;
    }
    h1 { font-size: 22px !important; }
    h2 { font-size: 20px !important; }
    h3, h4 { font-size: 18px !important; }
    p, li { font-size: 14px !important; }
    
    /* COMPARISON TABLES */
    .overflow-x-auto {
      -webkit-overflow-scrolling: touch !important;
    }
    @keyframes swipe-indicate {
      0%, 100% { transform: translateX(-3px); }
      50% { transform: translateX(3px); }
    }
    .overflow-x-auto:has(table)::before {
      content: "\\2190  Swipe horizontally to compare  \\2192";
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: #4f46e5;
      text-align: center;
      padding: 10px 0;
      font-weight: 700;
      background: #eef2ff;
      border-bottom: 1px solid #c7d2fe;
      animation: swipe-indicate 2s ease-in-out infinite;
    }
    table {
      font-size: 13px !important;
    }
    table th, table td {
      min-width: 180px !important;
    }

    /* INPUT FORM (SECTION B) */
    input, select {
      width: 100% !important;
    }
    .flex.items-center.gap-2, .flex.justify-between.items-center.flex-wrap {
      flex-direction: column !important;
      align-items: stretch !important;
    }

    /* BUTTONS */
    button, a.bg-blue-600 {
      min-height: 44px !important;
      width: 100% !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }
    
    /* DIAGNOSTIC CONSOLE / PANEL */
    #diagnostic-panel {
      font-size: 13px !important;
      width: 100% !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  }

  @media (min-width: 768px) {
    #mobile-nav-toggle {
      display: none !important;
    }
  }
</style>

<script id="mobile-responsive-script">
  document.addEventListener("DOMContentLoaded", () => {
    if (!document.querySelector('meta[name="viewport"]')) {
      const meta = document.createElement('meta');
      meta.name = "viewport";
      meta.content = "width=device-width, initial-scale=1.0";
      document.head.appendChild(meta);
    }
    
    const headerInner = document.querySelector('header > div');
    const navBar = document.querySelector('nav.bg-white.border-b.overflow-x-auto');
    
    if (headerInner && navBar && !document.getElementById('mobile-nav-toggle')) {
      headerInner.style.position = 'relative';
      
      const btn = document.createElement('button');
      btn.id = 'mobile-nav-toggle';
      btn.innerHTML = '☰';
      btn.setAttribute('aria-label', 'Toggle Menu');
      
      headerInner.appendChild(btn);
      
      btn.addEventListener('click', () => {
        const isOpen = navBar.classList.contains('show-mobile-nav');
        if (isOpen) {
          navBar.classList.remove('show-mobile-nav');
          btn.innerHTML = '☰';
        } else {
          navBar.classList.add('show-mobile-nav');
          btn.innerHTML = '✕';
        }
      });
    }
  });
</script>
`;

for (let file of filesToFix) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('<!-- MOBILE RESPONSIVE FIXES -->')) {
    content = content.replace(/<!-- MOBILE RESPONSIVE FIXES -->[\s\S]*<\/script>\s*(<\/body>|)/, mobileFix + '\\n$1');
  } else {
    content = content.replace('</body>', mobileFix + '\\n</body>');
  }
  fs.writeFileSync(file, content);
  console.log('Applied mobile fix to ' + file);
}
