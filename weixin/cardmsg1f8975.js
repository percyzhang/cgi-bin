define("common/wx/time.js", [], function(e, t, n) {
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
});define("common/wx/pagebar.js", [ "widget/pagination.css", "tpl/pagebar.html.js", "common/qq/Class.js", "common/wx/Tips.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i, s, o, u, a, f, l, c = e("widget/pagination.css"), h = e("tpl/pagebar.html.js"), p = e("common/qq/Class.js"), d = e("common/wx/Tips.js");
l = template.compile(h), i = t, s = {
first: "首页",
last: "末页",
prev: "上页",
next: "下页",
startPage: 1,
initShowPage: 1,
perPage: 10,
startRange: 1,
midRange: 3,
endRange: 1,
totalItemsNum: 0,
container: "",
callback: null,
isNavHide: !1,
isSimple: !0
};
var v = function(e, t, n) {
var r;
return r = e + (t - 1), r = r > n ? n : r, r;
}, m = function(e, t, n) {
var r;
return n % 2 === 0 ? r = t - (n / 2 - 1) : r = t - (n - 1) / 2, r = r < e ? e : r, r;
}, g = function(e, t, n) {
var r;
return t % 2 === 0 ? r = parseInt(e) + t / 2 : r = parseInt(e) + (t - 1) / 2, r = r > n ? n : r, r;
}, y = function(e, t, n) {
var r;
return r = t - (n - 1), r = r < e ? e : r, r;
}, b = function(e, t) {
if (t[e] && isNaN(t[e])) throw new Error("Invalid arguments: " + e + " should be a number");
}, w = function(e) {
b("perPage", e), b("totalItemsNum", e), b("startPage", e), b("startRange", e), b("midRange", e), b("endRange", e), b("initShowPage", e);
if (e.callback !== undefined && e.callback !== null && !$.isFunction(e.callback)) throw new Error("Invalid arguments: callback should be a function");
}, E = function(e, t, n) {
var r = e.container.find(".page_" + n);
if (typeof t == "string") {
var i = $(t);
i.length !== 0 && (r = i);
} else {
if (t !== !1) throw new Error("Invalid Paramter: '" + n + "' should be a string or false");
r.hide();
}
return r;
}, S = p.declare({
init: function(e) {
if (!e.totalItemsNum) return;
var t;
w(e), t = $.extend(!0, {}, s, e), this._init(t);
if (t.initShowPage < t.startPage) throw new Error("Invalid arguments: initShowPage should be larger than startPage");
if (t.initShowPage > t.endPage) throw new Error("Invalid arguments: initShowPage should be smaller than endPage");
this.paginate();
},
_init: function(e) {
var t, n, r, i, o, u;
this.currentPage = e.initShowPage, this._isNextButtonShow = !0, this._isPrevButtonShow = !0, this.uid = "wxPagebar_" + +(new Date), this.initEventCenter(), this.optionsForTemplate = {}, $.extend(this, e), this.container = $(e.container), this.optionsForTemplate.isSimple = e.isSimple, this.optionsForTemplate.firstButtonText = $(e.first).length === 0 ? e.first : s.first, this.optionsForTemplate.lastButtonText = $(e.last).length === 0 ? e.last : s.last, this.optionsForTemplate.nextButtonText = $(e.next).length === 0 ? e.next : s.next, this.optionsForTemplate.prevButtonText = $(e.prev).length === 0 ? e.prev : s.prev, this.optionsForTemplate.isNavHide = e.isNavHide, this.generatePages(parseInt(this.totalItemsNum)), this.gapForStartRange = this.container.find(".gap_prev"), this.gapForEndRange = this.container.find(".gap_next"), this.firstButton = E(this, e.first, "first"), this.lastButton = E(this, e.last, "last"), this.prevButton = E(this, e.prev, "prev"), this.nextButton = E(this, e.next, "next"), this.bindEvent();
},
initEventCenter: function() {
this.eventCenter = {
eventList: [],
bind: function(e, t) {
this.eventList[e] || (this.eventList[e] = []), this.eventList[e].push(t);
},
trigger: function(e) {
var t, n, r;
this.eventList[e] || (this.eventList[e] = []), t = this.eventList[e];
for (var i = 0; i < t.length; i++) {
r = Array.prototype.slice.call(arguments, 1);
if (t[i].apply(this, r) === !1) return !1;
}
},
unbind: function(e, t) {
if (!this.eventList) throw new Error("The eventList was undefined");
if (!this.eventList[e]) throw new Error("The event type " + e + " was not found");
if (t === undefined) this.eventList[e] = []; else {
var n = this.eventList[e], r = n.length;
for (var i = 0; i < r; i++) if (n[i] === t) {
n.splice(i, 1);
break;
}
}
}
};
},
generatePages: function(e) {
var t, n, r, i, s, o, u;
this.pageNum = Math.ceil(e / this.perPage), this.endPage = this.startPage + this.pageNum - 1, this.gapForStartRange = null, this.gapForEndRange = null, this.optionsForTemplate.startRange = [], this.optionsForTemplate.midRange = [], this.optionsForTemplate.endRange = [], n = v(this.startPage, this.startRange, this.endPage), r = m(this.startPage, this.currentPage, this.midRange), i = g(this.currentPage, this.midRange, this.endPage), s = y(this.startPage, this.endPage, this.endRange), n >= s && (s = n + 1);
for (t = this.startPage; t <= n; t += 1) this.optionsForTemplate.startRange.push(t);
for (var a = 0, t = r; a < this.midRange; a += 1, t += 1) this.optionsForTemplate.midRange.push(t);
for (t = s; t <= this.endPage; t += 1) this.optionsForTemplate.endRange.push(t);
this.optionsForTemplate.endPage = this.endPage, this.optionsForTemplate.initShowPage = this.initShowPage, o = l(this.optionsForTemplate), this.container.html(o), this.pageNum == 1 ? this.container.hide() : this.container.show(), this.pages = this.container.find(".page_nav"), this.midPages = this.container.find(".js_mid"), this.labels = this.container.find(".page_num label"), this.container.find(".pagination").attr("id", this.uid);
},
paginate: function() {
var e, t, n, r, i, s, o, u, a, f, l;
if (this.isSimple === !0) for (var c = 0, h = this.labels.length; c < h; c++) c % 2 === 0 && $(this.labels[c]).html(this.currentPage); else {
n = v(this.startPage, this.startRange, this.endPage), o = m(this.startPage, this.currentPage, this.midRange), u = g(this.currentPage, this.midRange, this.endPage), a = y(this.startPage, this.endPage, this.endRange), n >= a && (a = n + 1), n >= o && (o = n + 1), u >= a && (u = a - 1), this.pages.show(), this.pages.removeClass("current"), l = parseInt(this.midPages.length / this.midRange);
for (var c = 0, h = l; c < h; c++) {
s = 0;
for (e = o; e <= u; e += 1) i = this.midRange * c + (e - o), f = $(this.midPages[i]), f.html(e), s += 1, e == this.currentPage && f.addClass("current");
i = this.midRange * c + s;
for (; s < this.midRange; s += 1) f = $(this.midPages[i]), f.hide(), f.removeClass("current"), i += 1;
}
for (var c = 0, h = this.pages.length; c <= h; c++) r = $(this.pages[c]), e = parseInt(r.html()), e === parseInt(this.currentPage) && r.addClass("current");
n + 1 < o ? this.gapForStartRange.show() : this.gapForStartRange.hide(), u + 1 < a ? this.gapForEndRange.show() : this.gapForEndRange.hide();
if (this.isNavHide) {
for (var c = this.startPage; c <= this.endPage; c += 1) this.pages.hide();
this.gapForStartRange.hide(), this.gapForEndRange.hide();
}
}
this.checkButtonShown();
},
destroy: function() {
this.container.off("click", "#" + this.uid + " a.page_nav"), this.container.off("click", "#" + this.uid + " a.page_go"), this.container.off("keydown", "#" + this.uid + " .goto_area input"), this.nextButton.off("click"), this.prevButton.off("click"), this.firstButton.off("click"), this.lastButton.off("click");
},
bindEvent: function() {
this.container.on("click", "#" + this.uid + " a.page_nav", this.proxy(function(e) {
var t = $(e.target);
return t.hasClass("current") ? !1 : (this.clickPage(parseInt(t.html())), !1);
}, this)), this.nextButton.on("click", this.proxy(function(e) {
var t = $(e.target);
return this.nextPage(), !1;
}, this)), this.prevButton.on("click", this.proxy(function(e) {
var t = $(e.target);
return this.prevPage(), !1;
}, this)), this.firstButton.on("click", this.proxy(function(e) {
var t = $(e.target);
return this.goFirstPage(), !1;
}, this)), this.lastButton.on("click", this.proxy(function(e) {
var t = $(e.target);
return this.goLastPage(), !1;
}, this)), this.container.on("click", "#" + this.uid + " a.page_go", this.proxy(function(e) {
var t = $(e.target).prev();
return this.goPage(t.val()), !1;
}, this)), this.container.on("keydown", "#" + this.uid + " .goto_area input", this.proxy(function(e) {
wx.isHotkey(e, "enter") && this.container.find("a.page_go").click();
}, this));
},
on: function(e, t) {
this.eventCenter.bind(e, this.proxy(t, this));
},
callbackFunc: function(e) {
var t = {
currentPage: this.currentPage,
perPage: this.perPage,
count: this.pageNum
};
if ($.isFunction(this.callback) && this.callback(t) === !1) return !1;
if (this.eventCenter.trigger(e, t) === !1) return !1;
this.paginate();
},
proxy: function(e, t) {
return function() {
var n = Array.prototype.slice.call(arguments, 0);
return e.apply(t, n);
};
},
nextPage: function() {
this.currentPage !== this.endPage && (this.currentPage++, this.callbackFunc("next") === !1 && this.currentPage--);
},
prevPage: function() {
this.currentPage !== this.startPage && (this.currentPage--, this.callbackFunc("prev") === !1 && this.currentPage++);
},
goFirstPage: function() {
var e = this.currentPage;
this.currentPage = this.startPage, this.callbackFunc("goFirst") === !1 && (this.currentPage = e);
},
goLastPage: function() {
var e = this.currentPage;
this.currentPage = this.endPage, this.callbackFunc("goLast") === !1 && (this.currentPage = e);
},
checkButtonShown: function() {
+this.currentPage === +this.startPage ? this.hidePrevButton() : this.showPrevButton(), +this.currentPage === +this.endPage ? this.hideNextButton() : this.showNextButton();
},
goPage: function(e) {
var t = this.currentPage;
if (e === this.currentPage) return !1;
if (isNaN(e)) return d.err("请输入正确的页码"), !1;
if (e === "") return !1;
if (e < this.startPage) return d.err("请输入正确的页码"), !1;
if (e > this.endPage) return d.err("请输入正确的页码"), !1;
this.currentPage = e, this.callbackFunc("go") === !1 && (this.currentPage = t);
},
clickPage: function(e) {
var t = this.currentPage;
isNaN(e) && (e = this.startPage), e < this.startPage ? this.currentPage = this.startPage : e > this.endPage ? this.currentPage = this.endPage : this.currentPage = e, this.callbackFunc("click") === !1 && (this.currentPage = t);
},
showNextButton: function() {
this.nextButton && this._isNextButtonShow === !1 && (this.nextButton.show(), this._isNextButtonShow = !0);
},
showPrevButton: function() {
this.prevButton && this._isPrevButtonShow === !1 && (this.prevButton.show(), this._isPrevButtonShow = !0);
},
hideNextButton: function() {
this.nextButton && this._isNextButtonShow === !0 && (this.nextButton.hide(), this._isNextButtonShow = !1);
},
hidePrevButton: function() {
this.prevButton && this._isPrevButtonShow === !0 && (this.prevButton.hide(), this._isPrevButtonShow = !1);
}
});
return t = S;
} catch (x) {
wx.jslog({
src: "common/wx/pagebar.js"
}, x);
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
});define("media/media_cgi.js", [ "common/wx/Tips.js", "common/wx/Cgi.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("common/wx/Tips.js"), s = e("common/wx/Cgi.js"), o = {
del: function(e, t) {
s.post({
mask: !1,
url: wx.url("/cgi-bin/operate_appmsg?sub=del&t=ajax-response"),
data: {
AppMsgId: e
},
error: function() {
i.err("删除失败");
}
}, function(e) {
e.ret == "0" ? (i.suc("删除成功"), t && t(e)) : i.err("删除失败");
});
},
save: function(e, t, n, r, o, u) {
var a = n.AppMsgId ? wx.url("/cgi-bin/operate_appmsg?t=ajax-response&sub=update&type=%s".sprintf(t)) : wx.url("/cgi-bin/operate_appmsg?t=ajax-response&sub=create&type=%s".sprintf(t));
n.ajax = 1, s.post({
url: a,
data: n,
dataType: "html",
error: function() {
i.err("保存失败"), o && o();
},
complete: u
}, function(t) {
t = $.parseJSON(t);
if (t.ret == "0") i.suc("保存成功"), r && r(t); else {
var n = !1;
switch (t.ret) {
case "64506":
i.err("保存失败,链接不合法");
break;
case "64507":
i.err("内容不能包含链接，请调整");
break;
case "64508":
i.err("查看原文链接可能具备安全风险，请检查");
break;
case "-99":
i.err("内容超出字数，请调整");
break;
case "10801":
i.err("标题不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"), n = t.msg;
break;
case "10802":
i.err("作者不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"), n = t.msg;
break;
case "10803":
i.err("敏感链接，请重新添加。"), n = t.msg;
break;
case "10804":
e ? i.err("正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。") : i.err("摘要不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"), n = t.msg;
break;
case "10806":
i.err("正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"), n = t.msg;
break;
case "-20000":
i.err("登录态超时，请重新登录。");
break;
case "15801":
case "15802":
case "15803":
case "15804":
case "15805":
case "15806":
break;
default:
i.err("保存失败");
}
o && o(n, t.ret);
}
});
},
preview: function(e, t, n, r, o) {
s.post({
url: wx.url("/cgi-bin/operate_appmsg?sub=preview&t=ajax-appmsg-preview&type=%s".sprintf(t)),
data: n,
dataType: "html",
error: function() {
i.err("发送失败，请稍后重试"), o && o();
}
}, function(t) {
t = $.parseJSON(t);
if (t.ret == "0") i.suc("发送预览成功，请留意你的手机微信"), r && r(t); else {
switch (t.ret) {
case "64501":
i.err("你输入是非法的微信号，请重新输入");
break;
case "64502":
i.err("你输入的微信号不存在，请重新输入");
break;
case "10700":
case "64503":
i.err("你输入的微信号不是你的好友");
break;
case "10703":
i.err("对方关闭了接收消息");
break;
case "10701":
i.err("用户已被加入黑名单，无法向其发送消息");
break;
case "10704":
case "10705":
i.err("该素材已被删除");
break;
case "64504":
i.err("保存图文消息发送错误，请稍后再试");
break;
case "64505":
i.err("发送预览失败，请稍后再试");
break;
case "64507":
i.err("内容不能包含链接，请调整");
break;
case "-99":
i.err("内容超出字数，请调整");
break;
case "62752":
i.err("可能含有具备安全风险的链接，请检查");
break;
case "10801":
i.err("标题不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"), t.antispam = !0;
break;
case "10802":
i.err("作者不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"), t.antispam = !0;
break;
case "10803":
i.err("敏感链接，请重新添加。"), t.antispam = !0;
break;
case "10804":
e ? i.err("正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。") : i.err("摘要不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"), t.antispam = !0;
break;
case "10806":
i.err("正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"), t.antispam = !0;
break;
case "-8":
case "-6":
t.ret = "-6", i.err("请输入验证码");
break;
case "15801":
case "15802":
case "15803":
case "15804":
case "15805":
case "15806":
break;
default:
i.err("系统繁忙，请稍后重试");
}
o && o(t);
}
});
},
getList: function(e, t, n, r) {
s.get({
mask: !1,
url: wx.url("/cgi-bin/appmsg?type=%s&action=list&begin=%s&count=%s&f=json".sprintf(e, t, n)),
error: function() {
i.err("获取列表失败");
}
}, function(e) {
e && e.base_resp && e.base_resp.ret == 0 ? r && r(e.app_msg_info) : i.err("获取列表失败");
});
},
getSingleList: function(e, t, n, r) {
s.get({
mask: !1,
url: wx.url("/cgi-bin/appmsg?type=%s&action=for_advert&begin=%s&count=%s&f=json".sprintf(e, t, n)),
error: function() {
i.err("获取列表失败");
}
}, function(e) {
e && e.base_resp && e.base_resp.ret == 0 ? r && r(e.app_msg_info) : i.err("获取列表失败");
});
}
}, u = {
save: function(e, t, n) {
var r = wx.url("/cgi-bin/operate_vote");
e.ajax = 1, s.post({
url: r,
data: e,
error: function() {
i.err("保存失败"), n && n();
}
}, function(e) {
e && e.base_resp && e.base_resp.ret == 0 ? (i.suc("保存成功"), t && t(e)) : (i.err("保存失败"), n && n(e));
});
}
};
return {
rename: function(e, t, n) {
s.post({
mask: !1,
url: wx.url("/cgi-bin/modifyfile?oper=rename&t=ajax-response"),
data: {
fileid: e,
fileName: t
},
error: function() {
i.err("重命名失败");
}
}, function(e) {
if (e.ret == "0") i.suc("重命名成功"), n && n(e); else switch (e.ret) {
case "-2":
i.err("素材名不能包含空格");
break;
default:
i.err("重命名失败");
}
});
},
del: function(e, t) {
s.post({
mask: !1,
url: wx.url("/cgi-bin/modifyfile?oper=del&t=ajax-response"),
data: {
fileid: e
},
error: function() {
i.err("删除失败");
}
}, function(e) {
e.ret == "0" ? (i.suc("删除成功"), t && t(e)) : i.err("删除失败");
});
},
getList: function(e, t, n, r) {
s.get({
mask: !1,
url: wx.url("/cgi-bin/filepage?type=%s&begin=%s&count=%s&f=json".sprintf(e, t, n)),
error: function() {
i.err("获取列表失败");
}
}, function(e) {
e && e.base_resp && e.base_resp.ret == 0 ? r && r(e.page_info) : i.err("获取列表失败");
});
},
appmsg: o,
vote: u
};
} catch (a) {
wx.jslog({
src: "media/media_cgi.js"
}, a);
}
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
});define("tpl/tab.html.js", [], function(e, t, n) {
return '<div class="msg_tab">\n	<ul class="tab_navs">\n	    {each tabs as tab}\n        <li class="tab_nav {tab.className}" data-type="{tab.type}" data-tab=".{tab.selector}" data-tooltip="{tab.text}">\n		    <a href="javascript:void(0);">&nbsp;<i class="icon_msg_sender"></i></a>\n	    </li>\n	    {/each}\n	</ul>\n	<div class="tab_panel">\n	    {each tabs as tab}\n	    <div class="tab_content">\n	    	<div class="{tab.selector} inner {tab.innerClassName}">\n	    	</div>\n	    </div>\n	    {/each}\n	</div>\n</div>\n';
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
});