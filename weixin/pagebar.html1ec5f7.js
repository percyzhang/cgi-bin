define("common/wx/richEditor/emotionEditor.js", [ "widget/emotion_editor.css", "tpl/richEditor/emotionEditor.html.js", "common/wx/richEditor/wysiwyg.js", "common/wx/richEditor/emotion.js", "common/wx/upload.js", "common/wx/Tips.js", "common/qq/Class.js" ], function(e, t, n) {
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
});define("tpl/message/video_popup.html.js", [], function(e, t, n) {
return '<div>\n   <div class="frm_control_group">\n       <label for="" class="frm_label">标题</label>\n       <div class="frm_controls">\n           <span class="frm_input_box"><input type="text" class="frm_input title"></span>\n       </div>\n   </div>\n   <div class="frm_control_group">\n       <label for="" class="frm_label">摘要<span class="tips">（选填）</span></label>\n       <div class="frm_controls">\n           <span class="frm_textarea_box"><textarea class="frm_textarea digest"></textarea></span>\n       </div>\n   </div>\n</div>\n \n';
});define("common/wx/time.js", [], function(e, t, n) {
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
});define("common/qq/events.js", [], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
function i(e) {
e === !0 ? this.data = window.wx.events || {} : this.data = {};
}
i.prototype = {
on: function(e, t) {
return this.data[e] = this.data[e] || [], this.data[e].push(t), this;
},
off: function(e, t) {
this.data[e] && this.data[e].length > 0 && (t && typeof t == "function" ? $.each(this.data[e], function(n, r) {
r === t && this.data[e].splice(n, 1);
}) : this.data[e] = []);
},
trigger: function(e) {
var t = arguments;
this.data[e] && this.data[e].length > 0 && $.each(this.data[e], function(e, n) {
var r = n.apply(this, Array.prototype.slice.call(t, 1));
if (r === !1) return !1;
});
}
}, n.exports = function(e) {
return new i(e);
};
} catch (s) {
wx.jslog({
src: "common/qq/events.js"
}, s);
}
});define("common/wx/media/simpleAppmsg.js", [ "tpl/media/simple_appmsg.html.js", "widget/media.css", "common/qq/Class.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = wx.T, s = e("tpl/media/simple_appmsg.html.js"), o = e("widget/media.css"), u = e("common/qq/Class.js"), a = wx.url("/cgi-bin/getimgdata?"), f = {
"9": {
"1": "图文消息",
"2": "图文消息",
"3": "图文消息",
"4": "图文消息"
},
"10": {
"1": "图文消息",
"2": "图文消息",
"3": "图文消息",
"4": "图文消息"
},
"11": {
"1": "活动消息",
"2": "第三方应用消息",
"3": "商品消息",
"4": "单条商品消息"
}
}, l = function(e, t) {
var n = f[e];
return (n ? n[t] : "") || "未知类型";
}, c = u.declare({
init: function(e) {
if (!e || !e.container) return;
e.appmsg_cover = a + "&mode=small&source=%s&msgid=%s&fileId=%s".sprintf(e.source, e.id, e.file_id), e.type_msg = l(e.type, e.app_sub_type), $(e.container).html(wx.T(s, e)).data(e), this.opt = e;
},
getData: function() {
return this.opt;
}
});
return c;
} catch (h) {
wx.jslog({
src: "common/wx/media/simpleAppmsg.js"
}, h);
}
});define("common/wx/remark.js", [ "common/wx/Tips.js", "common/qq/events.js", "user/user_cgi.js", "common/wx/simplePopup.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("common/wx/Tips.js"), s = e("common/qq/events.js"), o = s(!0), u = e("user/user_cgi.js"), a = e("common/wx/simplePopup.js"), f = function() {
this.id = null, this.remarkName = null, this._init();
};
f.prototype = {
_init: function() {
var e = this;
o.on("Remark:change", function(t, n) {
e.show(t, n);
});
},
show: function(e, t) {
this.id = e, this.remarkName = t;
var n = this;
new a({
title: "添加备注",
callback: function(e) {
u.changeRemark(n.id, e, function(t) {
i.suc("修改成功"), o.trigger("Remark:changed", n.id, (e + "").html(!0));
});
},
rule: function(e, t, n) {
return e.length <= 30;
},
value: (t + "").html(!1),
msg: "备注不能超过30个字"
});
},
hide: function() {}
}, n.exports = new f;
} catch (l) {
wx.jslog({
src: "common/wx/remark.js"
}, l);
}
});define("common/wx/RichBuddy.js", [ "common/qq/emoji.js", "tpl/RichBuddy/RichBuddyLayout.html.js", "tpl/RichBuddy/RichBuddyContent.html.js", "widget/rich_buddy.css", "common/wx/Tips.js", "common/qq/Class.js", "common/wx/remark.js", "user/user_cgi.js", "common/qq/events.js", "biz_web/ui/dropdown.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict", e("common/qq/emoji.js");
var i = e("tpl/RichBuddy/RichBuddyLayout.html.js"), s = e("tpl/RichBuddy/RichBuddyContent.html.js"), o = template.compile(s), u = e("widget/rich_buddy.css"), a = e("common/wx/Tips.js"), f = e("common/qq/Class.js"), l = e("common/wx/remark.js"), c = e("common/qq/emoji.js"), h = e("user/user_cgi.js"), p = e("common/qq/events.js"), d = e("biz_web/ui/dropdown.js"), v = p(!0), m = {}, g = {
position: {
left: 0,
top: 0
},
fakeId: ""
}, y = f.declare({
init: function(e) {
e && (this._init_opts = $.extend(!0, this._init_opts, e));
},
$element: null,
$content: null,
hideTimer: null,
namespace: ".RichBuddy",
options: {},
_init_opts: {
hideGroup: !1,
data: undefined
},
_init: function() {
var e = this.options, t = this, n, r = e.fakeId, s = e.position;
this._unbindEvent(), this.$element || (this.$element = $(i).appendTo(document.body)), this.$content = this.$element.find(".buddyRichContent"), this.$loading = this.$element.find(".loadingArea"), typeof this._init_opts.data == "object" && this._init_opts.data !== null && (m = this._init_opts.data), m[r] ? (n = m[r], this.$content.html(o(n)), this._hideLoading(), this._bindEvent()) : (this._showLoading(), h.getBuddyInfo(r, function(n) {
if (!n || !n.base_resp) {
a.err("系统出错，请稍后重试！");
return;
}
if (n.base_resp.ret == 0) {
var i = n.contact_info;
i.groups = n.groups.groups, n = i;
for (var s in n) typeof n[s] == "string" && (n[s] = n[s].replace(/&nbsp;/ig, " "));
n.nick_name = n.nick_name.emoji(), n.fake_id && (m[r] = n), n.fake_id == e.fakeId && (t._hideLoading(), t.$content.html(o(n)), t._bindEvent());
} else switch (+n.base_resp.ret) {
case 1:
a.err("该用户已经对您取消关注");
break;
case 2:
break;
case -3:
a.err("会话过期，请重新登录");
break;
default:
a.err("系统出错，请稍后重试！");
}
}));
},
_showLoading: function() {
this.$loading.show(), this.$content.hide();
},
_hideLoading: function() {
this.$loading.hide(), this.$content.show();
},
_bindEvent: function() {
var e = this, t = this.options, n = m[t.fakeId];
if (!n) return;
this.$element.bind("mouseover" + this.namespace, function(t) {
clearTimeout(e.hideTimer), e.hideTimer = null, e.$element.show();
}).bind("mouseout" + this.namespace, function(t) {
e._mouseout();
}), this.$element.find(".js_changeRemark").bind("click" + this.namespace, function() {
v.trigger("Remark:change", t.fakeId, n.remark_name);
}), v.on("Remark:changed", function(t, n) {
m[t] && (m[t].remark_name = n), e.$element.find(".js_remarkName").html(n);
}), n.groups || (n.groups = []);
var r = [], i;
for (var s = 0; s < n.groups.length; s++) r.push({
name: n.groups[s].name,
value: n.groups[s].id
}), n.group_id == n.groups[s].id && (i = n.groups[s].name);
new d({
container: this.$element.find(".js_group"),
label: i || "请选择",
data: r,
callback: function(e, r) {
if (n.group_id != e) {
var i = t.fakeId;
h.changeGroup(i, e, function(t) {
m[i].GroupID = e;
});
}
},
search: !1
}), this._init_opts.hideGroup && this.$element.find(".js_group_container").hide();
},
_unbindEvent: function() {
if (this.$element) {
var e = this.namespace;
this.$element.find(".js_changeRemark").unbind(e), this.$element.unbind(e), this.$element.stop(), this.$element.css("opacity", 1), this.$element.show();
}
},
_mouseout: function() {
var e = this;
e.hideTimer || (e.hideTimer = setTimeout(function() {
!!e.$element && e.$element.fadeOut(), e.hideTimer = null;
}, 1e3));
},
show: function(e) {
var t = this.options.fakeId;
e && (this.options = e), clearTimeout(this.hideTimer), this.hideTimer = null, e.fakeId !== t && this._init(), this.$element.css(e.position), this.$element.show();
},
hide: function() {
this._mouseout();
}
});
n.exports = y;
} catch (b) {
wx.jslog({
src: "common/wx/RichBuddy.js"
}, b);
}
});define("tpl/msgListItem.html.js", [], function(e, t, n) {
return '{if list.length <= 0}\n    <p class="empty_tips">暂无消息</p>\n{else}\n    {each list as item as index}\n    <li class="message_item {if item.has_reply}replyed{/if}" id="msgListItem{item.id}" data-id="{item.id}">\n        {if (item.fakeid != uin)}\n        <div class="message_opr">\n            {if (item.type != 10 || item.app_sub_type != 2) }\n            <a href="javascript:;" class="js_star icon18_common {if (item.is_starred_msg != 1)}star_gray{else}star_orange{/if}" action="{action}" idx="{item.id}" starred="{item.is_starred_msg}" title="{if (item.is_starred_msg != 1) }收藏消息{else}取消收藏{/if}">取消收藏</a>\n            {/if}\n            {if (item.type!= 1 && item.type != 10 && item.type != 4) }\n            <a href="javascript:;" class="js_save icon18_common save_gray" idx="{item.id}" data-type="{item.type}" title="保存为素材">保存为素材</a>\n            <a href="/cgi-bin/downloadfile?msgid={item.id}&source={item.source}&token={token}" class="icon18_common download_gray" target="_blank" idx="{item.id}" title="下载">下载</a>\n            {/if}\n            {if (item.type == 4) }\n            <a href="/cgi-bin/downloadfile?msgid={item.id}&source={item.source}&token={token}" class="icon18_common download_gray" target="_blank" idx="{item.id}" title="下载">下载</a>\n            {/if}\n            <a href="javascript:;" data-id="{item.id}" data-tofakeid="{item.fakeid}" class="icon18_common reply_gray js_reply" title="快捷回复">快捷回复</a>\n        </div>\n        {/if}\n        <div class="message_info">\n            <div class="message_status"><em class="tips">已回复</em></div>\n            <div class="message_time">{timeFormat item}</div>\n            <div class="user_info">\n                {if (item.fakeid != uin)}\n                <a href="{id2singleURL item}" target="_blank" data-fakeid="{item.fakeid}" class="remark_name">{if item.remark_name}{=item.remark_name}{else}{=item.nick_name.emoji()}{/if}</a>\n                {else}\n                <span data-fakeid="{item.fakeid}" class="remark_name">{if item.remark_name}{=item.remark_name}{else}{=item.nick_name.emoji()}{/if}</span>\n                {/if}\n                \n                <span class="nickname" data-fakeid="{item.fakeid}">{if item.remark_name}(<strong>{=item.nick_name.emoji()}</strong>){/if}</span>\n                \n                {if (item.fakeid != uin)}\n                <a href="javascript:;" class="icon14_common edit_gray js_changeRemark" data-fakeid="{item.fakeid}" title="修改备注" style="display:none;"></a>\n                {/if}\n                {if (item.fakeid != uin)}\n                <a target="_blank" href="{id2singleURL item}" class="avatar" data-fakeid="{item.fakeid}">\n                    <img src="https://res.wx.qq.com/mpres/htmledition/images/icon/page-setting/avatar/icon80_avatar_default.png" data-src="/misc/getheadimg?token={token}&fakeid={item.fakeid}" data-fakeid="{item.fakeid}">\n                </a>\n                {else}\n                <span class="avatar" data-fakeid="{item.fakeid}">\n                    <img src="https://res.wx.qq.com/mpres/htmledition/images/icon/page-setting/avatar/icon80_avatar_default.png" data-src="/misc/getheadimg?token={token}&fakeid={item.fakeid}" data-fakeid="{item.fakeid}">\n                </span>\n                {/if}\n            </div>\n        </div>\n\n        <div class="message_content {if item.type == 1}text{/if}">\n            <div id="wxMsg{item.id}" data-id="{item.id}" class="wxMsg">\n                {mediaInit item}\n            </div>\n        </div>\n\n        {if (item.fakeid != uin)}\n        <div id="quickReplyBox{item.id}" class="js_quick_reply_box quick_reply_box">\n            <label for="" class="frm_label">快速回复:</label>\n            <div class="emoion_editor_wrp js_editor"></div>\n            <div class="verifyCode"></div>\n            <p class="quick_reply_box_tool_bar">\n                <span class="btn btn_primary btn_input" data-id="{item.id}">\n                    <button class="js_reply_OK" data-id="{item.id}" data-fakeid="{item.fakeid}">发送</button>\n                </span><a class="js_reply_pickup btn btn_default pickup" data-id="{item.id}" href="javascript:;">收起</a>\n            </p>\n        </div>\n        {/if}\n    </li>\n    {/each}\n{/if}\n';
});define("common/wx/media/idCard.js", [ "tpl/media/id_card.html.js", "widget/media.css", "common/qq/Class.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = wx.T, s = e("tpl/media/id_card.html.js"), o = e("widget/media.css"), u = e("common/qq/Class.js"), a = wx.url("/misc/getheadimg?1=1"), f = u.declare({
init: function(e) {
if (!e || !e.container) return;
e.avatar = a + "&fakeid=" + e.fakeid, $(e.container).html(wx.T(s, e)).data(e), this.opt = e;
},
getData: function() {
return this.opt;
}
});
n.exports = f;
} catch (l) {
wx.jslog({
src: "common/wx/media/idCard.js"
}, l);
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
});define("common/qq/emoji.js", [ "widget/emoji.css" ], function(e, t, n) {
try {
var r = +(new Date);
e("widget/emoji.css");
var i = {
"☀": "2600",
"☁": "2601",
"☔": "2614",
"⛄": "26c4",
"⚡": "26a1",
"🌀": "1f300",
"🌁": "1f301",
"🌂": "1f302",
"🌃": "1f303",
"🌄": "1f304",
"🌅": "1f305",
"🌆": "1f306",
"🌇": "1f307",
"🌈": "1f308",
"❄": "2744",
"⛅": "26c5",
"🌉": "1f309",
"🌊": "1f30a",
"🌋": "1f30b",
"🌌": "1f30c",
"🌏": "1f30f",
"🌑": "1f311",
"🌔": "1f314",
"🌓": "1f313",
"🌙": "1f319",
"🌕": "1f315",
"🌛": "1f31b",
"🌟": "1f31f",
"🌠": "1f320",
"🕐": "1f550",
"🕑": "1f551",
"🕒": "1f552",
"🕓": "1f553",
"🕔": "1f554",
"🕕": "1f555",
"🕖": "1f556",
"🕗": "1f557",
"🕘": "1f558",
"🕙": "1f559",
"🕚": "1f55a",
"🕛": "1f55b",
"⌚": "231a",
"⌛": "231b",
"⏰": "23f0",
"⏳": "23f3",
"♈": "2648",
"♉": "2649",
"♊": "264a",
"♋": "264b",
"♌": "264c",
"♍": "264d",
"♎": "264e",
"♏": "264f",
"♐": "2650",
"♑": "2651",
"♒": "2652",
"♓": "2653",
"⛎": "26ce",
"🍀": "1f340",
"🌷": "1f337",
"🌱": "1f331",
"🍁": "1f341",
"🌸": "1f338",
"🌹": "1f339",
"🍂": "1f342",
"🍃": "1f343",
"🌺": "1f33a",
"🌻": "1f33b",
"🌴": "1f334",
"🌵": "1f335",
"🌾": "1f33e",
"🌽": "1f33d",
"🍄": "1f344",
"🌰": "1f330",
"🌼": "1f33c",
"🌿": "1f33f",
"🍒": "1f352",
"🍌": "1f34c",
"🍎": "1f34e",
"🍊": "1f34a",
"🍓": "1f353",
"🍉": "1f349",
"🍅": "1f345",
"🍆": "1f346",
"🍈": "1f348",
"🍍": "1f34d",
"🍇": "1f347",
"🍑": "1f351",
"🍏": "1f34f",
"👀": "1f440",
"👂": "1f442",
"👃": "1f443",
"👄": "1f444",
"👅": "1f445",
"💄": "1f484",
"💅": "1f485",
"💆": "1f486",
"💇": "1f487",
"💈": "1f488",
"👤": "1f464",
"👦": "1f466",
"👧": "1f467",
"👨": "1f468",
"👩": "1f469",
"👪": "1f46a",
"👫": "1f46b",
"👮": "1f46e",
"👯": "1f46f",
"👰": "1f470",
"👱": "1f471",
"👲": "1f472",
"👳": "1f473",
"👴": "1f474",
"👵": "1f475",
"👶": "1f476",
"👷": "1f477",
"👸": "1f478",
"👹": "1f479",
"👺": "1f47a",
"👻": "1f47b",
"👼": "1f47c",
"👽": "1f47d",
"👾": "1f47e",
"👿": "1f47f",
"💀": "1f480",
"💁": "1f481",
"💂": "1f482",
"💃": "1f483",
"🐌": "1f40c",
"🐍": "1f40d",
"🐎": "1f40e",
"🐔": "1f414",
"🐗": "1f417",
"🐫": "1f42b",
"🐘": "1f418",
"🐨": "1f428",
"🐒": "1f412",
"🐑": "1f411",
"🐙": "1f419",
"🐚": "1f41a",
"🐛": "1f41b",
"🐜": "1f41c",
"🐝": "1f41d",
"🐞": "1f41e",
"🐠": "1f420",
"🐡": "1f421",
"🐢": "1f422",
"🐤": "1f424",
"🐥": "1f425",
"🐦": "1f426",
"🐣": "1f423",
"🐧": "1f427",
"🐩": "1f429",
"🐟": "1f41f",
"🐬": "1f42c",
"🐭": "1f42d",
"🐯": "1f42f",
"🐱": "1f431",
"🐳": "1f433",
"🐴": "1f434",
"🐵": "1f435",
"🐶": "1f436",
"🐷": "1f437",
"🐻": "1f43b",
"🐹": "1f439",
"🐺": "1f43a",
"🐮": "1f42e",
"🐰": "1f430",
"🐸": "1f438",
"🐾": "1f43e",
"🐲": "1f432",
"🐼": "1f43c",
"🐽": "1f43d",
"😠": "1f620",
"😩": "1f629",
"😲": "1f632",
"😞": "1f61e",
"😵": "1f635",
"😰": "1f630",
"😒": "1f612",
"😍": "1f60d",
"😤": "1f624",
"😜": "1f61c",
"😝": "1f61d",
"😋": "1f60b",
"😘": "1f618",
"😚": "1f61a",
"😷": "1f637",
"😳": "1f633",
"😃": "1f603",
"😅": "1f605",
"😆": "1f606",
"😁": "1f601",
"😂": "1f602",
"😊": "1f60a",
"☺": "263a",
"😄": "1f604",
"😢": "1f622",
"😭": "1f62d",
"😨": "1f628",
"😣": "1f623",
"😡": "1f621",
"😌": "1f60c",
"😖": "1f616",
"😔": "1f614",
"😱": "1f631",
"😪": "1f62a",
"😏": "1f60f",
"😓": "1f613",
"😥": "1f625",
"😫": "1f62b",
"😉": "1f609",
"😺": "1f63a",
"😸": "1f638",
"😹": "1f639",
"😽": "1f63d",
"😻": "1f63b",
"😿": "1f63f",
"😾": "1f63e",
"😼": "1f63c",
"🙀": "1f640",
"🙅": "1f645",
"🙆": "1f646",
"🙇": "1f647",
"🙈": "1f648",
"🙊": "1f64a",
"🙉": "1f649",
"🙋": "1f64b",
"🙌": "1f64c",
"🙍": "1f64d",
"🙎": "1f64e",
"🙏": "1f64f",
"🏠": "1f3e0",
"🏡": "1f3e1",
"🏢": "1f3e2",
"🏣": "1f3e3",
"🏥": "1f3e5",
"🏦": "1f3e6",
"🏧": "1f3e7",
"🏨": "1f3e8",
"🏩": "1f3e9",
"🏪": "1f3ea",
"🏫": "1f3eb",
"⛪": "26ea",
"⛲": "26f2",
"🏬": "1f3ec",
"🏯": "1f3ef",
"🏰": "1f3f0",
"🏭": "1f3ed",
"⚓": "2693",
"🏮": "1f3ee",
"🗻": "1f5fb",
"🗼": "1f5fc",
"🗽": "1f5fd",
"🗾": "1f5fe",
"🗿": "1f5ff",
"👞": "1f45e",
"👟": "1f45f",
"👠": "1f460",
"👡": "1f461",
"👢": "1f462",
"👣": "1f463",
"👓": "1f453",
"👕": "1f455",
"👖": "1f456",
"👑": "1f451",
"👔": "1f454",
"👒": "1f452",
"👗": "1f457",
"👘": "1f458",
"👙": "1f459",
"👚": "1f45a",
"👛": "1f45b",
"👜": "1f45c",
"👝": "1f45d",
"💰": "1f4b0",
"💱": "1f4b1",
"💹": "1f4b9",
"💲": "1f4b2",
"💳": "1f4b3",
"💴": "1f4b4",
"💵": "1f4b5",
"💸": "1f4b8",
"🇨🇳": "1f1e81f1f3",
"🇩🇪": "1f1e91f1ea",
"🇪🇸": "1f1ea1f1f8",
"🇫🇷": "1f1eb1f1f7",
"🇬🇧": "1f1ec1f1e7",
"🇮🇹": "1f1ee1f1f9",
"🇯🇵": "1f1ef1f1f5",
"🇰🇷": "1f1f01f1f7",
"🇷🇺": "1f1f71f1fa",
"🇺🇸": "1f1fa1f1f8",
"🔥": "1f525",
"🔦": "1f526",
"🔧": "1f527",
"🔨": "1f528",
"🔩": "1f529",
"🔪": "1f52a",
"🔫": "1f52b",
"🔮": "1f52e",
"🔯": "1f52f",
"🔰": "1f530",
"🔱": "1f531",
"💉": "1f489",
"💊": "1f48a",
"🅰": "1f170",
"🅱": "1f171",
"🆎": "1f18e",
"🅾": "1f17e",
"🎀": "1f380",
"🎁": "1f381",
"🎂": "1f382",
"🎄": "1f384",
"🎅": "1f385",
"🎌": "1f38c",
"🎆": "1f386",
"🎈": "1f388",
"🎉": "1f389",
"🎍": "1f38d",
"🎎": "1f38e",
"🎓": "1f393",
"🎒": "1f392",
"🎏": "1f38f",
"🎇": "1f387",
"🎐": "1f390",
"🎃": "1f383",
"🎊": "1f38a",
"🎋": "1f38b",
"🎑": "1f391",
"📟": "1f4df",
"☎": "260e",
"📞": "1f4de",
"📱": "1f4f1",
"📲": "1f4f2",
"📝": "1f4dd",
"📠": "1f4e0",
"✉": "2709",
"📨": "1f4e8",
"📩": "1f4e9",
"📪": "1f4ea",
"📫": "1f4eb",
"📮": "1f4ee",
"📰": "1f4f0",
"📢": "1f4e2",
"📣": "1f4e3",
"📡": "1f4e1",
"📤": "1f4e4",
"📥": "1f4e5",
"📦": "1f4e6",
"📧": "1f4e7",
"🔠": "1f520",
"🔡": "1f521",
"🔢": "1f522",
"🔣": "1f523",
"🔤": "1f524",
"✒": "2712",
"💺": "1f4ba",
"💻": "1f4bb",
"✏": "270f",
"📎": "1f4ce",
"💼": "1f4bc",
"💽": "1f4bd",
"💾": "1f4be",
"💿": "1f4bf",
"📀": "1f4c0",
"✂": "2702",
"📍": "1f4cd",
"📃": "1f4c3",
"📄": "1f4c4",
"📅": "1f4c5",
"📁": "1f4c1",
"📂": "1f4c2",
"📓": "1f4d3",
"📖": "1f4d6",
"📔": "1f4d4",
"📕": "1f4d5",
"📗": "1f4d7",
"📘": "1f4d8",
"📙": "1f4d9",
"📚": "1f4da",
"📛": "1f4db",
"📜": "1f4dc",
"📋": "1f4cb",
"📆": "1f4c6",
"📊": "1f4ca",
"📈": "1f4c8",
"📉": "1f4c9",
"📇": "1f4c7",
"📌": "1f4cc",
"📒": "1f4d2",
"📏": "1f4cf",
"📐": "1f4d0",
"📑": "1f4d1",
"🎽": "1f3bd",
"⚾": "26be",
"⛳": "26f3",
"🎾": "1f3be",
"⚽": "26bd",
"🎿": "1f3bf",
"🏀": "1f3c0",
"🏁": "1f3c1",
"🏂": "1f3c2",
"🏃": "1f3c3",
"🏄": "1f3c4",
"🏆": "1f3c6",
"🏈": "1f3c8",
"🏊": "1f3ca",
"🚃": "1f683",
"🚇": "1f687",
"Ⓜ": "24c2",
"🚄": "1f684",
"🚅": "1f685",
"🚗": "1f697",
"🚙": "1f699",
"🚌": "1f68c",
"🚏": "1f68f",
"🚢": "1f6a2",
"✈": "2708",
"⛵": "26f5",
"🚉": "1f689",
"🚀": "1f680",
"🚤": "1f6a4",
"🚕": "1f695",
"🚚": "1f69a",
"🚒": "1f692",
"🚑": "1f691",
"🚓": "1f693",
"⛽": "26fd",
"🅿": "1f17f",
"🚥": "1f6a5",
"🚧": "1f6a7",
"🚨": "1f6a8",
"♨": "2668",
"⛺": "26fa",
"🎠": "1f3a0",
"🎡": "1f3a1",
"🎢": "1f3a2",
"🎣": "1f3a3",
"🎤": "1f3a4",
"🎥": "1f3a5",
"🎦": "1f3a6",
"🎧": "1f3a7",
"🎨": "1f3a8",
"🎩": "1f3a9",
"🎪": "1f3aa",
"🎫": "1f3ab",
"🎬": "1f3ac",
"🎭": "1f3ad",
"🎮": "1f3ae",
"🀄": "1f004",
"🎯": "1f3af",
"🎰": "1f3b0",
"🎱": "1f3b1",
"🎲": "1f3b2",
"🎳": "1f3b3",
"🎴": "1f3b4",
"🃏": "1f0cf",
"🎵": "1f3b5",
"🎶": "1f3b6",
"🎷": "1f3b7",
"🎸": "1f3b8",
"🎹": "1f3b9",
"🎺": "1f3ba",
"🎻": "1f3bb",
"🎼": "1f3bc",
"〽": "303d",
"📷": "1f4f7",
"📹": "1f4f9",
"📺": "1f4fa",
"📻": "1f4fb",
"📼": "1f4fc",
"💋": "1f48b",
"💌": "1f48c",
"💍": "1f48d",
"💎": "1f48e",
"💏": "1f48f",
"💐": "1f490",
"💑": "1f491",
"💒": "1f492",
"🔞": "1f51e",
"©": "a9",
"®": "ae",
"™": "2122",
"ℹ": "2139",
"#⃣": "2320e3",
"1⃣": "3120e3",
"2⃣": "3220e3",
"3⃣": "3320e3",
"4⃣": "3420e3",
"5⃣": "3520e3",
"6⃣": "3620e3",
"7⃣": "3720e3",
"8⃣": "3820e3",
"9⃣": "3920e3",
"0⃣": "3020e3",
"🔟": "1f51f",
"📶": "1f4f6",
"📳": "1f4f3",
"📴": "1f4f4",
"🍔": "1f354",
"🍙": "1f359",
"🍰": "1f370",
"🍜": "1f35c",
"🍞": "1f35e",
"🍳": "1f373",
"🍦": "1f366",
"🍟": "1f35f",
"🍡": "1f361",
"🍘": "1f358",
"🍚": "1f35a",
"🍝": "1f35d",
"🍛": "1f35b",
"🍢": "1f362",
"🍣": "1f363",
"🍱": "1f371",
"🍲": "1f372",
"🍧": "1f367",
"🍖": "1f356",
"🍥": "1f365",
"🍠": "1f360",
"🍕": "1f355",
"🍗": "1f357",
"🍨": "1f368",
"🍩": "1f369",
"🍪": "1f36a",
"🍫": "1f36b",
"🍬": "1f36c",
"🍭": "1f36d",
"🍮": "1f36e",
"🍯": "1f36f",
"🍤": "1f364",
"🍴": "1f374",
"☕": "2615",
"🍸": "1f378",
"🍺": "1f37a",
"🍵": "1f375",
"🍶": "1f376",
"🍷": "1f377",
"🍻": "1f37b",
"🍹": "1f379",
"↗": "2197",
"↘": "2198",
"↖": "2196",
"↙": "2199",
"⤴": "2934",
"⤵": "2935",
"↔": "2194",
"↕": "2195",
"⬆": "2b06",
"⬇": "2b07",
"➡": "27a1",
"⬅": "2b05",
"▶": "25b6",
"◀": "25c0",
"⏩": "23e9",
"⏪": "23ea",
"⏫": "23eb",
"⏬": "23ec",
"🔺": "1f53a",
"🔻": "1f53b",
"🔼": "1f53c",
"🔽": "1f53d",
"⭕": "2b55",
"❌": "274c",
"❎": "274e",
"❗": "2757",
"⁉": "2049",
"‼": "203c",
"❓": "2753",
"❔": "2754",
"❕": "2755",
"〰": "3030",
"➰": "27b0",
"➿": "27bf",
"❤": "2764",
"💓": "1f493",
"💔": "1f494",
"💕": "1f495",
"💖": "1f496",
"💗": "1f497",
"💘": "1f498",
"💙": "1f499",
"💚": "1f49a",
"💛": "1f49b",
"💜": "1f49c",
"💝": "1f49d",
"💞": "1f49e",
"💟": "1f49f",
"♥": "2665",
"♠": "2660",
"♦": "2666",
"♣": "2663",
"🚬": "1f6ac",
"🚭": "1f6ad",
"♿": "267f",
"🚩": "1f6a9",
"⚠": "26a0",
"⛔": "26d4",
"♻": "267b",
"🚲": "1f6b2",
"🚶": "1f6b6",
"🚹": "1f6b9",
"🚺": "1f6ba",
"🛀": "1f6c0",
"🚻": "1f6bb",
"🚽": "1f6bd",
"🚾": "1f6be",
"🚼": "1f6bc",
"🚪": "1f6aa",
"🚫": "1f6ab",
"✔": "2714",
"🆑": "1f191",
"🆒": "1f192",
"🆓": "1f193",
"🆔": "1f194",
"🆕": "1f195",
"🆖": "1f196",
"🆗": "1f197",
"🆘": "1f198",
"🆙": "1f199",
"🆚": "1f19a",
"🈁": "1f201",
"🈂": "1f202",
"🈲": "1f232",
"🈳": "1f233",
"🈴": "1f234",
"🈵": "1f235",
"🈶": "1f236",
"🈚": "1f21a",
"🈷": "1f237",
"🈸": "1f238",
"🈹": "1f239",
"🈯": "1f22f",
"🈺": "1f23a",
"㊙": "3299",
"㊗": "3297",
"🉐": "1f250",
"🉑": "1f251",
"➕": "2795",
"➖": "2796",
"✖": "2716",
"➗": "2797",
"💠": "1f4a0",
"💡": "1f4a1",
"💢": "1f4a2",
"💣": "1f4a3",
"💤": "1f4a4",
"💥": "1f4a5",
"💦": "1f4a6",
"💧": "1f4a7",
"💨": "1f4a8",
"💩": "1f4a9",
"💪": "1f4aa",
"💫": "1f4ab",
"💬": "1f4ac",
"✨": "2728",
"✴": "2734",
"✳": "2733",
"⚪": "26aa",
"⚫": "26ab",
"🔴": "1f534",
"🔵": "1f535",
"🔲": "1f532",
"🔳": "1f533",
"⭐": "2b50",
"⬜": "2b1c",
"⬛": "2b1b",
"▫": "25ab",
"▪": "25aa",
"◽": "25fd",
"◾": "25fe",
"◻": "25fb",
"◼": "25fc",
"🔶": "1f536",
"🔷": "1f537",
"🔸": "1f538",
"🔹": "1f539",
"❇": "2747",
"💮": "1f4ae",
"💯": "1f4af",
"↩": "21a9",
"↪": "21aa",
"🔃": "1f503",
"🔊": "1f50a",
"🔋": "1f50b",
"🔌": "1f50c",
"🔍": "1f50d",
"🔎": "1f50e",
"🔒": "1f512",
"🔓": "1f513",
"🔏": "1f50f",
"🔐": "1f510",
"🔑": "1f511",
"🔔": "1f514",
"☑": "2611",
"🔘": "1f518",
"🔖": "1f516",
"🔗": "1f517",
"🔙": "1f519",
"🔚": "1f51a",
"🔛": "1f51b",
"🔜": "1f51c",
"🔝": "1f51d",
" ": "2003",
" ": "2002",
" ": "2005",
"✅": "2705",
"✊": "270a",
"✋": "270b",
"✌": "270c",
"👊": "1f44a",
"👍": "1f44d",
"☝": "261d",
"👆": "1f446",
"👇": "1f447",
"👈": "1f448",
"👉": "1f449",
"👋": "1f44b",
"👏": "1f44f",
"👌": "1f44c",
"👎": "1f44e",
"👐": "1f450",
"": "2600",
"": "2601",
"": "2614",
"": "26c4",
"": "26a1",
"": "1f300",
"[霧]": "1f301",
"": "1f302",
"": "1f30c",
"": "1f304",
"": "1f305",
"": "1f306",
"": "1f307",
"": "1f308",
"[雪結晶]": "2744",
"": "26c5",
"": "1f30a",
"[火山]": "1f30b",
"[地球]": "1f30f",
"●": "1f311",
"": "1f31b",
"○": "1f315",
"": "1f31f",
"☆彡": "1f320",
"": "1f550",
"": "1f551",
"": "1f552",
"": "1f553",
"": "1f554",
"": "1f555",
"": "1f556",
"": "1f557",
"": "1f558",
"": "23f0",
"": "1f55a",
"": "1f55b",
"[腕時計]": "231a",
"[砂時計]": "23f3",
"": "2648",
"": "2649",
"": "264a",
"": "264b",
"": "264c",
"": "264d",
"": "264e",
"": "264f",
"": "2650",
"": "2651",
"": "2652",
"": "2653",
"": "26ce",
"": "1f33f",
"": "1f337",
"": "1f341",
"": "1f338",
"": "1f339",
"": "1f342",
"": "1f343",
"": "1f33a",
"": "1f33c",
"": "1f334",
"": "1f335",
"": "1f33e",
"[とうもろこし]": "1f33d",
"[キノコ]": "1f344",
"[栗]": "1f330",
"[さくらんぼ]": "1f352",
"[バナナ]": "1f34c",
"": "1f34f",
"": "1f34a",
"": "1f353",
"": "1f349",
"": "1f345",
"": "1f346",
"[メロン]": "1f348",
"[パイナップル]": "1f34d",
"[ブドウ]": "1f347",
"[モモ]": "1f351",
"": "1f440",
"": "1f442",
"": "1f443",
"": "1f444",
"": "1f61d",
"": "1f484",
"": "1f485",
"": "1f486",
"": "1f487",
"": "1f488",
"〓": "2005",
"": "1f466",
"": "1f467",
"": "1f468",
"": "1f469",
"[家族]": "1f46a",
"": "1f46b",
"": "1f46e",
"": "1f46f",
"[花嫁]": "1f470",
"": "1f471",
"": "1f472",
"": "1f473",
"": "1f474",
"": "1f475",
"": "1f476",
"": "1f477",
"": "1f478",
"[なまはげ]": "1f479",
"[天狗]": "1f47a",
"": "1f47b",
"": "1f47c",
"": "1f47d",
"": "1f47e",
"": "1f47f",
"": "1f480",
"": "1f481",
"": "1f482",
"": "1f483",
"[カタツムリ]": "1f40c",
"": "1f40d",
"": "1f40e",
"": "1f414",
"": "1f417",
"": "1f42b",
"": "1f418",
"": "1f428",
"": "1f412",
"": "1f411",
"": "1f419",
"": "1f41a",
"": "1f41b",
"[アリ]": "1f41c",
"[ミツバチ]": "1f41d",
"[てんとう虫]": "1f41e",
"": "1f420",
"": "1f3a3",
"[カメ]": "1f422",
"": "1f423",
"": "1f426",
"": "1f427",
"": "1f436",
"": "1f42c",
"": "1f42d",
"": "1f42f",
"": "1f431",
"": "1f433",
"": "1f434",
"": "1f435",
"": "1f43d",
"": "1f43b",
"": "1f439",
"": "1f43a",
"": "1f42e",
"": "1f430",
"": "1f438",
"": "1f463",
"[辰]": "1f432",
"[パンダ]": "1f43c",
"": "1f620",
"": "1f64d",
"": "1f632",
"": "1f61e",
"": "1f62b",
"": "1f630",
"": "1f612",
"": "1f63b",
"": "1f63c",
"": "1f61c",
"": "1f60a",
"": "1f63d",
"": "1f61a",
"": "1f637",
"": "1f633",
"": "1f63a",
"": "1f605",
"": "1f60c",
"": "1f639",
"": "263a",
"": "1f604",
"": "1f63f",
"": "1f62d",
"": "1f628",
"": "1f64e",
"": "1f4ab",
"": "1f631",
"": "1f62a",
"": "1f60f",
"": "1f613",
"": "1f625",
"": "1f609",
"": "1f645",
"": "1f646",
"": "1f647",
"(/_＼)": "1f648",
"(・×・)": "1f64a",
"|(・×・)|": "1f649",
"": "270b",
"": "1f64c",
"": "1f64f",
"": "1f3e1",
"": "1f3e2",
"": "1f3e3",
"": "1f3e5",
"": "1f3e6",
"": "1f3e7",
"": "1f3e8",
"": "1f3e9",
"": "1f3ea",
"": "1f3eb",
"": "26ea",
"": "26f2",
"": "1f3ec",
"": "1f3ef",
"": "1f3f0",
"": "1f3ed",
"": "1f6a2",
"": "1f376",
"": "1f5fb",
"": "1f5fc",
"": "1f5fd",
"[日本地図]": "1f5fe",
"[モアイ]": "1f5ff",
"": "1f45f",
"": "1f460",
"": "1f461",
"": "1f462",
"[メガネ]": "1f453",
"": "1f45a",
"[ジーンズ]": "1f456",
"": "1f451",
"": "1f454",
"": "1f452",
"": "1f457",
"": "1f458",
"": "1f459",
"[財布]": "1f45b",
"": "1f45c",
"[ふくろ]": "1f45d",
"": "1f4b5",
"": "1f4b1",
"": "1f4c8",
"[カード]": "1f4b3",
"￥": "1f4b4",
"[飛んでいくお金]": "1f4b8",
"": "1f1e81f1f3",
"": "1f1e91f1ea",
"": "1f1ea1f1f8",
"": "1f1eb1f1f7",
"": "1f1ec1f1e7",
"": "1f1ee1f1f9",
"": "1f1ef1f1f5",
"": "1f1f01f1f7",
"": "1f1f71f1fa",
"": "1f1fa1f1f8",
"": "1f525",
"[懐中電灯]": "1f526",
"[レンチ]": "1f527",
"": "1f528",
"[ネジ]": "1f529",
"[包丁]": "1f52a",
"": "1f52b",
"": "1f52f",
"": "1f530",
"": "1f531",
"": "1f489",
"": "1f48a",
"": "1f170",
"": "1f171",
"": "1f18e",
"": "1f17e",
"": "1f380",
"": "1f4e6",
"": "1f382",
"": "1f384",
"": "1f385",
"": "1f38c",
"": "1f386",
"": "1f388",
"": "1f389",
"": "1f38d",
"": "1f38e",
"": "1f393",
"": "1f392",
"": "1f38f",
"": "1f387",
"": "1f390",
"": "1f383",
"[オメデトウ]": "1f38a",
"[七夕]": "1f38b",
"": "1f391",
"[ポケベル]": "1f4df",
"": "1f4de",
"": "1f4f1",
"": "1f4f2",
"": "1f4d1",
"": "1f4e0",
"": "1f4e7",
"": "1f4eb",
"": "1f4ee",
"[新聞]": "1f4f0",
"": "1f4e2",
"": "1f4e3",
"": "1f4e1",
"[送信BOX]": "1f4e4",
"[受信BOX]": "1f4e5",
"[ABCD]": "1f520",
"[abcd]": "1f521",
"[1234]": "1f522",
"[記号]": "1f523",
"[ABC]": "1f524",
"[ペン]": "2712",
"": "1f4ba",
"": "1f4bb",
"[クリップ]": "1f4ce",
"": "1f4bc",
"": "1f4be",
"": "1f4bf",
"": "1f4c0",
"": "2702",
"[画びょう]": "1f4cc",
"[カレンダー]": "1f4c6",
"[フォルダ]": "1f4c2",
"": "1f4d2",
"[名札]": "1f4db",
"[スクロール]": "1f4dc",
"[グラフ]": "1f4c9",
"[定規]": "1f4cf",
"[三角定規]": "1f4d0",
"": "26be",
"": "26f3",
"": "1f3be",
"": "26bd",
"": "1f3bf",
"": "1f3c0",
"": "1f3c1",
"[スノボ]": "1f3c2",
"": "1f3c3",
"": "1f3c4",
"": "1f3c6",
"": "1f3c8",
"": "1f3ca",
"": "1f683",
"": "24c2",
"": "1f684",
"": "1f685",
"": "1f697",
"": "1f699",
"": "1f68c",
"": "1f68f",
"": "2708",
"": "26f5",
"": "1f689",
"": "1f680",
"": "1f6a4",
"": "1f695",
"": "1f69a",
"": "1f692",
"": "1f691",
"": "1f6a8",
"": "26fd",
"": "1f17f",
"": "1f6a5",
"": "26d4",
"": "2668",
"": "26fa",
"": "1f3a1",
"": "1f3a2",
"": "1f3a4",
"": "1f4f9",
"": "1f3a6",
"": "1f3a7",
"": "1f3a8",
"": "1f3ad",
"[イベント]": "1f3aa",
"": "1f3ab",
"": "1f3ac",
"[ゲーム]": "1f3ae",
"": "1f004",
"": "1f3af",
"": "1f3b0",
"": "1f3b1",
"[サイコロ]": "1f3b2",
"[ボーリング]": "1f3b3",
"[花札]": "1f3b4",
"[ジョーカー]": "1f0cf",
"": "1f3b5",
"": "1f3bc",
"": "1f3b7",
"": "1f3b8",
"[ピアノ]": "1f3b9",
"": "1f3ba",
"[バイオリン]": "1f3bb",
"": "303d",
"": "1f4f7",
"": "1f4fa",
"": "1f4fb",
"": "1f4fc",
"": "1f48b",
"": "1f48c",
"": "1f48d",
"": "1f48e",
"": "1f48f",
"": "1f490",
"": "1f491",
"": "1f492",
"": "1f51e",
"": "a9",
"": "ae",
"": "2122",
"[ｉ]": "2139",
"": "2320e3",
"": "3120e3",
"": "3220e3",
"": "3320e3",
"": "3420e3",
"": "3520e3",
"": "3620e3",
"": "3720e3",
"": "3820e3",
"": "3920e3",
"": "3020e3",
"[10]": "1f51f",
"": "1f4f6",
"": "1f4f3",
"": "1f4f4",
"": "1f354",
"": "1f359",
"": "1f370",
"": "1f35c",
"": "1f35e",
"": "1f373",
"": "1f366",
"": "1f35f",
"": "1f361",
"": "1f358",
"": "1f35a",
"": "1f35d",
"": "1f35b",
"": "1f362",
"": "1f363",
"": "1f371",
"": "1f372",
"": "1f367",
"[肉]": "1f356",
"[なると]": "1f365",
"[やきいも]": "1f360",
"[ピザ]": "1f355",
"[チキン]": "1f357",
"[アイスクリーム]": "1f368",
"[ドーナツ]": "1f369",
"[クッキー]": "1f36a",
"[チョコ]": "1f36b",
"[キャンディ]": "1f36d",
"[プリン]": "1f36e",
"[ハチミツ]": "1f36f",
"[エビフライ]": "1f364",
"": "1f374",
"": "2615",
"": "1f379",
"": "1f37a",
"": "1f375",
"": "1f37b",
"": "2934",
"": "2935",
"": "2196",
"": "2199",
"⇔": "2194",
"↑↓": "1f503",
"": "2b06",
"": "2b07",
"": "27a1",
"": "1f519",
"": "25b6",
"": "25c0",
"": "23e9",
"": "23ea",
"▲": "1f53c",
"▼": "1f53d",
"": "2b55",
"": "2716",
"": "2757",
"！？": "2049",
"！！": "203c",
"": "2753",
"": "2754",
"": "2755",
"～": "27b0",
"": "27bf",
"": "2764",
"": "1f49e",
"": "1f494",
"": "1f497",
"": "1f498",
"": "1f499",
"": "1f49a",
"": "1f49b",
"": "1f49c",
"": "1f49d",
"": "1f49f",
"": "2665",
"": "2660",
"": "2666",
"": "2663",
"": "1f6ac",
"": "1f6ad",
"": "267f",
"[旗]": "1f6a9",
"": "26a0",
"": "1f6b2",
"": "1f6b6",
"": "1f6b9",
"": "1f6ba",
"": "1f6c0",
"": "1f6bb",
"": "1f6bd",
"": "1f6be",
"": "1f6bc",
"[ドア]": "1f6aa",
"[禁止]": "1f6ab",
"[チェックマーク]": "2705",
"[CL]": "1f191",
"": "1f192",
"[FREE]": "1f193",
"": "1f194",
"": "1f195",
"[NG]": "1f196",
"": "1f197",
"[SOS]": "1f198",
"": "1f199",
"": "1f19a",
"": "1f201",
"": "1f202",
"[禁]": "1f232",
"": "1f233",
"[合]": "1f234",
"": "1f235",
"": "1f236",
"": "1f21a",
"": "1f237",
"": "1f238",
"": "1f239",
"": "1f22f",
"": "1f23a",
"": "3299",
"": "3297",
"": "1f250",
"[可]": "1f251",
"[＋]": "2795",
"[－]": "2796",
"[÷]": "2797",
"": "1f4a1",
"": "1f4a2",
"": "1f4a3",
"": "1f4a4",
"[ドンッ]": "1f4a5",
"": "1f4a7",
"": "1f4a8",
"": "1f4a9",
"": "1f4aa",
"[フキダシ]": "1f4ac",
"": "2747",
"": "2734",
"": "2733",
"": "1f534",
"": "25fc",
"": "1f539",
"": "2b50",
"[花丸]": "1f4ae",
"[100点]": "1f4af",
"←┘": "21a9",
"└→": "21aa",
"": "1f50a",
"[電池]": "1f50b",
"[コンセント]": "1f50c",
"": "1f50e",
"": "1f510",
"": "1f513",
"": "1f511",
"": "1f514",
"[ラジオボタン]": "1f518",
"[ブックマーク]": "1f516",
"[リンク]": "1f517",
"[end]": "1f51a",
"[ON]": "1f51b",
"[SOON]": "1f51c",
"": "1f51d",
"": "270a",
"": "270c",
"": "1f44a",
"": "1f44d",
"": "261d",
"": "1f446",
"": "1f447",
"": "1f448",
"": "1f449",
"": "1f44b",
"": "1f44f",
"": "1f44c",
"": "1f44e",
"": "1f450"
}, s = {
"/微笑": "0",
"/撇嘴": "1",
"/色": "2",
"/发呆": "3",
"/得意": "4",
"/流泪": "5",
"/害羞": "6",
"/闭嘴": "7",
"/睡": "8",
"/大哭": "9",
"/尴尬": "10",
"/发怒": "11",
"/调皮": "12",
"/呲牙": "13",
"/惊讶": "14",
"/难过": "15",
"/酷": "16",
"/冷汗": "17",
"/抓狂": "18",
"/吐": "19",
"/偷笑": "20",
"/可爱": "21",
"/白眼": "22",
"/傲慢": "23",
"/饥饿": "24",
"/困": "25",
"/惊恐": "26",
"/流汗": "27",
"/憨笑": "28",
"/大兵": "29",
"/奋斗": "30",
"/咒骂": "31",
"/疑问": "32",
"/嘘": "33",
"/晕": "34",
"/折磨": "35",
"/衰": "36",
"/骷髅": "37",
"/敲打": "38",
"/再见": "39",
"/擦汗": "40",
"/抠鼻": "41",
"/鼓掌": "42",
"/糗大了": "43",
"/坏笑": "44",
"/左哼哼": "45",
"/右哼哼": "46",
"/哈欠": "47",
"/鄙视": "48",
"/委屈": "49",
"/快哭了": "50",
"/阴险": "51",
"/亲亲": "52",
"/吓": "53",
"/可怜": "54",
"/菜刀": "55",
"/西瓜": "56",
"/啤酒": "57",
"/篮球": "58",
"/乒乓": "59",
"/咖啡": "60",
"/饭": "61",
"/猪头": "62",
"/玫瑰": "63",
"/凋谢": "64",
"/示爱": "65",
"/爱心": "66",
"/心碎": "67",
"/蛋糕": "68",
"/闪电": "69",
"/炸弹": "70",
"/刀": "71",
"/足球": "72",
"/瓢虫": "73",
"/便便": "74",
"/月亮": "75",
"/太阳": "76",
"/礼物": "77",
"/拥抱": "78",
"/强": "79",
"/弱": "80",
"/握手": "81",
"/胜利": "82",
"/抱拳": "83",
"/勾引": "84",
"/拳头": "85",
"/差劲": "86",
"/爱你": "87",
"/NO": "88",
"/OK": "89",
"/爱情": "90",
"/飞吻": "91",
"/跳跳": "92",
"/发抖": "93",
"/怄火": "94",
"/转圈": "95",
"/磕头": "96",
"/回头": "97",
"/跳绳": "98",
"/挥手": "99",
"/激动": "100",
"/街舞": "101",
"/献吻": "102",
"/左太极": "103",
"/右太极": "104",
"/::)": "0",
"/::~": "1",
"/::B": "2",
"/::|": "3",
"/:8-)": "4",
"/::<": "5",
"/::$": "6",
"/::X": "7",
"/::Z": "8",
"/::(": "9",
"/::'(": "9",
"/::-|": "10",
"/::@": "11",
"/::P": "12",
"/::D": "13",
"/::O": "14",
"/::(": "15",
"/::+": "16",
"/:--b": "17",
"/::Q": "18",
"/::T": "19",
"/:,@P": "20",
"/:,@-D": "21",
"/::d": "22",
"/:,@o": "23",
"/::g": "24",
"/:|-)": "25",
"/::!": "26",
"/::L": "27",
"/::>": "28",
"/::,@": "29",
"/:,@f": "30",
"/::-S": "31",
"/:?": "32",
"/:,@x": "33",
"/:,@@": "34",
"/::8": "35",
"/:,@!": "36",
"/:!!!": "37",
"/:xx": "38",
"/:bye": "39",
"/:wipe": "40",
"/:dig": "41",
"/:handclap": "42",
"/:&-(": "43",
"/:B-)": "44",
"/:<@": "45",
"/:@>": "46",
"/::-O": "47",
"/:>-|": "48",
"/:P-(": "49",
"/::'|": "50",
"/:X-)": "51",
"/::*": "52",
"/:@x": "53",
"/:8*": "54",
"/:pd": "55",
"/:<W>": "56",
"/:beer": "57",
"/:basketb": "58",
"/:oo": "59",
"/:coffee": "60",
"/:eat": "61",
"/:pig": "62",
"/:rose": "63",
"/:fade": "64",
"/:showlove": "65",
"/:heart": "66",
"/:break": "67",
"/:cake": "68",
"/:li": "69",
"/:bome": "70",
"/:kn": "71",
"/:footb": "72",
"/:ladybug": "73",
"/:shit": "74",
"/:moon": "75",
"/:sun": "76",
"/:gift": "77",
"/:hug": "78",
"/:strong": "79",
"/:weak": "80",
"/:share": "81",
"/:v": "82",
"/:@)": "83",
"/:jj": "84",
"/:@@": "85",
"/:bad": "86",
"/:lvu": "87",
"/:no": "88",
"/:ok": "89",
"/:love": "90",
"/:<L>": "91",
"/:jump": "92",
"/:shake": "93",
"/:<O>": "94",
"/:circle": "95",
"/:kotow": "96",
"/:turn": "97",
"/:skip": "98",
"/:oY": "99",
"/:#-0": "100",
"/:hiphot": "101",
"/:kiss": "102",
"/:<&": "103",
"/:&>": "104"
}, o = '<span class="emoji emoji%s"></span>', u = wx.resPath + "/mpres/htmledition/images/icon/emotion/", a = '<img src="' + u + '%s.gif" width="24" height="24">';
String.prototype.emoji = function() {
var e = this.toString();
for (var t in i) while (-1 != e.indexOf(t)) e = e.replace(t, o.sprintf(i[t]));
for (var t in s) while (-1 != e.indexOf(t)) e = e.replace(t, a.sprintf(s[t]));
return e;
};
} catch (f) {
wx.jslog({
src: "common/qq/emoji.js"
}, f);
}
});define("tpl/pagebar.html.js", [], function(e, t, n) {
return '<div class="pagination">\n    <span class="page_nav_area">\n        <a href="javascript:void(0);" class="btn page_first">{firstButtonText}</a>\n        <a href="javascript:void(0);" class="btn page_prev"><i class="arrow"></i></a>\n        {if isSimple}\n            <span class="page_num">\n                <label>{initShowPage}</label>\n                <span class="num_gap">/</span>\n                <label>{endPage}</label>\n            </span>\n        {else}\n            {each startRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n            <span class="gap_prev">...</span>\n            {each midRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav js_mid">{pageIndex}</a>\n            {/each}\n            <span class="gap_next">...</span>\n            {each endRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n        {/if}\n        <a href="javascript:void(0);" class="btn page_next"><i class="arrow"></i></a>\n        <a href="javascript:void(0);" class="btn page_last">{lastButtonText}</a>            \n    </span>\n    {if (endPage>1)}\n    <span class="goto_area">\n        <input type="text">\n        <a href="javascript:void(0);" class="btn page_go">跳转</a>\n    </span>\n    {/if}\n</div>\n';
});