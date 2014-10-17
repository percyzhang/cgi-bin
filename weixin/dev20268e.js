define("common/wx/cgiReport.js", [ "common/wx/Tips.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("common/wx/Tips.js");
t.error = function(e, t) {
var n = 11;
switch (e) {
case "timeout":
n = 7;
break;
case "error":
n = 8;
break;
case "notmodified":
n = 9;
break;
case "parsererror":
n = 10;
}
t.data.lang && delete t.data.lang, t.data.random && delete t.data.random, t.data.f && delete t.data.f, t.data.ajax && delete t.data.ajax, t.data.token && delete t.data.token, $.ajax({
url: "/misc/jslog?1=1",
data: {
content: "[fakeid={uin}] [xhr] [url={url}] [param={param}] [info={info}] [useragent={userAgent}] [page={page}]".format({
uin: wx.data.uin,
useragent: window.navigator.userAgent,
page: location.href,
url: t.url,
param: $.param(t.data).substr(0, 50),
info: e
}),
id: n,
level: "error"
},
type: "POST"
}), $.ajax({
url: "/misc/jslog?1=1",
data: {
content: "[fakeid={uin}] [xhr] [url={url}] [param={param}] [info={info}] [useragent={userAgent}] [page={page}]".format({
uin: wx.data.uin,
useragent: window.navigator.userAgent,
page: location.href,
url: t.url,
param: $.param(t.data).substr(0, 50),
info: e
}),
id: 6,
level: "error"
},
type: "POST"
}), e == "timeout" && i.err("你的网络环境较差，请稍后重试");
};
} catch (s) {
wx.jslog({
src: "common/wx/cgiReport.js"
}, s);
}
});define("biz_web/lib/spin.js", [], function(e, t, n) {
try {
var r = +(new Date), i = function() {
function e(e, t) {
var n = ~~((e[a] - 1) / 2);
for (var r = 1; r <= n; r++) t(e[r * 2 - 1], e[r * 2]);
}
function t(t) {
var n = document.createElement(t || "div");
return e(arguments, function(e, t) {
n[e] = t;
}), n;
}
function n(e, t, r) {
return r && !r[x] && n(e, r), e.insertBefore(t, r || null), e;
}
function r(e, t) {
var n = [ p, t, ~~(e * 100) ].join("-"), r = "{" + p + ":" + e + "}", i;
if (!H[n]) {
for (i = 0; i < P[a]; i++) try {
j.insertRule("@" + (P[i] && "-" + P[i].toLowerCase() + "-" || "") + "keyframes " + n + "{0%{" + p + ":1}" + t + "%" + r + "to" + r + "}", j.cssRules[a]);
} catch (s) {}
H[n] = 1;
}
return n;
}
function i(e, t) {
var n = e[m], r, i;
if (n[t] !== undefined) return t;
t = t.charAt(0).toUpperCase() + t.slice(1);
for (i = 0; i < P[a]; i++) {
r = P[i] + t;
if (n[r] !== undefined) return r;
}
}
function s(t) {
return e(arguments, function(e, n) {
t[m][i(t, e) || e] = n;
}), t;
}
function o(t) {
return e(arguments, function(e, n) {
t[e] === undefined && (t[e] = n);
}), t;
}
var u = "width", a = "length", f = "radius", l = "lines", c = "trail", h = "color", p = "opacity", d = "speed", v = "shadow", m = "style", g = "height", y = "left", b = "top", w = "px", E = "childNodes", S = "firstChild", x = "parentNode", T = "position", N = "relative", C = "absolute", k = "animation", L = "transform", A = "Origin", O = "Timeout", M = "coord", _ = "#000", D = m + "Sheets", P = "webkit0Moz0ms0O".split(0), H = {}, B;
n(document.getElementsByTagName("head")[0], t(m));
var j = document[D][document[D][a] - 1], F = function(e) {
this.opts = o(e || {}, l, 12, c, 100, a, 7, u, 5, f, 10, h, _, p, .25, d, 1);
}, I = F.prototype = {
spin: function(e) {
var t = this, r = t.el = t[l](t.opts);
e && n(e, s(r, y, ~~(e.offsetWidth / 2) + w, b, ~~(e.offsetHeight / 2) + w), e[S]);
if (!B) {
var i = t.opts, o = 0, u = 20 / i[d], a = (1 - i[p]) / (u * i[c] / 100), f = u / i[l];
(function h() {
o++;
for (var e = i[l]; e; e--) {
var n = Math.max(1 - (o + e * f) % u * a, i[p]);
t[p](r, i[l] - e, n, i);
}
t[O] = t.el && window["set" + O](h, 50);
})();
}
return t;
},
stop: function() {
var e = this, t = e.el;
return window["clear" + O](e[O]), t && t[x] && t[x].removeChild(t), e.el = undefined, e;
}
};
I[l] = function(e) {
function i(n, r) {
return s(t(), T, C, u, e[a] + e[u] + w, g, e[u] + w, "background", n, "boxShadow", r, L + A, y, L, "rotate(" + ~~(360 / e[l] * E) + "deg) translate(" + e[f] + w + ",0)", "borderRadius", "100em");
}
var o = s(t(), T, N), m = r(e[p], e[c]), E = 0, S;
for (; E < e[l]; E++) S = s(t(), T, C, b, 1 + ~(e[u] / 2) + w, L, "translate3d(0,0,0)", k, m + " " + 1 / e[d] + "s linear infinite " + (1 / e[l] / e[d] * E - 1 / e[d]) + "s"), e[v] && n(S, s(i(_, "0 0 4px " + _), b, 2 + w)), n(o, n(S, i(e[h], "0 0 1px rgba(0,0,0,.1)")));
return o;
}, I[p] = function(e, t, n) {
e[E][t][m][p] = n;
};
var q = "behavior", R = "url(#default#VML)", U = "group0roundrect0fill0stroke".split(0);
return function() {
var e = s(t(U[0]), q, R), r;
if (!i(e, L) && e.adj) {
for (r = 0; r < U[a]; r++) j.addRule(U[r], q + ":" + R);
I[l] = function() {
function e() {
return s(t(U[0], M + "size", c + " " + c, M + A, -o + " " + -o), u, c, g, c);
}
function r(r, a, c) {
n(d, n(s(e(), "rotation", 360 / i[l] * r + "deg", y, ~~a), n(s(t(U[1], "arcsize", 1), u, o, g, i[u], y, i[f], b, -i[u] / 2, "filter", c), t(U[2], h, i[h], p, i[p]), t(U[3], p, 0))));
}
var i = this.opts, o = i[a] + i[u], c = 2 * o, d = e(), m = ~(i[a] + i[f] + i[u]) + w, E;
if (i[v]) for (E = 1; E <= i[l]; E++) r(E, -2, "progid:DXImage" + L + ".Microsoft.Blur(pixel" + f + "=2,make" + v + "=1," + v + p + "=.3)");
for (E = 1; E <= i[l]; E++) r(E);
return n(s(t(), "margin", m + " 0 0 " + m, T, N), d);
}, I[p] = function(e, t, n, r) {
r = r[v] && r[l] || 0, e[S][E][t + r][S][S][p] = n;
};
} else B = i(e, k);
}(), F;
}();
$.fn.spin = function(e, t) {
return this.each(function() {
var n = $(this), r = n.data();
r.spinner && (r.spinner.stop(), delete r.spinner), e !== !1 && (e = $.extend({
color: t || n.css("color")
}, $.fn.spin.presets[e] || e), r.spinner = (new i(e)).spin(this));
});
}, $.fn.spin.presets = {
tiny: {
lines: 8,
length: 2,
width: 2,
radius: 3
},
small: {
lines: 8,
length: 4,
width: 3,
radius: 5
},
large: {
lines: 10,
length: 8,
width: 4,
radius: 8
}
};
} catch (s) {
wx.jslog({
src: "biz_web/lib/spin.js"
}, s);
}
});define("common/wx/simplePopup.js", [ "tpl/simplePopup.html.js", "common/wx/popup.js", "biz_common/jquery.validate.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("tpl/simplePopup.html.js");
e("common/wx/popup.js"), e("biz_common/jquery.validate.js");
function s(e) {
var t = $.Deferred(), n = this;
n.$dom = $(template.compile(i)(e)).popup({
title: e.title || "输入提示框",
buttons: [ {
text: "确认",
click: function() {
var i = this;
if (r.form()) {
var s = n.$dom.find("input").val().trim();
if (e.callback) {
var o = e.callback.call(i, s);
o !== !1 && this.remove();
} else this.remove();
t.resolve(s);
}
},
type: "primary"
}, {
text: "取消",
click: function() {
this.remove();
},
type: "default"
} ],
className: "simple label_block"
}), n.$dom.find("input").val(e.value).focus(), $.validator.addMethod("_popupMethod", function(t, n, r) {
return e && e.rule && e.rule(t.trim(), n, r);
}, e.msg);
var r = n.$dom.find("form").validate({
rules: {
popInput: {
required: !0,
_popupMethod: !0
}
},
messages: {
popInput: {
required: "输入框内容不能为空"
}
},
onfocusout: !1
});
return t.callback = t.done, t;
}
n.exports = s;
} catch (o) {
wx.jslog({
src: "common/wx/simplePopup.js"
}, o);
}
});define("common/wx/tooltips.js", [ "tpl/tooltips.html.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = {
position: {},
container: "",
type: "hover",
buttons: [],
delay: 300,
disabled: !1,
reposition: !1,
container_close: !1,
parentClass: "",
container_mode: "absolute"
}, s = wx.T, o = e("tpl/tooltips.html.js"), u = "btn_disabled", a = "hover", f = "show", l = function(e) {
this.options = e = $.extend(!0, {}, i, e), this.$container = $(this.options.container);
if (!this.$container || this.$container.length == 0) return;
var t = this.$container.offset(), n = this.$container.height(), r = this.options.position.left || this.$container.data("x") || 0, l = n + (this.options.position.top || this.$container.data("y") || 0);
this.options.offset = {
left: t.left + r,
top: t.top + l,
left_x: r,
top_y: l
}, !e.content && (e.content = this.$container.data("tips") || ""), this.$dom = $(s(o, e)).appendTo("body"), this.options.disabled && this.$container.addClass(u);
var c = this, h = this.options.type === a || this.options.type === "click" ? this.options.type : a;
if (h == a) {
var p = null;
this.$container.hover(function(e) {
c.options.onshow && typeof c.options.onshow == "function" ? c.options.onshow.apply(c) : !c.options.disabled && c.show();
}, function(e) {
p = window.setTimeout(function() {
c.hide();
}, c.options.delay);
}), this.$dom.hover(function(e) {
p && window.clearTimeout(p);
}, function(e) {
c.hide();
});
} else this.$container.click(function(e) {
if (c.options.disabled) return;
if (c.options.onbeforeclick && typeof c.options.onbeforeclick == "function" && c.options.onbeforeclick.apply(c) === !1) return;
return c.$dom.data(f) ? c.options.onclose && typeof c.options.onclose == "function" ? c.options.onclose.apply(c) : c.hide() : c.options.onshow && typeof c.options.onshow == "function" ? c.options.onshow.apply(c) : c.show(), !1;
});
$(document).on("click", function(e) {
c.options.onclose && typeof c.options.onclose == "function" ? c.options.onclose.apply(c, [ e ]) : c.hide();
}), c.$dom.find(".js_popover_close").on("click", function(e) {
return c.options.onclose && typeof c.options.onclose == "function" ? c.options.onclose.apply(c, [ e ]) : c.hide(), !1;
}), this.$dom.hide(), function() {
$.each(c.$dom.find(".btn"), function(e, t) {
c.options.buttons[e].click && $(t).on("click", function() {
c.options.buttons[e].click.apply(c);
});
});
}();
};
l.prototype = {
constructor: l,
show: function() {
if (this.options.reposition) {
var e = this.$container.offset(), t = e.left + this.options.offset.left_x, n = e.top + this.options.offset.top_y;
this.$dom.css({
left: t,
top: n
}).show();
} else this.$dom.show();
this.$dom.data(f, !0);
},
hide: function() {
this.$dom.hide(), this.$dom.data(f, !1);
},
enable: function() {
return this.options.disabled = !1, this.$container.removeClass(u), this;
},
disable: function() {
return this.options.disabled = !0, this.$container.addClass(u), this;
}
}, n.exports = l;
} catch (c) {
wx.jslog({
src: "common/wx/tooltips.js"
}, c);
}
});/**
 * @author cunjinli
 * @Usage:
 * var Checkbox = req("biz_web/ui/checkbox"");
 * $("input[type=checkbox]").checkbox(); 
 *
 * $("input").checkbox({onChanged: function($me){}});
 * $("input[type=radio]").checkbox({ multi: true }); 
 * 
 * $("input").checkbox("checked", true/false); 调用checked函数
 * $("input").checkbox("value");
 * $("input").checkbox("values");
 * 
 * 
 * var checkbox = new Checkbox({
	container: "body",
	label: "同意",
	name: "agree",
	type: "checkbox" 
 * });
 *
 */define("biz_web/ui/checkbox.js", [ "tpl/biz_web/ui/checkbox.html.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = {
container: null,
label: "",
name: "",
type: "checkbox"
}, s = e("tpl/biz_web/ui/checkbox.html.js"), o = wx.T, u = 1, a = 1;
function f(e) {
var t = $(e);
t.each(function() {
var e = $(this), t = e.prop("checked"), n = e.parent();
t ? n.addClass("selected") : n.removeClass("selected");
});
}
function l(e) {
var t = $(e);
t.each(function() {
var e = $(this).prop("disabled"), t = $(this).parent();
e ? t.addClass("disabled") : t.removeClass("disabled");
});
}
function c() {
return "checkbox" + u++;
}
var h = function(e) {
this.options = $.extend(!0, {}, i, e), this.options.index = a++, this.$container = $(this.options.container), this.$dom = $(o(s, this.options)).appendTo(this.$container), this.$input = this.$dom.find("input"), this.$input.checkbox();
};
return h.prototype = {
checked: function(e) {
return typeof e != "undefined" && (this.$input.prop("checked", e), f(this.$input)), this.$input.prop("checked");
},
disabled: function(e) {
return typeof e != "undefined" && (this.$input.prop("disabled", e), l(this.$input)), this.$input.prop("disabled");
}
}, $.fn.checkbox = function(e) {
var t, n, r = !1, i, s;
typeof e == "boolean" ? t = e : $.isPlainObject(e) ? (t = e.multi, n = e.onChanged) : typeof e == "string" ? (r = !0, i = e, s = [].slice.call(arguments, 1)) : typeof e == "undefined" && (e = {}), typeof t == "undefined" && (t = this.is("input[type=checkbox]"));
var o = this, u = t ? "checkbox" : "radio", a = {
checked: function(e) {
return o.attr("checked", e), o.prop("checked", e), f(o), o;
},
disabled: function(e) {
return o.attr("disabled", e), o.prop("disabled", e), l(o), o;
},
value: function() {
var e = o.eq(0);
return e.prop("checked") ? e.val() : "";
},
values: function() {
var e = [];
return o.each(function() {
$(this).prop("checked") && e.push($(this).val());
}), e;
},
adjust: function(e) {
var t;
return typeof e == "string" ? t = e.split(",") : t = e, t && t.length > 0 && o.each(function() {
var e = $(this);
t.indexOf(e.val()) >= 0 && (e.attr("checked", !0), f(e));
}), this;
},
disable: function(e) {
var t;
return typeof e == "string" ? t = e.split(",") : t = e, t && t.length > 0 && o.each(function() {
var e = $(this);
t.indexOf(e.val()) >= 0 && (e.attr("disabled", !0), l(e));
}), this;
},
setall: function(e) {
o.each(function() {
var t = $(this);
t.attr("disabled", e ? !1 : !0), l(t);
});
},
enable: function(e) {
var t;
return typeof e == "string" ? t = e.split(",") : t = e, t && t.length > 0 && o.each(function() {
var e = $(this);
t.indexOf(e.val()) >= 0 && (e.attr("disabled", !1), l(e));
}), this;
},
label: function(e) {
return e && (o.parent().find(".lbl_content").text(e), o.attr("data-label", e)), o;
}
};
return r && typeof a[i] == "function" ? a[i].apply(a, s) : (this.addClass("frm_" + u).each(function() {
var e = $(this), t = e.parent();
if (!t.is("label")) {
var n = e.attr("data-label");
t = $('<label class="frm_{type}_label"><i class="icon_{type}"></i></label>'.format({
type: u
})).append("<span class='lbl_content'>{content}</span>".format({
content: n
})), t.insertBefore(e).prepend(e);
}
if (!this.id) {
var r = c();
this.id = r;
}
t.attr("for", this.id);
}), f(this), l(this), !!e && !!e.initOnChanged && typeof n == "function" && o.parent().find("input[type=checkbox],input[type=radio]").each(function() {
n.call(a, $(this));
}), this.parent().delegate("input[type=checkbox],input[type=radio]", "click", function(e) {
var r = $(this), i = r.prop("checked");
t ? (r.attr("checked", i), f(r)) : (o.attr("checked", !1), r.attr("checked", !0).prop("checked", !0), f(o)), typeof n == "function" && n.call(a, r);
}).addClass("frm_" + u + "_label"), a);
}, h;
} catch (p) {
wx.jslog({
src: "biz_web/ui/checkbox.js"
}, p);
}
});define("safe/safe_check.js", [ "common/wx/Tips.js", "common/wx/popup.js", "common/wx/Cgi.js", "safe/Scan.js", "safe/Mobile.js", "biz_web/ui/checkbox.js", "common/wx/Step.js", "safe/tpl/safe_check.html.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("common/wx/Tips.js"), s = e("common/wx/popup.js"), o = e("common/wx/Cgi.js"), u = e("safe/Scan.js"), a = e("safe/Mobile.js"), f = e("biz_web/ui/checkbox.js"), l = e("common/wx/Step.js"), c = e("safe/tpl/safe_check.html.js");
n.exports = {
_types: {
send: '_"(群发)"'
},
check: function(e, t, n) {
n && n.onClose && n.onClose(), e.wx_protect ? e.checkType = 2 : e.checkType = 0;
var r = !0;
switch (e.source) {
case "msgs":
r = (e.protect_status & 2) == 2;
break;
case "cburl":
r = (e.protect_status & 4) == 4;
break;
case "appkey":
r = (e.protect_status & 8) == 8;
break;
default:
r = !1;
}
if (r) {
var i, s = null, o = $(c).find(".js_wxcheck").popup({
title: "微信保护",
width: 860,
onShow: function() {
s = this, $(this.$dialogWrp.get(0)).css({
"margin-top": -227
});
},
close: function() {
i && i.destroy(), n && n.onClose && n.onClose(), this.remove();
}
});
i = new u({
container: o,
type: "check",
source: e.source,
msgid: e.msgid,
distinguish: e.distinguish,
wx_name: e.wx_alias == "wx.pass" ? "" : e.wx_alias,
onconfirm: function() {
var n = {
code: this.code
};
!this.isadmin && this.distinguish ? (this.container.find(".js_wxcheck").html('<div class="page_msg large simple default"><div class="inner group"><span class="msg_icon_wrp"><i class="icon_msg_primary waiting"></i></span><div class="msg_content"><h4>已发送操作申请</h4><p>请等待公众号安全助手绑定的管理员(%s)验证操作申请，验证通过后操作将立即进行。此申请在30分钟后过期，请尽快联系管理员验证。</p></div></div><div class="tool_bar border"><a href="javascript:;" class="btn btn_primary js_unadminsend">我知道了</a></div></div>'.sprintf(this.opt.wx_name)), this.container.find(".js_wxcheck").find(".js_unadminsend").on("click", function() {
s.remove(), e.unadmin_url ? location.href = e.unadmin_url : location.reload();
}), this.container.find(".pop_closed").on("click", function() {
s.remove(), e.unadmin_url ? location.href = e.unadmin_url : location.reload();
}), s.resetPosition(), n.type = -1) : (n.type = 1, s.remove()), typeof t == "function" && t(n);
},
onrequest: function() {
typeof t == "function" && t({
code: this.code,
type: -1
});
}
});
} else typeof t == "function" && t("wx.pass");
},
off_protect_tip: function(e, t) {
t && t.onClose && t.onClose();
var n = $(c).find(".js_off_protect").popup({
title: "开启微信保护",
width: 860,
close: function() {
this.remove();
},
buttons: [ {
text: "开始",
click: function() {
this.remove(), typeof e == "function" && e();
},
type: "primary"
}, {
text: "取消",
click: function() {
t && t.onClose && t.onClose(), this.remove();
},
type: "default"
} ]
});
},
no_helper_tip: function(e, t) {
t && t.onClose && t.onClose();
var n = $(c).find(".js_no_helper").popup({
title: "开启微信保护",
width: 860,
close: function() {
this.remove();
},
buttons: [ {
text: "开始",
click: function() {
this.remove(), typeof e == "function" && e();
},
type: "primary"
}, {
text: "取消",
click: function() {
t && t.onClose && t.onClose(), this.remove();
},
type: "default"
} ]
});
},
bind: function(e, t, n, r) {
function s() {
var r = g.find(".js_step3");
r.show();
var i = new u({
container: r,
type: e,
source: t.source,
code: t.code,
dom_init: '<div class="status tips"><p>请使用微信扫描二维码进行验证</p></div>',
onconfirm: function() {
m.remove(), typeof n == "function" && n("wx.pass");
}
});
}
function f() {
var e = g.find(".js_step3"), r = e.find(".js_forget");
r.find("a").attr("href", wx.url("/misc/rebindverify?action=mail_get&safeaction=wx_mail_get&t=setting/safe-rebind")), r.show(), e.show(), p = new u({
container: e,
type: "change_protect_masssend",
source: t.source,
code: t.code,
wx_name: t.wx_alias == "wx.pass" ? "" : t.wx_alias,
onconfirm: function() {
m.remove(), typeof n == "function" && n("wx.pass");
}
});
}
r && r.onClose && r.onClose();
var h = t && t.wx_alias ? !0 : !1, p, d = "click", v, m, g = $(c).find(".js_bind").popup({
className: "dialog_process",
title: e == "bind" ? "绑定公众号安全助手" : "开启微信保护",
width: 860,
onShow: function() {
m = this, $(this.$dialogWrp.get(0)).css({
"margin-top": -227
});
},
close: function() {
r && r.onClose && r.onClose(), p && p.destroy(), this.remove();
}
});
o.post({
url: wx.url("/misc/safeassistant?action=checkwx_report"),
mask: !1
}, $.noop), v = new l({
container: g.find(".js_process"),
selected: 1,
names: [ "1. 选择验证方式", "2. 账号验证", h ? "3. 开启微信保护" : "3. 绑定微信号" ]
}), g.find(".js_step1_num").text(t && t.mobile ? t.mobile : ""), g.find(".js_step1_email").text(t && t.bind_mail ? t.bind_mail : ""), t.third_status == "1" && g.find(".js_option").show(), g.find(".frm_radio").checkbox({
multi: !1,
onChanged: function(e) {
g.find(".js_step1_next").data("type", e.val());
}
}), g.find(".js_step1_next").data("type", "1").on(d, function() {
var e = $(this).data("type");
if (e == "1" && (!t || !t.mobile)) {
i.err("手机号为空，请选择其他验证方式");
return;
}
if (e == "2" && (!t || !t.bind_mail)) {
i.err("邮箱为空，请选择其他验证方式");
return;
}
v.setStep(2), g.find(".js_step1").hide();
if (e == "1") {
var n = g.find(".js_setp2_mobile");
n.find(".js_mobile_forget").attr("href", wx.url("/misc/rebindverify?action=mail_get&safeaction=mobile_mail_get&t=setting/safe-rebind")), n.show(), n.find(".js_oldsend").click();
} else if (e == "2") {
var n = g.find(".js_step2_mail");
n.show(), n.find(".js_resend_mail").click();
} else g.find(".js_step2_name").show();
}), g.find(".js_step1_cancel").on(d, function() {
m.remove();
}), g.find(".js_step2_prev").on(d, function() {
$(this).parent().parent().hide(), v.setStep(1), g.find(".js_step1").show();
}), t && t.mobile && new a({
container: g.find(".js_setp2_mobile"),
mobile_num: t.mobile,
old_submit: ".js_step2_mobilecheck",
old_callback: function(e) {
g.find(".js_step2_mobilecheck").html("下一步").removeClass("btn_loading").attr("disabled", !1);
var n = e.err_code;
n == 0 ? (g.find(".js_setp2_mobile").hide(), v.setStep(3), t.wx_alias ? f() : s()) : i.err("验证失败");
},
old_checkparam: function(e) {
return t.code = e, t.source = "mobile", {
code_num: e
};
},
before_check: function() {
return $(this).attr("disabled") ? !1 : ($(this).html("验证中<i></i>").addClass("btn_loading").attr("disabled", !0), !0);
}
}), g.find(".js_resend_mail").on(d, function() {
o.post({
url: wx.url("/misc/rebindverify?action=send_safe_code"),
mask: !1
}, function(e) {
if (!e && !e.base_resp) {
i.err("邮件发送失败");
return;
}
switch (+e.base_resp.ret) {
case 0:
i.suc("邮件发送成功");
break;
default:
i.err("邮件发送失败");
}
});
}), g.find(".js_step2_namecheck").on(d, function() {
var e = g.find(".js_cardname"), n = g.find(".js_cardid"), r = e.val().trim(), u = n.val().trim();
if (!r) return i.err("请输入身份证姓名"), !1;
if (!u) return i.err("请输入身份证号码"), !1;
$(this).html("验证中<i></i>").addClass("btn_loading").attr("disabled", !0), o.post({
url: wx.url("/misc/safeassistant?action=check_id"),
data: {
card_name: r,
card_id: u
},
mask: !1
}, function(e) {
g.find(".js_step2_namecheck").html("下一步").removeClass("btn_loading").attr("disabled", !1);
if (!e && !e.check_flag && !e.code) {
i.err("验证失败");
return;
}
switch (+e.check_flag) {
case 1:
t.code = e.code, t.source = "id", g.find(".js_step2_name").hide(), v.setStep(3), t.wx_alias ? f() : s();
break;
case -5:
i.err("请1分钟后重新尝试");
break;
default:
i.err("验证失败");
}
});
}), g.find(".js_step2_mailcheck").on(d, function() {
var e = g.find(".js_email_code").val().trim();
if (!e) return i.err("请输入邮件验证码"), !1;
$(this).html("验证中<i></i>").addClass("btn_loading").attr("disabled", !0), o.post({
url: wx.url("/misc/safeassistant?action=check_safecode"),
data: {
safecode: e
},
mask: !1
}, function(e) {
g.find(".js_step2_mailcheck").html("下一步").removeClass("btn_loading").attr("disabled", !1);
if (!e && !e.check_flag && !e.code) {
i.err("验证失败");
return;
}
switch (+e.check_flag) {
case 1:
t.code = e.code, t.source = "safecode", g.find(".js_step2_mail").hide(), v.setStep(3), t.wx_alias ? f() : s();
break;
default:
i.err("验证失败");
}
});
});
}
};
} catch (h) {
wx.jslog({
src: "safe/safe_check.js"
}, h);
}
});define("common/wx/top.js", [ "tpl/top.html.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("tpl/top.html.js"), s = wx.acl;
function o(e, t, n) {
var r = this;
return this.dom = $(e), this.dom.addClass("title_tab"), t && typeof t == "string" && (t = [ {
name: "",
url: "javasript:;",
className: "selected"
} ]), $.each(t, function(e, t) {
t.url = t.url && [ t.url, wx.data.param ].join("") || "javasript:;";
}), this.dom.html(template.compile(i)({
data: t
})), n && n.render && typeof n.render == "function" ? $.each(this.dom.find("li"), function(e, r) {
n.render.apply($(r), [ t[e], n && n.data ]);
}) : this.dom.html(template.compile(i)({
data: t
})), this.dom.on("click", ".top_item", function() {
$(this).addClass("selected").siblings().removeClass("selected");
}), this;
}
o.prototype.selected = function(e) {
typeof e == "number" ? this.dom.find(".js_top:eq(" + e + ")").addClass("selected") : this.dom.find(".js_top[data-id=" + e + "]").addClass("selected");
}, o.DATA = {
setting: [ {
id: "info",
name: "帐号详情",
url: "/cgi-bin/settingpage?t=setting/index&action=account"
}, {
id: "function",
name: "功能设置",
url: "/cgi-bin/settingpage?t=setting/function&action=function"
} ],
mass: [ {
id: "send",
name: "新建群发消息",
url: "/cgi-bin/masssendpage?t=mass/send"
}, {
id: "list",
name: "已发送",
url: "/cgi-bin/masssendpage?t=mass/list&action=history&begin=0&count=10"
} ],
message: [ {
id: "total",
name: "全部消息",
url: "/cgi-bin/message?t=message/list&count=20&day=7"
}, {
id: "today",
name: "今天",
url: "/cgi-bin/message?t=message/list&count=20&day=0",
className: "sub"
}, {
id: "yesterday",
name: "昨天",
url: "/cgi-bin/message?t=message/list&count=20&day=1",
className: "sub"
}, {
id: "beforeYesterday",
name: "前天",
url: "/cgi-bin/message?t=message/list&count=20&day=2",
className: "sub"
}, {
id: "fivedays",
name: "更早",
url: "/cgi-bin/message?t=message/list&count=20&day=3",
className: "sub"
}, {
id: "star",
name: "星标消息",
url: "/cgi-bin/message?t=message/list&count=20&action=star"
}, {
id: "search",
name: "搜索结果"
} ],
media: [ {
id: "media11",
name: "商品消息",
acl: s && s.msg_acl && s.msg_acl.can_commodity_app_msg,
url: "/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list&type=11&action=list"
}, {
id: "media10",
name: "图文消息",
acl: s && s.msg_acl && s.msg_acl.can_app_msg,
url: "/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list&type=10&action=list"
}, {
id: "media2",
name: "图片",
acl: s && s.msg_acl && s.msg_acl.can_image_msg,
url: "/cgi-bin/filepage?type=2&begin=0&count=20&t=media/list"
}, {
id: "media3",
name: "语音",
acl: s && s.msg_acl && s.msg_acl.can_voice_msg,
url: "/cgi-bin/filepage?type=3&begin=0&count=20&t=media/list"
}, {
id: "media15",
name: "视频",
acl: s && s.msg_acl && s.msg_acl.can_video_msg,
url: "/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list&type=15&action=list"
} ],
business: [ {
id: "overview",
name: "数据概览",
url: "/merchant/business?t=business/overview&action=overview"
}, {
id: "order",
name: "订单流水",
url: "/merchant/business?t=business/order&action=order"
}, {
id: "info",
name: "商户信息",
url: "/merchant/business?t=business/info&action=info"
}, {
id: "test",
name: "支付测试",
url: "/merchant/business?t=business/whitelist&action=whitelist"
}, {
id: "rights",
name: "维权仲裁",
url: "/merchant/shop_rights?t=business/rights_list&action=batchgetpayfeedback"
}, {
id: "course",
name: "使用教程",
url: "/merchant/business?t=business/course&action=course"
} ],
user: [ {
id: "useradmin",
name: "用户管理",
url: "/cgi-bin/contactmanage?t=user/index&pagesize=10&pageidx=0&type=0&groupid=0"
} ],
statistics: {
user: [ {
id: "summary",
name: "用户增长",
url: "/misc/pluginloginpage?action=stat_user_summary&pluginid=luopan&t=statistics/index"
}, {
id: "attr",
name: "用户属性",
url: "/misc/pluginloginpage?action=stat_user_attr&pluginid=luopan&t=statistics/index"
} ],
article: [ {
id: "detail",
name: "图文群发",
url: "/misc/pluginloginpage?action=stat_article_detail&pluginid=luopan&t=statistics/index"
}, {
id: "analyse",
name: "图文统计",
url: "/misc/pluginloginpage?action=stat_article_analyse&pluginid=luopan&t=statistics/index"
} ],
message: [ {
id: "message",
name: "消息分析",
url: "/misc/pluginloginpage?action=stat_message&pluginid=luopan&t=statistics/index"
}, {
id: "key",
name: "消息关键词",
url: "/misc/pluginloginpage?action=ctr_keyword&pluginid=luopan&t=statistics/index"
} ],
"interface": [ {
id: "interface",
name: "接口分析",
url: "/misc/pluginloginpage?action=stat_interface&pluginid=luopan&t=statistics/index"
} ]
},
notification: [ {
id: "notification",
name: "通知中心",
url: "/cgi-bin/frame?t=notification/index_frame"
} ],
templateMessage: [ {
id: "my_template",
name: "我的模板",
url: "/advanced/tmplmsg?action=list&t=tmplmsg/list"
}, {
id: "template_message",
name: "模板库",
url: "/advanced/tmplmsg?action=tmpl_store&t=tmplmsg/store"
} ],
assistant: [ {
id: "mphelper",
name: "公众号助手",
url: "/misc/assistant?t=setting/mphelper&action=mphelper"
}, {
id: "warning",
name: "接口告警",
url: "/misc/assistant?t=setting/warning&action=warning"
} ],
shop: [ {
id: "shopoverview",
name: "小店概况",
url: "/merchant/merchantstat?t=shop/overview&action=getoverview"
}, {
id: "addGoods",
name: "添加商品",
url: "/merchant/goods?type=11&t=shop/precreate",
target: "_blank"
}, {
id: "goodsManagement",
name: "商品管理",
url: "/merchant/goodsgroup?t=shop/category&type=1"
}, {
id: "shelfManagement",
name: "货架管理",
url: "/merchant/shelf?status=0&action=get_shelflist&t=shop/myshelf&offset=0&count=5"
}, {
id: "orderManagement",
name: "订单管理",
url: "/merchant/productorder?action=getlist&t=shop/order_list&last_days=30&count=10&offset=0"
}, {
id: "deliverylist",
name: "运费模板管理",
url: "/merchant/delivery?action=getlist&t=shop/delivery_list"
}, {
id: "images",
name: "图片库",
url: "/merchant/goodsimage?action=getimage&t=shop/shop_img&count=20&offset=0"
} ],
adClient: [ {
id: "adclientreport",
name: "报表统计",
url: "/merchant/ad_client_report?t=ad_system/client_report&action=list"
}, {
id: "adclientmanage",
name: "广告管理",
url: "/merchant/advert?t=ad_system/promotion_list&action=get_advert_count"
}, {
id: "materialmanage",
name: "推广页管理",
url: "/merchant/ad_material?t=material/list&action=get_material_list"
}, {
id: "adclientpay",
name: "财务管理",
url: "/merchant/ad_client_pay?action=ad_client_pay&t=ad_system/client_pay"
} ],
adHost: [ {
id: "adhostreport",
name: "报表统计",
url: "/merchant/ad_host_report?t=ad_system/host_report"
}, {
id: "adhostmanage",
name: "流量管理",
url: "/merchant/ad_host_manage?t=ad_system/host_manage"
}, {
id: "adhostpay",
name: "财务管理",
url: "/merchant/ad_host_pay?action=ad_host_pay&t=ad_system/host_pay"
} ],
advanced: [ {
id: "dev",
name: "配置项",
url: "/advanced/advanced?action=dev&t=advanced/dev"
}, {
id: "group-alert",
name: "接口报警",
url: "/advanced/advanced?action=alarm&t=advanced/alarm"
} ],
cardticket: [ {
id: "cardmgr",
name: "卡券管理",
url: "/merchant/electroniccardmgr?action=batch&t=cardticket/batch_card"
}, {
id: "store",
name: "门店管理",
url: "/merchant/entityshop?action=list"
}, {
id: "permission",
name: "卡券核销",
url: "/merchant/carduse?action=listchecker&t=cardticket/permission"
}, {
id: "carduse",
name: "核销记录",
url: "/merchant/carduserecord?action=listrecord&t=cardticket/carduse_record"
}, {
id: "cardreport",
name: "数据报表",
url: "/merchant/ecardreport?action=overviewpage&t=cardticket/overviewpage"
} ],
infringement: [ {
id: "infringement",
name: "我要投诉",
url: "/acct/infringement?action=getmanual&t=infringement/manual&type=1"
}, {
id: "antiinfringement",
name: "我要申诉",
url: "/acct/infringement?action=getmanual&t=infringement/manual&type=2"
}, {
id: "list",
name: "提交记录",
url: "/acct/infringement?action=getlist&t=infringement/ingringement_list&type=1"
} ],
scan: [ {
id: "overview",
name: "数据概况",
url: "/merchant/scandataoverview?action=keydata"
}, {
id: "whitelist",
name: "测试白名单",
url: "/merchant/scanwhitelist?t=home/index&action=list"
} ]
}, s && s.merchant_acl && s.merchant_acl.can_use_pay_tmpl && o.DATA.templateMessage.push({
id: "template_pay_list",
name: "支付模板消息",
url: "/advanced/tmplmsg?action=pay_list&t=tmplmsg/payment"
}), o.RENDER = {
setting: function(e, t) {
e.id == "meeting" && t.role != 15 && this.remove();
},
message: function(e, t) {
e.id == "search" && (!t || t.action != "search") && this.remove();
},
assistant: function(e, t) {
e.id == "warning" && (!t || t.have_service_package == 0) && this.remove();
}
}, n.exports = o;
} catch (u) {
wx.jslog({
src: "common/wx/top.js"
}, u);
}
});define("common/qq/mask.js", [ "biz_web/lib/spin.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict", e("biz_web/lib/spin.js");
var i = 0, s = '<div class="mask"></div>';
function o(e) {
if (this.mask) this.mask.show(); else {
var t = "body";
e && !!e.parent && (t = $(e.parent)), this.mask = $(s).appendTo(t), this.mask.id = "wxMask_" + ++i, this.mask.spin("flower");
}
if (e) {
if (e.spin === !1) return this;
this.mask.spin(e.spin || "flower");
}
return this;
}
o.prototype = {
show: function() {
this.mask.show();
},
hide: function() {
this.mask.hide();
},
remove: function() {
this.mask.remove();
}
}, t.show = function(e) {
return new o(e);
}, t.hide = function() {
$(".mask").hide();
}, t.remove = function() {
$(".mask").remove();
};
} catch (u) {
wx.jslog({
src: "common/qq/mask.js"
}, u);
}
});define("advanced/dev.js", [ "common/qq/mask.js", "common/wx/Tips.js", "common/wx/Cgi.js", "common/wx/top.js", "safe/safe_check.js", "common/wx/dialog.js", "biz_web/ui/checkbox.js", "common/wx/tooltips.js", "common/wx/simplePopup.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = wx, s = e("common/qq/mask.js"), o = e("common/wx/Tips.js"), u = e("common/wx/Cgi.js"), a = e("common/wx/top.js"), f = e("safe/safe_check.js"), l = e("common/wx/dialog.js"), c = e("biz_web/ui/checkbox.js"), h = e("common/wx/tooltips.js"), p = e("common/wx/simplePopup.js"), d = wx.cgiData;
$(".jsAsk").each(function() {
var e = $(this).data("type"), t;
e == "menu" || e == "advanced" ? t = "必须是已%s微信认证%s的服务号才可获得".sprintf('<a target="_blank" href="' + wx.url("/merchant/store?action=detail&t=wxverify/detail&info=verify") + '">', "</a>") : e == "shop" ? t = "必须是已%s微信认证%s、已接入%s微信支付%s的号、且在添加功能插件中申请微信小店功能成功的公众号，才可获得".sprintf('<a target="_blank" href="' + wx.url("/merchant/store?action=detail&t=wxverify/detail&info=verify") + '">', "</a>", '<a target="_blank" href="' + wx.url("/cgi-bin/frame?t=business/index_frame&iframe=%2Fpaymch%2Fbusiness%3Ft%3Dbusiness%2Finfo%26action%3Doverview&nav=business&hide=0") + '">', "</a>") : t = "必须是已%s微信认证%s、已接入%s微信支付%s的服务号才可获得".sprintf('<a target="_blank" href="' + wx.url("/merchant/store?action=detail&t=wxverify/detail&info=verify") + '">', "</a>", '<a target="_blank" href="' + wx.url("/cgi-bin/frame?t=business/index_frame&iframe=%2Fpaymch%2Fbusiness%3Ft%3Dbusiness%2Finfo%26action%3Doverview&nav=business&hide=0") + '">', "</a>"), new h({
container: this,
content: t,
reposition: !0,
type: "hover",
position: {
left: -97,
top: -2
}
});
});
function v() {
b(), w();
}
function m() {
function e(e) {
u.post({
url: "/merchant/myservice?action=set_report_location",
data: {
type: e
}
});
}
function t() {
wx.cgiData.location == 0 ? ($("#locationBt").text("开启"), $("#localTxt").text("(已关闭)")) : wx.cgiData.location == 1 ? ($("#locationBt").text("关闭"), $("#localTxt").text("(已开启，每次上报)")) : wx.cgiData.location == 2 && ($("#locationBt").text("关闭"), $("#localTxt").text("(已开启，每隔5s上报)"));
}
y(), $("#openBt").click(function() {
if ($(this).hasClass("btn_disabled")) return !1;
d.is_biz_menu_open == 1 || d.is_biz_ivr_open == 1 ? l.show({
title: "提示",
type: "warn",
msg: "是否确定开启服务器配置？|请注意：开启后，用户发送的消息将自动转发到该配置地址，并且在网站中设置的自动回复和自定义菜单将失效。",
buttons: [ {
text: "确定",
click: function() {
o.suc("开启中"), g(1), this.remove();
}
}, {
text: "取消",
type: "normal",
click: function() {
this.remove();
}
} ]
}) : (o.suc("开启中"), g(1));
}), $("#closeBt").click(function() {
l.show({
title: "提示",
type: "warn",
msg: "确定停用服务器配置？|请注意：停用后，消息将不再转发到服务器配置中，可能影响公众号服务。",
buttons: [ {
text: "确定",
click: function() {
o.suc("关闭中"), g(0), this.remove();
}
}, {
text: "取消",
type: "normal",
click: function() {
this.remove();
}
} ]
});
}), $("#voiceClose").click(function(e) {
l.show({
type: "warn",
msg: "你确认要关闭语音识别吗?|关闭后，用户发送给公众号的语音消息，将不再附带识别结果",
buttons: [ {
text: "确定",
click: function() {
u.post({
url: "/merchant/myservice?action=set_voice_reco",
data: {
open: 0
}
}).success(function(e) {
e.base_resp.ret == 0 && (o.suc("关闭成功"), wx.cgiData.voice = !1, $("#voiceClose").hide(), $("#voiceOpen").show(), $("#voiceTxt").text("(已关闭)"));
}), this.remove();
}
}, {
text: "取消",
type: "normal",
click: function() {
this.hide();
}
} ]
});
}), $("#voiceOpen").click(function(e) {
l.show({
type: "warn",
msg: "你确认要开启语音识别吗?|开启后，用户发送给公众号的语音消息，将附带识别结果",
buttons: [ {
text: "确定",
click: function() {
u.post({
url: "/merchant/myservice?action=set_voice_reco",
data: {
open: 1
}
}).success(function(e) {
e.base_resp.ret == 0 && (o.suc("开启成功"), wx.cgiData.voice = !0, $("#voiceClose").show(), $("#voiceOpen").hide(), $("#voiceTxt").text("(已开启)"));
}), this.remove();
}
}, {
text: "取消",
type: "normal",
click: function() {
this.hide();
}
} ]
});
}), $("#authBt").click(function(e) {
new p({
title: "OAuth2.0网页授权",
label: "授权回调页面域名:",
value: wx.cgiData.authUrl || "",
rule: function(e) {
return /^(\w|-)+(\.(\w|-)+)+(:\d+)?$/g.test(e);
},
tips: "用户在网页授权页同意授权给公众号后，微信会将授权数据传给一个回调页面，回调页面需在此域名下，以确保安全可靠。",
msg: "域名格式不合法，请直接填写授权域名。如weixin.qq.com",
callback: function(e) {
var t = this;
return o.suc("安全监测中。。。"), u.post({
url: "/merchant/myservice?action=set_oauth_domain&f=json",
data: {
domain: e
}
}).success(function(n) {
n.base_resp.ret == 0 ? (o.suc("通过安全监测"), wx.cgiData.authUrl = e, $("#authBt").text("修改"), t.remove()) : n.base_resp.ret == 10302 && o.suc("域名存在安全风险");
}), !1;
}
});
}), t();
var n = null;
$("#locationBt").click(function(r) {
wx.cgiData.location == 0 ? ($("#location").popup({
className: "location_select simple",
buttons: [ {
text: "确认",
click: function() {
e(n.values()[0]), wx.cgiData.location = n.values()[0], t(), o.suc("修改成功"), this.remove();
},
type: "primary"
} ]
}), n = $(".localRadio").checkbox()) : l.show({
type: "warn",
msg: "你确认要关闭获取用户地理功能吗?|关闭后，你将无法获得用户地理位置信息",
buttons: [ {
text: "确定",
click: function() {
e(0), wx.cgiData.location = 0, t(), o.suc("已关闭"), this.remove();
}
}, {
text: "取消",
type: "normal",
click: function() {
this.remove();
}
} ]
});
});
}
function g(e) {
u.post({
url: "/misc/skeyform?form=advancedswitchform",
data: {
flag: e,
type: 2
}
}, function(t) {
t.base_resp.ret == 0 ? (o.suc("操作成功 "), d.open = e, location.reload()) : t.base_resp.ret == -2 ? o.err("URL和Token设置错误或者未设置") : o.err("系统发生错误， 请稍后重试 ");
});
}
function y() {
function e() {
window.open(t + "//" + location.host + $(this).data("url"), "_blank");
}
var t = location.protocol.replace("https", "http");
$("#wikiDoc,td a[data-url]").click(e);
}
function b() {
var e = "#topTab", t = new a(e, a.DATA.advanced);
t.selected(0), $("#devDiv").show(), $("#noDevDiv").show(), $("input[type=checkbox]").checkbox(), $("#js_agreeCheckbox").on("click", function() {
$(this).is(":checked") ? $("#js_toBeDeveloper").removeClass("btn_disabled").attr("disabled", !1) : $("#js_toBeDeveloper").addClass("btn_disabled").attr("disabled", !0);
}), $("#js_toBeDeveloper").on("click", function() {
$(this).attr("disabled") || u.post({
url: "/advanced/advanced?action=agreement",
data: {},
mask: !1
}, function(e) {
e.base_resp.ret == 0 ? (o.suc("开通成功"), location.href = wx.url("/advanced/advanced?action=dev&t=advanced/dev")) : o.err("开通失败");
});
});
if (d.selfMenu) {
switch (d.status) {
case "0":
$("#selfMenuTr td:eq(2)").html('<a href="/advanced/advanced?action=menu_apply&t=advanced/menu-apply' + i.data.param + '">申请</a>');
break;
case "1":
$("#selfMenuTr td:eq(2)").html('申请中... <a href="/advanced/advanced?action=menu_apply&t=advanced/menu-apply' + i.data.param + '">查看详情</a>');
}
$("#selfMenuTr").show();
} else $("#selfMenuTr").hide();
$("#mainPage").show();
}
function w() {
wx.cgiData.authrized && wx.cgiData.authrized == "1" ? ($("#js_authrized").show(), $("#Js_reset").hide(), $("#openBt").removeClass("btn_primary").addClass("btn_disabled").siblings("a").removeClass("btn_default").addClass("btn_disabled").attr("href", "")) : m();
}
v();
var E = function() {
l.show({
msg: "你确定要重置appsecret吗？|重置appsecret立即生效。所有使用旧appsecret的接口将立即失效",
buttons: [ {
text: "确定",
click: function() {
var e = this.dom.find(".js_btn").eq(0);
if (e.hasClass("btn_disabled")) return;
S.call(e);
}
}, {
text: "取消",
type: "normal",
click: function() {
this.remove();
}
} ]
});
}, S = function() {
var e = this, t = $("#Js_reset").data("appid");
u.post({
url: "/advanced/advanced?action=reset",
data: {
operation_seq: wx.cgiData.operation_seq
},
mask: !1,
beforeSend: function() {
e.removeClass("btn_primary").disable("btn_disabled");
},
complete: function() {}
}, function(t) {
t && t.base_resp && t.base_resp.ret == 0 ? (o.suc("重置成功"), setTimeout(function() {
location.reload();
}, 1e3)) : (o.err("重置失败"), e.addClass("btn_primary").enable());
});
};
$("#Js_reset").on("click", function() {
var e = wx.cgiData.strategy_status;
e ? (e.source = "appkey", e.msgid = wx.cgiData.operation_seq, e.distinguish = !0, f.check(e, function(e) {
e && e.code && e.code != "wx.pass" ? u.post({
url: "/advanced/advanced?action=reset",
data: {
code: e.code,
operation_seq: wx.cgiData.operation_seq
},
mask: !1
}, function(t) {
t && t.base_resp && t.base_resp.ret == 0 ? e.type == 1 ? (o.suc("重置成功"), setTimeout(function() {
location.reload();
}, 1e3)) : o.suc("重置申请成功") : (o.err("重置失败"), $node.addClass("btn_primary").enable());
}) : E();
})) : E();
}), function() {
function e() {
$.ajax({
url: location.href + "&f=json",
dataType: "json",
success: function(t) {
var n, r, i;
t && t.bizqa_plugin_login_info && t.bizqa_plugin_login_info.plugin_token && (n = t.bizqa_plugin_login_info.plugin_token, i = $("#js_bbsLink"), r = i.attr("href").replace(/token=[^&]+/, "token=" + n), i.attr("href", r)), t && t.base_resp && t.base_resp.ret != -3 && setTimeout(e, 1e4);
},
error: function() {
setTimeout(e, 1e4);
}
});
}
+d.dev != 0 && setTimeout(e, 1e4);
}();
} catch (x) {
wx.jslog({
src: "advanced/dev.js"
}, x);
}
});