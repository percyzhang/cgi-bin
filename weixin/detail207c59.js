// moment.js
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
});define("wxverify/detail.js", [ "biz_common/moment.js", "common/wx/dialog.js", "common/wx/Idcheck.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = wx.cgiData.data, s = e("biz_common/moment.js"), o = e("common/wx/dialog.js"), u = e("common/wx/Idcheck.js"), a = wx.cgiData.service_type, f = wx.cgiData.limit_1000;
function l(e, t) {
return t || (t = "YYYY年M月D日"), s.unix(e).format(t);
}
i && (i.qverify_date = l(i.qverify_date || 0), i.active_begin_time = l(i.vverify_date || 0), i.active_end_time = l(i.expired || 0), i.check_time = l(s.unix(i.expired).subtract("months", 3).unix()), i.service_type = a), i.is_qverify = wx.cgiData.is_qverify, i.isWxVerify = wx.cgiData.verify, i.tmp_service_type = wx.cgiData.tmp_service_type, i.is_ad_host = wx.cgiData.is_ad_host, console.log("order"), console.log(i), $("#jsWrap").html(template.render("tpl", {
order: i
}));
var c = new u({
mobile: {
number: wx.cgiData.operator_mobile.replace("+86", "")
},
callback: function(e, t) {
+t == 1 ? location.href = wx.url("/acct/wxverify?action=step&t=wxverify/index&step=proto") : +t == 5 && (location.href = wx.url("/acct/wxverify?action=step&t=wxverify/index&step=pay_method"));
}
});
$(".js_toverify").on("click", function() {
if (wx.cgiData.realnameType != "0" || wx.cgiData.account_version == "0" && wx.cgiData.is_ad_host != 1) {
if (wx.cgiData.realname_status == 1) return c.show($(this).attr("tostep")), !1;
o.show({
type: "err",
draggable: !1,
msg: "你的注册信息尚未完成审核，暂时无法申请微信认证。",
buttons: [ {
text: "确认",
click: function() {
this.remove();
}
} ]
});
} else o.show({
type: "err",
draggable: !1,
msg: "暂不支持个人类型的公众帐号申请微信认证。",
buttons: [ {
text: "确认",
click: function() {
this.remove();
}
} ]
});
});
} catch (h) {
wx.jslog({
src: "wxverify/detail.js"
}, h);
}
});