const fs = require('fs');

const shareCode = `
<style>
  .share-menu {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 10000;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  
  .share-trigger {
    background: #2c3e50;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 40px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s;
  }
  
  .share-trigger:hover {
    background: #1a252f;
    transform: translateY(-1px);
  }
  
  .share-dropdown {
    position: absolute;
    bottom: 100%;
    right: 0;
    margin-bottom: 10px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    min-width: 200px;
    overflow: hidden;
    display: none;
  }
  
  .share-dropdown.show {
    display: block;
  }
  
  .share-dropdown button {
    width: 100%;
    padding: 12px 16px;
    border: none;
    background: white;
    text-align: left;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: background 0.2s;
  }
  
  .share-dropdown button:hover {
    background: #f0f0f0;
  }
  
  .share-dropdown hr {
    margin: 0;
    border: none;
    border-top: 1px solid #eee;
  }
  
  .toast {
    position: fixed;
    bottom: 80px;
    right: 20px;
    background: #333;
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 14px;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
    z-index: 10001;
  }
  
  .toast.show {
    opacity: 1;
  }
</style>

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
  // Helper: Show toast notification
  function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message || 'Copied to clipboard!';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
  }
  
  // Helper: Get formatted HTML content of the main content area
  function getPageContentHTML() {
    // Method 1: Copy specific container (recommended)
    const contentArea = document.querySelector('main, article, .content, .page-content, body');
    if (contentArea) {
      const clone = contentArea.cloneNode(true);
      // Remove scripts, iframes, and interactive elements
      clone.querySelectorAll('script, iframe, button.share-menu, .share-menu').forEach(el => el.remove());
      return clone.innerHTML;
    }
    return document.body.innerHTML;
  }
  
  // Share via Native Web Share API
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
        // Fallback: copy link
        await navigator.clipboard.writeText(window.location.href);
        showToast('Link copied! (Native share not supported)');
      }
      document.getElementById('shareDropdown').classList.remove('show');
    });
  }
  
  // Copy Link Only
  document.getElementById('copyLinkBtn').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast('Page link copied!');
    } catch (err) {
      showToast('Failed to copy link');
    }
    document.getElementById('shareDropdown').classList.remove('show');
  });
  
  // Copy Full Page Content with Formatting
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
      showToast('Page content copied with formatting!');
    } catch (err) {
      console.error('Copy failed:', err);
      // Fallback for older browsers
      try {
        const text = document.body.innerText;
        await navigator.clipboard.writeText(text);
        showToast('Content copied as text (fallback mode)');
      } catch (e) {
        showToast('Failed to copy content');
      }
    }
    document.getElementById('shareDropdown').classList.remove('show');
  });
  
  // Toggle dropdown
  const trigger = document.getElementById('shareTrigger');
  const dropdown = document.getElementById('shareDropdown');
  
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('show');
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!trigger.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('show');
    }
  });
</script>
</body>`;

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'ppe_intel.html');

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');
  if (!content.includes('id="shareTrigger"')) {
    content = content.replace(/<\/body>\s*(<\/html>)*$/i, shareCode + '\n</html>');
    fs.writeFileSync(f, content);
    console.log('Added share button to', f);
  }
}
