(function() {
var e = {}, t = {}, n = {
parse: function(e) {
var t = {}, n = e.split("&"), r, i, s;
for (var o = 0, u = n.length; o < u; o++) {
r = n[o].split("=");
if (r.length != 2) continue;
i = r[0], s = r[1];
if (i.indexOf("[]") != -1) {
i = i.replace("[]", ""), t[i] = t[i] || [], t[i].push(s);
continue;
}
t[i] = decodeURIComponent(s);
}
return t;
},
serialize: function(e) {
var t = [], n, r, i;
for (n in e) {
if (!e.hasOwnProperty(n)) continue;
r = e[n];
if (r instanceof Array) {
i = r;
for (var s = 0, o = i.length; s < o; s++) r = encodeURIComponent(i[s]), t.push(n + "[]=" + r);
continue;
}
r = encodeURIComponent(r), t.push(n + "=" + r);
}
return t.join("&");
}
}, r = function(t, r, i) {
var s;
typeof t == "string" && (t = n.parse(t));
if (!(s = t.type)) return;
e[s] && e[s](t, r, i);
}, i = function() {
function e(e, t) {
var n = "";
arguments.length < 2 ? n = "target error - target and name are both requied" : typeof e != "object" ? n = "target error - target itself must be window object" : typeof t != "string" && (n = "target error - target name must be string type");
if (n) throw new Error(n);
this.target = e, this.name = t;
}
function t(e, t) {
this.targets = {}, this.name = e, this.listenFunc = [], n = t || n, this.initListen();
}
var n = "mp_mmbizweb", r = "postMessage" in window;
return r ? e.prototype.send = function(e) {
this.target.postMessage(e, "*");
} : e.prototype.send = function(e) {
var t = window.navigator[n + this.name];
if (typeof t != "function") throw new Error("target callback function is not defined");
t(e, window);
}, t.prototype.addTarget = function(t, n) {
var r = new e(t, n);
this.targets[n] = r;
}, t.prototype.initListen = function() {
var e = this, t = function(t) {
typeof t == "object" && t.data && (t = t.data);
for (var n = 0; n < e.listenFunc.length; n++) e.listenFunc[n](t);
};
r ? "addEventListener" in document ? window.addEventListener("message", t, !1) : "attachEvent" in document && window.attachEvent("onmessage", t) : window.navigator[n + this.name] = t;
}, t.prototype.listen = function(e) {
this.listenFunc.push(e);
}, t.prototype.clear = function() {
this.listenFunc = [];
}, t.prototype.send = function(e) {
var t = this.targets, n;
for (n in t) t.hasOwnProperty(n) && t[n].send(e);
}, t;
}();
t.init = function(e) {
window.parent != window ? (t.messenger = new i("iframe1"), t.messenger.addTarget(e, "parent")) : (t.messenger = new i("parent"), t.messenger.addTarget(e, "iframe1")), t.messenger.listen(function(e) {
e = n.parse(e), r(e);
});
}, location.href.indexOf("mp.weixin.qq.com") == -1 && t.init(window.parent), t.on = function(t, n) {
e[t] = n;
}, t.post = function(e) {
t.messenger.send(n.serialize(e));
}, window.Iframe = t;
})();