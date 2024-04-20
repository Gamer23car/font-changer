// ==UserScript==
// @name         Font Changer (for Roblox)
// @version      2024-04-18
// @description  none
// @author       gamer23car
// @match        https://www.roblox.com/*
// @match        https://devforum.roblox.com/*
// @match        https://create.roblox.com/*
// @icon         none
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var font = "cursive"; // change this to change the font family chosen

    function changeFont () {
        var elems = document.body.getElementsByTagName("*");
         for (let i = 0; i < elems.length; i++) {
           elems[i].style.fontFamily = font
        }
    }

    const observer = new MutationObserver((mutations) => {
         changeFont();
    });

    const config = { attributes: true, childList: true, subtree: true };
    observer.observe(document.body, config); // set it to check for mutations on the document body (website)
    changeFont();
})();