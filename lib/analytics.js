/*jslint node: true, nomen: true, unparam: true*/
/*global define*/
(function () {
    'use strict';

    var _   = require('underscore'),
        url = require('url'),
        ejs      = require('ejs'),
        template = require('fs').read('./lib/analytics.ejs'),
        paramators = {
            'utmac':  'Account String',
            'utmcc':  'Cookie values',
            'utmcn':  'Starts a new campaign session',
            'utmcr':  'Indicates a repeat campaign visit',
            'utmcs':  'Language encoding',
            'utmdt':  'Page title',
            'utme':   'Extensible Parameter',
            'utmfl':  'Flash Version',
            'utmhn':  'Host Name.',
            'utmhid': 'Cache Buster with AdSense',
            'utmipc': 'Product Code',
            'utmipn': 'Product Name',
            'utmipr': 'Unit Price',
            'utmiqt': 'Quantity',
            'utmiva': 'Variations on an item',
            'utmje':  'Java-enabled',
            'utmn':   'Cache Buster',
            'utmp':   'Page request of the current page',
            'utmr':   'Referral, complete URL',
            'utmsc':  'Screen color depth',
            'utmsr':  'Screen resolution',
            'utmt':   'Indicates the type of request',
            'utmtci': 'Billing City',
            'utmtco': 'Billing Country',
            'utmtid': 'Order ID, URL-encoded string',
            'utmtrg': 'Billing region',
            'utmtsp': 'Shipping cost',
            'utmtst': 'Affiliation',
            'utmtto': 'Total. Values as for unit and price',
            'utmttx': 'Tax. Values as for unit and price',
            'utmul':  'Browser language',
            'utmwv':  'Tracking code version',
        };

    function convert(value) {
        if (paramators[value]) {
            return paramators[value] + '(' + value + ')';
        }

        return value;
    }

    function render(page, networks, config) {

        networks = _(networks).filter(function (value) {
            return (value.url.indexOf('www.google-analytics.com/__utm.gif') !== -1);
        });

        networks = _(networks).map(function (value, key, networks) {
            value.parsed = url.parse(value.url, true, true);

            return value;
        });

        return ejs.render(template, {
            page: page,
            networks: networks,
            convert: convert,
        });
    }

    exports.render = render;
}());
