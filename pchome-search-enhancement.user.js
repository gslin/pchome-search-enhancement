// ==UserScript==
// @name         PChome search enhancement
// @namespace    https://wiki.gslin.org/wiki/PChomeSearchEnhancement
// @version      20180223.0
// @description  Ignore .orderReplenish & .soldOut in PChome search page.
// @author       Gea-Suan Lin <darkkiller@gmail.com>
// @license      MIT
// @match        https://ecshweb.pchome.com.tw/search/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var content = document.getElementById('CONTENT');
    var tr = 1 / 3;

    var ob = new window.MutationObserver(function(el){
        window.jQuery('.col3f:has(li.orderNotyet), .col3f:has(li.orderReplenish), .col3f:has(li.soldOut)', el.target).css('opacity', tr);
    });

    ob.observe(content, {
        childList: true,
        subtree: true,
    });

    window.jQuery('.col3f:has(li.orderNotyet), .col3f:has(li.orderReplenish), .col3f:has(li.soldOut)', content).css('opacity', tr);
})();
