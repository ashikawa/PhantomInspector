/*jslint node: true, nomen: true, unparam: true*/
/*global phantom*/

(function () {
    'use strict';

    var config     = require('./config').setting,
        _          = require('underscore'),
        // util       = require('util'),
        url        = require('url'),
        webpage    = require('webpage'),
        async      = require('async'),
        ejs        = require('ejs'),
        template   = require('fs').read('./tmpl/page.ejs'),
        asyncStack = [],
        timeout    = 1500;

    _(config).each(function (setting, key, config) {

        function process(callback) {

            var page    = webpage.create(),
                records = [];

            if (setting.userAgent) {
                page.settings.userAgent  = setting.userAgent;
            }

            function render() {
                console.log(ejs.render(template, {
                    setting: setting,
                    records: records,
                    url: url
                }));

                if (setting.capture) {
                    page.render(setting.capture);
                }
            }

            function resourceReceived(response) {

                if (response.stage === 'end') { return; }

                if (setting.isrecord(response)) {
                    records.push(response);
                }
            }

            function pageOpen(status) {

                if (status !== 'success') {
                    console.log('FAIL to load the address');

                    return;
                }

                setTimeout(function () {
                    render();
                    page.close();
                    callback();
                }, timeout);
            }

            // page.onResourceRequested = function (request) {};
            page.onResourceReceived = resourceReceived;
            page.open(setting.url, pageOpen);
        }

        asyncStack.push(process);
    });

    asyncStack.push(function (callback) {
        phantom.exit();
        callback();
    });

    async.series(asyncStack);
}());