/*jslint node: true, unparam: true*/
/*global define*/
(function () {
    'use strict';

// https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters?hl=ja
    var paramators = {
        'aip': 'Anonymize IP',
        'an': 'Application Name',
        'av': 'Application Version',
        'cc': 'Campaign Content',
        'cd': 'Content Description',
        'cd[1-9][0-9]*': 'Custom Dimension',
        'ci': 'Campaign ID',
        'cid': 'Client ID',
        'ck': 'Campaign Keyword',
        'cm': 'Campaign Medium',
        'cm[1-9][0-9]*': 'Custom Metric',
        'cn': 'Campaign Name',
        'cs': 'Campaign Source',
        'cu': 'Currency Code',
        'dclid': 'Google Display Ads ID',
        'de': 'Document Encoding',
        'dh': 'Document Host Name',
        'dl': 'Document location URL',
        'dns': 'DNS Time',
        'dp': 'Document Path',
        'dr': 'Document Referrer',
        'dt': 'Document Title',
        'ea': 'Event Action',
        'ec': 'Event Category',
        'el': 'Event Label',
        'ev': 'Event Value',
        'exd': 'Exception Description',
        'exf': 'Is Exception Fatal?',
        'fl': 'Flash Version',
        'gclid': 'Google AdWords ID',
        'ic': 'Item Code',
        'in': 'Item Name',
        'ip': 'Item Price',
        'iq': 'Item Quantity',
        'iv': 'Item Category',
        'je': 'Java Enabled',
        'ni': 'Non-Interaction Hit',
        'pdt': 'Page Download Time',
        'plt': 'Page Load Time',
        'qt': 'Queue Time',
        'rrt': 'Redirect Response Time',
        'sa': 'Social Action',
        'sc': 'Session Control',
        'sd': 'Screen Colors',
        'sn': 'Social Network',
        'sr': 'Screen Resolution',
        'srt': 'Server Response Time',
        'st': 'Social Action Target',
        't': 'Hit type',
        'ta': 'Transaction Affiliation',
        'tcp': 'TCP Connect Time',
        'ti': 'Transaction ID',
        'tid': 'Tracking ID / Web Property ID',
        'tr': 'Transaction Revenue',
        'ts': 'Transaction Shipping',
        'tt': 'Transaction Tax',
        'ul': 'User Language',
        'utc': 'User timing category',
        'utl': 'User timing label',
        'utt': 'User timing time',
        'utv': 'User timing variable name',
        'v': 'Protocol Version',
        'vp': 'Viewport size',
        'xid': 'Experiment ID',
        'xvar': 'Experiment Variant ',
        'z': 'Cache Buster'
    };

    exports.convert = function (value) {
        if (paramators[value]) {
            return paramators[value] + '(' + value + ')';
        }
        return value;
    };
}());
