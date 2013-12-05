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

    function analyticsRequest(page, networks) {

        var records,
            title,
            metas;

        records = _(networks).filter(function (element) {
            return (element.url.indexOf('www.google-analytics.com/collect') !== -1);
        });

        title = page.evaluate(function () {
            return $('title').text();
        });

        metas = page.evaluate(function () {
            return $('meta[name],meta[property]').map(function (i, element) {
                var $element = $(element);

                return {
                    'name':     $element.attr('name'),
                    'property': $element.attr('property'),
                    'content':  $element.attr('content'),
                };
            });
        });

        console.log(ejs.render(template, {
            title: title,
            metas: metas,
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
