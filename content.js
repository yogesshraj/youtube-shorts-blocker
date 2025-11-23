function hideShorts() {
  // Hide Shorts shelves
  document.querySelectorAll('ytd-rich-shelf-renderer[is-shorts]').forEach(el => {
    el.style.display = 'none';
  });

  // Hide individual Shorts videos in grids/feeds
  document.querySelectorAll('a[href^="/shorts/"]').forEach(el => {
    // Find the parent container of the video to hide the entire card
    let videoRenderer = el.closest('ytd-rich-item-renderer, ytd-grid-video-renderer, ytd-compact-video-renderer');
    if (videoRenderer) {
      videoRenderer.style.display = 'none';
    }
  });
}

// Initial run
hideShorts();

// Use a MutationObserver to handle dynamically loaded content
const observer = new MutationObserver(hideShorts);
observer.observe(document.body, { childList: true, subtree: true }); 
