define("common/wx/media/video.js", [ "widget/media/richvideo.css", "widget/media.css", "biz_web/lib/video.js", "common/wx/Cgi.js", "common/wx/time.js", "common/qq/Class.js", "biz_web/lib/swfobject.js", "tpl/media/video.html.js", "tpl/media/videomsg.html.js" ], function(e, t, n) {
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
});define("common/wx/media/img.js", [ "widget/media.css", "tpl/media/img.html.js", "common/qq/Class.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = wx.T, s = e("widget/media.css"), o = e("tpl/media/img.html.js"), u = e("common/qq/Class.js"), a = u.declare({
init: function(e) {
if (!e || !e.container) return;
var t = e;
$(e.container).html(o.format({
token: wx.data.t,
id: e.file_id,
msgid: e.msgid || "",
source: e.source,
ow: ~e.fakeid
})).data("opt", e), this.data = t;
},
getData: function() {
return this.data;
}
});
return a;
} catch (f) {
wx.jslog({
src: "common/wx/media/img.js"
}, f);
}
});define("common/wx/media/audio.js", [ "biz_web/lib/soundmanager2.js", "tpl/media/audio.html.js", "widget/media.css", "common/qq/Class.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = wx.T, s = e("biz_web/lib/soundmanager2.js"), o = e("tpl/media/audio.html.js"), u = e("widget/media.css"), a = e("common/qq/Class.js"), f = null, l = null, c = null, h = "wxAudioPlaying", p = function() {
c = s, c.setup({
url: "/mpres/zh_CN/htmledition/plprecorder/biz_web/",
preferFlash: !1,
debugMode: !1
});
};
$(window).load(function() {
p();
});
var d = {
id: "",
source: "",
file_id: ""
}, v = a.declare({
init: function(e) {
var t = this;
$.extend(!0, t, d, e), this.soundId = this.id || this.file_id, t.play_length = Math.ceil(t.play_length * 1 / 1e3);
var n = $(i(o, t));
t.dom = $(e.selector).append(n).data("opt", e), n.click(function() {
t.toggle();
});
},
getAudioURL: function() {
var e = this.source, t = this.id, n = this.file_id;
return !e || (e = "&source=" + e), wx.url("/cgi-bin/getvoicedata?msgid={id}&fileid={fileid}{source}".format({
id: t,
fileid: n,
source: e
}));
},
isPlaying: function() {
return f != null && this == f;
},
toggle: function() {
this.isPlaying() ? this.stop() : (f && f.stop(), this.play());
},
play: function(e) {
var t = this;
if (this.isPlaying()) return;
this.dom.addClass(h), !!f && f.dom.removeClass(h), f = this, this.sound || (!c && p(), this.sound = c.createSound({
id: t.soundId,
url: t.getAudioURL(),
onfinish: function() {
f && (f.dom.removeClass(h), f = null);
}
})), c.play(this.soundId), e && e(this);
},
stop: function(e) {
if (!this.isPlaying()) return;
f = null, this.dom.removeClass(h), c.stop(this.soundId), e && e(this);
}
});
n.exports = v;
} catch (m) {
wx.jslog({
src: "common/wx/media/audio.js"
}, m);
}
});define("media/media_dialog.js", [ "widget/media/media_dialog.css", "widget/media/richvideo.css", "common/wx/popup.js", "common/wx/Tips.js", "media/media_cgi.js", "common/wx/upload.js", "biz_web/ui/checkbox.js", "common/wx/pagebar.js", "common/wx/media/audio.js", "common/wx/media/img.js", "common/wx/media/video.js", "common/wx/media/appmsg.js", "common/wx/time.js", "tpl/media/dialog/file_layout.html.js", "tpl/media/dialog/appmsg_layout.html.js", "tpl/media/dialog/videomsg_layout.html.js", "tpl/media/dialog/file.html.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict", e("widget/media/media_dialog.css"), e("widget/media/richvideo.css"), e("common/wx/popup.js");
var i = wx.T, s = null, o = null, u = "media align_edge", a = e("common/wx/Tips.js"), f = e("media/media_cgi.js"), l = e("common/wx/upload.js"), c = e("biz_web/ui/checkbox.js"), h = e("common/wx/pagebar.js"), p = l.uploadBizFile, d = template.render, v = e("common/wx/media/audio.js"), m = e("common/wx/media/img.js"), g = e("common/wx/media/video.js"), y = e("common/wx/media/appmsg.js"), b = e("common/wx/time.js"), w = b.timeFormat, E = e("tpl/media/dialog/file_layout.html.js"), S = e("tpl/media/dialog/appmsg_layout.html.js"), x = e("tpl/media/dialog/videomsg_layout.html.js"), T = e("tpl/media/dialog/file.html.js"), N = 1, C = {}, k = {
appmsg: S,
videomsg: x,
file: E
};
template.helper("mediaDialogtimeFormat", function(e) {
return w(e);
}), template.helper("mediaDialogInit", function(e) {
return e.file_id ? (C[e.file_id] = e, "") : "";
});
var L = {
"2": function(e, t) {
return new m({
container: $("#" + e.attr("id")),
file_id: t.file_id,
source: "file",
fakeid: t.fakeid
});
},
"3": function(e, t) {
var n = t;
return n.selector = "#" + e.attr("id"), n.source = "file", new v(n);
},
"4": function(e, t) {
var n = t;
return n.selector = "#" + e.attr("id"), n.id = n.file_id, n.source = "file", new g(n);
},
"15": function(e, t) {
var n = t;
return n.selector = e, n.id = n.app_id, n.tpl = "videomsg", n.for_selection = !0, n.for_transfer = !!n.content, n.hide_transfer = !!n.content, n.video_id = n.content, new g(n);
}
};
function A(e, t, n, r, i) {
var o = e / t + 1, u = new h({
container: $(".pageNavigator", s.popup("get")),
perPage: t,
first: !1,
last: !1,
isSimple: !0,
initShowPage: o,
totalItemsNum: n,
callback: function(e) {
var n = e.currentPage;
if (n == o) return;
n--, i.begin = t * n, r(i);
}
});
}
function O(e, t, n, r, f, l) {
s && s.popup("remove"), n == 15 && (e = "videomsg");
var c = N++;
s = $(i(k[e], {
tpl: t,
upload_id: c,
type: n,
token: wx.data.t
}).trim()).popup({
title: "选择素材",
className: u,
width: 960,
onOK: function() {
if (f && !f()) return !0;
this.remove(), s = null;
},
onCancel: function() {
this.remove(), s = null;
}
}), o = s.popup("get"), p({
container: "#js_media_dialog_upload" + c,
type: n,
onAllComplete: function() {
a.suc("上传成功"), l.begin = 0, M(l);
}
});
if (!!r) {
e == "file" && ($(".js_media_list", o).html(i(T, {
list: r
})), $(".frm_radio[type=radio]", o).checkbox(!1), $(".media_content", o).each(function() {
var e = $(this), t = e.data("id"), n = e.data("type"), r = C[t];
if (!r) return;
n && L[n] && L[n](e, r);
}));
if (e == "appmsg") {
var h = r.length, d = $(".js_appmsg_list .inner", o);
for (var v = 0; v < h; ++v) {
var m = r[v], g = d.eq(v % 2), b = m.app_id, w = $('<div id="appmsg%s"></div>'.sprintf(b), g).appendTo(g);
new y({
container: w,
data: m,
showMask: !0
});
}
}
if (e == "videomsg") {
var E = o.find("#js_videomsg_list").find(".inner");
r.each(function(e, t) {
var r = E.eq(t % 2), i = $('<div id="appmsg%s"></div>'.sprintf(e.app_id), r).appendTo(r);
L[n] && L[n](i, e);
});
}
s.popup("resetPosition");
}
}
function M(e) {
var t = e.type, n = e.onSelect, r = e.count || 10, i = e.begin || 0;
O("file", "loading"), f.getList(t, i, r, function(u) {
if (!s) return;
var a = {
"2": "img_cnt",
"3": "voice_cnt",
"4": "video_cnt"
}, f = u.file_item, l = u.file_cnt[a[t]];
f.length <= 0 ? O("file", "no-media", t, f, null, e) : (O("file", "files", t, f, function() {
var e = o.find('[name="media"]:checked').val(), r = $("#fileItem" + e).data("opt");
return r ? (n(t, r), !0) : !1;
}, e), A(i, r, l, M, e));
});
}
function _(e) {
return e.find(".appmsg.selected,.Js_videomsg.selected");
}
function D(e) {
var t = e.type, n = e.onSelect, r = e.count || 10, i = e.begin || 0;
O("appmsg", "loading"), f.appmsg.getList(t, i, r, function(u) {
if (!s) return;
var f = {
"10": "app_msg_cnt",
"11": "commondity_msg_cnt",
"15": "video_msg_cnt"
}, l = u.item, c = u.file_cnt[f[t]];
l.length <= 0 ? O("appmsg", "no-media", t, l, null, e) : (O("appmsg", "files", t, l, function() {
var e = _(o).parent().data("opt");
return e ? (n(t, e), !0) : !1;
}), A(i, r, c, D, e), t == 15 ? (o.on("click", ".Js_videomsg", function() {
$(this).find(".loading_tips").length ? a.err("视频在转码中，不能选择") : $(this).find(".title").text().trim() != "" && (o.find(".Js_videomsg").removeClass("selected"), $(this).addClass("selected"));
}), o.on("mouseenter", ".Js_videomsg", function() {
$(this).find(".title").text().trim() == "" && $(this).addClass("no_title");
}), o.on("mouseleave", ".Js_videomsg", function() {
$(this).removeClass("no_title");
})) : o.on("click", ".appmsg", function() {
_(o).removeClass("selected"), $(this).addClass("selected");
}));
});
}
return {
getFile: M,
getAppmsg: D
};
} catch (P) {
wx.jslog({
src: "media/media_dialog.js"
}, P);
}
});define("common/wx/richEditor/emotionEditor.js", [ "widget/emotion_editor.css", "tpl/richEditor/emotionEditor.html.js", "common/wx/richEditor/wysiwyg.js", "common/wx/richEditor/emotion.js", "common/wx/upload.js", "common/wx/Tips.js", "common/qq/Class.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = wx.T, s = e("widget/emotion_editor.css"), o = e("tpl/richEditor/emotionEditor.html.js"), u = e("common/wx/richEditor/wysiwyg.js"), a = e("common/wx/richEditor/emotion.js"), f = e("common/wx/upload.js"), l = e("common/wx/Tips.js"), c = f.uploadCdnFile, h = e("common/qq/Class.js"), p = {
isHTML: !0,
wordlimit: 500,
hideUpload: !0
}, d = 1, v = h.declare({
init: function(e, t) {
var n = this;
t = this.opt = $.extend(!0, {}, p, t), n.selector$ = e, t.gid = d++, n.selector$.html(i(o, t)), n.emotion = new a(e.find(".js_emotionArea")), n.wysiwyg = new u(e.find(".js_editorArea"), {
init: function() {
e.find(".js_editorTip").html("还可以输入<em>{l}</em>字".format({
l: t.wordlimit
}));
},
textFilter: function(e) {
return e = n.emotion.getEmotionText(e).replace(/<br.*?>/ig, "\n").replace(/<.*?>/g, ""), e = e.html(!1), t.isHTML ? e : e.replace(/<br.*?>/ig, "\n").replace(/<.*?>/g, "");
},
nodeFilter: function(e) {
var t = "";
return e.nodeName.toUpperCase() === "IMG" && (t = e), t;
},
change: function() {
var r = n.getContent(), i = t.wordlimit - r.length, s = e.find(".js_editorTip");
i < 0 ? s.html("已超出<em{cls}>{l}</em>字".format({
l: -i,
cls: ' class="warn"'
})) : s.html("还可以输入<em>{l}</em>字".format({
l: i
}));
}
}), n.upload = c({
container: e.find(".js_upload"),
type: 2,
multi: !1,
onComplete: function(e, t, r, i, s) {
if (!i || !i.base_resp || i.base_resp.ret != 0) return;
var o = i.content;
l.suc("上传成功"), n.wysiwyg.insertHTML(o);
}
}), n._initEvent(), n.insertHTML(t.text);
},
_initEvent: function() {
var e = $(".js_switch", this.selector$), t = this.emotion, n = this.wysiwyg;
t.click(function(e) {
return n.insertHTML(t.getEmotionHTML(e)), !1;
}), t.hide(), e.click(function() {
t.show();
}), $(document).on("click", "*", function(e) {
var n = $(e.target), r = n.filter(".js_switch"), i = n.filter(".js_emotion_i"), s = n.filter(".emotions_item");
!r.length && !i.length && !s.length && t.hide();
});
},
setContent: function(e) {
var t = e || "";
t = this.opt.linebreak ? t.replace(/\n/g, "<br>") : t, e = a.emoji(t), this.wysiwyg.setContent(e, t.html(!1));
},
insertHTML: function(e) {
e = e || "", this.wysiwyg.insertHTML(e);
},
getContent: function() {
var e = this.wysiwyg.getContent();
return e = typeof e == "string" ? e.trim() : "", this.opt.linebreak ? e.replace(/<br[^>]*>/ig, "\n") : e;
},
getHTML: function() {
var e = this.wysiwyg.getHTML().html(!1);
return typeof e == "string" ? e.trim() : "";
}
});
n.exports = v;
} catch (m) {
wx.jslog({
src: "common/wx/richEditor/emotionEditor.js"
}, m);
}
});define("common/qq/jquery.plugin/tab.js", [ "tpl/tab.html.js", "widget/msg_tab.css" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = {
index: 0
}, s = e("tpl/tab.html.js"), o = e("widget/msg_tab.css");
$.fn.tab = function(e) {
if (!e || !e.tabs) return;
this.html(wx.T(s, {
tabs: e.tabs
}));
var t = this, n = t.find(".tab_navs"), r = n.find(".tab_nav"), o = r.length, u = null, a = null, f = function(n) {
var r = n.data("tab"), i = n.data("type");
!r || (u != n && (u && u.removeClass("selected"), a && a.hide(), u = n, a = t.find(r).parent(), a.show(), u.addClass("selected")), !!e.select && e.select(n, a, r, i));
}, l = function(n) {
var r = n.data("tab"), i = n.data("type");
return e.click ? e.click(n, t.find(r), r, i) : !0;
};
return e = $.extend(!0, {}, i, e), r.each(function(n) {
var r = e.index, i = $(this).addClass("width" + o), s = i.data("tab");
n == r ? f(i) : t.find(s).parent().hide(), n == o - 1 && i.addClass("no_extra");
}), n.on("click", ".tab_nav", function() {
var e = l($(this));
return e != 0 && f($(this));
}), {
getLen: function() {
return o;
},
getTabs: function() {
return r;
},
select: function(e) {
return f(r.eq(e));
}
};
};
} catch (u) {
wx.jslog({
src: "common/qq/jquery.plugin/tab.js"
}, u);
}
});define("common/lib/MockJax.js", [], function(e, t, n) {
try {
var r = +(new Date);
(function(e) {
function t(t) {
window.DOMParser == undefined && window.ActiveXObject && (DOMParser = function() {}, DOMParser.prototype.parseFromString = function(e) {
var t = new ActiveXObject("Microsoft.XMLDOM");
return t.async = "false", t.loadXML(e), t;
});
try {
var n = (new DOMParser).parseFromString(t, "text/xml");
if (!e.isXMLDoc(n)) throw "Unable to parse XML";
var r = e("parsererror", n);
if (r.length == 1) throw "Error: " + e(n).text();
return n;
} catch (i) {
var s = i.name == undefined ? i : i.name + ": " + i.message;
return e(document).trigger("xmlParseError", [ s ]), undefined;
}
}
function n(t, n, r) {
(t.context ? e(t.context) : e.event).trigger(n, r);
}
function r(t, n) {
var i = !0;
return typeof n == "string" ? e.isFunction(t.test) ? t.test(n) : t == n : (e.each(t, function(s) {
if (n[s] === undefined) return i = !1, i;
typeof n[s] == "object" ? i = i && r(t[s], n[s]) : e.isFunction(t[s].test) ? i = i && t[s].test(n[s]) : i = i && t[s] == n[s];
}), i);
}
function i(t, n) {
if (e.isFunction(t)) return t(n);
if (e.isFunction(t.url.test)) {
if (!t.url.test(n.url)) return null;
} else {
var i = t.url.indexOf("*");
if (t.url !== n.url && i === -1 || !(new RegExp(t.url.replace(/[-[\]{}()+?.,\\^$|#\s]/g, "\\$&").replace(/\*/g, ".+"))).test(n.url)) return null;
}
return t.data && n.data && !r(t.data, n.data) ? null : t && t.type && t.type.toLowerCase() != n.type.toLowerCase() ? null : t;
}
function s(n, r, i) {
var s = function(s) {
return function() {
return function() {
var s;
this.status = n.status, this.statusText = n.statusText, this.readyState = 4, e.isFunction(n.response) && n.response(i), r.dataType == "json" && typeof n.responseText == "object" ? this.responseText = JSON.stringify(n.responseText) : r.dataType == "xml" ? typeof n.responseXML == "string" ? (this.responseXML = t(n.responseXML), this.responseText = n.responseXML) : this.responseXML = n.responseXML : this.responseText = n.responseText;
if (typeof n.status == "number" || typeof n.status == "string") this.status = n.status;
typeof n.statusText == "string" && (this.statusText = n.statusText), s = this.onreadystatechange || this.onload, e.isFunction(s) ? (n.isTimeout && (this.status = -1), s.call(this, n.isTimeout ? "timeout" : undefined)) : n.isTimeout && (this.status = -1);
}.apply(s);
};
}(this);
n.proxy ? v({
global: !1,
url: n.proxy,
type: n.proxyType,
data: n.data,
dataType: r.dataType === "script" ? "text/plain" : r.dataType,
complete: function(e) {
n.responseXML = e.responseXML, n.responseText = e.responseText, n.status = e.status, n.statusText = e.statusText, this.responseTimer = setTimeout(s, n.responseTime || 0);
}
}) : r.async === !1 ? s() : this.responseTimer = setTimeout(s, n.responseTime || 50);
}
function o(t, n, r, i) {
return t = e.extend(!0, {}, e.mockjaxSettings, t), typeof t.headers == "undefined" && (t.headers = {}), t.contentType && (t.headers["content-type"] = t.contentType), {
status: t.status,
statusText: t.statusText,
readyState: 1,
open: function() {},
send: function() {
i.fired = !0, s.call(this, t, n, r);
},
abort: function() {
clearTimeout(this.responseTimer);
},
setRequestHeader: function(e, n) {
t.headers[e] = n;
},
getResponseHeader: function(e) {
if (t.headers && t.headers[e]) return t.headers[e];
if (e.toLowerCase() == "last-modified") return t.lastModified || (new Date).toString();
if (e.toLowerCase() == "etag") return t.etag || "";
if (e.toLowerCase() == "content-type") return t.contentType || "text/plain";
},
getAllResponseHeaders: function() {
var n = "";
return e.each(t.headers, function(e, t) {
n += e + ": " + t + "\n";
}), n;
}
};
}
function u(e, t, n) {
a(e), e.dataType = "json";
if (e.data && y.test(e.data) || y.test(e.url)) {
l(e, t, n);
var r = /^(\w+:)?\/\/([^\/?#]+)/, i = r.exec(e.url), s = i && (i[1] && i[1] !== location.protocol || i[2] !== location.host);
e.dataType = "script";
if (e.type.toUpperCase() === "GET" && s) {
var o = f(e, t, n);
return o ? o : !0;
}
}
return null;
}
function a(e) {
if (e.type.toUpperCase() === "GET") y.test(e.url) || (e.url += (/\?/.test(e.url) ? "&" : "?") + (e.jsonp || "callback") + "=?"); else if (!e.data || !y.test(e.data)) e.data = (e.data ? e.data + "&" : "") + (e.jsonp || "callback") + "=?";
}
function f(t, n, r) {
var i = r && r.context || t, s = null;
return n.response && e.isFunction(n.response) ? n.response(r) : typeof n.responseText == "object" ? e.globalEval("(" + JSON.stringify(n.responseText) + ")") : e.globalEval("(" + n.responseText + ")"), c(t, i, n), h(t, i, n), e.Deferred && (s = new e.Deferred, typeof n.responseText == "object" ? s.resolveWith(i, [ n.responseText ]) : s.resolveWith(i, [ e.parseJSON(n.responseText) ])), s;
}
function l(e, t, n) {
var r = n && n.context || e, i = e.jsonpCallback || "jsonp" + b++;
e.data && (e.data = (e.data + "").replace(y, "=" + i + "$1")), e.url = e.url.replace(y, "=" + i + "$1"), window[i] = window[i] || function(n) {
data = n, c(e, r, t), h(e, r, t), window[i] = undefined;
try {
delete window[i];
} catch (s) {}
head && head.removeChild(script);
};
}
function c(e, t, r) {
e.success && e.success.call(t, r.responseText || "", status, {}), e.global && n(e, "ajaxSuccess", [ {}, e ]);
}
function h(t, r) {
t.complete && t.complete.call(r, {}, status), t.global && n("ajaxComplete", [ {}, t ]), t.global && !--e.active && e.event.trigger("ajaxStop");
}
function p(t, n) {
var r, s, a;
typeof t == "object" ? (n = t, t = undefined) : n.url = t, s = e.extend(!0, {}, e.ajaxSettings, n);
for (var f = 0; f < m.length; f++) {
if (!m[f]) continue;
a = i(m[f], s);
if (!a) continue;
g.push(s), e.mockjaxSettings.log(a, s);
if (s.dataType === "jsonp") if (r = u(s, a, n)) return r;
return a.cache = s.cache, a.timeout = s.timeout, a.global = s.global, d(a, n), function(t, n, i, s) {
r = v.call(e, e.extend(!0, {}, i, {
xhr: function() {
return o(t, n, i, s);
}
}));
}(a, s, n, m[f]), r;
}
return v.apply(e, [ n ]);
}
function d(e, t) {
if (!(e.url instanceof RegExp)) return;
if (!e.hasOwnProperty("urlParams")) return;
var n = e.url.exec(t.url);
if (n.length === 1) return;
n.shift();
var r = 0, i = n.length, s = e.urlParams.length, o = Math.min(i, s), u = {};
for (r; r < o; r++) {
var a = e.urlParams[r];
u[a] = n[r];
}
t.urlParams = u;
}
var v = e.ajax, m = [], g = [], y = /=\?(&|$)/, b = (new Date).getTime();
e.extend({
ajax: p
}), e.mockjaxSettings = {
log: function(t, n) {
if (t.logging === !1 || typeof t.logging == "undefined" && e.mockjaxSettings.logging === !1) return;
if (window.console && console.log) {
var r = "MOCK " + n.type.toUpperCase() + ": " + n.url, i = e.extend({}, n);
if (typeof console.log == "function") console.log(r, i); else try {
console.log(r + " " + JSON.stringify(i));
} catch (s) {
console.log(r);
}
}
},
logging: !0,
status: 200,
statusText: "OK",
responseTime: 500,
isTimeout: !1,
contentType: "text/plain",
response: "",
responseText: "",
responseXML: "",
proxy: "",
proxyType: "GET",
lastModified: null,
etag: "",
headers: {
etag: "IJF@H#@923uf8023hFO@I#H#",
"content-type": "text/plain"
}
}, e.mockjax = function(e) {
var t = m.length;
return m[t] = e, t;
}, e.mockjaxClear = function(e) {
arguments.length == 1 ? m[e] = null : m = [], g = [];
}, e.mockjax.handler = function(e) {
if (arguments.length == 1) return m[e];
}, e.mockjax.mockedAjaxCalls = function() {
return g;
};
})(jQuery);
} catch (i) {
wx.jslog({
src: "common/lib/MockJax.js"
}, i);
}
});define("common/wx/cgiReport.js", [ "common/wx/Tips.js" ], function(e, t, n) {
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
});define("tpl/dialog.html.js", [], function(e, t, n) {
return '<div class="dialog_wrp {className}" style="{if width}width:{width}px;{/if}{if height}height:{height}px;{/if};display:none;">\n  <div class="dialog" id="{id}">\n    <div class="dialog_hd">\n      <h3>{title}</h3>\n      <a href="javascript:;" class="pop_closed">关闭</a>\n    </div>\n    <div class="dialog_bd">\n      <div class="page_msg large simple default {msg.msgClass}">\n        <div class="inner group">\n          <span class="msg_icon_wrapper"><i class="icon_msg {icon} "></i></span>\n          <div class="msg_content ">\n          {if msg.title}<h4>{=msg.title}</h4>{/if}\n          {if msg.text}<p>{=msg.text}</p>{/if}\n          </div>\n        </div>\n      </div>\n    </div> \n    <div class="dialog_ft">\n      {each buttons as bt index}\n      <a href="javascript:;" class="btn {bt.type} js_btn">{bt.text}</a>\n      {/each}\n    </div>\n  </div>\n</div>\n{if mask}<div class="mask"></div>{/if}\n\n';
});define("biz_common/jquery.ui/jquery.ui.draggable.js", [], function(e, t, n) {
try {
var r = +(new Date);
(function(e, t) {
function n(t, n) {
var i, s, o, u = t.nodeName.toLowerCase();
return "area" === u ? (i = t.parentNode, s = i.name, !t.href || !s || i.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap=#" + s + "]")[0], !!o && r(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && r(t);
}
function r(t) {
return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
return e.css(this, "visibility") === "hidden";
}).length;
}
var i = 0, s = /^ui-id-\d+$/;
e.ui = e.ui || {}, e.extend(e.ui, {
version: "1.10.3"
}), e.fn.extend({
focus: function(t) {
return function(n, r) {
return typeof n == "number" ? this.each(function() {
var t = this;
setTimeout(function() {
e(t).focus(), r && r.call(t);
}, n);
}) : t.apply(this, arguments);
};
}(e.fn.focus),
scrollParent: function() {
var t;
return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function() {
return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"));
}).eq(0) : t = this.parents().filter(function() {
return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"));
}).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t;
},
zIndex: function(n) {
if (n !== t) return this.css("zIndex", n);
if (this.length) {
var r = e(this[0]), i, s;
while (r.length && r[0] !== document) {
i = r.css("position");
if (i === "absolute" || i === "relative" || i === "fixed") {
s = parseInt(r.css("zIndex"), 10);
if (!isNaN(s) && s !== 0) return s;
}
r = r.parent();
}
}
return 0;
},
uniqueId: function() {
return this.each(function() {
this.id || (this.id = "ui-id-" + ++i);
});
},
removeUniqueId: function() {
return this.each(function() {
s.test(this.id) && e(this).removeAttr("id");
});
}
}), e.extend(e.expr[":"], {
data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
return function(n) {
return !!e.data(n, t);
};
}) : function(t, n, r) {
return !!e.data(t, r[3]);
},
focusable: function(t) {
return n(t, !isNaN(e.attr(t, "tabindex")));
},
tabbable: function(t) {
var r = e.attr(t, "tabindex"), i = isNaN(r);
return (i || r >= 0) && n(t, !i);
}
}), e.extend(e.ui, {
plugin: {
add: function(t, n, r) {
var i, s = e.ui[t].prototype;
for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([ n, r[i] ]);
},
call: function(e, t, n) {
var r, i = e.plugins[t];
if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11) return;
for (r = 0; r < i.length; r++) e.options[i[r][0]] && i[r][1].apply(e.element, n);
}
},
hasScroll: function(t, n) {
if (e(t).css("overflow") === "hidden") return !1;
var r = n && n === "left" ? "scrollLeft" : "scrollTop", i = !1;
return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i);
}
});
})(jQuery), function(e, t) {
var n = 0, r = Array.prototype.slice, i = e.cleanData;
e.cleanData = function(t) {
for (var n = 0, r; (r = t[n]) != null; n++) try {
e(r).triggerHandler("remove");
} catch (s) {}
i(t);
}, e.widget = function(t, n, r) {
var i, s, o, u, a = {}, f = t.split(".")[0];
t = t.split(".")[1], i = f + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function(t) {
return !!e.data(t, i);
}, e[f] = e[f] || {}, s = e[f][t], o = e[f][t] = function(e, t) {
if (!this._createWidget) return new o(e, t);
arguments.length && this._createWidget(e, t);
}, e.extend(o, s, {
version: r.version,
_proto: e.extend({}, r),
_childConstructors: []
}), u = new n, u.options = e.widget.extend({}, u.options), e.each(r, function(t, r) {
if (!e.isFunction(r)) {
a[t] = r;
return;
}
a[t] = function() {
var e = function() {
return n.prototype[t].apply(this, arguments);
}, i = function(e) {
return n.prototype[t].apply(this, e);
};
return function() {
var t = this._super, n = this._superApply, s;
return this._super = e, this._superApply = i, s = r.apply(this, arguments), this._super = t, this._superApply = n, s;
};
}();
}), o.prototype = e.widget.extend(u, {
widgetEventPrefix: s ? u.widgetEventPrefix : t
}, a, {
constructor: o,
namespace: f,
widgetName: t,
widgetFullName: i
}), s ? (e.each(s._childConstructors, function(t, n) {
var r = n.prototype;
e.widget(r.namespace + "." + r.widgetName, o, n._proto);
}), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o);
}, e.widget.extend = function(n) {
var i = r.call(arguments, 1), s = 0, o = i.length, u, a;
for (; s < o; s++) for (u in i[s]) a = i[s][u], i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a) : n[u] = a);
return n;
}, e.widget.bridge = function(n, i) {
var s = i.prototype.widgetFullName || n;
e.fn[n] = function(o) {
var u = typeof o == "string", a = r.call(arguments, 1), f = this;
return o = !u && a.length ? e.widget.extend.apply(null, [ o ].concat(a)) : o, u ? this.each(function() {
var r, i = e.data(this, s);
if (!i) return e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'");
if (!e.isFunction(i[o]) || o.charAt(0) === "_") return e.error("no such method '" + o + "' for " + n + " widget instance");
r = i[o].apply(i, a);
if (r !== i && r !== t) return f = r && r.jquery ? f.pushStack(r.get()) : r, !1;
}) : this.each(function() {
var t = e.data(this, s);
t ? t.option(o || {})._init() : e.data(this, s, new i(o, this));
}), f;
};
}, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
widgetName: "widget",
widgetEventPrefix: "",
defaultElement: "<div>",
options: {
disabled: !1,
create: null
},
_createWidget: function(t, r) {
r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), r !== this && (e.data(r, this.widgetFullName, this), this._on(!0, this.element, {
remove: function(e) {
e.target === r && this.destroy();
}
}), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
},
_getCreateOptions: e.noop,
_getCreateEventData: e.noop,
_create: e.noop,
_init: e.noop,
destroy: function() {
this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus");
},
_destroy: e.noop,
widget: function() {
return this.element;
},
option: function(n, r) {
var i = n, s, o, u;
if (arguments.length === 0) return e.widget.extend({}, this.options);
if (typeof n == "string") {
i = {}, s = n.split("."), n = s.shift();
if (s.length) {
o = i[n] = e.widget.extend({}, this.options[n]);
for (u = 0; u < s.length - 1; u++) o[s[u]] = o[s[u]] || {}, o = o[s[u]];
n = s.pop();
if (r === t) return o[n] === t ? null : o[n];
o[n] = r;
} else {
if (r === t) return this.options[n] === t ? null : this.options[n];
i[n] = r;
}
}
return this._setOptions(i), this;
},
_setOptions: function(e) {
var t;
for (t in e) this._setOption(t, e[t]);
return this;
},
_setOption: function(e, t) {
return this.options[e] = t, e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this;
},
enable: function() {
return this._setOption("disabled", !1);
},
disable: function() {
return this._setOption("disabled", !0);
},
_on: function(t, n, r) {
var i, s = this;
typeof t != "boolean" && (r = n, n = t, t = !1), r ? (n = i = e(n), this.bindings = this.bindings.add(n)) : (r = n, n = this.element, i = this.widget()), e.each(r, function(r, o) {
function u() {
if (!t && (s.options.disabled === !0 || e(this).hasClass("ui-state-disabled"))) return;
return (typeof o == "string" ? s[o] : o).apply(s, arguments);
}
typeof o != "string" && (u.guid = o.guid = o.guid || u.guid || e.guid++);
var a = r.match(/^(\w+)\s*(.*)$/), f = a[1] + s.eventNamespace, l = a[2];
l ? i.delegate(l, f, u) : n.bind(f, u);
});
},
_off: function(e, t) {
t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t);
},
_delay: function(e, t) {
function n() {
return (typeof e == "string" ? r[e] : e).apply(r, arguments);
}
var r = this;
return setTimeout(n, t || 0);
},
_hoverable: function(t) {
this.hoverable = this.hoverable.add(t), this._on(t, {
mouseenter: function(t) {
e(t.currentTarget).addClass("ui-state-hover");
},
mouseleave: function(t) {
e(t.currentTarget).removeClass("ui-state-hover");
}
});
},
_focusable: function(t) {
this.focusable = this.focusable.add(t), this._on(t, {
focusin: function(t) {
e(t.currentTarget).addClass("ui-state-focus");
},
focusout: function(t) {
e(t.currentTarget).removeClass("ui-state-focus");
}
});
},
_trigger: function(t, n, r) {
var i, s, o = this.options[t];
r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent;
if (s) for (i in s) i in n || (n[i] = s[i]);
return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [ n ].concat(r)) === !1 || n.isDefaultPrevented());
}
}, e.each({
show: "fadeIn",
hide: "fadeOut"
}, function(t, n) {
e.Widget.prototype["_" + t] = function(r, i, s) {
typeof i == "string" && (i = {
effect: i
});
var o, u = i ? i === !0 || typeof i == "number" ? n : i.effect || n : t;
i = i || {}, typeof i == "number" && (i = {
duration: i
}), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && e.effects.effect[u] ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function(n) {
e(this)[t](), s && s.call(r[0]), n();
});
};
});
}(jQuery), function(e, t) {
var n = !1;
e(document).mouseup(function() {
n = !1;
}), e.widget("ui.mouse", {
version: "1.10.3",
options: {
cancel: "input,textarea,button,select,option",
distance: 1,
delay: 0
},
_mouseInit: function() {
var t = this;
this.element.bind("mousedown." + this.widgetName, function(e) {
return t._mouseDown(e);
}).bind("click." + this.widgetName, function(n) {
if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1;
}), this.started = !1;
},
_mouseDestroy: function() {
this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
},
_mouseDown: function(t) {
if (n) return;
this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
var r = this, i = t.which === 1, s = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
if (!i || s || !this._mouseCapture(t)) return !0;
this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
r.mouseDelayMet = !0;
}, this.options.delay));
if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
this._mouseStarted = this._mouseStart(t) !== !1;
if (!this._mouseStarted) return t.preventDefault(), !0;
}
return !0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
return r._mouseMove(e);
}, this._mouseUpDelegate = function(e) {
return r._mouseUp(e);
}, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0;
},
_mouseMove: function(t) {
return e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted);
},
_mouseUp: function(t) {
return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1;
},
_mouseDistanceMet: function(e) {
return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
},
_mouseDelayMet: function() {
return this.mouseDelayMet;
},
_mouseStart: function() {},
_mouseDrag: function() {},
_mouseStop: function() {},
_mouseCapture: function() {
return !0;
}
});
}(jQuery), function(e, t) {
e.widget("ui.draggable", e.ui.mouse, {
version: "1.10.3",
widgetEventPrefix: "drag",
options: {
addClasses: !0,
appendTo: "parent",
axis: !1,
connectToSortable: !1,
containment: !1,
cursor: "auto",
cursorAt: !1,
grid: !1,
handle: !1,
helper: "original",
iframeFix: !1,
opacity: !1,
refreshPositions: !1,
revert: !1,
revertDuration: 500,
scope: "default",
scroll: !0,
scrollSensitivity: 20,
scrollSpeed: 20,
snap: !1,
snapMode: "both",
snapTolerance: 20,
stack: !1,
zIndex: !1,
drag: null,
start: null,
stop: null
},
_create: function() {
this.options.helper === "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit();
},
_destroy: function() {
this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy();
},
_mouseCapture: function(t) {
var n = this.options;
return this.helper || n.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function() {
e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
width: this.offsetWidth + "px",
height: this.offsetHeight + "px",
position: "absolute",
opacity: "0.001",
zIndex: 1e3
}).css(e(this).offset()).appendTo("body");
}), !0) : !1);
},
_mouseStart: function(t) {
var n = this.options;
return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
top: this.offset.top - this.margins.top,
left: this.offset.left - this.margins.left
}, this.offset.scroll = !1, e.extend(this.offset, {
click: {
left: t.pageX - this.offset.left,
top: t.pageY - this.offset.top
},
parent: this._getParentOffset(),
relative: this._getRelativeOffset()
}), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0);
},
_mouseDrag: function(t, n) {
this.offsetParentCssPosition === "fixed" && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute");
if (!n) {
var r = this._uiHash();
if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
this.position = r.position;
}
if (!this.options.axis || this.options.axis !== "y") this.helper[0].style.left = this.position.left + "px";
if (!this.options.axis || this.options.axis !== "x") this.helper[0].style.top = this.position.top + "px";
return e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1;
},
_mouseStop: function(t) {
var n = this, r = !1;
return e.ui.ddmanager && !this.options.dropBehaviour && (r = e.ui.ddmanager.drop(this, t)), this.dropped && (r = this.dropped, this.dropped = !1), this.options.helper === "original" && !e.contains(this.element[0].ownerDocument, this.element[0]) ? !1 : (this.options.revert === "invalid" && !r || this.options.revert === "valid" && r || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, r) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
n._trigger("stop", t) !== !1 && n._clear();
}) : this._trigger("stop", t) !== !1 && this._clear(), !1);
},
_mouseUp: function(t) {
return e("div.ui-draggable-iframeFix").each(function() {
this.parentNode.removeChild(this);
}), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t);
},
cancel: function() {
return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this;
},
_getHandle: function(t) {
return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0;
},
_createHelper: function(t) {
var n = this.options, r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [ t ])) : n.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
return r.parents("body").length || r.appendTo(n.appendTo === "parent" ? this.element[0].parentNode : n.appendTo), r[0] !== this.element[0] && !/(fixed|absolute)/.test(r.css("position")) && r.css("position", "absolute"), r;
},
_adjustOffsetFromHelper: function(t) {
typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
left: +t[0],
top: +t[1] || 0
}), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
},
_getParentOffset: function() {
var t = this.offsetParent.offset();
this.cssPosition === "absolute" && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
if (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && e.ui.ie) t = {
top: 0,
left: 0
};
return {
top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
};
},
_getRelativeOffset: function() {
if (this.cssPosition === "relative") {
var e = this.element.position();
return {
top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
};
}
return {
top: 0,
left: 0
};
},
_cacheMargins: function() {
this.margins = {
left: parseInt(this.element.css("marginLeft"), 10) || 0,
top: parseInt(this.element.css("marginTop"), 10) || 0,
right: parseInt(this.element.css("marginRight"), 10) || 0,
bottom: parseInt(this.element.css("marginBottom"), 10) || 0
};
},
_cacheHelperProportions: function() {
this.helperProportions = {
width: this.helper.outerWidth(),
height: this.helper.outerHeight()
};
},
_setContainment: function() {
var t, n, r, i = this.options;
if (!i.containment) {
this.containment = null;
return;
}
if (i.containment === "window") {
this.containment = [ e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ];
return;
}
if (i.containment === "document") {
this.containment = [ 0, 0, e(document).width() - this.helperProportions.width - this.margins.left, (e(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ];
return;
}
if (i.containment.constructor === Array) {
this.containment = i.containment;
return;
}
i.containment === "parent" && (i.containment = this.helper[0].parentNode), n = e(i.containment), r = n[0];
if (!r) return;
t = n.css("overflow") !== "hidden", this.containment = [ (parseInt(n.css("borderLeftWidth"), 10) || 0) + (parseInt(n.css("paddingLeft"), 10) || 0), (parseInt(n.css("borderTopWidth"), 10) || 0) + (parseInt(n.css("paddingTop"), 10) || 0), (t ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) - (parseInt(n.css("borderRightWidth"), 10) || 0) - (parseInt(n.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) - (parseInt(n.css("borderBottomWidth"), 10) || 0) - (parseInt(n.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom ], this.relative_container = n;
},
_convertPositionTo: function(t, n) {
n || (n = this.position);
var r = t === "absolute" ? 1 : -1, i = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
return this.offset.scroll || (this.offset.scroll = {
top: i.scrollTop(),
left: i.scrollLeft()
}), {
top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * r,
left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * r
};
},
_generatePosition: function(t) {
var n, r, i, s, o = this.options, u = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, a = t.pageX, f = t.pageY;
return this.offset.scroll || (this.offset.scroll = {
top: u.scrollTop(),
left: u.scrollLeft()
}), this.originalPosition && (this.containment && (this.relative_container ? (r = this.relative_container.offset(), n = [ this.containment[0] + r.left, this.containment[1] + r.top, this.containment[2] + r.left, this.containment[3] + r.top ]) : n = this.containment, t.pageX - this.offset.click.left < n[0] && (a = n[0] + this.offset.click.left), t.pageY - this.offset.click.top < n[1] && (f = n[1] + this.offset.click.top), t.pageX - this.offset.click.left > n[2] && (a = n[2] + this.offset.click.left), t.pageY - this.offset.click.top > n[3] && (f = n[3] + this.offset.click.top)), o.grid && (i = o.grid[1] ? this.originalPageY + Math.round((f - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, f = n ? i - this.offset.click.top >= n[1] || i - this.offset.click.top > n[3] ? i : i - this.offset.click.top >= n[1] ? i - o.grid[1] : i + o.grid[1] : i, s = o.grid[0] ? this.originalPageX + Math.round((a - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, a = n ? s - this.offset.click.left >= n[0] || s - this.offset.click.left > n[2] ? s : s - this.offset.click.left >= n[0] ? s - o.grid[0] : s + o.grid[0] : s)), {
top: f - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
};
},
_clear: function() {
this.helper.removeClass("ui-draggable-dragging"), this.helper[0] !== this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1;
},
_trigger: function(t, n, r) {
return r = r || this._uiHash(), e.ui.plugin.call(this, t, [ n, r ]), t === "drag" && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, n, r);
},
plugins: {},
_uiHash: function() {
return {
helper: this.helper,
position: this.position,
originalPosition: this.originalPosition,
offset: this.positionAbs
};
}
}), e.ui.plugin.add("draggable", "connectToSortable", {
start: function(t, n) {
var r = e(this).data("ui-draggable"), i = r.options, s = e.extend({}, n, {
item: r.element
});
r.sortables = [], e(i.connectToSortable).each(function() {
var n = e.data(this, "ui-sortable");
n && !n.options.disabled && (r.sortables.push({
instance: n,
shouldRevert: n.options.revert
}), n.refreshPositions(), n._trigger("activate", t, s));
});
},
stop: function(t, n) {
var r = e(this).data("ui-draggable"), i = e.extend({}, n, {
item: r.element
});
e.each(r.sortables, function() {
this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, r.options.helper === "original" && this.instance.currentItem.css({
top: "auto",
left: "auto"
})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, i));
});
},
drag: function(t, n) {
var r = e(this).data("ui-draggable"), i = this;
e.each(r.sortables, function() {
var s = !1, o = this;
this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (s = !0, e.each(r.sortables, function() {
return this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0]) && (s = !1), s;
})), s ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(i).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
return n.helper[0];
}, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1);
});
}
}), e.ui.plugin.add("draggable", "cursor", {
start: function() {
var t = e("body"), n = e(this).data("ui-draggable").options;
t.css("cursor") && (n._cursor = t.css("cursor")), t.css("cursor", n.cursor);
},
stop: function() {
var t = e(this).data("ui-draggable").options;
t._cursor && e("body").css("cursor", t._cursor);
}
}), e.ui.plugin.add("draggable", "opacity", {
start: function(t, n) {
var r = e(n.helper), i = e(this).data("ui-draggable").options;
r.css("opacity") && (i._opacity = r.css("opacity")), r.css("opacity", i.opacity);
},
stop: function(t, n) {
var r = e(this).data("ui-draggable").options;
r._opacity && e(n.helper).css("opacity", r._opacity);
}
}), e.ui.plugin.add("draggable", "scroll", {
start: function() {
var t = e(this).data("ui-draggable");
t.scrollParent[0] !== document && t.scrollParent[0].tagName !== "HTML" && (t.overflowOffset = t.scrollParent.offset());
},
drag: function(t) {
var n = e(this).data("ui-draggable"), r = n.options, i = !1;
if (n.scrollParent[0] !== document && n.scrollParent[0].tagName !== "HTML") {
if (!r.axis || r.axis !== "x") n.overflowOffset.top + n.scrollParent[0].offsetHeight - t.pageY < r.scrollSensitivity ? n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop + r.scrollSpeed : t.pageY - n.overflowOffset.top < r.scrollSensitivity && (n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop - r.scrollSpeed);
if (!r.axis || r.axis !== "y") n.overflowOffset.left + n.scrollParent[0].offsetWidth - t.pageX < r.scrollSensitivity ? n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft + r.scrollSpeed : t.pageX - n.overflowOffset.left < r.scrollSensitivity && (n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft - r.scrollSpeed);
} else {
if (!r.axis || r.axis !== "x") t.pageY - e(document).scrollTop() < r.scrollSensitivity ? i = e(document).scrollTop(e(document).scrollTop() - r.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < r.scrollSensitivity && (i = e(document).scrollTop(e(document).scrollTop() + r.scrollSpeed));
if (!r.axis || r.axis !== "y") t.pageX - e(document).scrollLeft() < r.scrollSensitivity ? i = e(document).scrollLeft(e(document).scrollLeft() - r.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < r.scrollSensitivity && (i = e(document).scrollLeft(e(document).scrollLeft() + r.scrollSpeed));
}
i !== !1 && e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t);
}
}), e.ui.plugin.add("draggable", "snap", {
start: function() {
var t = e(this).data("ui-draggable"), n = t.options;
t.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
var n = e(this), r = n.offset();
this !== t.element[0] && t.snapElements.push({
item: this,
width: n.outerWidth(),
height: n.outerHeight(),
top: r.top,
left: r.left
});
});
},
drag: function(t, n) {
var r, i, s, o, u, a, f, l, c, h, p = e(this).data("ui-draggable"), d = p.options, v = d.snapTolerance, m = n.offset.left, g = m + p.helperProportions.width, y = n.offset.top, b = y + p.helperProportions.height;
for (c = p.snapElements.length - 1; c >= 0; c--) {
u = p.snapElements[c].left, a = u + p.snapElements[c].width, f = p.snapElements[c].top, l = f + p.snapElements[c].height;
if (g < u - v || m > a + v || b < f - v || y > l + v || !e.contains(p.snapElements[c].item.ownerDocument, p.snapElements[c].item)) {
p.snapElements[c].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), {
snapItem: p.snapElements[c].item
})), p.snapElements[c].snapping = !1;
continue;
}
d.snapMode !== "inner" && (r = Math.abs(f - b) <= v, i = Math.abs(l - y) <= v, s = Math.abs(u - g) <= v, o = Math.abs(a - m) <= v, r && (n.position.top = p._convertPositionTo("relative", {
top: f - p.helperProportions.height,
left: 0
}).top - p.margins.top), i && (n.position.top = p._convertPositionTo("relative", {
top: l,
left: 0
}).top - p.margins.top), s && (n.position.left = p._convertPositionTo("relative", {
top: 0,
left: u - p.helperProportions.width
}).left - p.margins.left), o && (n.position.left = p._convertPositionTo("relative", {
top: 0,
left: a
}).left - p.margins.left)), h = r || i || s || o, d.snapMode !== "outer" && (r = Math.abs(f - y) <= v, i = Math.abs(l - b) <= v, s = Math.abs(u - m) <= v, o = Math.abs(a - g) <= v, r && (n.position.top = p._convertPositionTo("relative", {
top: f,
left: 0
}).top - p.margins.top), i && (n.position.top = p._convertPositionTo("relative", {
top: l - p.helperProportions.height,
left: 0
}).top - p.margins.top), s && (n.position.left = p._convertPositionTo("relative", {
top: 0,
left: u
}).left - p.margins.left), o && (n.position.left = p._convertPositionTo("relative", {
top: 0,
left: a - p.helperProportions.width
}).left - p.margins.left)), !p.snapElements[c].snapping && (r || i || s || o || h) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), {
snapItem: p.snapElements[c].item
})), p.snapElements[c].snapping = r || i || s || o || h;
}
}
}), e.ui.plugin.add("draggable", "stack", {
start: function() {
var t, n = this.data("ui-draggable").options, r = e.makeArray(e(n.stack)).sort(function(t, n) {
return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0);
});
if (!r.length) return;
t = parseInt(e(r[0]).css("zIndex"), 10) || 0, e(r).each(function(n) {
e(this).css("zIndex", t + n);
}), this.css("zIndex", t + r.length);
}
}), e.ui.plugin.add("draggable", "zIndex", {
start: function(t, n) {
var r = e(n.helper), i = e(this).data("ui-draggable").options;
r.css("zIndex") && (i._zIndex = r.css("zIndex")), r.css("zIndex", i.zIndex);
},
stop: function(t, n) {
var r = e(this).data("ui-draggable").options;
r._zIndex && e(n.helper).css("zIndex", r._zIndex);
}
});
}(jQuery);
} catch (i) {
wx.jslog({
src: "biz_common/jquery.ui/jquery.ui.draggable.js"
}, i);
}
});define("biz_common/jquery.validate.js", [], function(e, t, n) {
try {
var r = +(new Date);
(function(e) {
e.extend(e.fn, {
validate: function(t) {
if (!this.length) {
t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
return;
}
var n = e.data(this[0], "validator");
return n ? n : (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function(t) {
n.settings.submitHandler && (n.submitButton = t.target), e(t.target).hasClass("cancel") && (n.cancelSubmit = !0), e(t.target).attr("formnovalidate") !== undefined && (n.cancelSubmit = !0);
}), this.submit(function(t) {
function r() {
var r;
return n.settings.submitHandler ? (n.submitButton && (r = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && r.remove(), !1) : !0;
}
return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, r()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : r() : (n.focusInvalid(), !1);
})), n);
},
valid: function() {
if (e(this[0]).is("form")) return this.validate().form();
var t = !0, n = e(this[0].form).validate();
return this.each(function() {
t = t && n.element(this);
}), t;
},
removeAttrs: function(t) {
var n = {}, r = this;
return e.each(t.split(/\s/), function(e, t) {
n[t] = r.attr(t), r.removeAttr(t);
}), n;
},
rules: function(t, n) {
var r = this[0];
if (t) {
var i = e.data(r.form, "validator").settings, s = i.rules, o = e.validator.staticRules(r);
switch (t) {
case "add":
e.extend(o, e.validator.normalizeRule(n)), delete o.messages, s[r.name] = o, n.messages && (i.messages[r.name] = e.extend(i.messages[r.name], n.messages));
break;
case "remove":
if (!n) return delete s[r.name], o;
var u = {};
return e.each(n.split(/\s/), function(e, t) {
u[t] = o[t], delete o[t];
}), u;
}
}
var a = e.validator.normalizeRules(e.extend({}, e.validator.classRules(r), e.validator.attributeRules(r), e.validator.dataRules(r), e.validator.staticRules(r)), r);
if (a.required) {
var f = a.required;
delete a.required, a = e.extend({
required: f
}, a);
}
return a;
}
}), e.extend(e.expr[":"], {
blank: function(t) {
return !e.trim("" + e(t).val());
},
filled: function(t) {
return !!e.trim("" + e(t).val());
},
unchecked: function(t) {
return !e(t).prop("checked");
}
}), e.validator = function(t, n) {
this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init();
}, e.validator.format = function(t, n) {
return arguments.length === 1 ? function() {
var n = e.makeArray(arguments);
return n.unshift(t), e.validator.format.apply(this, n);
} : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [ n ]), e.each(n, function(e, n) {
t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
return n;
});
}), t);
}, e.extend(e.validator, {
defaults: {
messages: {},
groups: {},
rules: {},
errorClass: "error",
validClass: "valid",
errorElement: "label",
focusInvalid: !0,
errorContainer: e([]),
errorLabelContainer: e([]),
onsubmit: !0,
ignore: ":hidden",
ignoreTitle: !1,
onfocusin: function(e, t) {
this.lastActive = e, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(e)).hide());
},
onfocusout: function(e, t) {
this.checkable(e) || this.element(e);
},
onkeyup: function(e, t) {
if (t.which === 9 && this.elementValue(e) === "") return;
(e.name in this.submitted || e === this.lastElement) && this.element(e);
},
onclick: function(e, t) {
e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode);
},
highlight: function(t, n, r) {
t.type === "radio" ? this.findByName(t.name).addClass(n).removeClass(r) : e(t).addClass(n).removeClass(r);
},
unhighlight: function(t, n, r) {
t.type === "radio" ? this.findByName(t.name).removeClass(n).addClass(r) : e(t).removeClass(n).addClass(r);
}
},
setDefaults: function(t) {
e.extend(e.validator.defaults, t);
},
messages: {
required: "This field is required.",
remote: "Please fix this field.",
email: "Please enter a valid email address.",
url: "Please enter a valid URL.",
date: "Please enter a valid date.",
dateISO: "Please enter a valid date (ISO).",
number: "Please enter a valid number.",
digits: "Please enter only digits.",
creditcard: "Please enter a valid credit card number.",
equalTo: "Please enter the same value again.",
maxlength: e.validator.format("Please enter no more than {0} characters."),
minlength: e.validator.format("Please enter at least {0} characters."),
rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
range: e.validator.format("Please enter a value between {0} and {1}."),
max: e.validator.format("Please enter a value less than or equal to {0}."),
min: e.validator.format("Please enter a value greater than or equal to {0}.")
},
autoCreateRanges: !1,
prototype: {
init: function() {
function t(t) {
var n = e.data(this[0].form, "validator"), r = "on" + t.type.replace(/^validate/, "");
n.settings[r] && n.settings[r].call(n, this[0], t);
}
this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
var n = this.groups = {};
e.each(this.settings.groups, function(t, r) {
typeof r == "string" && (r = r.split(/\s/)), e.each(r, function(e, r) {
n[r] = t;
});
});
var r = this.settings.rules;
e.each(r, function(t, n) {
r[t] = e.validator.normalizeRule(n);
}), e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", t).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", t), this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
},
form: function() {
return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [ this ]), this.showErrors(), this.valid();
},
checkForm: function() {
this.prepareForm();
for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
return this.valid();
},
element: function(t) {
t = this.validationTargetFor(this.clean(t)), this.lastElement = t, this.prepareElement(t), this.currentElements = e(t);
var n = this.check(t) !== !1;
return n ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), n;
},
showErrors: function(t) {
if (t) {
e.extend(this.errorMap, t), this.errorList = [];
for (var n in t) this.errorList.push({
message: t[n],
element: this.findByName(n)[0]
});
this.successList = e.grep(this.successList, function(e) {
return !(e.name in t);
});
}
this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
},
resetForm: function() {
e.fn.resetForm && e(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue");
},
numberOfInvalids: function() {
return this.objectLength(this.invalid);
},
objectLength: function(e) {
var t = 0;
for (var n in e) t++;
return t;
},
hideErrors: function() {
this.addWrapper(this.toHide).hide();
},
valid: function() {
return this.size() === 0;
},
size: function() {
return this.errorList.length;
},
focusInvalid: function() {
if (this.settings.focusInvalid) try {
e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
} catch (t) {}
},
findLastActive: function() {
var t = this.lastActive;
return t && e.grep(this.errorList, function(e) {
return e.element.name === t.name;
}).length === 1 && t;
},
elements: function() {
var t = this, n = {};
return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in n || !t.objectLength(e(this).rules()) ? !1 : (n[this.name] = !0, !0);
});
},
clean: function(t) {
return e(t)[0];
},
errors: function() {
var t = this.settings.errorClass.replace(" ", ".");
return e(this.settings.errorElement + "." + t, this.errorContext);
},
reset: function() {
this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]), this.currentElements = e([]);
},
prepareForm: function() {
this.reset(), this.toHide = this.errors().add(this.containers);
},
prepareElement: function(e) {
this.reset(), this.toHide = this.errorsFor(e);
},
elementValue: function(t) {
var n = e(t).attr("type"), r = e(t).val();
return n === "radio" || n === "checkbox" ? e("input[name='" + e(t).attr("name") + "']:checked").val() : typeof r == "string" ? r.replace(/\r/g, "") : r;
},
check: function(t) {
t = this.validationTargetFor(this.clean(t));
var n = e(t).rules(), r = !1, i = this.elementValue(t), s;
for (var o in n) {
var u = {
method: o,
parameters: n[o]
};
try {
s = e.validator.methods[o].call(this, i, t, u.parameters);
if (s === "dependency-mismatch") {
r = !0;
continue;
}
r = !1;
if (s === "pending") {
this.toHide = this.toHide.not(this.errorsFor(t));
return;
}
if (!s) return this.formatAndAdd(t, u), !1;
} catch (a) {
throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + u.method + "' method.", a), a;
}
}
if (r) return;
return this.objectLength(n) && this.successList.push(t), !0;
},
customDataMessage: function(t, n) {
return e(t).data("msg-" + n.toLowerCase()) || t.attributes && e(t).attr("data-msg-" + n.toLowerCase());
},
customMessage: function(e, t) {
var n = this.settings.messages[e];
return n && (n.constructor === String ? n : n[t]);
},
findDefined: function() {
for (var e = 0; e < arguments.length; e++) if (arguments[e] !== undefined) return arguments[e];
return undefined;
},
defaultMessage: function(t, n) {
return this.findDefined(this.customMessage(t.name, n), this.customDataMessage(t, n), !this.settings.ignoreTitle && t.title || undefined, e.validator.messages[n], "<strong>Warning: No message defined for " + t.name + "</strong>");
},
formatAndAdd: function(t, n) {
var r = this.defaultMessage(t, n.method), i = /\$?\{(\d+)\}/g;
typeof r == "function" ? r = r.call(this, n.parameters, t) : i.test(r) && (r = e.validator.format(r.replace(i, "{$1}"), n.parameters)), this.errorList.push({
message: r,
element: t
}), this.errorMap[t.name] = r, this.submitted[t.name] = r;
},
addWrapper: function(e) {
return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e;
},
defaultShowErrors: function() {
var e, t;
for (e = 0; this.errorList[e]; e++) {
var n = this.errorList[e];
this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
}
this.errorList.length && (this.toShow = this.toShow.add(this.containers));
if (this.settings.success) for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
if (this.settings.unhighlight) for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
},
validElements: function() {
return this.currentElements.not(this.invalidElements());
},
invalidElements: function() {
return e(this.errorList).map(function() {
return this.element;
});
},
showLabel: function(t, n) {
var r = this.errorsFor(t);
r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(n)) : (r = e("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + " class='frm_msg fail'/>").parent()), this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, e(t)) : r.insertAfter(t))), !n && this.settings.success && (r.text(""), typeof this.settings.success == "string" ? r.addClass(this.settings.success) : this.settings.success(r, t)), this.toShow = this.toShow.add(r);
},
errorsFor: function(t) {
var n = this.idOrName(t);
return this.errors().filter(function() {
return e(this).attr("for") === n;
});
},
idOrName: function(e) {
return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name);
},
validationTargetFor: function(e) {
return this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]), e;
},
checkable: function(e) {
return /radio|checkbox/i.test(e.type);
},
findByName: function(t) {
return e(this.currentForm).find("[name='" + t + "']");
},
getLength: function(t, n) {
switch (n.nodeName.toLowerCase()) {
case "select":
return e("option:selected", n).length;
case "input":
if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length;
}
return t.length;
},
depend: function(e, t) {
return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : !0;
},
dependTypes: {
"boolean": function(e, t) {
return e;
},
string: function(t, n) {
return !!e(t, n.form).length;
},
"function": function(e, t) {
return e(t);
}
},
optional: function(t) {
var n = this.elementValue(t);
return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch";
},
startRequest: function(e) {
this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0);
},
stopRequest: function(t, n) {
this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], n && this.pendingRequest === 0 && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !n && this.pendingRequest === 0 && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [ this ]), this.formSubmitted = !1);
},
previousValue: function(t) {
return e.data(t, "previousValue") || e.data(t, "previousValue", {
old: null,
valid: !0,
message: this.defaultMessage(t, "remote")
});
}
},
classRuleSettings: {
required: {
required: !0
},
email: {
email: !0
},
url: {
url: !0
},
date: {
date: !0
},
dateISO: {
dateISO: !0
},
number: {
number: !0
},
digits: {
digits: !0
},
creditcard: {
creditcard: !0
}
},
addClassRules: function(t, n) {
t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t);
},
classRules: function(t) {
var n = {}, r = e(t).attr("class");
return r && e.each(r.split(" "), function() {
this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this]);
}), n;
},
attributeRules: function(t) {
var n = {}, r = e(t), i = r[0].getAttribute("type");
for (var s in e.validator.methods) {
var o;
s === "required" ? (o = r.get(0).getAttribute(s), o === "" && (o = !0), o = !!o) : o = r.attr(s), /min|max/.test(s) && (i === null || /number|range|text/.test(i)) && (o = Number(o)), o ? n[s] = o : i === s && i !== "range" && (n[s] = !0);
}
return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n;
},
dataRules: function(t) {
var n, r, i = {}, s = e(t);
for (n in e.validator.methods) r = s.data("rule-" + n.toLowerCase()), r !== undefined && (i[n] = r);
return i;
},
staticRules: function(t) {
var n = {}, r = e.data(t.form, "validator");
return r.settings.rules && (n = e.validator.normalizeRule(r.settings.rules[t.name]) || {}), n;
},
normalizeRules: function(t, n) {
return e.each(t, function(r, i) {
if (i === !1) {
delete t[r];
return;
}
if (i.param || i.depends) {
var s = !0;
switch (typeof i.depends) {
case "string":
s = !!e(i.depends, n.form).length;
break;
case "function":
s = i.depends.call(n, n);
}
s ? typeof i != "string" && (t[r] = i.param !== undefined ? i.param : !0) : delete t[r];
}
}), e.each(t, function(r, i) {
t[r] = e.isFunction(i) ? i(n) : i;
}), e.each([ "minlength", "maxlength" ], function() {
t[this] && (t[this] = Number(t[this]));
}), e.each([ "rangelength", "range" ], function() {
var n;
t[this] && (e.isArray(t[this]) ? t[this] = [ Number(t[this][0]), Number(t[this][1]) ] : typeof t[this] == "string" && (n = t[this].split(/[\s,]+/), t[this] = [ Number(n[0]), Number(n[1]) ]));
}), e.validator.autoCreateRanges && (t.min && t.max && (t.range = [ t.min, t.max ], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [ t.minlength, t.maxlength ], delete t.minlength, delete t.maxlength)), t;
},
normalizeRule: function(t) {
if (typeof t == "string") {
var n = {};
e.each(t.split(/\s/), function() {
n[this] = !0;
}), t = n;
}
return t;
},
addMethod: function(t, n, r) {
e.validator.methods[t] = n, e.validator.messages[t] = r !== undefined ? r : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t));
},
methods: {
required: function(t, n, r) {
if (!this.depend(r, n)) return "dependency-mismatch";
if (n.nodeName.toLowerCase() === "select") {
var i = e(n).val();
return i && i.length > 0;
}
return this.checkable(n) ? this.getLength(t, n) > 0 : e.trim(t).length > 0;
},
email: function(e, t) {
return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e);
},
url: function(e, t) {
return this.optional(t) || /^(https?|s?ftp|weixin):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e);
},
date: function(e, t) {
return this.optional(t) || !/Invalid|NaN/.test((new Date(e)).toString());
},
dateISO: function(e, t) {
return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e);
},
number: function(e, t) {
return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e);
},
digits: function(e, t) {
return this.optional(t) || /^\d+$/.test(e);
},
creditcard: function(e, t) {
if (this.optional(t)) return "dependency-mismatch";
if (/[^0-9 \-]+/.test(e)) return !1;
var n = 0, r = 0, i = !1;
e = e.replace(/\D/g, "");
for (var s = e.length - 1; s >= 0; s--) {
var o = e.charAt(s);
r = parseInt(o, 10), i && (r *= 2) > 9 && (r -= 9), n += r, i = !i;
}
return n % 10 === 0;
},
minlength: function(t, n, r) {
var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
return this.optional(n) || i >= r;
},
maxlength: function(t, n, r) {
var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
return this.optional(n) || i <= r;
},
rangelength: function(t, n, r) {
var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
return this.optional(n) || i >= r[0] && i <= r[1];
},
min: function(e, t, n) {
return this.optional(t) || e >= n;
},
max: function(e, t, n) {
return this.optional(t) || e <= n;
},
range: function(e, t, n) {
return this.optional(t) || e >= n[0] && e <= n[1];
},
equalTo: function(t, n, r) {
var i = e(r);
return this.settings.onfocusout && i.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
e(n).valid();
}), t === i.val();
},
remote: function(t, n, r) {
if (this.optional(n)) return "dependency-mismatch";
var i = this.previousValue(n);
this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), i.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = i.message, r = typeof r == "string" && {
url: r
} || r;
if (i.old === t) return i.valid;
i.old = t;
var s = this;
this.startRequest(n);
var o = {};
return o[n.name] = t, e.ajax(e.extend(!0, {
url: r,
mode: "abort",
port: "validate" + n.name,
dataType: "json",
data: o,
success: function(r) {
s.settings.messages[n.name].remote = i.originalMessage;
var o = r === !0 || r === "true";
if (o) {
var u = s.formSubmitted;
s.prepareElement(n), s.formSubmitted = u, s.successList.push(n), delete s.invalid[n.name], s.showErrors();
} else {
var a = {}, f = r || s.defaultMessage(n, "remote");
a[n.name] = i.message = e.isFunction(f) ? f(t) : f, s.invalid[n.name] = !0, s.showErrors(a);
}
i.valid = o, s.stopRequest(n, o);
}
}, r)), "pending";
}
}
}), e.format = e.validator.format;
})(jQuery), function(e) {
var t = {};
if (e.ajaxPrefilter) e.ajaxPrefilter(function(e, n, r) {
var i = e.port;
e.mode === "abort" && (t[i] && t[i].abort(), t[i] = r);
}); else {
var n = e.ajax;
e.ajax = function(r) {
var i = ("mode" in r ? r : e.ajaxSettings).mode, s = ("port" in r ? r : e.ajaxSettings).port;
return i === "abort" ? (t[s] && t[s].abort(), t[s] = n.apply(this, arguments), t[s]) : n.apply(this, arguments);
};
}
}(jQuery), function(e) {
e.extend(e.fn, {
validateDelegate: function(t, n, r) {
return this.bind(n, function(n) {
var i = e(n.target);
if (i.is(t)) return r.apply(i, arguments);
});
}
});
}(jQuery), function(e) {
e.validator.defaults.errorClass = "frm_msg_content", e.validator.defaults.errorElement = "span", e.validator.defaults.errorPlacement = function(e, t) {
t.parent().after(e);
}, e.validator.defaults.wrapper = "p", e.validator.messages = {
required: "必选字段",
remote: "请修正该字段",
email: "请输入正确格式的电子邮件",
url: "请输入合法的网址",
date: "请输入合法的日期",
dateISO: "请输入合法的日期 (ISO).",
number: "请输入合法的数字",
digits: "只能输入整数",
creditcard: "请输入合法的信用卡号",
equalTo: "请再次输入相同的值",
accept: "请输入拥有合法后缀名的字符串",
maxlength: e.validator.format("请输入一个长度最多是 {0} 的字符串"),
minlength: e.validator.format("请输入一个长度最少是 {0} 的字符串"),
rangelength: e.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
range: e.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
max: e.validator.format("请输入一个最大为 {0} 的值"),
min: e.validator.format("请输入一个最小为 {0} 的值")
}, function() {
function t(e) {
var t = 0;
e[17].toLowerCase() == "x" && (e[17] = 10);
for (var n = 0; n < 17; n++) t += s[n] * e[n];
return valCodePosition = t % 11, e[17] == o[valCodePosition] ? !0 : !1;
}
function n(e) {
var t = e.substring(6, 10), n = e.substring(10, 12), r = e.substring(12, 14), i = new Date(t, parseFloat(n) - 1, parseFloat(r));
return (new Date).getFullYear() - parseInt(t) < 18 ? !1 : i.getFullYear() != parseFloat(t) || i.getMonth() != parseFloat(n) - 1 || i.getDate() != parseFloat(r) ? !1 : !0;
}
function r(e) {
var t = e.substring(6, 8), n = e.substring(8, 10), r = e.substring(10, 12), i = new Date(t, parseFloat(n) - 1, parseFloat(r));
return i.getYear() != parseFloat(t) || i.getMonth() != parseFloat(n) - 1 || i.getDate() != parseFloat(r) ? !1 : !0;
}
function i(r) {
r = e.trim(r.replace(/ /g, ""));
if (r.length == 15) return !1;
if (r.length == 18) {
var i = r.split("");
return n(r) && t(i) ? !0 : !1;
}
return !1;
}
var s = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1 ], o = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ];
e.validator.addMethod("idcard", function(e, t, n) {
return i(e);
}, "身份证格式不正确，或者年龄未满18周岁，请重新填写"), e.validator.addMethod("mobile", function(t, n, r) {
return t = e.trim(t), /^1\d{10}$/.test(t);
}, "请输入正确的手机号码"), e.validator.addMethod("telephone", function(t, n) {
return t = e.trim(t), /^\d{1,4}(-\d{1,12})+$/.test(t);
}, "请输入正确的座机号码，如020-12345678"), e.validator.addMethod("verifycode", function(t, n) {
return t = e.trim(t), /^\d{6}$/.test(t);
}, "验证码应为6位数字"), e.validator.addMethod("byteRangeLength", function(e, t, n) {
return this.optional(t) || e.len() <= n[1] && e.len() >= n[0];
}, "_(必须为{0}到{1}个字节之间)");
}();
}(jQuery);
var i = {
optional: function(e) {
return !1;
},
getLength: function(e) {
return e ? e.length : 0;
}
};
function s(e, t, n) {
return $.validator.methods[e].call(i, t, null, n);
}
var o = $.validator;
return o.rules = {}, $.each(o.methods, function(e, t) {
o.rules[e] = function(e, n) {
return t.call(i, e, null, n);
};
}), o;
} catch (u) {
wx.jslog({
src: "biz_common/jquery.validate.js"
}, u);
}
});define("tpl/simplePopup.html.js", [], function(e, t, n) {
return '<div class="simple_dialog_content">\n    <form id="popupForm_{id}"  method="post"  class="form" onSubmit="return false;">\n         <div class="frm_control_group">\n            {if label}<label class="frm_label">{label}</label>{/if}\n            <span class="frm_input_box">\n                <input type="text" class="frm_input" name="popInput" value="{value}"/>\n                <input style="display:none"/>\n            </span>\n            {if tips}<p class="frm_tips">{tips}</p>{/if}\n        </div>       \n        <div class="js_verifycode"></div>\n    </form>\n</div>\n';
});define("biz_common/jquery.ui/jquery.ui.sortable.js", [], function(e, t, n) {
try {
var r = +(new Date);
(function(e, t) {
function n(t, n) {
var i, s, o, u = t.nodeName.toLowerCase();
return "area" === u ? (i = t.parentNode, s = i.name, !t.href || !s || i.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap=#" + s + "]")[0], !!o && r(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && r(t);
}
function r(t) {
return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
return e.css(this, "visibility") === "hidden";
}).length;
}
var i = 0, s = /^ui-id-\d+$/;
e.ui = e.ui || {}, e.extend(e.ui, {
version: "1.10.3",
keyCode: {
BACKSPACE: 8,
COMMA: 188,
DELETE: 46,
DOWN: 40,
END: 35,
ENTER: 13,
ESCAPE: 27,
HOME: 36,
LEFT: 37,
NUMPAD_ADD: 107,
NUMPAD_DECIMAL: 110,
NUMPAD_DIVIDE: 111,
NUMPAD_ENTER: 108,
NUMPAD_MULTIPLY: 106,
NUMPAD_SUBTRACT: 109,
PAGE_DOWN: 34,
PAGE_UP: 33,
PERIOD: 190,
RIGHT: 39,
SPACE: 32,
TAB: 9,
UP: 38
}
}), e.fn.extend({
focus: function(t) {
return function(n, r) {
return typeof n == "number" ? this.each(function() {
var t = this;
setTimeout(function() {
e(t).focus(), r && r.call(t);
}, n);
}) : t.apply(this, arguments);
};
}(e.fn.focus),
scrollParent: function() {
var t;
return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function() {
return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"));
}).eq(0) : t = this.parents().filter(function() {
return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"));
}).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t;
},
zIndex: function(n) {
if (n !== t) return this.css("zIndex", n);
if (this.length) {
var r = e(this[0]), i, s;
while (r.length && r[0] !== document) {
i = r.css("position");
if (i === "absolute" || i === "relative" || i === "fixed") {
s = parseInt(r.css("zIndex"), 10);
if (!isNaN(s) && s !== 0) return s;
}
r = r.parent();
}
}
return 0;
},
uniqueId: function() {
return this.each(function() {
this.id || (this.id = "ui-id-" + ++i);
});
},
removeUniqueId: function() {
return this.each(function() {
s.test(this.id) && e(this).removeAttr("id");
});
}
}), e.extend(e.expr[":"], {
data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
return function(n) {
return !!e.data(n, t);
};
}) : function(t, n, r) {
return !!e.data(t, r[3]);
},
focusable: function(t) {
return n(t, !isNaN(e.attr(t, "tabindex")));
},
tabbable: function(t) {
var r = e.attr(t, "tabindex"), i = isNaN(r);
return (i || r >= 0) && n(t, !i);
}
}), e("<a>").outerWidth(1).jquery || e.each([ "Width", "Height" ], function(n, r) {
function i(t, n, r, i) {
return e.each(s, function() {
n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), i && (n -= parseFloat(e.css(t, "margin" + this)) || 0);
}), n;
}
var s = r === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ], o = r.toLowerCase(), u = {
innerWidth: e.fn.innerWidth,
innerHeight: e.fn.innerHeight,
outerWidth: e.fn.outerWidth,
outerHeight: e.fn.outerHeight
};
e.fn["inner" + r] = function(n) {
return n === t ? u["inner" + r].call(this) : this.each(function() {
e(this).css(o, i(this, n) + "px");
});
}, e.fn["outer" + r] = function(t, n) {
return typeof t != "number" ? u["outer" + r].call(this, t) : this.each(function() {
e(this).css(o, i(this, t, !0, n) + "px");
});
};
}), e.fn.addBack || (e.fn.addBack = function(e) {
return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
}), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
return function(n) {
return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this);
};
}(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
disableSelection: function() {
return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
e.preventDefault();
});
},
enableSelection: function() {
return this.unbind(".ui-disableSelection");
}
}), e.extend(e.ui, {
plugin: {
add: function(t, n, r) {
var i, s = e.ui[t].prototype;
for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([ n, r[i] ]);
},
call: function(e, t, n) {
var r, i = e.plugins[t];
if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11) return;
for (r = 0; r < i.length; r++) e.options[i[r][0]] && i[r][1].apply(e.element, n);
}
},
hasScroll: function(t, n) {
if (e(t).css("overflow") === "hidden") return !1;
var r = n && n === "left" ? "scrollLeft" : "scrollTop", i = !1;
return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i);
}
});
})(jQuery), function(e, t) {
var n = 0, r = Array.prototype.slice, i = e.cleanData;
e.cleanData = function(t) {
for (var n = 0, r; (r = t[n]) != null; n++) try {
e(r).triggerHandler("remove");
} catch (s) {}
i(t);
}, e.widget = function(t, n, r) {
var i, s, o, u, a = {}, f = t.split(".")[0];
t = t.split(".")[1], i = f + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function(t) {
return !!e.data(t, i);
}, e[f] = e[f] || {}, s = e[f][t], o = e[f][t] = function(e, t) {
if (!this._createWidget) return new o(e, t);
arguments.length && this._createWidget(e, t);
}, e.extend(o, s, {
version: r.version,
_proto: e.extend({}, r),
_childConstructors: []
}), u = new n, u.options = e.widget.extend({}, u.options), e.each(r, function(t, r) {
if (!e.isFunction(r)) {
a[t] = r;
return;
}
a[t] = function() {
var e = function() {
return n.prototype[t].apply(this, arguments);
}, i = function(e) {
return n.prototype[t].apply(this, e);
};
return function() {
var t = this._super, n = this._superApply, s;
return this._super = e, this._superApply = i, s = r.apply(this, arguments), this._super = t, this._superApply = n, s;
};
}();
}), o.prototype = e.widget.extend(u, {
widgetEventPrefix: s ? u.widgetEventPrefix : t
}, a, {
constructor: o,
namespace: f,
widgetName: t,
widgetFullName: i
}), s ? (e.each(s._childConstructors, function(t, n) {
var r = n.prototype;
e.widget(r.namespace + "." + r.widgetName, o, n._proto);
}), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o);
}, e.widget.extend = function(n) {
var i = r.call(arguments, 1), s = 0, o = i.length, u, a;
for (; s < o; s++) for (u in i[s]) a = i[s][u], i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a) : n[u] = a);
return n;
}, e.widget.bridge = function(n, i) {
var s = i.prototype.widgetFullName || n;
e.fn[n] = function(o) {
var u = typeof o == "string", a = r.call(arguments, 1), f = this;
return o = !u && a.length ? e.widget.extend.apply(null, [ o ].concat(a)) : o, u ? this.each(function() {
var r, i = e.data(this, s);
if (!i) return e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'");
if (!e.isFunction(i[o]) || o.charAt(0) === "_") return e.error("no such method '" + o + "' for " + n + " widget instance");
r = i[o].apply(i, a);
if (r !== i && r !== t) return f = r && r.jquery ? f.pushStack(r.get()) : r, !1;
}) : this.each(function() {
var t = e.data(this, s);
t ? t.option(o || {})._init() : e.data(this, s, new i(o, this));
}), f;
};
}, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
widgetName: "widget",
widgetEventPrefix: "",
defaultElement: "<div>",
options: {
disabled: !1,
create: null
},
_createWidget: function(t, r) {
r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), r !== this && (e.data(r, this.widgetFullName, this), this._on(!0, this.element, {
remove: function(e) {
e.target === r && this.destroy();
}
}), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
},
_getCreateOptions: e.noop,
_getCreateEventData: e.noop,
_create: e.noop,
_init: e.noop,
destroy: function() {
this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus");
},
_destroy: e.noop,
widget: function() {
return this.element;
},
option: function(n, r) {
var i = n, s, o, u;
if (arguments.length === 0) return e.widget.extend({}, this.options);
if (typeof n == "string") {
i = {}, s = n.split("."), n = s.shift();
if (s.length) {
o = i[n] = e.widget.extend({}, this.options[n]);
for (u = 0; u < s.length - 1; u++) o[s[u]] = o[s[u]] || {}, o = o[s[u]];
n = s.pop();
if (r === t) return o[n] === t ? null : o[n];
o[n] = r;
} else {
if (r === t) return this.options[n] === t ? null : this.options[n];
i[n] = r;
}
}
return this._setOptions(i), this;
},
_setOptions: function(e) {
var t;
for (t in e) this._setOption(t, e[t]);
return this;
},
_setOption: function(e, t) {
return this.options[e] = t, e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this;
},
enable: function() {
return this._setOption("disabled", !1);
},
disable: function() {
return this._setOption("disabled", !0);
},
_on: function(t, n, r) {
var i, s = this;
typeof t != "boolean" && (r = n, n = t, t = !1), r ? (n = i = e(n), this.bindings = this.bindings.add(n)) : (r = n, n = this.element, i = this.widget()), e.each(r, function(r, o) {
function u() {
if (!t && (s.options.disabled === !0 || e(this).hasClass("ui-state-disabled"))) return;
return (typeof o == "string" ? s[o] : o).apply(s, arguments);
}
typeof o != "string" && (u.guid = o.guid = o.guid || u.guid || e.guid++);
var a = r.match(/^(\w+)\s*(.*)$/), f = a[1] + s.eventNamespace, l = a[2];
l ? i.delegate(l, f, u) : n.bind(f, u);
});
},
_off: function(e, t) {
t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t);
},
_delay: function(e, t) {
function n() {
return (typeof e == "string" ? r[e] : e).apply(r, arguments);
}
var r = this;
return setTimeout(n, t || 0);
},
_hoverable: function(t) {
this.hoverable = this.hoverable.add(t), this._on(t, {
mouseenter: function(t) {
e(t.currentTarget).addClass("ui-state-hover");
},
mouseleave: function(t) {
e(t.currentTarget).removeClass("ui-state-hover");
}
});
},
_focusable: function(t) {
this.focusable = this.focusable.add(t), this._on(t, {
focusin: function(t) {
e(t.currentTarget).addClass("ui-state-focus");
},
focusout: function(t) {
e(t.currentTarget).removeClass("ui-state-focus");
}
});
},
_trigger: function(t, n, r) {
var i, s, o = this.options[t];
r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent;
if (s) for (i in s) i in n || (n[i] = s[i]);
return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [ n ].concat(r)) === !1 || n.isDefaultPrevented());
}
}, e.each({
show: "fadeIn",
hide: "fadeOut"
}, function(t, n) {
e.Widget.prototype["_" + t] = function(r, i, s) {
typeof i == "string" && (i = {
effect: i
});
var o, u = i ? i === !0 || typeof i == "number" ? n : i.effect || n : t;
i = i || {}, typeof i == "number" && (i = {
duration: i
}), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && e.effects.effect[u] ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function(n) {
e(this)[t](), s && s.call(r[0]), n();
});
};
});
}(jQuery), function(e, t) {
var n = !1;
e(document).mouseup(function() {
n = !1;
}), e.widget("ui.mouse", {
version: "1.10.3",
options: {
cancel: "input,textarea,button,select,option",
distance: 1,
delay: 0
},
_mouseInit: function() {
var t = this;
this.element.bind("mousedown." + this.widgetName, function(e) {
return t._mouseDown(e);
}).bind("click." + this.widgetName, function(n) {
if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1;
}), this.started = !1;
},
_mouseDestroy: function() {
this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
},
_mouseDown: function(t) {
if (n) return;
this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
var r = this, i = t.which === 1, s = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
if (!i || s || !this._mouseCapture(t)) return !0;
this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
r.mouseDelayMet = !0;
}, this.options.delay));
if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
this._mouseStarted = this._mouseStart(t) !== !1;
if (!this._mouseStarted) return t.preventDefault(), !0;
}
return !0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
return r._mouseMove(e);
}, this._mouseUpDelegate = function(e) {
return r._mouseUp(e);
}, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0;
},
_mouseMove: function(t) {
return e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted);
},
_mouseUp: function(t) {
return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1;
},
_mouseDistanceMet: function(e) {
return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
},
_mouseDelayMet: function() {
return this.mouseDelayMet;
},
_mouseStart: function() {},
_mouseDrag: function() {},
_mouseStop: function() {},
_mouseCapture: function() {
return !0;
}
});
}(jQuery), function(e, t) {
function n(e, t, n) {
return e > t && e < t + n;
}
function r(e) {
return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"));
}
e.widget("ui.sortable", e.ui.mouse, {
version: "1.10.3",
widgetEventPrefix: "sort",
ready: !1,
options: {
appendTo: "parent",
axis: !1,
connectWith: !1,
containment: !1,
cursor: "auto",
cursorAt: !1,
dropOnEmpty: !0,
forcePlaceholderSize: !1,
forceHelperSize: !1,
grid: !1,
handle: !1,
helper: "original",
items: "> *",
opacity: !1,
placeholder: !1,
revert: !1,
scroll: !0,
scrollSensitivity: 20,
scrollSpeed: 20,
scope: "default",
tolerance: "intersect",
zIndex: 1e3,
activate: null,
beforeStop: null,
change: null,
deactivate: null,
out: null,
over: null,
receive: null,
remove: null,
sort: null,
start: null,
stop: null,
update: null
},
_create: function() {
var e = this.options;
this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? e.axis === "x" || r(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0;
},
_destroy: function() {
this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
return this;
},
_setOption: function(t, n) {
t === "disabled" ? (this.options[t] = n, this.widget().toggleClass("ui-sortable-disabled", !!n)) : e.Widget.prototype._setOption.apply(this, arguments);
},
_mouseCapture: function(t, n) {
var r = null, i = !1, s = this;
if (this.reverting) return !1;
if (this.options.disabled || this.options.type === "static") return !1;
this._refreshItems(t), e(t.target).parents().each(function() {
if (e.data(this, s.widgetName + "-item") === s) return r = e(this), !1;
}), e.data(t.target, s.widgetName + "-item") === s && (r = e(t.target));
if (!r) return !1;
if (this.options.handle && !n) {
e(this.options.handle, r).find("*").addBack().each(function() {
this === t.target && (i = !0);
});
if (!i) return !1;
}
return this.currentItem = r, this._removeCurrentsFromItems(), !0;
},
_mouseStart: function(t, n, r) {
var i, s, o = this.options;
this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
top: this.offset.top - this.margins.top,
left: this.offset.left - this.margins.left
}, e.extend(this.offset, {
click: {
left: t.pageX - this.offset.left,
top: t.pageY - this.offset.top
},
parent: this._getParentOffset(),
relative: this._getRelativeOffset()
}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
prev: this.currentItem.prev()[0],
parent: this.currentItem.parent()[0]
}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && o.cursor !== "auto" && (s = this.document.find("body"), this.storedCursor = s.css("cursor"), s.css("cursor", o.cursor), this.storedStylesheet = e("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(s)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions();
if (!r) for (i = this.containers.length - 1; i >= 0; i--) this.containers[i]._trigger("activate", t, this._uiHash(this));
return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0;
},
_mouseDrag: function(t) {
var n, r, i, s, o = this.options, u = !1;
this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = u = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = u = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = u = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = u = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - e(document).scrollTop() < o.scrollSensitivity ? u = e(document).scrollTop(e(document).scrollTop() - o.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < o.scrollSensitivity && (u = e(document).scrollTop(e(document).scrollTop() + o.scrollSpeed)), t.pageX - e(document).scrollLeft() < o.scrollSensitivity ? u = e(document).scrollLeft(e(document).scrollLeft() - o.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < o.scrollSensitivity && (u = e(document).scrollLeft(e(document).scrollLeft() + o.scrollSpeed))), u !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute");
if (!this.options.axis || this.options.axis !== "y") this.helper[0].style.left = this.position.left + "px";
if (!this.options.axis || this.options.axis !== "x") this.helper[0].style.top = this.position.top + "px";
for (n = this.items.length - 1; n >= 0; n--) {
r = this.items[n], i = r.item[0], s = this._intersectsWithPointer(r);
if (!s) continue;
if (r.instance !== this.currentContainer) continue;
if (i !== this.currentItem[0] && this.placeholder[s === 1 ? "next" : "prev"]()[0] !== i && !e.contains(this.placeholder[0], i) && (this.options.type === "semi-dynamic" ? !e.contains(this.element[0], i) : !0)) {
this.direction = s === 1 ? "down" : "up";
if (this.options.tolerance !== "pointer" && !this._intersectsWithSides(r)) break;
this._rearrange(t, r), this._trigger("change", t, this._uiHash());
break;
}
}
return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1;
},
_mouseStop: function(t, n) {
if (!t) return;
e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t);
if (this.options.revert) {
var r = this, i = this.placeholder.offset(), s = this.options.axis, o = {};
if (!s || s === "x") o.left = i.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft);
if (!s || s === "y") o.top = i.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop);
this.reverting = !0, e(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function() {
r._clear(t);
});
} else this._clear(t, n);
return !1;
},
cancel: function() {
if (this.dragging) {
this._mouseUp({
target: null
}), this.options.helper === "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0);
}
return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper !== "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
helper: null,
dragging: !1,
reverting: !1,
_noFinalSort: null
}), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this;
},
serialize: function(t) {
var n = this._getItemsAsjQuery(t && t.connected), r = [];
return t = t || {}, e(n).each(function() {
var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
n && r.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]));
}), !r.length && t.key && r.push(t.key + "="), r.join("&");
},
toArray: function(t) {
var n = this._getItemsAsjQuery(t && t.connected), r = [];
return t = t || {}, n.each(function() {
r.push(e(t.item || this).attr(t.attribute || "id") || "");
}), r;
},
_intersectsWith: function(e) {
var t = this.positionAbs.left, n = t + this.helperProportions.width, r = this.positionAbs.top, i = r + this.helperProportions.height, s = e.left, o = s + e.width, u = e.top, a = u + e.height, f = this.offset.click.top, l = this.offset.click.left, c = this.options.axis === "x" || r + f > u && r + f < a, h = this.options.axis === "y" || t + l > s && t + l < o, p = c && h;
return this.options.tolerance === "pointer" || this.options.forcePointerForContainers || this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : s < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < o && u < r + this.helperProportions.height / 2 && i - this.helperProportions.height / 2 < a;
},
_intersectsWithPointer: function(e) {
var t = this.options.axis === "x" || n(this.positionAbs.top + this.offset.click.top, e.top, e.height), r = this.options.axis === "y" || n(this.positionAbs.left + this.offset.click.left, e.left, e.width), i = t && r, s = this._getDragVerticalDirection(), o = this._getDragHorizontalDirection();
return i ? this.floating ? o && o === "right" || s === "down" ? 2 : 1 : s && (s === "down" ? 2 : 1) : !1;
},
_intersectsWithSides: function(e) {
var t = n(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height), r = n(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width), i = this._getDragVerticalDirection(), s = this._getDragHorizontalDirection();
return this.floating && s ? s === "right" && r || s === "left" && !r : i && (i === "down" && t || i === "up" && !t);
},
_getDragVerticalDirection: function() {
var e = this.positionAbs.top - this.lastPositionAbs.top;
return e !== 0 && (e > 0 ? "down" : "up");
},
_getDragHorizontalDirection: function() {
var e = this.positionAbs.left - this.lastPositionAbs.left;
return e !== 0 && (e > 0 ? "right" : "left");
},
refresh: function(e) {
return this._refreshItems(e), this.refreshPositions(), this;
},
_connectWith: function() {
var e = this.options;
return e.connectWith.constructor === String ? [ e.connectWith ] : e.connectWith;
},
_getItemsAsjQuery: function(t) {
var n, r, i, s, o = [], u = [], a = this._connectWith();
if (a && t) for (n = a.length - 1; n >= 0; n--) {
i = e(a[n]);
for (r = i.length - 1; r >= 0; r--) s = e.data(i[r], this.widgetFullName), s && s !== this && !s.options.disabled && u.push([ e.isFunction(s.options.items) ? s.options.items.call(s.element) : e(s.options.items, s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), s ]);
}
u.push([ e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
options: this.options,
item: this.currentItem
}) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this ]);
for (n = u.length - 1; n >= 0; n--) u[n][0].each(function() {
o.push(this);
});
return e(o);
},
_removeCurrentsFromItems: function() {
var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
this.items = e.grep(this.items, function(e) {
for (var n = 0; n < t.length; n++) if (t[n] === e.item[0]) return !1;
return !0;
});
},
_refreshItems: function(t) {
this.items = [], this.containers = [ this ];
var n, r, i, s, o, u, a, f, l = this.items, c = [ [ e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
item: this.currentItem
}) : e(this.options.items, this.element), this ] ], h = this._connectWith();
if (h && this.ready) for (n = h.length - 1; n >= 0; n--) {
i = e(h[n]);
for (r = i.length - 1; r >= 0; r--) s = e.data(i[r], this.widgetFullName), s && s !== this && !s.options.disabled && (c.push([ e.isFunction(s.options.items) ? s.options.items.call(s.element[0], t, {
item: this.currentItem
}) : e(s.options.items, s.element), s ]), this.containers.push(s));
}
for (n = c.length - 1; n >= 0; n--) {
o = c[n][1], u = c[n][0];
for (r = 0, f = u.length; r < f; r++) a = e(u[r]), a.data(this.widgetName + "-item", o), l.push({
item: a,
instance: o,
width: 0,
height: 0,
left: 0,
top: 0
});
}
},
refreshPositions: function(t) {
this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
var n, r, i, s;
for (n = this.items.length - 1; n >= 0; n--) {
r = this.items[n];
if (r.instance !== this.currentContainer && this.currentContainer && r.item[0] !== this.currentItem[0]) continue;
i = this.options.toleranceElement ? e(this.options.toleranceElement, r.item) : r.item, t || (r.width = i.outerWidth(), r.height = i.outerHeight()), s = i.offset(), r.left = s.left, r.top = s.top;
}
if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (n = this.containers.length - 1; n >= 0; n--) s = this.containers[n].element.offset(), this.containers[n].containerCache.left = s.left, this.containers[n].containerCache.top = s.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
return this;
},
_createPlaceholder: function(t) {
t = t || this;
var n, r = t.options;
if (!r.placeholder || r.placeholder.constructor === String) n = r.placeholder, r.placeholder = {
element: function() {
var r = t.currentItem[0].nodeName.toLowerCase(), i = e("<" + r + ">", t.document[0]).addClass(n || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
return r === "tr" ? t.currentItem.children().each(function() {
e("<td>&#160;</td>", t.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(i);
}) : r === "img" && i.attr("src", t.currentItem.attr("src")), n || i.css("visibility", "hidden"), i;
},
update: function(e, i) {
if (n && !r.forcePlaceholderSize) return;
i.height() || i.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), i.width() || i.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10));
}
};
t.placeholder = e(r.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), r.placeholder.update(t, t.placeholder);
},
_contactContainers: function(t) {
var i, s, o, u, a, f, l, c, h, p, d = null, v = null;
for (i = this.containers.length - 1; i >= 0; i--) {
if (e.contains(this.currentItem[0], this.containers[i].element[0])) continue;
if (this._intersectsWith(this.containers[i].containerCache)) {
if (d && e.contains(this.containers[i].element[0], d.element[0])) continue;
d = this.containers[i], v = i;
} else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0);
}
if (!d) return;
if (this.containers.length === 1) this.containers[v].containerCache.over || (this.containers[v]._trigger("over", t, this._uiHash(this)), this.containers[v].containerCache.over = 1); else {
o = 1e4, u = null, p = d.floating || r(this.currentItem), a = p ? "left" : "top", f = p ? "width" : "height", l = this.positionAbs[a] + this.offset.click[a];
for (s = this.items.length - 1; s >= 0; s--) {
if (!e.contains(this.containers[v].element[0], this.items[s].item[0])) continue;
if (this.items[s].item[0] === this.currentItem[0]) continue;
if (p && !n(this.positionAbs.top + this.offset.click.top, this.items[s].top, this.items[s].height)) continue;
c = this.items[s].item.offset()[a], h = !1, Math.abs(c - l) > Math.abs(c + this.items[s][f] - l) && (h = !0, c += this.items[s][f]), Math.abs(c - l) < o && (o = Math.abs(c - l), u = this.items[s], this.direction = h ? "up" : "down");
}
if (!u && !this.options.dropOnEmpty) return;
if (this.currentContainer === this.containers[v]) return;
u ? this._rearrange(t, u, null, !0) : this._rearrange(t, null, this.containers[v].element, !0), this._trigger("change", t, this._uiHash()), this.containers[v]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[v], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[v]._trigger("over", t, this._uiHash(this)), this.containers[v].containerCache.over = 1;
}
},
_createHelper: function(t) {
var n = this.options, r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [ t, this.currentItem ])) : n.helper === "clone" ? this.currentItem.clone() : this.currentItem;
return r.parents("body").length || e(n.appendTo !== "parent" ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(r[0]), r[0] === this.currentItem[0] && (this._storedCSS = {
width: this.currentItem[0].style.width,
height: this.currentItem[0].style.height,
position: this.currentItem.css("position"),
top: this.currentItem.css("top"),
left: this.currentItem.css("left")
}), (!r[0].style.width || n.forceHelperSize) && r.width(this.currentItem.width()), (!r[0].style.height || n.forceHelperSize) && r.height(this.currentItem.height()), r;
},
_adjustOffsetFromHelper: function(t) {
typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
left: +t[0],
top: +t[1] || 0
}), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
},
_getParentOffset: function() {
this.offsetParent = this.helper.offsetParent();
var t = this.offsetParent.offset();
this.cssPosition === "absolute" && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
if (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && e.ui.ie) t = {
top: 0,
left: 0
};
return {
top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
};
},
_getRelativeOffset: function() {
if (this.cssPosition === "relative") {
var e = this.currentItem.position();
return {
top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
};
}
return {
top: 0,
left: 0
};
},
_cacheMargins: function() {
this.margins = {
left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
top: parseInt(this.currentItem.css("marginTop"), 10) || 0
};
},
_cacheHelperProportions: function() {
this.helperProportions = {
width: this.helper.outerWidth(),
height: this.helper.outerHeight()
};
},
_setContainment: function() {
var t, n, r, i = this.options;
i.containment === "parent" && (i.containment = this.helper[0].parentNode);
if (i.containment === "document" || i.containment === "window") this.containment = [ 0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e(i.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (e(i.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ];
/^(document|window|parent)$/.test(i.containment) || (t = e(i.containment)[0], n = e(i.containment).offset(), r = e(t).css("overflow") !== "hidden", this.containment = [ n.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (r ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (r ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top ]);
},
_convertPositionTo: function(t, n) {
n || (n = this.position);
var r = t === "absolute" ? 1 : -1, i = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, s = /(html|body)/i.test(i[0].tagName);
return {
top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : s ? 0 : i.scrollTop()) * r,
left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : s ? 0 : i.scrollLeft()) * r
};
},
_generatePosition: function(t) {
var n, r, i = this.options, s = t.pageX, o = t.pageY, u = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, a = /(html|body)/i.test(u[0].tagName);
return this.cssPosition === "relative" && (this.scrollParent[0] === document || this.scrollParent[0] === this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), i.grid && (n = this.originalPageY + Math.round((o - this.originalPageY) / i.grid[1]) * i.grid[1], o = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - i.grid[1] : n + i.grid[1] : n, r = this.originalPageX + Math.round((s - this.originalPageX) / i.grid[0]) * i.grid[0], s = this.containment ? r - this.offset.click.left >= this.containment[0] && r - this.offset.click.left <= this.containment[2] ? r : r - this.offset.click.left >= this.containment[0] ? r - i.grid[0] : r + i.grid[0] : r)), {
top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : a ? 0 : u.scrollTop()),
left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : a ? 0 : u.scrollLeft())
};
},
_rearrange: function(e, t, n, r) {
n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction === "down" ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
var i = this.counter;
this._delay(function() {
i === this.counter && this.refreshPositions(!r);
});
},
_clear: function(e, t) {
this.reverting = !1;
var n, r = [];
!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null;
if (this.helper[0] === this.currentItem[0]) {
for (n in this._storedCSS) if (this._storedCSS[n] === "auto" || this._storedCSS[n] === "static") this._storedCSS[n] = "";
this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
} else this.currentItem.show();
this.fromOutside && !t && r.push(function(e) {
this._trigger("receive", e, this._uiHash(this.fromOutside));
}), (this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !t && r.push(function(e) {
this._trigger("update", e, this._uiHash());
}), this !== this.currentContainer && (t || (r.push(function(e) {
this._trigger("remove", e, this._uiHash());
}), r.push(function(e) {
return function(t) {
e._trigger("receive", t, this._uiHash(this));
};
}.call(this, this.currentContainer)), r.push(function(e) {
return function(t) {
e._trigger("update", t, this._uiHash(this));
};
}.call(this, this.currentContainer))));
for (n = this.containers.length - 1; n >= 0; n--) t || r.push(function(e) {
return function(t) {
e._trigger("deactivate", t, this._uiHash(this));
};
}.call(this, this.containers[n])), this.containers[n].containerCache.over && (r.push(function(e) {
return function(t) {
e._trigger("out", t, this._uiHash(this));
};
}.call(this, this.containers[n])), this.containers[n].containerCache.over = 0);
this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex), this.dragging = !1;
if (this.cancelHelperRemoval) {
if (!t) {
this._trigger("beforeStop", e, this._uiHash());
for (n = 0; n < r.length; n++) r[n].call(this, e);
this._trigger("stop", e, this._uiHash());
}
return this.fromOutside = !1, !1;
}
t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null;
if (!t) {
for (n = 0; n < r.length; n++) r[n].call(this, e);
this._trigger("stop", e, this._uiHash());
}
return this.fromOutside = !1, !0;
},
_trigger: function() {
e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
},
_uiHash: function(t) {
var n = t || this;
return {
helper: n.helper,
placeholder: n.placeholder || e([]),
position: n.position,
originalPosition: n.originalPosition,
offset: n.positionAbs,
item: n.currentItem,
sender: t ? t.element : null
};
}
});
}(jQuery);
} catch (i) {
wx.jslog({
src: "biz_common/jquery.ui/jquery.ui.sortable.js"
}, i);
}
});define("biz_web/lib/json.js", [], function(require, exports, module) {
try {
var report_time_begin = +(new Date);
return typeof JSON != "object" && (JSON = {}), function() {
"use strict";
function f(e) {
return e < 10 ? "0" + e : e;
}
function quote(e) {
return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
var t = meta[e];
return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
}) + '"' : '"' + e + '"';
}
function str(e, t) {
var n, r, i, s, o = gap, u, a = t[e];
a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
switch (typeof a) {
case "string":
return quote(a);
case "number":
return isFinite(a) ? String(a) : "null";
case "boolean":
case "null":
return String(a);
case "object":
if (!a) return "null";
gap += indent, u = [];
if (Object.prototype.toString.apply(a) === "[object Array]") {
s = a.length;
for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i;
}
if (rep && typeof rep == "object") {
s = rep.length;
for (n = 0; n < s; n += 1) typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
} else for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i;
}
}
typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function(e) {
return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
}, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
return this.valueOf();
});
var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
"\b": "\\b",
"	": "\\t",
"\n": "\\n",
"\f": "\\f",
"\r": "\\r",
'"': '\\"',
"\\": "\\\\"
}, rep;
JSON.stringify2 = function(e, t, n) {
var r;
gap = "", indent = "";
if (typeof n == "number") for (r = 0; r < n; r += 1) indent += " "; else typeof n == "string" && (indent = n);
rep = t;
if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {
"": e
});
throw new Error("JSON.stringify");
}, typeof JSON.parse != "function" && (JSON.parse = function(text, reviver) {
function walk(e, t) {
var n, r, i = e[t];
if (i && typeof i == "object") for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
return reviver.call(e, t, i);
}
var j;
text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
}));
if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
"": j
}, "") : j;
throw new SyntaxError("JSON.parse");
});
}(), JSON;
} catch (e) {
wx.jslog({
src: "biz_web/lib/json.js"
}, e);
}
});