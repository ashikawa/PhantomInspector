/*jslint node:true, regexp: true, nomen: true, unparam: true*/
/*global phantom, assert, document, $*/

(function () {
    'use strict';

    var analytics = require('./lib/universal_analytics.js'),
        metas     = require('./lib/metas.js'),
        // catalyst  = require('./lib/catalyst.js'),
        setting;

    function analyticsRequest(page, networks) {
        console.log(metas.render(page, networks));
        console.log(analytics.render(page, networks));
        // console.log(catalyst.render(page, networks));
    }

    setting = [
        {
            'name': 'トップ (PC)',
            'url': 'http://www.example.com/',
            'callback': analyticsRequest,
            // 'userAgent': 'iPhone',
            // 'capture': 'img/capture.png',
            // 'userName': 'xxxxx',
            // 'password': 'yyyyy',
        },
        // {
        //     'name': 'トップ (SP)',
        //     'url': 'http://example.com/',
        //     'callback': analyticsRequest,
        //     'userAgent': 'iPhone'
        // }
    ];

    exports.setting = setting;
}());
