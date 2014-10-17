define("tpl/dialog.html.js", [], function(e, t, n) {
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
});// moment.js
define("biz_common/moment.js", [], function(e, t, n) {
try {
var r = +(new Date), i, s = "2.0.0", o = Math.round, u, a = {}, f = typeof n != "undefined" && n.exports, l = /^\/?Date\((\-?\d+)/i, c = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, h = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, p = /([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi, d = /\d\d?/, v = /\d{1,3}/, m = /\d{3}/, g = /\d{1,4}/, y = /[+\-]?\d{1,6}/, b = /[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i, w = /Z|[\+\-]\d\d:?\d\d/i, E = /T/i, S = /[\+\-]?\d+(\.\d{1,3})?/, x = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, T = "YYYY-MM-DDTHH:mm:ssZ", N = [ [ "HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/ ], [ "HH:mm:ss", /(T| )\d\d:\d\d:\d\d/ ], [ "HH:mm", /(T| )\d\d:\d\d/ ], [ "HH", /(T| )\d\d/ ] ], C = /([\+\-]|\d\d)/gi, k = "Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"), L = {
Milliseconds: 1,
Seconds: 1e3,
Minutes: 6e4,
Hours: 36e5,
Days: 864e5,
Months: 2592e6,
Years: 31536e6
}, A = {}, O = "DDD w W M D d".split(" "), M = "M D H h m s w W".split(" "), _ = {
M: function() {
return this.month() + 1;
},
MMM: function(e) {
return this.lang().monthsShort(this, e);
},
MMMM: function(e) {
return this.lang().months(this, e);
},
D: function() {
return this.date();
},
DDD: function() {
return this.dayOfYear();
},
d: function() {
return this.day();
},
dd: function(e) {
return this.lang().weekdaysMin(this, e);
},
ddd: function(e) {
return this.lang().weekdaysShort(this, e);
},
dddd: function(e) {
return this.lang().weekdays(this, e);
},
w: function() {
return this.week();
},
W: function() {
return this.isoWeek();
},
YY: function() {
return q(this.year() % 100, 2);
},
YYYY: function() {
return q(this.year(), 4);
},
YYYYY: function() {
return q(this.year(), 5);
},
a: function() {
return this.lang().meridiem(this.hours(), this.minutes(), !0);
},
A: function() {
return this.lang().meridiem(this.hours(), this.minutes(), !1);
},
H: function() {
return this.hours();
},
h: function() {
return this.hours() % 12 || 12;
},
m: function() {
return this.minutes();
},
s: function() {
return this.seconds();
},
S: function() {
return ~~(this.milliseconds() / 100);
},
SS: function() {
return q(~~(this.milliseconds() / 10), 2);
},
SSS: function() {
return q(this.milliseconds(), 3);
},
Z: function() {
var e = -this.zone(), t = "+";
return e < 0 && (e = -e, t = "-"), t + q(~~(e / 60), 2) + ":" + q(~~e % 60, 2);
},
ZZ: function() {
var e = -this.zone(), t = "+";
return e < 0 && (e = -e, t = "-"), t + q(~~(10 * e / 6), 4);
},
X: function() {
return this.unix();
}
};
function D(e, t) {
return function(n) {
return q(e.call(this, n), t);
};
}
function P(e) {
return function(t) {
return this.lang().ordinal(e.call(this, t));
};
}
while (O.length) u = O.pop(), _[u + "o"] = P(_[u]);
while (M.length) u = M.pop(), _[u + u] = D(_[u], 2);
_.DDDD = D(_.DDD, 3);
function H() {}
function B(e) {
F(this, e);
}
function j(e) {
var t = this._data = {}, n = e.years || e.year || e.y || 0, r = e.months || e.month || e.M || 0, i = e.weeks || e.week || e.w || 0, s = e.days || e.day || e.d || 0, o = e.hours || e.hour || e.h || 0, u = e.minutes || e.minute || e.m || 0, a = e.seconds || e.second || e.s || 0, f = e.milliseconds || e.millisecond || e.ms || 0;
this._milliseconds = f + a * 1e3 + u * 6e4 + o * 36e5, this._days = s + i * 7, this._months = r + n * 12, t.milliseconds = f % 1e3, a += I(f / 1e3), t.seconds = a % 60, u += I(a / 60), t.minutes = u % 60, o += I(u / 60), t.hours = o % 24, s += I(o / 24), s += i * 7, t.days = s % 30, r += I(s / 30), t.months = r % 12, n += I(r / 12), t.years = n;
}
function F(e, t) {
for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
return e;
}
function I(e) {
return e < 0 ? Math.ceil(e) : Math.floor(e);
}
function q(e, t) {
var n = e + "";
while (n.length < t) n = "0" + n;
return n;
}
function R(e, t, n) {
var r = t._milliseconds, i = t._days, s = t._months, o;
r && e._d.setTime(+e + r * n), i && e.date(e.date() + i * n), s && (o = e.date(), e.date(1).month(e.month() + s * n).date(Math.min(o, e.daysInMonth())));
}
function U(e) {
return Object.prototype.toString.call(e) === "[object Array]";
}
function z(e, t) {
var n = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), i = 0, s;
for (s = 0; s < n; s++) ~~e[s] !== ~~t[s] && i++;
return i + r;
}
H.prototype = {
set: function(e) {
var t, n;
for (n in e) t = e[n], typeof t == "function" ? this[n] = t : this["_" + n] = t;
},
_months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
months: function(e) {
return this._months[e.month()];
},
_monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
monthsShort: function(e) {
return this._monthsShort[e.month()];
},
monthsParse: function(e) {
var t, n, r, s;
this._monthsParse || (this._monthsParse = []);
for (t = 0; t < 12; t++) {
this._monthsParse[t] || (n = i([ 2e3, t ]), r = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[t] = new RegExp(r.replace(".", ""), "i"));
if (this._monthsParse[t].test(e)) return t;
}
},
_weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
weekdays: function(e) {
return this._weekdays[e.day()];
},
_weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
weekdaysShort: function(e) {
return this._weekdaysShort[e.day()];
},
_weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
weekdaysMin: function(e) {
return this._weekdaysMin[e.day()];
},
_longDateFormat: {
LT: "h:mm A",
L: "MM/DD/YYYY",
LL: "MMMM D YYYY",
LLL: "MMMM D YYYY LT",
LLLL: "dddd, MMMM D YYYY LT"
},
longDateFormat: function(e) {
var t = this._longDateFormat[e];
return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
return e.slice(1);
}), this._longDateFormat[e] = t), t;
},
meridiem: function(e, t, n) {
return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
},
_calendar: {
sameDay: "[Today at] LT",
nextDay: "[Tomorrow at] LT",
nextWeek: "dddd [at] LT",
lastDay: "[Yesterday at] LT",
lastWeek: "[last] dddd [at] LT",
sameElse: "L"
},
calendar: function(e, t) {
var n = this._calendar[e];
return typeof n == "function" ? n.apply(t) : n;
},
_relativeTime: {
future: "in %s",
past: "%s ago",
s: "a few seconds",
m: "a minute",
mm: "%d minutes",
h: "an hour",
hh: "%d hours",
d: "a day",
dd: "%d days",
M: "a month",
MM: "%d months",
y: "a year",
yy: "%d years"
},
relativeTime: function(e, t, n, r) {
var i = this._relativeTime[n];
return typeof i == "function" ? i(e, t, n, r) : i.replace(/%d/i, e);
},
pastFuture: function(e, t) {
var n = this._relativeTime[e > 0 ? "future" : "past"];
return typeof n == "function" ? n(t) : n.replace(/%s/i, t);
},
ordinal: function(e) {
return this._ordinal.replace("%d", e);
},
_ordinal: "%d",
preparse: function(e) {
return e;
},
postformat: function(e) {
return e;
},
week: function(e) {
return it(e, this._week.dow, this._week.doy);
},
_week: {
dow: 0,
doy: 6
}
};
function W(e, t) {
return t.abbr = e, a[e] || (a[e] = new H), a[e].set(t), a[e];
}
function X(t) {
return t ? (!a[t] && f && e("./lang/" + t), a[t]) : i.fn._lang;
}
function V(e) {
return e.match(/\[.*\]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function $(e) {
var t = e.match(c), n, r;
for (n = 0, r = t.length; n < r; n++) _[t[n]] ? t[n] = _[t[n]] : t[n] = V(t[n]);
return function(i) {
var s = "";
for (n = 0; n < r; n++) s += typeof t[n].call == "function" ? t[n].call(i, e) : t[n];
return s;
};
}
function J(e, t) {
function n(t) {
return e.lang().longDateFormat(t) || t;
}
var r = 5;
while (r-- && h.test(t)) t = t.replace(h, n);
return A[t] || (A[t] = $(t)), A[t](e);
}
function K(e) {
switch (e) {
case "DDDD":
return m;
case "YYYY":
return g;
case "YYYYY":
return y;
case "S":
case "SS":
case "SSS":
case "DDD":
return v;
case "MMM":
case "MMMM":
case "dd":
case "ddd":
case "dddd":
case "a":
case "A":
return b;
case "X":
return S;
case "Z":
case "ZZ":
return w;
case "T":
return E;
case "MM":
case "DD":
case "YY":
case "HH":
case "hh":
case "mm":
case "ss":
case "M":
case "D":
case "d":
case "H":
case "h":
case "m":
case "s":
return d;
default:
return new RegExp(e.replace("\\", ""));
}
}
function Q(e, t, n) {
var r, i, s = n._a;
switch (e) {
case "M":
case "MM":
s[1] = t == null ? 0 : ~~t - 1;
break;
case "MMM":
case "MMMM":
r = X(n._l).monthsParse(t), r != null ? s[1] = r : n._isValid = !1;
break;
case "D":
case "DD":
case "DDD":
case "DDDD":
t != null && (s[2] = ~~t);
break;
case "YY":
s[0] = ~~t + (~~t > 68 ? 1900 : 2e3);
break;
case "YYYY":
case "YYYYY":
s[0] = ~~t;
break;
case "a":
case "A":
n._isPm = (t + "").toLowerCase() === "pm";
break;
case "H":
case "HH":
case "h":
case "hh":
s[3] = ~~t;
break;
case "m":
case "mm":
s[4] = ~~t;
break;
case "s":
case "ss":
s[5] = ~~t;
break;
case "S":
case "SS":
case "SSS":
s[6] = ~~(("0." + t) * 1e3);
break;
case "X":
n._d = new Date(parseFloat(t) * 1e3);
break;
case "Z":
case "ZZ":
n._useUTC = !0, r = (t + "").match(C), r && r[1] && (n._tzh = ~~r[1]), r && r[2] && (n._tzm = ~~r[2]), r && r[0] === "+" && (n._tzh = -n._tzh, n._tzm = -n._tzm);
}
t == null && (n._isValid = !1);
}
function G(e) {
var t, n, r = [];
if (e._d) return;
for (t = 0; t < 7; t++) e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
r[3] += e._tzh || 0, r[4] += e._tzm || 0, n = new Date(0), e._useUTC ? (n.setUTCFullYear(r[0], r[1], r[2]), n.setUTCHours(r[3], r[4], r[5], r[6])) : (n.setFullYear(r[0], r[1], r[2]), n.setHours(r[3], r[4], r[5], r[6])), e._d = n;
}
function Y(e) {
var t = e._f.match(c), n = e._i, r, i;
e._a = [];
for (r = 0; r < t.length; r++) i = (K(t[r]).exec(n) || [])[0], i && (n = n.slice(n.indexOf(i) + i.length)), _[t[r]] && Q(t[r], i, e);
e._isPm && e._a[3] < 12 && (e._a[3] += 12), e._isPm === !1 && e._a[3] === 12 && (e._a[3] = 0), G(e);
}
function Z(e) {
var t, n, r, i = 99, s, o, u;
while (e._f.length) {
t = F({}, e), t._f = e._f.pop(), Y(t), n = new B(t);
if (n.isValid()) {
r = n;
break;
}
u = z(t._a, n.toArray()), u < i && (i = u, r = n);
}
F(e, r);
}
function et(e) {
var t, n = e._i;
if (x.exec(n)) {
e._f = "YYYY-MM-DDT";
for (t = 0; t < 4; t++) if (N[t][1].exec(n)) {
e._f += N[t][0];
break;
}
w.exec(n) && (e._f += " Z"), Y(e);
} else e._d = new Date(n);
}
function tt(e) {
var t = e._i, n = l.exec(t);
t === undefined ? e._d = new Date : n ? e._d = new Date(+n[1]) : typeof t == "string" ? et(e) : U(t) ? (e._a = t.slice(0), G(e)) : e._d = t instanceof Date ? new Date(+t) : new Date(t);
}
function nt(e, t, n, r, i) {
return i.relativeTime(t || 1, !!n, e, r);
}
function rt(e, t, n) {
var r = o(Math.abs(e) / 1e3), i = o(r / 60), s = o(i / 60), u = o(s / 24), a = o(u / 365), f = r < 45 && [ "s", r ] || i === 1 && [ "m" ] || i < 45 && [ "mm", i ] || s === 1 && [ "h" ] || s < 22 && [ "hh", s ] || u === 1 && [ "d" ] || u <= 25 && [ "dd", u ] || u <= 45 && [ "M" ] || u < 345 && [ "MM", o(u / 30) ] || a === 1 && [ "y" ] || [ "yy", a ];
return f[2] = t, f[3] = e > 0, f[4] = n, nt.apply({}, f);
}
function it(e, t, n) {
var r = n - t, s = n - e.day();
return s > r && (s -= 7), s < r - 7 && (s += 7), Math.ceil(i(e).add("d", s).dayOfYear() / 7);
}
function st(e) {
var t = e._i, n = e._f;
return t === null || t === "" ? null : (typeof t == "string" && (e._i = t = X().preparse(t)), i.isMoment(t) ? (e = F({}, t), e._d = new Date(+t._d)) : n ? U(n) ? Z(e) : Y(e) : tt(e), new B(e));
}
i = function(e, t, n) {
return st({
_i: e,
_f: t,
_l: n,
_isUTC: !1
});
}, i.utc = function(e, t, n) {
return st({
_useUTC: !0,
_isUTC: !0,
_l: n,
_i: e,
_f: t
});
}, i.unix = function(e) {
return i(e * 1e3);
}, i.duration = function(e, t) {
var n = i.isDuration(e), r = typeof e == "number", s = n ? e._data : r ? {} : e, o;
return r && (t ? s[t] = e : s.milliseconds = e), o = new j(s), n && e.hasOwnProperty("_lang") && (o._lang = e._lang), o;
}, i.version = s, i.defaultFormat = T, i.lang = function(e, t) {
var n;
if (!e) return i.fn._lang._abbr;
t ? W(e, t) : a[e] || X(e), i.duration.fn._lang = i.fn._lang = X(e);
}, i.langData = function(e) {
return e && e._lang && e._lang._abbr && (e = e._lang._abbr), X(e);
}, i.isMoment = function(e) {
return e instanceof B;
}, i.isDuration = function(e) {
return e instanceof j;
}, i.fn = B.prototype = {
clone: function() {
return i(this);
},
valueOf: function() {
return +this._d;
},
unix: function() {
return Math.floor(+this._d / 1e3);
},
toString: function() {
return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
},
toDate: function() {
return this._d;
},
toJSON: function() {
return i.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
},
toArray: function() {
var e = this;
return [ e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds() ];
},
isValid: function() {
return this._isValid == null && (this._a ? this._isValid = !z(this._a, (this._isUTC ? i.utc(this._a) : i(this._a)).toArray()) : this._isValid = !isNaN(this._d.getTime())), !!this._isValid;
},
utc: function() {
return this._isUTC = !0, this;
},
local: function() {
return this._isUTC = !1, this;
},
format: function(e) {
var t = J(this, e || i.defaultFormat);
return this.lang().postformat(t);
},
add: function(e, t) {
var n;
return typeof e == "string" ? n = i.duration(+t, e) : n = i.duration(e, t), R(this, n, 1), this;
},
subtract: function(e, t) {
var n;
return typeof e == "string" ? n = i.duration(+t, e) : n = i.duration(e, t), R(this, n, -1), this;
},
diff: function(e, t, n) {
var r = this._isUTC ? i(e).utc() : i(e).local(), s = (this.zone() - r.zone()) * 6e4, o, u;
return t && (t = t.replace(/s$/, "")), t === "year" || t === "month" ? (o = (this.daysInMonth() + r.daysInMonth()) * 432e5, u = (this.year() - r.year()) * 12 + (this.month() - r.month()), u += (this - i(this).startOf("month") - (r - i(r).startOf("month"))) / o, t === "year" && (u /= 12)) : (o = this - r - s, u = t === "second" ? o / 1e3 : t === "minute" ? o / 6e4 : t === "hour" ? o / 36e5 : t === "day" ? o / 864e5 : t === "week" ? o / 6048e5 : o), n ? u : I(u);
},
from: function(e, t) {
return i.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!t);
},
fromNow: function(e) {
return this.from(i(), e);
},
calendar: function() {
var e = this.diff(i().startOf("day"), "days", !0), t = e < -6 ? "sameElse" : e < -1 ? "lastWeek" : e < 0 ? "lastDay" : e < 1 ? "sameDay" : e < 2 ? "nextDay" : e < 7 ? "nextWeek" : "sameElse";
return this.format(this.lang().calendar(t, this));
},
isLeapYear: function() {
var e = this.year();
return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
},
isDST: function() {
return this.zone() < i([ this.year() ]).zone() || this.zone() < i([ this.year(), 5 ]).zone();
},
day: function(e) {
var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
return e == null ? t : this.add({
d: e - t
});
},
startOf: function(e) {
e = e.replace(/s$/, "");
switch (e) {
case "year":
this.month(0);
case "month":
this.date(1);
case "week":
case "day":
this.hours(0);
case "hour":
this.minutes(0);
case "minute":
this.seconds(0);
case "second":
this.milliseconds(0);
}
return e === "week" && this.day(0), this;
},
endOf: function(e) {
return this.startOf(e).add(e.replace(/s?$/, "s"), 1).subtract("ms", 1);
},
isAfter: function(e, t) {
return t = typeof t != "undefined" ? t : "millisecond", +this.clone().startOf(t) > +i(e).startOf(t);
},
isBefore: function(e, t) {
return t = typeof t != "undefined" ? t : "millisecond", +this.clone().startOf(t) < +i(e).startOf(t);
},
isSame: function(e, t) {
return t = typeof t != "undefined" ? t : "millisecond", +this.clone().startOf(t) === +i(e).startOf(t);
},
zone: function() {
return this._isUTC ? 0 : this._d.getTimezoneOffset();
},
daysInMonth: function() {
return i.utc([ this.year(), this.month() + 1, 0 ]).date();
},
dayOfYear: function(e) {
var t = o((i(this).startOf("day") - i(this).startOf("year")) / 864e5) + 1;
return e == null ? t : this.add("d", e - t);
},
isoWeek: function(e) {
var t = it(this, 1, 4);
return e == null ? t : this.add("d", (e - t) * 7);
},
week: function(e) {
var t = this.lang().week(this);
return e == null ? t : this.add("d", (e - t) * 7);
},
lang: function(e) {
return e === undefined ? this._lang : (this._lang = X(e), this);
}
};
function ot(e, t) {
i.fn[e] = i.fn[e + "s"] = function(e) {
var n = this._isUTC ? "UTC" : "";
return e != null ? (this._d["set" + n + t](e), this) : this._d["get" + n + t]();
};
}
for (u = 0; u < k.length; u++) ot(k[u].toLowerCase().replace(/s$/, ""), k[u]);
ot("year", "FullYear"), i.fn.days = i.fn.day, i.fn.weeks = i.fn.week, i.fn.isoWeeks = i.fn.isoWeek, i.duration.fn = j.prototype = {
weeks: function() {
return I(this.days() / 7);
},
valueOf: function() {
return this._milliseconds + this._days * 864e5 + this._months * 2592e6;
},
humanize: function(e) {
var t = +this, n = rt(t, !e, this.lang());
return e && (n = this.lang().pastFuture(t, n)), this.lang().postformat(n);
},
lang: i.fn.lang
};
function ut(e) {
i.duration.fn[e] = function() {
return this._data[e];
};
}
function at(e, t) {
i.duration.fn["as" + e] = function() {
return +this / t;
};
}
for (u in L) L.hasOwnProperty(u) && (at(u, L[u]), ut(u.toLowerCase()));
return at("Weeks", 6048e5), i.lang("zh-cn", {
months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
weekdaysMin: "日_一_二_三_四_五_六".split("_"),
longDateFormat: {
LT: "Ah点mm",
L: "YYYY年MMMD日",
LL: "YYYY年MMMD日",
LLL: "YYYY年MMMD日LT",
LLLL: "YYYY年MMMD日ddddLT",
l: "YYYY年MMMD日",
ll: "YYYY年MMMD日",
lll: "YYYY年MMMD日LT",
llll: "YYYY年MMMD日ddddLT"
},
meridiem: function(e, t, n) {
return e < 9 ? "早上" : e < 11 && t < 30 ? "上午" : e < 13 && t < 30 ? "中午" : e < 18 ? "下午" : "晚上";
},
calendar: {
sameDay: "[今天]LT",
nextDay: "[明天]LT",
nextWeek: "[下]ddddLT",
lastDay: "[昨天]LT",
lastWeek: "[上]ddddLT",
sameElse: "L"
},
ordinal: function(e, t) {
switch (t) {
case "d":
case "D":
case "DDD":
return e + "日";
case "M":
return e + "月";
case "w":
case "W":
return e + "周";
default:
return e;
}
},
relativeTime: {
future: "%s内",
past: "%s前",
s: "几秒",
m: "1分钟",
mm: "%d分钟",
h: "1小时",
hh: "%d小时",
d: "1天",
dd: "%d天",
M: "1个月",
MM: "%d个月",
y: "1年",
yy: "%d年"
}
}), i;
} catch (ft) {
wx.jslog({
src: "biz_common/moment.js"
}, ft);
}
});define("ad_system/client_index.js", [ "common/wx/dialog.js", "biz_common/moment.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("common/wx/dialog.js"), s = e("biz_common/moment.js");
$("#time").text(s.unix(wx.cgiData.time).format("YYYY年MM月DD日")), wx.cgiData.status == 0 ? $("#word").text("未开通") : wx.cgiData.status == 1 ? $("#word").text("审核中") : wx.cgiData.status == 2 && $("#word").text("审核失败"), $("#open").click(function(e) {
if (wx.cgiData.wxVerify || wx.cgiData.qVerify) {
if (wx.cgiData.orgName) return !0;
i.show({
type: "warn",
msg: "暂时无法申请开通广告主功能|你的微信认证不是在公众平台按正常流程申请的，系统无法拉取到你的认证信息。若需要补充微信认证信息，请申请%s".sprintf("<a href='/merchant/store?action=detail&t=wxverify/detail&info=verify&token=" + wx.data.t + "&lang=" + wx.data.lang + "' target='_blank'>认证年审</a>。"),
buttons: [ {
text: "确定",
click: function() {
this.hide();
}
} ]
});
} else i.show({
type: "warn",
msg: "你尚未微信认证|微信认证成功后可申请开通广告主功能",
buttons: [ {
text: "去认证",
click: function() {
window.open(wx.url("/merchant/store?action=detail&t=wxverify/detail&info=verify"), "blank"), this.hide();
}
}, {
text: "取消",
type: "normal",
click: function() {
this.hide();
}
} ]
});
return !1;
});
} catch (o) {
wx.jslog({
src: "ad_system/client_index.js"
}, o);
}
});