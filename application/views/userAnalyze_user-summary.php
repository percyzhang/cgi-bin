<!DOCTYPE html>
<!-- saved from url=(0323)https://mta.qq.com/mta/wechat/ctr_user_summary?appid=wxa3ab354bb9cee3e9&pluginid=luopan&token=ll1D85fGDCTr4AAxC_RrFIsraM1eajMksOjZN_eXodrPosSSPCqPclKWIbLpXyI0sVDJzf7YZAJC873SLezCCozIASgbVLXuB64fF5nZdoLxGhBq4aoXDip1jmfd2AXI&devtype=3&jsurl=https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe1ec5f7.js&version=2 -->
<html class="mta_wechat"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <meta name="Description" content="">
    <meta name="Keywords" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>用户增长-用户分析</title>
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
	<style>

	</style>

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
    
    <link rel="stylesheet" type="text/css" href="<?=base_url()?>weixin/zhang.css" charset="utf-8">
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
<!--
<script type="text/javascript">

    //编码js脚本
    function trimScript(v){
        return v.replace(/(<script[^>]*?>)((.|\r|\n)*?)(<\/script>)/gi,"");
    }

    var url = location.href.match(/(?:\?|&)jsurl=([^&$]*)/);
    if( url && url[1] ){
        var u = trimScript(url[1]);
        document.write('<script src="' + u + '"></'+'script>');
        document.cookie = 'jsurl='+u;
    }
    else {
        url = document.cookie.match(/jsurl=([^;$]*)/);
        if( url && url[1] ){
            var u = trimScript(url[1]);
            document.write('<script src="' + u + '"></'+'script>');
        }
    }

var app_list = [];
    var app_id = 1;
    var wx_uin = 3095249804;
    var time_type = 'day';
    var verify_params = {"appid":"wxa3ab354bb9cee3e9","pluginid":"luopan","token":"ll1D85fGDCTr4AAxC_RrFIsraM1eajMksOjZN_eXodrPosSSPCqPclKWIbLpXyI0sVDJzf7YZAJC873SLezCCozIASgbVLXuB64fF5nZdoLxGhBq4aoXDip1jmfd2AXI","from":"","devtype":"3"};
    var minValidDate = 1372608000;
    $(document).ready(function(){
        for (var x in verify_params){
            MTA.Util.setParams(x, verify_params[x]);
        }
        if (time_type){
            MTA.Util.setParams('time_type', time_type);
        }
        MTA.Function.setMenuParams = function(){
            return verify_params;
        };
    });

    MTA.Config.theme = 'wechat';
    MTA.Page.app = new MTA.Applist(app_list, 'app_list', app_id);

    MTA = window.MTA || {};
    MTA.loginUser = MTA.loginUser || {};
    MTA.loginUser = {
        loginName: 'wxa3ab354bb9cee3e9'
    };

    MTA.logout = function(){
        document.location.href = 'http://mta.qq.com';
    }
    MTA.login = (function(){
        var VERIFY_URL = 'http://mta.qq.com/';
        var _loginDialog = null, _maskDiv = null;
        var _isOpenLogin = false;
        var _dialogX, _dialogY, _dialogW = 0, _dialogH = 0;
        var _retUrl = '';

        function setCenter(){
            if (!_isOpenLogin){return;}

            var ww, wh, bgX, bgY;
            var dde = document.documentElement;
            if (top.innerWidth){
                ww = top.innerWidth;
                wh = top.innerHeight;
                bgX = top.pageXOffset;
                bgY = top.pageYOffset;
            }else{
                ww = dde.offsetWidth;
                wh = dde.offsetHeight;
                bgX = dde.scrollLeft;
                bgY = dde.scrollTop;
            }

            _loginDialog.style.left = (bgX + (ww - _dialogW)/2) + 'px';
            _loginDialog.style.top = (bgY + (wh - _dialogH)/3) + 'px';

            GRI.Util.mask.create();

            setTimeout(setCenter,100);
        }

        function createLoginDialog(){
            if (!_loginDialog){
                _loginDialog = document.createElement("div");
            }
            var oS = _loginDialog.style;
            oS.display = "block";
            oS.top = "1px";
            oS.left = "1px";
            oS.margin = "0px";
            oS.padding = "0px";
            oS.width = "1px";
            oS.height = "1px";
            oS.position = "absolute";
            oS.zIndex = "1000";
            _loginDialog.innerHTML='<iframe frameborder="0" scrolling="no" width="100%" height="100%" src="#"></iframe>';
            document.getElementsByTagName("body")[0].appendChild(_loginDialog);


            if (!_retUrl){
                _retUrl = VERIFY_URL;
            }

            var url = "http://ui.ptlogin2.qq.com/cgi-bin/login";
            url += "?qlogin_auto_login=0";//1 为支持自动登陆
            url += "&style=12";
            url += "&appid=518011204";
            url += "&daid=150";
            url += "&s_url=" + encodeURIComponent(_retUrl);
//		url += encodeURIComponent(VERIFY_URL + '?ref=' + encodeURIComponent(_retUrl) + '&rnd=' + Math.random());
            _loginDialog.getElementsByTagName('iframe')[0].src = url;
        }

        return {
            open: function(retUrl){
                if (_isOpenLogin){
                    return;
                }
                document.domain="qq.com";
                _retUrl = retUrl;
                _isOpenLogin = true;
                createLoginDialog();
                setCenter();
            },
            resize: function(w, h){
                if(_loginDialog){
                    _loginDialog.style.visibility = "hidden";
                    _loginDialog.style.width = w + "px";
                    _loginDialog.style.height = h + "px";
                    _loginDialog.style.visibility = "visible";

                    _dialogW = w;
                    _dialogH = h;

                    setCenter();
                }
            },
            close: function(){
                if(_loginDialog){
                    _isOpenLogin = false;
                    _loginDialog.style.display="none";
                    GRI.Util.mask.destroy();
                }
            }
        };
    })();

    window.ptlogin2_onClose = MTA.login.close;
    window.ptlogin2_onResize = MTA.login.resize;

    /*
    * 高亮表格
    * */
    function hightLightTable(){
        var data = {"1":{"th":[2],"td":[2]},"2":{"th":[3],"td":[3]},"3":{"th":[4],"td":[4]},"4":{"th":[5],"td":[5]}};
        var offset = -1;
        if ('hour' == time_type){//耦合...
            offset = 0;
        }
        if ($("#btn_compare").html() == "取消对比"){
            offset ++;//按时间对比情况下，表格前面会多出一列
        }
        var opts = {'table_id':'table_list', 'data':data};
        var id = $("#div_item_tabs a.current").attr('id').match(/tab_(\d{1,2})/i)[1];
        if (typeof(opts['data'][id]) == 'object'){
            var d = opts['data'][id];
            $("#"+opts['table_id']+" th").removeClass("row_hover");
            $("#"+opts['table_id']+" td").removeClass("row_hover");
            for (var i = 0; i < d['th'].length; i++){
                $("#"+opts['table_id']+" thead th:eq("+(d['th'][i]+offset)+")").addClass("row_hover");
            }

            for (var i = 0; i < d['td'].length; i++){
                $("#"+opts['table_id']+" tbody tr").each(function(){
                    var tdoffset = offset - ($("#"+opts['table_id']+" tbody tr:eq(0) td").length - $(this).children("td").length);
                    $(this).children("td:eq("+(d['td'][i]+tdoffset)+")").addClass("row_hover");
                });
            }
        }
        $('th[name="RefDate"]').css("text-align",'left');//对比时调整时间列对齐
    }

    var pathname = location.pathname.replace("/mta", "");
    function buildChart()
    {
        MTA.Data.loadChart(MTA.Page.Variable.tab_url, {theme: 'wechat'}, 'chartContainer');
        hightLightTable();
    }

    function buildDataTable()
    {
        /**
         * 表的cgi地址
         */
        var tableUrl = pathname+'/get_table_data/';
        /**
         * 加载表的数据
         */
        MTA.Data.loadPageTable(tableUrl, 'table_list', hightLightTable);
    }

    function buildKeyIndex()
    {
        var url = pathname+'/get_key_index_data_and_chart';
        MTA.Data.loadKeyIndex(url, 'key_index');
    }

    function export_excel()
    {
        var tableUrl = pathname+'/export_table_data/';

        MTA.Data.exportTable(tableUrl);
    }
