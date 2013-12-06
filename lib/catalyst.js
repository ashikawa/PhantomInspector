/*jslint node: true, nomen: true, unparam: true*/
/*global define*/
(function () {
    'use strict';

    // https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters?hl=ja
    var _   = require('underscore'),
        url = require('url'),
        ejs      = require('ejs'),
        template = require('fs').read('./lib/catalyst.ejs');

    function render(page, networks, config) {

        networks = _(networks).filter(function (value) {
            return (value.url.indexOf('112.2o7.net') !== -1);
        });

        networks = _(networks).map(function (value, key, networks) {
            value.parsed = url.parse(value.url, true, true);

            return value;
        });

        return ejs.render(template, {
            page: page,
            networks: networks,
        });
    }

    exports.render = render;
}());
