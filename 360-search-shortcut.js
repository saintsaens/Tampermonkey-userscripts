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

// Add the event listener.
(function() {
    // Inifiatize an array to keep track of the command key pressed.
    let keysPressed = {};

    // Store the value of the first key pressed.
    document.addEventListener('keydown', (event) => {
        keysPressed[event.key] = true;

        // Run the action if the first key is command, and the second key is k.
        if (keysPressed['Meta'] && event.key == 'k') {
            // Close the search panel if it is open.
            closeQuickSearch();
            // Open the search panel if it is closed.
            openQuickSearch();
        }
    });

    // Initialize back the array to nothing.
    document.addEventListener('keyup', (event) => {
        keysPressed[event.key] = false;
    });


    //document.addEventListener('keydown', keydownToQuickSearch, false);
})();
