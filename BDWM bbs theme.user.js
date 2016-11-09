// ==UserScript==
// @name         BDWM bbs theme
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  A simple script for BDWM bbs website theme.
// @author       DoubleZ
// @match        https://bbs.pku.edu.cn/*
// @match        https://www.bdwm.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var src = ["/v2/uploads/logo_tgfeWm.gif", "/v2/uploads/logo_qFiW2O.gif", "/v2/images/home/logo-rio2016.gif", "/v2/uploads/logo_qGZe5Y.png", "/v2/uploads/logo_zrw8cY.gif"];
    var num = Math.floor(Math.random()*5);
    $("#logo a img").attr("src", src[num]);
})();