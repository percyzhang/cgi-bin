define("common/wx/time.js", [], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = function(e) {
return e += "", e.length >= 2 ? e : "0" + e;
}, s = [ "日", "一", "二", "三", "四", "五", "六" ];
function o(e) {
var t = new Date(e * 1e3), n = new Date, r = t.getTime(), o = n.getTime(), u = 864e5;
return o - r < u && n.getDate() == t.getDate() ? "%s:%s".sprintf(i(t.getHours()), i(t.getMinutes())) : o - r < 2 * u && (new Date(t * 1 + u)).getDate() == n.getDate() ? "昨天 %s:%s".sprintf(i(t.getHours()), i(t.getMinutes())) : o - r <= 6 * u ? "星期%s %s:%s".sprintf(s[t.getDay()], i(t.getHours()), i(t.getMinutes())) : t.getFullYear() == n.getFullYear() ? "%s月%s日".sprintf(i(t.getMonth() + 1), i(t.getDate())) : "%s年%s月%s日".sprintf(t.getFullYear(), i(t.getMonth() + 1), i(t.getDate()));
}
function u(e) {
var t = new Date(e * 1e3);
return "%s-%s-%s %s:%s:%s".sprintf(t.getFullYear(), i(t.getMonth() + 1), i(t.getDate()), i(t.getHours()), i(t.getMinutes()), i(t.getSeconds()));
}
return {
timeFormat: o,
getFullTime: u
};
} catch (a) {
wx.jslog({
src: "common/wx/time.js"
}, a);
}
});define("media/media_cgi.js", [ "common/wx/Tips.js", "common/wx/Cgi.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("common/wx/Tips.js"), s = e("common/wx/Cgi.js"), o = {
del: function(e, t) {
s.post({
mask: !1,
url: wx.url("/cgi-bin/operate_appmsg?sub=del&t=ajax-response"),
data: {
AppMsgId: e
},
error: function() {
i.err("删除失败");
}
}, function(e) {
e.ret == "0" ? (i.suc("删除成功"), t && t(e)) : i.err("删除失败");
});
},
save: function(e, t, n, r, o, u) {
var a = n.AppMsgId ? wx.url("/cgi-bin/operate_appmsg?t=ajax-response&sub=update&type=%s".sprintf(t)) : wx.url("/cgi-bin/operate_appmsg?t=ajax-response&sub=create&type=%s".sprintf(t));
n.ajax = 1, s.post({
url: a,
data: n,
dataType: "html",
error: function() {
i.err("保存失败"), o && o();
},
complete: u
}, function(t) {
t = $.parseJSON(t);
if (t.ret == "0") i.suc("保存成功"), r && r(t); else {
var n = !1;
switch (t.ret) {
case "64506":
i.err("保存失败,链接不合法");
break;
case "64507":
i.err("内容不能包含链接，请调整");
break;
case "64508":
i.err("查看原文链接可能具备安全风险，请检查");
break;
case "-99":
i.err("内容超出字数，请调整");
break;
case "10801":
i.err("标题不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"), n = t.msg;
break;
case "10802":
i.err("作者不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"), n = t.msg;
break;
case "10803":
i.err("敏感链接，请重新添加。"), n = t.msg;
break;
case "10804":
e ? i.err("正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。") : i.err("摘要不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"), n = t.msg;
break;
case "10806":
i.err("正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"), n = t.msg;
break;
case "-20000":
i.err("登录态超时，请重新登录。");
break;
case "15801":
case "15802":
case "15803":
case "15804":
case "15805":
case "15806":
break;
default:
i.err("保存失败");
}
o && o(n, t.ret);
}
});
},
preview: function(e, t, n, r, o) {
s.post({
url: wx.url("/cgi-bin/operate_appmsg?sub=preview&t=ajax-appmsg-preview&type=%s".sprintf(t)),
data: n,
dataType: "html",
error: function() {
i.err("发送失败，请稍后重试"), o && o();
}
}, function(t) {
t = $.parseJSON(t);
if (t.ret == "0") i.suc("发送预览成功，请留意你的手机微信"), r && r(t); else {
switch (t.ret) {
case "64501":
i.err("你输入是非法的微信号，请重新输入");
break;
case "64502":
i.err("你输入的微信号不存在，请重新输入");
break;
case "10700":
case "64503":
i.err("你输入的微信号不是你的好友");
break;
case "10703":
i.err("对方关闭了接收消息");
break;
case "10701":
i.err("用户已被加入黑名单，无法向其发送消息");
break;
case "10704":
case "10705":
i.err("该素材已被删除");
break;
case "64504":
i.err("保存图文消息发送错误，请稍后再试");
break;
case "64505":
i.err("发送预览失败，请稍后再试");
break;
case "64507":
i.err("内容不能包含链接，请调整");
break;
case "-99":
i.err("内容超出字数，请调整");
break;
case "62752":
i.err("可能含有具备安全风险的链接，请检查");
break;
case "10801":
i.err("标题不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"), t.antispam = !0;
break;
case "10802":
i.err("作者不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"), t.antispam = !0;
break;
case "10803":
i.err("敏感链接，请重新添加。"), t.antispam = !0;
break;
case "10804":
e ? i.err("正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。") : i.err("摘要不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"), t.antispam = !0;
break;
case "10806":
i.err("正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"), t.antispam = !0;
break;
case "-8":
case "-6":
t.ret = "-6", i.err("请输入验证码");
break;
case "15801":
case "15802":
case "15803":
case "15804":
case "15805":
case "15806":
break;
default:
i.err("系统繁忙，请稍后重试");
}
o && o(t);
}
});
},
getList: function(e, t, n, r) {
s.get({
mask: !1,
url: wx.url("/cgi-bin/appmsg?type=%s&action=list&begin=%s&count=%s&f=json".sprintf(e, t, n)),
error: function() {
i.err("获取列表失败");
}
}, function(e) {
e && e.base_resp && e.base_resp.ret == 0 ? r && r(e.app_msg_info) : i.err("获取列表失败");
});
},
getSingleList: function(e, t, n, r) {
s.get({
mask: !1,
url: wx.url("/cgi-bin/appmsg?type=%s&action=for_advert&begin=%s&count=%s&f=json".sprintf(e, t, n)),
error: function() {
i.err("获取列表失败");
}
}, function(e) {
e && e.base_resp && e.base_resp.ret == 0 ? r && r(e.app_msg_info) : i.err("获取列表失败");
});
}
}, u = {
save: function(e, t, n) {
var r = wx.url("/cgi-bin/operate_vote");
e.ajax = 1, s.post({
url: r,
data: e,
error: function() {
i.err("保存失败"), n && n();
}
}, function(e) {
e && e.base_resp && e.base_resp.ret == 0 ? (i.suc("保存成功"), t && t(e)) : (i.err("保存失败"), n && n(e));
});
}
};
return {
rename: function(e, t, n) {
s.post({
mask: !1,
url: wx.url("/cgi-bin/modifyfile?oper=rename&t=ajax-response"),
data: {
fileid: e,
fileName: t
},
error: function() {
i.err("重命名失败");
}
}, function(e) {
if (e.ret == "0") i.suc("重命名成功"), n && n(e); else switch (e.ret) {
case "-2":
i.err("素材名不能包含空格");
break;
default:
i.err("重命名失败");
}
});
},
del: function(e, t) {
s.post({
mask: !1,
url: wx.url("/cgi-bin/modifyfile?oper=del&t=ajax-response"),
data: {
fileid: e
},
error: function() {
i.err("删除失败");
}
}, function(e) {
e.ret == "0" ? (i.suc("删除成功"), t && t(e)) : i.err("删除失败");
});
},
getList: function(e, t, n, r) {
s.get({
mask: !1,
url: wx.url("/cgi-bin/filepage?type=%s&begin=%s&count=%s&f=json".sprintf(e, t, n)),
error: function() {
i.err("获取列表失败");
}
}, function(e) {
e && e.base_resp && e.base_resp.ret == 0 ? r && r(e.page_info) : i.err("获取列表失败");
});
},
appmsg: o,
vote: u
};
} catch (a) {
wx.jslog({
src: "media/media_cgi.js"
}, a);
}
});define("common/wx/popover.js", [ "tpl/popover.html.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("tpl/popover.html.js"), s = {
dom: "",
content: "",
place: "bottom",
margin: "center"
};
function o(e) {
e = $.extend(!0, {}, s, e), this.$dom = $(e.dom);
if (this.$dom.data("popover")) {
var t = this.$dom.data("popover");
return t.$pop.show(), t;
}
return e.buttons && e.buttons && e.buttons.each(function(e) {
e.type = e.type || "default";
}), this.$pop = $(template.compile(i)(e)), $("body").append(this.$pop), u(this, e), a(e, this), this.$pop.show(), this.$dom.data("popover", this), this;
}
o.prototype = {
remove: function() {
this.$pop.remove(), this.$dom.removeData("popover");
},
hide: function() {
this.$pop.hide();
},
show: function() {
this.$pop.show();
}
};
function u(e, t) {
t.buttons && t.buttons.length > 0 && e.$pop.find(".jsPopoverBt").each(function(n, r) {
t.buttons[n] && typeof t.buttons[n].click == "function" && $(r).click(function(r) {
t.buttons[n].click.call(e, r);
});
}), e.$pop.find(".jsPopoverClose").click(function(n) {
t.close === !0 ? e.hide() : typeof t.close == "function" && t.close.call(e);
});
}
function a(e, t) {
var n = t.$dom.offset();
e.margin == "left" ? (console.log(n.top), console.log(t.$dom.height()), t.$pop.css({
top: n.top + t.$dom.height(),
left: n.left
}).addClass("pos_left")) : e.margin == "right" ? t.$pop.css({
top: n.top + t.$dom.height(),
left: n.left + t.$dom.width() - t.$pop.width()
}).addClass("pos_right") : t.$pop.css({
top: n.top + t.$dom.height(),
left: n.left + t.$dom.width() / 2 - t.$pop.width() / 2
}).addClass("pos_center");
}
n.exports = o;
} catch (f) {
wx.jslog({
src: "common/wx/popover.js"
}, f);
}
});define("common/wx/tooltip.js", [ "tpl/tooltip.html.js", "widget/tooltip.css" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("tpl/tooltip.html.js");
e("widget/tooltip.css");
var s = {
dom: "",
content: "",
position: {
x: 0,
y: 0
}
}, o = function(e) {
this.options = e = $.extend(!0, {}, s, e), this.$dom = $(this.options.dom), this.init();
};
o.prototype = {
constructor: o,
init: function() {
var e = this;
e.pops = [], e.$dom.each(function() {
var t = $(this), n = t.data("tooltip"), r = $(template.compile(i)(n ? $.extend(!0, {}, e.options, {
content: n
}) : e.options));
e.pops.push(r), $("body").append(r), r.css("display", "none"), t.on("mouseenter", function() {
var n = t.offset();
r.css({
top: n.top + t.height() + (e.options.position.y || 0),
left: n.left + t.width() / 2 - r.width() / 2 + (e.options.position.x || 0)
}), r.show();
}).on("mouseleave", function() {
r.hide();
}), t.data("tooltip_pop", r);
});
},
show: function() {
var e = this, t = 0, n = e.pops.length;
for (var t = 0; t < n; t++) e.pops[t].show();
},
hide: function() {
var e = this, t = 0, n = e.pops.length;
for (var t = 0; t < n; t++) e.pops[t].hide();
}
}, n.exports = o;
} catch (u) {
wx.jslog({
src: "common/wx/tooltip.js"
}, u);
}
});define("biz_web/lib/store.js", [ "biz_web/lib/json.js" ], function(e, t, n) {
try {
var r = +(new Date), i = e("biz_web/lib/json.js"), s = {}, o = window.document, u = "localStorage", a = "__storejs__", f;
s.disabled = !1, s.set = function(e, t) {}, s.get = function(e) {}, s.remove = function(e) {}, s.clear = function() {}, s.transact = function(e, t, n) {
var r = s.get(e);
n == null && (n = t, t = null), typeof r == "undefined" && (r = t || {}), n(r), s.set(e, r);
}, s.getAll = function() {}, s.serialize = function(e) {
return i.stringify2(e);
}, s.deserialize = function(e) {
if (typeof e != "string") return undefined;
try {
return i.parse(e);
} catch (t) {
return e || undefined;
}
};
function l() {
try {
return u in window && window[u];
} catch (e) {
return !1;
}
}
if (l()) f = window[u], s.set = function(e, t) {
return t === undefined ? s.remove(e) : (f.setItem(e, s.serialize(t)), t);
}, s.get = function(e) {
return s.deserialize(f.getItem(e));
}, s.remove = function(e) {
f.removeItem(e);
}, s.clear = function() {
f.clear();
}, s.getAll = function() {
var e = {};
for (var t = 0; t < f.length; ++t) {
var n = f.key(t);
e[n] = s.get(n);
}
return e;
}; else if (o.documentElement.addBehavior) {
var c, h;
try {
h = new ActiveXObject("htmlfile"), h.open(), h.write('<script>document.w=window</script><iframe src="/favicon.ico"></iframe>'), h.close(), c = h.w.frames[0].document, f = c.createElement("div");
} catch (p) {
f = o.createElement("div"), c = o.body;
}
function d(e) {
return function() {
var t = Array.prototype.slice.call(arguments, 0);
t.unshift(f), c.appendChild(f), f.addBehavior("#default#userData"), f.load(u);
var n = e.apply(s, t);
return c.removeChild(f), n;
};
}
var v = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
function m(e) {
return e.replace(v, "___");
}
s.set = d(function(e, t, n) {
return t = m(t), n === undefined ? s.remove(t) : (e.setAttribute(t, s.serialize(n)), e.save(u), n);
}), s.get = d(function(e, t) {
return t = m(t), s.deserialize(e.getAttribute(t));
}), s.remove = d(function(e, t) {
t = m(t), e.removeAttribute(t), e.save(u);
}), s.clear = d(function(e) {
var t = e.XMLDocument.documentElement.attributes;
e.load(u);
for (var n = 0, r; r = t[n]; n++) e.removeAttribute(r.name);
e.save(u);
}), s.getAll = d(function(e) {
var t = e.XMLDocument.documentElement.attributes, n = {};
for (var r = 0, i; i = t[r]; ++r) {
var o = m(i.name);
n[i.name] = s.deserialize(e.getAttribute(o));
}
return n;
});
}
try {
s.set(a, a), s.get(a) != a && (s.disabled = !0), s.remove(a);
} catch (p) {
s.disabled = !0;
}
s.enabled = !s.disabled, n.exports = s;
} catch (p) {
wx.jslog({
src: "biz_web/lib/store.js"
}, p);
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
});define("common/wx/media/video.js", [ "widget/media/richvideo.css", "widget/media.css", "biz_web/lib/video.js", "common/wx/Cgi.js", "common/wx/time.js", "common/qq/Class.js", "biz_web/lib/swfobject.js", "tpl/media/video.html.js", "tpl/media/videomsg.html.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict", e("widget/media/richvideo.css"), e("widget/media.css");
var i = e("biz_web/lib/video.js"), s = e("common/wx/Cgi.js"), o = e("common/wx/time.js"), u = e("common/qq/Class.js"), a = e("biz_web/lib/swfobject.js"), f = e("tpl/media/video.html.js"), l = e("tpl/media/videomsg.html.js"), c = wx.T, h = wx.data.t, p = document, d = !!a.ua.pv[0], v = p.createElement("video"), m = "#wxVideoBoxFold", g = "#wxVideoPlayer", y = "wxVideo", b = {}, w = navigator.userAgent.toLowerCase(), E = /msie/.test(w), S = /firefox/.test(w);
i.options.flash.swf = wx.path.video;
var x = {
id: "",
source: "",
type: "",
file_id: ""
}, T = 5e3, N = function(e) {
if (e.video_url) {
var t = "tmp" + (Math.random() * 1e5 | 0), n = $('<video id="%s"></video>'.sprintf(t)).appendTo("body");
i("#" + t).ready(function() {
$("#" + t).hide();
var n = this;
this.on("error", function(t) {
n.dispose(), e.dom.find(".loading_tips").show(), e.video_url = "", setTimeout(function() {
N(e);
}, T);
}), this.on("loadedmetadata", function() {
n.dispose(), $(e.selector).children().remove(), e.for_transfer = !1, e.digest = e.digest ? e.digest.html(!1) : "", new C(e);
});
var r = e.video_url;
v.canPlayType ? n.src(r) : n.src([ {
type: "video/x-flv",
src: r + "&trans=1"
} ]), n.play();
});
} else s.get({
url: wx.url("/cgi-bin/appmsg?action=get_video_url&videoid=%s".sprintf(e.video_id)),
error: function() {
setTimeout(function() {
N(e);
}, T);
}
}, function(t) {
e.video_url = t.video_url || "", e.video_download_url = t.video_download_url || "", setTimeout(function() {
N(e);
}, T);
});
}, C = u.declare({
init: function(e) {
var t = this;
$(e.selector).data("opt", e), e = $.extend(!0, {}, x, e), t.id = e.id, t.source = e.source, t.file_id = e.file_id, t.type = e.type, t.video_url = e.video_url, t.tpl = e.tpl, t.ff_must_flash = e.ff_must_flash, e.src = t.getVideoURL(), e.token = h || wx.data.t, e.time = e.create_time ? o.timeFormat(e.create_time) : "", e.digest = e.digest ? e.digest.replace(/<br.*>/g, "\n").html() : "", e.for_network = typeof e.video_url == "string" ? !e.video_url : !e.content;
var n = e.tpl == "videomsg" ? $(c(l, e)) : $(c(f, e));
t.dom = e.dom = $(e.selector).append(n), e.tpl == "videomsg" && e.for_transfer && N(e, t.dom), t.dom.find(".video_desc").length && t.dom.find(".video_desc").html(t.dom.find(".video_desc").attr("data-digest").replace(/\n/g, "<br>")), t.dom.find(".wxVideoScreenshot").on("click", function() {
t.dom.find(".mediaContent").css({
height: "auto"
}), t.play(e.play);
}), t.dom.find(".wxNetworkVideo").on("click", function() {
window.open($(this).attr("data-contenturl"));
}), t.dom.find(".video_switch").click(function() {
t.dom.find(".mediaContent").css({
height: "104px"
}), t.pause(e.pause);
});
},
getVideoURL: function() {
var e = this.source, t = this.id, n = this.file_id;
return !e || (e = "&source=" + e), this.video_url || "/cgi-bin/getvideodata?msgid={msgid}&fileid={fileid}&token={token}{source}".format({
msgid: t,
fileid: n,
source: e,
token: wx.data.t
});
},
canPlayType: function() {
var e = this.type;
return !v.canPlayType && !d;
},
play: function(e) {
var t = this;
if (t.canPlayType()) {
alert("您当前浏览器无法播放视频，请安装Flash插件/更换Chrome浏览器");
return;
}
var n = this.id, r = this.player;
if (!!r) return $("#wxVideoBox" + n).addClass("wxVideoPlaying").find(".wxVideoPlayContent").show(), r.play(), e && e(this);
var s = t.getVideoURL();
$("#wxVideoBox" + n).addClass("wxVideoPlaying").find(".wxVideoPlayContent").show();
var o = t.tpl == "videomsg" ? {
width: "100%",
height: "100%"
} : {};
i("#wxVideo" + n, o).ready(function() {
r = this;
var i = 0;
return r.on("fullscreenchange", function() {
i ? ($("#wxVideoPlayer" + n).css({
overflow: "hidden",
zoom: "1"
}), $("#wxVideoBox" + n).css({
"z-index": "0"
})) : ($("#wxVideoPlayer" + n).css({
overflow: "visible",
zoom: "normal"
}), $("#wxVideoBox" + n).css({
"z-index": "1"
})), i = ~i;
}), r.on("ended", function() {
this.currentTime(0);
}), E || !v.canPlayType || t.ff_must_flash && S ? r.src([ {
type: "video/x-flv",
src: s + "&trans=1"
} ]) : r.src(s), r.play(), t.player = r, e && e(this);
});
},
pause: function(e) {
var t = this.player;
t && t.pause(), $("#wxVideoBox" + this.id).removeClass("wxVideoPlaying").find(".wxVideoPlayContent").hide(), e && e(this);
}
});
return C;
} catch (k) {
wx.jslog({
src: "common/wx/media/video.js"
}, k);
}
});define("common/wx/media/appmsg.js", [ "widget/media.css", "common/wx/time.js", "tpl/media/appmsg.html.js", "common/qq/Class.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict", e("widget/media.css");
var i = wx.T, s = e("common/wx/time.js"), o = e("tpl/media/appmsg.html.js"), u = e("common/qq/Class.js"), a = u.declare({
init: function(e) {
if (!e || !e.container) return;
e.data = e.data || $.extend({}, e);
var t = e.data, n = t.multi_item || [], r = n.length, i = null, u = [];
if (r <= 0) return;
i = n[0];
for (var a = 1; a < r; ++a) u.push(n[a]);
var f = {
id: t.app_id,
type: e.type,
file_id: t.file_id,
time: t.create_time ? s.timeFormat(t.create_time) : "",
isMul: r > 1,
first: i,
list: u,
token: wx.data.t,
showEdit: e.showEdit || !1,
showMask: e.showMask || !1
};
$(e.container).html(wx.T(o, f)).data("opt", e), this.renderData = f;
},
getData: function() {
return this.renderData;
}
});
return a;
} catch (f) {
wx.jslog({
src: "common/wx/media/appmsg.js"
}, f);
}
});define("media/appmsg_list.js", [ "common/wx/media/appmsg.js", "common/wx/media/video.js", "common/qq/mask.js", "common/wx/Tips.js", "common/wx/pagebar.js", "common/wx/top.js", "common/wx/dialog.js", "biz_web/lib/store.js", "common/wx/tooltip.js", "common/wx/popover.js", "media/media_cgi.js", "common/qq/jquery.plugin/btn.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("common/wx/media/appmsg.js"), s = e("common/wx/media/video.js"), o = e("common/qq/mask.js"), u = e("common/wx/Tips.js"), a = e("common/wx/pagebar.js"), f = e("common/wx/top.js"), l = e("common/wx/dialog.js"), c = e("biz_web/lib/store.js"), h = e("common/wx/tooltip.js"), p = e("common/wx/popover.js"), d = e("media/media_cgi.js");
e("common/qq/jquery.plugin/btn.js");
var v = wx.cgiData, m = v.type, g = v.file_cnt, y = v.item;
window.Store = c, (new f("#topTab", f.DATA.media)).selected("media" + m), m == 15 && g.video_cnt > 0 && !v.is_upload_cdn_ok && $("#Js_msgBox").show(), function() {
var e = y.length;
if (e <= 0) return;
var t = $("#appmsgList"), n = [ $("#appmsgList1"), $("#appmsgList2"), $("#appmsgList3") ];
for (var r = 0; r < e; ++r) {
var o = y[r], u = o.app_id || "";
n[r % 3].append('<div id="appmsg%s"></div>'.sprintf(u)), m == 15 ? (o.digest.length > 100 && (o.digest = o.digest.substr(0, 100) + "……"), new s($.extend({
selector: "#appmsg" + u,
id: u,
video_id: o.content,
for_operation: !0,
for_transfer: !!o.content,
hide_transfer: !!o.content,
from: o.content ? "(来自本地视频)" : "(来自网络视频)",
tpl: "videomsg"
}, o))) : new i({
container: "#appmsg" + u,
data: o,
showEdit: !0,
type: m
});
}
new h({
dom: t.find(".js_tooltip"),
position: {
x: 0,
y: 10
}
}), m == 15 && t.on("mouseover", ".js_tooltip", function() {
$(this).data("tooltip_pop") || (new h({
dom: this,
position: {
x: 0,
y: 10
}
}), $(this).mouseenter());
}), t.on("click", ".js_del", function() {
var e = $(this), t = e.data("id");
$(".popover").hide(), new p({
dom: this,
content: $("#js_deleteHtml").html(),
place: "bottom",
margin: "center",
buttons: [ {
text: "确定",
click: function(e) {
var n = this, r = n.$pop.find(".jsPopoverBt").eq(0).btn(!1);
d.appmsg.del(t, function() {
$("#appmsg" + t).slideUp(function() {
$(this).remove(), n.remove();
});
});
},
type: "primary"
}, {
text: "取消",
click: function(e) {
this.hide();
}
} ]
});
}), t.on("click", ".js_download", function() {
l.show("温馨提示|视频正在转码中，还不能下载");
});
}();
var b = {
10: "app_msg_cnt",
11: "commondity_msg_cnt",
15: "video_msg_cnt"
}, w = g[b[m]];
(function(e) {
$("#js_listCount").html(e), $("#page_title").css("zoom", 1).css("zoom", "");
var t = v.count, n = v.begin, r = n / t + 1, i = new a({
container: ".pageNavigator",
perPage: t,
first: !1,
last: !1,
isSimple: !0,
initShowPage: r,
totalItemsNum: e,
callback: function(e) {
var n = e.currentPage;
if (n == r) return;
return n--, location.href = wx.url("/cgi-bin/appmsg?begin=%s&count=%s&t=media/appmsg_list&type=%s&action=list".sprintf(t * n, t, m)), !1;
}
});
})(w);
} catch (E) {
wx.jslog({
src: "media/appmsg_list.js"
}, E);
}
});