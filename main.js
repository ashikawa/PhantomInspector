/*jslint node: true, nomen: true, unparam: true*/
/*global phantom*/

(function () {
    'use strict';

    var config     = require('./config').setting,
        _          = require('underscore'),
        // util       = require('util'),
        webpage    = require('webpage'),
        async      = require('async'),
        asyncStack = [],
        timeout    = 1000;

    _(config).each(function (setting, key, config) {

        function process(callback) {

            var page    = webpage.create(),
                records = [];

            if (setting.userAgent) {
                page.settings.userAgent  = setting.userAgent;
            }

            function pageTimeout() {
                setting.callback.call(setting, records);

                if (setting.capture) {
                    page.render(setting.capture);
                }
            }

            function resourceReceived(response) {

                if (response.stage === 'end') { return; }

                records.push(response);
            }

            function pageOpen(status) {

                if (status !== 'success') {
                    console.log('FAIL to load the address');

                    return;
                }

                setTimeout(function () {
                    pageTimeout();
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