</script> -->
<script src="<?=base_url()?>weixin/iframe1ec5f7.js"></script><iframe src="about:blank" style="display: none;"></iframe>
<!-- 站点列表的js库:end -->
<div id="content">
    <div id="sidebar">
        <div id="sub_nav"><div class="mod_sidemenu"><h3 class="title" id="parent_menu_1"><a href="javascript:;"><i class="icon_user"></i>用户分析<i id="i_menu_1" class="icon_menu"></i></a></h3><div id="child_menu_1" style="position:relative;zoom:1"><ul class="content"><li class="current"><a id="menu_101" href="https://mta.qq.com/mta/wechat/ctr_user_summary">用户增长</a></li></ul><ul class="content"><li><a id="menu_103" href="https://mta.qq.com/mta/wechat/ctr_user_attr">用户属性</a></li></ul></div></div><div class="mod_sidemenu"><h3 class="title" id="parent_menu_2"><a href="javascript:;"><i class="icon_app"></i>图文分析<i id="i_menu_2" class="icon_menu"></i></a></h3><div id="child_menu_2" style="position:relative;zoom:1"><ul class="content"><li><a id="menu_201" href="https://mta.qq.com/mta/wechat/ctr_article_detail">图文群发</a></li></ul><ul class="content"><li><a id="menu_202" href="https://mta.qq.com/mta/wechat/ctr_article_analyse">图文统计</a></li></ul></div></div><div class="mod_sidemenu"><h3 class="title" id="parent_menu_3"><a href="javascript:;"><i class="icon_run"></i>消息分析<i id="i_menu_3" class="icon_menu"></i></a></h3><div id="child_menu_3" style="position:relative;zoom:1"><ul class="content"><li><a id="menu_301" href="https://mta.qq.com/mta/wechat/ctr_message">消息发送</a></li></ul><ul class="content"><li><a id="menu_302" href="https://mta.qq.com/mta/wechat/ctr_keyword">消息关键词</a></li></ul></div></div><div class="mod_sidemenu"><h3 class="title" id="parent_menu_4"><a href="javascript:;"><i class="icon_develop"></i>开发支持<i id="i_menu_4" class="icon_menu"></i></a></h3><div id="child_menu_4" style="position:relative;zoom:1"><ul class="content"><li><a id="menu_401" href="https://mta.qq.com/mta/wechat/ctr_interface">接口分析</a></li></ul></div></div><div class="mod_sidemenu"><h3 class="title" id="parent_menu_5"><a href="javascript:;"><i class="icon_netspeed"></i>设备功能<i id="i_menu_5" class="icon_menu"></i></a></h3><div id="child_menu_5" style="position:relative;zoom:1"><ul class="content"><li><a id="menu_501" href="https://mta.qq.com/mta/wechat/ctr_device_summary">设备功能</a></li></ul></div></div></div>
        <div id="div_sidemenu_other" class="mod_sidemenu_other" style="display:none">
            <ul class="content">
                <li class="sdk_down"><a href="https://mta.qq.com/mta/other/ctr_sdk_manage/download" target="_blank"><i class="icon_down"></i>SDK下载</a></li>
                <li class="my_app">
                                            <a href="javascript:void(0);" onClick="GRI.Util.hotClick(&#39;0_1_wxa3ab354bb9cee3e9_link.leftbar.to.myapp&#39;, &#39;https://mta.qq.com/mta/overview/ctr_all_app&#39;)">我的应用</a>
                                    </li>
                <li class="help_center"><a onClick="GRI.Util.hotClick(&#39;0_1_wxa3ab354bb9cee3e9_link.header.to.home&#39;, &#39;https://mta.qq.com/mta&#39;);" href="https://mta.qq.com/mta/wechat/ctr_user_summary?appid=wxa3ab354bb9cee3e9&pluginid=luopan&token=ll1D85fGDCTr4AAxC_RrFIsraM1eajMksOjZN_eXodrPosSSPCqPclKWIbLpXyI0sVDJzf7YZAJC873SLezCCozIASgbVLXuB64fF5nZdoLxGhBq4aoXDip1jmfd2AXI&devtype=3&jsurl=https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe1ec5f7.js&version=2#">帮助中心</a></li>
            </ul>
        </div>
    </div>
    <div id="main">
        <div class="mod_header" style="height: 0px; padding: 0px;">
            <div class="title">
                <span class="more"><a href="https://mta.qq.com/mta/wechat/ctr_user_summary?appid=wxa3ab354bb9cee3e9&pluginid=luopan&token=ll1D85fGDCTr4AAxC_RrFIsraM1eajMksOjZN_eXodrPosSSPCqPclKWIbLpXyI0sVDJzf7YZAJC873SLezCCozIASgbVLXuB64fF5nZdoLxGhBq4aoXDip1jmfd2AXI&devtype=3&jsurl=https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe1ec5f7.js&version=2#" class="viewDataDetail" id="lnk_arg" style="display: none"></a></span>
                <h2 id="h_title">用户增长</h2>
                <span id="wrap_items_info_help" class="mod_help" style="display: none;">
                    <a id="icon_items_info_help" href="javascript:;">?</a>
                    <span class="help_content">
                    指标说明
                    </span>
                </span>
                <span id="report_list"></span>
                <span class="eventBread" id="sp_navigation" style="display:none">
                </span>
                <!-- 	概览页面报表单独控制 -->
                            </div>
            <!---- 右上角指标说明浮层 start -->
			<!--
            <div class="help" id="wrap_items_info" style="top: 72px; right: 10px;">
                <a class="toggle" href="javascript:;">显示/收起</a>
                <div class="help_content">
                    <i class="dropdown_arrow out"></i>
                    <i class="dropdown_arrow in"></i>
                    <dl class="help-change-list" id="pop_items_info"><dt>新关注人数</dt><dd>新关注的去重用户数</dd><dt>取消关注人数</dt><dd>取消关注的去重用户数</dd><dt>净增关注人数</dt><dd>新关注与取消关注的用户数之差</dd><dt>累积关注人数</dt><dd>当前关注的用户总数</dd><dt>日、周、月</dt><dd>分别计算昨日数据相比1天、7天、30天前的变化情况</dd><dt>请注意</dt><dd>用户总数根据昨日数据计算，而用户管理模块根据当前实时数据计算，两者可能不一致</dd><div style="margin-top:6px;color: #000;"><b>数据由专业移动应用分析工具<br><a href="http://mta.qq.com/" target="_blank">腾讯云分析</a>&nbsp;合作提供</b></div></dl>
                    <div class="help-change-footer" id="footer_items_info"><span class="wechat_data_range">数据从2013年7月1日开始统计。</span>由于服务器缓存，以及指标计算方法和统计时间的差异，数据可能出现微小误差，一般在1%以内。</div>
                </div>
            </div> -->
            <!---- 右上角指标说明浮层 end -->
            <!-- Menu 对象初始化 : start-->
			<!-- 
            <script type="text/javascript">
                //数据初始化
                var main_menu = {"1":{"m_id":1,"m_name":"\u7528\u6237\u5206\u6790","m_icon_css":"icon_user","m_url":"\/wechat\/ctr_active_user","m_type":1,"m_display":1},"2":{"m_id":2,"m_name":"\u56fe\u6587\u5206\u6790","m_icon_css":"icon_app","m_url":"\/wechat\/ctr_article_analyse","m_type":1,"m_display":1},"3":{"m_id":3,"m_name":"\u6d88\u606f\u5206\u6790","m_icon_css":"icon_run","m_url":"\/wechat\/ctr_message","m_type":1,"m_display":1},"4":{"m_id":4,"m_name":"\u5f00\u53d1\u652f\u6301","m_icon_css":"icon_develop","m_url":"\/wechat\/ctr_interface","m_type":1,"m_display":1},"5":{"m_id":5,"m_name":"\u8bbe\u5907\u529f\u80fd","m_icon_css":"icon_netspeed","m_url":"","m_type":1,"m_display":1}};
                var sub_menu = {"101":{"m_id":101,"p_id":1,"m_name":"\u7528\u6237\u589e\u957f","m_tips":"\u7528\u6237\u589e\u957f","m_url":"\/wechat\/ctr_user_summary","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":1,"m_type":2,"m_display":1},"103":{"m_id":103,"p_id":1,"m_name":"\u7528\u6237\u5c5e\u6027","m_tips":"\u7528\u6237\u5c5e\u6027","m_url":"\/wechat\/ctr_user_attr","m_default_range":1,"m_has_realtime":0,"m_has_range":0,"m_need_compare":0,"m_type":2,"m_display":1},"201":{"m_id":201,"p_id":2,"m_name":"\u56fe\u6587\u7fa4\u53d1","m_tips":"\u56fe\u6587\u7fa4\u53d1","m_url":"\/wechat\/ctr_article_detail","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":1,"m_type":2,"m_display":1},"202":{"m_id":202,"p_id":2,"m_name":"\u56fe\u6587\u7edf\u8ba1","m_tips":"\u56fe\u6587\u7edf\u8ba1","m_url":"\/wechat\/ctr_article_analyse","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":1,"m_type":2,"m_display":1},"301":{"m_id":301,"p_id":3,"m_name":"\u6d88\u606f\u53d1\u9001","m_tips":"\u6d88\u606f\u53d1\u9001tips\uff0c\u5f85\u4ea7\u54c1\u786e\u5b9a\u540e\u6269\u5c55\u4e4b\u7528","m_url":"\/wechat\/ctr_message","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":1,"m_type":2,"m_display":1},"302":{"m_id":302,"p_id":3,"m_name":"\u6d88\u606f\u5173\u952e\u8bcd","m_tips":"\u7528\u6237\u53d1\u9001\u6587\u5b57\u4e2d\u6240\u5305\u542b\u7684\u7279\u6b8a\u540d\u8bcd","m_url":"\/wechat\/ctr_keyword","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":0,"m_type":2,"m_display":1},"401":{"m_id":401,"p_id":4,"m_name":"\u63a5\u53e3\u5206\u6790","m_tips":"\u63a5\u53e3\u5206\u6790","m_url":"\/wechat\/ctr_interface","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":1,"m_type":2,"m_display":1},"501":{"m_id":501,"p_id":5,"m_name":"\u8bbe\u5907\u529f\u80fd","m_tips":"\u8bbe\u5907\u529f\u80fd","m_url":"\/wechat\/ctr_device_summary","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":0,"m_type":2,"m_display":1}};
                var current_action = '/wechat/ctr_user_summary';
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
            </script> -->
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
        </div><div style="margin:20px 30px 0;"><div class="ui_tips"><i class="icon_info"></i>用户总数根据昨日数据计算，而用户管理模块根据当前实时数据计算，两者可能不一致。</div></div><!--end of mod_header-->
        <div class="mod_basic">
    <div class="title">
        <h3>昨日关键指标</h3>
    </div>
            <div class="content">
                <!-- 趋势格控件 开始 -->
                <table class="ui_trendgrid ui_trendgrid_4" id="key_index">
                    <tbody>
                        <tr><td class="first"><div class="ui_trendgrid_item"><div class="ui_trendgrid_chart" id="key_index_chart_NewUser"></div><dl><dt><b>新关注人数</b></dt><dd class="ui_trendgrid_number"><strong>51</strong><em class="ui_trendgrid_unit"></em></dd><dd>日<i class="icon_up" title="上升"></i>13.3%</dd><dd>周<i class="icon_down" title="下降"></i>19%</dd><dd>月<i class="icon_down" title="下降"></i>7.3%</dd></dl></div></td><td><div class="ui_trendgrid_item"><div class="ui_trendgrid_chart" id="key_index_chart_CancelUser"></div><dl><dt><b>取消关注人数</b></dt><dd class="ui_trendgrid_number"><strong>29</strong><em class="ui_trendgrid_unit"></em></dd><dd>日<i class="icon_up" title="上升"></i>45%</dd><dd>周<i class="icon_up" title="上升"></i>141.7%</dd><dd>月<i class="icon_up" title="上升"></i>141.7%</dd></dl></div></td><td><div class="ui_trendgrid_item"><div class="ui_trendgrid_chart" id="key_index_chart_NetUser"></div><dl><dt><b>净增关注人数</b></dt><dd class="ui_trendgrid_number"><strong>22</strong><em class="ui_trendgrid_unit"></em></dd><dd>日<i class="icon_down" title="下降"></i>12%</dd><dd>周<i class="icon_down" title="下降"></i>56.9%</dd><dd>月<i class="icon_down" title="下降"></i>48.8%</dd></dl></div></td><td class="last"><div class="ui_trendgrid_item"><div class="ui_trendgrid_chart" id="key_index_chart_CumulateUser"></div><dl><dt><b>累积关注人数</b></dt><dd class="ui_trendgrid_number"><strong>2,446</strong><em class="ui_trendgrid_unit"></em></dd><dd>日<i class="icon_up" title="上升"></i>0.8%</dd><dd>周<i class="icon_up" title="上升"></i>9.8%</dd><dd>月<i class="icon_up" title="上升"></i>59.8%</dd></dl></div></td></tr></tbody></table>
                <!-- 趋势格控件 结束 -->
            </div>
