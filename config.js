/*jslint node:true, regexp: true, nomen: true, unparam: true*/
/*global phantom, assert, document, $*/

(function () {
    'use strict';
    var ejs        = require('ejs'),
        _          = require('underscore'),
        template   = require('fs').read('./tmpl/page.ejs'),
        url        = require('url'),
        analytics  = require('./analytics.js'),
        setting,
        iPhone = 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) '
            + 'AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25';

    function analyticsRequest(responses, setting) {

        var records = _(responses).filter(function (element) {
            return (element.url.indexOf('www.google-analytics.com/collect') !== -1);
        });

        console.log(ejs.render(template, {
            setting: this,
            records: records,
            url: url,
            analytics: analytics
        }));
    }

    setting = [
        {
            'name': 'トップ (PC)',
            'url': 'http://example.com/',
            'callback': analyticsRequest
            // 'capture': 'capture.png'
        },
        {
            'name': 'トップ (SP)',
            'url': 'http://example.com/',
            'userAgent': iPhone,
            'callback': analyticsRequest
        }
    ];

    exports.setting = setting;
}());
