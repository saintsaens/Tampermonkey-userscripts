// ==UserScript==
// @name         Zendesk article edit mode
// @version      1.2
// @description  Hit e to open a Zendesk article in edit mode, unless search form is focused.
// @author       Flavien
// @include      https://support.360learning.com/hc/en-us/articles/*
// @include      https://support.360learning.com/hc/fr/articles/*
// ==/UserScript==

function clickEditButton() {
    const host = [...document.querySelectorAll('*')].find(el => el.shadowRoot);
    const btn = [...host?.shadowRoot.querySelectorAll('button') ?? []].find(btn => btn.textContent.trim() === 'Edit article');
    btn?.click();
}

function isSearchFocused() {
    const searchForm = document.querySelector("form[role='search']");
    return searchForm?.classList.contains("is-focused");
}

function init() {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'e' && !isSearchFocused()) {
            clickEditButton();
        }
    });
}

init();