</div>
<div class="mod_basic" id="zhang">
    <!--标题栏目:start-->
    <div class="title">
        <h3>关键指标详解</h3>
        <!-- <span class="help" id="_help_wrapper">
            <a href="javascript:;">?</a>
            <div class="help_content" id="_help_content">
                待补充...
            </div>
        </span> -->
        <!--指标tab-->
        <div class="tabs" id="div_item_tabs">
                            <a class="first current" id="tab_1" href="javascript:;">新增人数</a>
                                <a id="tab_2" href="javascript:;">取消关注人数</a>
                                <a id="tab_3" href="javascript:;">净增人数</a>
                                <a class="last" id="tab_4" href="javascript:;">累积人数</a>
                        </div>
        <div class="sub_menu">
            <div class="ui_filter">
                <div class="ui_filter_bar">
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
                                							<div class="date" id="div_date" >
                                 <span class="date_title" id="date">2014-09-12 至 2014-10-11</span>
                                 <a class="opt_sel" id="input_trigger" href="https://mta.qq.com/mta/wechat/ctr_user_summary?appid=wxa3ab354bb9cee3e9&pluginid=luopan&token=ll1D85fGDCTr4AAxC_RrFIsraM1eajMksOjZN_eXodrPosSSPCqPclKWIbLpXyI0sVDJzf7YZAJC873SLezCCozIASgbVLXuB64fF5nZdoLxGhBq4aoXDip1jmfd2AXI&devtype=3&jsurl=https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe1ec5f7.js&version=2#">
                            	     <i class="i_orderd"></i>
                                 </a>
                            </div><label class="contrast" for="needCompare_1413124040376" style="display: none;"><input type="checkbox" class="pc" name="needCompare_1413124040376" id="needCompare_1413124040376" value="1" style="display: none;">对比</label><div class="ta_date" id="div_compare_date" style="display: none;">	<span name="dateCompare" id="dateCompare" class="date_title" style="display: none;"></span>	<a class="opt_sel" id="compare_trigger" href="https://mta.qq.com/mta/wechat/ctr_user_summary?appid=wxa3ab354bb9cee3e9&pluginid=luopan&token=ll1D85fGDCTr4AAxC_RrFIsraM1eajMksOjZN_eXodrPosSSPCqPclKWIbLpXyI0sVDJzf7YZAJC873SLezCCozIASgbVLXuB64fF5nZdoLxGhBq4aoXDip1jmfd2AXI&devtype=3&jsurl=https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe1ec5f7.js&version=2#">		<i class="i_orderd"></i>	</a></div>
                                                        <div id="datePicker"><input type="hidden" id="startDate" name="startDate" value="2014-09-12"><input type="hidden" id="endDate" name="endDate" value="2014-10-11"><input type="checkbox" id="needCompare" name="needCompare" value="0" style="display:none;"><input type="hidden" id="startCompareDate" name="startCompareDate" value=""><input type="hidden" id="endCompareDate" name="endCompareDate" value=""></div>
                        </div>
                        <!--==时间范围end==-->
                    </div>
                </div>
                <div class="ui_filter_content">
                    <strong class="lable" id="source_text">增长来源</strong>
                    <span id="div_source"><div class="ui_buttons"><button class="button  current" value="-1" title="全部" name="source" id="source_0">全部</button><button class="button " value="35" title="搜索公众号名称" name="source" id="source_1">搜索公众号名称</button><button class="button " value="3" title="搜索微信号" name="source" id="source_2">搜索微信号</button><button class="button " value="43" title="图文消息右上角菜单" name="source" id="source_3">图文消息右上角菜单</button><button class="button " value="17" title="名片分享" name="source" id="source_4">名片分享</button><button class="button " value="0" title="扫二维码及其他" name="source" id="source_5">扫二维码及其他</button></div></span>
                </div>
            </div>
        </div>
    </div>
    <!--标题栏目:end-->

    <div class="content"><div class="sub_content"><div class="ui_tips"><i class="icon_info"></i>用户增长来源目前只支持过滤趋势图，暂不支持区分详细数据，请知悉。</div></div>
        <h4 class="sub_title">趋势图</h4>
        <div class="sub_content">
            <!--图控件的模版，这里目前内容较少，后面方便扩展，直接在这里修改-->
