const fs = require('fs');

const navCSS = `
<style>
  /* Navbar Container */
  .navbar {
    background-color: #1a202c;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    position: relative;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    font-family: inherit;
  }
  
  .nav-brand {
    font-size: 1.25rem;
    font-weight: bold;
    padding: 1rem;
    color: white;
    text-decoration: none;
    letter-spacing: 0.05em;
  }

  .nav-menu {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  .nav-item {
    position: relative;
  }
  
  .nav-link {
    display: block;
    padding: 1.25rem 1.5rem;
    color: white;
    text-decoration: none;
    font-weight: 500;
    border: none;
    background: none;
    font-size: 0.95rem;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;
    font-family: inherit;
  }

  .nav-link:hover, .nav-item:hover > .nav-link {
    background-color: #2d3748;
  }

  .dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    min-width: 220px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 0.375rem 0.375rem;
    overflow: hidden;
    border: 1px solid #e2e8f0;
    border-top: none;
    z-index: 1000;
  }
  
  .mega-menu {
    min-width: 400px;
    left: auto;
    right: 0;
  }

  .dropdown-item {
    display: block;
    padding: 0.85rem 1.25rem;
    color: #4a5568;
    text-decoration: none;
    border-bottom: 1px solid #edf2f7;
    transition: background-color 0.15s, color 0.15s;
    font-size: 0.95rem;
  }

  .dropdown-item:last-child {
    border-bottom: none;
  }

  .dropdown-item:hover {
    background-color: #f7fafc;
    color: #2b6cb0;
  }

  .view-all-link {
    color: #2b6cb0;
    font-weight: 600;
    text-decoration: none;
    display: block;
    text-align: center;
    background-color: #f8fafc;
  }

  .view-all-link:hover {
    text-decoration: underline;
    background-color: #f1f5f9;
  }

  .mega-grid {
    display: flex;
    padding: 1.25rem;
    gap: 2rem;
  }

  .mega-column {
    flex: 1;
  }

  .mega-title {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: #a0aec0;
    letter-spacing: 0.05em;
    font-weight: bold;
    margin-bottom: 0.75rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #e2e8f0;
  }
  
  .mega-link {
    display: block;
    padding: 0.4rem 0;
    color: #4a5568;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.15s;
  }
  
  .mega-link:hover {
    color: #2b6cb0;
    text-decoration: underline;
  }

  .view-all-block {
    background-color: #f8fafc;
    border-top: 1px solid #e2e8f0;
  }

  .mobile-toggle {
    display: none;
    background: none;
    border: 1px solid #4a5568;
    border-radius: 0.25rem;
    color: white;
    font-size: 1.25rem;
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    margin-right: 0.5rem;
    z-index: 1001;
  }

  @media (min-width: 769px) {
    .nav-item:hover > .dropdown-menu {
      display: block;
      animation: fadeIn 0.2s ease-in-out;
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .nav-link.dropdown-toggle::after {
    content: '';
    display: inline-block;
    margin-left: 0.5em;
    vertical-align: middle;
    border-top: 4px solid;
    border-right: 4px solid transparent;
    border-bottom: 0;
    border-left: 4px solid transparent;
  }

  @media (max-width: 768px) {
    .mobile-toggle { display: block; z-index: 1002; }
    .nav-menu {
      display: none; flex-direction: column; position: absolute;
      top: 100%; left: 0; width: 100%; background-color: #2d3748;
      z-index: 9999;
    }
    .nav-menu.active { display: flex; }
    .nav-link { padding: 1rem 1.5rem; border-bottom: 1px solid #4a5568; width: 100%; text-align: left; }
    .nav-link.no-arrow::after { content: none; }
    .nav-link.dropdown-toggle::after { float: right; margin-top: 0.4rem; }
    .dropdown-menu { position: static; display: block; box-shadow: none; border-radius: 0; background-color: #1a202c; width: 100%; border: none; }
    .dropdown-menu.active { display: block; }
    .dropdown-item { color: #e2e8f0; border-bottom-color: #4a5568; padding-left: 2.5rem; }
    .mega-menu { min-width: auto; }
    .mega-grid { flex-direction: column; gap: 1rem; padding: 1rem 2.5rem; }
    .mega-title { border-bottom-color: #4a5568; color: #a0aec0; }
    .mega-link { color: #e2e8f0; }
    .view-all-block { background-color: #1a202c; border-color: #4a5568; padding: 0; }
    .view-all-block .view-all-link { background-color: #1a202c; color: #90cdf4; padding: 1rem; border-top: 1px solid #4a5568; }
  }
</style>
`;

