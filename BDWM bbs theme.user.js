// ==UserScript==
// @name         BDWM bbs theme
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  A simple script for BDWM bbs website theme.
// @author       DoubleZ
// @match        https://bbs.pku.edu.cn/*
// @match        https://www.bdwm.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var src = ["/v2/uploads/logo_qmOATc.gif",//11.09 拒绝狗粮，从我做起
    			"/v2/uploads/logo_tgfeWm.gif", // 摇晃的狐狸
    			"/v2/uploads/logo_qFiW2O.gif", // 翻滚吧，月饼君
    			"/v2/images/home/logo-rio2016.gif", // 为中国代表团加油
    			"/v2/uploads/logo_qGZe5Y.png", // 欢迎新同学
    			"/v2/uploads/logo_zrw8cY.gif" // 祖国生快(67)
    		];
    if ($("#logo a img").attr()!=src[0] && $("#logo a img").attr()!="/v2/uploads/logo_ibfb2M.png"){
        alert("There is a new theme, please update the script file!");
    }
    var num = Math.floor(Math.random()*3);
    $("#logo a img").attr("src", src[num]);
})();