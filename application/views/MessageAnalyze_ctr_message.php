<!DOCTYPE html>
<!-- saved from url=(0318)https://mta.qq.com/mta/wechat/ctr_message?appid=wxa3ab354bb9cee3e9&pluginid=luopan&token=ll1D85fGDCTr4AAxC_RrFIsraM1eajMksOjZN_eXodrGx-XSsLXwYcrKqNNNkhN4NLuFbBW2aIyH_t1RkwUip2LXVvc_0C26CFDAPNtsgZGDz_cqSThTHu_CLdqgddIG&devtype=3&jsurl=https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe1ec5f7.js&version=2 -->
<html class="mta_wechat"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <meta name="Description" content="">
    <meta name="Keywords" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>消息发送-消息分析</title>
    <style type="text/css">
        label.contrast { float: left; margin: 4px 8px 0 8px; line-height: 20px; color: #666; cursor: pointer; }
        label.contrast .pc { vertical-align: -2px; margin:2px }
        #div_feedback {display:none; background: url(https://mta.qq.com/mta/resource/imgcache/images/scrollTop.png) no-repeat 0px 0px;text-indent: -99999px;box-shadow: 0px 0px 1px #EEE;position: fixed; z-index: 150; right: 30px; bottom: 10px; width: 48px; height: 48px; cursor: pointer; display:none;}
        #div_feedback:hover { background-position: -48px 0px}
        .gri_fdate
        {
            width:180px;
        }
        .gri_Date
        {
            width:180px;
        }
        .gri_order
        {
            width:60px;
        }
    </style>
<link rel="stylesheet" type="text/css" href="<?=base_url()?>weixin/zhang.css" charset="utf-8">
    <link rel="stylesheet" type="text/css" href="<?=base_url()?>weixin/global.css" charset="utf-8">
<link rel="stylesheet" type="text/css" href="<?=base_url()?>weixin/wechat_v3.css" charset="utf-8">
<link rel="stylesheet" type="text/css" href="<?=base_url()?>weixin/gri.controls.css" charset="utf-8">
<script type="text/javascript" src="<?=base_url()?>weixin/jquery.min.js" charset="utf-8"></script>
<script type="text/javascript" src="<?=base_url()?>weixin/gri.dateRange.js" charset="utf-8"></script>
<script type="text/javascript" src="<?=base_url()?>weixin/gri.js" charset="utf-8"></script>
<script type="text/javascript" src="<?=base_url()?>weixin/gri.multiselect.js" charset="utf-8"></script>
<script type="text/javascript" src="<?=base_url()?>weixin/mta.js" charset="utf-8"></script>
<script type="text/javascript" src="<?=base_url()?>weixin/gri.dataTable.js" charset="utf-8"></script>
<script type="text/javascript" src="<?=base_url()?>weixin/highcharts.js" charset="utf-8"></script>
<script type="text/javascript" src="<?=base_url()?>weixin/gri.chart.js" charset="utf-8"></script>
    <script type="text/javascript">
        MTA.Config.RootPath = 'https://mta.qq.com/mta';
    </script>
</head>
<body>
<style type="text/css">
    .gri_wrapper table thead th {
        text-align: center;
    }
    td.gri_td_rowSpan{
        background: #F7F7F7;
    }
</style>
<!-- 站点列表的js库 :start -->
<script type="text/javascript">

//    //编码js脚本
//    function trimScript(v){
//        return v.replace(/(<script[^>]*?>)((.|\r|\n)*?)(<\/script>)/gi,"");
//    }
//
//    var url = location.href.match(/(?:\?|&)jsurl=([^&$]*)/);
//    if( url && url[1] ){
//        var u = trimScript(url[1]);
//        document.write('<script src="' + u + '"></'+'script>');
//        document.cookie = 'jsurl='+u;
//    }
//    else {
//        url = document.cookie.match(/jsurl=([^;$]*)/);
//        if( url && url[1] ){
//            var u = trimScript(url[1]);
//            document.write('<script src="' + u + '"></'+'script>');
//        }
//    }
//
//var app_list = [];
//    var app_id = 1;
//    var wx_uin = 3095249804;
//    var time_type = 'day';
//    var verify_params = {"appid":"wxa3ab354bb9cee3e9","pluginid":"luopan","token":"ll1D85fGDCTr4AAxC_RrFIsraM1eajMksOjZN_eXodrGx-XSsLXwYcrKqNNNkhN4NLuFbBW2aIyH_t1RkwUip2LXVvc_0C26CFDAPNtsgZGDz_cqSThTHu_CLdqgddIG","from":"","devtype":"3"};
//    var minValidDate = 1372608000;
//    $(document).ready(function(){
//        for (var x in verify_params){
//            MTA.Util.setParams(x, verify_params[x]);
//        }
//        if (time_type){
//            MTA.Util.setParams('time_type', time_type);
//        }
//        MTA.Function.setMenuParams = function(){
//            return verify_params;
//        };
//    });
//
//    MTA.Config.theme = 'wechat';
//    MTA.Page.app = new MTA.Applist(app_list, 'app_list', app_id);
//
//    MTA = window.MTA || {};
//    MTA.loginUser = MTA.loginUser || {};
//    MTA.loginUser = {
//        loginName: 'wxa3ab354bb9cee3e9'
//    };
//
//    MTA.logout = function(){
//        document.location.href = 'http://mta.qq.com';
//    }
//    MTA.login = (function(){
//        var VERIFY_URL = 'http://mta.qq.com/';
//        var _loginDialog = null, _maskDiv = null;
//        var _isOpenLogin = false;
//        var _dialogX, _dialogY, _dialogW = 0, _dialogH = 0;
//        var _retUrl = '';
//
//        function setCenter(){
//            if (!_isOpenLogin){return;}
//
//            var ww, wh, bgX, bgY;
//            var dde = document.documentElement;
//            if (top.innerWidth){
//                ww = top.innerWidth;
//                wh = top.innerHeight;
//                bgX = top.pageXOffset;
//                bgY = top.pageYOffset;
//            }else{
//                ww = dde.offsetWidth;
//                wh = dde.offsetHeight;
//                bgX = dde.scrollLeft;
//                bgY = dde.scrollTop;
//            }
//
//            _loginDialog.style.left = (bgX + (ww - _dialogW)/2) + 'px';
//            _loginDialog.style.top = (bgY + (wh - _dialogH)/3) + 'px';
//
//            GRI.Util.mask.create();
//
//            setTimeout(setCenter,100);
//        }
//
//        function createLoginDialog(){
//            if (!_loginDialog){
//                _loginDialog = document.createElement("div");
//            }
//            var oS = _loginDialog.style;
//            oS.display = "block";
//            oS.top = "1px";
//            oS.left = "1px";
//            oS.margin = "0px";
//            oS.padding = "0px";
//            oS.width = "1px";
//            oS.height = "1px";
//            oS.position = "absolute";
//            oS.zIndex = "1000";
//            _loginDialog.innerHTML='<iframe frameborder="0" scrolling="no" width="100%" height="100%" src="#"></iframe>';
//            document.getElementsByTagName("body")[0].appendChild(_loginDialog);
//
//
//            if (!_retUrl){
//                _retUrl = VERIFY_URL;
//            }
//
//            var url = "http://ui.ptlogin2.qq.com/cgi-bin/login";
//            url += "?qlogin_auto_login=0";//1 为支持自动登陆
//            url += "&style=12";
//            url += "&appid=518011204";
//            url += "&daid=150";
//            url += "&s_url=" + encodeURIComponent(_retUrl);
////		url += encodeURIComponent(VERIFY_URL + '?ref=' + encodeURIComponent(_retUrl) + '&rnd=' + Math.random());
//            _loginDialog.getElementsByTagName('iframe')[0].src = url;
//        }
//
//        return {
//            open: function(retUrl){
//                if (_isOpenLogin){
//                    return;
//                }
//                document.domain="qq.com";
//                _retUrl = retUrl;
//                _isOpenLogin = true;
//                createLoginDialog();
//                setCenter();
//            },
//            resize: function(w, h){
//                if(_loginDialog){
//                    _loginDialog.style.visibility = "hidden";
//                    _loginDialog.style.width = w + "px";
//                    _loginDialog.style.height = h + "px";
//                    _loginDialog.style.visibility = "visible";
//
//                    _dialogW = w;
//                    _dialogH = h;
//
//                    setCenter();
//                }
//            },
//            close: function(){
//                if(_loginDialog){
//                    _isOpenLogin = false;
//                    _loginDialog.style.display="none";
//                    GRI.Util.mask.destroy();
//                }
//            }
//        };
//    })();
//
//    window.ptlogin2_onClose = MTA.login.close;
//    window.ptlogin2_onResize = MTA.login.resize;
//
//    /*
//    * 高亮表格
//    * */
//    function hightLightTable(){
//        var data = {"1":{"th":[2],"td":[2]},"2":{"th":[3],"td":[3]},"3":{"th":[4],"td":[4]}};
//        var offset = -1;
//        if ('hour' == time_type){//耦合...
//            offset = 0;
//        }
//        if ($("#btn_compare").html() == "取消对比"){
//            offset ++;//按时间对比情况下，表格前面会多出一列
//        }
//        var opts = {'table_id':'table_list', 'data':data};
//        var id = $("#div_item_tabs a.current").attr('id').match(/tab_(\d{1,2})/i)[1];
//        if (typeof(opts['data'][id]) == 'object'){
//            var d = opts['data'][id];
//            $("#"+opts['table_id']+" th").removeClass("row_hover");
//            $("#"+opts['table_id']+" td").removeClass("row_hover");
//            for (var i = 0; i < d['th'].length; i++){
//                $("#"+opts['table_id']+" thead th:eq("+(d['th'][i]+offset)+")").addClass("row_hover");
//            }
//
//            for (var i = 0; i < d['td'].length; i++){
//                $("#"+opts['table_id']+" tbody tr").each(function(){
//                    var tdoffset = offset - ($("#"+opts['table_id']+" tbody tr:eq(0) td").length - $(this).children("td").length);
//                    $(this).children("td:eq("+(d['td'][i]+tdoffset)+")").addClass("row_hover");
//                });
//            }
//        }
//        $('th[name="RefDate"]').css("text-align",'left');//对比时调整时间列对齐
//    }
//
//    var pathname = location.pathname.replace("/mta", "");
//    function buildChart()
//    {
//        MTA.Data.loadChart(MTA.Page.Variable.tab_url, {theme: 'wechat'}, 'chartContainer');
//        hightLightTable();
//    }
//
//    function buildDataTable()
//    {
//        /**
//         * 表的cgi地址
//         */
//        var tableUrl = pathname+'/get_table_data/';
//        /**
//         * 加载表的数据
//         */
//        MTA.Data.loadPageTable(tableUrl, 'table_list', hightLightTable);
//    }
//
//    function buildKeyIndex()
//    {
//        var url = pathname+'/get_key_index_data_and_chart';
//        MTA.Data.loadKeyIndex(url, 'key_index');
//    }
//
//    function export_excel()
//    {
//        var tableUrl = pathname+'/export_table_data/';
//
//        MTA.Data.exportTable(tableUrl);
//    }
</script><script src="<?=base_url()?>weixin/iframe1ec5f7.js"></script><iframe src="about:blank" style="display: none;"></iframe>
<!-- 站点列表的js库:end -->
<div id="content">
    <div id="sidebar">
        <div id="sub_nav"><div class="mod_sidemenu"><h3 class="title" id="parent_menu_1"><a href="javascript:;"><i class="icon_user"></i>用户分析<i id="i_menu_1" class="icon_menu"></i></a></h3><div id="child_menu_1" style="position:relative;zoom:1"><ul class="content"><li><a id="menu_101" href="https://mta.qq.com/mta/wechat/ctr_user_summary">用户增长</a></li></ul><ul class="content"><li><a id="menu_103" href="https://mta.qq.com/mta/wechat/ctr_user_attr">用户属性</a></li></ul></div></div><div class="mod_sidemenu"><h3 class="title" id="parent_menu_2"><a href="javascript:;"><i class="icon_app"></i>图文分析<i id="i_menu_2" class="icon_menu"></i></a></h3><div id="child_menu_2" style="position:relative;zoom:1"><ul class="content"><li><a id="menu_201" href="https://mta.qq.com/mta/wechat/ctr_article_detail">图文群发</a></li></ul><ul class="content"><li><a id="menu_202" href="https://mta.qq.com/mta/wechat/ctr_article_analyse">图文统计</a></li></ul></div></div><div class="mod_sidemenu"><h3 class="title" id="parent_menu_3"><a href="javascript:;"><i class="icon_run"></i>消息分析<i id="i_menu_3" class="icon_menu"></i></a></h3><div id="child_menu_3" style="position:relative;zoom:1"><ul class="content"><li class="current"><a id="menu_301" href="https://mta.qq.com/mta/wechat/ctr_message">消息发送</a></li></ul><ul class="content"><li><a id="menu_302" href="https://mta.qq.com/mta/wechat/ctr_keyword">消息关键词</a></li></ul></div></div><div class="mod_sidemenu"><h3 class="title" id="parent_menu_4"><a href="javascript:;"><i class="icon_develop"></i>开发支持<i id="i_menu_4" class="icon_menu"></i></a></h3><div id="child_menu_4" style="position:relative;zoom:1"><ul class="content"><li><a id="menu_401" href="https://mta.qq.com/mta/wechat/ctr_interface">接口分析</a></li></ul></div></div><div class="mod_sidemenu"><h3 class="title" id="parent_menu_5"><a href="javascript:;"><i class="icon_netspeed"></i>设备功能<i id="i_menu_5" class="icon_menu"></i></a></h3><div id="child_menu_5" style="position:relative;zoom:1"><ul class="content"><li><a id="menu_501" href="https://mta.qq.com/mta/wechat/ctr_device_summary">设备功能</a></li></ul></div></div></div>
        <div id="div_sidemenu_other" class="mod_sidemenu_other" style="display:none">
            <ul class="content">
                <li class="sdk_down"><a href="https://mta.qq.com/mta/other/ctr_sdk_manage/download" target="_blank"><i class="icon_down"></i>SDK下载</a></li>
                <li class="my_app">
                                            <a href="javascript:void(0);" onclick="GRI.Util.hotClick(&#39;0_1_wxa3ab354bb9cee3e9_link.leftbar.to.myapp&#39;, &#39;https://mta.qq.com/mta/overview/ctr_all_app&#39;)">我的应用</a>
                                    </li>
                <li class="help_center"><a onclick="GRI.Util.hotClick(&#39;0_1_wxa3ab354bb9cee3e9_link.header.to.home&#39;, &#39;https://mta.qq.com/mta&#39;);" href="https://mta.qq.com/mta/wechat/ctr_message?appid=wxa3ab354bb9cee3e9&pluginid=luopan&token=ll1D85fGDCTr4AAxC_RrFIsraM1eajMksOjZN_eXodrGx-XSsLXwYcrKqNNNkhN4NLuFbBW2aIyH_t1RkwUip2LXVvc_0C26CFDAPNtsgZGDz_cqSThTHu_CLdqgddIG&devtype=3&jsurl=https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe1ec5f7.js&version=2#">帮助中心</a></li>
            </ul>
        </div>
    </div>
    <div id="main">
        <div class="mod_header">
            <div class="title">
                <span class="more"><a href="https://mta.qq.com/mta/wechat/ctr_message?appid=wxa3ab354bb9cee3e9&pluginid=luopan&token=ll1D85fGDCTr4AAxC_RrFIsraM1eajMksOjZN_eXodrGx-XSsLXwYcrKqNNNkhN4NLuFbBW2aIyH_t1RkwUip2LXVvc_0C26CFDAPNtsgZGDz_cqSThTHu_CLdqgddIG&devtype=3&jsurl=https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe1ec5f7.js&version=2#" class="viewDataDetail" id="lnk_arg" style="display: none"></a></span>
                <h2 id="h_title">消息发送</h2>
                <span id="wrap_items_info_help" class="mod_help" style="display: none;">
                    <a id="icon_items_info_help" href="javascript:;">?</a>
                    <span class="help_content">
                    指标说明
                    </span>
                </span>
                <span id="report_list" class="ui_menu"><button class="button button_link">日报<i class="icon_menu"></i></button><ul class="ui_menu_list" role="menu" aria-labelledby="dropdownMenu" style="display:none;"><li class="first"><a href="javascript:void(0);" value="hour" tadindex="-1">小时报</a></li><li><a class="current" href="javascript:void(0);" value="day" tadindex="-1">日报</a></li><li><a href="javascript:void(0);" value="week" tadindex="-1">周报</a></li><li class="last"><a href="javascript:void(0);" value="month" tadindex="-1">月报</a></li></ul></span>
                <span class="eventBread" id="sp_navigation" style="display:none">
                </span>
                <!-- 	概览页面报表单独控制 -->
                            </div>
            <!---- 右上角指标说明浮层 start -->
            <div class="help" id="wrap_items_info" style="">
<!--                <a class="toggle" href="javascript:;">显示/收起</a>
                <div class="help_content">
                    <i class="dropdown_arrow out"></i>
                    <i class="dropdown_arrow in"></i>
                    <dl class="help-change-list" id="pop_items_info"><dt>消息发送人数</dt><dd>关注者主动发送消息的去重用户数</dd><dt>消息发送次数</dt><dd>关注者主动发送消息的次数</dd><dt>人均发送次数</dt><dd>消息发送总次数/消息发送的去重用户数</dd><dt>日、周、月</dt><dd>分别计算昨日数据相比1天、7天、30天前的变化情况</dd><div style="margin-top:6px;color: #000;"><b>数据由专业移动应用分析工具<br><a href="http://mta.qq.com/" target="_blank">腾讯云分析</a>&nbsp;合作提供</b></div></dl>
                    <div class="help-change-footer" id="footer_items_info"><span class="wechat_data_range">数据从2013年7月1日开始统计。</span>由于服务器缓存，以及指标计算方法和统计时间的差异，数据可能出现微小误差，一般在1%以内。</div>
                </div>-->
            </div>
            <!---- 右上角指标说明浮层 end -->
            <!-- Menu 对象初始化 : start-->
<!--            <script type="text/javascript">
                //数据初始化
                var main_menu = {"1":{"m_id":1,"m_name":"\u7528\u6237\u5206\u6790","m_icon_css":"icon_user","m_url":"\/wechat\/ctr_active_user","m_type":1,"m_display":1},"2":{"m_id":2,"m_name":"\u56fe\u6587\u5206\u6790","m_icon_css":"icon_app","m_url":"\/wechat\/ctr_article_analyse","m_type":1,"m_display":1},"3":{"m_id":3,"m_name":"\u6d88\u606f\u5206\u6790","m_icon_css":"icon_run","m_url":"\/wechat\/ctr_message","m_type":1,"m_display":1},"4":{"m_id":4,"m_name":"\u5f00\u53d1\u652f\u6301","m_icon_css":"icon_develop","m_url":"\/wechat\/ctr_interface","m_type":1,"m_display":1},"5":{"m_id":5,"m_name":"\u8bbe\u5907\u529f\u80fd","m_icon_css":"icon_netspeed","m_url":"","m_type":1,"m_display":1}};
                var sub_menu = {"101":{"m_id":101,"p_id":1,"m_name":"\u7528\u6237\u589e\u957f","m_tips":"\u7528\u6237\u589e\u957f","m_url":"\/wechat\/ctr_user_summary","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":1,"m_type":2,"m_display":1},"103":{"m_id":103,"p_id":1,"m_name":"\u7528\u6237\u5c5e\u6027","m_tips":"\u7528\u6237\u5c5e\u6027","m_url":"\/wechat\/ctr_user_attr","m_default_range":1,"m_has_realtime":0,"m_has_range":0,"m_need_compare":0,"m_type":2,"m_display":1},"201":{"m_id":201,"p_id":2,"m_name":"\u56fe\u6587\u7fa4\u53d1","m_tips":"\u56fe\u6587\u7fa4\u53d1","m_url":"\/wechat\/ctr_article_detail","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":1,"m_type":2,"m_display":1},"202":{"m_id":202,"p_id":2,"m_name":"\u56fe\u6587\u7edf\u8ba1","m_tips":"\u56fe\u6587\u7edf\u8ba1","m_url":"\/wechat\/ctr_article_analyse","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":1,"m_type":2,"m_display":1},"301":{"m_id":301,"p_id":3,"m_name":"\u6d88\u606f\u53d1\u9001","m_tips":"\u6d88\u606f\u53d1\u9001tips\uff0c\u5f85\u4ea7\u54c1\u786e\u5b9a\u540e\u6269\u5c55\u4e4b\u7528","m_url":"\/wechat\/ctr_message","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":1,"m_type":2,"m_display":1},"302":{"m_id":302,"p_id":3,"m_name":"\u6d88\u606f\u5173\u952e\u8bcd","m_tips":"\u7528\u6237\u53d1\u9001\u6587\u5b57\u4e2d\u6240\u5305\u542b\u7684\u7279\u6b8a\u540d\u8bcd","m_url":"\/wechat\/ctr_keyword","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":0,"m_type":2,"m_display":1},"401":{"m_id":401,"p_id":4,"m_name":"\u63a5\u53e3\u5206\u6790","m_tips":"\u63a5\u53e3\u5206\u6790","m_url":"\/wechat\/ctr_interface","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":1,"m_type":2,"m_display":1},"501":{"m_id":501,"p_id":5,"m_name":"\u8bbe\u5907\u529f\u80fd","m_tips":"\u8bbe\u5907\u529f\u80fd","m_url":"\/wechat\/ctr_device_summary","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":0,"m_type":2,"m_display":1}};
                var current_action = '/wechat/ctr_message';
                MTA.Page.Staff = {'EngName': 'wxa3ab354bb9cee3e9', 'ChnName': 'wxa3ab354bb9cee3e9'};//, 'Photo':''};
                //当前Menu对象的初始化
                MTA.Page.menu = new MTA.Menu({main: main_menu, sub: sub_menu}, 'sub_nav');
                MTA.Page.tipsInfo = MTA.Page.menu.getMenuInfo(current_action);
                MTA.Page.tipsInfo && function(){
                    var cla = 'current';
                    //$('#p_tips').html(MTA.Page.tipsInfo.m_tips);//统计报表的tips信息
                    $('#h_title').html(MTA.Page.tipsInfo.m_name);//统计报表页面的标题
                    $('#menu_'+ (MTA.Page.tipsInfo.m_is_child ? MTA.Page.tipsInfo.p_id : MTA.Page.tipsInfo.m_id)).parent().addClass(cla);  //点击菜单的选中状态
                    document.title = MTA.Page.tipsInfo.m_name + '-' + MTA.Page.tipsInfo.p_name; //更新页面title
                    //菜单加载后上报点击
                    GRI.Util.hotClick((MTA.Page.app ? MTA.Page.app.appId+'_1_'+MTA.Page.Staff.EngName+'_function' :'0_1_'+MTA.Page.Staff.EngName+'_setting')+'.'+MTA.Page.tipsInfo.p_name+'.'+MTA.Page.tipsInfo.m_name+'.0');
                }();

                $(function(){
                    if (!MTA.Util.isDemoApp()){
                        $('#div_sidemenu_other').show();
                    }

                    //如是嵌入到iframe中，则调整父页面iframe高度自适应
                    MTA.Weixin.Util.recalcHeight();
                });
            </script>-->
            <!-- Menu 对象初始化: end -->
            <div class="content">
                <div class="group_switch">
                    <!--待选择区域-->
                    <div id="list_condition">
                        <div class="group group_show" style="display:none;">
                            <strong class="lable">消息类型：</strong>
	                 	    <span id="div_message_type">
	                        </span>
                        </div>
                        <div class="group group_show" style="display:none;">
                            <strong class="lable">用户类型：</strong>
                          	<span id="div_user_type">
	                        </span>
                        </div>
                        <div class="group group_show" style="display:none;">
                            <strong class="lable">渠道：</strong>
	                 	    <span id="div_channel">
	                        </span>
                        </div>
                        <div class="group group_show" style="display:none;">
                            <strong class="lable">版本：</strong>
	                        <span id="div_version">
	                        </span>
                        </div>
                        <div class="group group_show" style="display:none;">
                            <strong class="lable">用户群：</strong>
                            <button class="button button_small" id="btn_user_group"><span>全部</span><i class="icon-orderd"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="margin:20px 30px 0;"><div class="ui_tips"><i class="icon_info"></i>接口分析仅统计了基础消息接口，暂未统计其他高级接口，请知悉。</div></div>
        <!--end of mod_header-->
        <div class="mod_basic">
    <div class="title">
        <h3>昨日关键指标</h3>

    </div>
    <div class="content">
        <table class="ui_trendgrid ui_trendgrid_3" id="key_index"><tbody><tr><td class="first"><div class="ui_trendgrid_item"><div class="ui_trendgrid_chart" id="key_index_chart_MsgUser"></div><dl><dt><b>消息发送人数</b></dt><dd class="ui_trendgrid_number"><strong>2</strong><em class="ui_trendgrid_unit"></em></dd><dd>日&nbsp;&nbsp;&nbsp;-- </dd><dd>周<i class="icon_down" title="下降"></i>33.3%</dd><dd>月<i class="icon_down" title="下降"></i>33.3%</dd></dl></div></td><td><div class="ui_trendgrid_item"><div class="ui_trendgrid_chart" id="key_index_chart_MsgCount"></div><dl><dt><b>消息发送次数</b></dt><dd class="ui_trendgrid_number"><strong>4</strong><em class="ui_trendgrid_unit"></em></dd><dd>日&nbsp;&nbsp;&nbsp;-- </dd><dd>周<i class="icon_up" title="上升"></i>33.3%</dd><dd>月<i class="icon_down" title="下降"></i>20%</dd></dl></div></td><td class="last"><div class="ui_trendgrid_item"><div class="ui_trendgrid_chart" id="key_index_chart_MsgPerUser"></div><dl><dt><b>人均发送次数</b></dt><dd class="ui_trendgrid_number"><strong>2</strong><em class="ui_trendgrid_unit"></em></dd><dd>日&nbsp;&nbsp;&nbsp;-- </dd><dd>周<i class="icon_up" title="上升"></i>100%</dd><dd>月<i class="icon_up" title="上升"></i>20%</dd></dl></div></td></tr></tbody></table>
        </div>
</div>

<div class="mod_basic">
    <!--标题栏目:start-->
    <div class="title">
        <h3>关键指标详解</h3>
        <!--指标tab-->
        <div class="tabs" id="div_item_tabs">
                            <a class="first current" id="tab_1" href="javascript:;">消息发送人数</a>
                                <a id="tab_2" href="javascript:;">消息发送次数</a>
                                <a class="last" id="tab_3" href="javascript:;">人均发送次数</a>
                        </div>
        <div class="sub_menu">
            <div class="group">
                				<!-- 独立的日期选择器 -->
					<!--==时间范围start==-->
                        <div class="tool_date cf">
                            <strong class="lable time_lable">时间</strong>
                        	<div class="setup">
								<button class="button  button_primary" id="btn_compare">按时间对比</button>
							</div>
                                                                <div class="date-section cf" id="short_opt">
                                     <ul id="toolbar" class="select cf">
                                         <li class=""><a id="aRecent7Days" href="javascript:void(0);">7天</a></li>
                                         <li class=""><a id="aRecent14Days" href="javascript:void(0);">14天</a></li>
                                         <li class="active"><a id="aRecent30Days" href="javascript:void(0);">30天</a></li>
                                    </ul>
                                </div>
                                							<div class="date" id="div_date">
                                 <span class="date_title" id="date">2014-08-29 至 2014-09-27</span>
                                 <a class="opt_sel" id="input_trigger" href="https://mta.qq.com/mta/wechat/ctr_message?appid=wxa3ab354bb9cee3e9&pluginid=luopan&token=ll1D85fGDCTr4AAxC_RrFIsraM1eajMksOjZN_eXodrGx-XSsLXwYcrKqNNNkhN4NLuFbBW2aIyH_t1RkwUip2LXVvc_0C26CFDAPNtsgZGDz_cqSThTHu_CLdqgddIG&devtype=3&jsurl=https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe1ec5f7.js&version=2#">
                            	     <i class="i_orderd"></i>
                                 </a>
                            </div><label class="contrast" for="needCompare_1411912344267" style="display: none;"><input type="checkbox" class="pc" name="needCompare_1411912344267" id="needCompare_1411912344267" value="1" style="display: none;">对比</label><div class="ta_date" id="div_compare_date" style="display: none;">	<span name="dateCompare" id="dateCompare" class="date_title" style="display: none;"></span>	<a class="opt_sel" id="compare_trigger" href="https://mta.qq.com/mta/wechat/ctr_message?appid=wxa3ab354bb9cee3e9&pluginid=luopan&token=ll1D85fGDCTr4AAxC_RrFIsraM1eajMksOjZN_eXodrGx-XSsLXwYcrKqNNNkhN4NLuFbBW2aIyH_t1RkwUip2LXVvc_0C26CFDAPNtsgZGDz_cqSThTHu_CLdqgddIG&devtype=3&jsurl=https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe1ec5f7.js&version=2#">		<i class="i_orderd"></i>	</a></div>
                                                        <div id="datePicker"><input type="hidden" id="startDate" name="startDate" value="2014-08-29"><input type="hidden" id="endDate" name="endDate" value="2014-09-27"><input type="checkbox" id="needCompare" name="needCompare" value="0" style="display:none;"><input type="hidden" id="startCompareDate" name="startCompareDate" value=""><input type="hidden" id="endCompareDate" name="endCompareDate" value=""></div>
                        </div>
                        <!--==时间范围end==-->
            </div>
        </div>
    </div>
    <!--标题栏目:end-->

    <div class="content">
        <h4 class="sub_title">趋势图</h4>
        <div class="sub_content">
            <!--图控件的模版，这里目前内容较少，后面方便扩展，直接在这里修改-->
<div class="time-chart" id="chartContainer" data-highcharts-chart="0" style="height: 300px;">
								        </div>
        <hr class="split">
        <h4 class="sub_title">消息发送次数分布图</h4>
        <div class="sub_content">
			<div class="column cf" id="valiable">
				   <div id="table_list1" class="gri_wrapper"><table class="gri_stable" id="table_list1_table"><colgroup span="3"><col class="gri_CountInterval"><col class="gri_MsgUser"><col class="gri_Percent" style="width: 70%;"></colgroup><thead><tr><th name="CountInterval" class="">消息发送次数</th><th name="MsgUser" class="">消息发送人数</th><th name="Percent" class="" style="text-align: left;">占比</th></tr></thead><tbody><tr><td><div style="width: 100%; height: 100%;text-align:left;">1-5次</div></td><td><div style="width: 100%; height: 100%;text-align:right;">78(95.12%)</div></td><td><div style="width: 100%; height: 100%;text-align:left;"><span><div class="ui_progress"><div style="width:96.12%; background:#44B549" class="ui_progress_bar"></div></div></span></div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">6-10次</div></td><td><div style="width: 100%; height: 100%;text-align:right;">3(3.66%)</div></td><td><div style="width: 100%; height: 100%;text-align:left;"><span><div class="ui_progress"><div style="width:4.66%; background:#44B549" class="ui_progress_bar"></div></div></span></div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">10次以上</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1(1.22%)</div></td><td><div style="width: 100%; height: 100%;text-align:left;"><span><div class="ui_progress"><div style="width:2.22%; background:#44B549" class="ui_progress_bar"></div></div></span></div></td></tr></tbody></table><div class="pagination pagination_wrp" style="display: none;"><span class="page_nav_area"><span class="page_num"><label>1</label>
<span class="num_gap">/</span>
<label>1</label></span><span class="goto_area"><input type="text">
<a class="button page_go" href="javascript:;">跳转</a></span></span></div></div>
			</div>
        </div>
        <hr class="split">
        <!-- 详细数据表格start -->
        <h4 class="sub_title">详细数据
             <span class="more_menu">
				<a href="javascript:;" onclick="export_excel()"><i class="icon_export"></i>导出CSV</a>
			</span>
        </h4>
        <div class="sub_content">
            <div class="column cf">
    <div class="column-title cf">
<!--         <span class="link-thin"><i class="icon-download-x"></i><a href="#" onclick="export_excel()">导出CSV</a></span> -->
        <div class="btn-append" id="set_table"></div>
    </div>
    <div id="table_list" class="gri_wrapper"><table class="gri_stable" id="table_list_table"><colgroup span="4"><col class="gri_RefDate"><col class="gri_MsgUser"><col class="gri_MsgCount"><col class="gri_MsgPerUser"></colgroup><thead><tr><th name="RefDate" class="hover enable" style="text-align: left;">时间<i class="icon-order-hover"></i></th><th name="MsgUser" class="hover enable row_hover">消息发送人数<i class="icon-order-hover"></i></th><th name="MsgCount" class="hover enable">消息发送次数<i class="icon-order-hover"></i></th><th name="MsgPerUser" class="hover enable">人均发送次数<i class="icon-order-hover"></i></th></tr></thead><tbody><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-27</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">2</div></td><td><div style="width: 100%; height: 100%;text-align:right;">4</div></td><td><div style="width: 100%; height: 100%;text-align:right;">2.0</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-25</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">2</div></td><td><div style="width: 100%; height: 100%;text-align:right;">4</div></td><td><div style="width: 100%; height: 100%;text-align:right;">2.0</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-24</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">4</div></td><td><div style="width: 100%; height: 100%;text-align:right;">7</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1.8</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-23</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">6</div></td><td><div style="width: 100%; height: 100%;text-align:right;">7</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1.2</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-22</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">3</div></td><td><div style="width: 100%; height: 100%;text-align:right;">4</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1.3</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-21</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">3</div></td><td><div style="width: 100%; height: 100%;text-align:right;">3</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1.0</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-20</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">3</div></td><td><div style="width: 100%; height: 100%;text-align:right;">3</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1.0</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-19</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">4</div></td><td><div style="width: 100%; height: 100%;text-align:right;">5</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1.3</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-18</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">2</div></td><td><div style="width: 100%; height: 100%;text-align:right;">2</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1.0</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-17</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">3</div></td><td><div style="width: 100%; height: 100%;text-align:right;">7</div></td><td><div style="width: 100%; height: 100%;text-align:right;">2.3</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-16</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">2</div></td><td><div style="width: 100%; height: 100%;text-align:right;">2</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1.0</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-15</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">6</div></td><td><div style="width: 100%; height: 100%;text-align:right;">12</div></td><td><div style="width: 100%; height: 100%;text-align:right;">2.0</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-14</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">2</div></td><td><div style="width: 100%; height: 100%;text-align:right;">2</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1.0</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-13</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">2</div></td><td><div style="width: 100%; height: 100%;text-align:right;">26</div></td><td><div style="width: 100%; height: 100%;text-align:right;">13.0</div></td></tr></tbody></table><div class="pagination pagination_wrp"><span class="page_nav_area"><span class="page_num"><label>1</label>
<span class="num_gap">/</span>
<label>2</label></span><a class="button page_next" href="javascript:;"><i class="arrow"></i></a><span class="goto_area"><input type="text">
<a class="button page_go" href="javascript:;">跳转</a></span></span></div></div>
</div>        </div>
        <!-- 详细数据表格end -->
    </div>
</div>
<script type="text/javascript">
//    function buildDistributeData(){
//    	if(MTA.Page.Condition.message_type && MTA.Page.Condition.message_type.getValue() !== '-1'){
//    		$('#_mask').length<=0 && function(){
//    			$(['<div class="ui_mask" id="_mask">',
//					'<div class="ui_mask_mask"></div>',
//					'<div class="ui_mask_tips">该数据不可用</div>',
//				'</div>'].join('')).insertAfter('#valiable');
//    		}();
//    	}
//    	else{
//    		var url = '/wechat/ctr_message/get_distribute_data';
//	    	MTA.Data.loadPageTable(url, 'table_list1', function(){
//              $('#table_list1_table th:last').css('text-align','left');
//	    		$('.gri_Percent').length>0 && $('.gri_Percent').css('width', '70%');
//	    	});
//	    	$('#_mask').length > 0 && $('#_mask').remove();
//    	}
//    }
//
//    function export_excel()
//    {
//        var tableUrl = '/wechat/ctr_message/get_table_data';
//
//        MTA.Data.exportTable(tableUrl);
//    }
//
//    //绑定查询结果，表格与图形数据绑定
//    function buildData()
//    {
//        buildChart();
// 
//        //buildDataTable();
//        var tableUrl = pathname+'/get_table_data/';
//        MTA.Data.loadPageTable(tableUrl, 'table_list', function(){
//            hightLightTable();
//        });
//        
//        buildDistributeData();
//    }
//
//    function changeFilter(){
//        buildData();
//        buildKeyIndex();
//    }
//    //应用的初始化参数
//    var initParams = {"start_date":"2014-08-29","end_date":"2014-09-27","source":{"seg0":[{"name":"\u5168\u90e8","value":"-1","isDefault":1}],"seg1":[{"name":"\u641c\u7d22\u516c\u4f17\u53f7\u540d\u79f0","value":"35"},{"name":"\u641c\u7d22\u5fae\u4fe1\u53f7","value":"3"},{"name":"\u56fe\u6587\u6d88\u606f\u53f3\u4e0a\u89d2\u83dc\u5355","value":"43"},{"name":"\u540d\u7247\u5206\u4eab","value":"17"},{"name":"\u626b\u4e8c\u7ef4\u7801\u53ca\u5176\u4ed6","value":"0"}]},"table_options":[{"key":"table_channel_group_split","value":"\u6e20\u9053\u7ec6\u5206","group":"channel"},{"key":"table_channel_group_other","value":"\u5408\u5e76\u5176\u5b83\u9879","group":"channel"},{"key":"table_version_group_split","value":"\u7248\u672c\u7ec6\u5206","group":"version"},{"key":"table_version_group_other","value":"\u5408\u5e76\u5176\u5b83\u9879","group":"version"}],"chart_options":[{"key":"chart_channel_group_split","value":"\u6e20\u9053\u7ec6\u5206","group":"channel"},{"key":"chart_channel_group_other","value":"\u5408\u5e76\u5176\u5b83\u9879","group":"channel"},{"key":"chart_version_group_split","value":"\u7248\u672c\u7ec6\u5206","group":"version"},{"key":"chart_version_group_other","value":"\u5408\u5e76\u5176\u5b83\u9879","group":"version"},{"key":"chart_calc_sum","value":"\u663e\u793a\u5c0f\u8ba1"}],"need_compare":1,"real_time":0},
//    	message_type = {"seg0":[{"name":"\u5168\u90e8","value":"-1","isDefault":1}],"seg1":[{"name":"\u6587\u5b57","value":"1"},{"name":"\u56fe\u7247","value":"2"},{"name":"\u8bed\u97f3","value":"3"},{"name":"\u89c6\u9891","value":"4"},{"name":"\u6d3b\u52a8\u6d88\u606f","value":"5"},{"name":"\u7b2c\u4e09\u65b9\u5e94\u7528","value":"6"},{"name":"\u5355\u6761\u56fe\u6587","value":"7"},{"name":"\u591a\u6761\u56fe\u6587","value":"8"}]};
//    MTA.Page.init_params = initParams;
//
//    $(document).ready(function(){
//    	var conf = {
//            1 : '/wechat/ctr_message/get_chart_data?index=MsgUser',
//            2 : '/wechat/ctr_message/get_chart_data?index=MsgCount',
//            3 : '/wechat/ctr_message/get_chart_data?index=MsgPerUser'
//        };
//        MTA.Util.view_switcher.init(conf, 'buildChart');
//    	
//        var dateObj = {
//            inputId:'date',
//            target:'datePicker',
//            startDate: initParams.start_date || '',
//            endDate: initParams.end_date || '',
//            startCompareDate: initParams.start_compare_date || '',
//            endCompareDate: initParams.end_compare_date || '',
//            needCompare: initParams.need_compare || '1',
//            defaultText : ''|| ' 至 ',
//            singleCompare : '',
//            isTodayValid: initParams.real_time || false,
//            validStartTime: '1304611200',
//            minValidDate: minValidDate
//        };
//
//        //MTA.Page.Condition.source = new MTA.Selector('#div_source', 'source', initParams.source, 'buildData');
//        //MTA.Page.Condition.message_type = new MTA.Selector('#div_message_type', 'message_type', message_type, 'changeFilter');
//
//        MTA.Report.initialize(dateObj, 'buildData');
//
//		//日报，月报切换
//		var report_list = [{"name":"\u5c0f\u65f6\u62a5","value":"hour"},{"name":"\u65e5\u62a5","value":"day"},{"name":"\u5468\u62a5","value":"week"},{"name":"\u6708\u62a5","value":"month"}];
//    	var time_type = 'day';
//    	MTA.Report.initReportList(report_list, time_type);
//
//        //页面tips
//        var items = {"\u6d88\u606f\u53d1\u9001\u4eba\u6570":"\u5173\u6ce8\u8005\u4e3b\u52a8\u53d1\u9001\u6d88\u606f\u7684\u53bb\u91cd\u7528\u6237\u6570","\u6d88\u606f\u53d1\u9001\u6b21\u6570":"\u5173\u6ce8\u8005\u4e3b\u52a8\u53d1\u9001\u6d88\u606f\u7684\u6b21\u6570","\u4eba\u5747\u53d1\u9001\u6b21\u6570":"\u6d88\u606f\u53d1\u9001\u603b\u6b21\u6570\/\u6d88\u606f\u53d1\u9001\u7684\u53bb\u91cd\u7528\u6237\u6570","\u65e5\u3001\u5468\u3001\u6708":"\u5206\u522b\u8ba1\u7b97\u6628\u65e5\u6570\u636e\u76f8\u6bd41\u5929\u30017\u5929\u300130\u5929\u524d\u7684\u53d8\u5316\u60c5\u51b5"};
//        MTA.Util.items_info.init(items,'wechat');
//
//        buildKeyIndex();
//    });

</script>    </div> <!-- end of main -->
</div> <!-- end of content 
<!-- 腾讯分析脚本 -->
<script type="text/javascript" src="stats" charset="UTF-8"></script>
<script type="text/javascript">
$(function(){
    $('.dropdown_select').each(function(i){
        var timeOut = 300, timer = null, option = '',sel = $(this);
        var selectId = 'select_'+i;
        var dropdownId = 'dropdown_select_'+i;
        var hidePop = function(){
            $('#'+dropdownId).removeClass('open');
        };
        sel.hide().find("option").each(function(){
            option += '<li class="dropdown_data_item"><a href="javascript:;" data-val="' + $(this).attr('value') + '">' +
                       $(this).text() + '</a></li>';
        })
        sel.after('<div class="dropdown_menu" id="' + dropdownId + '">'
            + '    <a href="javascript:;" class="button dropdown_switch">'
            + '        <label>'+$(this).find("option:first").text()+'</label>'
            + '        <i class="arrow"></i>'
            + '    </a>'
            + '    <ul class="dropdown_data_list">'
            +  option
            + '    </ul>'
            + '</div>'
        );
        var _elm = $('#'+dropdownId);
        _elm.mouseover(function(){
            clearTimeout(timer);
        });
        _elm.bind('mouseleave',function(){
            timer = setTimeout(hidePop, timeOut);
        });
        _elm.find('.dropdown_switch').bind('click',function(){
            _elm.addClass('open');
        });
        _elm.find('.dropdown_data_item>a').bind('click',function(){
            sel.val($(this).data('val')).change();
            _elm.find('label').text($(this).text());
            hidePop();
        });
        _elm.width(_elm.find('ul').width());
    });
    if ("wechat"!='wechat') {
        $(".wechat_data_range").remove();
    } else {
        if ($('#report_list ul').length == 0 && typeof show_header == 'undefined') {
            $('.mod_header').css({'height':0,'padding':0});
            $('.mod_header .help').css({'top':'15px','right':'10px'});
        }
    }
})
</script>
<script>
           var chart;

var options = {
    credits: { enabled:false },
    chart: {
       renderTo: 'chartContainer',
       type:'area'
    },
    chartType: "area",
    title: {
        text: '',
        x: -20 //center
    },
    xAxis: {
        events : {afterSetExtremes : loadDate },
        categories : [ ]
       
    },
     legend: {
            borderWidth: 0,
            color:"#44b549"
        },
    yAxis: {
    	title: { text: '' },
         gridLineWidth:0.3,
         tickInterval:50,
        min:0,
        plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
    },

     plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#44b549',
                lineWidth: 2,
                fillOpacity:0.02,
                marker: {
                    lineWidth: 1,
                    lineColor: '#44b549'
                }
            }
        },
     tooltip: {
            shared: true, //是否共享提示，也就是X一样的所有点都显示出来
            useHTML: true, //是否使用HTML编辑提示信息
            backgroundColor: '#555556',
            borderColor: '#555556',
            headerFormat: '<span style=" background:#555556; color: #fff; font-size:12px;font-family: Tahoma, "microsoft yahei", 微软雅黑, 宋体;  position: absolute; white-space: nowrap; margin: 0px; left: 8px; top: 8px;padding:8px;"><div style="padding:5px;"><b>{point.key}</b></div><table style=" width: 150px;line-height: normal;text-align: left;color: #fff;">',
            pointFormat: '<tr><td style="padding: 2px 5px; font-size:12px;"">{series.name}: </td>' +
            '<td style="text-align: right;padding-left:15px1;font-size:12px;">{point.y}</td></tr>',
            footerFormat: '</table></span>',
            valueDecimals: 0 
        }
};

