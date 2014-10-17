define("common/qq/mask.js", [ "biz_web/lib/spin.js" ], function(e, t, n) {
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
});define("common/wx/media/cardmsg.js", [ "widget/media.css", "common/wx/time.js", "tpl/media/cardmsg.html.js", "common/qq/Class.js", "cardticket/send_card.js", "common/wx/Tips.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict", e("widget/media.css");
var i = wx.T, s = e("common/wx/time.js"), o = e("tpl/media/cardmsg.html.js"), u = e("common/qq/Class.js"), a = e("cardticket/send_card.js"), f = e("common/wx/Tips.js"), l = u.declare({
type: 16,
init: function(e) {
this.opt = e.opt, this.info = e.infos[this.type], this.index = this.info && this.info.index, this.data = this.opt.data, this.msgSender = e;
},
getData: function() {
return {
type: this.type,
cardid: this.data.id,
cardnum: this.data.cardnum
};
},
click: function() {
var e = this;
return this.send_card = new a({
multi: !1,
selectComplete: function(t, n) {
if (!t) {
f.err("请选择卡券");
return;
}
t.cardnum = n, e.fillData(t), e.msgSender.select(e.index);
},
source: "直接群发卡券"
}), this.send_card.show(), !1;
},
fillData: function(e) {
this.data = e, this.msgSender.type = this.type;
var t = i(o, e);
$("." + this.info.selector).html(t), this.msgSender.select(this.index);
},
isValidate: function() {
return this.data.id ? !0 : (f.err("请选择卡券"), !1);
}
});
return l;
} catch (c) {
wx.jslog({
src: "common/wx/media/cardmsg.js"
}, c);
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
});define("common/wx/media/factory.js", [ "common/wx/media/img.js", "common/wx/media/audio.js", "common/wx/media/video.js", "common/wx/media/appmsg.js", "common/qq/emoji.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("common/wx/media/img.js"), s = e("common/wx/media/audio.js"), o = e("common/wx/media/video.js"), u = e("common/wx/media/appmsg.js");
e("common/qq/emoji.js");
var a = {
"1": function(e, t) {
return $(e).html(t.content.emoji());
},
"2": function(e, t) {
return t.container = $(e), new i(t);
},
"3": function(e, t) {
return t.selector = $(e), t.source = "file", new s(t);
},
"4": function(e, t) {
return t.selector = $(e), t.id = t.file_id, t.source = "file", new o(t);
},
"10": function(e, t) {
return t.container = $(e), t.showMask = !1, new u(t);
},
"11": function(e, t) {
return t.container = $(e), t.showMask = !1, new u(t);
},
"15": function(e, t) {
return t.multi_item && t.multi_item[0] && (t.title = t.multi_item[0].title, t.digest = t.multi_item[0].digest), t.selector = $(e), t.id = Math.random() * 1e6 | 0, t.tpl = "videomsg", t.for_selection = !1, t.for_operation = !1, new o(t);
}
}, f = {
render: function(e, t) {
a[t.type] && $(e).length > 0 && a[t.type]($(e).html(""), t);
},
itemRender: a
};
n.exports = f;
} catch (l) {
wx.jslog({
src: "common/wx/media/factory.js"
}, l);
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
});define("tpl/popup.html.js", [], function(e, t, n) {
return '<div class="dialog_wrp {className}" style="{if width}width:{width}px;{/if}{if height}height:{height}px;{/if}">\n	<div class="dialog">\n		<div class="dialog_hd">\n			<h3>{title}</h3>\n			<a href="javascript:;" onclick="return false" class="icon16_opr closed pop_closed">关闭</a>\n		</div>\n		<div class="dialog_bd">{=content}</div>\n		{if buttons && buttons.length}\n		<div class="dialog_ft">\n			{each buttons as bt index}\n            <span class="btn {bt.type} btn_input js_btn_p"><button type="button" class="js_btn" data-index="{index}">{bt.text}</button></span>\n	        {/each}\n		</div>\n		{/if}\n	</div>\n</div>{if mask}<div class="mask"><iframe frameborder="0" style="filter:progid:DXImageTransform.Microsoft.Alpha(opacity:0);position:absolute;top:0px;left:0px;width:100%;height:100%;" src="about:blank"></iframe></div>{/if}\n';
});