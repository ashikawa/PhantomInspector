/*jslint node: true, nomen: true, unparam: true*/
/*global define, $*/
(function () {
    'use strict';
    var ejs        = require('ejs'),
        template   = require('fs').read('./lib/metas.ejs');

    function render(page, networks, config) {

        var metas,
            title;

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

        return ejs.render(template, {
            page: page,
            networks: networks,
            metas: metas,
            title: title,
        });
    }

    exports.render = render;
}());