<div class="time-chart" id="chartContainer" data-highcharts-chart="0" style="height: 300px;">
        </div>
        </div>
        <!--大图模式：end-->
        <!-- 图形数据区域end-->
        <hr class="split">
        <!-- 详细数据表格start -->
        <h4 class="sub_title">详细数据
            <span class="more_menu">
				<a href="javascript:;" onClick="export_excel()"><i class="icon_export"></i>导出CSV</a>
			</span>
        </h4>
        <div class="sub_content">
            <div class="column cf">
    <div class="column-title cf">
<!--         <span class="link-thin"><i class="icon-download-x"></i><a href="#" onclick="export_excel()">导出CSV</a></span> -->
        <div class="btn-append" id="set_table"></div>
    </div>
    <div id="table_list" class="gri_wrapper"><table class="gri_stable" id="table_list_table"><colgroup span="5"><col class="gri_RefDate"><col class="gri_NewUser"><col class="gri_CancelUser"><col class="gri_NetUser"><col class="gri_CumulateUser"></colgroup><thead><tr><th name="RefDate" class="hover enable" style="text-align: left;">时间<i class="icon-order-hover"></i></th><th name="NewUser" class="hover enable row_hover">新关注人数<i class="icon-order-hover"></i></th><th name="CancelUser" class="hover enable">取消关注人数<i class="icon-order-hover"></i></th><th name="NetUser" class="hover enable">净增关注人数<i class="icon-order-hover"></i></th><th name="CumulateUser" class="hover enable">累积关注人数<i class="icon-order-hover"></i></th></tr></thead><tbody><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-10-11</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">47</div></td><td><div style="width: 100%; height: 100%;text-align:right;">26</div></td><td><div style="width: 100%; height: 100%;text-align:right;">21</div></td><td><div style="width: 100%; height: 100%;text-align:right;">2,264</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-10-10</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">63</div></td><td><div style="width: 100%; height: 100%;text-align:right;">12</div></td><td><div style="width: 100%; height: 100%;text-align:right;">51</div></td><td><div style="width: 100%; height: 100%;text-align:right;">2,227</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-10-09</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">111</div></td><td><div style="width: 100%; height: 100%;text-align:right;">26</div></td><td><div style="width: 100%; height: 100%;text-align:right;">85</div></td><td><div style="width: 100%; height: 100%;text-align:right;">2,178</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-10-08</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">77</div></td><td><div style="width: 100%; height: 100%;text-align:right;">28</div></td><td><div style="width: 100%; height: 100%;text-align:right;">49</div></td><td><div style="width: 100%; height: 100%;text-align:right;">2,090</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-10-07</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">85</div></td><td><div style="width: 100%; height: 100%;text-align:right;">32</div></td><td><div style="width: 100%; height: 100%;text-align:right;">53</div></td><td><div style="width: 100%; height: 100%;text-align:right;">2,043</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-10-06</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">80</div></td><td><div style="width: 100%; height: 100%;text-align:right;">38</div></td><td><div style="width: 100%; height: 100%;text-align:right;">42</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1,990</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-10-05</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">23</div></td><td><div style="width: 100%; height: 100%;text-align:right;">18</div></td><td><div style="width: 100%; height: 100%;text-align:right;">5</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1,949</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-10-04</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">12</div></td><td><div style="width: 100%; height: 100%;text-align:right;">17</div></td><td><div style="width: 100%; height: 100%;text-align:right;">-5</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1,946</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-10-03</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">23</div></td><td><div style="width: 100%; height: 100%;text-align:right;">17</div></td><td><div style="width: 100%; height: 100%;text-align:right;">6</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1,948</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-10-02</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">10</div></td><td><div style="width: 100%; height: 100%;text-align:right;">14</div></td><td><div style="width: 100%; height: 100%;text-align:right;">-4</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1,941</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-10-01</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">14</div></td><td><div style="width: 100%; height: 100%;text-align:right;">16</div></td><td><div style="width: 100%; height: 100%;text-align:right;">-2</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1,943</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-30</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">40</div></td><td><div style="width: 100%; height: 100%;text-align:right;">15</div></td><td><div style="width: 100%; height: 100%;text-align:right;">25</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1,947</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-29</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">50</div></td><td><div style="width: 100%; height: 100%;text-align:right;">22</div></td><td><div style="width: 100%; height: 100%;text-align:right;">28</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1,923</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-28</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">12</div></td><td><div style="width: 100%; height: 100%;text-align:right;">16</div></td><td><div style="width: 100%; height: 100%;text-align:right;">-4</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1,894</div></td></tr></tbody></table><div class="pagination pagination_wrp"><span class="page_nav_area"><span class="page_num"><label>1</label>
