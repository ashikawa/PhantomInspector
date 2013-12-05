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
        timeout    = 1000,
        userAgents;

    userAgents = {
        'iPhone': 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) '
            + 'AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25'
    };

    _(config).each(function (setting, key, config) {

        function process(callback) {

            var page    = webpage.create(),
                records = [];

            if (setting.userAgent) {
                page.settings.userAgent  = userAgents[setting.userAgent] || setting.userAgent;
            }

            function pageTimeout() {
                setting.callback(records);

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

                    page.close();
                    callback();

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