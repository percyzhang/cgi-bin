define("tpl/uploader.html.js", [], function(e, t, n) {
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
});define("tpl/biz_web/ui/dropdown.html.js", [], function(e, t, n) {
return '<a href="javascript:;" class="btn dropdown_switch jsDropdownBt"><label class="jsBtLabel" {if search}contenteditable="true"{/if}>{label}</label><i class="arrow"></i></a>\n<div class="dropdown_data_container jsDropdownList">\n    <ul class="dropdown_data_list">\n        {if renderHtml}\n        {renderHtml}\n        {else}\n            {each data as o index}\n            <li class="dropdown_data_item {if o.className}{o.className}{/if}">  \n                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="{o.value}" data-index="{index}" data-name="{o.name}">{o.name}</a>\n            </li>\n            {/each}        \n        {/if}\n    </ul>\n</div>\n';
});define("tpl/popup.html.js", [], function(e, t, n) {
return '<div class="dialog_wrp {className}" style="{if width}width:{width}px;{/if}{if height}height:{height}px;{/if}">\n	<div class="dialog">\n		<div class="dialog_hd">\n			<h3>{title}</h3>\n			<a href="javascript:;" onclick="return false" class="icon16_opr closed pop_closed">关闭</a>\n		</div>\n		<div class="dialog_bd">{=content}</div>\n		{if buttons && buttons.length}\n		<div class="dialog_ft">\n			{each buttons as bt index}\n            <span class="btn {bt.type} btn_input js_btn_p"><button type="button" class="js_btn" data-index="{index}">{bt.text}</button></span>\n	        {/each}\n		</div>\n		{/if}\n	</div>\n</div>{if mask}<div class="mask"><iframe frameborder="0" style="filter:progid:DXImageTransform.Microsoft.Alpha(opacity:0);position:absolute;top:0px;left:0px;width:100%;height:100%;" src="about:blank"></iframe></div>{/if}\n';
});define("common/wx/widgetBridge.js", [], function(e, t, n) {
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
});define("tpl/verifycode.html.js", [], function(e, t, n) {
return '<div class="verifycode">\n	<span class="frm_input_box"><input id="imgcode" name="imgcode" type="text" value="" class="frm_input"></span>\n	<img src="">\n	<a href="javascript:;" class="changeVerifyCode">换一张</a>\n</div>\n';
});define("common/wx/upload.js", [ "biz_web/lib/uploadify.js", "widget/upload.css", "common/wx/Tips.js", "tpl/uploader.html.js", "biz_web/lib/swfobject.js", "common/wx/dialog.js", "common/wx/Cgi.js" ], function(e, t, n) {
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
});define("common/wx/richEditor/emotion.js", [ "tpl/richEditor/emotion.html.js", "common/qq/Class.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = wx.T, s = {
url: wx.resPath + "/mpres/htmledition/images/icon/emotion/",
data: {
"0": "微笑",
"1": "撇嘴",
"2": "色",
"3": "发呆",
"4": "得意",
"5": "流泪",
"6": "害羞",
"7": "闭嘴",
"8": "睡",
"9": "大哭",
"10": "尴尬",
"11": "发怒",
"12": "调皮",
"13": "呲牙",
"14": "惊讶",
"15": "难过",
"16": "酷",
"17": "冷汗",
"18": "抓狂",
"19": "吐",
"20": "偷笑",
"21": "可爱",
"22": "白眼",
"23": "傲慢",
"24": "饥饿",
"25": "困",
"26": "惊恐",
"27": "流汗",
"28": "憨笑",
"29": "大兵",
"30": "奋斗",
"31": "咒骂",
"32": "疑问",
"33": "嘘",
"34": "晕",
"35": "折磨",
"36": "衰",
"37": "骷髅",
"38": "敲打",
"39": "再见",
"40": "擦汗",
"41": "抠鼻",
"42": "鼓掌",
"43": "糗大了",
"44": "坏笑",
"45": "左哼哼",
"46": "右哼哼",
"47": "哈欠",
"48": "鄙视",
"49": "委屈",
"50": "快哭了",
"51": "阴险",
"52": "亲亲",
"53": "吓",
"54": "可怜",
"55": "菜刀",
"56": "西瓜",
"57": "啤酒",
"58": "篮球",
"59": "乒乓",
"60": "咖啡",
"61": "饭",
"62": "猪头",
"63": "玫瑰",
"64": "凋谢",
"65": "示爱",
"66": "爱心",
"67": "心碎",
"68": "蛋糕",
"69": "闪电",
"70": "炸弹",
"71": "刀",
"72": "足球",
"73": "瓢虫",
"74": "便便",
"75": "月亮",
"76": "太阳",
"77": "礼物",
"78": "拥抱",
"79": "强",
"80": "弱",
"81": "握手",
"82": "胜利",
"83": "抱拳",
"84": "勾引",
"85": "拳头",
"86": "差劲",
"87": "爱你",
"88": "NO",
"89": "OK",
"90": "爱情",
"91": "飞吻",
"92": "跳跳",
"93": "发抖",
"94": "怄火",
"95": "转圈",
"96": "磕头",
"97": "回头",
"98": "跳绳",
"99": "挥手",
"100": "激动",
"101": "街舞",
"102": "献吻",
"103": "左太极",
"104": "右太极"
},
ext: ".gif",
replaceEmoji: function(e) {
var t, n, r = s.url, i = s.ext, o = s.data;
for (t in o) n = new RegExp("/" + o[t], "g"), e = e.replace(n, '<img src="{src}" alt="mo-{alt}"/>'.format({
src: r + t + i,
alt: o[t]
}));
return e;
}
}, o = e("tpl/richEditor/emotion.html.js"), u = e("common/qq/Class.js"), a = 24, f = 24, l = 15, c = 7, h = u.declare({
init: function(e) {
this.selector$ = e;
var t = [], n = s.url + "{k}" + s.ext, r = a, u = f, h = l, p = c;
for (var d = 0; d < p; ++d) for (var v = 0; v < h; ++v) {
var m = d * h + v;
t.push({
gifurl: n.format({
k: m
}),
title: s.data[m + ""],
bp: "background-position:" + -m * r + "px 0;"
});
}
this.selector$.html(i(o, {
edata: t
})), this._previewArea$ = this.selector$.find(".js_emotionPreviewArea"), this._initEvent();
},
getEmotionText: function(e) {
return e.replace(/<img.*?alt=["]{0,1}mo-([^"\s]*).*?>/ig, "/$1");
},
getEmotionHTML: function(e) {
var t = e.title;
return '<img src="{src}" alt="{alt}"/>'.format({
src: e.gifurl,
alt: t ? "mo-" + t : ""
});
},
_getData: function(e) {
return {
title: e.data("title"),
gifurl: e.data("gifurl")
};
},
_initEvent: function() {
var e = this;
e.selector$.click(function(t) {
var n = e._getData($(t.target));
!n.gifurl || e.clickCB && e.clickCB(n);
}).mouseover(function(t) {
var n = e._getData($(t.target));
!n.gifurl || e._previewArea$.html(e.getEmotionHTML({
title: "",
gifurl: n.gifurl
})), e.mouseoverCB && e.mouseoverCB();
}).mouseleave(function(t) {
e._previewArea$.html(""), e.mouseleaveCB && e.mouseleaveCB();
});
},
click: function(e) {
this.clickCB = e;
},
mouseleave: function(e) {
return this.mouseleaveCB = e, this;
},
mouseover: function(e) {
return this.mouseoverCB = e, this;
},
show: function() {
this.selector$.fadeIn();
},
hide: function() {
this.selector$.fadeOut();
}
});
h.emoji = s.replaceEmoji, n.exports = h;
} catch (p) {
wx.jslog({
src: "common/wx/richEditor/emotion.js"
}, p);
}
});define("common/wx/richEditor/wysiwyg.js", [ "common/wx/richEditor/editorRange.js", "common/qq/Class.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = /msie/.test(navigator.userAgent.toLowerCase()), s = "Wysiwyg", o = e("common/wx/richEditor/editorRange.js"), u = e("common/qq/Class.js"), a = u.declare({
init: function(e, t) {
var n = e, r = $('<div class="edit_area"></div>');
this._dom$ = n, this._val = "", this._lastRange = null, this._editArea$ = r, $.extend(this, t), this._initEditArea(), this._initEvent();
},
_initEvent: function() {
var e = this, t = function() {
e.__tid && clearTimeout(e.__tid), e.__tid = setTimeout(function() {
e._filterNode();
}, 10);
};
e._editArea$.bind({
keydown: function(t) {
e._keydown(t);
},
keyup: function(t) {
e._keyup(t);
},
mouseup: function(t) {
e._mouseup(t);
},
drop: t,
paste: t
});
},
_keydown: function(e) {
var t = this, n = wx.isHotkey;
if (n(e, "backspace")) {
var r = o.getSelection();
r.type && r.type.toLowerCase() === "control" && (e.preventDefault(), r.clear());
}
n(e, "enter") && (e.preventDefault(), t.insertHTML("<br/>")._saveRang()), t.keydown && t.keydown(e);
},
_keyup: function(e) {
var t = this;
t._saveRang(), t.keyup && t.keyup(e), t.save();
},
_mouseup: function(e) {
var t = this;
t._saveRang(), t.mouseup && t.mouseup(e);
return;
},
focus: function(e) {
this._editArea$.focus(), this._resotreRange();
},
_setCursorToEnd: function(e) {
if (!i || !e) return;
var t = o.getSelection();
t.extend && (t.extend(e, e.length), t.collapseToEnd && t.collapseToEnd());
},
insertHTML: function(e) {
var t = this;
t.focus();
var n = o.getRange();
if (!n) return t;
if (n.createContextualFragment) {
e += '<img style="width:1px;height:1px;">';
var r = n.createContextualFragment(e), s = r.lastChild;
n.deleteContents(), n.insertNode(r), n.setEndAfter(s), n.setStartAfter(s);
var u = o.getSelection();
u.removeAllRanges(), u.addRange(n), document.execCommand("Delete", !1, null);
} else i && />$/.test(e), n.pasteHTML && n.pasteHTML(e), n.collapse && n.collapse(!1), n.select();
return t._saveRang().save(), t;
},
save: function(e) {
var t = this, e = e || this.textFilter, n = t._editArea$.html();
return t.val = typeof e == "function" ? e(n) : n, t.change && t.change(), t;
},
_filterNode: function(e) {
var t = this, n, e = e || this.nodeFilter, r = t._editArea$.get(0), i = r.childNodes;
for (var s = i.length - 1; s >= 0; s--) {
var o = i[s];
switch (o.nodeType) {
case 1:
if (o.nodeName.toUpperCase() !== "BR") {
var u, a = !1;
(u = e && e(o)) || (u = o.textContent || o.innerText || "", a = !0);
if (u) {
var f = a ? document.createTextNode(u) : u;
!n && (n = f), r.replaceChild(f, o);
} else r.removeChild(o);
}
break;
case 3:
break;
default:
r.removeChild(o);
}
}
return t._setCursorToEnd(n), t._saveRang().save();
},
getHTML: function() {
return this._editArea$.html();
},
getText: function() {
return this.getHTML().text();
},
getContent: function() {
return this.val;
},
setContent: function(e, t) {
this.clear(), this._editArea$.html(e), this.val = t || e, this.change && this.change();
},
clear: function() {
this.val = "", this._editArea$.html("");
},
_initEditArea: function() {
var e = this;
e._editArea$.attr("class", e._dom$.attr("class")).attr("contentEditable", !0).css({
"overflow-y": "auto",
"overflow-x": "hidden"
}), e._dom$.after(e._editArea$).hide().data(s, e), e.init && e.init();
},
_saveRang: function() {
return this._lastRange = o.getRange(), this;
},
_resotreRange: function() {
var e = this._lastRange;
if (e) {
var t = o.getSelection();
if (t.addRange) t.removeAllRanges(), t.addRange(e); else {
var n = o.getRange();
n.setEndPoint && (n.setEndPoint("EndToEnd", e), n.setEndPoint("StartToStart", e)), n.select();
}
}
return this;
}
}), f = function(e, t) {
return e.data(s) || new a(e, t);
};
n.exports = f;
} catch (l) {
wx.jslog({
src: "common/wx/richEditor/wysiwyg.js"
}, l);
}
});define("tpl/richEditor/emotionEditor.html.js", [], function(e, t, n) {
return '<div class="emotion_editor">\n    <div class="edit_area js_editorArea"></div>\n    <div class="editor_toolbar">\n        {if !hideEmotion}\n        <a href="javascript:void(0);" class="icon_emotion emotion_switch js_switch">表情</a>\n        {/if}\n        {if !hideUpload}\n        <div class="upload_box">\n            <div class="upload_area">\n                <a id="emotionEditor_{gid}_" href="javascript:void(0);" class="js_upload upload_access">\n                    <i class="icon18_common upload_gray"></i>\n                    上传图片                </a>\n            </div>\n        </div>\n        {/if}\n        <p class="editor_tip js_editorTip"></p>\n        <div class="emotion_wrp js_emotionArea"></div>\n    </div>\n</div>\n\n';
});define("tpl/media/simple_appmsg.html.js", [], function(e, t, n) {
return '<div class="appmsgImgArea">\n    <img src="{appmsg_cover}" />\n</div>\n<div class="appmsgContentArea">\n    <div class="appmsgTitle">\n        {if content_url}\n        <a href="{content_url}" target="_blank">[{type_msg}]{title}</a>\n        {else}\n        <span>[{type_msg}]{title}</span>\n        {/if}\n    </div>\n    {if content_url}\n    <a href="{content_url}" target="_blank" class="appmsgDesc">{desc}</a>\n    {else}\n    <span class="appmsgDesc">{desc}</span>\n    {/if}\n</div>\n<div class="cl"></div>\n{if (show_type == 0 && !!app_name) }\n<div class="resource appmsgFrom">来自{app_name}</div>\n{/if}\n';
});