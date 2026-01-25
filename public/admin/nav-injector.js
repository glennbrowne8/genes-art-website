(function() {
  console.log('Admin Nav Injector Loaded');

  let artworkList = [];
  let navBar = null;

  // 1. Fetch Artwork List
  fetch('artwork.json')
    .then(res => {
      if (!res.ok) throw new Error('Static JSON returned ' + res.status);
      return res.json();
    })
    .then(data => {
      artworkList = data;
      console.log('Artwork list loaded:', artworkList.length);
      checkUrl(); 
    })
    .catch(err => {
      console.error('Failed to load artwork list:', err);
    });

  // 2. Create the Floating Bar
  function createNavBar() {
    const bar = document.createElement('div');
    bar.id = 'artwork-nav-bar';
    bar.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #222;
      color: white;
      padding: 12px 25px;
      border-radius: 50px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.4);
      z-index: 10000;
      display: none;
      align-items: center;
      gap: 20px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 14px;
      border: 2px solid #444;
    `;
    
    document.body.appendChild(bar);
    return bar;
  }

  navBar = createNavBar();

  // 3. Update the Bar Content
  function updateBar(slug) {
    // Clean slug just in case
    const cleanSlug = slug.replace(/\/$/, '');
    
    const idx = artworkList.findIndex(item => item.slug === cleanSlug);
    
    // Log for debugging
    console.log('Current Slug:', cleanSlug, 'Index:', idx);

    if (idx === -1) {
      navBar.style.display = 'none';
      return;
    }

    const prevItem = artworkList[idx - 1]; // Newer
    const nextItem = artworkList[idx + 1]; // Older

    const createLink = (item, text, icon) => {
      if (!item) {
        return `<span style="opacity:0.3; cursor:default; color:#888;">${icon} ${text}</span>`;
      }
      // We use a span with onclick instead of an anchor to have full control
      return `<span 
        onclick="(function(){ 
          var newHash = '/collections/artwork/entries/${item.slug}';
          if(window.location.hash !== '#' + newHash) {
            window.location.hash = newHash;
            // Force a reload to ensure the CMS picks up the new entry
            setTimeout(function(){ window.location.reload(); }, 100);
          }
        })()"
        style="cursor:pointer; color:white; text-decoration:none; font-weight:bold; transition:color 0.2s;"
        onmouseover="this.style.color='#f4a460'" 
        onmouseout="this.style.color='white'"
      >
        ${icon} ${text}
      </span>`;
    };

    navBar.innerHTML = `
      ${createLink(prevItem, 'Newer', '←')}
      <div style="display:flex; flex-direction:column; align-items:center;">
        <span style="border-left:1px solid #555; border-right:1px solid #555; padding:0 15px; color:#aaa; font-variant-numeric: tabular-nums;">
          ${idx + 1} / ${artworkList.length}
        </span>
        <span style="font-size:10px; color:#F4A460; margin-top:2px; font-weight:bold;">Mark SOLD items!</span>
      </div>
      ${createLink(nextItem, 'Older', '→')}
    `;

    navBar.style.display = 'flex';
  }

  // 4. Watch for URL Changes
  function checkUrl() {
    const hash = window.location.hash;
    console.log('Checking Hash:', hash);

    // Regex to match: #/collections/artwork/entries/SLUG
    const match = hash.match(/#\/collections\/artwork\/entries\/([^?]+)/);

    if (match && match[1] && artworkList.length > 0) {
      const currentSlug = match[1];
      updateBar(currentSlug);
    } else {
      if (navBar) navBar.style.display = 'none';
    }
  }

  // Listen for hash changes
  window.addEventListener('hashchange', checkUrl);
  setInterval(checkUrl, 1000);

  // ---------------------------------------------------------
  // PUBLISH BUTTON FIXER
  // Makes the main "Publish" button immediately trigger "Publish now"
  // instead of just opening the menu.
  // ---------------------------------------------------------
  setInterval(function() {
    // Find the main Publish button (exact text match to avoid confusing with "Publishing..." or "Published")
    // We look for buttons in the header area (usually distinct from the arrow)
    const buttons = Array.from(document.querySelectorAll('button'));
    const pubBtn = buttons.find(b => b.textContent.trim() === 'Publish');

    if (pubBtn && !pubBtn.dataset.fixed) {
      console.log('Publish Button Fix applied');
      pubBtn.dataset.fixed = 'true';
      
      pubBtn.addEventListener('click', function(e) {
        // Only trigger if we clicked the main button, not if the event bubbled from somewhere else
        // (though usually these are distinct)
        
        console.log('Publish clicked - attempting auto-confirm');
        
        // The default action opens the menu. We let that happen.
        // Then we hunt for "Publish now".
        setTimeout(() => {
          // Look for the menu item. It's usually in a portal at the end of the body.
          const menuItems = Array.from(document.querySelectorAll('[role="menuitem"], li, button, span'));
          const publishNowBtn = menuItems.find(el => el.textContent.trim().toLowerCase() === 'publish now');

          if (publishNowBtn) {
            console.log('Found "Publish now" - clicking it');
            publishNowBtn.click();
            
            // Optional: Hide the menu explicitly if we can find it, to reduce flash?
            // The click usually closes it anyway.
          } else {
            console.log('Could not find "Publish now" option');
          }
        }, 50); // Small delay to allow React to render the dropdown
      });
    }
  }, 1000);

})();