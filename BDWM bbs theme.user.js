// ==UserScript==
// @name         BDWM bbs theme
// @namespace    https://github.com/SourceZh/BDWM-Theme-User-JS/
// @version      0.65.1
// @description  A simple script for BDWM bbs website theme.
// @author       DoubleZ
// @match        https://bbs.pku.edu.cn/*
// @match        https://www.bdwm.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var src = [ "/v2/uploads/logo_pII925.gif", // 2017.09.29 欢度国庆&中秋
                "/v2/uploads/logo_tgfeWm.gif", // 摇晃的狐狸
                "/v2/uploads/logo_A61R4E.gif", // 2017.08.15 懒惰的鸡腿
                "/v2/uploads/logo_TOIvA1.gif", // 2017.05.05 融化的冰淇凌 
                "/v2/uploads/logo_OK8m2o.gif", // 2017.02.12 15的月亮16圆
                "/v2/uploads/logo_s9yX2c.gif", // 2017.01.20 鞭炮声里迎新年
                "/v2/uploads/logo_Tn8pTJ.gif", // 2016.11.20 打嗝的雪人
                "/v2/uploads/logo_89AF6t.gif", // 2016.11.31 2017新年快乐
                "/v2/uploads/logo_qmOATc.gif", // 2016.11.09 拒绝狗粮，从我做起
    			"/v2/uploads/logo_qFiW2O.gif", // 翻滚吧，月饼君
    			"/v2/images/home/logo-rio2016.gif", // 为中国代表团加油
    			"/v2/uploads/logo_qGZe5Y.png", // 欢迎新同学
    			"/v2/uploads/logo_zrw8cY.gif" // 祖国生快(67)
    		];
    var ischange = true;
    var curimage = $("#logo a img").attr("src");
    for (var i = src.length - 1; i >= 0; i--) {
        if(src[i] == curimage){
            ischange = false;
        }
    }
    if (ischange && $("#logo a img").attr("src")!="/v2/uploads/logo_ibfb2M.png"){
        alert("There is a new theme, please update the script file!");
    }else{
        var num = Math.floor(Math.random()*2);
        $("#logo a img").attr("src", src[num]);
    }
})();
