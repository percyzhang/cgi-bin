define("user/index.js", [ "common/wx/dialog.js", "common/wx/Tips.js", "common/wx/pagebar.js", "common/wx/remark.js", "common/wx/top.js", "common/wx/RichBuddy.js", "user/user_cgi.js", "user/group_cgi.js", "biz_web/ui/dropdown.js", "common/qq/events.js", "common/qq/emoji.js", "common/wx/popover.js", "tpl/user/grouplist.html.js", "tpl/user/userlist.html.js", "tpl/user/verifylist.html.js", "biz_web/ui/checkbox.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict", template.isEscape = !1;
var i = wx.T, s = template.render, o = wx.cgiData, u = e("common/wx/dialog.js"), a = e("common/wx/Tips.js"), f = e("common/wx/pagebar.js"), l = e("common/wx/remark.js"), c = e("common/wx/top.js"), h = e("common/wx/RichBuddy.js"), p = e("user/user_cgi.js"), d = e("user/group_cgi.js"), v = e("biz_web/ui/dropdown.js"), m = e("common/qq/events.js"), g = e("common/qq/emoji.js"), y = e("common/wx/popover.js"), b = e("tpl/user/grouplist.html.js"), w = e("tpl/user/userlist.html.js"), E = e("tpl/user/verifylist.html.js"), S = e("biz_web/ui/checkbox.js"), x = o.groupsList, T = o.friendsList || [], N = o.verifyReqList || [], C = m(!0), k, L, A = [], O = {};
for (L = 0; L < x.length; L++) x[L].id == 1 ? O = {
num: x[L].cnt,
link: wx.url("/cgi-bin/contactmanage?t=user/index&pagesize=10&pageidx=0&type=0&groupid=" + x[L].id)
} : (x[L].link = wx.url("/cgi-bin/contactmanage?t=user/index&pagesize=10&pageidx=0&type=0&groupid=" + x[L].id), x[L].id === o.currentGroupId && (x[L].selected = "selected", $("#js_groupName").text(x[L].name), k = x[L].name), A.push(x[L]));
o.type === 4 ? $("#js_groupName").text("关注请求") : o.currentGroupId === "" && $("#js_groupName").text("全部用户");
for (L = 0; L < T.length; L++) T[L].img = wx.url("/misc/getheadimg?fakeid=" + T[L].id), T[L].link = wx.url("/cgi-bin/singlesendpage?t=message/send&action=index&tofakeid=" + T[L].id), T[L].nick_name = T[L].nick_name.emoji();
for (L = 0; L < N.length; L++) N[L].img = wx.url("/misc/getheadimg?fakeid=" + N[L].from_uin), N[L].link = wx.url("/cgi-bin/singlesendpage?t=message/send&action=index&tofakeid=" + N[L].from_uin), N[L].nick_name = N[L].nick_name.emoji();
var M = [], _ = [];
for (L = 0; L < x.length; L++) M.push({
name: x[L].name,
value: x[L].id
}), _[x[L].id] = x[L].name;
var D = new c("#topTab", c.DATA.user);
D.selected(0), $("#groupsList").prepend(i(b, {
groupsList: A,
allUser: {
num: o.totalCount,
link: wx.url("/cgi-bin/contactmanage?t=user/index&pagesize=10&pageidx=0&type=0")
},
groupid: o.currentGroupId,
type: o.type,
verifyList: {
num: o.verifyMsgCount,
link: wx.url("/cgi-bin/contactmanage?t=user/index&pagesize=10&pageidx=0&type=4")
},
blackList: O,
isVerifyOn: wx.cgiData.isVerifyOn,
userRole: o.userRole
}));
if (o.type == 0) {
$("#userGroups").html(i(w, {
friendsList: T
}));
for (L = 0; L < T.length; L++) (function(e) {
new v({
container: "#selectArea" + T[e].id,
label: _[T[e].group_id],
data: M,
callback: function(t, n) {
var r = $("#selectArea" + T[e].id), i = parseInt(r.data("gid"), 10), s = parseInt(t, 10);
i !== s && p.changeGroup(T[e].id, s, function() {
r.data("gid", s);
});
}
});
})(L);
var P = new h;
$(".js_msgSenderAvatar").mouseover(function() {
var e = $(this), t = parseInt(e.data("fakeid"), 10), n = e.offset(), r = e.width();
P.show({
fakeId: t,
position: {
left: n.left + r + 2,
top: n.top
}
});
}).mouseout(function() {
P.hide();
});
} else $("#verifyGroups").html(i(E, {
verifyReqList: N
})), $(".js_accept").click(function() {
var e = $(this), t = e.data("id"), n = e.data("fid");
d.verify(t, n, function(e) {
if (!!e.ReMarkName && !!e.FakeId) {
var r = $(".nick_name[data-fakeid=" + e.FakeId + "]"), i = $(".remark_name[data-fakeid=" + e.FakeId + "]");
nickName = r.html(), remarkName = e.ReMarkName.html(!0);
if (remarkName != "" || oldRemarkName != "") remarkName == "" && oldRemarkName != "" ? (i.html(r.find("strong").html()), r.html("")) : remarkName != "" && oldRemarkName == "" ? (r.html("(<strong>" + i.html() + "</strong>)"), i.html(remarkName)) : i.html(remarkName);
}
var s = $("#verifyOPArea" + t);
s.find(".js_accept").hide(), s.find(".js_ignore").hide(), s.find(".js_msgSenderRemark").css("display", "inline-block"), s.parent().find(".js_selectLabel").show().find(".js_select").prop("disabled", !1), $("#selectAll").closest("th").show(), new v({
container: "#selectArea" + n,
label: "分组选择",
data: M,
callback: function(e, t) {
var r = $("#selectArea" + n), i = parseInt(r.data("gid"), 10), s = parseInt(e, 10);
i !== s && p.changeGroup(n, s, function() {
r.data("gid", s);
});
}
});
});
}), $(".js_ignore").click(function() {
var e = $(this), t = e.data("id"), n = e.data("fid");
d.ignore(t, n, function(e) {
$("#listItem" + t).remove();
});
});
var H = new v({
container: "#allGroup",
label: "添加到",
data: M,
disabled: !0,
callback: function(e, t) {
var n = [], r = e;
n = B.values(), n.length && p.changeGroup(n, r, function() {
location.reload(!0);
});
}
}), B = $(".js_select").checkbox();
$("#selectAll").click(function(e) {
var t = $(this).prop("checked");
$(".js_select").each(function() {
if ($(this).prop("disabled")) return;
$(this).checkbox().checked(t);
});
}).checkbox(), $("#selectAll, .js_select").on("click", function() {
var e = B.values();
e.length ? H.enable() : H.disable();
});
if (o.pageCount > 1) var j = new f({
container: ".js_pageNavigator",
perPage: o.pageSize,
initShowPage: o.pageIdx + 1,
totalItemsNum: o.pageCount * o.pageSize,
first: !1,
last: !1,
isSimple: !0,
callback: function(e) {
var t = e.currentPage;
return t != o.pageIdx + 1 && (location.href = location.href.replace(/([\?&])pageidx=\d*/, "$1pageidx=" + (t - 1))), !1;
}
});
$(".js_msgSenderRemark").click(function() {
var e = $(this).data("fakeid"), t = $(".remark_name[data-fakeid=" + e + "]"), n = $(".nick_name[data-fakeid=" + e + "]"), r = n.html() == "" ? "" : t.html();
l.show(e, r);
}), C.on("Remark:changed", function(e, t) {
var n = $(".remark_name[data-fakeid=" + e + "]"), r = $(".nick_name[data-fakeid=" + e + "]"), i = r.html();
if (t != "" || i != "") t == "" && i != "" ? (n.html(r.find("strong").html()), r.html("")) : t != "" && i == "" ? (r.html("(<strong>" + n.html() + "</strong>)"), n.html(t)) : n.html(t);
}), function() {
function e(e, t) {
var n = e, r = n.val().trim(), i = t.find(".jsPopoverBt").eq(0);
if (!i.attr("disabled")) {
i.btn(!1);
if (r == "" || r.bytes() > 12) return a.err("分组名字为1~6字符"), n.focus(), i.btn(!0), !1;
d.add(r, function(e) {
location.reload();
});
}
}
$("#js_groupAdd").on("click", function() {
var t = $(this);
$(".popover").hide();
var n = new y({
dom: this,
content: s("js_editNameHtml", {
name: "",
gid: ""
}),
place: "bottom",
margin: "center",
buttons: [ {
text: "确定",
click: function(t) {
e(this.$pop.find(".js_name"), this.$pop);
},
type: "primary"
}, {
text: "取消",
click: function(e) {
this.hide();
}
} ]
});
n.$pop.find(".js_name").keypress(function(t) {
if (!wx.isHotkey(t, "enter")) return;
e($(this), n.$pop);
}), n.$pop.find(".js_name").focus();
});
}(), function() {
function e(e, t) {
var n = e, r = n.data("gid"), i = n.val().trim(), s = t.find(".jsPopoverBt").eq(0);
if (!s.attr("disabled")) {
s.btn(!1);
if (i == "" || i.bytes() > 12) return a.err("分组名字为1~6字符"), n.focus(), s.btn(!0), !1;
d.rename(r, i, function(e) {
location.reload(!0);
});
}
}
$(".js_edit").on("click", function() {
var t = $(this), n = t.data("gid");
$(".popover").hide();
var r = new y({
dom: this,
content: s("js_editNameHtml", {
name: k,
gid: n
}),
place: "bottom",
margin: "center",
buttons: [ {
text: "确定",
click: function(t) {
e(this.$pop.find(".js_name"), this.$pop);
},
type: "primary"
}, {
text: "取消",
click: function(e) {
this.hide();
}
} ]
});
r.$pop.find(".js_name").keypress(function(t) {
if (!wx.isHotkey(t, "enter")) return;
e($(this), r.$pop);
}), r.$pop.find(".js_name").focus();
});
}(), function() {
$(".js_delete").on("click", function() {
var e = $(this), t = e.data("gid");
$(".popover").hide(), new y({
dom: this,
content: $("#js_deleteHtml").html(),
place: "bottom",
margin: "center",
buttons: [ {
text: "确定",
click: function(e) {
var n = this, r = n.$pop.find(".jsPopoverBt").eq(0).btn(!1);
d.del(t, function(e) {
location.href = wx.url("/cgi-bin/contactmanage?t=user/index&pagesize=10&pageidx=0&type=0&groupid=0");
});
},
type: "primary"
}, {
text: "取消",
click: function(e) {
this.hide();
}
} ]
});
});
}();
} catch (F) {
wx.jslog({
src: "user/index.js"
}, F);
}
});