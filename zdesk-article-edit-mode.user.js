// ==UserScript==
// @name         Zendesk article edit mode
// @version      1.0
// @description  Hit e to open a Zendesk article in edit mode.
// @author       Flavien
// @include      https://support.360learning.com/hc/*
// ==/UserScript==


function clickNext() {
    // Run .click() only if element is not undefined.
    document.querySelector(".zd-hc-button")?.click();
}

// Add the event listener.
function init() {
    document.addEventListener('keydown', (event) => {
        if (event.metaKey || event.ctrlKey) && event.key === 'e') {
            clickNext();
        }
    })
}

init();