<span class="num_gap">/</span>
<label>3</label></span><a class="button page_next" href="javascript:;"><i class="arrow"></i></a><span class="goto_area"><input type="text">
<a class="button page_go" href="javascript:;">跳转</a></span></span></div></div>
</div>        </div>
        <!-- 详细数据表格end -->
    </div>
</div><script type="text/javascript">
//    var loadPageTable = false;
//    function buildChart()
//    {
//        if (MTA.Page.Variable.tab_id != 1) {
//            $('#div_source').empty().parent().hide();
//            delete MTA.Page.Condition.source;
//            $("#chartContainer").parents(".content").find('.ui_tips').parent().remove();
//        } else if (MTA.Page.Condition.source == undefined) {
//            MTA.Page.Condition.source = new MTA.Selector('#div_source', 'source', initParams.source, 'buildChart');
//            $("#chartContainer").parents(".content").prepend('<div class="sub_content"><div class="ui_tips"><i class="icon_info"></i>用户增长来源目前只支持过滤趋势图，暂不支持区分详细数据，请知悉。</div></div>');
//        }
//
//        MTA.Data.loadChart(MTA.Page.Variable.tab_url, {theme: 'wechat','chartOptions':{'yAxis':{min:null}}}, 'chartContainer');
//        hightLightTable();
//    }
//
//    //绑定查询结果，表格与图形数据绑定
//    function buildData()
//    {
//        buildKeyIndex();
//        buildChart();
//        buildDataTable();
//    }
//
//    //应用的初始化参数
//    var initParams = {"start_date":"2014-09-12","end_date":"2014-10-11","source":{"seg0":[{"name":"\u5168\u90e8","value":"-1","isDefault":1}],"seg1":[{"name":"\u641c\u7d22\u516c\u4f17\u53f7\u540d\u79f0","value":"35"},{"name":"\u641c\u7d22\u5fae\u4fe1\u53f7","value":"3"},{"name":"\u56fe\u6587\u6d88\u606f\u53f3\u4e0a\u89d2\u83dc\u5355","value":"43"},{"name":"\u540d\u7247\u5206\u4eab","value":"17"},{"name":"\u626b\u4e8c\u7ef4\u7801\u53ca\u5176\u4ed6","value":"0"}]},"table_options":[{"key":"table_channel_group_split","value":"\u6e20\u9053\u7ec6\u5206","group":"channel"},{"key":"table_channel_group_other","value":"\u5408\u5e76\u5176\u5b83\u9879","group":"channel"},{"key":"table_version_group_split","value":"\u7248\u672c\u7ec6\u5206","group":"version"},{"key":"table_version_group_other","value":"\u5408\u5e76\u5176\u5b83\u9879","group":"version"}],"chart_options":[{"key":"chart_channel_group_split","value":"\u6e20\u9053\u7ec6\u5206","group":"channel"},{"key":"chart_channel_group_other","value":"\u5408\u5e76\u5176\u5b83\u9879","group":"channel"},{"key":"chart_version_group_split","value":"\u7248\u672c\u7ec6\u5206","group":"version"},{"key":"chart_version_group_other","value":"\u5408\u5e76\u5176\u5b83\u9879","group":"version"},{"key":"chart_calc_sum","value":"\u663e\u793a\u5c0f\u8ba1"}],"need_compare":1,"real_time":0};
//    MTA.Page.init_params = initParams;
//    var show_header = true;//不自动隐藏页头的空白，查看 layout_for_wechat 文件
//
//    $(document).ready(function(){
//        //大小图切换
//        var conf = {
//            1 : '/wechat/ctr_user_summary/get_trend_chart_data?index=NewUser',
//            2 : '/wechat/ctr_user_summary/get_trend_chart_data?index=CancelUser',
//            3 : '/wechat/ctr_user_summary/get_trend_chart_data?index=NetUser',
//            4 : '/wechat/ctr_user_summary/get_trend_chart_data?index=CumulateUser'
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
//            isTodayValid: 0,
//            minValidDate: minValidDate
//        };
//
//        $('#source_text').text('增长来源');
//
//        MTA.Report.initialize(dateObj, 'buildData');
//
//        //页面tips
//        var items = {"\u65b0\u5173\u6ce8\u4eba\u6570":"\u65b0\u5173\u6ce8\u7684\u53bb\u91cd\u7528\u6237\u6570","\u53d6\u6d88\u5173\u6ce8\u4eba\u6570":"\u53d6\u6d88\u5173\u6ce8\u7684\u53bb\u91cd\u7528\u6237\u6570","\u51c0\u589e\u5173\u6ce8\u4eba\u6570":"\u65b0\u5173\u6ce8\u4e0e\u53d6\u6d88\u5173\u6ce8\u7684\u7528\u6237\u6570\u4e4b\u5dee","\u7d2f\u79ef\u5173\u6ce8\u4eba\u6570":"\u5f53\u524d\u5173\u6ce8\u7684\u7528\u6237\u603b\u6570","\u65e5\u3001\u5468\u3001\u6708":"\u5206\u522b\u8ba1\u7b97\u6628\u65e5\u6570\u636e\u76f8\u6bd41\u5929\u30017\u5929\u300130\u5929\u524d\u7684\u53d8\u5316\u60c5\u51b5","\u8bf7\u6ce8\u610f":"\u7528\u6237\u603b\u6570\u6839\u636e\u6628\u65e5\u6570\u636e\u8ba1\u7b97\uff0c\u800c\u7528\u6237\u7ba1\u7406\u6a21\u5757\u6839\u636e\u5f53\u524d\u5b9e\u65f6\u6570\u636e\u8ba1\u7b97\uff0c\u4e24\u8005\u53ef\u80fd\u4e0d\u4e00\u81f4"};
//        MTA.Util.items_info.init(items,'wechat');
//        if ('wechat' == 'wechat') {
//            $('.mod_header').css({'height':0,'padding':0}).after('<div style="margin:20px 30px 0;"><div class="ui_tips"><i class="icon_info"></i>用户总数根据昨日数据计算，而用户管理模块根据当前实时数据计算，两者可能不一致。</div></div>');
//            $('.mod_header .help').css({'top':'72px','right':'10px'});
//        }
//    });
</script>    </div> <!-- end of main -->
</div> <!-- end of content 
<!-- 腾讯分析脚本 -->
<!--<script type="text/javascript" src="stats" charset="UTF-8"></script>-->
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

