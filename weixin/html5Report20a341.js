function html5Report(e, t) {
function n(e) {
if (window.location.href.indexOf("https") > -1) {
var t = new Image;
t.src = "https://huatuospeed.weiyun.com/cgi-bin/r.cgi?" + e;
} else console.log(e);
}
if (typeof Array.prototype.forEach != "function") return;
var r = [];
setTimeout(function() {
if (window.performance && window.performance.timing && window.performance.timing.navigationStart) {
r.push("flag1=" + e[0] + "&flag2=" + e[1] + "&flag3=" + e[2]);
var i = [ "navigationStart", "unloadEventStart", "unloadEventEnd", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd" ];
i.forEach(function(e, t) {
i[t] = window.performance.timing[e];
});
}
i = i.concat(t), i && i.forEach(function(e, t) {
t > 0 && e > 0 && e - i[0] && r.push(t + "=" + (e - i[0]));
}), n(r.join("&"));
}, 3e3);
};