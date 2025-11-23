/**
 * Generic Comments Lazy Loader
 * Loads comment widgets (Cusdis, Disqus, Giscus, Utterances) only when they're about to become visible
 * This prevents blocking Mermaid and other critical scripts
 */
(function() {
  'use strict';

  /**
   * Generic lazy loader for any comment system
   * @param {string} containerId - The ID of the container element
   * @param {function} loadCallback - Function to call when loading should happen
   */
  function createLazyLoader(containerId, loadCallback) {
    const container = document.getElementById(containerId);
    if (!container || container.getAttribute('data-lazy-load') !== 'true') return;

    let loaded = false;

    function load() {
      if (loaded) return;
      loaded = true;
      loadCallback(container);
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            load();
            observer.unobserve(container);
          }
        });
      }, {
        rootMargin: '400px' // Load 400px before it comes into view
      });
      
      observer.observe(container);
    } else {
      // Fallback for browsers without IntersectionObserver
      if (document.readyState === 'complete') {
        load();
      } else {
        window.addEventListener('load', load);
      }
    }
  }

  // Cusdis loader
  createLazyLoader('cusdis_thread', function(container) {
    const lang = container.getAttribute('data-lang');
    
    if (lang) {
      const langScript = document.createElement('script');
      langScript.src = 'https://cusdis.com/js/widget/lang/' + lang + '.js';
      langScript.async = true;
      document.body.appendChild(langScript);
    }

    const mainScript = document.createElement('script');
    mainScript.src = 'https://cusdis.com/js/cusdis.es.js';
    mainScript.async = true;
    document.body.appendChild(mainScript);
  });

  // Disqus loader
  createLazyLoader('disqus_thread', function(container) {
    const shortname = container.getAttribute('data-shortname');
    if (!shortname) {
      console.error('Disqus shortname not provided');
      return;
    }

    window.disqus_shortname = shortname;
    
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//' + shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
  });

  // Giscus loader
  createLazyLoader('giscus_thread', function(container) {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    
    // Transfer all data attributes from the container to the script
    const attributes = container.attributes;
    for (let i = 0; i < attributes.length; i++) {
      const attr = attributes[i];
      if (attr.name.startsWith('data-') && attr.name !== 'data-lazy-load') {
        script.setAttribute(attr.name, attr.value);
      }
    }
    
    container.appendChild(script);
  });

  // Utterances loader
  createLazyLoader('utterances_thread', function(container) {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    
    // Transfer data attributes to script attributes (Utterances doesn't use 'data-' prefix)
    const repo = container.getAttribute('data-repo');
    const issueTerm = container.getAttribute('data-issue-term');
    const theme = container.getAttribute('data-theme');
    const label = container.getAttribute('data-label');
    
    if (repo) script.setAttribute('repo', repo);
    if (issueTerm) script.setAttribute('issue-term', issueTerm);
    if (theme) script.setAttribute('theme', theme);
    if (label) script.setAttribute('label', label);
    
    container.appendChild(script);
  });
})();