$(document).ready(function(){
	// 获取测点数据
	//loadSensor();
	
//	var series = {
//		data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 29.6],
//		name: "新关注人数"
//	};
//		
//	chart = new Highcharts.Chart(options);
//	chart.addSeries(series);
        loadDate();
         $("#btn_sure").click(function(){
		loadDate();
	});
        
        
});

// 获取数据
    function loadDate() {
        //var sensor = $.trim($("#sensor").val());
        //chart.showLoading('正在加载数据...');
        
        $.ajax({
            url : '<?=site_url()?>report/getUserAnalyzeData',
            type : 'POST',
            dataType : 'json',
            contentType: "application/x-www-form-urlencoded; charset=utf-8", 
            success : function(data) {
                       // alert(typeof(data.data1));
                        //document.write(data.data1);
                       var seriesNew = {
                   // yAxis: 0,
                                color:"#44b549",
                                //color:'rgba(135, 179, 212, 0.05)',
                    name: '新关注人数',
                                 marker:{
                                   // fillColor:'rgba(135, 179, 212, 0.05)'
                                 },
                                dataFormat: 1,
                                 type:'area',
                               // data: JSON.parse("[" + data + "]") 
                                //data: JSON.parse("[" + data.series + "]") 
                                data : data.series
                };//加载数据的时候把之前的覆盖掉
                       var    xAxisNew = {
                           // events : {afterSetExtremes : loadDate },
                            //categories : JSON.parse("[" + data.categories + "]") 
                            tickInterval:4,
                            categories :data.categories
                        };
                          options.xAxis =   xAxisNew;
                chart = new Highcharts.Chart(options);
                chart.addSeries(seriesNew);
                        //  chart.addAxis (xAxisNew);
//                        var seriesNew = {
//                                        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 0.6],
//                                        name: "默认测点"
//                                };
//                                seriesNew.data=data.data1;
                               // chart = new Highcharts.Chart(options);
                                //chart.addSeries(seriesNew);
            }
        });
    }


        </script>

