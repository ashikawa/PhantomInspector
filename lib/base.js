/*jslint node: true, nomen: true, unparam: true*/
/*global define*/
(function () {
    'use strict';

    var ejs        = require('ejs'),
        template   = require('fs').read('./lib/base.ejs');

    function render(page, networks, config) {

        return ejs.render(template, {
            page: page,
            networks: networks,
            config: config,
        });
    }

    exports.render = render;
}());
