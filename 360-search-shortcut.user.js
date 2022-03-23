// ==UserScript==
// @name         360 quick search
// @version      1.2
// @description  Use ⌘K (or CTRL-K) to open the quick search.
// @author       Flavien
// @include      https://*.360learning.com/home*
// @include      https://*.360learning-dev.com/home*
// @include      https://*.360mooc.com/home*
// @downloadURL  https://raw.githubusercontent.com/saintsaens/360-search-shortcut/main/360-search-shortcut.js
// @updateURL    https://raw.githubusercontent.com/saintsaens/360-search-shortcut/main/360-search-shortcut.js
// ==/UserScript==


function openQuickSearch() {
    // Run .click() only if element is not undefined.
    document.querySelector(".search-button")?.click();
}

function closeQuickSearch() {
    document.querySelector(".modal-backdrop .cross")?.click();
}

function isModalOpened() {
    // Convert element/undefined into boolean true/false. Amazing.
    return !!document.querySelector(".modal-backdrop");
}

function toggleQuickSearch() {
    if (isModalOpened()) {
        closeQuickSearch();
    }
    else {
        openQuickSearch();
    }
}

// Add the event listener.
function init() {
    document.addEventListener('keydown', (event) => {
        if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
            toggleQuickSearch();
        }
    })
}

init();
