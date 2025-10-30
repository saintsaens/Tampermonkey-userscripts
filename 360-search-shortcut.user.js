// ==UserScript==
// @name         360 quick search
// @version      1.3
// @description  Use ⌘K (or CTRL-K) to open the quick search and close it like Escape.
// @author       Flavien
// @include      https://*.360learning.com/home*
// @include      https://*.360learning-dev.com/home*
// @include      https://*.360mooc.com/home*
// @downloadURL  https://raw.githubusercontent.com/saintsaens/360-search-shortcut/main/360-search-shortcut.js
// @updateURL    https://raw.githubusercontent.com/saintsaens/360-search-shortcut/main/360-search-shortcut.js
// ==/UserScript==

function openQuickSearch() {
    const quickSearchHeader = document.querySelector(".quick-search-bar .header");
    if (!quickSearchHeader) return;
    quickSearchHeader.click();

    // Wait a bit for the modal to appear and focus the input
    setTimeout(() => {
        const input = document.querySelector(".quick-search-bar input, .modal-backdrop input");
        if (input) input.focus();
    }, 100); // 100ms delay to ensure modal is rendered
}

function closeQuickSearch() {
    // Mimic clicking outside the modal by clicking the backdrop
    document.querySelector(".header-container")?.click();
}

function isModalOpened() {
    return !!document.querySelector(".quick-search-bar .opened");
}

function toggleQuickSearch() {
    if (isModalOpened()) {
        closeQuickSearch();
    } else {
        openQuickSearch();
    }
}

function init() {
    document.addEventListener('keydown', (event) => {
        if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
            event.preventDefault();
            toggleQuickSearch();
        }
    });
}

init();
