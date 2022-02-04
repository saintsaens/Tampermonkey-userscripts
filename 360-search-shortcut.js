// ==UserScript==
// @name         360 quick search
// @namespace    http://360learning.com/
// @version      1.1
// @description  Use ⌘K (or CTRL-K) to open the quick search.
// @author       Flavien
// @match        https://*.360learning.com/home*
// @match        https://*.360learning-dev.com/home*
// @grant        none
// ==/UserScript==


function openQuickSearch() {
    // Run .click() only if element is not undefined.
    document.querySelector(".search-section")?.click();
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
