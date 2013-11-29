/*jslint node:true, regexp: true, nomen: true*/
/*global phantom, assert, document, $*/

(function () {
    'use strict';

    var setting,
        iPhone = 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) '
            + 'AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25';

    function analyticsRequest(response) {
        if (response.url.indexOf('www.google-analytics.com/collect') !== -1) {
            return true;
        }

        return false;
    }

    setting = [
        {
            'name': 'トップ (PC)',
            'url': 'http://example.com/',
            'isrecord': analyticsRequest
            // 'capture': 'capture.png'
        },
        {
            'name': 'トップ (SP)',
            'url': 'http://example.com/',
            'userAgent': iPhone,
            'isrecord': analyticsRequest
        }
    ];

    exports.setting = setting;
}());
