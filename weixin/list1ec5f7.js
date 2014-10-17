define("biz_web/lib/spin.js", [], function(e, t, n) {
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
});define("tpl/top.html.js", [], function(e, t, n) {
return '<ul class="tab_navs title_tab" data-index="{itemIndex=0}">\n    {each data as o index}\n    {if (typeof o.acl == "undefined" || o.acl == 1)}\n    <li data-index="{itemIndex++}" class="tab_nav {if (itemIndex == 1)}first{/if} js_top {o.className}" data-id="{o.id}"><a href="{o.url}" {if o.target==\'_blank\'}target="_blank"{/if}>{o.name}</a></li>\n    {/if}\n    {/each}\n</ul>\n';
});define("message/renderList.js", [ "common/qq/emoji.js", "common/wx/simplePopup.js", "common/qq/Class.js", "common/wx/media/img.js", "common/wx/media/audio.js", "common/wx/media/video.js", "common/wx/media/idCard.js", "tpl/msgListItem.html.js", "common/wx/RichBuddy.js", "common/wx/remark.js", "common/wx/media/simpleAppmsg.js", "common/qq/events.js", "message/message_cgi.js", "common/wx/time.js", "common/wx/Tips.js", "tpl/message/video_popup.html.js", "common/wx/richEditor/emotionEditor.js", "common/wx/verifycode.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict", e("common/qq/emoji.js");
var i = e("common/wx/simplePopup.js"), s = e("common/qq/Class.js"), o = e("common/wx/media/img.js"), u = e("common/wx/media/audio.js"), a = e("common/wx/media/video.js"), f = e("common/wx/media/idCard.js"), l = e("tpl/msgListItem.html.js"), c = e("common/wx/RichBuddy.js"), h = e("common/wx/remark.js"), p = e("common/wx/media/simpleAppmsg.js"), d = e("common/qq/events.js"), v = d(!0), m = e("message/message_cgi.js"), g = e("common/wx/time.js"), y = e("common/wx/Tips.js"), b = g.timeFormat, w = e("tpl/message/video_popup.html.js"), E = !1, S = {
"1": function(e, t) {
return e.html(t.content.emoji());
},
"2": function(e, t) {
return new o({
container: $("#" + e.attr("id")),
file_id: 0,
msgid: t.id,
source: t.source,
fakeid: t.fakeid
});
},
"3": function(e, t) {
var n = t;
return n.selector = "#" + e.attr("id"), new u(n);
},
"4": function(e, t) {
var n = t;
return n.selector = "#" + e.attr("id"), n.ff_must_flash = !0, new a(n);
},
"42": function(e, t) {
var n = t;
return n.container = "#" + e.attr("id"), new f(n);
},
"10": function(e, t) {
var n = t;
return n.container = "#" + e.attr("id"), new p(n);
},
"15": function(e, t) {
var n = t;
return n.selector = e, n.tpl = "videomsg", n.id = Math.random() * 1e5 | 0, new a(n);
}
};
function x(e) {
var t = new c;
$(".avatar", e).mouseover(function() {
var e = $(this), n = parseInt(e.attr("data-fakeid"), 10), r = e.offset(), i = e.width();
if (n == wx.data.uin) return;
t.show({
fakeId: n,
position: {
left: r.left + i + 2,
top: r.top
}
});
}).mouseout(function() {
t.hide();
});
}
function T(e) {
$(".js_changeRemark", e).unbind("click").click(function(t) {
var n = $(this), r = n.closest("li.msgListItem"), i = n.attr("data-fakeid"), s = $(".nickname[data-fakeid=" + i + "]", e), o = $(".remark_name[data-fakeid=" + i + "]", e), u = $.trim(s.html()) == "" ? "" : o.html();
h.show(i, u);
}), v.on("Remark:changed", function(t, n) {
var r, i, s, o;
r = $(".nickname[data-fakeid=" + t + "]", e), i = $(".remark_name[data-fakeid=" + t + "]", e), s = $.trim(r.html()) == "" ? "" : i.html(), o = s == "" ? i.html() : r.find("strong").html(), n == "" && s != "" ? (r.html(""), i.html(o)) : n != "" && s == "" ? (i.html(n), r.html("(<strong>{nickName}</strong>)".format({
nickName: o
}))) : n != "" && s != "" && i.html(n);
});
}
function N(e) {
$(e).off("click", ".js_save").on("click", ".js_save", function(e) {
var t = $(this), n = t.attr("idx"), r = t.attr("data-type");
r == 4 ? $(w).popup({
title: "保存为视频消息",
onOK: function() {
var e = this.get().find(".title").val(), t = this.get().find(".digest").val();
if (e.length < 1 || e.length > 64) return y.err("请输入1到64个字的标题"), !0;
if (t != "" && t.length > 120) return y.err("简介字数不能超过120字"), !0;
m.save(n, e, t, function() {});
},
onCancel: function() {
this.hide();
},
onHide: function() {
this.remove();
}
}) : new i({
title: "填写素材名字",
callback: function(e) {
m.save(n, e, function() {});
},
rule: function(e, t, n) {
var r = $.trim(e);
return r != "" && r.length <= 50 && r.indexOf(" ") == -1;
},
msg: "素材名必须为1到50个字符，并且素材名不能包含空格"
});
});
}
function C(e) {
e.off("click", ".js_star").on("click", ".js_star", function(e) {
var t = $(this), n = t.attr("idx"), r = t.attr("action"), i = t.attr("starred");
m.star(n, i, function(e) {
i == 1 ? (t.removeClass("star_orange").addClass("star_gray"), t.attr("starred", 0)) : (t.removeClass("star_gray").addClass("star_orange"), t.attr("starred", 1)), t.attr("title", i == 1 ? "收藏消息" : "取消收藏"), r == "star" && i == 1 && $("#msgListItem" + n).fadeOut();
});
});
}
var k = e("common/wx/richEditor/emotionEditor.js");
function L(e) {
e.off("click", ".js_reply").on("click", ".js_reply", function() {
var t = $(this), n = t.data("id"), r = $("#msgListItem" + n).toggleClass("replying");
$(".replying", e).each(function() {
var e = $(this), t = e.data("id");
t != n && e.removeClass("replying");
}), r.data("hasClickQuickReply") || (A(r.find(".js_quick_reply_box"), r), r.data("hasClickQuickReply", !0));
});
}
function A(t, n) {
var r = 140, i = $(".js_editor", t), s = new k(i, {
wordlimit: r,
isHTML: !0
}), o = $(".js_reply_OK", t), u = $(".js_reply_pickup", t);
u.unbind("click").click(function() {
var e = $(this).data("id");
$("#msgListItem" + e).removeClass("replying");
}), t.keyup(function(e) {
if (wx.isHotkey(e, "enter")) return o.click(), !1;
});
var a = null, f = $(".verifyCode", t), l = e("common/wx/verifycode.js");
o.unbind("click").click(function() {
var e = $(this), t = e.data("id"), i = e.data("fakeid"), o = s.getContent();
if (o.length <= 0 || o.length > r) {
y.err("快捷回复的内容必须为1到140个字符");
return;
}
if (a != null && a.getCode().trim().length <= 0) {
y.err("请输入验证码"), a.focus();
return;
}
y.suc("回复中...请稍候"), e.btn(!1), m.quickReply({
toFakeId: i,
content: o,
quickReplyId: t,
imgcode: a && a.getCode().trim()
}, function(t) {
s.setContent(""), f.html("").addClass("dn"), a = null, n.addClass("replyed"), e.btn(!0);
}, function(t) {
e.btn(!0), t && t.base_resp && t.base_resp.ret == -8 && (a = f.html("").removeClass("dn").verifycode().data("verifycode"), a.focus());
});
});
}
var O = function() {
$(".avatar img").each(function() {
var e = $(this);
!e.data("src") || (e.attr("src", e.data("src")), e.removeAttr("data-src"));
});
}, M = function(e) {
if (!e.list) return;
var t = e.list, n = {}, r = t.length;
template.helper("mediaInit", function(e) {
return e.id ? (n[e.id] = e, "") : "";
}), template.helper("timeFormat", function(e) {
return b(e.date_time);
}), template.helper("id2singleURL", function(e) {
return wx.url("/cgi-bin/singlesendpage?tofakeid=%s&t=message/send&action=index".sprintf(e.fakeid));
}), t.each(function(e) {
e.video_url && (e.type = 15), e.type == 5 && (e.type = 10), e.type == 6 && (e.type = 10), e.type == 11 && (e.type = 10), e.type == 16 && (e.type = 15);
});
var i = $(e.container), s = $(wx.T(l, {
token: wx.data.t,
list: t,
uin: wx.data.uin,
action: e.action
}).trim());
e.preAppend ? s.prependTo(i) : s.appendTo(i), E ? O() : (E = !0, $(window).on("load", function() {
O();
})), $(".wxMsg", s).each(function() {
var e = $(this), t = e.data("id"), r = n[t];
if (!r) return;
var i = r.type;
i && S[i] && S[i](e, r);
}), x(i), T(i), N(i), C(i), L(i);
};
return M;
} catch (_) {
wx.jslog({
src: "message/renderList.js"
}, _);
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
});define("common/wx/pagebar.js", [ "widget/pagination.css", "tpl/pagebar.html.js", "common/qq/Class.js", "common/wx/Tips.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i, s, o, u, a, f, l, c = e("widget/pagination.css"), h = e("tpl/pagebar.html.js"), p = e("common/qq/Class.js"), d = e("common/wx/Tips.js");
l = template.compile(h), i = t, s = {
first: "首页",
last: "末页",
prev: "上页",
next: "下页",
startPage: 1,
initShowPage: 1,
perPage: 10,
startRange: 1,
midRange: 3,
endRange: 1,
totalItemsNum: 0,
container: "",
callback: null,
isNavHide: !1,
isSimple: !0
};
var v = function(e, t, n) {
var r;
return r = e + (t - 1), r = r > n ? n : r, r;
}, m = function(e, t, n) {
var r;
return n % 2 === 0 ? r = t - (n / 2 - 1) : r = t - (n - 1) / 2, r = r < e ? e : r, r;
}, g = function(e, t, n) {
var r;
return t % 2 === 0 ? r = parseInt(e) + t / 2 : r = parseInt(e) + (t - 1) / 2, r = r > n ? n : r, r;
}, y = function(e, t, n) {
var r;
return r = t - (n - 1), r = r < e ? e : r, r;
}, b = function(e, t) {
if (t[e] && isNaN(t[e])) throw new Error("Invalid arguments: " + e + " should be a number");
}, w = function(e) {
b("perPage", e), b("totalItemsNum", e), b("startPage", e), b("startRange", e), b("midRange", e), b("endRange", e), b("initShowPage", e);
if (e.callback !== undefined && e.callback !== null && !$.isFunction(e.callback)) throw new Error("Invalid arguments: callback should be a function");
}, E = function(e, t, n) {
var r = e.container.find(".page_" + n);
if (typeof t == "string") {
var i = $(t);
i.length !== 0 && (r = i);
} else {
if (t !== !1) throw new Error("Invalid Paramter: '" + n + "' should be a string or false");
r.hide();
}
return r;
}, S = p.declare({
init: function(e) {
if (!e.totalItemsNum) return;
var t;
w(e), t = $.extend(!0, {}, s, e), this._init(t);
if (t.initShowPage < t.startPage) throw new Error("Invalid arguments: initShowPage should be larger than startPage");
if (t.initShowPage > t.endPage) throw new Error("Invalid arguments: initShowPage should be smaller than endPage");
this.paginate();
},
_init: function(e) {
var t, n, r, i, o, u;
this.currentPage = e.initShowPage, this._isNextButtonShow = !0, this._isPrevButtonShow = !0, this.uid = "wxPagebar_" + +(new Date), this.initEventCenter(), this.optionsForTemplate = {}, $.extend(this, e), this.container = $(e.container), this.optionsForTemplate.isSimple = e.isSimple, this.optionsForTemplate.firstButtonText = $(e.first).length === 0 ? e.first : s.first, this.optionsForTemplate.lastButtonText = $(e.last).length === 0 ? e.last : s.last, this.optionsForTemplate.nextButtonText = $(e.next).length === 0 ? e.next : s.next, this.optionsForTemplate.prevButtonText = $(e.prev).length === 0 ? e.prev : s.prev, this.optionsForTemplate.isNavHide = e.isNavHide, this.generatePages(parseInt(this.totalItemsNum)), this.gapForStartRange = this.container.find(".gap_prev"), this.gapForEndRange = this.container.find(".gap_next"), this.firstButton = E(this, e.first, "first"), this.lastButton = E(this, e.last, "last"), this.prevButton = E(this, e.prev, "prev"), this.nextButton = E(this, e.next, "next"), this.bindEvent();
},
initEventCenter: function() {
this.eventCenter = {
eventList: [],
bind: function(e, t) {
this.eventList[e] || (this.eventList[e] = []), this.eventList[e].push(t);
},
trigger: function(e) {
var t, n, r;
this.eventList[e] || (this.eventList[e] = []), t = this.eventList[e];
for (var i = 0; i < t.length; i++) {
r = Array.prototype.slice.call(arguments, 1);
if (t[i].apply(this, r) === !1) return !1;
}
},
unbind: function(e, t) {
if (!this.eventList) throw new Error("The eventList was undefined");
if (!this.eventList[e]) throw new Error("The event type " + e + " was not found");
if (t === undefined) this.eventList[e] = []; else {
var n = this.eventList[e], r = n.length;
for (var i = 0; i < r; i++) if (n[i] === t) {
n.splice(i, 1);
break;
}
}
}
};
},
generatePages: function(e) {
var t, n, r, i, s, o, u;
this.pageNum = Math.ceil(e / this.perPage), this.endPage = this.startPage + this.pageNum - 1, this.gapForStartRange = null, this.gapForEndRange = null, this.optionsForTemplate.startRange = [], this.optionsForTemplate.midRange = [], this.optionsForTemplate.endRange = [], n = v(this.startPage, this.startRange, this.endPage), r = m(this.startPage, this.currentPage, this.midRange), i = g(this.currentPage, this.midRange, this.endPage), s = y(this.startPage, this.endPage, this.endRange), n >= s && (s = n + 1);
for (t = this.startPage; t <= n; t += 1) this.optionsForTemplate.startRange.push(t);
for (var a = 0, t = r; a < this.midRange; a += 1, t += 1) this.optionsForTemplate.midRange.push(t);
for (t = s; t <= this.endPage; t += 1) this.optionsForTemplate.endRange.push(t);
this.optionsForTemplate.endPage = this.endPage, this.optionsForTemplate.initShowPage = this.initShowPage, o = l(this.optionsForTemplate), this.container.html(o), this.pageNum == 1 ? this.container.hide() : this.container.show(), this.pages = this.container.find(".page_nav"), this.midPages = this.container.find(".js_mid"), this.labels = this.container.find(".page_num label"), this.container.find(".pagination").attr("id", this.uid);
},
paginate: function() {
var e, t, n, r, i, s, o, u, a, f, l;
if (this.isSimple === !0) for (var c = 0, h = this.labels.length; c < h; c++) c % 2 === 0 && $(this.labels[c]).html(this.currentPage); else {
n = v(this.startPage, this.startRange, this.endPage), o = m(this.startPage, this.currentPage, this.midRange), u = g(this.currentPage, this.midRange, this.endPage), a = y(this.startPage, this.endPage, this.endRange), n >= a && (a = n + 1), n >= o && (o = n + 1), u >= a && (u = a - 1), this.pages.show(), this.pages.removeClass("current"), l = parseInt(this.midPages.length / this.midRange);
for (var c = 0, h = l; c < h; c++) {
s = 0;
for (e = o; e <= u; e += 1) i = this.midRange * c + (e - o), f = $(this.midPages[i]), f.html(e), s += 1, e == this.currentPage && f.addClass("current");
i = this.midRange * c + s;
for (; s < this.midRange; s += 1) f = $(this.midPages[i]), f.hide(), f.removeClass("current"), i += 1;
}
for (var c = 0, h = this.pages.length; c <= h; c++) r = $(this.pages[c]), e = parseInt(r.html()), e === parseInt(this.currentPage) && r.addClass("current");
n + 1 < o ? this.gapForStartRange.show() : this.gapForStartRange.hide(), u + 1 < a ? this.gapForEndRange.show() : this.gapForEndRange.hide();
if (this.isNavHide) {
for (var c = this.startPage; c <= this.endPage; c += 1) this.pages.hide();
this.gapForStartRange.hide(), this.gapForEndRange.hide();
}
}
this.checkButtonShown();
},
destroy: function() {
this.container.off("click", "#" + this.uid + " a.page_nav"), this.container.off("click", "#" + this.uid + " a.page_go"), this.container.off("keydown", "#" + this.uid + " .goto_area input"), this.nextButton.off("click"), this.prevButton.off("click"), this.firstButton.off("click"), this.lastButton.off("click");
},
bindEvent: function() {
this.container.on("click", "#" + this.uid + " a.page_nav", this.proxy(function(e) {
var t = $(e.target);
return t.hasClass("current") ? !1 : (this.clickPage(parseInt(t.html())), !1);
}, this)), this.nextButton.on("click", this.proxy(function(e) {
var t = $(e.target);
return this.nextPage(), !1;
}, this)), this.prevButton.on("click", this.proxy(function(e) {
var t = $(e.target);
return this.prevPage(), !1;
}, this)), this.firstButton.on("click", this.proxy(function(e) {
var t = $(e.target);
return this.goFirstPage(), !1;
}, this)), this.lastButton.on("click", this.proxy(function(e) {
var t = $(e.target);
return this.goLastPage(), !1;
}, this)), this.container.on("click", "#" + this.uid + " a.page_go", this.proxy(function(e) {
var t = $(e.target).prev();
return this.goPage(t.val()), !1;
}, this)), this.container.on("keydown", "#" + this.uid + " .goto_area input", this.proxy(function(e) {
wx.isHotkey(e, "enter") && this.container.find("a.page_go").click();
}, this));
},
on: function(e, t) {
this.eventCenter.bind(e, this.proxy(t, this));
},
callbackFunc: function(e) {
var t = {
currentPage: this.currentPage,
perPage: this.perPage,
count: this.pageNum
};
if ($.isFunction(this.callback) && this.callback(t) === !1) return !1;
if (this.eventCenter.trigger(e, t) === !1) return !1;
this.paginate();
},
proxy: function(e, t) {
return function() {
var n = Array.prototype.slice.call(arguments, 0);
return e.apply(t, n);
};
},
nextPage: function() {
this.currentPage !== this.endPage && (this.currentPage++, this.callbackFunc("next") === !1 && this.currentPage--);
},
prevPage: function() {
this.currentPage !== this.startPage && (this.currentPage--, this.callbackFunc("prev") === !1 && this.currentPage++);
},
goFirstPage: function() {
var e = this.currentPage;
this.currentPage = this.startPage, this.callbackFunc("goFirst") === !1 && (this.currentPage = e);
},
goLastPage: function() {
var e = this.currentPage;
this.currentPage = this.endPage, this.callbackFunc("goLast") === !1 && (this.currentPage = e);
},
checkButtonShown: function() {
+this.currentPage === +this.startPage ? this.hidePrevButton() : this.showPrevButton(), +this.currentPage === +this.endPage ? this.hideNextButton() : this.showNextButton();
},
goPage: function(e) {
var t = this.currentPage;
if (e === this.currentPage) return !1;
if (isNaN(e)) return d.err("请输入正确的页码"), !1;
if (e === "") return !1;
if (e < this.startPage) return d.err("请输入正确的页码"), !1;
if (e > this.endPage) return d.err("请输入正确的页码"), !1;
this.currentPage = e, this.callbackFunc("go") === !1 && (this.currentPage = t);
},
clickPage: function(e) {
var t = this.currentPage;
isNaN(e) && (e = this.startPage), e < this.startPage ? this.currentPage = this.startPage : e > this.endPage ? this.currentPage = this.endPage : this.currentPage = e, this.callbackFunc("click") === !1 && (this.currentPage = t);
},
showNextButton: function() {
this.nextButton && this._isNextButtonShow === !1 && (this.nextButton.show(), this._isNextButtonShow = !0);
},
showPrevButton: function() {
this.prevButton && this._isPrevButtonShow === !1 && (this.prevButton.show(), this._isPrevButtonShow = !0);
},
hideNextButton: function() {
this.nextButton && this._isNextButtonShow === !0 && (this.nextButton.hide(), this._isNextButtonShow = !1);
},
hidePrevButton: function() {
this.prevButton && this._isPrevButtonShow === !0 && (this.prevButton.hide(), this._isPrevButtonShow = !1);
}
});
return t = S;
} catch (x) {
wx.jslog({
src: "common/wx/pagebar.js"
}, x);
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
});define("message/list.js", [ "common/wx/top.js", "common/qq/mask.js", "common/wx/Tips.js", "common/wx/pagebar.js", "message/message_cgi.js", "message/renderList.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = wx.cgiData, s = i.latest_msg_id, o = i.action, u = i.day, a = i.filterivrmsg || "1", f = e("common/wx/top.js"), l = e("common/qq/mask.js"), c = e("common/wx/Tips.js"), h = e("common/wx/pagebar.js"), p = e("message/message_cgi.js");
(function() {
var e = "#topTab", t = new f(e, f.DATA.message, {
render: f.RENDER.message,
data: {
action: o
}
});
$.each($(e).find("a"), function(e) {
$(this).attr("href", $(this).attr("href") + "&filterivrmsg=" + a);
});
var n = 0, r = "", s, l = {
"7": [ "全部消息", 0, "只保存最近5天的消息" ],
"0": [ "今天的消息", 1 ],
"1": [ "昨天的消息", 2 ],
"2": [ "前天的消息", 3 ],
"3": [ "更早", 4 ]
}, c = "#page_title";
if (o == "search") r = "搜索结果", n = 6, $("#searchMore").show(); else if (o == "star") r = "星标消息", n = 5, s = s || "%s条"; else {
var h = l[u];
r = h[0], n = h[1], s = h[2], s = s || "%s条", a == "0" && $(c).siblings("label").removeClass("selected"), $(c).siblings("label").show();
}
$(c).html(r + (s ? "<span>(%s)</span>".sprintf(s.sprintf(i.total_count)) : "")), t.selected(n);
})(), function() {
function e(e) {
return e < 6 * r && (e += r), e;
}
var t = {}, n = function(e, r) {
e = e || t.title || "", r = r || t.time || 500, t.timer && clearTimeout(t.timer), t.timer = r, document.title = t.title = e.substring(1, e.length) + e.substring(0, 1), t.timer = setTimeout(n, r);
}, r = 1e4, i = r, o = 0, u = function() {
if (!s) return;
p.getNewMsgCount(s, function(t) {
if (t.ret != 0) return;
var s = t.newTotalMsgCount;
s > 0 ? (n("收到%s条新消息...".sprintf(s)), $("#newMsgTip").fadeIn(), $("#newMsgNum").html(s), s == o ? i = e(i) : i = r, o = s) : (i = e(i), $("#newMsgTip").hide()), setTimeout(u, i);
}, function(t, n) {
t.ret != "-20000" && (i = e(i), setTimeout(u, i));
});
};
setTimeout(u, i);
}(), function(t) {
var n = t.list, r = null, i = e("message/renderList.js");
r = t.frommsgid || n[0] && n[0].id;
if (o != "search") {
var s = t.offset / t.count + 1, u = new h({
container: ".pageNavigator",
perPage: t.count,
first: !1,
last: !1,
isSimple: !0,
initShowPage: s,
totalItemsNum: t.total_count,
callback: function(e) {
var n = e.currentPage;
if (n == s) return;
return n--, location.href = wx.url("/cgi-bin/message?t=message/list&action=%s&keyword=%s&frommsgid=%s&offset=%s&count=%s&day=%s&filterivrmsg=%s".sprintf(t.action, encodeURIComponent(t.keyword), r, n * t.count, t.count, t.day, t.filterivrmsg)), !1;
}
});
$("#page_title").siblings("label").on("click", function() {
var e = $(this), n = e.hasClass("selected") ? "0" : "1", r = wx.url("/cgi-bin/message?t=message/list&action=%s&keyword=%s&count=%s&day=%s&filterivrmsg=%s".sprintf(t.action, encodeURIComponent(t.keyword), t.count, t.day, n));
return e.toggleClass("selected"), location.href = r, !1;
});
} else {
var a = n.length, f = r;
a < t.count && $("#searchMore").hide(), $("#searchMore").click(function() {
$(this).addClass("show_loading"), p.pageNav({
action: "search",
count: t.count,
keyword: t.keyword,
frommsgid: f
}, function(e) {
i({
container: "#listContainer",
list: e,
action: o
}), $("#searchMore").removeClass("show_loading"), e.length < t.count ? $("#searchMore").hide() : f = e[e.length - 1].id;
});
});
}
$("#listContainer").html(""), i({
container: "#listContainer",
list: n,
action: o
});
}(i), function() {
var e = $("#msgSearchInput"), t = $("#msgSearchBtn"), n = i.can_search_msg == "1";
if (i.keyword) {
$(".pageNavigator").hide();
var r = i.keyword.html(!1).html(!1);
e.val(r);
}
t.click(function() {
var t = $.trim(e.val());
if (!t || t == e.attr("placeholder")) return c.err("请输入搜索关键词"), e.focus(), !1;
location.href = wx.url("/cgi-bin/message?t=message/list&action=search&keyword=%s&count=%s".sprintf(encodeURIComponent(t), i.count));
}), e.keypress(function(e) {
wx.isHotkey(e, "enter") && t.click();
});
}();
} catch (d) {
wx.jslog({
src: "message/list.js"
}, d);
}
});