define("tpl/step.html.js", [], function(e, t, n) {
return '<ul class="processor_bar grid_line">\n    {each stepArr as item index}\n    <li class="{if (index+1==length)}no_extra{/if} step grid_item size1of{length} {item.cls}">\n        <h4>{item.name}</h4>\n    </li>\n    {/each}\n</ul>\n';
});define("tpl/cardticket/send_card.html.js", [], function(e, t, n) {
return '<div>\n<div class="wrp_processor js_step_container"></div>\n	<div class="first_step js_step_content js_step1">\n	    <!--选择投放方式弹窗-->\n		<div class="js_card_list"></div>\n		<!--选择投放方式弹窗 end-->\n	</div>\n	<div class="second_step js_step_content dn js_step2">\n		<!--投放设置弹窗-->\n		<div class="release_method">\n			<div class="msg_pre_view">\n			<ul>\n				<li class="group">\n					<span class="l title">已选卡券</span>\n					<div class="msg">\n						<p class="js_card_title"></p>\n					</div>\n				</li>\n				<li class="group">\n					<span class="l title">投放渠道</span>\n					<div class="msg">\n						<p class="js_source"></p>\n					</div>\n				</li>\n				<li class="group">\n					<span class="l title">投放数量</span>\n					<div class="msg">\n						<div class="frm_control_group">\n							<div class="frm_controls frm_vertical_lh">\n								<div class="frm_input l">\n									<div class="input_submsg">\n										<span class="frm_input_box">\n											<input type="text" class="frm_input js_send_num">\n										</span>\n										<span class="input_sub_msg">份</span>\n									</div>\n								</div>\n								\n							</div>\n						</div>\n					</div>\n				</li>\n			</ul>\n			</div>\n		</div>\n		<!--投放设置弹窗 end-->\n	</div>\n</div>';
});define("cardticket/common_template_helper.js", [ "common/wx/upload.js", "biz_common/moment.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("common/wx/upload.js"), s = e("biz_common/moment.js"), o = {
"4": "代金券",
"1": "团购券",
"2": "折扣券",
"3": "礼品券",
"0": "优惠券"
}, u = {
"1": "审核中",
"2": "未通过",
"3": "待投放",
"4": "已删除",
"5": "ERROR投放的卡",
"6": "已投放",
"8": "已过期"
}, s = e("biz_common/moment.js");
template.helper("convert_state", function(e) {
return u[e] || e;
}), template.helper("convert_type", function(e) {
return o[e] || e;
}), template.helper("card_type_map", function(e) {
return e;
}), template.helper("unixFormat", function(e, t) {
return t && (t = t.replace(",", " ")), s.unix(e).format(t);
}), template.helper("validtime", function(e, t) {
return e.time_type == 1 ? s.unix(e.begin_time).format(t) + "至" + s.unix(e.end_time).format(t) : e.time_type == 2 ? (e.from_day = e.from_day == 0 ? "当" : e.from_day, "领取后{from_day}天生效{fixed_term}天有效".format(e)) : "";
}), template.helper("addtoken", function(e) {
return wx.url(e);
});
var a = {
"1": "50万以下",
"2": "50-100万",
"3": "100-500万",
"4": "500-1000万",
"5": "1000万以上"
};
template.helper("convert_business_volume_type", function(e) {
return a[e] || e;
});
var f = {
"0": "未审核",
"2": "审核中",
"3": "审核通过",
"4": "审核失败"
};
template.helper("convert_store_state", function(e) {
return f[e] || e;
}), template.helper("$preview", function(e) {
if (!e) return "无";
var t;
return e.indexOf("temp_") === 0 ? (e = e.replace(/^temp_/, ""), t = i.tmpFileUrl(e)) : t = i.multimediaFileUrl(e), "<a href='%s' target='_blank'><img src='%s' style='width:260px;' /></a>".sprintf(t, t);
}), template.helper("$upload_preview", function(e) {
if (!e) return "";
var t;
return e.indexOf("temp_") === 0 ? (e = e.replace(/^temp_/, ""), t = i.tmpFileUrl(e)) : t = i.multimediaFileUrl(e), "<img src='%s' style='width:260px;' />".sprintf(t);
}), template.helper("$preview_stuffs", function(e) {
var t = [], n = e.stuffs;
for (var r = 0; r < n.length; r++) {
var i = n[r] + "_preview_tpl";
$("#" + i).length && t.push(template.render(i, e));
}
return t.join("");
});
var l = {
"2": "女",
"1": "男"
};
template.helper("convert_gender", function(e) {
return l[e] || "未知";
}), template.helper("percentage", function(e, t, n, r) {
var n = e / t * 100;
return r && n > r && (n = r), n.toFixed(2);
});
var c = {
"": "全部",
"0": "API渠道",
"1": "嵌入图文消息",
"2": "直接群发卡券",
"3": "下载二维码"
};
template.helper("convert_channel", function(e) {
return c[e] || e;
});
function h(e) {
var t = "YYYY-MM-DD HH:mm:ss", n = s(e, t);
return n ? n.format("YYYY-MM-DD") : "";
}
return template.helper("convert_provide_time", h), template.helper("http2https", function(e) {
return e ? (e + "").http2https() : "";
}), template.helper("https2http", function(e) {
return e ? (e + "").https2http() : "";
}), template.helper("codepad", function(e) {
var t = new RegExp("([^s]{4})(?=([^s])+$)", "ig");
return e.replace(t, "$1-");
}), {
type_map: o,
status_map: u,
store_status: f,
gender_map: l,
source_map: c,
convert_provide_time: h
};
} catch (p) {
wx.jslog({
src: "cardticket/common_template_helper.js"
}, p);
}
});define("tpl/cardticket/card_table.html.js", [], function(e, t, n) {
return '<div class="release_method js_card_container">\n	{if loading}\n	<i class="icon32_loading light">loading...</i>\n	{else}\n	<div class="table_wrp">\n		<table class="table" cellspacing="0">\n			<thead class="thead">\n				<tr>\n					<th class="table_cell select_box">&nbsp;</th>\n					<th class="table_cell kind"><div class="td_panel">卡券类型</div></th>\n					<th class="table_cell name"><div class="td_panel">卡券名称</div></th>\n					<th class="table_cell time"><div class="td_panel">卡券有效期</div></th>\n					<th class="table_cell state"><div class="td_panel">卡券状态</div></th>\n				</tr>\n			</thead>\n			<tbody class="tbody">\n			{if !data.length}\n				<tr>\n					<td class="empty_tips" colspan="6">暂无卡票券</td>\n				</tr>\n			{else}\n			{each data as card i}\n				<tr>\n					<td class="table_cell select_box"><div class="td_panel">\n						{if !multi}\n						<label class="frm_radio_label">\n							<i class="icon_radio"></i>\n							<input type="radio" data-id="{card.id}" value="{card.id}" class="frm_radio js_select">\n						</label>\n						{else}\n						<label class="frm_checkbox_label">\n							<i class="icon_checkbox"></i>\n							<input type="checkbox" data-id="{card.id}" value="{card.id}" class="frm_checkbox js_select">\n						</label>\n						{/if}\n					</div></td>\n					<td class="table_cell kind"><div class="td_panel">{convert_type card.type}</div></td>\n					<td class="table_cell name"><div class="td_panel">{card.title}</div></td>\n					<td class="table_cell time"><div class="td_panel">{validtime card \'YYYY-MM-DD\'}</div></td>\n					<td class="table_cell state"><div class="td_panel"><span class="fail pass"><i></i>{convert_state card.status}</span></div></td></td>\n				</tr>\n			{/each}\n			{/if}\n			</tbody>\n		</table>\n		<div class="js_pager"></div>\n	</div>\n	{/if}\n</div>';
});define("cardticket/store_cgi.js", [ "common/wx/Cgi.js", "common/wx/Tips.js", "common/wx/dialog.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("common/wx/Cgi.js"), s = e("common/wx/Tips.js"), o = e("common/wx/dialog.js"), u = {
deleteStore: function(e) {
i.post({
url: "/merchant/entityshop?action=delete",
data: {
id: e.store_id
},
btn: e.btn
}, function(t) {
t.base_resp.ret == 0 ? (s.suc("删除门店成功"), e.success && e.success()) : i.show(t);
});
},
deleteWithConfirm: function(e) {
if (e.state == 4) {
u.deleteStore(e);
return;
}
if (e.state != 3) return;
var t = o.show({
msg: "该门店可能正在使用，请确定是否删除？|删除门店会使得门店下的卡券信息不可用",
buttons: [ {
text: "确定",
click: function() {
var t = this;
if (e.success) {
var n = e.success;
e.success = function() {
n && n(), t.remove();
};
}
u.deleteStore(e);
},
type: "primary"
}, {
text: "取消",
click: function() {
this.remove();
},
type: "normal"
} ]
});
e.btn = t.dom.find(".js_btn")[0];
},
listStore: function(e) {
i.get({
url: "/merchant/entityshop",
data: {
action: "list",
begin: 0,
count: 9999999,
audit_state: e.audit_state || 3
}
}, function(t) {
if (t.base_resp.ret == 0) {
var n = $.parseJSON(t.data), r = n.store_location;
e.success && e.success({
shop_list: r,
total_num: t.total_count
});
} else i.show(t);
});
},
canSendCard: function(e) {
i.post({
url: "/merchant/electroniccardmgr",
data: {
action: "iscansend",
card_id: e.card_id
}
}, function(t) {
var n = !1;
t.base_resp.ret == 0 ? n = !0 : t.base_resp.ret == 14002 ? n = !1 : (n = t.base_resp.ret, i.show(t)), e.success && e.success(n);
});
}
};
return u;
} catch (a) {
wx.jslog({
src: "cardticket/store_cgi.js"
}, a);
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
});define("common/wx/Step.js", [ "widget/processor_bar.css", "tpl/step.html.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = wx.T, s = e("widget/processor_bar.css"), o = e("tpl/step.html.js"), u = {
selected: 1
}, a = function() {
var e = navigator.userAgent.toLowerCase(), t = /(msie) ([\w.]+)/.exec(e) || [], n = t[1] || "";
return n == "msie";
};
function f(e) {
this.opts = $.extend(!0, {}, u, e), this.init();
}
f.prototype.init = function() {
var e = this.opts, t = e.names.length, n = parseInt(e.selected, 10), r = [], s, u;
n = n < 0 ? 0 : n > t ? t : n;
for (s = 0; s < t; s++) u = f.getClass(s + 1, n), r.push({
name: e.names[s],
cls: u
});
this.$dom = $(i(o, {
stepArr: r,
length: t
})).appendTo(e.container), a() && this.$dom.addClass("ie");
}, f.prototype.setStep = f.prototype.go = function(e) {
var t = this.$dom.find("li.step"), n = t.length;
return e = e < 0 ? 0 : e > n ? n : e, t.each(function(t, r) {
var i = f.getClass(t + 1, e);
t + 1 == n ? r.className = "no_extra " + "step grid_item size1of%s %s".sprintf(n, i) : r.className = "step grid_item size1of%s %s".sprintf(n, i);
}), this;
}, f.getClass = function(e, t) {
var n;
return e < t - 1 ? n = "pprev" : e === t - 1 ? n = "prev" : e === t ? n = "current" : e === t + 1 ? n = "next" : e > t + 1 && (n = "nnext"), n;
}, n.exports = f;
} catch (l) {
wx.jslog({
src: "common/wx/Step.js"
}, l);
}
});define("tpl/pagebar.html.js", [], function(e, t, n) {
return '<div class="pagination">\n    <span class="page_nav_area">\n        <a href="javascript:void(0);" class="btn page_first">{firstButtonText}</a>\n        <a href="javascript:void(0);" class="btn page_prev"><i class="arrow"></i></a>\n        {if isSimple}\n            <span class="page_num">\n                <label>{initShowPage}</label>\n                <span class="num_gap">/</span>\n                <label>{endPage}</label>\n            </span>\n        {else}\n            {each startRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n            <span class="gap_prev">...</span>\n            {each midRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav js_mid">{pageIndex}</a>\n            {/each}\n            <span class="gap_next">...</span>\n            {each endRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n        {/if}\n        <a href="javascript:void(0);" class="btn page_next"><i class="arrow"></i></a>\n        <a href="javascript:void(0);" class="btn page_last">{lastButtonText}</a>            \n    </span>\n    {if (endPage>1)}\n    <span class="goto_area">\n        <input type="text">\n        <a href="javascript:void(0);" class="btn page_go">跳转</a>\n    </span>\n    {/if}\n</div>\n';
});define("tpl/biz_web/ui/checkbox.html.js", [], function(e, t, n) {
return '<label for="_checkbox_{index}" class="frm_{type}_label">\n	<i class="icon_{type}"></i>\n	<input type="{type}" class="frm_{type}" name="{name}" id="_checkbox_{index}">\n	<span class="lbl_content">{label}</span>\n</label>';
});define("tpl/uploader.html.js", [], function(e, t, n) {
return '<li id="uploadItem{id}" data-status="{className}" class="upload_file">\n    <strong class="upload_file_name">{fileName}</strong>\n    <span class="upload_file_size">({size})</span>\n    {if showError}\n    	{if error}\n    <em class="upload_file_status {className}">{status}</em>\n    	{else}\n    <div class="progress_bar"><div class="progress_bar_thumb" style="width:0%"></div></div>\n    <a href="javascript:;" class="upload_file_cancel js_cancel">取消</a>\n    	{/if}\n    {else}\n    <div class="progress_bar"><div class="progress_bar_thumb" style="width:0%"></div></div>\n    {/if}\n</li>\n';
});define("biz_web/lib/uploadify.js", [ "biz_web/lib/swfobject.js" ], function(e, t, n) {
try {
var r = +(new Date), i = e("biz_web/lib/swfobject.js");
$.extend($.fn, {
uploadify: function(e) {
$(this).each(function() {
var t = $(this), n = t.attr("id"), r = location.pathname, s = $.extend({
id: n,
uploader: "uploadify.swf",
script: "uploadify.php",
expressInstall: null,
folder: "",
height: null,
width: null,
cancelImg: "cancel.png",
wmode: "opaque",
scriptAccess: "always",
fileDataName: "Filedata",
method: "POST",
queueSizeLimit: 5,
simUploadLimit: 1,
queueID: !1,
displayData: "percentage",
buttonImg: null,
buttonText: "",
rollover: !1,
hideButton: !0,
onInit: function() {},
onSelect: function() {},
onQueueFull: function() {},
onCheck: function() {},
onCancel: function() {},
onError: function() {},
onProgress: function() {},
onComplete: function() {},
onAllComplete: function() {}
}, e);
r = r.split("/"), r.pop(), r = r.join("/") + "/";
var o = {};
o.uploadifyID = s.id, o.pagepath = r, s.buttonImg && (o.buttonImg = escape(s.buttonImg)), s.buttonText && (o.buttonText = escape(s.buttonText)), s.rollover && (o.rollover = !0), o.script = encodeURIComponent(s.script), o.folder = escape(s.folder);
if (s.scriptData) {
var u = "";
for (var a in s.scriptData) u += "&" + a + "=" + s.scriptData[a];
o.scriptData = escape(u.substr(1));
}
o.width = s.width || t.outerWidth(), o.height = s.height || t.outerHeight(), o.wmode = s.wmode, o.method = s.method, o.queueSizeLimit = s.queueSizeLimit, o.simUploadLimit = s.simUploadLimit, s.hideButton && (o.hideButton = !0), s.fileDesc && (o.fileDesc = s.fileDesc), s.fileExt && (o.fileExt = s.fileExt), s.multi && (o.multi = !0), s.auto && (o.auto = !0), s.sizeLimit && (o.sizeLimit = s.sizeLimit), s.checkScript && (o.checkScript = s.checkScript), s.fileDataName && (o.fileDataName = s.fileDataName), s.queueID && (o.queueID = s.queueID);
if (s.onInit() !== !1) {
var f = t.offset();
t.parent().append($('<div id="' + n + 'Uploader"></div>')).parent().addClass("upload_box"), i.switchOffAutoHideShow(), i.registerObject("flashAntelope", "9.0.0"), i.embedSWF(s.uploader, s.id + "Uploader", "100%", "100%", "9.0.24", s.expressInstall, o, {
quality: "high",
wmode: s.wmode,
allowScriptAccess: s.scriptAccess
}, undefined, function() {
$("#" + s.id + "Uploader").css("zoom", 1).css("zoom", 0);
}), s.queueID == 0 && $("#" + n + "Uploader").after('<div id="' + n + 'Queue" class="uploadifyQueue"></div>');
}
typeof s.onOpen == "function" && t.bind("uploadifyOpen", s.onOpen), t.bind("uploadifySelect", {
action: s.onSelect,
queueID: s.queueID
}, function(e, n, r) {
e.data.action(e, n, r) === !1 && document.getElementById(t.attr("id") + "Uploader").cancelFileUpload(n, !0, !1);
}), typeof s.onSelectOnce == "function" && t.bind("uploadifySelectOnce", s.onSelectOnce), t.bind("uploadifyQueueFull", {
action: s.onQueueFull
}, function(e, t) {
e.data.action(e, t) !== !1 && alert("The queue is full.  The max size is " + t + ".");
}), t.bind("uploadifyCancel", {
action: s.onCancel
}, function(e, t, r, i, s) {
if (e.data.action(e, t, r, i, s) !== !1) {
var o = s == 1 ? 0 : 250;
$("#" + n + t).fadeOut(o, function() {
$(this).remove();
});
}
}), typeof s.onClearQueue == "function" && t.bind("uploadifyClearQueue", s.onClearQueue);
var l = [];
t.bind("uploadifyError", {
action: s.onError
}, function(e, t, r, i) {
if (e.data.action(e, t, r, i) !== !1) {
var s = new Array(t, r, i);
l.push(s), $("#" + n + t + " .percentage").text(" - " + i.type + " Error"), $("#" + n + t).addClass("uploadifyError");
}
}), t.bind("uploadifyProgress", {
action: s.onProgress,
toDisplay: s.displayData
}, function(e, t, r, i) {
e.data.action(e, t, r, i) !== !1 && ($("#" + n + t + "ProgressBar").css("width", i.percentage + "%"), e.data.toDisplay == "percentage" && (displayData = " - " + i.percentage + "%"), e.data.toDisplay == "speed" && (displayData = " - " + i.speed + "KB/s"), e.data.toDisplay == null && (displayData = " "), $("#" + n + t + " .percentage").text(displayData));
}), t.bind("uploadifyComplete", {
action: s.onComplete
}, function(e, t, n, r, i) {
e.data.action(e, t, n, unescape(r), i) !== !1;
}), typeof s.onAllComplete == "function" && t.bind("uploadifyAllComplete", {
action: s.onAllComplete
}, function(e, t) {
e.data.action(e, t) !== !1 && (l = []);
});
});
},
uploadifySettings: function(e, t, n) {
var r = !1;
this$.each(function() {
if (e == "scriptData" && t != null) {
if (n) var i = t; else var i = $.extend(settings.scriptData, t);
var s = "";
for (var o in i) s += "&" + o + "=" + escape(i[o]);
t = s.substr(1);
}
r = document.getElementById(id + "Uploader").updateSettings(e, t);
});
if (t == null) {
if (e == "scriptData") {
var i = unescape(r).split("&"), s = new Object;
for (var o = 0; o < i.length; o++) {
var u = i[o].split("=");
s[u[0]] = u[1];
}
r = s;
}
return r;
}
},
uploadifyUpload: function(e) {
$(this).each(function() {
document.getElementById($(this).attr("id") + "Uploader").startFileUpload(e, !1);
});
},
uploadifyCancel: function(e) {
$(this).each(function() {
document.getElementById($(this).attr("id") + "Uploader").cancelFileUpload(e, !0, !1);
});
},
uploadifyClearQueue: function() {
$(this).each(function() {
document.getElementById($(this).attr("id") + "Uploader").clearFileUploadQueue(!1);
});
}
});
} catch (s) {
wx.jslog({
src: "biz_web/lib/uploadify.js"
}, s);
}
});define("tpl/richEditor/emotion.html.js", [], function(e, t, n) {
return '<ul class="emotions" onselectstart="return false;"> \n    {each edata as e index}\n        <li class="emotions_item">\n            <i\n                class="js_emotion_i" \n                data-gifurl=\'{e.gifurl}\' \n                data-title=\'{e.title}\' \n                style=\'{e.bp}\'>\n            </i>\n        </li>\n    {/each}\n</ul>\n<span class="emotions_preview js_emotionPreviewArea"></span>\n';
});define("common/wx/richEditor/editorRange.js", [], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = function() {
return document.selection ? document.selection : (window.getSelection || document.getSelection)();
}, s = function(e, t, n) {
if (!n && e === t) return !1;
if (e.compareDocumentPosition) {
var r = e.compareDocumentPosition(t);
if (r == 20 || r == 0) return !0;
} else if (e.contains(t)) return !0;
return !1;
}, o = function(e, t) {
var n = t.commonAncestorContainer || t.parentElement && t.parentElement() || null;
return n ? s(e, n, !0) : !1;
}, u = function(e) {
var t = i();
if (!t) return null;
var n = t.getRangeAt ? t.rangeCount ? t.getRangeAt(0) : null : t.createRange();
return n ? e ? o(e, n) ? n : null : n : null;
}, a = function(e) {
return e.parentElement ? e.parentElement() : e.commonAncestorContainer;
};
n.exports = {
getSelection: i,
getRange: u,
containsRange: o,
parentContainer: a
};
} catch (f) {
wx.jslog({
src: "common/wx/richEditor/editorRange.js"
}, f);
}
});define("tpl/media/appmsg.html.js", [], function(e, t, n) {
return '<div class="appmsg {if isMul}multi{/if}" data-id="{id}" data-fileid="{file_id}">\n    <div class="appmsg_content">\n        {if isMul}\n            <div class="appmsg_info">\n                <em class="appmsg_date">{time}</em>\n            </div>\n            <div class="cover_appmsg_item">\n                <h4 class="appmsg_title"><a href="{first.content_url}" target="_blank">{first.title}</a></h4>\n                <div class="appmsg_thumb_wrp"><img src="{first.cover}" alt="" class="appmsg_thumb"></div>\n            </div>\n            {each list as item}\n            <div class="appmsg_item">\n                <img src="{item.cover}" alt="" class="appmsg_thumb">\n                <h4 class="appmsg_title"><a href="{item.content_url}" target="_blank">{item.title}</a></h4>\n            </div>\n            {/each}\n        {else}\n            <h4 class="appmsg_title"><a href="{first.content_url}" target="_blank">{first.title}</a></h4>\n            <div class="appmsg_info">\n                <em class="appmsg_date">{time}</em>\n            </div>\n            <div class="appmsg_thumb_wrp"><img src="{first.cover}" alt="" class="appmsg_thumb" /></div>\n            <p class="appmsg_desc">{first.digest}</p>\n        {/if}\n    </div>\n    {if showEdit}\n    <div class="appmsg_opr">\n        <ul>\n            <li class="appmsg_opr_item grid_item size1of2">\n            <a class="js_tooltip" href="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&lang=zh_CN&token={token}&type={type}&appmsgid={id}&isMul={if isMul}1{else}0{/if}" data-tooltip="编辑">&nbsp;<i class="icon18_common edit_gray">编辑</i></a>\n            </li>\n            <li class="appmsg_opr_item grid_item size1of2 no_extra">\n                <a class="js_del no_extra js_tooltip" data-id="{id}" href="javascript:void(0);" data-tooltip="删除">&nbsp;<i class="icon18_common del_gray">删除</i></a>\n            </li>\n        </ul>\n    </div>\n    {/if}\n    {if showMask}\n    <div class="appmsg_mask"></div>\n    <i class="icon_card_selected">已选择</i>\n    {/if}\n</div>\n';
});