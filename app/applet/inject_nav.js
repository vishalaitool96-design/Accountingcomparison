const fs = require('fs');
const files = [
  'lease.html',
  'ppe.html',
  'financial-instruments.html',
  'revenue.html',
  'deferred-tax.html',
  'consolidation.html',
  'impairment.html',
  'esop.html',
  'cashflows.html'
];

const scriptStr = `
    <!-- Sticky Jump Nav Script -->
    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;

        const walker = document.createTreeWalker(mainContent, NodeFilter.SHOW_TEXT, null, false);
        const sections = [];
        let node;
        while(node = walker.nextNode()) {
          const text = node.nodeValue.trim();
          const match = text.match(/^SECTION\\s+([A-Z](?:\\.1)?)\\s*:\\s*(.*)/i);
          if (match) {
            const letter = match[1].toUpperCase();
            const title = match[2];
            
            let parent = node.parentNode;
            let container = parent;
            // Find the closest wrapper
            while(container && container !== mainContent && !container.classList.contains('shrink-0')) {
                container = container.parentNode;
            }
            if (!container || container === mainContent) container = parent;
            
            const id = 'sec-' + letter.toLowerCase().replace('.', '-');
            if (!container.id) {
               container.id = id;
            }
            
            // For sticky nav to not cover the content when jumping
            container.style.scrollMarginTop = '80px';
            
            sections.push({ 
                id: container.id, 
                letter, 
                title: title.replace('(EDITABLE)', '').replace('(Project Only)', '').trim(), 
                isEditable: text.includes('EDITABLE') 
            });
          }
        }

        if (sections.length > 0) {
            const navWrapper = document.createElement('div');
            navWrapper.id = "sticky-jump-nav";
            navWrapper.className = "sticky top-0 z-[100] bg-slate-50/95 backdrop-blur-md pb-4 pt-4 -mx-4 px-4 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8 border-b-2 border-slate-200/50 shadow-sm flex items-center gap-2 overflow-x-auto print:hidden";
            
            // Hide scrollbar styling for this nav
            navWrapper.style.scrollbarWidth = 'none';

            // Add an intro label
            const label = document.createElement('span');
            label.className = "shrink-0 uppercase tracking-wider text-[10px] font-bold text-slate-400 mr-2";
            label.innerText = "Jump to:";
            navWrapper.appendChild(label);

            sections.forEach(sec => {
              const a = document.createElement('a');
              a.href = '#' + sec.id;
              
              let colorClass = sec.isEditable 
                ? "bg-amber-100 border-amber-300 text-amber-800 hover:bg-amber-200" 
                : "bg-white border-slate-300 text-slate-600 hover:bg-slate-100 hover:text-slate-900";
                
              a.className = \`shrink-0 px-3 py-1.5 border rounded-full text-xs font-bold transition-colors focus:ring-2 focus:ring-indigo-500 whitespace-nowrap \${colorClass}\`;
              a.innerText = sec.letter + ' - ' + sec.title;
              
              // Smooth scroll
              a.addEventListener('click', (e) => {
                  e.preventDefault();
                  document.getElementById(sec.id).scrollIntoView({ behavior: 'smooth' });
                  // update url hash without jumping
                  history.pushState(null, null, '#' + sec.id);
              });

              navWrapper.appendChild(a);
            });

            mainContent.insertBefore(navWrapper, mainContent.firstChild);
        }
      });
    </script>
`;

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('sticky-jump-nav')) {
      content = content.replace('</body>', scriptStr + '\n  </body>');
      fs.writeFileSync(file, content);
      console.log('Injected properly into', file);
    } else {
      console.log('Already exists in', file);
    }
  } else {
    console.log(file, 'not found');
  }
}
