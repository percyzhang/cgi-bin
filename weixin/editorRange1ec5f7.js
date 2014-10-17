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
});define("tpl/step.html.js", [], function(e, t, n) {
return '<ul class="processor_bar grid_line">\n    {each stepArr as item index}\n    <li class="{if (index+1==length)}no_extra{/if} step grid_item size1of{length} {item.cls}">\n        <h4>{item.name}</h4>\n    </li>\n    {/each}\n</ul>\n';
});define("tpl/cardticket/send_card.html.js", [], function(e, t, n) {
return '<div>\n<div class="wrp_processor js_step_container"></div>\n	<div class="first_step js_step_content js_step1">\n	    <!--选择投放方式弹窗-->\n		<div class="js_card_list"></div>\n		<!--选择投放方式弹窗 end-->\n	</div>\n	<div class="second_step js_step_content dn js_step2">\n		<!--投放设置弹窗-->\n		<div class="release_method">\n			<div class="msg_pre_view">\n			<ul>\n				<li class="group">\n					<span class="l title">已选卡券</span>\n					<div class="msg">\n						<p class="js_card_title"></p>\n					</div>\n				</li>\n				<li class="group">\n					<span class="l title">投放渠道</span>\n					<div class="msg">\n						<p class="js_source"></p>\n					</div>\n				</li>\n				<li class="group">\n					<span class="l title">投放数量</span>\n					<div class="msg">\n						<div class="frm_control_group">\n							<div class="frm_controls frm_vertical_lh">\n								<div class="frm_input l">\n									<div class="input_submsg">\n										<span class="frm_input_box">\n											<input type="text" class="frm_input js_send_num">\n										</span>\n										<span class="input_sub_msg">份</span>\n									</div>\n								</div>\n								\n							</div>\n						</div>\n					</div>\n				</li>\n			</ul>\n			</div>\n		</div>\n		<!--投放设置弹窗 end-->\n	</div>\n</div>';
});define("cardticket/common_template_helper.js", [ "common/wx/upload.js", "biz_common/moment.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("common/wx/upload.js"), s = e("biz_common/moment.js"), o = {
"4": "代金券",
"1": "团购券",
"2": "折扣券",
"3": "礼品券",
"0": "优惠券"
}, u = {
"1": "审核中",
"2": "未通过",
"3": "待投放",
"4": "已删除",
"5": "ERROR投放的卡",
"6": "已投放",
"8": "已过期"
}, s = e("biz_common/moment.js");
template.helper("convert_state", function(e) {
return u[e] || e;
}), template.helper("convert_type", function(e) {
return o[e] || e;
}), template.helper("card_type_map", function(e) {
return e;
}), template.helper("unixFormat", function(e, t) {
return t && (t = t.replace(",", " ")), s.unix(e).format(t);
}), template.helper("validtime", function(e, t) {
return e.time_type == 1 ? s.unix(e.begin_time).format(t) + "至" + s.unix(e.end_time).format(t) : e.time_type == 2 ? (e.from_day = e.from_day == 0 ? "当" : e.from_day, "领取后{from_day}天生效{fixed_term}天有效".format(e)) : "";
}), template.helper("addtoken", function(e) {
return wx.url(e);
});
var a = {
"1": "50万以下",
"2": "50-100万",
"3": "100-500万",
"4": "500-1000万",
"5": "1000万以上"
};
template.helper("convert_business_volume_type", function(e) {
return a[e] || e;
});
var f = {
"0": "未审核",
"2": "审核中",
"3": "审核通过",
"4": "审核失败"
};
template.helper("convert_store_state", function(e) {
return f[e] || e;
}), template.helper("$preview", function(e) {
if (!e) return "无";
var t;
return e.indexOf("temp_") === 0 ? (e = e.replace(/^temp_/, ""), t = i.tmpFileUrl(e)) : t = i.multimediaFileUrl(e), "<a href='%s' target='_blank'><img src='%s' style='width:260px;' /></a>".sprintf(t, t);
}), template.helper("$upload_preview", function(e) {
if (!e) return "";
var t;
return e.indexOf("temp_") === 0 ? (e = e.replace(/^temp_/, ""), t = i.tmpFileUrl(e)) : t = i.multimediaFileUrl(e), "<img src='%s' style='width:260px;' />".sprintf(t);
}), template.helper("$preview_stuffs", function(e) {
var t = [], n = e.stuffs;
for (var r = 0; r < n.length; r++) {
var i = n[r] + "_preview_tpl";
$("#" + i).length && t.push(template.render(i, e));
}
return t.join("");
});
var l = {
"2": "女",
"1": "男"
};
template.helper("convert_gender", function(e) {
return l[e] || "未知";
}), template.helper("percentage", function(e, t, n, r) {
var n = e / t * 100;
return r && n > r && (n = r), n.toFixed(2);
});
var c = {
"": "全部",
"0": "API渠道",
"1": "嵌入图文消息",
"2": "直接群发卡券",
"3": "下载二维码"
};
template.helper("convert_channel", function(e) {
return c[e] || e;
});
function h(e) {
var t = "YYYY-MM-DD HH:mm:ss", n = s(e, t);
return n ? n.format("YYYY-MM-DD") : "";
}
return template.helper("convert_provide_time", h), template.helper("http2https", function(e) {
return e ? (e + "").http2https() : "";
}), template.helper("https2http", function(e) {
return e ? (e + "").https2http() : "";
}), template.helper("codepad", function(e) {
var t = new RegExp("([^s]{4})(?=([^s])+$)", "ig");
return e.replace(t, "$1-");
}), {
type_map: o,
status_map: u,
store_status: f,
gender_map: l,
source_map: c,
convert_provide_time: h
};
} catch (p) {
wx.jslog({
src: "cardticket/common_template_helper.js"
}, p);
}
});define("tpl/cardticket/card_table.html.js", [], function(e, t, n) {
return '<div class="release_method js_card_container">\n	{if loading}\n	<i class="icon32_loading light">loading...</i>\n	{else}\n	<div class="table_wrp">\n		<table class="table" cellspacing="0">\n			<thead class="thead">\n				<tr>\n					<th class="table_cell select_box">&nbsp;</th>\n					<th class="table_cell kind"><div class="td_panel">卡券类型</div></th>\n					<th class="table_cell name"><div class="td_panel">卡券名称</div></th>\n					<th class="table_cell time"><div class="td_panel">卡券有效期</div></th>\n					<th class="table_cell state"><div class="td_panel">卡券状态</div></th>\n				</tr>\n			</thead>\n			<tbody class="tbody">\n			{if !data.length}\n				<tr>\n					<td class="empty_tips" colspan="6">暂无卡票券</td>\n				</tr>\n			{else}\n			{each data as card i}\n				<tr>\n					<td class="table_cell select_box"><div class="td_panel">\n						{if !multi}\n						<label class="frm_radio_label">\n							<i class="icon_radio"></i>\n							<input type="radio" data-id="{card.id}" value="{card.id}" class="frm_radio js_select">\n						</label>\n						{else}\n						<label class="frm_checkbox_label">\n							<i class="icon_checkbox"></i>\n							<input type="checkbox" data-id="{card.id}" value="{card.id}" class="frm_checkbox js_select">\n						</label>\n						{/if}\n					</div></td>\n					<td class="table_cell kind"><div class="td_panel">{convert_type card.type}</div></td>\n					<td class="table_cell name"><div class="td_panel">{card.title}</div></td>\n					<td class="table_cell time"><div class="td_panel">{validtime card \'YYYY-MM-DD\'}</div></td>\n					<td class="table_cell state"><div class="td_panel"><span class="fail pass"><i></i>{convert_state card.status}</span></div></td></td>\n				</tr>\n			{/each}\n			{/if}\n			</tbody>\n		</table>\n		<div class="js_pager"></div>\n	</div>\n	{/if}\n</div>';
});define("cardticket/store_cgi.js", [ "common/wx/Cgi.js", "common/wx/Tips.js", "common/wx/dialog.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("common/wx/Cgi.js"), s = e("common/wx/Tips.js"), o = e("common/wx/dialog.js"), u = {
deleteStore: function(e) {
i.post({
url: "/merchant/entityshop?action=delete",
data: {
id: e.store_id
},
btn: e.btn
}, function(t) {
t.base_resp.ret == 0 ? (s.suc("删除门店成功"), e.success && e.success()) : i.show(t);
});
},
deleteWithConfirm: function(e) {
if (e.state == 4) {
u.deleteStore(e);
return;
}
if (e.state != 3) return;
var t = o.show({
msg: "该门店可能正在使用，请确定是否删除？|删除门店会使得门店下的卡券信息不可用",
buttons: [ {
text: "确定",
click: function() {
var t = this;
if (e.success) {
var n = e.success;
e.success = function() {
n && n(), t.remove();
};
}
u.deleteStore(e);
},
type: "primary"
}, {
text: "取消",
click: function() {
this.remove();
},
type: "normal"
} ]
});
e.btn = t.dom.find(".js_btn")[0];
},
listStore: function(e) {
i.get({
url: "/merchant/entityshop",
data: {
action: "list",
begin: 0,
count: 9999999,
audit_state: e.audit_state || 3
}
}, function(t) {
if (t.base_resp.ret == 0) {
var n = $.parseJSON(t.data), r = n.store_location;
e.success && e.success({
shop_list: r,
total_num: t.total_count
});
} else i.show(t);
});
},
canSendCard: function(e) {
i.post({
url: "/merchant/electroniccardmgr",
data: {
action: "iscansend",
card_id: e.card_id
}
}, function(t) {
var n = !1;
t.base_resp.ret == 0 ? n = !0 : t.base_resp.ret == 14002 ? n = !1 : (n = t.base_resp.ret, i.show(t)), e.success && e.success(n);
});
}
};
return u;
} catch (a) {
wx.jslog({
src: "cardticket/store_cgi.js"
}, a);
}
});define("cardticket/parse_data.js", [], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = {
DISCOUNT: "2",
GROUPON: "1",
GIFT: "3",
CASH: "4",
GENERAL_COUPON: "0"
}, s = {
CODE_TYPE_TEXT: 0,
CODE_TYPE_BARCODE: 1,
CODE_TYPE_QRCODE: 2
};
function o(e) {
var t = i[e.card_type] || e.card_type;
t += "";
switch (t) {
case "2":
e = e.discount;
break;
case "1":
e = e.groupon;
break;
case "3":
e = e.gift;
break;
case "4":
e = e.cash;
break;
case "0":
e = e.general_coupon;
break;
default:
e = e.general_coupon || e.coupon;
}
return e ? (e.type = t, e) : null;
}
function u(e) {
var t = {}, e = o(e);
if (!e) return null;
a(t, e), a(t, e.base_info);
var n = e.base_info.date_info || {};
t.time_type = n.type, t.time_type == 1 && (t.begin_time = n.begin_timestamp, t.end_time = n.end_timestamp), t.from_day = n.fixed_begin_term || 0, t.fixed_term = n.fixed_term || 30, t.quantity = e.base_info.sku.quantity, t.shop_id_list = e.base_info.shop_id_list, t.location_id_list = e.base_info.location_id_list;
var r = s[t.code_type];
return t.code_type = typeof r != "undefined" ? r : t.code_type, typeof t.code_type == "undefined" && (t.code_type = 1), t.least_cost = e.least_cost && e.least_cost / 100, t.reduce_cost = e.reduce_cost && e.reduce_cost / 100, t.discount = t.discount && (100 - t.discount) / 10, t.type == 1 ? t.detail = t.deal_detail : t.detail = t.default_detail, t.shop_type = 2, t;
}
function a(e, t) {
for (var n in t) t.hasOwnProperty(n) && typeof t[n] != "object" && (e[n] = t[n]);
return e;
}
function f(e) {
var t = {}, n = 0, r = [];
for (var i = 0; i < e.length; i++) {
var s = u(e[i]);
if (!s) continue;
t[s.id] = s, r.push(s);
}
return {
card_cache: t,
card_list: r
};
}
return {
parse_cardticket: u,
parse_cardlist: f
};
} catch (l) {
wx.jslog({
src: "cardticket/parse_data.js"
}, l);
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
});define("tpl/pagebar.html.js", [], function(e, t, n) {
return '<div class="pagination">\n    <span class="page_nav_area">\n        <a href="javascript:void(0);" class="btn page_first">{firstButtonText}</a>\n        <a href="javascript:void(0);" class="btn page_prev"><i class="arrow"></i></a>\n        {if isSimple}\n            <span class="page_num">\n                <label>{initShowPage}</label>\n                <span class="num_gap">/</span>\n                <label>{endPage}</label>\n            </span>\n        {else}\n            {each startRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n            <span class="gap_prev">...</span>\n            {each midRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav js_mid">{pageIndex}</a>\n            {/each}\n            <span class="gap_next">...</span>\n            {each endRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n        {/if}\n        <a href="javascript:void(0);" class="btn page_next"><i class="arrow"></i></a>\n        <a href="javascript:void(0);" class="btn page_last">{lastButtonText}</a>            \n    </span>\n    {if (endPage>1)}\n    <span class="goto_area">\n        <input type="text">\n        <a href="javascript:void(0);" class="btn page_go">跳转</a>\n    </span>\n    {/if}\n</div>\n';
});define("tpl/biz_web/ui/checkbox.html.js", [], function(e, t, n) {
return '<label for="_checkbox_{index}" class="frm_{type}_label">\n	<i class="icon_{type}"></i>\n	<input type="{type}" class="frm_{type}" name="{name}" id="_checkbox_{index}">\n	<span class="lbl_content">{label}</span>\n</label>';
});define("tpl/uploader.html.js", [], function(e, t, n) {
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
});