define("common/wx/widgetBridge.js", [], function(e, t, n) {
try {
var r = +(new Date);
"use strict", $.widgetBridge || ($.widgetBridge = function(e, t) {
var n = e, r = n.split("."), e = r.length > 1 ? r[1] : r[0];
$.fn[e] = function(r) {
var i = typeof r == "string", s = [].slice.call(arguments, 1), o = this;
r = r || {};
if (i) {
var u;
return r.indexOf("_") !== 0 && this.each(function() {
var t = $.data(this, n);
if (!t) return $.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + r + "'");
if (r === "instance") return u = t, !1;
if (r === "option") return u = t.options, !1;
u || (u = (t[r] || jQuery.noop).apply(t, s)), r === "destroy" && (t.elements = null);
}), u;
}
var a = this;
return this.each(function() {
var e = this, i = $.data(this, n);
if (!i) {
i = $.extend(!0, {}, t), i.destroy || (i.destroy = function() {
$.removeData(e, n);
}), i.options = $.extend(!0, i.options || {}, r), i.element = $(this), i.elements = a, i._create && (o = i._create.call(i, r));
var s = o && o.length && o.get(0) || this;
$.data(s, n, i);
}
}), o;
};
});
} catch (i) {
wx.jslog({
src: "common/wx/widgetBridge.js"
}, i);
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
});define("ivr/ivr_cgi.js", [ "common/wx/Cgi.js", "common/wx/Tips.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = {
replySave: "/advanced/setreplyrule?cgi=setreplyrule&fun=save&t=ajax-response",
replyDel: "/advanced/setreplyrule?cgi=setreplyrule&fun=del&t=ajax-response",
replyList: "/advanced/replyrulepage?t=ajax-ivrsetting-detail&replytype=smartreply&sec=reply&s=smartreply&lang=zh_CN&action=showrule"
}, s = e("common/wx/Cgi.js"), o = e("common/wx/Tips.js");
return {
replySave: function(e, t, n) {
s.post({
url: wx.url(i.replySave),
data: e,
mask: !1,
error: function() {
o.err("保存失败");
},
complete: function() {
n && n();
}
}, function(e) {
switch (+e.ret) {
case 0:
o.suc("保存成功"), t && t(e);
break;
case -1103:
o.err("关键字不能为空");
break;
case -1110:
o.err("规则数超过限制");
break;
case -1111:
o.err("消息中可能含有具备安全风险的链接，请检查");
break;
default:
o.err("保存失败");
}
});
},
replyDel: function(e, t, n) {
s.post({
url: wx.url(i.replyDel),
data: {
ruleid: e,
replytype: t
},
mask: !1,
error: function() {
o.err("删除失败");
}
}, function(e) {
o.suc("删除成功"), n && n(e);
});
},
getReplyList: function(e, t, n) {
s.post({
url: wx.url(i.replyList),
data: {
ruleid: e
},
error: function() {
n && n();
}
}, function(e) {
t && t(e);
});
}
};
} catch (u) {
wx.jslog({
src: "ivr/ivr_cgi.js"
}, u);
}
});define("ivr/reply.js", [ "common/wx/popup.js", "ivr/ivr_cgi.js", "common/wx/dialog.js", "common/wx/richEditor/msgSender.js", "common/wx/Tips.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict", e("common/wx/popup.js");
var i = wx.cgiData, s = replyData || {}, o = template.render, u = e("ivr/ivr_cgi.js"), a = e("common/wx/dialog.js"), f = e("common/wx/richEditor/msgSender.js"), l = e("common/wx/Tips.js"), c = i.rule_id, h = i.iswork, p = i.replytype, d = i.data;
function v() {
var e = new f($("#js_msgSender"), {
data: d,
acl: {
can_text_msg: 1,
can_image_msg: 1,
can_voice_msg: 1,
can_video_msg: 1
}
});
$("#js_save").click(function() {
var t = $(this);
if (t.hasClass("btn_disabled")) return;
var n = e.getData(), r = {};
if (n.error) return;
n = n.data, r.type = n.type == 15 ? 7 : n.type, r.appmsgid = n.app_id, r.fileid = n.file_id, r.content = n.content, r.ruleid = c, r.iswork = h, r.replytype = p, t.disable("btn_disabled").removeClass("btn_primary"), u.replySave(r, function(e) {
t.enable("btn_disabled").addClass("btn_primary"), $("#js_del").enable("btn_disabled").addClass("btn_default");
});
}), $("#js_del").click(function() {
if ($(this).hasClass("btn_disabled")) return;
u.replyDel(c, p, function(t) {
e.clear(), c = h = "", $("#js_del").disable("btn_disabled");
});
}), $("#div_stop .btn_primary").click(function() {
y(!0);
}), $("#div_start .btn_warn").click(function() {
y(!1);
}), m();
}
function m() {
$(".detail_desc").click(function() {
$("#detail_pop").popup({
buttons: [ {
text: "我知道了",
click: function() {
this.hide();
},
type: "primary"
} ],
title: "提示"
});
});
}
function g() {
c || $("#js_del").disable("btn_disabled"), s.is.autoReply ? ($("#div_start").show(), $("#div_stop").hide(), $("#div_replyContent").show()) : ($("#div_start").hide(), $("#div_stop").show(), $("#div_replyContent").hide()), s.is.isOpen || ($("#div_replyContent").hide(), $("#div_alertTips").show(), $("#btn_start").removeClass("btn_primary").addClass("btn_disabled"), $("#btn_stop").removeClass("btn_warn").addClass("btn_disabled"));
}
function y(e) {
var t = {
type: "POST",
url: "/misc/skeyform?form=advancedswitchform&lang=zh_CN",
dataType: "json"
}, n = e ? 1 : 0, r, i = 4, s = [ "关闭自动回复之后，将立即对所有用户生效。确认关闭？", "开启自动回复之后，将立即对所有用户生效。确认开启？" ];
a.show({
type: "warn",
msg: "操作确认|" + s[n ? 1 : 0],
buttons: [ {
text: "确定",
click: function() {
r = $.extend(!0, {}, t, {
data: {
flag: n,
type: i,
token: wx.data.t
},
success: function(e) {
e.base_resp.ret == 0 ? (l.suc("操作成功"), replyData.is.autoReply = n, g()) : l.err("系统发生错误，请稍后重试");
}
}), $.ajax(r), this.remove();
}
}, {
text: "取消",
type: "normal",
click: function() {
this.remove();
}
} ]
});
}
function b() {
$("#div_stop").show(), $("#btn_start").disable("btn_disabled"), $("#js_authrized").show();
}
function w() {
i.authrized == "1" ? (b(), m()) : (g(), v());
}
w();
} catch (E) {
wx.jslog({
src: "ivr/reply.js"
}, E);
}
});