// ==UserScript==
// @name         Zendesk article edit mode
// @version      1.1
// @description  Hit e to open a Zendesk article in edit mode, unless search form is focused.
// @author       Flavien
// @include      https://support.360learning.com/hc/en-us/articles/*
// @include      https://support.360learning.com/hc/fr/articles/*
// ==/UserScript==

function clickNext() {
    document.querySelector(".zd-hc-button")?.click();
}

function isSearchFocused() {
    const searchForm = document.querySelector("form[role='search']");
    return searchForm?.classList.contains("is-focused");
}

function init() {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'e' && !isSearchFocused()) {
            clickNext();
        }
    });
}

init();
