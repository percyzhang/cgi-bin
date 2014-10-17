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
});define("biz_web/lib/spin.js", [], function(e, t, n) {
try {
var r = +(new Date), i = function() {
function e(e, t) {
var n = ~~((e[a] - 1) / 2);
for (var r = 1; r <= n; r++) t(e[r * 2 - 1], e[r * 2]);
}
function t(t) {
var n = document.createElement(t || "div");
return e(arguments, function(e, t) {
n[e] = t;
}), n;
}
function n(e, t, r) {
return r && !r[x] && n(e, r), e.insertBefore(t, r || null), e;
}
function r(e, t) {
var n = [ p, t, ~~(e * 100) ].join("-"), r = "{" + p + ":" + e + "}", i;
if (!H[n]) {
for (i = 0; i < P[a]; i++) try {
j.insertRule("@" + (P[i] && "-" + P[i].toLowerCase() + "-" || "") + "keyframes " + n + "{0%{" + p + ":1}" + t + "%" + r + "to" + r + "}", j.cssRules[a]);
} catch (s) {}
H[n] = 1;
}
return n;
}
function i(e, t) {
var n = e[m], r, i;
if (n[t] !== undefined) return t;
t = t.charAt(0).toUpperCase() + t.slice(1);
for (i = 0; i < P[a]; i++) {
r = P[i] + t;
if (n[r] !== undefined) return r;
}
}
function s(t) {
return e(arguments, function(e, n) {
t[m][i(t, e) || e] = n;
}), t;
}
function o(t) {
return e(arguments, function(e, n) {
t[e] === undefined && (t[e] = n);
}), t;
}
var u = "width", a = "length", f = "radius", l = "lines", c = "trail", h = "color", p = "opacity", d = "speed", v = "shadow", m = "style", g = "height", y = "left", b = "top", w = "px", E = "childNodes", S = "firstChild", x = "parentNode", T = "position", N = "relative", C = "absolute", k = "animation", L = "transform", A = "Origin", O = "Timeout", M = "coord", _ = "#000", D = m + "Sheets", P = "webkit0Moz0ms0O".split(0), H = {}, B;
n(document.getElementsByTagName("head")[0], t(m));
var j = document[D][document[D][a] - 1], F = function(e) {
this.opts = o(e || {}, l, 12, c, 100, a, 7, u, 5, f, 10, h, _, p, .25, d, 1);
}, I = F.prototype = {
spin: function(e) {
var t = this, r = t.el = t[l](t.opts);
e && n(e, s(r, y, ~~(e.offsetWidth / 2) + w, b, ~~(e.offsetHeight / 2) + w), e[S]);
if (!B) {
var i = t.opts, o = 0, u = 20 / i[d], a = (1 - i[p]) / (u * i[c] / 100), f = u / i[l];
(function h() {
o++;
for (var e = i[l]; e; e--) {
var n = Math.max(1 - (o + e * f) % u * a, i[p]);
t[p](r, i[l] - e, n, i);
}
t[O] = t.el && window["set" + O](h, 50);
})();
}
return t;
},
stop: function() {
var e = this, t = e.el;
return window["clear" + O](e[O]), t && t[x] && t[x].removeChild(t), e.el = undefined, e;
}
};
I[l] = function(e) {
function i(n, r) {
return s(t(), T, C, u, e[a] + e[u] + w, g, e[u] + w, "background", n, "boxShadow", r, L + A, y, L, "rotate(" + ~~(360 / e[l] * E) + "deg) translate(" + e[f] + w + ",0)", "borderRadius", "100em");
}
var o = s(t(), T, N), m = r(e[p], e[c]), E = 0, S;
for (; E < e[l]; E++) S = s(t(), T, C, b, 1 + ~(e[u] / 2) + w, L, "translate3d(0,0,0)", k, m + " " + 1 / e[d] + "s linear infinite " + (1 / e[l] / e[d] * E - 1 / e[d]) + "s"), e[v] && n(S, s(i(_, "0 0 4px " + _), b, 2 + w)), n(o, n(S, i(e[h], "0 0 1px rgba(0,0,0,.1)")));
return o;
}, I[p] = function(e, t, n) {
e[E][t][m][p] = n;
};
var q = "behavior", R = "url(#default#VML)", U = "group0roundrect0fill0stroke".split(0);
return function() {
var e = s(t(U[0]), q, R), r;
if (!i(e, L) && e.adj) {
for (r = 0; r < U[a]; r++) j.addRule(U[r], q + ":" + R);
I[l] = function() {
function e() {
return s(t(U[0], M + "size", c + " " + c, M + A, -o + " " + -o), u, c, g, c);
}
function r(r, a, c) {
n(d, n(s(e(), "rotation", 360 / i[l] * r + "deg", y, ~~a), n(s(t(U[1], "arcsize", 1), u, o, g, i[u], y, i[f], b, -i[u] / 2, "filter", c), t(U[2], h, i[h], p, i[p]), t(U[3], p, 0))));
}
var i = this.opts, o = i[a] + i[u], c = 2 * o, d = e(), m = ~(i[a] + i[f] + i[u]) + w, E;
if (i[v]) for (E = 1; E <= i[l]; E++) r(E, -2, "progid:DXImage" + L + ".Microsoft.Blur(pixel" + f + "=2,make" + v + "=1," + v + p + "=.3)");
for (E = 1; E <= i[l]; E++) r(E);
return n(s(t(), "margin", m + " 0 0 " + m, T, N), d);
}, I[p] = function(e, t, n, r) {
r = r[v] && r[l] || 0, e[S][E][t + r][S][S][p] = n;
};
} else B = i(e, k);
}(), F;
}();
$.fn.spin = function(e, t) {
return this.each(function() {
var n = $(this), r = n.data();
r.spinner && (r.spinner.stop(), delete r.spinner), e !== !1 && (e = $.extend({
color: t || n.css("color")
}, $.fn.spin.presets[e] || e), r.spinner = (new i(e)).spin(this));
});
}, $.fn.spin.presets = {
tiny: {
lines: 8,
length: 2,
width: 2,
radius: 3
},
small: {
lines: 8,
length: 4,
width: 3,
radius: 5
},
large: {
lines: 10,
length: 8,
width: 4,
radius: 8
}
};
} catch (s) {
wx.jslog({
src: "biz_web/lib/spin.js"
}, s);
}
});define("tpl/biz_web/ui/checkbox.html.js", [], function(e, t, n) {
return '<label for="_checkbox_{index}" class="frm_{type}_label">\n	<i class="icon_{type}"></i>\n	<input type="{type}" class="frm_{type}" name="{name}" id="_checkbox_{index}">\n	<span class="lbl_content">{label}</span>\n</label>';
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
});define("safe/tpl/safe_check.html.js", [], function(e, t, n) {
return '<div>\n<!-- -->\n	<div class="safe_check js_mobilecheck">\n	    <div class="form">\n            <div class="inner">\n                <div class="frm_hd">\n                    <h3 class="frm_title">您的帐号开启了手机保护功能，需要输入手机验证码</h3>\n                </div>\n                <div class="frm_bd">\n                    <div class="frm_control_group">\n                        <label class="frm_label">手机号</label>\n                        <div class="frm_controls frm_vertical_pt">\n                            <p class="js_old"></p>\n                        </div>\n                    </div>\n                    <div class="frm_control_group">\n                        <label class="frm_label">验证码</label>\n                        <div class="frm_controls">\n                            <span class="frm_input_box vcode">\n                                <input type="text" placeholder="验证码" class="frm_input js_num">\n                            </span>\n                            <a href="javascript:void(0);" class="btn btn_default btn_vcode js_oldsend">获取验证码</a>\n                            <p class="frm_msg fail js_num_msg">● 验证码错误</p>\n                            <!--<div class="frm_tips">若xxxxxx，请点击</div>-->\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n	</div>\n<!-- -->\n	<div class="safe_check js_wxcheck">\n        <div class="qrcode_scan qrcode_scan_light">\n            <div class="qrcode_wrp">\n                <img class="qrcode js_qrcode" src="" alt="微信二维码" title="微信二维码" />\n            </div>\n            <div class="js_status"></div>\n        </div>\n        <p class="tc">可用管理员微信号扫码验证，同时支持非管理员微信号扫码申请，申请后需管理员验证。<a href="/cgi-bin/readtemplate?t=setting/safe-operation-guide-faq_tmpl&lang=zh_CN">操作指引</a></p>\n	</div>\n<!--steps-->\n    <div class="safe_check js_bind">\n        <div class="processor_wrp js_process"></div>\n<!--step1-->\n        <div class="form form_width_auto js_step1">\n            <div class="inner">\n                <div class="frm_hd">\n                    <h3 class="frm_title js_title">在开启微信保护前，需要先验证您的身份，请选择验证方式：</h3>\n                </div>\n                <div class="frm_control_group">\n                    <div class="frm_controls">\n                        <label class="frm_radio_label selected">\n                            <i class="icon_radio"></i>\n                            <span class="lbl_content">通过注册时登记的手机号来验证</span>\n                            <input type="radio" value="1" class="frm_radio" checked="checked">\n                        </label>\n                        <p class="frm_radio_block_desc">通过发送验证短信到你的绑定手机<span class="js_step1_num"></span>进行验证</p>\n                    </div>\n                </div>\n                <div class="frm_control_group">\n                    <div class="frm_controls">\n                        <label class="frm_radio_label">\n                            <i class="icon_radio"></i>\n                            <span class="lbl_content">通过注册时登记的身份证号来验证</span>\n                            <input type="radio" value="0" class="frm_radio">\n                        </label>\n                        <p class="frm_radio_block_desc">通过填写帐号运营者姓名、身份证号进行验证</p>\n                    </div>\n                </div>\n                <div class="frm_control_group js_option" style="display:none;">\n                    <div class="frm_controls">\n                        <label class="frm_radio_label">\n                            <i class="icon_radio"></i>\n                            <span class="lbl_content">通过登录邮箱来验证</span>\n                            <input type="radio" value="2" class="frm_radio">\n                        </label>\n                        <p class="frm_radio_block_desc">将会发送安全验证码到你的登录邮箱<span class="js_step1_email"></span>，填写正确验证码可通过验证</p>\n                    </div>\n                </div>\n            </div>\n            <div class="tool_bar border tc">\n                <a href="javascript:;" class="btn btn_primary js_step1_next">下一步</a>\n                <a href="javascript:;" class="btn btn_default js_step1_cancel">取消</a>\n            </div>\n        </div>\n<!--step2 mobile-->\n        <div class="form disableform js_setp2_mobile" style="display:none;">\n            <div class="inner">\n                <div class="frm_hd">\n                    <h3 class="frm_title">请输入手机验证码进行验证</h3>\n                </div>\n                <div class="frm_control_group">\n                    <label class="frm_label">手机号</label>\n                    <div class="frm_controls frm_vertical_pt">\n                        <p>\n                            <span class="js_old"></span>\n                            <a class="ml1e js_mobile_forget" href=\'javascript:;\'>重置手机号</a>\n                        </p>\n                    </div>\n                </div>\n                <div class="frm_control_group">\n                    <label class="frm_label">验证码</label>\n                    <div class="frm_controls">\n                        <span class="frm_input_box vcode">\n                            <input type="text" placeholder="验证码" class="frm_input js_num">\n                        </span>\n                        <a href="javascript:" class="btn btn_default btn_p20 js_oldsend">获取验证码</a>\n                    </div>\n                </div>\n            </div>\n            <div class="tool_bar border tc">\n                <a href="javascript:;" class="btn btn_default js_step2_prev">上一步</a>\n                <a href="javascript:;" class="btn btn_primary js_step2_mobilecheck">下一步</a>\n            </div>\n        </div>\n<!--step2 name-->\n        <div class="form form_owner_info js_step2_name" style="display:none;">\n            <div class="inner">\n                <div class="frm_hd">\n                    <h3 class="frm_title">请正确填写以下信息，以验证你的身份</h3>\n                </div>\n                <div class="frm_control_group">\n                    <label class="frm_label">运营者身份证姓名</label>\n                    <div class="frm_controls">\n                        <span class="frm_input_box">\n                            <input type="text" class="frm_input js_cardname">\n                        </span>\n                        <p class="frm_tips">姓名需与身份证上姓名一致</p>\n                    </div>\n                </div>\n                <div class="frm_control_group">\n                    <label class="frm_label">运营者身份证号码</label>\n                    <div class="frm_controls">\n                        <span class="frm_input_box">\n                            <input type="text" class="frm_input js_cardid">\n                        </span>\n                        <p class="frm_tips">请正确填写注册时所登记的身份证号码</p>\n                    </div>\n                </div>\n            </div>\n            <div class="tool_bar border tc">\n                <a href="javascript:;" class="btn btn_default js_step2_prev">上一步</a>\n                <a href="javascript:;" class="btn btn_primary js_step2_namecheck">下一步</a>\n            </div>\n        </div>\n<!--step2 email-->\n        <div class="page_msg large default simple js_step2_mail" style="display:none;">\n            <div class="inner group">\n                    <span class="msg_icon_wrp">\n                        <i class="icon_msg mail"></i>\n                    </span>\n                <div class="msg_content">\n                    <h4>已发送验证邮件</h4>\n                    <p>已发送验证邮件到你的注册邮箱<span class="js_mail"></span>，请填写验证码：</p>\n                    <div class="mt1e spacing frm_control_group">\n                        <label class="frm_label">邮件验证码</label>\n                        <div class="oh">\n                                <span class="frm_input_box vcode">\n                                    <input type="text" class="frm_input js_email_code">\n                                </span>\n                        </div>\n                    </div>\n                    <div class="extra_msg">\n                        <h4>没有收到邮件？</h4>\n                        <ul>\n                            <li>1. 检查你的邮箱垃圾箱</li>\n                            <li>2. 若仍未收到确认，请尝试<a href=\'javascript:;\' class=\'js_resend_mail\'>重新发送</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class="tool_bar border tc">\n                <a href="javascript:;" class="btn btn_default js_step2_prev">上一步</a>\n                <a href="javascript:;" class="btn btn_primary js_step2_mailcheck">下一步</a>\n            </div>\n        </div>\n<!--step3-->\n		<div class="js_step3" style="display:none;">\n            <div class="qrcode_scan qrcode_scan_light">\n                <div class="qrcode_wrp">\n                    <img class="qrcode js_qrcode" src="" alt="微信二维码" title="微信二维码" />\n                </div>\n                <div class="js_status">\n                </div>\n            </div>\n            <p class="js_forget tc" style="display:none;">若此微信号已无法使用，请点此<a href=\'javascript:;\'>重置绑定微信号</a></p>\n		</div>\n    </div>\n<!--tip no protect-->\n    <div class="safe_check js_off_protect">\n        <div class="page_msg large simple default">\n            <div class="inner group">\n                <span class="msg_icon_wrp">\n                    <i class="icon_msg info"></i>\n                </span>\n                <div class="msg_content">\n                    <h4>为了更好的保障公众号的安全，群发消息需开启微信保护</h4>\n                    <p>群发消息前，请你开启微信保护，开启后即可进行群发（需管理员微信号进行验证）。<a target="_blank" href="/cgi-bin/readtemplate?t=setting/safe-protect-detail-faq_tmpl&lang=zh_CN">详细说明</a></p>\n                </div>\n            </div>\n        </div>\n    </div>\n<!--tip no helper-->\n    <div class="safe_check js_no_helper">\n        <div class="page_msg large simple default">\n            <div class="inner group">\n                <span class="msg_icon_wrp">\n                    <i class="icon_msg info"></i>\n                </span>\n                <div class="msg_content">\n                    <h4>为了更好的保障公众号的安全，群发消息需开启微信保护</h4>\n                    <p>群发消息前，需先绑定管理员微信号并开启微信保护。开启后即可进行群发（需管理员微信号进行验证）。<a target="_blank" href="/cgi-bin/readtemplate?t=setting/safe-protect-detail-faq_tmpl&lang=zh_CN">详细说明</a></p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n';
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
});define("safe/Mobile.js", [ "common/wx/Tips.js", "common/wx/Cgi.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("common/wx/Tips.js"), s = e("common/wx/Cgi.js"), o = {
container: "",
timeout: "60",
mobile_num: "",
old_num: ".js_old",
old_code: ".js_num",
old_btn: ".js_oldsend",
old_submit: ".js_oldsubmit",
send_msg: "",
send_msg_txt: "",
old_callback: $.noop,
old_sendurl: "/cgi-bin/mmbizverifysms?action=get_code_default",
old_checkurl: "/cgi-bin/mmbizverifysms?action=check_code_default",
get_code_new: "/cgi-bin/mmbizverifysms?action=get_code_new",
check_code_new: "/cgi-bin/mmbizverifysms?action=check_code_new",
old_checkparam: $.noop,
before_check: null,
auto_send: !1,
auth: ""
};
function u(e) {
e = $.extend(!0, {}, o, e);
var t = "click", n = this;
n.container = typeof e.container == "object" ? e.container : $(e.container), e.mobile_num ? (n.container.find(e.old_num).text(e.mobile_num), n.container.find(e.old_btn).on(t, function() {
if (!$(this).attr("disabled")) {
var t = e.old_sendurl;
s.post({
url: t,
mask: !1,
error: function() {
i.err("发送失败");
}
}, function(t) {
var r = t.err_code;
if (r == 0) {
i.suc("发送成功"), e.send_msg && e.send_msg_txt && n.container.find(e.send_msg).text(e.send_msg_txt).show();
var s = null, o = function() {
var t = n.container.find(e.old_btn), r = +t.data("left");
if (r <= 1) s && window.clearInterval(s), t.html("重发").removeAttr("disabled").removeClass("btn_disabled").addClass("btn_default"), e.send_msg && e.send_msg_txt && n.container.find(e.send_msg).text(""); else {
var i = --r;
t.data("left", i).html(i + "秒后可重发");
}
};
n.container.find(e.old_btn).data("left", e.timeout).html(e.timeout + "秒后可重发").attr("disabled", "true").removeClass("btn_default").addClass("btn_disabled"), s = window.setInterval(o, 1e3);
} else r == "-2341" ? i.err("操作频率过快，请稍后再试。") : i.err("发送失败");
});
}
}), n.container.find(e.old_submit).on(t, function() {
var t = n.container.find(e.old_code).val().trim() || "";
if (t == "" || !/^\d{6}$/.test(t)) return i.err("请输入正确的手机验证码"), !1;
if (e.before_check && typeof e.before_check == "function" && !e.before_check.apply(this)) return !1;
s.post({
url: e.old_checkurl,
data: e.old_checkparam(t),
mask: !1,
error: e.old_callback
}, e.old_callback);
}), e.auto_send && setTimeout(function() {
n.container.find(e.old_btn).click();
}, 300)) : (n.container.find(e.old_btn).on(t, function() {
var t = n.container.find(e.old_num).val().trim() || "";
if (t == "" || !/^\d{11}$/.test(t)) i.err("请输入正确的手机号"); else {
var r = {};
r.mobile_num = t, e.auth && (r.auth = e.auth), s.post({
url: e.get_code_new,
data: r,
mask: !1,
error: function() {
i.err("发送失败");
}
}, function(t) {
var r = t.err_code;
if (r == 0) {
i.suc("发送成功");
var s = null, o = n.container.find(e.old_num), u = n.container.find(e.old_btn), a = function() {
var t = n.container.find(e.old_btn), r = +t.data("left");
if (r <= 1) s && window.clearInterval(s), t.html("重发").removeAttr("disabled").removeClass("btn_disabled").addClass("btn_default"), n.container.find(e.old_num).removeAttr("disabled"); else {
var i = --r;
t.data("left", i).html(i + "秒后可重发");
}
};
u.data("left", e.timeout).html(e.timeout + "秒后可重发").attr("disabled", "true").removeClass("btn_default").addClass("btn_disabled"), o.attr("disabled", "true"), s = window.setInterval(a, 1e3);
} else r == "-2341" ? i.err("操作频率过快，请稍后再试。") : i.err("发送失败");
});
}
}), n.container.find(e.old_submit).on(t, function() {
var t = n.container.find(e.old_code).val().trim() || "", r = n.container.find(e.old_num).val().trim() || "";
if (t == "" || !/^\d{6}$/.test(t)) return i.err("请输入正确的手机验证码"), !0;
s.post({
url: e.check_code_new,
data: e.old_checkparam(r, t),
mask: !1,
error: function() {
i.err("验证失败");
}
}, e.old_callback);
}));
}
return u.prototype = {
destroy: function() {}
}, u;
} catch (a) {
wx.jslog({
src: "safe/Mobile.js"
}, a);
}
});define("tpl/step.html.js", [], function(e, t, n) {
return '<ul class="processor_bar grid_line">\n    {each stepArr as item index}\n    <li class="{if (index+1==length)}no_extra{/if} step grid_item size1of{length} {item.cls}">\n        <h4>{item.name}</h4>\n    </li>\n    {/each}\n</ul>\n';
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
});define("safe/safe_check.js", [ "common/wx/Tips.js", "common/wx/popup.js", "common/wx/Cgi.js", "safe/Scan.js", "safe/Mobile.js", "biz_web/ui/checkbox.js", "common/wx/Step.js", "safe/tpl/safe_check.html.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("common/wx/Tips.js"), s = e("common/wx/popup.js"), o = e("common/wx/Cgi.js"), u = e("safe/Scan.js"), a = e("safe/Mobile.js"), f = e("biz_web/ui/checkbox.js"), l = e("common/wx/Step.js"), c = e("safe/tpl/safe_check.html.js");
n.exports = {
_types: {
send: '_"(群发)"'
},
check: function(e, t, n) {
n && n.onClose && n.onClose(), e.wx_protect ? e.checkType = 2 : e.checkType = 0;
var r = !0;
switch (e.source) {
case "msgs":
r = (e.protect_status & 2) == 2;
break;
case "cburl":
r = (e.protect_status & 4) == 4;
break;
case "appkey":
r = (e.protect_status & 8) == 8;
break;
default:
r = !1;
}
if (r) {
var i, s = null, o = $(c).find(".js_wxcheck").popup({
title: "微信保护",
width: 860,
onShow: function() {
s = this, $(this.$dialogWrp.get(0)).css({
"margin-top": -227
});
},
close: function() {
i && i.destroy(), n && n.onClose && n.onClose(), this.remove();
}
});
i = new u({
container: o,
type: "check",
source: e.source,
msgid: e.msgid,
distinguish: e.distinguish,
wx_name: e.wx_alias == "wx.pass" ? "" : e.wx_alias,
onconfirm: function() {
var n = {
code: this.code
};
!this.isadmin && this.distinguish ? (this.container.find(".js_wxcheck").html('<div class="page_msg large simple default"><div class="inner group"><span class="msg_icon_wrp"><i class="icon_msg_primary waiting"></i></span><div class="msg_content"><h4>已发送操作申请</h4><p>请等待公众号安全助手绑定的管理员(%s)验证操作申请，验证通过后操作将立即进行。此申请在30分钟后过期，请尽快联系管理员验证。</p></div></div><div class="tool_bar border"><a href="javascript:;" class="btn btn_primary js_unadminsend">我知道了</a></div></div>'.sprintf(this.opt.wx_name)), this.container.find(".js_wxcheck").find(".js_unadminsend").on("click", function() {
s.remove(), e.unadmin_url ? location.href = e.unadmin_url : location.reload();
}), this.container.find(".pop_closed").on("click", function() {
s.remove(), e.unadmin_url ? location.href = e.unadmin_url : location.reload();
}), s.resetPosition(), n.type = -1) : (n.type = 1, s.remove()), typeof t == "function" && t(n);
},
onrequest: function() {
typeof t == "function" && t({
code: this.code,
type: -1
});
}
});
} else typeof t == "function" && t("wx.pass");
},
off_protect_tip: function(e, t) {
t && t.onClose && t.onClose();
var n = $(c).find(".js_off_protect").popup({
title: "开启微信保护",
width: 860,
close: function() {
this.remove();
},
buttons: [ {
text: "开始",
click: function() {
this.remove(), typeof e == "function" && e();
},
type: "primary"
}, {
text: "取消",
click: function() {
t && t.onClose && t.onClose(), this.remove();
},
type: "default"
} ]
});
},
no_helper_tip: function(e, t) {
t && t.onClose && t.onClose();
var n = $(c).find(".js_no_helper").popup({
title: "开启微信保护",
width: 860,
close: function() {
this.remove();
},
buttons: [ {
text: "开始",
click: function() {
this.remove(), typeof e == "function" && e();
},
type: "primary"
}, {
text: "取消",
click: function() {
t && t.onClose && t.onClose(), this.remove();
},
type: "default"
} ]
});
},
bind: function(e, t, n, r) {
function s() {
var r = g.find(".js_step3");
r.show();
var i = new u({
container: r,
type: e,
source: t.source,
code: t.code,
dom_init: '<div class="status tips"><p>请使用微信扫描二维码进行验证</p></div>',
onconfirm: function() {
m.remove(), typeof n == "function" && n("wx.pass");
}
});
}
function f() {
var e = g.find(".js_step3"), r = e.find(".js_forget");
r.find("a").attr("href", wx.url("/misc/rebindverify?action=mail_get&safeaction=wx_mail_get&t=setting/safe-rebind")), r.show(), e.show(), p = new u({
container: e,
type: "change_protect_masssend",
source: t.source,
code: t.code,
wx_name: t.wx_alias == "wx.pass" ? "" : t.wx_alias,
onconfirm: function() {
m.remove(), typeof n == "function" && n("wx.pass");
}
});
}
r && r.onClose && r.onClose();
var h = t && t.wx_alias ? !0 : !1, p, d = "click", v, m, g = $(c).find(".js_bind").popup({
className: "dialog_process",
title: e == "bind" ? "绑定公众号安全助手" : "开启微信保护",
width: 860,
onShow: function() {
m = this, $(this.$dialogWrp.get(0)).css({
"margin-top": -227
});
},
close: function() {
r && r.onClose && r.onClose(), p && p.destroy(), this.remove();
}
});
o.post({
url: wx.url("/misc/safeassistant?action=checkwx_report"),
mask: !1
}, $.noop), v = new l({
container: g.find(".js_process"),
selected: 1,
names: [ "1. 选择验证方式", "2. 账号验证", h ? "3. 开启微信保护" : "3. 绑定微信号" ]
}), g.find(".js_step1_num").text(t && t.mobile ? t.mobile : ""), g.find(".js_step1_email").text(t && t.bind_mail ? t.bind_mail : ""), t.third_status == "1" && g.find(".js_option").show(), g.find(".frm_radio").checkbox({
multi: !1,
onChanged: function(e) {
g.find(".js_step1_next").data("type", e.val());
}
}), g.find(".js_step1_next").data("type", "1").on(d, function() {
var e = $(this).data("type");
if (e == "1" && (!t || !t.mobile)) {
i.err("手机号为空，请选择其他验证方式");
return;
}
if (e == "2" && (!t || !t.bind_mail)) {
i.err("邮箱为空，请选择其他验证方式");
return;
}
v.setStep(2), g.find(".js_step1").hide();
if (e == "1") {
var n = g.find(".js_setp2_mobile");
n.find(".js_mobile_forget").attr("href", wx.url("/misc/rebindverify?action=mail_get&safeaction=mobile_mail_get&t=setting/safe-rebind")), n.show(), n.find(".js_oldsend").click();
} else if (e == "2") {
var n = g.find(".js_step2_mail");
n.show(), n.find(".js_resend_mail").click();
} else g.find(".js_step2_name").show();
}), g.find(".js_step1_cancel").on(d, function() {
m.remove();
}), g.find(".js_step2_prev").on(d, function() {
$(this).parent().parent().hide(), v.setStep(1), g.find(".js_step1").show();
}), t && t.mobile && new a({
container: g.find(".js_setp2_mobile"),
mobile_num: t.mobile,
old_submit: ".js_step2_mobilecheck",
old_callback: function(e) {
g.find(".js_step2_mobilecheck").html("下一步").removeClass("btn_loading").attr("disabled", !1);
var n = e.err_code;
n == 0 ? (g.find(".js_setp2_mobile").hide(), v.setStep(3), t.wx_alias ? f() : s()) : i.err("验证失败");
},
old_checkparam: function(e) {
return t.code = e, t.source = "mobile", {
code_num: e
};
},
before_check: function() {
return $(this).attr("disabled") ? !1 : ($(this).html("验证中<i></i>").addClass("btn_loading").attr("disabled", !0), !0);
}
}), g.find(".js_resend_mail").on(d, function() {
o.post({
url: wx.url("/misc/rebindverify?action=send_safe_code"),
mask: !1
}, function(e) {
if (!e && !e.base_resp) {
i.err("邮件发送失败");
return;
}
switch (+e.base_resp.ret) {
case 0:
i.suc("邮件发送成功");
break;
default:
i.err("邮件发送失败");
}
});
}), g.find(".js_step2_namecheck").on(d, function() {
var e = g.find(".js_cardname"), n = g.find(".js_cardid"), r = e.val().trim(), u = n.val().trim();
if (!r) return i.err("请输入身份证姓名"), !1;
if (!u) return i.err("请输入身份证号码"), !1;
$(this).html("验证中<i></i>").addClass("btn_loading").attr("disabled", !0), o.post({
url: wx.url("/misc/safeassistant?action=check_id"),
data: {
card_name: r,
card_id: u
},
mask: !1
}, function(e) {
g.find(".js_step2_namecheck").html("下一步").removeClass("btn_loading").attr("disabled", !1);
if (!e && !e.check_flag && !e.code) {
i.err("验证失败");
return;
}
switch (+e.check_flag) {
case 1:
t.code = e.code, t.source = "id", g.find(".js_step2_name").hide(), v.setStep(3), t.wx_alias ? f() : s();
break;
case -5:
i.err("请1分钟后重新尝试");
break;
default:
i.err("验证失败");
}
});
}), g.find(".js_step2_mailcheck").on(d, function() {
var e = g.find(".js_email_code").val().trim();
if (!e) return i.err("请输入邮件验证码"), !1;
$(this).html("验证中<i></i>").addClass("btn_loading").attr("disabled", !0), o.post({
url: wx.url("/misc/safeassistant?action=check_safecode"),
data: {
safecode: e
},
mask: !1
}, function(e) {
g.find(".js_step2_mailcheck").html("下一步").removeClass("btn_loading").attr("disabled", !1);
if (!e && !e.check_flag && !e.code) {
i.err("验证失败");
return;
}
switch (+e.check_flag) {
case 1:
t.code = e.code, t.source = "safecode", g.find(".js_step2_mail").hide(), v.setStep(3), t.wx_alias ? f() : s();
break;
default:
i.err("验证失败");
}
});
});
}
};
} catch (h) {
wx.jslog({
src: "safe/safe_check.js"
}, h);
}
});define("safe/Scan.js", [ "widget/qrcode_scan.css", "common/wx/Tips.js", "common/wx/Cgi.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict", e("widget/qrcode_scan.css");
var i = e("common/wx/Tips.js"), s = e("common/wx/Cgi.js"), o = {
wx_name: "",
container: "",
type: "",
ticket: "",
source: "",
code: "",
msgid: "",
auto_msgid: !1,
auth: "",
status_container: ".js_status",
qrcode_container: ".js_qrcode",
timeout: 1e3,
checktimeout: 1200,
onshow: null,
onscaned: null,
oncancel: null,
onconfirm: null,
onrequest: null,
dom_init: "",
distinguish: !1,
default_initdom: !1
};
function u(e) {
e = $.extend(!0, {}, o, e);
var t = {
init: '<div class="status tips"><p>请使用微信号%s(已绑定公众号安全助手)扫描二维码进行验证</p></div>'.sprintf(e.wx_name),
multi_init: '<div class="status tips"><p>请使用个人微信号（包括管理员微信号%s）扫描二维码进行验证</p></div>'.sprintf(e.wx_name),
suc: '<div class="status"><i class="icon_qrcode_scan succ"></i><div class="status_txt"><h4>扫描成功</h4><p>请在微信上点击确认即可</p></div></div>',
cannel: '<div class="status"><i class="icon_qrcode_scan warn"></i><div class="status_txt"><h4>您已取消此次操作</h4><p>您可以重新扫描验证，或关闭窗口</p></div></div>',
ok: '<div class="status"><i class="icon_qrcode_scan succ"></i><div class="status_txt"><h4>确认成功</h4></div></div>',
request: "<h2>已发送操作申请，请耐心等待</h2><p>等待公众号助手%s审核您的申请，您也可主动联系ta，请ta通过您的申请</p>".sprintf(e.wx_name)
}, n = this;
n.container = typeof e.container == "object" ? e.container : $(e.container), n.status_container = n.container.find(e.status_container), n.qrcode_container = n.container.find(e.qrcode_container), n.opt = e, n.opt.onshow && typeof n.opt.onshow == "function" ? n.opt.onshow.apply(n) : n.status_container.html(n.opt.dom_init ? n.opt.dom_init : n.opt.distinguish && !n.opt.default_initdom ? t.multi_init : t.init), n.timer = null, n.ctimer = null, n.json = {}, n.retcode = 0, n.retcodes = {
0: !0
};
var r = {
OK: 0,
ERR_SYS: -1,
ERR_ARGS: -2,
ERR_APP_BLOCK: -10,
UUID_SCANNING: 401,
UUID_EXPIRED: 402,
UUID_CANCELED: 403,
UUID_SCANED: 404,
UUID_CONFIRM: 405,
UUID_INIT: 406,
UUID_REQUEST: 407,
UUID_ERROR: 500
}, u = function() {
n.opt.uuid ? s.post({
url: wx.url("/safe/safeuuid?timespam=" + (new Date).getTime()),
data: {
uuid: n.opt.uuid,
action: "json",
type: "json"
},
mask: !1
}, function(e) {
n.json = e, n.retcode = e && !!e.errcode ? +e.errcode : 0;
}) : (n.timer && window.clearInterval(n.timer), n.ctimer && window.clearInterval(n.ctimer), f());
}, a = function() {
if (!n.retcodes[n.retcode]) {
n.retcodes[n.retcode] = !0;
switch (n.retcode) {
case r.UUID_ERROR:
n.timer && window.clearInterval(n.timer), n.ctimer && window.clearInterval(n.ctimer), f();
return;
case r.UUID_EXPIRED:
n.timer && window.clearInterval(n.timer), n.ctimer && window.clearInterval(n.ctimer), f();
return;
case r.UUID_SCANED:
n.retcodes[r.UUID_CANCELED] = !1, n.opt.onscaned && typeof n.opt.onscaned == "function" ? n.opt.onscaned.apply(n) : n.status_container.html(t.suc);
break;
case r.UUID_CANCELED:
n.retcodes[r.UUID_SCANED] = !1, n.opt.oncancel && typeof n.opt.oncancel == "function" ? n.opt.oncancel.apply(n) : n.status_container.html(t.cannel);
break;
case r.UUID_CONFIRM:
n.timer && window.clearInterval(n.timer), n.ctimer && window.clearInterval(n.ctimer);
var e = n.json.code;
e && (n.code = e), n.opt.auto_msgid && (n.msgid = n.opt.msgid);
if (n.opt.distinguish) {
var o = function() {
var e = {
action: "get_uuid",
uuid: n.opt.uuid
};
n.opt.auth && (e.auth = n.opt.auth), s.post({
url: wx.url("/misc/safeassistant"),
data: e,
mask: !1
}, {
done: function(e) {
e && e.isadmin == 0 ? (n.isadmin = !1, n.distinguish = !0) : (n.isadmin = !0, n.distinguish = !0), n.opt.onconfirm && typeof n.opt.onconfirm == "function" ? n.opt.onconfirm.apply(n) : i.suc("已确认成功");
},
fail: function(e) {
setTimeout(o, 300);
}
});
};
setTimeout(o, 0);
} else n.status_container.html(t.ok), n.opt.onconfirm && typeof n.opt.onconfirm == "function" ? n.opt.onconfirm.apply(n) : i.suc("已确认成功");
break;
case r.UUID_REQUEST:
var e = n.json.code;
e && (n.code = e), n.timer && window.clearInterval(n.timer), n.ctimer && window.clearInterval(n.ctimer), n.container.html(t.request), n.opt.onrequest && typeof n.opt.onrequest == "function" ? n.opt.onrequest.apply(n) : i.suc("已申请成功");
break;
default:
}
}
}, f = function() {
var e = {
action: "get_ticket"
};
n.opt.auth && (e.auth = n.opt.auth), s.post({
url: wx.url("/misc/safeassistant"),
data: e,
mask: !1
}, {
done: function(e) {
e && e.base_resp && e.ticket && e.base_resp.ret == 0 ? (n.opt.ticket = e.ticket, n.opt.auto_msgid && e.operation_seq && (n.opt.msgid = e.operation_seq), s.post({
url: wx.url("/safe/safeqrconnect"),
data: {
appid: "wx3a432d2dbe2442ce",
scope: "snsapi_contact",
state: "0",
redirect_uri: "https://mp.weixin.qq.com",
login_type: "safe_center",
f: "json",
type: "json"
},
mask: !1
}, function(e) {
if (e && e.uuid) {
n.opt.uuid = e.uuid;
var t = "/safe/safeqrcode?ticket=%s&uuid=%s&action=%s".sprintf(n.opt.ticket, n.opt.uuid, n.opt.type);
n.opt.code && (t = t + "&code=" + n.opt.code), n.opt.source && (t = t + "&type=" + n.opt.source), n.opt.auth && (t = t + "&auth=" + n.opt.auth), n.opt.msgid && (t = t + "&msgid=" + n.opt.msgid), n.qrcode_container.attr("src", t), n.timer = setInterval(u, n.opt.timeout), n.ctimer = setInterval(a, n.opt.checktimeout), n.json = {}, n.retcode = 0, n.retcodes = {
0: !0
};
}
})) : setTimeout(function() {
f();
}, 1e3);
},
fail: function(e) {
setTimeout(function() {
f();
}, 1e3);
}
});
};
f();
}
return u.prototype = {
destroy: function() {
return this.timer && window.clearInterval(this.timer), this.ctimer && window.clearInterval(this.ctimer), this;
}
}, u;
} catch (a) {
wx.jslog({
src: "safe/Scan.js"
}, a);
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
});define("setting/safehelper.js", [ "common/wx/Tips.js", "common/wx/popup.js", "common/wx/Step.js", "safe/Scan.js", "safe/safe_check.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = template.render, s = e("common/wx/Tips.js"), o = e("common/wx/popup.js"), u = e("common/wx/Step.js"), a = e("safe/Scan.js"), f = e("safe/safe_check.js"), l = wx.cgiData || {}, c = {
wx_alias: "",
appid: "",
ticket: "",
wxbind_status: -1
}, h = $.extend({}, c, l), p = function() {
function e() {
$(".js_container").html(i("tpl_main", {
data: h
})), $("#js_bind").click(function() {
f.bind("bind", h.strategy_status, function(e) {
s.suc("已成功绑定公众号安全助手"), setTimeout(function() {
location.reload();
}, 300);
});
}), $("#js_rebind").click(function() {
var e = null, t = null, n = $(".js_dialog").popup({
title: "修改绑定微信号",
width: 860,
className: "dialog_process",
close: function() {
e && e.destroy(), this.remove();
},
buttons: [],
onShow: function() {
t = this, $(this.$dialogWrp.get(0)).css({
"margin-top": -302
});
}
}), r = new u({
container: n.find(".js_head"),
selected: 1,
names: [ "1. 验证原微信号", "2. 绑定新微信号" ]
});
n.find(".js_change").show(), e = new a({
container: n,
type: "check",
source: "modify",
wx_name: h.wx_alias,
onconfirm: function() {
s.suc("已成功验证原微信号"), n.find(".js_nb_tip").show(), r.setStep(2);
var t = this.code;
t && (e = new a({
container: n,
type: "rebind",
code: t,
dom_init: '<div class="status tips"><p>请使用微信扫描二维码进行验证</p></div>',
onconfirm: function() {
s.suc("已成功绑定公众号安全助手"), setTimeout(function() {
location.reload();
}, 300);
}
}));
}
});
});
}
return {
init: e
};
}();
p.init();
} catch (d) {
wx.jslog({
src: "setting/safehelper.js"
}, d);
}
});