<div id="calendar_1411912344267" class="ta_calendar ta_calendar2 cf" style="z-index: 9999; display: none;"><div class="ta_calendar_cont cf" id="dateRangePicker_1411912344267"><table class="dateRangeDateTable"><caption>2014年8月</caption><thead><tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr></thead><tbody><tr><td colspan="7" style="text-align: center;"><a href="javascript:void(0);" id="dateRangePreMonth_1411912344267"><i class="i_pre"></i></a></td></tr><tr><td class="ta_dateRangeGray">27</td><td class="ta_dateRangeGray">28</td><td class="ta_dateRangeGray">29</td><td class="ta_dateRangeGray">30</td><td class="ta_dateRangeGray">31</td><td id="calendar_1411912344267_2014-8-1" style="cursor: pointer;">1</td><td id="calendar_1411912344267_2014-8-2" style="cursor: pointer;">2</td></tr><tr><td id="calendar_1411912344267_2014-8-3" style="cursor: pointer;">3</td><td id="calendar_1411912344267_2014-8-4" style="cursor: pointer;">4</td><td id="calendar_1411912344267_2014-8-5" style="cursor: pointer;">5</td><td id="calendar_1411912344267_2014-8-6" style="cursor: pointer;">6</td><td id="calendar_1411912344267_2014-8-7" style="cursor: pointer;">7</td><td id="calendar_1411912344267_2014-8-8" style="cursor: pointer;">8</td><td id="calendar_1411912344267_2014-8-9" style="cursor: pointer;">9</td></tr><tr><td id="calendar_1411912344267_2014-8-10" style="cursor: pointer;">10</td><td id="calendar_1411912344267_2014-8-11" style="cursor: pointer;">11</td><td id="calendar_1411912344267_2014-8-12" style="cursor: pointer;">12</td><td id="calendar_1411912344267_2014-8-13" style="cursor: pointer;">13</td><td id="calendar_1411912344267_2014-8-14" style="cursor: pointer;">14</td><td id="calendar_1411912344267_2014-8-15" style="cursor: pointer;">15</td><td id="calendar_1411912344267_2014-8-16" style="cursor: pointer;">16</td></tr><tr><td id="calendar_1411912344267_2014-8-17" style="cursor: pointer;">17</td><td id="calendar_1411912344267_2014-8-18" style="cursor: pointer;">18</td><td id="calendar_1411912344267_2014-8-19" style="cursor: pointer;">19</td><td id="calendar_1411912344267_2014-8-20" style="cursor: pointer;">20</td><td id="calendar_1411912344267_2014-8-21" style="cursor: pointer;">21</td><td id="calendar_1411912344267_2014-8-22" style="cursor: pointer;">22</td><td id="calendar_1411912344267_2014-8-23" style="cursor: pointer;">23</td></tr><tr><td id="calendar_1411912344267_2014-8-24" style="cursor: pointer;">24</td><td id="calendar_1411912344267_2014-8-25" style="cursor: pointer;">25</td><td id="calendar_1411912344267_2014-8-26" style="cursor: pointer;">26</td><td id="calendar_1411912344267_2014-8-27" style="cursor: pointer;">27</td><td id="calendar_1411912344267_2014-8-28" style="cursor: pointer;">28</td><td id="calendar_1411912344267_2014-8-29" class="first" style="cursor: pointer;">29</td><td id="calendar_1411912344267_2014-8-30" class="ta_dateRangeSelected" style="cursor: pointer;">30</td></tr><tr><td id="calendar_1411912344267_2014-8-31" class="ta_dateRangeSelected" style="cursor: pointer;">31</td><td class="ta_dateRangeGray">1</td><td class="ta_dateRangeGray">2</td><td class="ta_dateRangeGray">3</td><td class="ta_dateRangeGray">4</td><td class="ta_dateRangeGray">5</td><td class="ta_dateRangeGray">6</td></tr></tbody></table><table class="dateRangeDateTable"><caption>2014年9月</caption><thead><tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr></thead><tbody><tr><td colspan="7" style="text-align: center;"><a href="javascript:void(0);" id="dateRangeNextMonth_1411912344267"><i class="i_next"></i></a></td></tr><tr><td class="ta_dateRangeGray">31</td><td id="calendar_1411912344267_2014-9-1" class="ta_dateRangeSelected" style="cursor: pointer;">1</td><td id="calendar_1411912344267_2014-9-2" class="ta_dateRangeSelected" style="cursor: pointer;">2</td><td id="calendar_1411912344267_2014-9-3" class="ta_dateRangeSelected" style="cursor: pointer;">3</td><td id="calendar_1411912344267_2014-9-4" class="ta_dateRangeSelected" style="cursor: pointer;">4</td><td id="calendar_1411912344267_2014-9-5" class="ta_dateRangeSelected" style="cursor: pointer;">5</td><td id="calendar_1411912344267_2014-9-6" class="ta_dateRangeSelected" style="cursor: pointer;">6</td></tr><tr><td id="calendar_1411912344267_2014-9-7" class="ta_dateRangeSelected" style="cursor: pointer;">7</td><td id="calendar_1411912344267_2014-9-8" class="ta_dateRangeSelected" style="cursor: pointer;">8</td><td id="calendar_1411912344267_2014-9-9" class="ta_dateRangeSelected" style="cursor: pointer;">9</td><td id="calendar_1411912344267_2014-9-10" class="ta_dateRangeSelected" style="cursor: pointer;">10</td><td id="calendar_1411912344267_2014-9-11" class="ta_dateRangeSelected" style="cursor: pointer;">11</td><td id="calendar_1411912344267_2014-9-12" class="ta_dateRangeSelected" style="cursor: pointer;">12</td><td id="calendar_1411912344267_2014-9-13" class="ta_dateRangeSelected" style="cursor: pointer;">13</td></tr><tr><td id="calendar_1411912344267_2014-9-14" class="ta_dateRangeSelected" style="cursor: pointer;">14</td><td id="calendar_1411912344267_2014-9-15" class="ta_dateRangeSelected" style="cursor: pointer;">15</td><td id="calendar_1411912344267_2014-9-16" class="ta_dateRangeSelected" style="cursor: pointer;">16</td><td id="calendar_1411912344267_2014-9-17" class="ta_dateRangeSelected" style="cursor: pointer;">17</td><td id="calendar_1411912344267_2014-9-18" class="ta_dateRangeSelected" style="cursor: pointer;">18</td><td id="calendar_1411912344267_2014-9-19" class="ta_dateRangeSelected" style="cursor: pointer;">19</td><td id="calendar_1411912344267_2014-9-20" class="ta_dateRangeSelected" style="cursor: pointer;">20</td></tr><tr><td id="calendar_1411912344267_2014-9-21" class="ta_dateRangeSelected" style="cursor: pointer;">21</td><td id="calendar_1411912344267_2014-9-22" class="ta_dateRangeSelected" style="cursor: pointer;">22</td><td id="calendar_1411912344267_2014-9-23" class="ta_dateRangeSelected" style="cursor: pointer;">23</td><td id="calendar_1411912344267_2014-9-24" class="ta_dateRangeSelected" style="cursor: pointer;">24</td><td id="calendar_1411912344267_2014-9-25" class="ta_dateRangeSelected" style="cursor: pointer;">25</td><td id="calendar_1411912344267_2014-9-26" class="ta_dateRangeSelected" style="cursor: pointer;">26</td><td id="calendar_1411912344267_2014-9-27" class="last" style="cursor: pointer;">27</td></tr><tr><td class="ta_dateRangeGray">28</td><td class="ta_dateRangeGray">29</td><td class="ta_dateRangeGray">30</td><td class="ta_dateRangeGray">1</td><td class="ta_dateRangeGray">2</td><td class="ta_dateRangeGray">3</td><td class="ta_dateRangeGray">4</td></tr></tbody></table></div><div class="ta_calendar_footer cf"><div class="frm_msg"><div id="dateRangeDiv_1411912344267"><input type="text" class="ta_ipt_text_s ta_dateRangeSelected" name="startDate_1411912344267" id="startDate_1411912344267" value="2014-08-29" readonly="" style="background-repeat: repeat repeat;"><span class="joinLine"> - </span><input type="text" class="ta_ipt_text_s" name="endDate_1411912344267" id="endDate_1411912344267" value="2014-09-27" readonly=""><br></div><div id="dateRangeCompareDiv_1411912344267" style="display: none;"><input type="text" class="ta_ipt_text_s" name="startCompareDate_1411912344267" id="startCompareDate_1411912344267" value="" readonly=""><span class="joinLine"> - </span><input type="text" class="ta_ipt_text_s" name="endCompareDate_1411912344267" id="endCompareDate_1411912344267" value="" readonly=""></div></div><div class="frm_btn"><input class="ta_btn ta_btn_primary" type="button" name="submit_1411912344267" id="submit_1411912344267" value="确定"><input class="ta_btn" type="button" id="closeBtn_1411912344267" value="取消"></div></div></div></body></html>