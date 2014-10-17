(function() {
var e = {}, t = {}, n = "about:blank", r = {
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
t[i] = s;
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
};
window.addEventListener ? window.addEventListener("message", function(e) {
s(e.data, e.origin, e.source);
}) : window.attachEvent && window.attachEvent("onmessage", function(e) {
s(e.data, e.origin, e.source);
});
if (location.href.indexOf("mp.weixin.qq.com") == -1) {
n = "https://mp.weixin.qq.com/cgi-bin/readtemplate?t=proxy_tmpl&lang=zh_CN";
var i = document.createElement("iframe");
document.body.appendChild(i), i.style.display = "none", i.src = "about:blank", t.frame = i, t.proxy = i.contentWindow;
}
var s = function(t, n, i) {
var s;
typeof t == "string" && (t = r.parse(t));
if (!(s = t.type)) return;
e[s] && e[s](t, n, i);
};
t.communicateWith = function(e) {
t.target = e, t.proxy = null;
}, t.post = function(e) {
var i = t.target || window.top;
typeof e != "string" && (e = r.serialize(e));
if (window.addEventListener) i.postMessage(e, "*"); else try {
t.proxy.name = e, t.proxy.location.replace(n);
} catch (s) {
setTimeout(function() {
t.post(e);
}, 0);
} finally {
var o = t.frame;
setTimeout(function() {
o && o.parentNode.removeChild(o);
}, 3e3);
var u = document.createElement("iframe");
document.body.appendChild(u), u.style.display = "none", u.src = "about:blank", t.frame = u, t.proxy = u.contentWindow;
}
}, t.transport = function(e) {
t.proxy = e.win;
var i = r.parse(e.message);
n = i.proxyUrl || n, n = decodeURIComponent(n), s(i);
}, t.on = function(t, n) {
e[t] = n;
}, window.Iframe = t;
})();