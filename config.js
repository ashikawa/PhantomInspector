/*jslint node:true, regexp: true, nomen: true, unparam: true*/
/*global phantom, assert, document, $*/

(function () {
    'use strict';
    var ejs        = require('ejs'),
        _          = require('underscore'),
        template   = require('fs').read('./tmpl/page.ejs'),
        url        = require('url'),
        analytics  = require('./analytics.js'),
        setting;

    function analyticsRequest(responses) {

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
            'url': 'http://www.example.com/',
            'callback': analyticsRequest,
            // 'userAgent': 'iPhone',
            'capture': 'img/capture.png',
            'userName': 'yayoimtadmin',
            'password': 'QuWQzu4q',
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
