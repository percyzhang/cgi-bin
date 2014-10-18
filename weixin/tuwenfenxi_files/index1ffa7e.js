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
})();define("tpl/top.html.js", [], function(e, t, n) {
return '<ul class="tab_navs title_tab" data-index="{itemIndex=0}">\n    {each data as o index}\n    {if (typeof o.acl == "undefined" || o.acl == 1)}\n    <li data-index="{itemIndex++}" class="tab_nav {if (itemIndex == 1)}first{/if} js_top {o.className}" data-id="{o.id}"><a href="{o.url}" {if o.target==\'_blank\'}target="_blank"{/if}>{o.name}</a></li>\n    {/if}\n    {/each}\n</ul>\n';
});define("common/wx/iframe.method.js", [ "common/wx/iframe.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict", e("common/wx/iframe.js"), (wx.cgiData.appid == "" || wx.cgiData.pluginToken == "") && wx.jslog({
src: "common/iframe"
}, {
message: "no appid or pluginToken"
}, 5);
var i = document.getElementById("mpIFrame");
i && Iframe.communicateWith(i.contentWindow), Iframe.on("setHeight", function(e) {
var t = $("#mpIFrame");
t.css("height", parseInt(e.height, 10) + "px");
}), Iframe.on("showMask", function() {
var e = $("#maskShadow"), t = $("#mpIFrame"), n = $(".wkd_content");
e.length < 1 && (e = $('<div id="maskShadow"></div>'), e.attr("style", "background:#000;filter:alpha(opacity=50);-moz-opacity:0.5;-khtml-opacity:0.5;opacity: 0.5;width:100%;height:100%;left:0;position:fixed;top:0;width:100%;z-index:2"), $("body").append(e)), n.length ? (n.css("position", "relative"), n.css("z-index", 3)) : t.css("position", "relative"), e.show(), $("html").css({
paddingRight: "17px",
overflow: "hidden"
});
}), Iframe.on("hideMask", function() {
var e = $("#maskShadow"), t = $("#mpIFrame");
e.length >= 1 && (e.hide(), t.css("position", "static")), $("html").attr("style", "");
}), Iframe.on("expire", function() {
$.get("/cgi-bin/modifycontacts?t=ajax-meeting-verify&token=0", function() {
location.reload(!0);
});
}), Iframe.on("reload", function() {
location.reload();
}), Iframe.on("getScrollTop", function() {
Iframe.post({
type: "scrollTop",
scrollTop: $(window).scrollTop()
});
}), Iframe.on("getSize", function() {
Iframe.post({
type: "size",
scrollTop: $(window).scrollTop(),
windowHeight: $(window).height(),
windowWidth: $(window).width(),
offsetTop: $("#mpIFrame").offset().top,
offsetLeft: $("#mpIFrame").offset().left
});
}), t.on = Iframe.on, t.post = Iframe.post, t.communicateWith = Iframe.communicateWith;
} catch (s) {
wx.jslog({
src: "common/wx/iframe.method.js"
}, s);
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
id: "product_list",
name: "商品管理",
url: "/merchant/scanproductlist?action=list&page=1&status=1"
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
});define("statistics/index.js", [ "common/wx/top.js", "common/wx/iframe.method.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("common/wx/top.js"), s = e("common/wx/iframe.method.js"), o = wx.cgiData, u, a, f, l;
switch (o.action) {
case "stat_user_summary":
u = "ctr_user_summary", l = new i("#topTab", i.DATA.statistics.user), f = 0;
break;
case "stat_user_attr":
u = "ctr_user_attr", l = new i("#topTab", i.DATA.statistics.user), f = 1;
break;
case "stat_article_detail":
u = "ctr_article_detail", l = new i("#topTab", i.DATA.statistics.article), f = 0;
break;
case "stat_article_analyse":
u = "ctr_article_analyse", l = new i("#topTab", i.DATA.statistics.article), f = 1;
break;
case "stat_message":
u = "ctr_message", l = new i("#topTab", i.DATA.statistics.message), f = 0;
break;
case "ctr_keyword":
u = "ctr_keyword", l = new i("#topTab", i.DATA.statistics.message), f = 1;
break;
case "stat_interface":
u = "ctr_interface", l = new i("#topTab", i.DATA.statistics.interface), f = 0;
}
l.selected(f), o.jsurl.substring(0, 1) == "/" && (o.jsurl = "https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe.js");
var c = "https://mta.qq.com/mta/wechat/%s?appid=%s&pluginid=luopan&token=%s&devtype=%s&jsurl=%s&version=2".sprintf(u, o.appid, o.pluginToken, o.devtype, o.jsurl);
$("#mpIFrame").attr("src", c);
} catch (h) {
wx.jslog({
src: "statistics/index.js"
}, h);
}
});