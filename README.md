# **YouTube Shorts Hider**

A lightweight Chrome extension that removes all YouTube Shorts from your feed, home page, grid results, and dynamically loaded content.

---

## **Features**

* 🚫 Hides the **Shorts shelf** on the YouTube homepage.
* ✂️ Removes **individual Shorts videos** from feed, search results, subscriptions, and sidebars.
* 🔄 Automatically hides dynamically loaded Shorts using a `MutationObserver`.
* ⚡ Zero configuration — works instantly after installation.
* 🧩 Super lightweight (just a single content script).

---

## **How It Works**

The extension injects a content script (`content.js`) into YouTube pages.
That script:

1. Selects and hides Shorts shelves:

   ```js
   document.querySelectorAll('ytd-rich-shelf-renderer[is-shorts]');
   ```



2. Detects and removes any link pointing to `/shorts/...` and hides its parent video card container:

   ```js
   document.querySelectorAll('a[href^="/shorts/"]');
   ```



3. Continues blocking Shorts even when YouTube loads new elements dynamically (infinite scroll) using:

   ```js
   const observer = new MutationObserver(hideShorts);
   observer.observe(document.body, { childList: true, subtree: true });
   ```



The `manifest.json` registers this script to run on all YouTube pages:


---

## **Installation (Developer Mode)**

1. Download or clone the project folder.
2. Open **chrome://extensions/** in your browser.
3. Enable **Developer Mode** (top-right).
4. Click **Load unpacked**.
5. Select the project folder.

You’re done — Shorts are now gone.

---

## **File Structure**

```
/
├── manifest.json       # Chrome extension config
└── content.js          # Script that hides Shorts on YouTube
```

---

## **Why This Exists**

YouTube aggressively pushes Shorts, and there’s no built-in toggle to disable them.
This extension gives you your old browsing experience back — clean, long-form-focused, and distraction-free.
