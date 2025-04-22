// ==UserScript==
// @name         Zendesk article French-English toggler
// @version      1.1
// @description  Hit f to switch between the French and English version of a Zendesk article in view mode.
// @author       Flavien
// @include      https://support.360learning.com/hc/en-us/articles/*
// @include      https://support.360learning.com/hc/fr/articles/*
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

function isSearchFocused() {
    const searchForm = document.querySelector("form[role='search']");
    return searchForm?.classList.contains("is-focused");
}

// Add the event listener.
function init() {
    document.addEventListener('keydown', (event) => {
        // Prevent action if the find function is triggered (cmd/ctrl + f) or search form is focused
        if ((event.key === 'f' && (event.metaKey || event.ctrlKey)) || isSearchFocused()) {
            return;
        }

        // Trigger the switch only when the 'f' key is pressed without cmd/ctrl
        if (event.key === 'f') {
            transformAndReload();
        }
    });
}

init();
