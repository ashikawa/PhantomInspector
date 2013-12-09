/*jslint node:true, regexp: true, nomen: true, unparam: true*/
/*global phantom, assert, document, $*/

(function () {
    'use strict';

    var base      = require('./lib/base.js'),
        analytics = require('./lib/universal_analytics.js'),
        metas     = require('./lib/metas.js'),
        // catalyst  = require('./lib/catalyst.js'),
        setting;

    function analyticsRequest(page, networks, config) {
        console.log(base.render(page, networks, config));
        console.log(metas.render(page, networks, config));
        console.log(analytics.render(page, networks, config));
        // console.log(catalyst.render(page, networks, config));
    }

    setting = [
        {
            'name': 'トップ (PC)',
            'url': 'http://www.example.com/',
            'timeout': analyticsRequest,
            // 'userAgent': 'iPhone',
            // 'capture': 'img/capture.png',
            // 'userName': 'xxxxx',
            // 'password': 'yyyyy',
        },
        // {
        //     'name': 'トップ (SP)',
        //     'url': 'http://example.com/',
        //     'timeout': analyticsRequest,
        //     'userAgent': 'iPhone'
        // }
    ];

    exports.setting = setting;
}());
