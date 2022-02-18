// ==UserScript==
// @name         360 next activity
// @version      1.0
// @description  Use j go to the next activity.
// @author       Flavien
// @include      https://*.360learning.com/course/play*
// @include      https://*.360learning-dev.com/course/play*
// @downloadURL  https://raw.githubusercontent.com/saintsaens/userscripts/main/360-next-shortcut.js
// @updateURL    https://raw.githubusercontent.com/saintsaens/userscripts/main/360-next-shortcut.js
// ==/UserScript==


function clickNext() {
    // Run .click() only if element is not undefined.
    document.querySelector(".button-regular")?.click();
}

// Add the event listener.
function init() {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'j' && document.activeElement.tagName == "BODY") {
            clickNext();
        }
    })
}

init();