<div id="calendar_1413124040376" class="ta_calendar ta_calendar2 cf" style="z-index: 9999; display: none;"><div class="ta_calendar_cont cf" id="dateRangePicker_1413124040376"><table class="dateRangeDateTable"><caption>2014年9月</caption><thead><tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr></thead><tbody><tr><td colspan="7" style="text-align: center;"><a href="javascript:void(0);" id="dateRangePreMonth_1413124040376"><i class="i_pre"></i></a></td></tr><tr><td class="ta_dateRangeGray">31</td><td id="calendar_1413124040376_2014-9-1" style="cursor: pointer;">1</td><td id="calendar_1413124040376_2014-9-2" style="cursor: pointer;">2</td><td id="calendar_1413124040376_2014-9-3" style="cursor: pointer;">3</td><td id="calendar_1413124040376_2014-9-4" style="cursor: pointer;">4</td><td id="calendar_1413124040376_2014-9-5" style="cursor: pointer;">5</td><td id="calendar_1413124040376_2014-9-6" style="cursor: pointer;">6</td></tr><tr><td id="calendar_1413124040376_2014-9-7" style="cursor: pointer;">7</td><td id="calendar_1413124040376_2014-9-8" style="cursor: pointer;">8</td><td id="calendar_1413124040376_2014-9-9" style="cursor: pointer;">9</td><td id="calendar_1413124040376_2014-9-10" style="cursor: pointer;">10</td><td id="calendar_1413124040376_2014-9-11" style="cursor: pointer;">11</td><td id="calendar_1413124040376_2014-9-12" class="first" style="cursor: pointer;">12</td><td id="calendar_1413124040376_2014-9-13" class="ta_dateRangeSelected" style="cursor: pointer;">13</td></tr><tr><td id="calendar_1413124040376_2014-9-14" class="ta_dateRangeSelected" style="cursor: pointer;">14</td><td id="calendar_1413124040376_2014-9-15" class="ta_dateRangeSelected" style="cursor: pointer;">15</td><td id="calendar_1413124040376_2014-9-16" class="ta_dateRangeSelected" style="cursor: pointer;">16</td><td id="calendar_1413124040376_2014-9-17" class="ta_dateRangeSelected" style="cursor: pointer;">17</td><td id="calendar_1413124040376_2014-9-18" class="ta_dateRangeSelected" style="cursor: pointer;">18</td><td id="calendar_1413124040376_2014-9-19" class="ta_dateRangeSelected" style="cursor: pointer;">19</td><td id="calendar_1413124040376_2014-9-20" class="ta_dateRangeSelected" style="cursor: pointer;">20</td></tr><tr><td id="calendar_1413124040376_2014-9-21" class="ta_dateRangeSelected" style="cursor: pointer;">21</td><td id="calendar_1413124040376_2014-9-22" class="ta_dateRangeSelected" style="cursor: pointer;">22</td><td id="calendar_1413124040376_2014-9-23" class="ta_dateRangeSelected" style="cursor: pointer;">23</td><td id="calendar_1413124040376_2014-9-24" class="ta_dateRangeSelected" style="cursor: pointer;">24</td><td id="calendar_1413124040376_2014-9-25" class="ta_dateRangeSelected" style="cursor: pointer;">25</td><td id="calendar_1413124040376_2014-9-26" class="ta_dateRangeSelected" style="cursor: pointer;">26</td><td id="calendar_1413124040376_2014-9-27" class="ta_dateRangeSelected" style="cursor: pointer;">27</td></tr><tr><td id="calendar_1413124040376_2014-9-28" class="ta_dateRangeSelected" style="cursor: pointer;">28</td><td id="calendar_1413124040376_2014-9-29" class="ta_dateRangeSelected" style="cursor: pointer;">29</td><td id="calendar_1413124040376_2014-9-30" class="ta_dateRangeSelected" style="cursor: pointer;">30</td><td class="ta_dateRangeGray">1</td><td class="ta_dateRangeGray">2</td><td class="ta_dateRangeGray">3</td><td class="ta_dateRangeGray">4</td></tr></tbody></table><table class="dateRangeDateTable"><caption>2014年10月</caption><thead><tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr></thead><tbody><tr><td colspan="7" style="text-align: center;"><a href="javascript:void(0);" id="dateRangeNextMonth_1413124040376"><i class="i_next"></i></a></td></tr><tr><td class="ta_dateRangeGray">28</td><td class="ta_dateRangeGray">29</td><td class="ta_dateRangeGray">30</td><td id="calendar_1413124040376_2014-10-1" class="ta_dateRangeSelected" style="cursor: pointer;">1</td><td id="calendar_1413124040376_2014-10-2" class="ta_dateRangeSelected" style="cursor: pointer;">2</td><td id="calendar_1413124040376_2014-10-3" class="ta_dateRangeSelected" style="cursor: pointer;">3</td><td id="calendar_1413124040376_2014-10-4" class="ta_dateRangeSelected" style="cursor: pointer;">4</td></tr><tr><td id="calendar_1413124040376_2014-10-5" class="ta_dateRangeSelected" style="cursor: pointer;">5</td><td id="calendar_1413124040376_2014-10-6" class="ta_dateRangeSelected" style="cursor: pointer;">6</td><td id="calendar_1413124040376_2014-10-7" class="ta_dateRangeSelected" style="cursor: pointer;">7</td><td id="calendar_1413124040376_2014-10-8" class="ta_dateRangeSelected" style="cursor: pointer;">8</td><td id="calendar_1413124040376_2014-10-9" class="ta_dateRangeSelected" style="cursor: pointer;">9</td><td id="calendar_1413124040376_2014-10-10" class="ta_dateRangeSelected" style="cursor: pointer;">10</td><td id="calendar_1413124040376_2014-10-11" class="last" style="cursor: pointer;">11</td></tr><tr><td class="ta_dateRangeGray">12</td><td class="ta_dateRangeGray">13</td><td class="ta_dateRangeGray">14</td><td class="ta_dateRangeGray">15</td><td class="ta_dateRangeGray">16</td><td class="ta_dateRangeGray">17</td><td class="ta_dateRangeGray">18</td></tr><tr><td class="ta_dateRangeGray">19</td><td class="ta_dateRangeGray">20</td><td class="ta_dateRangeGray">21</td><td class="ta_dateRangeGray">22</td><td class="ta_dateRangeGray">23</td><td class="ta_dateRangeGray">24</td><td class="ta_dateRangeGray">25</td></tr><tr><td class="ta_dateRangeGray">26</td><td class="ta_dateRangeGray">27</td><td class="ta_dateRangeGray">28</td><td class="ta_dateRangeGray">29</td><td class="ta_dateRangeGray">30</td><td class="ta_dateRangeGray">31</td><td class="ta_dateRangeGray">1</td></tr></tbody></table></div><div class="ta_calendar_footer cf"><div class="frm_msg"><div id="dateRangeDiv_1413124040376"><input type="text" class="ta_ipt_text_s ta_dateRangeSelected" name="startDate_1413124040376" id="startDate_1413124040376" value="2014-09-12" readonly="" style="background-repeat: repeat repeat;"><span class="joinLine"> - </span><input type="text" class="ta_ipt_text_s" name="endDate_1413124040376" id="endDate_1413124040376" value="2014-10-11" readonly=""><br></div><div id="dateRangeCompareDiv_1413124040376" style="display: none;"><input type="text" class="ta_ipt_text_s" name="startCompareDate_1413124040376" id="startCompareDate_1413124040376" value="" readonly=""><span class="joinLine"> - </span><input type="text" class="ta_ipt_text_s" name="endCompareDate_1413124040376" id="endCompareDate_1413124040376" value="" readonly=""></div></div><div class="frm_btn"><input class="ta_btn ta_btn_primary" type="button" name="submit_1413124040376" id="submit_1413124040376" value="确定"><input class="ta_btn" type="button" id="closeBtn_1413124040376" value="取消"></div></div></div></body></html>