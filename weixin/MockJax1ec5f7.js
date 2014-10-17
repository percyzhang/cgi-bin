define("tpl/step.html.js", [], function(e, t, n) {
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
});define("tpl/tooltips.html.js", [], function(e, t, n) {
return '<div class="popover {parentClass}" style="display:none;position:{container_mode};{if offset.left}left:{offset.left}px;top:{offset.top}px;{/if}">\n    <div class="popover_inner">\n        <div class="popover_content">{=content}</div>\n        {if container_close}\n        <a href="javascript:;" class="popover_close icon16_common close_flat js_popover_close">关闭</a>\n        {/if}\n        {if buttons.length > 0}\n        <div class="popover_bar">\n			{each buttons as o index}\n			<a onclick="return false;" href="javascript:;" class="btn {o.type}">{o.text}</a>\n			{/each}\n        </div>\n        {/if}\n    </div>\n    <i class="popover_arrow popover_arrow_out"></i>\n    <i class="popover_arrow popover_arrow_in"></i>\n</div>\n';
});define("tpl/biz_web/ui/checkbox.html.js", [], function(e, t, n) {
return '<label for="_checkbox_{index}" class="frm_{type}_label">\n	<i class="icon_{type}"></i>\n	<input type="{type}" class="frm_{type}" name="{name}" id="_checkbox_{index}">\n	<span class="lbl_content">{label}</span>\n</label>';
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
});define("safe/tpl/safe_check.html.js", [], function(e, t, n) {
return '<div>\n<!-- -->\n	<div class="safe_check js_mobilecheck">\n	    <div class="form">\n            <div class="inner">\n                <div class="frm_hd">\n                    <h3 class="frm_title">您的帐号开启了手机保护功能，需要输入手机验证码</h3>\n                </div>\n                <div class="frm_bd">\n                    <div class="frm_control_group">\n                        <label class="frm_label">手机号</label>\n                        <div class="frm_controls frm_vertical_pt">\n                            <p class="js_old"></p>\n                        </div>\n                    </div>\n                    <div class="frm_control_group">\n                        <label class="frm_label">验证码</label>\n                        <div class="frm_controls">\n                            <span class="frm_input_box vcode">\n                                <input type="text" placeholder="验证码" class="frm_input js_num">\n                            </span>\n                            <a href="javascript:void(0);" class="btn btn_default btn_vcode js_oldsend">获取验证码</a>\n                            <p class="frm_msg fail js_num_msg">● 验证码错误</p>\n                            <!--<div class="frm_tips">若xxxxxx，请点击</div>-->\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n	</div>\n<!-- -->\n	<div class="safe_check js_wxcheck">\n        <div class="qrcode_scan qrcode_scan_light">\n            <div class="qrcode_wrp">\n                <img class="qrcode js_qrcode" src="" alt="微信二维码" title="微信二维码" />\n            </div>\n            <div class="js_status"></div>\n        </div>\n        <p class="tc">可用管理员微信号扫码验证，同时支持非管理员微信号扫码申请，申请后需管理员验证。<a href="/cgi-bin/readtemplate?t=setting/safe-operation-guide-faq_tmpl&lang=zh_CN">操作指引</a></p>\n	</div>\n<!--steps-->\n    <div class="safe_check js_bind">\n        <div class="processor_wrp js_process"></div>\n<!--step1-->\n        <div class="form form_width_auto js_step1">\n            <div class="inner">\n                <div class="frm_hd">\n                    <h3 class="frm_title js_title">在开启微信保护前，需要先验证您的身份，请选择验证方式：</h3>\n                </div>\n                <div class="frm_control_group">\n                    <div class="frm_controls">\n                        <label class="frm_radio_label selected">\n                            <i class="icon_radio"></i>\n                            <span class="lbl_content">通过注册时登记的手机号来验证</span>\n                            <input type="radio" value="1" class="frm_radio" checked="checked">\n                        </label>\n                        <p class="frm_radio_block_desc">通过发送验证短信到你的绑定手机<span class="js_step1_num"></span>进行验证</p>\n                    </div>\n                </div>\n                <div class="frm_control_group">\n                    <div class="frm_controls">\n                        <label class="frm_radio_label">\n                            <i class="icon_radio"></i>\n                            <span class="lbl_content">通过注册时登记的身份证号来验证</span>\n                            <input type="radio" value="0" class="frm_radio">\n                        </label>\n                        <p class="frm_radio_block_desc">通过填写帐号运营者姓名、身份证号进行验证</p>\n                    </div>\n                </div>\n                <div class="frm_control_group js_option" style="display:none;">\n                    <div class="frm_controls">\n                        <label class="frm_radio_label">\n                            <i class="icon_radio"></i>\n                            <span class="lbl_content">通过登录邮箱来验证</span>\n                            <input type="radio" value="2" class="frm_radio">\n                        </label>\n                        <p class="frm_radio_block_desc">将会发送安全验证码到你的登录邮箱<span class="js_step1_email"></span>，填写正确验证码可通过验证</p>\n                    </div>\n                </div>\n            </div>\n            <div class="tool_bar border tc">\n                <a href="javascript:;" class="btn btn_primary js_step1_next">下一步</a>\n                <a href="javascript:;" class="btn btn_default js_step1_cancel">取消</a>\n            </div>\n        </div>\n<!--step2 mobile-->\n        <div class="form disableform js_setp2_mobile" style="display:none;">\n            <div class="inner">\n                <div class="frm_hd">\n                    <h3 class="frm_title">请输入手机验证码进行验证</h3>\n                </div>\n                <div class="frm_control_group">\n                    <label class="frm_label">手机号</label>\n                    <div class="frm_controls frm_vertical_pt">\n                        <p>\n                            <span class="js_old"></span>\n                            <a class="ml1e js_mobile_forget" href=\'javascript:;\'>重置手机号</a>\n                        </p>\n                    </div>\n                </div>\n                <div class="frm_control_group">\n                    <label class="frm_label">验证码</label>\n                    <div class="frm_controls">\n                        <span class="frm_input_box vcode">\n                            <input type="text" placeholder="验证码" class="frm_input js_num">\n                        </span>\n                        <a href="javascript:" class="btn btn_default btn_p20 js_oldsend">获取验证码</a>\n                    </div>\n                </div>\n            </div>\n            <div class="tool_bar border tc">\n                <a href="javascript:;" class="btn btn_default js_step2_prev">上一步</a>\n                <a href="javascript:;" class="btn btn_primary js_step2_mobilecheck">下一步</a>\n            </div>\n        </div>\n<!--step2 name-->\n        <div class="form form_owner_info js_step2_name" style="display:none;">\n            <div class="inner">\n                <div class="frm_hd">\n                    <h3 class="frm_title">请正确填写以下信息，以验证你的身份</h3>\n                </div>\n                <div class="frm_control_group">\n                    <label class="frm_label">运营者身份证姓名</label>\n                    <div class="frm_controls">\n                        <span class="frm_input_box">\n                            <input type="text" class="frm_input js_cardname">\n                        </span>\n                        <p class="frm_tips">姓名需与身份证上姓名一致</p>\n                    </div>\n                </div>\n                <div class="frm_control_group">\n                    <label class="frm_label">运营者身份证号码</label>\n                    <div class="frm_controls">\n                        <span class="frm_input_box">\n                            <input type="text" class="frm_input js_cardid">\n                        </span>\n                        <p class="frm_tips">请正确填写注册时所登记的身份证号码</p>\n                    </div>\n                </div>\n            </div>\n            <div class="tool_bar border tc">\n                <a href="javascript:;" class="btn btn_default js_step2_prev">上一步</a>\n                <a href="javascript:;" class="btn btn_primary js_step2_namecheck">下一步</a>\n            </div>\n        </div>\n<!--step2 email-->\n        <div class="page_msg large default simple js_step2_mail" style="display:none;">\n            <div class="inner group">\n                    <span class="msg_icon_wrp">\n                        <i class="icon_msg mail"></i>\n                    </span>\n                <div class="msg_content">\n                    <h4>已发送验证邮件</h4>\n                    <p>已发送验证邮件到你的注册邮箱<span class="js_mail"></span>，请填写验证码：</p>\n                    <div class="mt1e spacing frm_control_group">\n                        <label class="frm_label">邮件验证码</label>\n                        <div class="oh">\n                                <span class="frm_input_box vcode">\n                                    <input type="text" class="frm_input js_email_code">\n                                </span>\n                        </div>\n                    </div>\n                    <div class="extra_msg">\n                        <h4>没有收到邮件？</h4>\n                        <ul>\n                            <li>1. 检查你的邮箱垃圾箱</li>\n                            <li>2. 若仍未收到确认，请尝试<a href=\'javascript:;\' class=\'js_resend_mail\'>重新发送</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class="tool_bar border tc">\n                <a href="javascript:;" class="btn btn_default js_step2_prev">上一步</a>\n                <a href="javascript:;" class="btn btn_primary js_step2_mailcheck">下一步</a>\n            </div>\n        </div>\n<!--step3-->\n		<div class="js_step3" style="display:none;">\n            <div class="qrcode_scan qrcode_scan_light">\n                <div class="qrcode_wrp">\n                    <img class="qrcode js_qrcode" src="" alt="微信二维码" title="微信二维码" />\n                </div>\n                <div class="js_status">\n                </div>\n            </div>\n            <p class="js_forget tc" style="display:none;">若此微信号已无法使用，请点此<a href=\'javascript:;\'>重置绑定微信号</a></p>\n		</div>\n    </div>\n<!--tip no protect-->\n    <div class="safe_check js_off_protect">\n        <div class="page_msg large simple default">\n            <div class="inner group">\n                <span class="msg_icon_wrp">\n                    <i class="icon_msg info"></i>\n                </span>\n                <div class="msg_content">\n                    <h4>为了更好的保障公众号的安全，群发消息需开启微信保护</h4>\n                    <p>群发消息前，请你开启微信保护，开启后即可进行群发（需管理员微信号进行验证）。<a target="_blank" href="/cgi-bin/readtemplate?t=setting/safe-protect-detail-faq_tmpl&lang=zh_CN">详细说明</a></p>\n                </div>\n            </div>\n        </div>\n    </div>\n<!--tip no helper-->\n    <div class="safe_check js_no_helper">\n        <div class="page_msg large simple default">\n            <div class="inner group">\n                <span class="msg_icon_wrp">\n                    <i class="icon_msg info"></i>\n                </span>\n                <div class="msg_content">\n                    <h4>为了更好的保障公众号的安全，群发消息需开启微信保护</h4>\n                    <p>群发消息前，需先绑定管理员微信号并开启微信保护。开启后即可进行群发（需管理员微信号进行验证）。<a target="_blank" href="/cgi-bin/readtemplate?t=setting/safe-protect-detail-faq_tmpl&lang=zh_CN">详细说明</a></p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n';
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
});define("tpl/top.html.js", [], function(e, t, n) {
return '<ul class="tab_navs title_tab" data-index="{itemIndex=0}">\n    {each data as o index}\n    {if (typeof o.acl == "undefined" || o.acl == 1)}\n    <li data-index="{itemIndex++}" class="tab_nav {if (itemIndex == 1)}first{/if} js_top {o.className}" data-id="{o.id}"><a href="{o.url}" {if o.target==\'_blank\'}target="_blank"{/if}>{o.name}</a></li>\n    {/if}\n    {/each}\n</ul>\n';
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
});