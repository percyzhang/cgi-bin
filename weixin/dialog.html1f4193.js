define("biz_web/lib/spin.js", [], function(e, t, n) {
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
});define("tpl/biz_web/ui/checkbox.html.js", [], function(e, t, n) {
return '<label for="_checkbox_{index}" class="frm_{type}_label">\n	<i class="icon_{type}"></i>\n	<input type="{type}" class="frm_{type}" name="{name}" id="_checkbox_{index}">\n	<span class="lbl_content">{label}</span>\n</label>';
});define("tpl/popover.html.js", [], function(e, t, n) {
return '<div class="popover">\n    <div class="popover_inner">\n        <div class="popover_content jsPopOverContent">{=content}</div>\n\n        {if close}<a href="javascript:;" class="popover_close icon16_common close_flat jsPopoverClose">关闭</a>{/if}\n\n        <div class="popover_bar">{each buttons as bt}<a href="javascript:;" class="btn btn_{bt.type} jsPopoverBt">{bt.text}</a>&nbsp;{/each}</div>\n    </div>\n    <i class="popover_arrow popover_arrow_out"></i>\n    <i class="popover_arrow popover_arrow_in"></i>\n</div>\n';
});define("tpl/biz_web/ui/dropdown.html.js", [], function(e, t, n) {
return '<a href="javascript:;" class="btn dropdown_switch jsDropdownBt"><label class="jsBtLabel" {if search}contenteditable="true"{/if}>{label}</label><i class="arrow"></i></a>\n<div class="dropdown_data_container jsDropdownList">\n    <ul class="dropdown_data_list">\n        {if renderHtml}\n        {renderHtml}\n        {else}\n            {each data as o index}\n            <li class="dropdown_data_item {if o.className}{o.className}{/if}">  \n                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="{o.value}" data-index="{index}" data-name="{o.name}">{o.name}</a>\n            </li>\n            {/each}        \n        {/if}\n    </ul>\n</div>\n';
});define("tpl/RichBuddy/RichBuddyContent.html.js", [], function(e, t, n) {
return '<div class="frm_control_group nickName">\n    <label class="frm_label" title="{nick_name}">{nick_name}</label>\n    <div class="frm_controls frm_vertical_pt">\n        <span class="icon18_common {if gender==1}man_blue{else if gender==2}woman_orange{/if}"></span>\n	</div>\n</div>\n<div class="frm_control_group nickName">\n    <label class="frm_label">备注名</label>\n    <div class="frm_controls frm_vertical_pt">\n        <span class=\'js_remarkName remark_name\'>{remark_name}</span>\n		<a title="修改备注" class="icon14_common edit_gray js_changeRemark" href="javascript:;">修改备注</a> \n	</div>\n</div>\n<div class="frm_control_group nickName">\n    <label class="frm_label">地区</label>\n    <div class="frm_controls frm_vertical_pt">\n        {country} {province} {city}\n	</div>\n</div>\n<div class="frm_control_group nickName">\n    <label class="frm_label">签名</label>\n    <div class="frm_controls frm_vertical_pt">\n        {signature}\n	</div>\n</div>\n<div class="frm_control_group nickName js_group_container">\n<label class="frm_label">分组</label>\n    <div class="frm_controls frm_vertical_pt">\n        <div class="dropdown_wrp js_group"></div>\n    </div>\n</div>\n';
});define("tpl/RichBuddy/RichBuddyLayout.html.js", [], function(e, t, n) {
return '<div class="rich_buddy popover arrow_left" style="display:none;">\n    <div class="popover_inner">\n        <div class="popover_content">\n            <div class="rich_buddy_hd">详细资料</div>\n\n            <div class="loadingArea rich_buddy_loading"><span class="vm_box"></span><i class="icon_loading_small dark"></i></div>\n            <div class="rich_buddy_bd buddyRichContent">\n            </div>\n        </div>\n    </div>\n    <i class="popover_arrow popover_arrow_out"></i>\n    <i class="popover_arrow popover_arrow_in"></i>\n</div>\n';
});define("tpl/top.html.js", [], function(e, t, n) {
return '<ul class="tab_navs title_tab" data-index="{itemIndex=0}">\n    {each data as o index}\n    {if (typeof o.acl == "undefined" || o.acl == 1)}\n    <li data-index="{itemIndex++}" class="tab_nav {if (itemIndex == 1)}first{/if} js_top {o.className}" data-id="{o.id}"><a href="{o.url}" {if o.target==\'_blank\'}target="_blank"{/if}>{o.name}</a></li>\n    {/if}\n    {/each}\n</ul>\n';
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
});define("tpl/pagebar.html.js", [], function(e, t, n) {
return '<div class="pagination">\n    <span class="page_nav_area">\n        <a href="javascript:void(0);" class="btn page_first">{firstButtonText}</a>\n        <a href="javascript:void(0);" class="btn page_prev"><i class="arrow"></i></a>\n        {if isSimple}\n            <span class="page_num">\n                <label>{initShowPage}</label>\n                <span class="num_gap">/</span>\n                <label>{endPage}</label>\n            </span>\n        {else}\n            {each startRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n            <span class="gap_prev">...</span>\n            {each midRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav js_mid">{pageIndex}</a>\n            {/each}\n            <span class="gap_next">...</span>\n            {each endRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n        {/if}\n        <a href="javascript:void(0);" class="btn page_next"><i class="arrow"></i></a>\n        <a href="javascript:void(0);" class="btn page_last">{lastButtonText}</a>            \n    </span>\n    {if (endPage>1)}\n    <span class="goto_area">\n        <input type="text">\n        <a href="javascript:void(0);" class="btn page_go">跳转</a>\n    </span>\n    {/if}\n</div>\n';
});define("tpl/dialog.html.js", [], function(e, t, n) {
return '<div class="dialog_wrp {className}" style="{if width}width:{width}px;{/if}{if height}height:{height}px;{/if};display:none;">\n  <div class="dialog" id="{id}">\n    <div class="dialog_hd">\n      <h3>{title}</h3>\n      <a href="javascript:;" class="pop_closed">关闭</a>\n    </div>\n    <div class="dialog_bd">\n      <div class="page_msg large simple default {msg.msgClass}">\n        <div class="inner group">\n          <span class="msg_icon_wrapper"><i class="icon_msg {icon} "></i></span>\n          <div class="msg_content ">\n          {if msg.title}<h4>{=msg.title}</h4>{/if}\n          {if msg.text}<p>{=msg.text}</p>{/if}\n          </div>\n        </div>\n      </div>\n    </div> \n    <div class="dialog_ft">\n      {each buttons as bt index}\n      <a href="javascript:;" class="btn {bt.type} js_btn">{bt.text}</a>\n      {/each}\n    </div>\n  </div>\n</div>\n{if mask}<div class="mask"></div>{/if}\n\n';
});