const navHTML = `
<nav class="navbar shrink-0">
  <div style="display:flex;align-items:center;">
    <a href="index.html" class="nav-brand">FinStandards</a>
  </div>
  <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle menu">☰</button>
  <ul class="nav-menu" id="nav-menu">
    <li class="nav-item">
      <a href="index.html" class="nav-link no-arrow" style="background-color: #2d3748;">Home</a>
    </li>
    <li class="nav-item">
      <button class="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">Standards Comparison</button>
      <div class="dropdown-menu" style="max-height: 480px; overflow-y: auto;">
        <a href="lease.html" class="dropdown-item">1. Lease Accounting</a>
        <a href="ppe.html" class="dropdown-item">2. Property, Plant &amp; Equipment (PPE)</a>
        <a href="financial-instruments.html" class="dropdown-item">3. Financial Instruments</a>
        <a href="revenue.html" class="dropdown-item">4. Revenue Recognition</a>
        <a href="deferred-tax.html" class="dropdown-item">5. Deferred Tax</a>
        <a href="consolidation.html" class="dropdown-item">6. Consolidation</a>
        <a href="impairment.html" class="dropdown-item">7. Impairment Accounting</a>
        <a href="esop.html" class="dropdown-item">8. Share-Based Payments (ESOP)</a>
      </div>
    </li>
    <li class="nav-item">
      <button class="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">Real Company Data</button>
      <div class="dropdown-menu mega-menu">
        <div class="mega-grid">
          <div class="mega-column">
            <div class="mega-title">By Industry</div>
            <a href="#" class="mega-link">Airlines</a>
            <a href="#" class="mega-link">Telecom</a>
            <a href="#" class="mega-link">Metals</a>
          </div>
          <div class="mega-column">
            <div class="mega-title">By Alphabet</div>
            <a href="#" class="mega-link">A-C</a>
            <a href="#" class="mega-link">D-F</a>
            <a href="#" class="mega-link font-medium">G-I</a>
          </div>
        </div>
        <div class="view-all-block">
          <a href="#" class="view-all-link" style="padding: 1rem;">View all companies &rarr;</a>
        </div>
      </div>
    </li>
  </ul>
</nav>
`;

const scriptHTML = `
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    if(mobileToggle){
      mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    }

    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const dropdownMenu = toggle.nextElementSibling;
          dropdownToggles.forEach(otherToggle => {
            if (otherToggle !== toggle) {
              otherToggle.nextElementSibling.classList.remove('active');
              otherToggle.setAttribute('aria-expanded', 'false');
            }
          });
          dropdownMenu.classList.toggle('active');
          toggle.setAttribute('aria-expanded', dropdownMenu.classList.contains('active'));
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.navbar') && window.innerWidth <= 768) {
        if(navMenu) navMenu.classList.remove('active');
        document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.remove('active'));
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        if(navMenu) navMenu.classList.remove('active');
        document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.remove('active'));
      }
    });
  });
</script>
`;

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'cashflows.html' && f !== 'ppe_intel.html');

for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');

  // Insert CSS
  if(!content.includes('/* Navbar Container */')) {
     content = content.replace('</head>', navCSS + '\\n</head>');
  }

  // Find existing nav to replace
  // It could be <nav class="navbar shrink-0"> or the old <nav class="bg-white border-b border-slate-200 ...">
  const oldNavStart = content.indexOf('<nav class="bg-white');
  const oldNavEnd = content.indexOf('</nav>', oldNavStart);
  
  if (oldNavStart !== -1 && oldNavEnd !== -1) {
    content = content.substring(0, oldNavStart) + navHTML + content.substring(oldNavEnd + 6);
  } else {
    // maybe it already has navbar
    const newNavStart = content.indexOf('<nav class="navbar');
    const newNavEnd = content.indexOf('</nav>', newNavStart);
    if(newNavStart !== -1 && newNavEnd !== -1) {
        content = content.substring(0, newNavStart) + navHTML + content.substring(newNavEnd + 6);
    }
  }

  // Insert script
  if(!content.includes("dropdownToggles = document.querySelectorAll('.dropdown-toggle')")) {
    content = content.replace('</body>', scriptHTML + '\n</body>');
  }

  // Save
  fs.writeFileSync(file, content);
  console.log('Updated ' + file + ' successfully!');
}
