// ==UserScript==
// @name         BDWM bbs theme
// @namespace    https://github.com/SourceZh/BDWM-Theme-User-JS/
// @version      0.70
// @description  A simple script for BDWM bbs website theme.
// @author       DoubleZ
// @match        https://bbs.pku.edu.cn/*
// @match        https://www.bdwm.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var src = [ 
    	"/v2/uploads/logo_OaWGYT.gif", // 2017.12.08 大雪将至
    	"/v2/uploads/logo_owAUjB.gif", // 2017.12.02 又到了白色相簿的季节
    	"/v2/uploads/logo_FLCYzX.gif", // 2017.11.11 光棍节你好光棍节再见
    	"/v2/uploads/logo_ze9hjJ.png", // 2017.10.30 万圣节女巫
    	"/v2/uploads/logo_jlem83.gif", // 2017.10.27 翻滚吧，月饼君
        "/v2/uploads/logo_pII925.gif", // 2017.09.29 欢度国庆&中秋
    	"/v2/uploads/logo_A61R4E.gif", // 2017.08.15 懒惰的鸡腿
		"/v2/uploads/logo_TOIvA1.gif", // 2017.05.05 融化的冰淇淋
        "/v2/uploads/logo_OK8m2o.gif", // 2017.02.12 15的月亮16圆
        "/v2/uploads/logo_s9yX2c.gif", // 2017.01.20 鞭炮声里迎新年
        "/v2/uploads/logo_89AF6t.gif", // 2016.12.31 2017新年快乐
        "/v2/uploads/logo_Tn8pTJ.gif", // 2016.11.20 打嗝的雪人
        "/v2/uploads/logo_qmOATc.gif", // 2016.11.09 拒绝狗粮，从我做起
    	"/v2/uploads/logo_tgfeWm.gif", // 摇晃的狐狸
		"/v2/uploads/logo_qFiW2O.gif", // 摇摆吧，月饼君
		"/v2/images/home/logo-rio2016.gif", // 为中国代表团加油
		"/v2/uploads/logo_qGZe5Y.png", // 欢迎新同学
		"/v2/uploads/logo_zrw8cY.gif"  // 祖国生快(67)
	];
    var num = Math.floor(Math.random()*src.length);
    $("#logo a img").attr("src", src[num]);
})();
