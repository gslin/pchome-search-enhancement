// ==UserScript==
// @name         PChome search enhancement
// @namespace    https://wiki.gslin.org/wiki/PChomeSearchEnhancement
// @version      20180324.4
// @description  Ignore non-buyable items in PChome search page.
// @author       Gea-Suan Lin <darkkiller@gmail.com>
// @license      MIT
// @match        https://ecshweb.pchome.com.tw/search/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let sheet = document.createElement('style');
    sheet.innerHTML = '.nonbuyable {opacity:0.33;}';
    document.getElementsByTagName('head')[0].appendChild(sheet);

    let content = document.getElementById('CONTENT');
    let selector = '.col3f:has(li.orderNotyet), .col3f:has(li.orderReplenish), .col3f:has(li.soldOut)';

    let ob = new window.MutationObserver(function(el){
        window.jQuery(selector, el.target).addClass('nonbuyable');
    });

    ob.observe(content, {
        childList: true,
        subtree: true,
    });

    window.jQuery(selector).addClass('nonbuyable');
})();
