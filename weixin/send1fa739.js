define("safe/Scan.js", [ "widget/qrcode_scan.css", "common/wx/Tips.js", "common/wx/Cgi.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict", e("widget/qrcode_scan.css");
var i = e("common/wx/Tips.js"), s = e("common/wx/Cgi.js"), o = {
wx_name: "",
container: "",
type: "",
ticket: "",
source: "",
code: "",
msgid: "",
auto_msgid: !1,
auth: "",
status_container: ".js_status",
qrcode_container: ".js_qrcode",
timeout: 1e3,
checktimeout: 1200,
onshow: null,
onscaned: null,
oncancel: null,
onconfirm: null,
onrequest: null,
dom_init: "",
distinguish: !1,
default_initdom: !1
};
function u(e) {
e = $.extend(!0, {}, o, e);
var t = {
init: '<div class="status tips"><p>请使用微信号%s(已绑定公众号安全助手)扫描二维码进行验证</p></div>'.sprintf(e.wx_name),
multi_init: '<div class="status tips"><p>请使用个人微信号（包括管理员微信号%s）扫描二维码进行验证</p></div>'.sprintf(e.wx_name),
suc: '<div class="status"><i class="icon_qrcode_scan succ"></i><div class="status_txt"><h4>扫描成功</h4><p>请在微信上点击确认即可</p></div></div>',
cannel: '<div class="status"><i class="icon_qrcode_scan warn"></i><div class="status_txt"><h4>您已取消此次操作</h4><p>您可以重新扫描验证，或关闭窗口</p></div></div>',
ok: '<div class="status"><i class="icon_qrcode_scan succ"></i><div class="status_txt"><h4>确认成功</h4></div></div>',
request: "<h2>已发送操作申请，请耐心等待</h2><p>等待公众号助手%s审核您的申请，您也可主动联系ta，请ta通过您的申请</p>".sprintf(e.wx_name)
}, n = this;
n.container = typeof e.container == "object" ? e.container : $(e.container), n.status_container = n.container.find(e.status_container), n.qrcode_container = n.container.find(e.qrcode_container), n.opt = e, n.opt.onshow && typeof n.opt.onshow == "function" ? n.opt.onshow.apply(n) : n.status_container.html(n.opt.dom_init ? n.opt.dom_init : n.opt.distinguish && !n.opt.default_initdom ? t.multi_init : t.init), n.timer = null, n.ctimer = null, n.json = {}, n.retcode = 0, n.retcodes = {
0: !0
};
var r = {
OK: 0,
ERR_SYS: -1,
ERR_ARGS: -2,
ERR_APP_BLOCK: -10,
UUID_SCANNING: 401,
UUID_EXPIRED: 402,
UUID_CANCELED: 403,
UUID_SCANED: 404,
UUID_CONFIRM: 405,
UUID_INIT: 406,
UUID_REQUEST: 407,
UUID_ERROR: 500
}, u = function() {
n.opt.uuid ? s.post({
url: wx.url("/safe/safeuuid?timespam=" + (new Date).getTime()),
data: {
uuid: n.opt.uuid,
action: "json",
type: "json"
},
mask: !1
}, function(e) {
n.json = e, n.retcode = e && !!e.errcode ? +e.errcode : 0;
}) : (n.timer && window.clearInterval(n.timer), n.ctimer && window.clearInterval(n.ctimer), f());
}, a = function() {
if (!n.retcodes[n.retcode]) {
n.retcodes[n.retcode] = !0;
switch (n.retcode) {
case r.UUID_ERROR:
n.timer && window.clearInterval(n.timer), n.ctimer && window.clearInterval(n.ctimer), f();
return;
case r.UUID_EXPIRED:
n.timer && window.clearInterval(n.timer), n.ctimer && window.clearInterval(n.ctimer), f();
return;
case r.UUID_SCANED:
n.retcodes[r.UUID_CANCELED] = !1, n.opt.onscaned && typeof n.opt.onscaned == "function" ? n.opt.onscaned.apply(n) : n.status_container.html(t.suc);
break;
case r.UUID_CANCELED:
n.retcodes[r.UUID_SCANED] = !1, n.opt.oncancel && typeof n.opt.oncancel == "function" ? n.opt.oncancel.apply(n) : n.status_container.html(t.cannel);
break;
case r.UUID_CONFIRM:
n.timer && window.clearInterval(n.timer), n.ctimer && window.clearInterval(n.ctimer);
var e = n.json.code;
e && (n.code = e), n.opt.auto_msgid && (n.msgid = n.opt.msgid);
if (n.opt.distinguish) {
var o = function() {
var e = {
action: "get_uuid",
uuid: n.opt.uuid
};
n.opt.auth && (e.auth = n.opt.auth), s.post({
url: wx.url("/misc/safeassistant"),
data: e,
mask: !1
}, {
done: function(e) {
e && e.isadmin == 0 ? (n.isadmin = !1, n.distinguish = !0) : (n.isadmin = !0, n.distinguish = !0), n.opt.onconfirm && typeof n.opt.onconfirm == "function" ? n.opt.onconfirm.apply(n) : i.suc("已确认成功");
},
fail: function(e) {
setTimeout(o, 300);
}
});
};
setTimeout(o, 0);
} else n.status_container.html(t.ok), n.opt.onconfirm && typeof n.opt.onconfirm == "function" ? n.opt.onconfirm.apply(n) : i.suc("已确认成功");
break;
case r.UUID_REQUEST:
var e = n.json.code;
e && (n.code = e), n.timer && window.clearInterval(n.timer), n.ctimer && window.clearInterval(n.ctimer), n.container.html(t.request), n.opt.onrequest && typeof n.opt.onrequest == "function" ? n.opt.onrequest.apply(n) : i.suc("已申请成功");
break;
default:
}
}
}, f = function() {
var e = {
action: "get_ticket"
};
n.opt.auth && (e.auth = n.opt.auth), s.post({
url: wx.url("/misc/safeassistant"),
data: e,
mask: !1
}, {
done: function(e) {
e && e.base_resp && e.ticket && e.base_resp.ret == 0 ? (n.opt.ticket = e.ticket, n.opt.auto_msgid && e.operation_seq && (n.opt.msgid = e.operation_seq), s.post({
url: wx.url("/safe/safeqrconnect"),
data: {
appid: "wx3a432d2dbe2442ce",
scope: "snsapi_contact",
state: "0",
redirect_uri: "https://mp.weixin.qq.com",
login_type: "safe_center",
f: "json",
type: "json"
},
mask: !1
}, function(e) {
if (e && e.uuid) {
n.opt.uuid = e.uuid;
var t = "/safe/safeqrcode?ticket=%s&uuid=%s&action=%s".sprintf(n.opt.ticket, n.opt.uuid, n.opt.type);
n.opt.code && (t = t + "&code=" + n.opt.code), n.opt.source && (t = t + "&type=" + n.opt.source), n.opt.auth && (t = t + "&auth=" + n.opt.auth), n.opt.msgid && (t = t + "&msgid=" + n.opt.msgid), n.qrcode_container.attr("src", t), n.timer = setInterval(u, n.opt.timeout), n.ctimer = setInterval(a, n.opt.checktimeout), n.json = {}, n.retcode = 0, n.retcodes = {
0: !0
};
}
})) : setTimeout(function() {
f();
}, 1e3);
},
fail: function(e) {
setTimeout(function() {
f();
}, 1e3);
}
});
};
f();
}
return u.prototype = {
destroy: function() {
return this.timer && window.clearInterval(this.timer), this.ctimer && window.clearInterval(this.ctimer), this;
}
}, u;
} catch (a) {
wx.jslog({
src: "safe/Scan.js"
}, a);
}
});define("tpl/biz_web/ui/dropdown.html.js", [], function(e, t, n) {
return '<a href="javascript:;" class="btn dropdown_switch jsDropdownBt"><label class="jsBtLabel" {if search}contenteditable="true"{/if}>{label}</label><i class="arrow"></i></a>\n<div class="dropdown_data_container jsDropdownList">\n    <ul class="dropdown_data_list">\n        {if renderHtml}\n        {renderHtml}\n        {else}\n            {each data as o index}\n            <li class="dropdown_data_item {if o.className}{o.className}{/if}">  \n                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="{o.value}" data-index="{index}" data-name="{o.name}">{o.name}</a>\n            </li>\n            {/each}        \n        {/if}\n    </ul>\n</div>\n';
});define("tpl/top.html.js", [], function(e, t, n) {
return '<ul class="tab_navs title_tab" data-index="{itemIndex=0}">\n    {each data as o index}\n    {if (typeof o.acl == "undefined" || o.acl == 1)}\n    <li data-index="{itemIndex++}" class="tab_nav {if (itemIndex == 1)}first{/if} js_top {o.className}" data-id="{o.id}"><a href="{o.url}" {if o.target==\'_blank\'}target="_blank"{/if}>{o.name}</a></li>\n    {/if}\n    {/each}\n</ul>\n';
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
});define("common/wx/verifycode.js", [ "widget/verifycode.css", "tpl/verifycode.html.js", "common/qq/events.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict", e("widget/verifycode.css");
var i = e("tpl/verifycode.html.js"), s = "/cgi-bin/verifycode?r=", o = e("common/qq/events.js"), u = o(!0);
function a(e) {
var t = this;
this.$dom = $(i), this.$img = this.$dom.find("img"), this.$input = this.$dom.find("input"), this.$img.on("load", function() {
u.trigger("VerifyCode:load", t);
}), this.$dom.find("a").click(function(e) {
t.$img.attr("src", s + +(new Date));
}).click(), e && $(e).append(this.$dom) && (this.$container = $(e));
}
a.prototype.getCode = function() {
return this.$input.val();
}, a.prototype.focus = function() {
this.$input.focus();
}, a.prototype.getInput = function() {
return this.$input;
}, a.prototype.refresh = function() {
this.$img.attr("src", s + +(new Date));
}, $.fn.verifycode = function() {
return this.each(function() {
$.data(this, "verifycode", new a(this));
});
}, n.exports = a;
} catch (f) {
wx.jslog({
src: "common/wx/verifycode.js"
}, f);
}
});define("cardticket/parse_data.js", [], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = {
DISCOUNT: "2",
GROUPON: "1",
GIFT: "3",
CASH: "4",
GENERAL_COUPON: "0"
}, s = {
CODE_TYPE_TEXT: 0,
CODE_TYPE_BARCODE: 1,
CODE_TYPE_QRCODE: 2
};
function o(e) {
var t = i[e.card_type] || e.card_type;
t += "";
switch (t) {
case "2":
e = e.discount;
break;
case "1":
e = e.groupon;
break;
case "3":
e = e.gift;
break;
case "4":
e = e.cash;
break;
case "0":
e = e.general_coupon;
break;
default:
e = e.general_coupon || e.coupon;
}
return e ? (e.type = t, e) : null;
}
function u(e) {
var t = {}, e = o(e);
if (!e) return null;
a(t, e), a(t, e.base_info);
var n = e.base_info.date_info || {};
t.time_type = n.type, t.time_type == 1 && (t.begin_time = n.begin_timestamp, t.end_time = n.end_timestamp), t.from_day = n.fixed_begin_term || 0, t.fixed_term = n.fixed_term || 30, t.quantity = e.base_info.sku.quantity, t.shop_id_list = e.base_info.shop_id_list, t.location_id_list = e.base_info.location_id_list;
var r = s[t.code_type];
return t.code_type = typeof r != "undefined" ? r : t.code_type, typeof t.code_type == "undefined" && (t.code_type = 1), t.least_cost = e.least_cost && e.least_cost / 100, t.reduce_cost = e.reduce_cost && e.reduce_cost / 100, t.discount = t.discount && (100 - t.discount) / 10, t.type == 1 ? t.detail = t.deal_detail : t.detail = t.default_detail, t.shop_type = 2, t;
}
function a(e, t) {
for (var n in t) t.hasOwnProperty(n) && typeof t[n] != "object" && (e[n] = t[n]);
return e;
}
function f(e) {
var t = {}, n = 0, r = [];
for (var i = 0; i < e.length; i++) {
var s = u(e[i]);
if (!s) continue;
t[s.id] = s, r.push(s);
}
return {
card_cache: t,
card_list: r
};
}
return {
parse_cardticket: u,
parse_cardlist: f
};
} catch (l) {
wx.jslog({
src: "cardticket/parse_data.js"
}, l);
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
});define("common/wx/richEditor/msgSender.js", [ "common/wx/popup.js", "widget/msg_sender.css", "common/qq/jquery.plugin/tab.js", "common/wx/richEditor/emotionEditor.js", "media/media_dialog.js", "common/wx/media/factory.js", "common/qq/Class.js", "common/wx/Tips.js", "common/wx/media/audio.js", "common/wx/media/img.js", "common/wx/media/video.js", "common/wx/media/cardmsg.js", "common/wx/tooltip.js", "common/wx/media/appmsg.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict", e("common/wx/popup.js"), e("widget/msg_sender.css");
var i = e("common/qq/jquery.plugin/tab.js"), s = e("common/wx/richEditor/emotionEditor.js"), o = e("media/media_dialog.js"), u = e("common/wx/media/factory.js"), a = e("common/qq/Class.js"), f = e("common/wx/Tips.js"), l = e("common/wx/media/audio.js"), c = e("common/wx/media/img.js"), h = e("common/wx/media/video.js"), p = e("common/wx/media/cardmsg.js"), d = e("common/wx/tooltip.js"), v = e("common/wx/media/appmsg.js"), m = 1, g = {}, y = [ {
text: "文字",
acl: "can_text_msg",
className: "tab_text",
selector: "js_textArea",
innerClassName: "no_extra",
type: 1
}, {
text: "图片",
acl: "can_image_msg",
className: "tab_img",
selector: "js_imgArea",
type: 2
}, {
text: "语音",
acl: "can_voice_msg",
className: "tab_audio",
selector: "js_audioArea",
type: 3
}, {
text: "视频",
acl: "can_video_msg",
className: "tab_video",
selector: "js_videoArea",
type: 15
}, {
text: "图文消息",
acl: "can_app_msg",
className: "tab_appmsg",
selector: "js_appmsgArea",
type: 10
}, {
text: "商品消息",
acl: "can_commodity_app_msg",
className: "tab_commondity_appmsg",
selector: "js_commondityAppmsgArea",
type: 11
}, {
text: "卡券",
acl: "can_card_msg",
className: "tab_cardmsg",
selector: "js_cardmsgArea",
type: 16
} ];
function b(e, t) {
var n = [];
for (var r = 0; r < e.length; ++r) {
var i = e[r];
!!t && !!t[i.acl] && n.push(i);
}
return n;
}
function w(e) {
var t = {}, n = e.slice();
n.push({
acl: "can_video_msg",
className: "tab_video",
selector: "js_videoArea",
text: "视频",
type: 4,
index: 3
});
for (var r = 0; r < n.length; ++r) {
var i = n[r];
i.index = i.index || r, t[i.type] = i;
}
return t;
}
var E = u.itemRender, S = a.declare({
select: function() {
this.msgSender.type = this.type;
},
fillData: function(e) {},
getData: function() {},
click: function() {
this.msgSender.type = this.type;
}
}), x = S.Inherit({
init: function(e) {
this.msgSender = e, this.type = 1, this.info = e.infos[this.type], this.wordlimit = e.opt.wordlimit, this.index = this.info && this.info.index;
},
fillData: function(e) {
var t = this.msgSender;
t.type = this.type, t.select(this.index), t.emotionEditor.setContent(e.content);
},
getData: function() {
var e = this.msgSender.emotionEditor.getContent();
return {
type: this.type,
content: e
};
},
clear: function() {
return this.fillData({
content: ""
});
},
isValidate: function(e) {
var t = e && e.type == 1 && e.content != "" && e.content.length <= this.wordlimit;
return t || f.err("文字必须为1到%s个字".sprintf(this.wordlimit)), t;
}
}), T = S.Inherit({
init: function(e, t) {
this.type = t, this.msgSender = e, this.info = e.infos[t], this.index = this.info && this.info.index;
},
click: function() {
var e = null, t = this;
return t.type == 10 || t.type == 11 || t.type == 15 ? e = o.getAppmsg : e = o.getFile, e({
type: t.type,
begin: 0,
count: 10,
onSelect: function(e, n) {
var r = t.msgSender;
t.msgSender.type = e, r.select(t.index);
var i = "msgSender_media_%s_%s".sprintf(r.gid, e);
$("." + t.info.selector).html('<div id="%s"></div>'.sprintf(i)), E[e] && E[e]("#" + i, n);
}
}), !1;
},
fillData: function(e) {
var t = this.msgSender, n = this.type, r = "msgSender_media_%s_%s".sprintf(t.gid, n);
$("." + this.info.selector).html('<div id="%s"></div>'.sprintf(r)), t.select(this.index), this.msgSender.type = n, E[n] && E[n]("#" + r, e);
},
clear: function() {
var e = this.type;
return $("." + this.info.selector).html("");
},
getData: function(e) {
var t = this.type, n = "msgSender_media_%s_%s".sprintf(this.msgSender.gid, t), r = $("#" + n).data("opt");
if (!r) return !1;
if (!e) return t == 10 || t == 11 ? {
type: t,
app_id: r.data.app_id
} : t == 15 ? {
type: t,
app_id: r.app_id
} : {
type: t,
file_id: r.file_id
};
r.type = t;
var i = r.data || {};
return $.extend(r, i);
},
isValidate: function(e) {
var t = !!e;
if (!!e) {
var n = e.type;
n == 10 || n == 11 || n == 15 ? t = !!e.type && !!e.app_id : t = !!e.type && !!e.file_id;
}
return t || f.err("请选择素材"), t;
}
}), N = {
wordlimit: 600
}, C = a.declare({
init: function(e, t) {
var n = this, r = 0;
e = $(e).show(), n.gid = m++, n.opt = $.extend(!0, {}, N, t);
var i = y, s = t && t.acl || {};
i = b(i, s), n.infos = w(i), n.op = {
"1": new x(n),
"2": new T(n, 2),
"3": new T(n, 3),
"4": new T(n, 4),
"7": new T(n, 15),
"10": new T(n, 10),
"11": new T(n, 11),
"15": new T(n, 15),
"16": new p(n)
}, n.tab = e.tab({
index: r,
tabs: i,
select: function(e, t, n, r) {},
click: function(e, t, r, i) {
return n.op[i] && n.op[i].click();
}
}), n._init(e);
var o = t.data;
o ? n.setData(o) : n.type = 1;
},
setData: function(e) {
e = e || {
type: 1
};
var t = this, n = null, r = e.type;
t.type = r || 1, !(n = t.op[r]) || n.fillData(e);
},
_init: function(e) {
this.dom = e, this.emotionEditor = new s($(".js_textArea", e), {
wordlimit: this.opt.wordlimit,
linebreak: !0
}), new d({
dom: this.dom.find(".tab_nav"),
position: {
x: -2,
y: 1
}
});
},
getData: function(e) {
if (this.type) {
var t = this.op[this.type].getData(e);
return {
error: !this.isValidate(),
data: t
};
}
return {
error: !0
};
},
getArea: function(e) {
return this.dom.find("." + this.infos[e].selector);
},
getTabs: function() {
return this.tab.getTabs();
},
isValidate: function() {
var e = this.type && this.op[this.type].getData();
return this.type && this.op[this.type].isValidate(e);
},
clear: function() {
return this.type && this.op[this.type].clear();
},
select: function(e) {
return this.tab.select(e);
}
});
return C;
} catch (k) {
wx.jslog({
src: "common/wx/richEditor/msgSender.js"
}, k);
}
});define("message/message_cgi.js", [ "common/wx/Tips.js", "common/wx/Cgi.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = {
masssend: "/cgi-bin/masssend?t=ajax-response",
massdel: "/cgi-bin/masssendpage?action=delete",
star: "/cgi-bin/setstarmessage?t=ajax-setstarmessage",
save: "/cgi-bin/savemsgtofile?t=ajax-response",
sendMsg: "/cgi-bin/singlesend?t=ajax-response&f=json",
getNewMsg: "/cgi-bin/singlesendpage?tofakeid=%s&f=json&action=sync&lastmsgfromfakeid=%s&lastmsgid=%s&createtime=%s",
getNewMsgCount: "/cgi-bin/getnewmsgnum?f=json&t=ajax-getmsgnum&lastmsgid=",
pageNav: "/cgi-bin/message?f=json&offset=%s&day=%s&keyword=%s&action=%s&frommsgid=%s&count=%s",
searchMsgByKeyword: "/cgi-bin/getmessage?t=ajax-message&count=10&keyword="
}, s = e("common/wx/Tips.js"), o = e("common/wx/Cgi.js");
n.exports = {
masssend: function(e, t, n) {
o.post({
url: wx.url(i.masssend),
dataType: "html",
data: e,
error: function(e, t) {
s.err("发送失败"), n && n();
}
}, function(e) {
var r = $.parseJSON(e);
if (r.ret && r.ret == "0") {
s.suc("发送成功"), t && t(r);
return;
}
r.ret && r.ret == "64004" ? s.err("今天的群发数量已到，无法群发") : r.ret && r.ret == "67008" ? s.err("消息中可能含有具备安全风险的链接，请检查") : r.ret == "-6" ? s.err("请输入验证码") : r.ret && r.ret == "14002" ? s.err("没有“审核通过”的门店。确认有至少一个“审核通过”的门店后可进行卡券投放。") : r.ret && r.ret == "14003" ? s.err("投放用户缺少测试权限，请先设置白名单") : s.err("发送失败"), n && n(r);
});
},
massdel: function(e, t, n) {
o.post({
url: wx.url(i.massdel),
data: {
id: e
},
error: function(e, t) {
s.err("删除失败");
}
}, function(e) {
if (e && e.base_resp && e.base_resp.ret == 0) {
s.suc("删除成功"), t && t(e);
return;
}
s.err("删除失败"), n && n(e);
});
},
getNewMsg: function(e, t, n, r, s, u) {
o.get({
url: wx.url(i.getNewMsg.sprintf(e, t, n, r)),
mask: !1,
handlerTimeout: !0,
error: u
}, function(e) {
e && e.base_resp && e.base_resp.ret == 0 && s && s(e.page_info.msg_items.msg_item);
});
},
save: function(e, t, n, r) {
typeof n == "function" && (r = n, n = ""), o.post({
mask: !1,
url: wx.url(i.save),
dataType: "html",
data: {
msgid: e,
filename: t,
digest: n
},
error: function(e, t) {
s.err("保存素材失败");
}
}, function(e) {
var t = $.parseJSON(e);
t && t.ret == "0" ? (s.suc("保存素材成功"), typeof r == "function" && r(t)) : s.err("保存素材失败");
});
},
star: function(e, t, n) {
o.post({
mask: !1,
url: wx.url(i.star),
data: {
msgid: e,
value: t == 1 ? 0 : 1
},
dataType: "html",
error: function() {
s.err(t == 1 ? "取消收藏失败" : "收藏消息失败");
}
}, function(e) {
e = $.parseJSON(e), e && e.ret != 0 ? s.err(t == 1 ? "取消收藏失败" : "收藏消息失败") : (s.suc(t == 1 ? "取消收藏成功" : "收藏消息成功"), typeof n == "function" && n(e));
});
},
sendMsg: function(e, t, n) {
o.post({
url: wx.url(i.sendMsg),
data: e,
error: function() {
s.err("发送失败"), n && n();
}
}, function(e) {
if (!e || !e.base_resp) {
s.err("发送失败");
return;
}
var r = e.base_resp.ret;
if (r == 0) {
s.suc("回复成功"), typeof t == "function" && t(e);
return;
}
r == 10703 ? s.err("对方关闭了接收消息") : r == 10700 ? s.err("不能发送，对方不是你的粉丝") : r == 10701 ? s.err("该用户已被加入黑名单，无法向其发送消息") : r == 62752 ? s.err("消息中可能含有具备安全风险的链接，请检查") : r == 10704 ? s.err("该素材已被删除") : r == 10705 ? s.err("该素材已被删除") : r == 10706 ? s.err("由于该用户48小时未与你互动，你不能再主动发消息给他。直到用户下次主动发消息给你才可以对其进行回复。") : r == -8 ? s.err("请输入验证码") : s.err("发送失败"), n && n(e);
});
},
getNewMsgCount: function(e, t, n) {
o.post({
mask: !1,
dataType: "html",
handlerTimeout: !0,
url: wx.url(i.getNewMsgCount + e),
error: n
}, function(e) {
e = $.parseJSON(e), typeof t == "function" && t(e);
});
},
quickReply: function(e, t, n) {
this.sendMsg({
mask: !1,
tofakeid: e.toFakeId,
imgcode: e.imgcode,
type: 1,
content: e.content,
quickreplyid: e.quickReplyId
}, t, n);
},
pageNav: function(e, t, n) {
var r = i.pageNav.sprintf((e.page - 1) * e.count, e.day || "", e.keyword || "", e.action || "", e.frommsgid || "", e.count || "");
o.post({
dataType: "json",
url: wx.url(r),
mask: !1,
data: {},
error: n
}, function(e) {
e && e.base_resp && e.base_resp.ret == 0 && typeof t == "function" && t(e.msg_items.msg_item);
});
},
searchMsgByKeyword: function(e, t, n) {
o.post({
dataType: "html",
mask: !1,
url: wx.url(url.searchMsgByKeyword + e),
error: function() {
s.err("系统发生异常，请刷新页面重试"), n && n({});
}
}, function(e) {
typeof t == "function" && t($.parseJSON(e));
});
}
};
} catch (u) {
wx.jslog({
src: "message/message_cgi.js"
}, u);
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
});define("biz_web/ui/dropdown.js", [ "biz_web/widget/dropdown.css", "tpl/biz_web/ui/dropdown.html.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict", e("biz_web/widget/dropdown.css");
var i = e("tpl/biz_web/ui/dropdown.html.js"), s = {
label: "请选择",
data: [],
callback: $.noop,
render: $.noop,
delay: 500,
disabled: !1,
search: !1
}, o = "dropdown_menu";
function u(e) {
e.render && typeof e.render && (e.renderHtml = "", $.each(e.data, function(t, n) {
e.renderHtml += e.render(n);
})), e = $.extend(!0, {}, s, e);
var t = this;
t.container = $(e.container), t.container.addClass(e.search ? o + " search" : o), this.isDisabled = e.disabled, e.disabled && t.container.addClass("disabled"), t.opt = e, t.container.html(template.compile(i)(e)).find(".jsDropdownList").hide(), t.bt = t.container.find(".jsDropdownBt"), t.dropdown = t.container.find(".jsDropdownList"), $.each(e.data, function(e, n) {
$.data(t.dropdown.find(".jsDropdownItem")[e], "value", n.value), $.data(t.dropdown.find(".jsDropdownItem")[e], "name", n.name), $.data(t.dropdown.find(".jsDropdownItem")[e], "item", n);
}), typeof e.index != "undefined" && e.data.length !== 0 && (t.bt.find(".jsBtLabel").html(e.data[e.index].name || e.label), t.value = e.data[e.index].value), t.bt.on("click", function() {
return a(), e.disabled || (t.dropdown.show(), t.container.addClass("open")), !1;
}), e.search && t.bt.find(".jsBtLabel").on("keyup", function(e) {
if (t.disabled) return;
var n = $(this);
if (e.keyCode == 13) t.value ? (n.html(n.data("name")).removeClass("error"), t.dropdown.hide()) : n.find("div").remove(); else {
var r = n.html().trim(), i = [];
t.value = null, t.dropdown.show().find(".jsDropdownItem").each(function() {
var e = $(this);
e.hasClass("js_empty") || (e.data("name").indexOf(r) > -1 ? (e.parent().show(), i.push({
name: e.data("name"),
value: e.data("value")
})) : e.parent().hide());
}), i.length == 0 ? t.dropdown.find(".js_empty").length == 0 && t.dropdown.append('<li class="jsDropdownItem js_empty empty">未找到"' + r + '"</li>') : (t.dropdown.find(".js_empty").remove(), i.length == 1 && (i[0].name == r ? n.removeClass("error") : n.data("name", i[0].name), t.value = i[0].value));
}
}).on("blur", function() {
if (t.disabled) return;
var n = $(this);
t.value ? $(this).html() != $(this).data("name") && (n.addClass("error"), t.value = null) : n.html() != "" ? n.addClass("error") : (n.html(e.label).removeClass("error"), t.value = null);
}).on("focus", function() {
if (t.disabled) return;
var n = $(this), r = $(this).html().trim();
r == e.label && n.html("").removeClass("error"), r == "" && n.removeClass("error"), t.dropdown.show(), t.container.addClass("open");
}), $(document).on("click", a), t.dropdown.on("click", ".jsDropdownItem", function(n) {
var r = $(this).data("value"), i = $(this).data("name"), s = $(this).data("index");
if (!t.value || t.value && t.value != r) {
t.value = r, t.name = i;
if (e.callback && typeof e.callback == "function") {
var o = e.callback(r, i, s, $(this).data("item")) || i;
e.search ? t.bt.find(".jsBtLabel").html(o).data("name", o).removeClass("error") : t.bt.find(".jsBtLabel").html(o);
}
}
t.dropdown.hide();
});
}
function a() {
$(".jsDropdownList").hide(), $(".dropdown_menu").each(function() {
!$(this).hasClass("dropdown_checkbox") && $(this).removeClass("open");
});
}
return u.prototype = {
selected: function(e, t) {
var n = this;
if (typeof e == "number") {
if (this.opt.data && this.opt.data[e]) {
var r = this.opt.data[e].name, i = this.opt.data[e].value;
t != 0 && this.dropdown.find(".jsDropdownItem:eq(" + e + ")").trigger("click", i), this.bt.find(".jsBtLabel").html(r);
}
} else $.each(this.opt.data, function(r, s) {
if (e == s.value || e == s.name) return t != 0 && n.dropdown.find(".jsDropdownItem:eq(" + r + ")").trigger("click", i), n.bt.find(".jsBtLabel").html(s.name), !1;
});
return this;
},
reset: function() {
return this.bt.find(".jsBtLabel").html(this.opt.label), this.value = null, this;
},
hidegreater: function(e) {
var t = this;
return typeof e == "number" && t.opt.data && t.opt.data[e] && (t.dropdown.find(".jsDropdownItem").show(), t.dropdown.find(".jsDropdownItem:gt(" + e + ")").hide()), this;
},
destroy: function() {
return this.isDisabled && this.container.removeClass("disabled"), this.container.children().remove(), this.container.off(), this;
},
enable: function() {
return this.opt.disabled = !1, this.container.removeClass("disabled"), this.opt.search && this.bt.find(".jsBtLabel").attr("contenteditable", !0), this;
},
disable: function() {
return this.opt.disabled = !0, this.container.addClass("disabled"), this.opt.search && this.bt.find(".jsBtLabel").attr("contenteditable", !1), this;
}
}, u;
} catch (f) {
wx.jslog({
src: "biz_web/ui/dropdown.js"
}, f);
}
});define("common/wx/region.js", [ "common/wx/Cgi.js", "biz_web/ui/dropdown.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("common/wx/Cgi.js"), s = e("biz_web/ui/dropdown.js"), o = function(e) {
this.opt = e, this.container = $(e.container), this._action = null, h.call(this);
}, u, a = "/cgi-bin/getregions?t=setting/ajax-getregions&id={id}", f = {
country: "国家",
province: "省份",
city: "城市"
}, l = function(e) {
return e === undefined && (e = ""), e += "", e && e.replace(/(\u00a0|&nbsp;)/g, " ").replace(/&quot;/ig, '"').replace(/&#39;/ig, "'");
}, c = function(e, t) {
var n = wx.url(a.format({
id: e || -1
}));
i.get({
url: n,
mask: !1
}, t);
}, h = function() {
var e = this;
e.opt.cgi && (a = e.opt.cgi + "?t=setting/ajax-getregions&id={id}"), e.opt.list ? $.each([ "country", "province", "city" ], function(t, n) {
e.opt.list[n] = e.opt.list[n] || [];
}) : e.opt.list = {
country: [],
province: [],
city: []
}, e.opt.display = e.opt.display || {
country: !0,
province: !0,
city: !0
}, e.selectors = {}, $.each([ "country", "province", "city" ], function(t, n) {
var r = "js_" + n + (Math.random() * 1e4 | 0);
$('<div id="' + r + '" style="display:none"></div>').appendTo(e.container), e.selectors[n] = "#" + r;
}), p.call(this, "0", "country");
}, p = function(e, t) {
var n = this;
n._action = e, n.status = "loading", c(e, function(r) {
if (n._action != e) return;
n.status = "loaded";
var i = [], s = n.opt.list[t];
$.each(r.data, function(e, r) {
var s = l($.trim(r.name)).replace(/"/g, "&quot;");
"中国" == s ? i.unshift({
name: s,
value: r.id
}) : i.push({
name: s,
value: r.id
}), n.opt.remove && n.opt.remove[t] && n.opt.remove[t].length > 0 && n.opt["remove"][t].indexOf(parseInt(r.id, 10)) != -1 && ("中国" == s ? i.shift() : i.pop());
}), i = s.concat(i), d.call(n, t, i);
var o = n.opt.data;
o && o[t] && n[t].selected(o[t]), (v.call(n, t) || n.opt.display[t] == 0) && n[t].container.hide(), (v.call(n, t) || t == "city") && n.opt.onComplete && n.opt.onComplete.call(n), n.opt.onLoadComplete && n.opt.onLoadComplete.call(n, t, e);
});
}, d = function(e, t) {
var n = this;
n[e] = new s({
container: n.selectors[e],
label: f[e],
data: t,
callback: function(t, r) {
switch (e) {
case "country":
p.call(n, t, "province");
break;
case "province":
p.call(n, t, "city");
}
switch (e) {
case "country":
n.province && n.province.container.hide(), n.province = null;
case "province":
n.city && n.city.container.hide(), n.city = null;
}
n.opt.onChange && n.opt.onChange(e, t, r);
}
}), n[e].container.show();
}, v = function(e) {
return this.status != "loading" && (this[e] == null || this[e].opt.data.length == 0);
}, m = {
get: function(e) {
return v.call(this, e) ? "" : this[e] && this[e].name || -1;
},
getAll: function() {
return {
country: this.get("country"),
province: this.get("province"),
city: this.get("city")
};
}
};
$.extend(o.prototype, m), n.exports = o;
} catch (g) {
wx.jslog({
src: "common/wx/region.js"
}, g);
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
});define("mass/send.js", [ "common/qq/mask.js", "common/wx/Tips.js", "common/wx/top.js", "common/wx/region.js", "biz_web/ui/dropdown.js", "safe/safe_check.js", "message/message_cgi.js", "common/wx/richEditor/msgSender.js", "common/wx/dialog.js", "biz_web/ui/checkbox.js", "common/wx/Cgi.js", "cardticket/parse_data.js", "common/wx/verifycode.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = wx.cgiData, s = i.need_verify_code, o = e("common/qq/mask.js"), u = e("common/wx/Tips.js"), a = e("common/wx/top.js"), f = e("common/wx/region.js"), l = e("biz_web/ui/dropdown.js"), c = e("safe/safe_check.js"), h = e("message/message_cgi.js"), p = e("common/wx/richEditor/msgSender.js"), d = e("common/wx/dialog.js"), v = e("biz_web/ui/checkbox.js");
(new a("#topTab", a.DATA.mass)).selected(0);
var m = $("#toTencentMicroblog").checkbox(), g = $("#toTencentNews").checkbox(), y = $("#js_toQQBrowser").checkbox(), b = new f({
container: "#js_region",
data: {},
list: {
country: [ {
id: -1,
name: "全部"
} ],
province: [],
city: []
}
}), w = [];
for (var E = 0; E < i.group.length; ++E) {
var S = i.group[E];
w.push({
name: S.name,
value: S.id
});
}
var x = new l({
container: "#js_group",
data: w,
callback: function(e, t) {}
}), T = new l({
container: "#js_sex",
data: [ {
name: "全部",
value: "0"
}, {
name: "男",
value: "1"
}, {
name: "女",
value: "2"
} ],
callback: function(e, t) {}
}), N = new l({
container: "#js_sendObj",
data: [ {
name: "全部用户",
value: "-1"
}, {
name: "按分组选择",
value: "group"
} ],
callback: function(e, t) {
e == "-1" ? $("#js_group").hide() : $("#js_group").show();
}
});
N.selected(0), x.selected(0), T.selected(0), $("#leftNum").html(i.mass_send_left), i.mass_send_left <= 0 && $("#js_submit").disable("btn_disabled");
function C() {
k = new p($("#js_msgSender"), {
data: {
type: 1
},
acl: wx.acl.msg_acl
});
}
var k, L = e("common/wx/Cgi.js"), A = e("cardticket/parse_data.js");
i.cardid ? L.get({
url: "/merchant/electroniccardmgr?action=get&card_id=" + i.cardid,
error: function() {
C();
}
}, function(e) {
if (e.base_resp.ret == 0) {
var t = $.parseJSON(e.card_detail);
t = A.parse_cardticket(t), t.card_type = t.type, t.cardnum = i.cardnum, t.type = 16, k = new p($("#js_msgSender"), {
data: t,
acl: wx.acl.msg_acl
});
} else C();
}) : C();
var O = null, M = $("#verifycode"), _ = e("common/wx/verifycode.js");
$("#js_submit").click(function() {
function e(e) {
h.masssend(r, function(t) {
M.html("").hide(), O = null, e || (location.href = wx.url("/cgi-bin/masssendpage?t=mass/list&action=history&begin=0&count=10"));
}, function(e) {
s.btn(!0);
if (!e) return;
e.ret == "-6" && (O = M.html("").show().verifycode().data("verifycode"), O.focus());
});
}
function t() {
d.show({
type: "warn",
msg: "警告|消息开始群发后无法撤销，是否确认群发？",
mask: !0,
buttons: [ {
text: "确定",
click: function() {
s.btn(!1), e(!1), this.remove();
}
}, {
text: "取消",
type: "normal",
click: function() {
s.btn(!0), this.remove();
}
} ]
});
}
var n = k.getData(), r = {}, s = $(this);
if (n.error) return;
s.btn(!1), n = n.data, r.type = n.type, r.appmsgid = n.app_id, r.fileid = n.file_id, r.content = n.content, r.cardid = n.cardid, r.cardquantity = n.cardnum, r.cardlimit = n.cardnum == 0 ? 0 : 1, r.sex = T.value, r.groupid = N.value, N.value == "group" && (r.groupid = x.value), r.synctxweibo = m.value() ? 1 : 0, $("#toTencentNews").length && (r.synctxnews = g.value() ? 1 : 0), $("#js_toQQBrowser").length && (r.syncqqbrowser = y.value() ? 1 : 0);
var o = b.getAll();
r.country = o.country == "-1" || o.country == "全部" ? "" : o.country, r.province = o.province == "-1" ? "" : o.province, r.city = o.city == "-1" ? "" : o.city;
if (O != null && O.getCode().trim().length <= 0) {
u.err("请输入验证码"), O.focus(), s.btn(!0);
return;
}
r.imgcode = O && O.getCode().trim(), r.operation_seq = i.operation_seq;
var a = i.strategy_status;
a.third_status = i.third_status, a.bind_mail = i.bind_mail, a ? a.wx_protect && a.wx_alias ? (a.source = "msgs", a.msgid = i.operation_seq, a.distinguish = !0, c.check(a, function(n) {
n && n.code && n.code != "wx.pass" ? (r.code = n.code, n.type == -1 ? e(!0) : e(!1), s.btn(!0)) : t();
}, {
onClose: function() {
s.btn(!0);
}
})) : a.wx_alias && i.gray_status == "1" ? c.off_protect_tip(function() {
c.bind("bind_masssend", a, function(e) {
u.suc("微信保护开启成功"), i.strategy_status.wx_alias = e, i.strategy_status.wx_protect = 1, i.strategy_status.protect_status = 2, s.btn(!0);
}, {
onClose: function() {
s.btn(!0);
}
});
}, {
onClose: function() {
s.btn(!0);
}
}) : i.gray_status == "1" ? c.no_helper_tip(function() {
c.bind("bind_masssend", a, function(e) {
u.suc("微信保护开启成功"), i.strategy_status.wx_alias = e, i.strategy_status.wx_protect = 1, i.strategy_status.protect_status = 2, s.btn(!0);
}, {
onClose: function() {
s.btn(!0);
}
});
}, {
onClose: function() {
s.btn(!0);
}
}) : t() : t();
}), function() {
var e = "https://mp.weixin.qq.com/misc/setsyncweibo?type=bind&from=masssendpage&token=" + wx.data.t;
$("#bindTencentMicroblog").attr("href", "https://open.t.qq.com/cgi-bin/oauth2/authorize?client_id=801271399&response_type=code&redirect_uri=" + encodeURIComponent(e));
var t = wx.cgiData.errcode;
if (t == "") return;
t == "10000" ? u.err("选定的腾讯微博帐号已经被其他公众号绑定，绑定失败") : u.err("绑定失败，请稍后再试");
}();
} catch (D) {
wx.jslog({
src: "mass/send.js"
}, D);
}
});