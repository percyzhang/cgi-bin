define("common/wx/upload.js", [ "biz_web/lib/uploadify.js", "widget/upload.css", "common/wx/Tips.js", "tpl/uploader.html.js", "biz_web/lib/swfobject.js", "common/wx/dialog.js", "common/wx/Cgi.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict", e("biz_web/lib/uploadify.js"), e("widget/upload.css");
var i = wx.T, s = e("common/wx/Tips.js"), o = e("tpl/uploader.html.js"), u = e("biz_web/lib/swfobject.js"), a = e("common/wx/dialog.js"), f = e("common/wx/Cgi.js"), l = wx.path.uploadify, c = wx.data.t, h = 0, p = 2, d = 3, v = 4, m = 5, g = 6, y = 9, b = {
"0": {
type: h,
tip: "格式错误",
msg: "图片格式必须为以下格式：bmp, png, jpeg, jpg, gif<br/>语音格式必须为以下格式：mp3, wma, wav, amr<br/>视频格式必须为以下格式：rm, rmvb, wmv, avi, mpg, mpeg, mp4<br/>文档格式必须为以下格式：pdf"
},
"2": {
type: p,
tip: "格式错误",
msg: "图片格式必须为以下格式：bmp, png, jpeg, jpg, gif",
ext: "bmp|png|jpeg|jpg|gif",
bizfile: {
limit: 2e3,
msg: "上传的%s过%sM".sprintf("图片", 2),
tip: "大小超过%sM".sprintf(2)
},
tmpfile: {
limit: 2e3,
msg: "上传的%s过%sM".sprintf("图片", 2),
tip: "大小超过%sM".sprintf(2)
},
shopfile: {
limit: 500,
msg: "上传的%s过%sKb".sprintf("图片", 500),
tip: "超过%sKb，无法上传".sprintf(500)
}
},
"3": {
type: d,
tip: "格式错误",
msg: "语音格式必须为以下格式：mp3, wma, wav, amr",
ext: "mp3|wma|wav|amr",
bizfile: {
limit: 5e3,
msg: "上传的%s过%sM".sprintf("语音", 5),
tip: "大小超过%sM".sprintf(5)
},
tmpfile: {
limit: 5e3,
msg: "上传的%s过%sM".sprintf("语音", 5),
tip: "大小超过%sM".sprintf(5)
}
},
"4": {
type: v,
tip: "格式错误",
msg: "视频格式必须为以下格式：rm, rmvb, wmv, avi, mpg, mpeg, mp4",
ext: "rm|rmvb|wmv|avi|mpg|mpeg|mp4",
bizfile: {
limit: 2e4,
msg: "上传的%s过%sM".sprintf("视频", 20),
tip: "大小超过%sM".sprintf(20)
},
tmpfile: {
limit: 2e4,
msg: "上传的%s过%sM".sprintf("视频", 20),
tip: "大小超过%sM".sprintf(20)
}
},
"5": {
type: m,
tip: "格式错误",
msg: "文档格式必须为以下格式：pdf",
ext: "pdf",
bizfile: {
limit: 1e4,
msg: "上传的%s过%sM".sprintf("文档", 10),
tip: "大小超过%sM".sprintf(20)
},
tmpfile: {
limit: 1e4,
msg: "上传的%s过%sM".sprintf("文档", 10),
tip: "大小超过%sM".sprintf(10)
}
},
"6": {
type: g,
tip: "格式错误",
msg: "图片格式必须为以下格式：bmp, png, jpeg, jpg, gif<br/>文档格式必须为以下格式：pdf",
ext: "bmp|png|jpeg|jpg|gif|pdf"
},
"7": {
type: p,
tip: "格式错误",
msg: "图片格式必须为以下格式：bmp, jpeg, jpg, gif",
ext: "bmp|jpeg|jpg|gif",
bizfile: {
limit: 2e3,
msg: "上传的%s过%sM".sprintf("图片", 2),
tip: "大小超过%sM".sprintf(2)
},
tmpfile: {
limit: 2e3,
msg: "上传的%s过%sM".sprintf("图片", 2),
tip: "大小超过%sM".sprintf(2)
}
},
"8": {
type: p,
tip: "文件格式错误",
msg: "图片格式必须为以下格式：bmp, png, jpeg, jpg<br/>",
ext: "bmp|png|jpeg|jpg|pdf"
},
"9": {
type: y,
tip: "格式错误",
msg: "文档格式必须为以下格式：xls",
ext: "xls",
poifile: {
limit: 200,
msg: "上传的%s过%sKB".sprintf("文档", 200),
tip: "大小超过%sKB".sprintf(200)
}
},
"10": {
type: y,
tip: "格式错误",
msg: "文档格式必须为以下格式：xls",
ext: "xls",
storefile: {
limit: 5e3,
msg: "上传的%s过%sKB".sprintf("文档", 5e3),
tip: "大小超过%sKB".sprintf(5e3)
}
},
"11": {
type: p,
tip: "格式错误",
msg: "图片格式必须为以下格式：bmp, png, jpeg, jpg",
ext: "bmp|png|jpeg|jpg",
tmpfile: {
limit: 2e3,
msg: "上传的%s过%sM".sprintf("图片", 2),
tip: "大小超过%sM".sprintf(2)
}
}
};
b[15] = b[4];
var w = function(e) {
var t = [ p, d, v, m, y ];
e = e.substr(1).toLowerCase();
for (var n = 0; n < t.length; ++n) {
var r = b[t[n]];
if (r && r.ext && r.ext.indexOf(e) != -1) return t[n];
}
return !1;
};
function E(e, t) {
if (t == 0) return E(e, p) || E(e, d) || E(e, v) || E(e, m);
var e = e.substr(1).toLowerCase(), n = b[t];
return n && n.ext.indexOf(e) != -1;
}
function S(e, t, n) {
var r = w(e);
return t <= b[r][n].limit;
}
var x = {
uploader: l,
queueID: "fileQueue",
cancelImg: "cancel.png",
folder: "uploads",
fileDataName: "file",
auto: !0,
multi: !0,
hideButton: !0,
timeout: 3e3,
showError: !1
}, T = function(e, t) {
return e = e + "&ticket_id=" + wx.data.user_name + "&ticket=" + wx.data.ticket, function(n) {
function r(e) {
var t = $(i(o, e)), n = e.id;
t.find(".js_cancel").on("click", function() {
if (n) {
var e = $(this).closest("ul"), t = e.siblings("object").attr("id"), r = e.find("li:last").attr("id"), i = $(this).parent(), s = i.attr("id"), o = document.getElementById(t);
o && o.cancelFileUpload && (r != s && (o.cancelFileUpload(n, !0, !1), delete h[n]), i.hide());
}
}), f.show().append(t), p.length == 11 && f.addClass("scroll");
}
var f = $('<ul class="upload_file_box"></ul>'), l;
n.container instanceof jQuery ? l = n.container : l = $(n.container), n.type = n.type || 0;
if (!u.ua.pv[0]) return l.click(function() {
a.show({
type: "warn",
msg: "警告|<p>未安装或未正确配置flash插件，请检查后重试。<br><a href='http://get.adobe.com/cn/flashplayer/' target='_blank'>到adobe去下载flash插件</a></p>",
mask: !0,
buttons: [ {
text: "确定",
click: function() {
this.remove();
}
} ]
});
}), !1;
n = $.extend(!0, {}, x, n);
var c = n.uploadlist$ ? $(n.uploadlist$) : l.parent(), h = {}, p = [];
c.append(f.hide());
var d = $.extend(!0, {}, n, {
script: wx.url(e),
onSelectOnce: function() {
$.isEmptyObject(h) ? f.hide() : f.show();
},
onQueueFull: function(e, t) {
return h = {}, f.html(""), a.show({
type: "warn",
msg: "警告|一次上传最多只能上传%s个文件".sprintf(t),
mask: !0,
buttons: [ {
text: "确定",
click: function() {
this.remove();
}
} ]
}), h = {}, !1;
},
onSelect: function(e, i, o) {
var u = o.type, a = w(u), f = a && b[a].type || n.type, l = "KB", c = Math.round(o.size / 1024 * 100) * .01, d = c;
d > 1e3 && (d = Math.round(d * .001 * 100) * .01, l = "MB");
var v = {
id: i,
fileName: o.name,
size: d.toFixed(2) + l
};
if (!E(u, n.type)) {
v.status = b[n.type + ""].tip, v.className = "error";
if (!n.showError) return s.err(b[n.type + ""].msg), !1;
}
if (c <= 0) return n.showError || s.err("上传的文件不能为空"), !1;
if (!S(u, c, t)) {
v.status = b[a + ""][t].tip, v.className = "error";
if (!n.showError) return s.err(b[a + ""][t].msg), !1;
}
return n.canContinueUpload && !n.canContinueUpload() ? !1 : (v.className != "error" ? (v.status = "正在上传", h[i] = !0, v.error = !1) : v.error = !0, p.push(i), n.showError && (v.showError = !0), r(v), n.onSelect && n.onSelect(e, i, o), !v.error);
},
onProgress: function(e, t, r, i) {
var s = f.find("#uploadItem" + t).find(".progress_bar_thumb");
if (s.data("status") == "error") return;
s.css("width", i.percentage + "%"), n.onProgress && n.onProgress(e, t, r, i);
},
onComplete: function(e, t, r, i, o) {
var u = f.find("#uploadItem" + t).find(".upload_file_status");
if (u.data("status") == "error") return;
i = $.parseJSON(i);
if (i && i.base_resp) {
var a = i.base_resp.ret;
if (a == 0) {
delete h[t];
var l = f.find("#uploadItem" + t);
l.find(".upload_file_status").addClass("success").html("上传成功"), l.find(".js_cancel").remove();
} else a == -18 ? s.err("页面停留时间过久，请刷新页面后重试！") : a == -20 ? s.err("无法解释该图片，请使用另一图片或截图另存") : a == -13 ? s.err("上传文件过于频繁，请稍后再试") : a == -10 ? s.err("上传文件过大") : a == -22 ? s.err("上传音频文件不能超过60秒") : s.err("上传文件发送出错，请刷新页面后重试！");
}
n.onComplete && n.onComplete(e, t, r, i, o);
},
onAllComplete: function(e, t) {
setTimeout(function() {
f.fadeOut().html("");
}, n.timeout || 3e3), $.isEmptyObject(h) && n.onAllComplete && n.onAllComplete(e, t), h = {};
}
});
l.uploadify(d);
};
}, N = function(e) {
return function(t) {
return wx.url(e + "&ticket_id=" + wx.data.user_name + "&ticket=" + wx.data.ticket + "&id=" + t);
};
}, C = ~location.hostname.search(/^mp/) ? "https://mp.weixin.qq.com" : "";
return {
uploadBizFile: T(C + "/cgi-bin/filetransfer?action=upload_material&f=json", "bizfile"),
uploadTmpFile: T(C + "/cgi-bin/filetransfer?action=preview&f=json", "tmpfile"),
uploadCdnFile: T(C + "/cgi-bin/filetransfer?action=upload_cdn&f=json", "tmpfile"),
uploadCdnFileFromAd: function(e) {
return T(C + "/cgi-bin/filetransfer?action=upload_cdn_check_size&f=json&width=" + e.w + "&height=" + e.h + "&size=" + e.size, "tmpfile");
},
uploadShopFile: T(C + "/merchant/goodsimage?action=uploadimage", "shopfile"),
uploadShopUnsaveFile: T(C + "/merchant/goodsimage?action=uploadimage&save=0", "tmpfile"),
uploadVideoCdnFile: T(C + "/cgi-bin/filetransfer?action=upload_video_cdn&f=json", "tmpfile"),
uploadRegisterFile: T(C + "/acct/realnamesubmit?type=2&action=file_set", "tmpfile"),
uploadUpgradeFile: T(C + "/acct/servicetypeupgrade?type=2&action=file_set", "tmpfile"),
uploadPoiFile: T(C + "/misc/setlocation?action=upload", "poifile"),
tmpFileUrl: N(C + "/cgi-bin/filetransfer?action=preview"),
mediaFileUrl: N(C + "/cgi-bin/filetransfer?action=bizmedia"),
multimediaFileUrl: N(C + "/cgi-bin/filetransfer?action=multimedia")
};
} catch (k) {
wx.jslog({
src: "common/wx/upload.js"
}, k);
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
});define("common/qq/queryString.js", [], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
function i(e) {
this.url = e || location.href;
}
i.prototype = {
constructor: i,
add: function(e, t) {
if (typeof t == "undefined") return this;
var n = this.url.indexOf("?"), r = this.url.indexOf("#"), i, s = this.url, o = "";
return i = (n >= 0 ? "&" : "?") + e + "=" + t, r >= 0 && (s = this.url.substring(0, r), o = this.url.substring(r)), this.url = s + i + o, this;
},
replace: function(e, t) {
return typeof t == "undefined" ? this : (this.remove(e), this.add(e, t), this);
},
replaceAll: function(e) {
if (typeof e != "object" || e == null) return this;
for (var t in e) e.hasOwnProperty(t) && this.replace(t, encodeURIComponent(e[t]));
return this;
},
remove: function(e) {
var t = new RegExp("([?&])" + e + "=[^&#]*([&#])?");
return this.url = this.url.replace(t, function(e, t, n) {
return t === "?" ? t : n || "";
}), this;
},
getUrl: function() {
return this.url;
}
}, i.replace = function(e, t, n) {
var r = new i(e);
return r.replace(t, n), r.getUrl();
}, n.exports = i;
} catch (s) {
wx.jslog({
src: "common/qq/queryString.js"
}, s);
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
});(function(e) {
e.Jcrop = function(t, n) {
function r(e) {
return Math.round(e) + "px";
}
function i(e) {
return P.baseClass + "-" + e;
}
function s() {
return e.fx.step.hasOwnProperty("backgroundColor");
}
function o(t) {
var n = e(t).offset();
return [ n.left, n.top ];
}
function u(e) {
return [ e.pageX - H[0], e.pageY - H[1] ];
}
function a(t) {
typeof t != "object" && (t = {}), P = e.extend(P, t), e.each([ "onChange", "onSelect", "onRelease", "onDblClick" ], function(e, t) {
typeof P[t] != "function" && (P[t] = function() {});
});
}
function f(e, t, n) {
H = o(z), vt.setCursor(e === "move" ? e : e + "-resize");
if (e === "move") return vt.activateHandlers(c(t), m, n);
var r = ht.getFixed(), i = h(e), s = ht.getCorner(h(i));
ht.setPressed(ht.getCorner(i)), ht.setCurrent(s), vt.activateHandlers(l(e, r), m, n);
}
function l(e, t) {
return function(n) {
if (!P.aspectRatio) switch (e) {
case "e":
n[1] = t.y2;
break;
case "w":
n[1] = t.y2;
break;
case "n":
n[0] = t.x2;
break;
case "s":
n[0] = t.x2;
} else switch (e) {
case "e":
n[1] = t.y + 1;
break;
case "w":
n[1] = t.y + 1;
break;
case "n":
n[0] = t.x + 1;
break;
case "s":
n[0] = t.x + 1;
}
ht.setCurrent(n), dt.update();
};
}
function c(e) {
var t = e;
return mt.watchKeys(), function(e) {
ht.moveOffset([ e[0] - t[0], e[1] - t[1] ]), t = e, dt.update();
};
}
function h(e) {
switch (e) {
case "n":
return "sw";
case "s":
return "nw";
case "e":
return "nw";
case "w":
return "ne";
case "ne":
return "sw";
case "nw":
return "se";
case "se":
return "nw";
case "sw":
return "ne";
}
}
function p(e) {
return function(t) {
return P.disabled ? !1 : e === "move" && !P.allowMove ? !1 : (H = o(z), at = !0, f(e, u(t)), t.stopPropagation(), t.preventDefault(), !1);
};
}
function d(e, t, n) {
var r = e.width(), i = e.height();
r > t && t > 0 && (r = t, i = t / e.width() * e.height()), i > n && n > 0 && (i = n, r = n / e.height() * e.width()), st = e.width() / r, ot = e.height() / i, e.width(r).height(i);
}
function v(e) {
return {
x: e.x * st,
y: e.y * ot,
x2: e.x2 * st,
y2: e.y2 * ot,
w: e.w * st,
h: e.h * ot
};
}
function m(e) {
var t = ht.getFixed();
t.w > P.minSelect[0] && t.h > P.minSelect[1] ? (dt.enableHandles(), dt.done()) : dt.release(), vt.setCursor(P.allowSelect ? "crosshair" : "default");
}
function g(e) {
if (P.disabled) return !1;
if (!P.allowSelect) return !1;
at = !0, H = o(z), dt.disableHandles(), vt.setCursor("crosshair");
var t = u(e);
return ht.setPressed(t), dt.update(), vt.activateHandlers(y, m, e.type.substring(0, 5) === "touch"), mt.watchKeys(), e.stopPropagation(), e.preventDefault(), !1;
}
function y(e) {
ht.setCurrent(e), dt.update();
}
function b() {
var t = e("<div></div>").addClass(i("tracker"));
return j && t.css({
opacity: 0,
backgroundColor: "white"
}), t;
}
function w(e) {
V.removeClass().addClass(i("holder")).addClass(e);
}
function E(e, t) {
function n() {
window.setTimeout(b, c);
}
var r = e[0] / st, i = e[1] / ot, s = e[2] / st, o = e[3] / ot;
if (ft) return;
var u = ht.flipCoords(r, i, s, o), a = ht.getFixed(), f = [ a.x, a.y, a.x2, a.y2 ], l = f, c = P.animationDelay, h = u[0] - f[0], p = u[1] - f[1], d = u[2] - f[2], v = u[3] - f[3], m = 0, g = P.swingSpeed;
r = l[0], i = l[1], s = l[2], o = l[3], dt.animMode(!0);
var y, b = function() {
return function() {
m += (100 - m) / g, l[0] = Math.round(r + m / 100 * h), l[1] = Math.round(i + m / 100 * p), l[2] = Math.round(s + m / 100 * d), l[3] = Math.round(o + m / 100 * v), m >= 99.8 && (m = 100), m < 100 ? (x(l), n()) : (dt.done(), dt.animMode(!1), typeof t == "function" && t.call(gt));
};
}();
n();
}
function S(e) {
x([ e[0] / st, e[1] / ot, e[2] / st, e[3] / ot ]), P.onSelect.call(gt, v(ht.getFixed())), dt.enableHandles();
}
function x(e) {
ht.setPressed([ e[0], e[1] ]), ht.setCurrent([ e[2], e[3] ]), dt.update();
}
function T() {
return v(ht.getFixed());
}
function N() {
return ht.getFixed();
}
function C(e) {
a(e), D();
}
function k() {
P.disabled = !0, dt.disableHandles(), dt.setCursor("default"), vt.setCursor("default");
}
function L() {
P.disabled = !1, D();
}
function A() {
dt.done(), vt.activateHandlers(null, null);
}
function O() {
V.remove(), q.show(), q.css("visibility", "visible"), e(t).removeData("Jcrop");
}
function M(e, t) {
dt.release(), k();
var n = new Image;
n.onload = function() {
var r = n.width, i = n.height, s = P.boxWidth, o = P.boxHeight;
z.width(r).height(i), z.attr("src", e), $.attr("src", e), d(z, s, o), W = z.width(), X = z.height(), $.width(W).height(X), Y.width(W + G * 2).height(X + G * 2), V.width(W).height(X), pt.resize(W, X), L(), typeof t == "function" && t.call(gt);
}, n.src = e;
}
function _(e, t, n) {
var r = t || P.bgColor;
P.bgFade && s() && P.fadeTime && !n ? e.animate({
backgroundColor: r
}, {
queue: !1,
duration: P.fadeTime
}) : e.css("backgroundColor", r);
}
function D(e) {
P.allowResize ? e ? dt.enableOnly() : dt.enableHandles() : dt.disableHandles(), vt.setCursor(P.allowSelect ? "crosshair" : "default"), dt.setCursor(P.allowMove ? "move" : "default"), P.hasOwnProperty("trueSize") && (st = P.trueSize[0] / W, ot = P.trueSize[1] / X), P.hasOwnProperty("setSelect") && (S(P.setSelect), dt.done(), delete P.setSelect), pt.refresh(), P.bgColor != Z && (_(P.shade ? pt.getShades() : V, P.shade ? P.shadeColor || P.bgColor : P.bgColor), Z = P.bgColor), et != P.bgOpacity && (et = P.bgOpacity, P.shade ? pt.refresh() : dt.setBgOpacity(et)), tt = P.maxSize[0] || 0, nt = P.maxSize[1] || 0, rt = P.minSize[0] || 0, it = P.minSize[1] || 0, P.hasOwnProperty("outerImage") && (z.attr("src", P.outerImage), delete P.outerImage), dt.refresh();
}
var P = e.extend({}, e.Jcrop.defaults), H, B = navigator.userAgent.toLowerCase(), j = /msie/.test(B), F = /msie [1-6]\./.test(B);
typeof t != "object" && (t = e(t)[0]), typeof n != "object" && (n = {}), a(n);
var I = {
border: "none",
visibility: "visible",
margin: 0,
padding: 0,
position: "absolute",
top: 0,
left: 0
}, q = e(t), R = !0;
if (t.tagName == "IMG") {
if (q[0].width != 0 && q[0].height != 0) q.width(q[0].width), q.height(q[0].height); else {
var U = new Image;
U.src = q[0].src, q.width(U.width), q.height(U.height);
}
var z = q.clone().removeAttr("id").css(I).show();
z.width(q.width()), z.height(q.height()), q.after(z).hide();
} else z = q.css(I).show(), R = !1, P.shade === null && (P.shade = !0);
d(z, P.boxWidth, P.boxHeight);
var W = z.width(), X = z.height(), V = e("<div />").width(W).height(X).addClass(i("holder")).css({
position: "relative",
backgroundColor: P.bgColor
}).insertAfter(q).append(z);
P.addClass && V.addClass(P.addClass);
var $ = e("<div />"), J = e("<div />").width("100%").height("100%").css({
zIndex: 310,
position: "absolute",
overflow: "hidden"
}), K = e("<div />").width("100%").height("100%").css("zIndex", 320), Q = e("<div />").css({
position: "absolute",
zIndex: 600
}).dblclick(function() {
var e = ht.getFixed();
P.onDblClick.call(gt, e);
}).insertBefore(z).append(J, K);
R && ($ = e("<img />").attr("src", z.attr("src")).css(I).width(W).height(X), J.append($)), F && Q.css({
overflowY: "hidden"
});
var G = P.boundary, Y = b().width(W + G * 2).height(X + G * 2).css({
position: "absolute",
top: r(-G),
left: r(-G),
zIndex: 290
}).mousedown(g), Z = P.bgColor, et = P.bgOpacity, tt, nt, rt, it, st, ot, ut = !0, at, ft, lt;
H = o(z);
var ct = function() {
function e() {
var e = {}, t = [ "touchstart", "touchmove", "touchend" ], n = document.createElement("div"), r;
try {
for (r = 0; r < t.length; r++) {
var i = t[r];
i = "on" + i;
var s = i in n;
s || (n.setAttribute(i, "return;"), s = typeof n[i] == "function"), e[t[r]] = s;
}
return e.touchstart && e.touchend && e.touchmove;
} catch (o) {
return !1;
}
}
function t() {
return P.touchSupport === !0 || P.touchSupport === !1 ? P.touchSupport : e();
}
return {
createDragger: function(e) {
return function(t) {
return P.disabled ? !1 : e === "move" && !P.allowMove ? !1 : (H = o(z), at = !0, f(e, u(ct.cfilter(t)), !0), t.stopPropagation(), t.preventDefault(), !1);
};
},
newSelection: function(e) {
return g(ct.cfilter(e));
},
cfilter: function(e) {
return e.pageX = e.originalEvent.changedTouches[0].pageX, e.pageY = e.originalEvent.changedTouches[0].pageY, e;
},
isSupported: e,
support: t()
};
}(), ht = function() {
function e(e) {
e = o(e), h = l = e[0], p = c = e[1];
}
function t(e) {
e = o(e), d = e[0] - h, v = e[1] - p, h = e[0], p = e[1];
}
function n() {
return [ d, v ];
}
function r(e) {
var t = e[0], n = e[1];
0 > l + t && (t -= t + l), 0 > c + n && (n -= n + c), X < p + n && (n += X - (p + n)), W < h + t && (t += W - (h + t)), l += t, h += t, c += n, p += n;
}
function i(e) {
var t = s();
switch (e) {
case "ne":
return [ t.x2, t.y ];
case "nw":
return [ t.x, t.y ];
case "se":
return [ t.x2, t.y2 ];
case "sw":
return [ t.x, t.y2 ];
}
}
function s() {
if (!P.aspectRatio) return a();
var e = P.aspectRatio, t = P.minSize[0] / st, n = P.maxSize[0] / st, r = P.maxSize[1] / ot, i = h - l, s = p - c, o = Math.abs(i), d = Math.abs(s), v = o / d, m, g, y, b;
return n === 0 && (n = W * 10), r === 0 && (r = X * 10), v < e ? (g = p, y = d * e, m = i < 0 ? l - y : y + l, m < 0 ? (m = 0, b = Math.abs((m - l) / e), g = s < 0 ? c - b : b + c) : m > W && (m = W, b = Math.abs((m - l) / e), g = s < 0 ? c - b : b + c)) : (m = h, b = o / e, g = s < 0 ? c - b : c + b, g < 0 ? (g = 0, y = Math.abs((g - c) * e), m = i < 0 ? l - y : y + l) : g > X && (g = X, y = Math.abs(g - c) * e, m = i < 0 ? l - y : y + l)), m > l ? (m - l < t ? m = l + t : m - l > n && (m = l + n), g > c ? g = c + (m - l) / e : g = c - (m - l) / e) : m < l && (l - m < t ? m = l - t : l - m > n && (m = l - n), g > c ? g = c + (l - m) / e : g = c - (l - m) / e), m < 0 ? (l -= m, m = 0) : m > W && (l -= m - W, m = W), g < 0 ? (c -= g, g = 0) : g > X && (c -= g - X, g = X), f(u(l, c, m, g));
}
function o(e) {
return e[0] < 0 && (e[0] = 0), e[1] < 0 && (e[1] = 0), e[0] > W && (e[0] = W), e[1] > X && (e[1] = X), [ Math.round(e[0]), Math.round(e[1]) ];
}
function u(e, t, n, r) {
var i = e, s = n, o = t, u = r;
return n < e && (i = n, s = e), r < t && (o = r, u = t), [ i, o, s, u ];
}
function a() {
var e = h - l, t = p - c, n;
return tt && Math.abs(e) > tt && (h = e > 0 ? l + tt : l - tt), nt && Math.abs(t) > nt && (p = t > 0 ? c + nt : c - nt), it / ot && Math.abs(t) < it / ot && (p = t > 0 ? c + it / ot : c - it / ot), rt / st && Math.abs(e) < rt / st && (h = e > 0 ? l + rt / st : l - rt / st), l < 0 && (h -= l, l -= l), c < 0 && (p -= c, c -= c), h < 0 && (l -= h, h -= h), p < 0 && (c -= p, p -= p), h > W && (n = h - W, l -= n, h -= n), p > X && (n = p - X, c -= n, p -= n), l > W && (n = l - X, p -= n, c -= n), c > X && (n = c - X, p -= n, c -= n), f(u(l, c, h, p));
}
function f(e) {
return {
x: e[0],
y: e[1],
x2: e[2],
y2: e[3],
w: e[2] - e[0],
h: e[3] - e[1]
};
}
var l = 0, c = 0, h = 0, p = 0, d, v;
return {
flipCoords: u,
setPressed: e,
setCurrent: t,
getOffset: n,
moveOffset: r,
getCorner: i,
getFixed: s
};
}(), pt = function() {
function t(e, t) {
d.left.css({
height: r(t)
}), d.right.css({
height: r(t)
});
}
function n() {
return i(ht.getFixed());
}
function i(e) {
d.top.css({
left: r(e.x),
width: r(e.w),
height: r(e.y)
}), d.bottom.css({
top: r(e.y2),
left: r(e.x),
width: r(e.w),
height: r(X - e.y2)
}), d.right.css({
left: r(e.x2),
width: r(W - e.x2)
}), d.left.css({
width: r(e.x)
});
}
function s() {
return e("<div />").css({
position: "absolute",
backgroundColor: P.shadeColor || P.bgColor
}).appendTo(p);
}
function o() {
h || (h = !0, p.insertBefore(z), n(), dt.setBgOpacity(1, 0, 1), $.hide(), u(P.shadeColor || P.bgColor, 1), dt.isAwake() ? f(P.bgOpacity, 1) : f(1, 1));
}
function u(e, t) {
_(c(), e, t);
}
function a() {
h && (p.remove(), $.show(), h = !1, dt.isAwake() ? dt.setBgOpacity(P.bgOpacity, 1, 1) : (dt.setBgOpacity(1, 1, 1), dt.disableHandles()), _(V, 0, 1));
}
function f(e, t) {
h && (P.bgFade && !t ? p.animate({
opacity: 1 - e
}, {
queue: !1,
duration: P.fadeTime
}) : p.css({
opacity: 1 - e
}));
}
function l() {
P.shade ? o() : a(), dt.isAwake() && f(P.bgOpacity);
}
function c() {
return p.children();
}
var h = !1, p = e("<div />").css({
position: "absolute",
zIndex: 240,
opacity: 0
}), d = {
top: s(),
left: s().height(X),
right: s().height(X),
bottom: s()
};
return {
update: n,
updateRaw: i,
getShades: c,
setBgColor: u,
enable: o,
disable: a,
resize: t,
refresh: l,
opacity: f
};
}(), dt = function() {
function t(t) {
var n = e("<div />").css({
position: "absolute",
opacity: P.borderOpacity
}).addClass(i(t));
return J.append(n), n;
}
function n(t, n) {
var r = e("<div />").mousedown(p(t)).css({
cursor: t + "-resize",
position: "absolute",
zIndex: n
}).addClass("ord-" + t);
return ct.support && r.bind("touchstart.jcrop", ct.createDragger(t)), K.append(r), r;
}
function s(e) {
var t = P.handleSize, r = n(e, k++).css({
opacity: P.handleOpacity
}).addClass(i("handle"));
return t && r.width(t).height(t), r;
}
function o(e) {
return n(e, k++).addClass("jcrop-dragbar");
}
function u(e) {
var t;
for (t = 0; t < e.length; t++) O[e[t]] = o(e[t]);
}
function a(e) {
var n, r;
for (r = 0; r < e.length; r++) {
switch (e[r]) {
case "n":
n = "hline";
break;
case "s":
n = "hline bottom";
break;
case "e":
n = "vline right";
break;
case "w":
n = "vline";
}
L[e[r]] = t(n);
}
}
function f(e) {
var t;
for (t = 0; t < e.length; t++) A[e[t]] = s(e[t]);
}
function l(e, t) {
P.shade || $.css({
top: r(-t),
left: r(-e)
}), Q.css({
top: r(t),
left: r(e)
});
}
function c(e, t) {
Q.width(Math.round(e)).height(Math.round(t));
}
function h() {
var e = ht.getFixed();
ht.setPressed([ e.x, e.y ]), ht.setCurrent([ e.x2, e.y2 ]), d();
}
function d(e) {
if (C) return m(e);
}
function m(e) {
var t = ht.getFixed();
c(t.w, t.h), l(t.x, t.y), P.shade && pt.updateRaw(t), C || y(), e ? P.onSelect.call(gt, v(t)) : P.onChange.call(gt, v(t));
}
function g(e, t, n) {
if (!C && !t) return;
P.bgFade && !n ? z.animate({
opacity: e
}, {
queue: !1,
duration: P.fadeTime
}) : z.css("opacity", e);
}
function y() {
Q.show(), P.shade ? pt.opacity(et) : g(et, !0), C = !0;
}
function w() {
x(), Q.hide(), P.shade ? pt.opacity(1) : g(1), C = !1, P.onRelease.call(gt);
}
function E() {
M && K.show();
}
function S() {
M = !0;
if (P.allowResize) return K.show(), !0;
}
function x() {
M = !1, K.hide();
}
function T(e) {
e ? (ft = !0, x()) : (ft = !1, S());
}
function N() {
T(!1), h();
}
var C, k = 370, L = {}, A = {}, O = {}, M = !1;
P.dragEdges && e.isArray(P.createDragbars) && u(P.createDragbars), e.isArray(P.createHandles) && f(P.createHandles), P.drawBorders && e.isArray(P.createBorders) && a(P.createBorders), e(document).bind("touchstart.jcrop-ios", function(t) {
e(t.currentTarget).hasClass("jcrop-tracker") && t.stopPropagation();
});
var _ = b().mousedown(p("move")).css({
cursor: "move",
position: "absolute",
zIndex: 360
});
return ct.support && _.bind("touchstart.jcrop", ct.createDragger("move")), J.append(_), x(), {
updateVisible: d,
update: m,
release: w,
refresh: h,
isAwake: function() {
return C;
},
setCursor: function(e) {
_.css("cursor", e);
},
enableHandles: S,
enableOnly: function() {
M = !0;
},
showHandles: E,
disableHandles: x,
animMode: T,
setBgOpacity: g,
done: N
};
}(), vt = function() {
function t(t) {
Y.css({
zIndex: 450
}), t ? e(document).bind("touchmove.jcrop", o).bind("touchend.jcrop", a) : h && e(document).bind("mousemove.jcrop", r).bind("mouseup.jcrop", i);
}
function n() {
Y.css({
zIndex: 290
}), e(document).unbind(".jcrop");
}
function r(e) {
return l(u(e)), !1;
}
function i(e) {
return e.preventDefault(), e.stopPropagation(), at && (at = !1, c(u(e)), dt.isAwake() && P.onSelect.call(gt, v(ht.getFixed())), n(), l = function() {}, c = function() {}), !1;
}
function s(e, n, r) {
return at = !0, l = e, c = n, t(r), !1;
}
function o(e) {
return l(u(ct.cfilter(e))), !1;
}
function a(e) {
return i(ct.cfilter(e));
}
function f(e) {
Y.css("cursor", e);
}
var l = function() {}, c = function() {}, h = P.trackDocument;
return h || Y.mousemove(r).mouseup(i).mouseout(i), z.before(Y), {
activateHandlers: s,
setCursor: f
};
}(), mt = function() {
function t() {
P.keySupport && (s.show(), s.focus());
}
function n(e) {
s.hide();
}
function r(e, t, n) {
P.allowMove && (ht.moveOffset([ t, n ]), dt.updateVisible(!0)), e.preventDefault(), e.stopPropagation();
}
function i(e) {
if (e.ctrlKey || e.metaKey) return !0;
lt = e.shiftKey ? !0 : !1;
var t = lt ? 10 : 1;
switch (e.keyCode) {
case 37:
r(e, -t, 0);
break;
case 39:
r(e, t, 0);
break;
case 38:
r(e, 0, -t);
break;
case 40:
r(e, 0, t);
break;
case 27:
P.allowSelect && dt.release();
break;
case 9:
return !0;
}
return !1;
}
var s = e('<input type="radio" />').css({
position: "fixed",
left: "-120px",
width: "12px"
}).addClass("jcrop-keymgr"), o = e("<div />").css({
position: "absolute",
overflow: "hidden"
}).append(s);
return P.keySupport && (s.keydown(i).blur(n), F || !P.fixedSupport ? (s.css({
position: "absolute",
left: "-20px"
}), o.append(s).insertBefore(z)) : s.insertBefore(z)), {
watchKeys: t
};
}();
ct.support && Y.bind("touchstart.jcrop", ct.newSelection), K.hide(), D(!0);
var gt = {
setImage: M,
animateTo: E,
setSelect: S,
setOptions: C,
tellSelect: T,
tellScaled: N,
setClass: w,
disable: k,
enable: L,
cancel: A,
release: dt.release,
destroy: O,
focus: mt.watchKeys,
getBounds: function() {
return [ W * st, X * ot ];
},
getWidgetSize: function() {
return [ W, X ];
},
getScaleFactor: function() {
return [ st, ot ];
},
getOptions: function() {
return P;
},
ui: {
holder: V,
selection: Q
}
};
return j && V.bind("selectstart", function() {
return !1;
}), q.data("Jcrop", gt), gt;
}, e.fn.Jcrop = function(t, n) {
var r;
return this.each(function() {
if (e(this).data("Jcrop")) {
if (t === "api") return e(this).data("Jcrop");
e(this).data("Jcrop").setOptions(t);
} else this.tagName == "IMG" ? e.Jcrop.Loader(this, function() {
e(this).css({
display: "block",
visibility: "hidden"
}), r = e.Jcrop(this, t), e.isFunction(n) && n.call(r);
}) : (e(this).css({
display: "block",
visibility: "hidden"
}), r = e.Jcrop(this, t), e.isFunction(n) && n.call(r));
}), this;
}, e.Jcrop.Loader = function(t, n, r) {
function i() {
o.complete ? (s.unbind(".jcloader"), e.isFunction(n) && n.call(o)) : window.setTimeout(i, 50);
}
var s = e(t), o = s[0];
s.bind("load.jcloader", i).bind("error.jcloader", function(t) {
s.unbind(".jcloader"), e.isFunction(r) && r.call(o);
}), o.complete && e.isFunction(n) && (s.unbind(".jcloader"), n.call(o));
}, e.Jcrop.defaults = {
allowSelect: !0,
allowMove: !0,
allowResize: !0,
trackDocument: !0,
baseClass: "jcrop",
addClass: null,
bgColor: "black",
bgOpacity: .6,
bgFade: !1,
borderOpacity: .4,
handleOpacity: .5,
handleSize: null,
aspectRatio: 0,
keySupport: !0,
createHandles: [ "n", "s", "e", "w", "nw", "ne", "se", "sw" ],
createDragbars: [ "n", "s", "e", "w" ],
createBorders: [ "n", "s", "e", "w" ],
drawBorders: !0,
dragEdges: !0,
fixedSupport: !0,
touchSupport: null,
shade: null,
boxWidth: 0,
boxHeight: 0,
boundary: 2,
fadeTime: 400,
animationDelay: 20,
swingSpeed: 3,
minSelect: [ 0, 0 ],
maxSize: [ 0, 0 ],
minSize: [ 0, 0 ],
onChange: function() {},
onSelect: function() {},
onDblClick: function() {},
onRelease: function() {}
};
})(jQuery);define("setting/index.js", [ "common/lib/jquery.Jcrop.js", "common/wx/popup.js", "biz_web/ui/checkbox.js", "common/wx/Tips.js", "common/wx/dialog.js", "common/wx/Cgi.js", "common/qq/queryString.js", "common/wx/Step.js", "common/wx/upload.js", "common/wx/top.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict", e("common/lib/jquery.Jcrop.js"), e("common/wx/popup.js"), e("biz_web/ui/checkbox.js");
var i = e("common/wx/Tips.js"), s = e("common/wx/dialog.js"), o = e("common/wx/Cgi.js"), u = e("common/qq/queryString.js"), a = e("common/wx/Step.js"), f = e("common/wx/upload.js"), l = e("common/wx/top.js"), c = f.uploadTmpFile, h = wx.data.t, p = wx.data.lang, d = new l("#topTab", l.DATA.setting);
d.selected(0);
var v = {
back: function() {
var e = this.get().find(".js_btn_p").hide();
e.eq(1).show(), $("#step1Desc").css("display", "block"), $("#step2Desc").css("display", "none"), this.resetPosition();
},
agree: function() {
var e = this.get().find(".js_btn_p").hide();
e.eq(0).show(), e.eq(2).show(), $("#step1Desc").css("display", "none"), $("#step2Desc").css("display", "block"), this.resetPosition();
},
next: function(e) {
if ($(".nickname_input").length && m.nickname() != 0) return;
if ($(".userinfo_input").length && m.intro() != 0) return;
if ($("#largeHeadImg").length && m.headimg() != 0) {
i.err("请先上传头像");
return;
}
e.setStep(3);
var t = this.get().find(".js_btn_p").hide();
t.eq(3).show(), t.eq(4).show(), $(".frm_msg").css("display", "none"), $("#step2Desc").css("display", "none"), $("#step3Desc").css("display", "block"), $("#ensure_input").text($.trim($("#modifyInput").val())), this.resetPosition();
},
prev: function() {
var e = this.get().find(".js_btn_p").hide();
e.eq(0).show(), e.eq(2).show(), $("#step2Desc").css("display", "block"), $("#step3Desc").css("display", "none"), this.resetPosition();
},
show: function(e) {
var t, n, r = $(e.tplId).popup({
title: e.title,
width: e.width,
className: e.className,
buttons: [ {
text: "返回",
click: function() {
n.setStep(1), v.back.call(this);
}
}, {
text: "同意并进入下一步",
click: function() {
n.setStep(2), v.agree.call(this), e.agreeInit && e.agreeInit();
},
type: "primary"
}, {
text: "下一步",
click: function() {
v.next.call(this, n);
},
type: "default"
}, {
text: "上一步",
click: function() {
n.setStep(2), $("#error_tip").hide(), v.prev.call(this);
},
type: "default"
}, {
text: "确定",
click: e.done || function() {},
type: "primary"
} ],
onHide: function() {
this.remove();
}
});
n = new a({
container: "#Js_stepBar",
names: [ "1 同意协议", "2 " + e.title, "3 确定修改" ]
}), t = r.popup("get").find(".js_btn_p").hide(), t.eq(1).show(), e.init(), r.popup("show");
}
}, m = {
intro: function() {
var e = $.trim($("#modifyInput").val()).length;
return e < 4 || e > 120 ? ($(".frm_msg").css("display", "block"), -1) : ($(".frm_msg").hide(), 0);
},
nickname: function() {
var e = $.trim($("#modifyInput").val()), t = e.length;
return t < 2 || t > 16 ? ($(".frm_msg").css("display", "block"), -1) : /(微\s*信|we\s*chat)/ig.test(e) || !/^[0-9a-zA-Z\u4e00-\u9fa5]+$/.test(e) ? ($(".frm_msg").css("display", "block"), -1) : ($(".frm_msg").css("display", "none"), 0);
},
headimg: function() {
return $("#uploadFileSrc").attr("src").indexOf("cgi-bin") != -1 ? 0 : -1;
}
}, g = function() {
var e = [], t = null;
return {
register: function(t, n) {
e.push({
name: t,
init: n.init
});
},
init: function() {
$("#Js_weiboVerify").on("click", function() {
s.show("用户达到500才可申请认证");
}), function() {
var e = cgiData.errcode;
if (e == "") return;
e == "10000" ? i.err("选定的腾讯微博帐号已经被其他公众号绑定，绑定失败") : i.err("绑定失败，请稍后再试");
}(), $.each(e, function() {
this.init();
});
}
};
}();
g.register("moresize", {
init: function() {
$("#more_size").click(function() {
var e = $("#tpl_moresize").popup({
title: "更多尺寸",
width: 960,
className: "more_size",
data: {
pixSet: [ 8, 12, 15, 30, 50 ],
dist: [ .5, .8, 1, 1.5, 2.5 ],
qrcode: cgiData.links.qrcode
},
buttons: [ {
text: "关闭",
click: function() {
this.hide();
},
type: "primary"
} ],
onHide: function() {
this.remove();
}
});
e.popup("show");
});
}
}), g.register("username", {
init: function() {
$("#modifyNickName").click(function() {
var e = {
title: "修改名称",
tplId: "#tpl_nickname",
width: 960,
className: "modify_nickName",
init: function() {
$("#modifyInput").blur(m.nickname);
}
};
v.show(e);
});
}
}), g.register("avatar", function() {
var e = '<img class="round_img" src="' + cgiData.links.rimgcrop + '"/>', t = '<img class="round_img" src="' + cgiData.links.rimgcropframe + '"/>', n, r, s, u, a, l, h, p, d, m, g = {
suc: function(e, t, o) {
i.suc(e), $("#circleImgUpload").attr("src", cgiData.links.imgupload + "&share=circle&r=" + Math.random());
var u = f.tmpFileUrl(t);
a.attr("src", u), l.attr("src", u), h.attr("src", u), $(".round_img").css("display", "block"), m.setImage(u, function() {
var e = m.getWidgetSize(), i = m.getBounds();
m.ui.holder.css("margin", "0").css({
margin: (n.height() - e[1]) / 2 + "px auto 0"
}), $.extend(d, {
fid: t,
share: o,
c: {},
lar: {
w: i[0],
h: i[1]
},
mid: {
w: r.width(),
h: r.height()
},
sml: {
w: s.width(),
h: s.height()
}
});
var u = d.lar.w || r.width();
m.setSelect([ 0, 0, u, u ]), p.enable();
});
},
err: function(e) {
W.err(e), S();
}
}, y = function() {
n = $("#largeHeadImg"), r = $("#midHeadImg").html(t), s = $("#smallHeadImg").html(t), u = $('<img src="' + cgiData.links.spacer + '"/>').appendTo(n), a = $('<img id="uploadFileSrc" src="' + cgiData.links.spacer + '"/>').appendTo(r), l = $('<img src="' + cgiData.links.spacer + '"/>').appendTo(s), h = $("#ensure_avatar_preview"), p = $("#saveAvatar"), p.enable = function() {
p.removeClass("btnDisable").attr("disable", !1);
}, p.disable = function() {
p.addClass("btnDisable").attr("disable", !0);
}, p.click(w).disable();
var i = $("#settingArea"), o = $("#cropImgArea");
o.data("class", o.attr("class")), $("#cancelSaveAvatar").click(function() {
i.show(), o.hide().attr("class", o.data("class")), S();
}), d = {
fid: null,
share: null,
c: {},
lar: {},
mid: {
w: a.width(),
h: a.height()
},
sml: {
w: l.width(),
h: l.height()
}
}, u.Jcrop({
onChange: E,
onSelect: E,
setSelect: [ 100, 100, 50, 50 ],
aspectRatio: 1,
boxWidth: n.width(),
boxHeight: n.height()
}, function() {
m = this, $(".jcrop-tracker", this.ui.selection).html(e), $(".jcrop-handle", this.ui.selection).css({
width: "7px",
height: "7px"
});
});
}, b = function() {
c({
container: $("#Js_uploadAvatar"),
type: 7,
share: "circle",
multi: !1,
onComplete: function(e, t, n, r, i) {
if (!r.base_resp) return;
switch (+r.base_resp.ret) {
case 0:
g.suc("上传成功", r.content, "circle");
break;
case 1:
g.err("图片太大，请重新上传");
default:
g.err("上传图片失败");
}
}
});
}, w = function() {
var e = d.share, t = d.fid, n = {
fid: t
};
if (!t) return;
var r, s = d.c, u = d.lar.w, a = d.lar.h;
$.extend(n, {
x1: s.x / u,
y1: s.y / a,
x2: s.x2 / u,
y2: s.y2 / a,
width: Math.floor(s.w),
height: Math.floor(s.h),
x: Math.floor(s.x),
y: Math.floor(s.y)
}), r = wx.url("/misc/cropimg?t=ajax-response"), o.post({
url: r,
data: n,
mask: !1
}, function(e) {
e && e.ret == 0 ? (i.suc("保存成功"), location.reload(!0)) : (i.err("保存失败"), p.enable());
});
}, E = function(e) {
if (parseInt(e.w) > 0) {
var t = d.lar.w, n = d.lar.h, r = d.mid.w / e.w, i = d.mid.h / e.h;
a.css({
width: Math.round(r * t) + "px",
height: Math.round(i * n) + "px",
marginLeft: "-" + Math.round(r * e.x) + "px",
marginTop: "-" + Math.round(i * e.y) + "px"
}), h.css({
width: Math.round(r * t) + "px",
height: Math.round(i * n) + "px",
marginLeft: "-" + Math.round(r * e.x) + "px",
marginTop: "-" + Math.round(i * e.y) + "px"
}), r = d.sml.w / e.w, i = d.sml.h / e.h, l.css({
width: Math.round(r * t) + "px",
height: Math.round(i * n) + "px",
marginLeft: "-" + Math.round(r * e.x) + "px",
marginTop: "-" + Math.round(i * e.y) + "px"
}), d.c = e;
}
}, S = function() {
$("#squareImgUpload").attr("src", cgiData.links.imgupload + "&share=square"), $("#circleImgUpload").attr("src", cgiData.links.imgupload + "&share=circle");
};
return {
init: function() {
$("#changeHeadImg").click(function() {
var e = {
title: "修改头像",
tplId: "#tpl_avatar",
init: y,
agreeInit: b,
width: 960,
className: "change_avatar",
done: function() {
$("#saveAvatar").trigger("click");
}
};
v.show(e);
});
}
};
}()), g.register("userinfo", function() {
var e = "/cgi-bin/setuserinfo?action=intro&t=ajax-response", t = function() {
var t = $.trim($("#modifyInput").val().replace(/\s/g, " "));
if (t.length > 140) return i.err("用户信息不能超过140个字"), !0;
var n = {};
n.intro = t, o.post({
url: wx.url(e),
data: n,
mask: !1
}, function(e) {
if (e && e.ret == 0) i.suc("提交成功"), location.reload(!0); else if (e) {
switch (+e.ret) {
case 62005:
i.err("你已经是认证用户了");
break;
case 62006:
i.err("提交失败");
break;
case 65202:
$("#error_tip").text("不能含有虚假的、冒充、利用他人名义的、容易构成混淆、误认的、法律、法规和政策禁止的内容").show();
break;
default:
i.err("提交失败");
}
return !0;
}
});
};
return {
init: function() {
$("#modifyUserInfo").click(function() {
var e = {
title: "修改功能介绍",
tplId: "#tpl_intro",
width: 960,
className: "modify_intro label_block",
init: function() {
$("#modifyInput").blur(m.intro);
},
done: t
};
v.show(e);
});
}
};
}()), g.register("wechatid", function() {
var e, t, n = function() {
e = $("#modAliasInput").val(), e && /^[\da-z\_-]{6,20}$/i.test(e) && /^[a-z]/i.test(e) ? ($("#step1Desc").hide(), $("#step2Desc").find("span").text(e), $("#step2Desc").show(), t.hide(), t.eq(2).show(), t.eq(3).show()) : i.err("可以使用6~20个字母、数字、下划线和减号，必须以字母开头。");
}, r = function() {
t.hide(), t.eq(0).show(), t.eq(1).show(), $("#step1Desc").show(), $("#step2Desc").hide();
}, s = function() {
o.post({
url: wx.url("/cgi-bin/setuserinfo?cgi=setuserinfo&t=ajax-response&alias=" + encodeURIComponent(e)),
mask: !1
}, function(e) {
if (e && e.ret == 0) i.suc("微信号设置成功"), location.reload(); else if (e) switch (+e.ret) {
case 62001:
i.err("微信号设置失败");
break;
case 62002:
i.err("微信号包含非法字符");
break;
case 62003:
i.err("你设置的微信号已存在，请重新设置");
}
});
};
return {
init: function() {
$("#setWeChatID").click(function() {
var e = $("#tpl_wechatid").popup({
title: "设置微信号",
width: 726,
className: "simple wx_account",
buttons: [ {
text: "确定",
click: n,
type: "primary"
}, {
text: "取消",
click: function() {
this.hide();
}
}, {
text: "确定",
click: s,
type: "primary"
}, {
text: "取消",
click: r
} ],
onHide: function() {
this.remove();
}
});
t = e.popup("get").find(".js_btn_p").hide(), t.eq(0).show(), t.eq(1).show(), e.popup("show");
});
}
};
}()), g.register("authentication", {
init: function() {
var e = 26, t = cgiData.isNeedVerify;
$("#Js_authentication").on("click", function() {
$("#tpl_authentication").popup({
title: "身份验证",
onOK: function() {
var e = this.get().find(".js_btn").eq(0), n = $.trim($("#Js_question").find("input").val());
return t == -1 ? (i.err("请选择一项"), !0) : t == 1 && n == "" ? (i.err("验证问题不能为空"), !0) : n.length > 26 ? (i.err("验证问题不能超过26个字"), !0) : (o.post({
url: wx.url("/cgi-bin/setuserinfo?t=ajax-response"),
data: {
action: "meetingsettings",
need_verify: t,
verify_question: $("#Js_question").find("input").val()
},
beforeSend: function() {
e.btn(0);
},
error: function() {
i.err("系统错误，请重试"), e.btn(1);
}
}, function(t) {
t && t.ret == 0 ? (i.suc("设置成功"), location.reload()) : (i.err("设置失败"), e.btn(1));
}), !0);
},
onCancel: function() {
this.hide();
},
onHide: function() {
$("#Js_question").remove(), this.remove();
}
}), $("#Js_question").find("input").val(cgiData.question.html(!1)), $(".Js_authenticationRadio").checkbox({
multi: !1,
onChanged: function(e) {
t = e.val(), e.attr("id") == "Js_needAuth" ? $("#Js_question").show() : $("#Js_question").hide();
}
}), $("#Js_question").find("i").on("click", function() {
var e = $("#Js_question").find("ul");
return e.hasClass("dn") ? e.show(100).toggleClass("dn") : e.hide(100).toggleClass("dn"), $(this).toggleClass("select_icon_up").toggleClass("select_icon_down"), !1;
}), $(document).on("click", function() {
$("#Js_question").find("ul").hide(100).addClass("dn"), $("#Js_question").find("i").removeClass("select_icon_up").addClass("select_icon_down");
}), $("#Js_question").on("click", "li", function() {
var e = $(this).text();
$("#Js_question").find("input").val(e).focus();
}), $("#Js_question").find("input").on("focus", function() {
$("#Js_wordNum").show().text(26 - $(this).val().length);
}).on("blur", function() {
$("#Js_wordNum").hide();
}).on("keyup", function() {
$("#Js_wordNum").text(26 - $(this).val().length);
}).on("keydown", function(t) {
if (t.ctrlKey) return;
switch (t.keyCode) {
case 8:
case 13:
case 37:
case 38:
case 39:
case 40:
case 46:
break;
default:
$(this).val().length >= e && t.preventDefault();
}
}).on("paste", function(e) {
var t = "";
return window.clipboardData && clipboardData.getData ? t = clipboardData.getData("Text") : e.originalEvent.clipboardData && (t = e.originalEvent.clipboardData.getData("text/plain")), $(this).val(($(this).val() + t).substr(0, 26)), !t;
});
});
}
}), g.init();
} catch (y) {
wx.jslog({
src: "setting/index.js"
}, y);
}
});