window.AssetsRetryWebpackPluginINFO = {};
AssetsRetryWebpackPluginINFO.report = function (type, extend) {
    var xhr = new XMLHttpRequest();
    var timestamp = parseInt(Date.now() / 1000, 10);
    var url =
        'this.options.reportDomain/livecenter/report/api/v1/webMonitor/sendWebMonitorStartInfo?process=h5Report&eventType=' +
        type +
        '&extend=' +
        extend +
        '&systemCode=this.systemCode';
    if (AssetsRetryWebpackPluginINFO.partnerCode) {
        url = url + '&partnerCode=' + AssetsRetryWebpackPluginINFO.partnerCode;
    }
    if (AssetsRetryWebpackPluginINFO.clientUniqueId) {
        url = url + '&clientUniqueId=' + AssetsRetryWebpackPluginINFO.clientUniqueId;
    }
    if (AssetsRetryWebpackPluginINFO.customerId) {
        url = url + '&customerId=' + AssetsRetryWebpackPluginINFO.customerId;
    }

    var useUrl = encodeURI(url);
    xhr.open('GET', useUrl, true);
    xhr.setRequestHeader('timestamp', timestamp);
    xhr.send();
};
window.assetsRetry({
    domain: this.options.domain,
    maxRetryCount: 1,
    onRetry: function (currentUrl, originalUrl, statistics) {
        console.log('onRetry' + currentUrl + JSON.stringify(statistics));
        var extend = JSON.stringify({
            currentUrl: encodeURI(currentUrl),
            statistics: JSON.stringify(statistics),
        });
        AssetsRetryWebpackPluginINFO.report('onRetry', extend);
        return currentUrl;
    },
    onSuccess: function (currentUrl, statistics) {
        console.log('onSuccess' + currentUrl + JSON.stringify(statistics));
        if (statistics?.retryTimes > 0) {
            var extend = JSON.stringify({
                currentUrl: encodeURI(currentUrl),
                statistics: JSON.stringify(statistics),
            });
            AssetsRetryWebpackPluginINFO.report('onSuccess', extend);
        }
    },
    onFail: function (currentUrl, statistics) {
        console.log('onFail' + currentUrl + JSON.stringify(statistics));
        var extend = JSON.stringify({
            currentUrl: encodeURI(currentUrl),
            statistics: JSON.stringify(statistics),
        });
        AssetsRetryWebpackPluginINFO.report('onFail', extend);
    },
});
