// New Line Guide - Content Script
// Adds a helpful guide next to textarea elements

(function() {
  'use strict';

  const VERSION = '1.1.0';
  console.log('[New Line Guide] Version:', VERSION);
  console.log('[New Line Guide] Extension loaded on:', window.location.hostname);

  // Function to add guide to an element (textarea or contenteditable)
  function addGuideToElement(element) {
    // Check if guide already exists
    if (element.dataset.newlineGuideAdded) {
      return;
    }

    console.log('[New Line Guide] Adding guide to element:', element);
    console.log('[New Line Guide] Element classes:', element.className);
    console.log('[New Line Guide] Element parent:', element.parentElement);

    // Mark as processed
    element.dataset.newlineGuideAdded = 'true';

    // Create guide element
    const guide = document.createElement('div');
    guide.className = 'newline-guide';
    guide.textContent = 'new line = shift + enter';
    guide.setAttribute('data-newline-guide', 'true');

    // Find the best parent container (avoid overflow containers)
    let container = element.parentElement;

    // Try to find a container without overflow that we can position relative to
    let current = container;
    let depth = 0;
    while (current && depth < 8) {
      const style = window.getComputedStyle(current);
      const hasOverflow = style.overflow !== 'visible' || style.overflowY !== 'visible' || style.overflowX !== 'visible';
      console.log('[New Line Guide] Checking parent depth', depth, ':', current.tagName, 'position:', style.position, 'overflow:', hasOverflow);

      // Look for a positioned container without overflow, or go higher up
      if (!hasOverflow && (style.position === 'relative' || style.position === 'absolute')) {
        container = current;
        console.log('[New Line Guide] Found good container:', container);
        break;
      }
      current = current.parentElement;
      depth++;
    }

    // If container doesn't have position, set it
    const containerStyle = window.getComputedStyle(container);
    if (containerStyle.position === 'static') {
      console.log('[New Line Guide] Setting container position to relative');
      container.style.position = 'relative';
    }

    // Add guide to container
    container.appendChild(guide);

    console.log('[New Line Guide] Guide added successfully to container:', container.tagName, container.className);
  }

  // Function to process all input elements on the page
  function processInputElements() {
    // Find textareas
    const textareas = document.querySelectorAll('textarea');
    // Find contenteditable elements
    const editables = document.querySelectorAll('[contenteditable="true"]');

    const allElements = [...textareas, ...editables];
    console.log('[New Line Guide] Found', textareas.length, 'textareas and', editables.length, 'contenteditable elements');

    allElements.forEach(element => {
      // Check if element is visible
      const rect = element.getBoundingClientRect();
      const isVisible = element.offsetParent !== null && rect.width > 0 && rect.height > 0;
      const style = window.getComputedStyle(element);
      const isDisplayed = style.display !== 'none' && style.visibility !== 'hidden';

      console.log('[New Line Guide] Element dimensions:', rect.width, 'x', rect.height, 'visible:', isVisible, 'displayed:', isDisplayed);

      // Only add guide to visible elements with reasonable size
      if (isVisible && isDisplayed && rect.width > 100 && rect.height > 30) {
        addGuideToElement(element);
      }
    });
  }

  // Initial processing with delay
  function init() {
    console.log('[New Line Guide] Initializing...');
    processInputElements();

    // Try again after 1 second (for SPAs)
    setTimeout(processInputElements, 1000);
    setTimeout(processInputElements, 2000);
    setTimeout(processInputElements, 3000);
    setTimeout(processInputElements, 5000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Watch for dynamically added elements
  const observer = new MutationObserver((mutations) => {
    let shouldProcess = false;

    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.tagName === 'TEXTAREA' || node.getAttribute('contenteditable') === 'true') {
            shouldProcess = true;
          } else if (node.querySelectorAll) {
            const textareas = node.querySelectorAll('textarea');
            const editables = node.querySelectorAll('[contenteditable="true"]');
            if (textareas.length > 0 || editables.length > 0) {
              shouldProcess = true;
            }
          }
        }
      });
    });

    if (shouldProcess) {
      console.log('[New Line Guide] New input element detected, processing...');
      setTimeout(processInputElements, 100);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Re-process on focus (for dynamically shown elements)
  document.addEventListener('focusin', (e) => {
    const isTextarea = e.target.tagName === 'TEXTAREA';
    const isEditable = e.target.getAttribute('contenteditable') === 'true';

    if (isTextarea || isEditable) {
      console.log('[New Line Guide] Input element focused');
      if (!e.target.dataset.newlineGuideAdded) {
        console.log('[New Line Guide] Adding guide on focus');
        setTimeout(() => {
          const rect = e.target.getBoundingClientRect();
          console.log('[New Line Guide] Element dimensions on focus:', rect.width, 'x', rect.height);
          if (rect.width > 100 && rect.height > 30) {
            addGuideToElement(e.target);
          }
        }, 100);
      }
    }
  });

  // Also try when elements become visible (intersection observer)
  const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const isTextarea = entry.target.tagName === 'TEXTAREA';
        const isEditable = entry.target.getAttribute('contenteditable') === 'true';

        if (isTextarea || isEditable) {
          console.log('[New Line Guide] Input element became visible');
          setTimeout(() => {
            const rect = entry.target.getBoundingClientRect();
            if (rect.width > 100 && rect.height > 30) {
              addGuideToElement(entry.target);
            }
          }, 100);
        }
      }
    });
  });

  // Observe all input elements
  setInterval(() => {
    document.querySelectorAll('textarea:not([data-newline-guide-observed]), [contenteditable="true"]:not([data-newline-guide-observed])').forEach(element => {
      element.setAttribute('data-newline-guide-observed', 'true');
      intersectionObserver.observe(element);
    });
  }, 1000);

  console.log('[New Line Guide] Monitoring started');
})();
