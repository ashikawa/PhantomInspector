/*jslint node:true, regexp: true, nomen: true, unparam: true*/
/*global phantom, assert, document, $*/

(function () {
    'use strict';

    var base      = require('./lib/base.js'),
        analytics = require('./lib/universal_analytics.js'),
        // metas     = require('./lib/metas.js'),
        // catalyst  = require('./lib/catalyst.js'),
        setting;

    function analyticsRequest(page, networks, config) {
        console.log(base.render(page, networks, config));
        // console.log(metas.render(page, networks, config));
        console.log(analytics.render(page, networks, config));
        // console.log(catalyst.render(page, networks, config));
    }

    setting = [
        {
            'name': 'トップ', // 見出し
            'url': 'http://example.com/', // アクセスするURL
            // 'onOpen': myfunc1, // ページ読み込み時に実行する関数
            'timeout': analyticsRequest, // ページ読み込み後、一定時間後に実行する関数
            // 'userAgent': 'iPhone', // userAgent 
            // 'capture': 'img/capture.png',　// キャプチャ画像名
            // 'viewportSize': {width: 400, height: 600}, // ウインドウサイズ
            // 'userName': 'xxxxx', // Basic 認証ID
            // 'password': 'yyyyy', // Basic 認証パスワード
        },
        // {
        //     'name': 'トップ (SP)',
        //     'url': 'http://example.com/',
        // }
    ];

    exports.setting = setting;
}());
