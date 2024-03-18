// ==UserScript==
// @name         Zendesk article French-English toggler
// @version      1.0
// @description  Hit f to switch between the French and English version of a Zendesk article in view mode.
// @author       Flavien
// @include      https://support.360learning.com/hc/*
// ==/UserScript==


function transformAndReload() {
    const currentURL = window.location.href;
    const transformedURL = transformURL(currentURL);

    // Replace the URL in the current window
    window.location.replace(transformedURL);
}

function transformURL(url) {
    if (url.includes("https://support.360learning.com/hc/en-us/articles/")) {
        return url.replace("https://support.360learning.com/hc/en-us/articles/", "https://support.360learning.com/hc/fr/articles/");
    } else if (url.includes("https://support.360learning.com/hc/fr/articles/")) {
        return url.replace("https://support.360learning.com/hc/fr/articles/", "https://support.360learning.com/hc/en-us/articles/");
    } else {
        return url;
    }
}

// Add the event listener.
function init() {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'f') {
            transformAndReload();
        }
    })
}

init();
