// ==UserScript==
// @name         360 quick search
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Use the ⌘K shortcut to open the quick search.
// @author       Flavien
// @match        https://*.360learning.com/home*
// @grant        none
// ==/UserScript==


// Click the search bar at the top left.
function openQuickSearch() {
    // Only run if the search section is accessible.
    var isSearchClosed = document.getElementsByClassName("search-section");
    if (isSearchClosed.length > 0) {
        document.getElementsByClassName("search-section")[0].click();
    }
}

// Close the search panel at the top right.
function closeQuickSearch() {
    // Only run if there is a cross at the top right.
    var isSearchOpen = document.getElementsByClassName("cross");
    if (isSearchOpen.length > 0) {
        document.getElementsByClassName("cross")[0].click();
    }
}

function keyupToQuickSearch(e) {
    // Define the second key pressed.
    if (e.key == 'k') {
        // Close the search panel if it is open.
        closeQuickSearch();
        // Open the search panel if it is closed.
        openQuickSearch();
    }
}

function keydownToQuickSearch(e) {
    // Define the first key pressed.
    if (e.ctrlKey || e.metaKey) {
        document.addEventListener('keyup', keyupToQuickSearch, false);
    }
}

// Add the event listener.
(function() {
    document.addEventListener('keydown', keydownToQuickSearch, false);
})();
