// ==UserScript==
// @name         Trello notif crusher
// @version      1.0
// @description  Use U to open the notification modal of Trello, and E to mark all as read.
// @author       Flavien
// @match        https://trello.com/*
// @downloadURL  https://raw.githubusercontent.com/saintsaens/userscripts/main/trello-notif-crusher.user.js
// @updateURL    https://raw.githubusercontent.com/saintsaens/userscripts/main/trello-notif-crusher.user.js
// ==/UserScript==


function clickNotificationButton() {
        document.querySelector('button[data-testid="header-notifications-button"]').click();
        // Blur the button, otherwise clicking again will just focus it.
        document.querySelector('button[data-testid="header-notifications-button"]').blur();
}

function clickMarkAllAsRead() {
    document.querySelector('button[data-testid="mark-all-read-button"]').click();
}

// Map clicking actions to keyboard shortcuts.
function keyupToNotifPanel(e) {
    // Enable the keyboard shortcut only of the active element of the page is <body> (initial state) or <div> (the notification panel is open)
    if (document.activeElement.tagName !== "BODY" && document.activeElement.tagName !== "DIV"){
        return;
    }
    switch(e.key){
        // Open the panel.
        case "u":
            clickNotificationButton();
            break;
        // Mark all as read + close the panel.
        case "e":
            clickMarkAllAsRead();
            clickNotificationButton();
    }
}

// Add the event listener.
(function() {
    'use strict';
    document.addEventListener('keyup', keyupToNotifPanel, false);
})();
