<!DOCTYPE html>
<!-- saved from url=(0325)https://mta.qq.com/mta/wechat/ctr_article_detail?appid=wxa3ab354bb9cee3e9&pluginid=luopan&token=ll1D85fGDCTr4AAxC_RrFIsraM1eajMksOjZN_eXodoQMZJDdwBnqVqHmIL96azGoQXLaETVMW-ADDsHQQ-KrBOic_ximbmEmn3Oz1B2nGTaY_A0mWHRmQC6h0Kf7_bj&devtype=3&jsurl=https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe211edb.js&version=2 -->
<html class="mta_wechat"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <meta name="Description" content="">
    <meta name="Keywords" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>图文群发-图文分析</title>
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

    <link rel="stylesheet" type="text/css" href="<?=base_url()?>weixin/tuwenfenxi_files/global.css" charset="utf-8">
<link rel="stylesheet" type="text/css" href="<?=base_url()?>weixin/tuwenfenxi_files/wechat_v3.css" charset="utf-8">
<link rel="stylesheet" type="text/css" href="<?=base_url()?>weixin/tuwenfenxi_files/gri.controls.css" charset="utf-8">
<script type="text/javascript" src="<?=base_url()?>weixin/tuwenfenxi_files/jquery.min.js" charset="utf-8"></script>
<script type="text/javascript" src="<?=base_url()?>weixin/tuwenfenxi_files/gri.dateRange.js" charset="utf-8"></script>
<script type="text/javascript" src="<?=base_url()?>weixin/tuwenfenxi_files/gri.js" charset="utf-8"></script>
<script type="text/javascript" src="<?=base_url()?>weixin/tuwenfenxi_files/gri.multiselect.js" charset="utf-8"></script>
<script type="text/javascript" src="<?=base_url()?>weixin/tuwenfenxi_files/mta.js" charset="utf-8"></script>
<script type="text/javascript" src="<?=base_url()?>weixin/tuwenfenxi_files/gri.dataTable.js" charset="utf-8"></script>
<script type="text/javascript" src="<?=base_url()?>weixin/tuwenfenxi_files/highcharts.js" charset="utf-8"></script>
<script type="text/javascript" src="<?=base_url()?>weixin/tuwenfenxi_files/gri.chart.js" charset="utf-8"></script>
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
    var verify_params = {"appid":"wxa3ab354bb9cee3e9","pluginid":"luopan","token":"ll1D85fGDCTr4AAxC_RrFIsraM1eajMksOjZN_eXodoQMZJDdwBnqVqHmIL96azGoQXLaETVMW-ADDsHQQ-KrBOic_ximbmEmn3Oz1B2nGTaY_A0mWHRmQC6h0Kf7_bj","from":"","devtype":"3"};
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
        var data = {"1":{"th":[2,6,7],"td":[2,3]},"2":{"th":[3,8,9],"td":[4,5]},"3":{"th":[4,10,11],"td":[6,7]},"4":{"th":[5],"td":[8]}};
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
</script><script src="<?=base_url()?>weixin/tuwenfenxi_files/iframe211edb.js"></script><iframe src="about:blank" style="display: none;"></iframe>
<!-- 站点列表的js库:end -->
<div id="content">
    <div id="sidebar">
        <div id="sub_nav">
            <div class="mod_sidemenu">
                <h3 class="title" id="parent_menu_1"><a href="javascript:;"><i class="icon_user"></i>用户分析<i id="i_menu_1" class="icon_menu"></i></a></h3><div id="child_menu_1" style="position:relative;zoom:1"><ul class="content"><li><a id="menu_101" href="https://mta.qq.com/mta/wechat/ctr_user_summary">用户增长</a></li></ul><ul class="content"><li><a id="menu_103" href="https://mta.qq.com/mta/wechat/ctr_user_attr">用户属性</a></li></ul></div></div><div class="mod_sidemenu"><h3 class="title" id="parent_menu_2"><a href="javascript:;"><i class="icon_app"></i>图文分析<i id="i_menu_2" class="icon_menu"></i></a></h3><div id="child_menu_2" style="position:relative;zoom:1">
                    <ul class="content"><li class="current"><a id="menu_201" href="https://mta.qq.com/mta/wechat/ctr_article_detail">图文群发</a></li></ul><ul class="content"><li><a id="menu_202" href="https://mta.qq.com/mta/wechat/ctr_article_analyse">图文统计</a></li></ul></div></div><div class="mod_sidemenu"><h3 class="title" id="parent_menu_3"><a href="javascript:;"><i class="icon_run"></i>消息分析<i id="i_menu_3" class="icon_menu"></i></a></h3><div id="child_menu_3" style="position:relative;zoom:1"><ul class="content"><li><a id="menu_301" href="https://mta.qq.com/mta/wechat/ctr_message">消息发送</a></li></ul><ul class="content"><li><a id="menu_302" href="https://mta.qq.com/mta/wechat/ctr_keyword">消息关键词</a></li></ul></div></div><div class="mod_sidemenu"><h3 class="title" id="parent_menu_4"><a href="javascript:;"><i class="icon_develop"></i>开发支持<i id="i_menu_4" class="icon_menu"></i></a></h3><div id="child_menu_4" style="position:relative;zoom:1"><ul class="content"><li><a id="menu_401" href="https://mta.qq.com/mta/wechat/ctr_interface">接口分析</a></li></ul></div></div><div class="mod_sidemenu"><h3 class="title" id="parent_menu_5"><a href="javascript:;"><i class="icon_netspeed"></i>设备功能<i id="i_menu_5" class="icon_menu"></i></a></h3><div id="child_menu_5" style="position:relative;zoom:1"><ul class="content"><li><a id="menu_501" href="https://mta.qq.com/mta/wechat/ctr_device_summary">设备功能</a></li></ul></div></div></div>
        <div id="div_sidemenu_other" class="mod_sidemenu_other" style="display:none">
            <ul class="content">
                <li class="sdk_down"><a href="https://mta.qq.com/mta/other/ctr_sdk_manage/download" target="_blank"><i class="icon_down"></i>SDK下载</a></li>
                <li class="my_app">
                                            <a href="javascript:void(0);" onclick="GRI.Util.hotClick(&#39;0_1_wxa3ab354bb9cee3e9_link.leftbar.to.myapp&#39;, &#39;https://mta.qq.com/mta/overview/ctr_all_app&#39;)">我的应用</a>
                                    </li>
                <li class="help_center"><a onclick="GRI.Util.hotClick(&#39;0_1_wxa3ab354bb9cee3e9_link.header.to.home&#39;, &#39;https://mta.qq.com/mta&#39;);" href="https://mta.qq.com/mta/wechat/ctr_article_detail?appid=wxa3ab354bb9cee3e9&pluginid=luopan&token=ll1D85fGDCTr4AAxC_RrFIsraM1eajMksOjZN_eXodoQMZJDdwBnqVqHmIL96azGoQXLaETVMW-ADDsHQQ-KrBOic_ximbmEmn3Oz1B2nGTaY_A0mWHRmQC6h0Kf7_bj&devtype=3&jsurl=https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe211edb.js&version=2#">帮助中心</a></li>
            </ul>
        </div>
    </div>
    <div id="main">
        <div class="mod_header" style="height: 0px; padding: 0px;">
            <div class="title">
                <span class="more"><a href="https://mta.qq.com/mta/wechat/ctr_article_detail?appid=wxa3ab354bb9cee3e9&pluginid=luopan&token=ll1D85fGDCTr4AAxC_RrFIsraM1eajMksOjZN_eXodoQMZJDdwBnqVqHmIL96azGoQXLaETVMW-ADDsHQQ-KrBOic_ximbmEmn3Oz1B2nGTaY_A0mWHRmQC6h0Kf7_bj&devtype=3&jsurl=https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe211edb.js&version=2#" class="viewDataDetail" id="lnk_arg" style="display: none"></a></span>
                <h2 id="h_title">图文群发</h2>
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
            <div class="help" id="wrap_items_info" style="top: 15px; right: 10px;">
                <a class="toggle" href="javascript:;">显示/收起</a>
                <div class="help_content">
                    <i class="dropdown_arrow out"></i>
                    <i class="dropdown_arrow in"></i>
                    <dl class="help-change-list" id="pop_items_info"><dt>送达人数</dt><dd>图文消息群发时，送达的人数</dd><dt>图文页阅读人数</dt><dd>点击图文页的去重人数，包括非粉丝</dd><dt>图文页阅读次数</dt><dd>点击图文页的次数，包括非粉丝的点击</dd><dt>图文转化率</dt><dd>图文阅读人数/送达人数</dd><dt>原文页阅读人数</dt><dd>点击原文页的去重人数，包括非粉丝</dd><dt>原文页阅读次数</dt><dd>点击原文页的次数，包括非粉丝的点击</dd><dt>原文转化率</dt><dd>原文页阅读人数/图文页阅读人数</dd><dt>分享转发人数</dt><dd>转发或分享到朋友、朋友圈、微博的去重用户数，包括非粉丝</dd><dt>分享转发次数</dt><dd>转发或分享到朋友、朋友圈、微博的次数，包括非粉丝的点击</dd><dt>图文页</dt><dd>点击图文消息进入的页面</dd><dt>原文页</dt><dd>在图文页点击“阅读原文”进入的页面</dd><div style="margin-top:6px;color: #000;"><b>数据由专业移动应用分析工具<br><a href="http://mta.qq.com/" target="_blank">腾讯云分析</a>&nbsp;合作提供</b></div></dl>
                    <div class="help-change-footer" id="footer_items_info"><span class="wechat_data_range">数据从2013年7月1日开始统计。</span>由于服务器缓存，以及指标计算方法和统计时间的差异，数据可能出现微小误差，一般在1%以内。</div>
                </div>
            </div>
            <!---- 右上角指标说明浮层 end -->
            <!-- Menu 对象初始化 : start-->
            <script type="text/javascript">
                //数据初始化
                var main_menu = {"1":{"m_id":1,"m_name":"\u7528\u6237\u5206\u6790","m_icon_css":"icon_user","m_url":"\/wechat\/ctr_active_user","m_type":1,"m_display":1},"2":{"m_id":2,"m_name":"\u56fe\u6587\u5206\u6790","m_icon_css":"icon_app","m_url":"\/wechat\/ctr_article_analyse","m_type":1,"m_display":1},"3":{"m_id":3,"m_name":"\u6d88\u606f\u5206\u6790","m_icon_css":"icon_run","m_url":"\/wechat\/ctr_message","m_type":1,"m_display":1},"4":{"m_id":4,"m_name":"\u5f00\u53d1\u652f\u6301","m_icon_css":"icon_develop","m_url":"\/wechat\/ctr_interface","m_type":1,"m_display":1},"5":{"m_id":5,"m_name":"\u8bbe\u5907\u529f\u80fd","m_icon_css":"icon_netspeed","m_url":"","m_type":1,"m_display":1}};
                var sub_menu = {"101":{"m_id":101,"p_id":1,"m_name":"\u7528\u6237\u589e\u957f","m_tips":"\u7528\u6237\u589e\u957f","m_url":"\/wechat\/ctr_user_summary","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":1,"m_type":2,"m_display":1},"103":{"m_id":103,"p_id":1,"m_name":"\u7528\u6237\u5c5e\u6027","m_tips":"\u7528\u6237\u5c5e\u6027","m_url":"\/wechat\/ctr_user_attr","m_default_range":1,"m_has_realtime":0,"m_has_range":0,"m_need_compare":0,"m_type":2,"m_display":1},"201":{"m_id":201,"p_id":2,"m_name":"\u56fe\u6587\u7fa4\u53d1","m_tips":"\u56fe\u6587\u7fa4\u53d1","m_url":"\/wechat\/ctr_article_detail","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":1,"m_type":2,"m_display":1},"202":{"m_id":202,"p_id":2,"m_name":"\u56fe\u6587\u7edf\u8ba1","m_tips":"\u56fe\u6587\u7edf\u8ba1","m_url":"\/wechat\/ctr_article_analyse","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":1,"m_type":2,"m_display":1},"301":{"m_id":301,"p_id":3,"m_name":"\u6d88\u606f\u53d1\u9001","m_tips":"\u6d88\u606f\u53d1\u9001tips\uff0c\u5f85\u4ea7\u54c1\u786e\u5b9a\u540e\u6269\u5c55\u4e4b\u7528","m_url":"\/wechat\/ctr_message","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":1,"m_type":2,"m_display":1},"302":{"m_id":302,"p_id":3,"m_name":"\u6d88\u606f\u5173\u952e\u8bcd","m_tips":"\u7528\u6237\u53d1\u9001\u6587\u5b57\u4e2d\u6240\u5305\u542b\u7684\u7279\u6b8a\u540d\u8bcd","m_url":"\/wechat\/ctr_keyword","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":0,"m_type":2,"m_display":1},"401":{"m_id":401,"p_id":4,"m_name":"\u63a5\u53e3\u5206\u6790","m_tips":"\u63a5\u53e3\u5206\u6790","m_url":"\/wechat\/ctr_interface","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":1,"m_type":2,"m_display":1},"501":{"m_id":501,"p_id":5,"m_name":"\u8bbe\u5907\u529f\u80fd","m_tips":"\u8bbe\u5907\u529f\u80fd","m_url":"\/wechat\/ctr_device_summary","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":0,"m_type":2,"m_display":1}};
                var current_action = '/wechat/ctr_article_detail';
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
            </script>
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
        </div><!--end of mod_header-->
        <script type="text/javascript" src="raphael-min.js" charset="utf-8"></script>
<!-- 基础模块 开始 -->
<div class="mod_basic" id="wechat_diff">
    <div class="title">
        <h3>数据详解</h3>
        <div class="tabs" id="tab_detail">
            <a class="first current" href="javascript:;" value="all">所有图文<b></b></a>
            <a href="javascript:;" value="detail">图文详解<b></b></a>
            <a href="javascript:;" value="compare">图文对比<b></b></a>
        </div>
        <div class="sub_menu" id="condition">
            <span class="label">图文发送时间</span>
            <span class="label">
            <div class="tool_date cf">
                <div class="date" id="div_date">
                    <span class="date_title" id="date">2014-09-18 至 2014-10-17</span>
                    <a class="opt_sel" id="input_trigger" href="https://mta.qq.com/mta/wechat/ctr_article_detail?appid=wxa3ab354bb9cee3e9&pluginid=luopan&token=ll1D85fGDCTr4AAxC_RrFIsraM1eajMksOjZN_eXodoQMZJDdwBnqVqHmIL96azGoQXLaETVMW-ADDsHQQ-KrBOic_ximbmEmn3Oz1B2nGTaY_A0mWHRmQC6h0Kf7_bj&devtype=3&jsurl=https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe211edb.js&version=2#">
                        <i class="i_orderd"></i>
                    </a>
                </div><label class="contrast" for="needCompare_1413617997186" style="display: none;"><input type="checkbox" class="pc" name="needCompare_1413617997186" id="needCompare_1413617997186" value="1" disabled="disabled">对比</label><div class="ta_date" id="div_compare_date" style="display: none;">	<span name="dateCompare" id="dateCompare" class="date_title" style="display: none;"></span>	<a class="opt_sel" id="compare_trigger" href="https://mta.qq.com/mta/wechat/ctr_article_detail?appid=wxa3ab354bb9cee3e9&pluginid=luopan&token=ll1D85fGDCTr4AAxC_RrFIsraM1eajMksOjZN_eXodoQMZJDdwBnqVqHmIL96azGoQXLaETVMW-ADDsHQQ-KrBOic_ximbmEmn3Oz1B2nGTaY_A0mWHRmQC6h0Kf7_bj&devtype=3&jsurl=https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe211edb.js&version=2#">		<i class="i_orderd"></i>	</a></div>
                <div id="datePicker"><input type="hidden" id="startDate" name="startDate" value="2014-09-18"><input type="hidden" id="endDate" name="endDate" value="2014-10-17"><input type="checkbox" id="needCompare" name="needCompare" value="0" style="display:none;"></div>
            </div>
            </span>
            <span class="label">排序</span>
            <select id="sortKey" class="dropdown_select" style="display: none;">
                <option value="RefDate">发布时间</option>
                <option value="TargetUser">送达人数</option>
                <option value="IntPageReadUser">图文页阅读人数</option>
                <option value="OriPageReadUser">原文页阅读人数</option>
                <option value="ShareUser">分享转发人数</option>
                <option value="AddToFavUser">微信收藏人数</option>
            </select><div class="dropdown_menu" id="dropdown_select_0" style="width: 136px;">    <a href="javascript:;" class="button dropdown_switch">        <label>发布时间</label>        <i class="arrow"></i>    </a>    <ul class="dropdown_data_list" style=""><li class="dropdown_data_item"><a href="javascript:;" data-val="RefDate">发布时间</a></li><li class="dropdown_data_item"><a href="javascript:;" data-val="TargetUser">送达人数</a></li><li class="dropdown_data_item"><a href="javascript:;" data-val="IntPageReadUser">图文页阅读人数</a></li><li class="dropdown_data_item"><a href="javascript:;" data-val="OriPageReadUser">原文页阅读人数</a></li><li class="dropdown_data_item"><a href="javascript:;" data-val="ShareUser">分享转发人数</a></li><li class="dropdown_data_item"><a href="javascript:;" data-val="AddToFavUser">微信收藏人数</a></li>    </ul></div>
            <select id="sort" class="dropdown_select" style="display: none;">
                <option value="asc">正序</option>
                <option value="desc" selected="selected">逆序</option>
            </select><div class="dropdown_menu" id="dropdown_select_1" style="width: 95px;">    <a href="javascript:;" class="button dropdown_switch">        <label>正序</label>        <i class="arrow"></i>    </a>    <ul class="dropdown_data_list" style=""><li class="dropdown_data_item"><a href="javascript:;" data-val="asc">正序</a></li><li class="dropdown_data_item"><a href="javascript:;" data-val="desc">逆序</a></li>    </ul></div>
            <div class="ui_search">
                <input type="text" value="按标题搜索" onclick="if(this.value==this.defaultValue){this.value=&#39;&#39;;this.style.color=&#39;#000&#39;;}" onblur="if(this.value==&#39;&#39;){this.value=this.defaultValue;this.style.color=&#39;#aaa&#39;}" style="color:#aaa;" id="keyword"><button type="submit" id="search">搜索</button>
            </div>
        </div>
        <div class="sub_menu" id="detail_title" style="display: none;">
            <span class="label"><h5 class="sub_title"></h5><em class="time"></em></span>
        </div>
    </div>
    <div class="content">
        <div class="sub_content">
            <div id="no_article" style="display: none; height: 500px;" class="time-chart nodata">
            </div>
            <div class="ui_tips" style="display:none;" id="no_compare_tips"><i class="icon_info"></i>您还没有将任何图文加入对比页面</div>
            <div class="ui_tips" style="display:none;" id="no_detail_tips"><i class="icon_info"></i>您尚未选择任何文章,可以通过点击图文右上方“查看图文详解”链接，选择图文查看详解</div>
            <div style="display:none;" id="detail_content">
<div style="margin:0 30px;"><div class="ui_tips"><i class="icon_info"></i>仅统计图文发出后7天内的数据，且仅有最近7天内的图文才保存数据，7天前的数据将被删除，请知悉。</div></div>
<div class="mod_basic">
    <h4 class="sub_title">整体数据</h4>
    <div class="sub_content">
        <!--图控件的模版，这里目前内容较少，后面方便扩展，直接在这里修改-->
<div class="time-chart" id="chartContainer"></div>
								    </div>
</div>
<div class="mod_basic">
    <div class="title">
        <h3>详细数据</h3>
        <div class="tabs" id="div_item_tabs">
                            <a class="first current" id="tab_1" href="javascript:;">图文页阅读</a>
                                <a id="tab_2" href="javascript:;">原文页阅读</a>
                                <a id="tab_3" href="javascript:;">分享转发</a>
                                <a class="last" id="tab_4" href="javascript:;">微信收藏</a>
                        </div>
    </div>
    <div class="content" id="wechat_map">
        <div id="chart4trend" class="detailMap">
            <h4 class="sub_title">趋势图</h4>
            <div class="sub_content">
                <div class="time-chart" id="chartContainer4trend"></div>
            </div>
        </div>
        <div id="chart4sex" class="detailMap">
            <hr class="split">
            <h4 class="sub_title">读者性别分布</h4>
            <div class="sub_content">
                <div class="time-chart" id="chartContainer4sex"></div>
            </div>
        </div>
        <div id="chart4provice" class="detailMap">
            <hr class="split">
            <h4 class="sub_title">读者省份分布</h4>
            <div class="sub_content">
                <div class="map_chart">
                    <div class="chart_wrap">
                        <div class="time-chart" id="chartContainer4provice"></div>
                    </div>
                    <div class="map_patch"></div>
                    <div class="map_colors">
                        <div class="colors_bar"></div>
                        <div class="number_max" id="number_max"></div>
                        <div class="number_min" id="number_min"></div>
                    </div>
                </div>
                <div class="map_rank">
                    <div id="table_list_province"></div>
                </div>
            </div>
        </div>
        <div id="chart4platform" class="detailMap">
            <hr class="split">
            <h4 class="sub_title">阅读终端分析</h4>
            <div class="sub_content">
                <div class="time-chart" id="chartContainer4platform"></div>
            </div>
        </div>
        <div id="chart4device" class="detailMap">
            <hr class="split">
            <h4 class="sub_title">机型分析 TOP10</h4>
                        <div class="sub_content" style="padding-bottom:0;">
                <div class="ui_tips"><i class="icon_info"></i>由于Android机型的版本编码复杂多变，无法合并Android机型的不同版本，请知悉。</div>
            </div>
                        <div class="sub_content">
                <div class="map_chart" style="margin:0;width:300px">
                    <div class="chart_wrap" style="height:500px;">
                        <div class="time-chart" id="chartContainer4device"></div>
                    </div>
                </div>
                <div class="map_rank" style="margin-left:300px;">
                    <div id="table_list_device"></div>
                </div>
            </div>
        </div>
        <hr class="split">
        <h4 class="sub_title">详细数据</h4>
        <div class="sub_content">
            <div class="column cf">
    <div class="column-title cf">
<!--         <span class="link-thin"><i class="icon-download-x"></i><a href="#" onclick="export_excel()">导出CSV</a></span> -->
        <div class="btn-append" id="set_table"></div>
    </div>
    <div id="table_list"></div>
</div>        </div>
    </div>
</div>
            </div>
            <ol class="wechat_diff_list">
                <li id="article_template" style="display: none;">
                <div class="wechat_diff_title">
                    <div class="wechat_diff_extra">
                        <a class="show_diff" href="javascript:;">加入图文对比</a>
                        <a class="show_detail" href="javascript:;">查看图文详解</a>
                    </div>
                    <h5></h5><em class="time"></em></div>
                <div class="wechat_diff_content">
                    <table class="diff_chart">
                        <tbody><tr>
                            <td class="td1"></td>
                            <td class="td2">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </td>
                            <td class="td3">
                                <div class="dropList">
                                </div>
                                <div class="chart_wrap"></div>
                            </td>
                        </tr>
                    </tbody></table>
                    <div class="deff_table"><!-- 展开增加类 show -->
                        <h6>数据明细<a href="javascript:;">收起数据明细</a></h6>
                        <div class="table_wrap"><div></div></div>
                    </div>
                </div>
                </li>
            <li class="article_detail"><div class="ui_tips"><i class="icon_info"></i>仅统计了图文发出后7天内的数据，请知悉。</div></li><li id="article_1_202475923_1" class="article_detail">
                <div class="wechat_diff_title">
                    <div class="wechat_diff_extra">
                        <a class="show_diff" href="javascript:;">加入图文对比</a>
                        <a class="show_detail" href="javascript:;">查看图文详解</a>
                    </div>
                    <h5>全世界知名大公司起名</h5><em class="time">2014-10-13</em></div>
                <div class="wechat_diff_content">
                    <table class="diff_chart">
                        <tbody><tr>
                            <td class="td1" id="trapezoid_article_1_202475923_1"><svg height="137" version="1.1" width="180" xmlns="http://www.w3.org/2000/svg" style="overflow: hidden; position: relative;"><desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.1.0</desc><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs><path fill="#92bced" stroke="none" d="M0,0L162,0L17,45L1,90L1,135L0,135L0,0Z" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#dce2f6" d="M0,0L180,0Z" stroke-width="1" width="1" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#dce2f6" d="M0,45L180,45Z" stroke-width="1" width="1" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#dce2f6" d="M0,90L180,90Z" stroke-width="1" width="1" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#dce2f6" d="M0,135L180,135Z" stroke-width="1" width="1" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path></svg></td>
                            <td class="td2">
                                <ul>
                                    <li><em>2,310</em>送达人数<div class="bg"><i class="icon_down"></i></div></li>
                                    <li><em>234</em>图文页阅读人数<div class="bg"><i class="icon_down"></i></div></li>
                                    <li><em>6</em>原文页阅读人数<div class="bg"><i class="icon_down"></i></div></li>
                                    <li><em>10</em>转发+收藏人数</li>
                                </ul>
                            </td>
                            <td class="td3">
                                <div class="dropList ui_menu" id="dropList_article_1_202475923_1"><button class="button button_link">图文页阅读人数<i class="icon_menu"></i></button><ul class="ui_menu_list" role="menu" aria-labelledby="dropdownMenu" style="display:none;"><li class="first"><a class="current" href="javascript:void(0);" value="IntPageReadUser" tadindex="-1">图文页阅读人数</a></li><li><a href="javascript:void(0);" value="OriPageReadUser" tadindex="-1">原文页阅读人数</a></li><li><a href="javascript:void(0);" value="ShareUser" tadindex="-1">分享转发人数</a></li><li class="last"><a href="javascript:void(0);" value="AddToFavUser" tadindex="-1">微信收藏人数</a></li></ul></div>
                                <div class="chart_wrap" id="chart_article_1_202475923_1" data-highcharts-chart="0" style="height: 120px;"><div class="highcharts-container" id="highcharts-0" style="position: relative; overflow: hidden; width: 489px; height: 120px; text-align: left; line-height: normal; z-index: 0; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><svg version="1.1" style="font-family:Tahoma, &quot;microsoft yahei&quot;, 微软雅黑, 宋体;;font-size:12px;" xmlns="http://www.w3.org/2000/svg" width="489" height="120"><desc>Created with Highcharts 4.0.3</desc><defs><clippath id="highcharts-1"><rect x="0" y="0" width="433" height="87"></rect></clippath></defs><rect x="0" y="0" width="489" height="120" strokeWidth="0" fill="#FFFFFF" class=" highcharts-background"></rect><path fill="rgba(68,181,73,0.25)" d="M 0 0"></path><g class="highcharts-grid" zIndex="1"></g><g class="highcharts-grid" zIndex="1"><path fill="none" d="M 46 9.5 L 479 9.5" stroke="#F2F3F4" stroke-width="1" zIndex="1" opacity="1"></path><path fill="none" d="M 46 54.5 L 479 54.5" stroke="#F2F3F4" stroke-width="1" zIndex="1" opacity="1"></path><path fill="none" d="M 46 98.5 L 479 98.5" stroke="#F2F3F4" stroke-width="1" zIndex="1" opacity="1"></path></g><g class="highcharts-axis" zIndex="2"><path fill="none" d="M 175.5 98 L 175.5 108" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 262.5 98 L 262.5 108" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 348.5 98 L 348.5 108" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 435.5 98 L 435.5 108" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 88.5 98 L 88.5 108" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 46 98 L 479 98" stroke="#C6C6C6" stroke-width="2" zIndex="7" visibility="visible"></path></g><g class="highcharts-axis" zIndex="2"></g><path fill="none" d="M 88.5 10 L 88.5 98" stroke="#7ac943" stroke-width="1" zIndex="2" stroke-dasharray="1,1" visibility="hidden"></path><g class="highcharts-series-group" zIndex="3"><g class="highcharts-series" visibility="visible" zIndex="0.1" transform="translate(46,10) scale(1 1)" clip-path="url(#highcharts-1)"><path fill="rgba(135, 179, 212, 0.05)" d="M 43.3 24.200000000000003 L 129.89999999999998 58.519999999999996 L 216.5 84.04 L 303.09999999999997 82.28 L 389.7 83.6 L 389.7 88 L 43.3 88" zIndex="0"></path><path fill="none" d="M 43.3 24.200000000000003 L 129.89999999999998 58.519999999999996 L 216.5 84.04 L 303.09999999999997 82.28 L 389.7 83.6" stroke="#44B549" stroke-width="2" zIndex="1" stroke-linejoin="round" stroke-linecap="round"></path><path fill="none" d="M 33.3 24.200000000000003 L 43.3 24.200000000000003 L 129.89999999999998 58.519999999999996 L 216.5 84.04 L 303.09999999999997 82.28 L 389.7 83.6 L 399.7 83.6" stroke-linejoin="round" visibility="visible" stroke="rgba(192,192,192,0.0001)" stroke-width="22" zIndex="2" class=" highcharts-tracker" style=""></path></g><g class="highcharts-markers highcharts-tracker" visibility="visible" zIndex="0.1" transform="translate(46,10) scale(1 1)" clip-path="none" style=""><path fill="#44B549" d="M 389 79.6 C 394.328 79.6 394.328 87.6 389 87.6 C 383.672 87.6 383.672 79.6 389 79.6 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 303 78.28 C 308.328 78.28 308.328 86.28 303 86.28 C 297.672 86.28 297.672 78.28 303 78.28 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 216 80.04 C 221.328 80.04 221.328 88.04 216 88.04 C 210.672 88.04 210.672 80.04 216 80.04 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 129.89999999999998 54.519999999999996 C 135.22799999999998 54.519999999999996 135.22799999999998 62.519999999999996 129.89999999999998 62.519999999999996 C 124.57199999999997 62.519999999999996 124.57199999999997 54.519999999999996 129.89999999999998 54.519999999999996 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 43.3 20.200000000000003 C 48.628 20.200000000000003 48.628 28.200000000000003 43.3 28.200000000000003 C 37.971999999999994 28.200000000000003 37.971999999999994 20.200000000000003 43.3 20.200000000000003 Z" stroke="#FFFFFF" stroke-width="1"></path></g></g><g class="highcharts-axis-labels highcharts-xaxis-labels" zIndex="7"><text x="89.3" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="119" opacity="1">2014-10-13</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-10-14</text><text x="262.5" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="119" opacity="1">2014-10-15</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-10-16</text><text x="435.7" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="119" opacity="1">2014-10-17</text></g><g class="highcharts-axis-labels highcharts-yaxis-labels" zIndex="7"><text x="0" text-anchor="end" style="width:141px;color:#8D8D8D;cursor:default;font-size:11px;font-family:Microsoft yahei;fill:#8D8D8D;" y="-9999"></text><text x="31" text-anchor="end" style="width:141px;color:#8D8D8D;cursor:default;font-size:11px;font-family:Microsoft yahei;fill:#8D8D8D;" y="58.5" opacity="1">100</text><text x="31" text-anchor="end" style="width:141px;color:#8D8D8D;cursor:default;font-size:11px;font-family:Microsoft yahei;fill:#8D8D8D;" y="14.5" opacity="1">200</text></g><g class="highcharts-tooltip" zIndex="8" style="cursor:default;padding:0;white-space:nowrap;" transform="translate(6,50)" opacity="0"><path fill="#555556" d="M 0 0 L 77 0 83 -6 89 0 166 0 C 166 0 166 0 166 0 L 166 62 C 166 62 166 62 166 62 L 0 62 C 0 62 0 62 0 62 L 0 0 C 0 0 0 0 0 0"></path></g></svg><div class="highcharts-tooltip" style="position: absolute; left: 6px; top: 50px; visibility: hidden;"><span style="position: absolute; white-space: nowrap; font-family: Tahoma, &#39;microsoft yahei&#39;, 微软雅黑, 宋体; font-size: 12px; color: rgb(255, 255, 255); margin-left: 0px; margin-top: 0px; left: 8px; top: 8px;" zindex="1"><div style="padding:5px;"><b>2014-10-13</b></div><table style="width: 150px"><tbody><tr><td style="padding: 2px 5px">图文页阅读人数 </td><td style="text-align: right;padding-left:15px">145 </td></tr></tbody></table></span></div></div></div>
                            </td>
                        </tr>
                    </tbody></table>
                    <div class="deff_table"><!-- 展开增加类 show -->
                        <h6>数据明细<a href="javascript:;">收起数据明细</a></h6>
                        <div class="table_wrap"><div id="table_article_1_202475923_1" class="gri_wrapper"><table class="gri_stable" id="table_article_1_202475923_1_table" style="table-layout: auto;"><colgroup span="10"><col class="gri_TargetUser"><col class="gri_IntPageReadUser"><col class="gri_IntPageReadCount"><col class="gri_PageConversion"><col class="gri_OriPageReadUser"><col class="gri_OriPageReadCount"><col class="gri_Conversion"><col class="gri_ShareUser"><col class="gri_ShareCount"><col class="gri_AddToFavUser"></colgroup><thead><tr><th name="TargetUser" rowspan="2" colspan="1" style="text-align: center; border: 1px solid rgb(232, 232, 232);">送达人数</th><th name="undefined" colspan="3" style="text-align: center; border: 1px solid rgb(232, 232, 232);">图文页阅读</th><th name="undefined" colspan="3" style="text-align: center; border: 1px solid rgb(232, 232, 232);">原文页阅读</th><th name="undefined" colspan="2" style="text-align: center; border: 1px solid rgb(232, 232, 232);">分享转发</th><th name="AddToFavUser" class="hover enable" rowspan="2" style="text-align: center; border: 1px solid rgb(232, 232, 232);">微信收藏人数<i></i></th></tr><tr><th name="IntPageReadUser" style="text-align: center; border: 1px solid rgb(232, 232, 232);">人数</th><th name="IntPageReadCount" style="text-align: center; border: 1px solid rgb(232, 232, 232);">次数</th><th name="PageConversion" style="text-align: center; border: 1px solid rgb(232, 232, 232);">图文转化率</th><th name="OriPageReadUser" style="text-align: center; border: 1px solid rgb(232, 232, 232);">人数</th><th name="OriPageReadCount" style="text-align: center; border: 1px solid rgb(232, 232, 232);">次数</th><th name="Conversion" style="text-align: center; border: 1px solid rgb(232, 232, 232);">原文转化率</th><th name="ShareUser" style="text-align: center; border: 1px solid rgb(232, 232, 232);">人数</th><th name="ShareCount" style="text-align: center; border: 1px solid rgb(232, 232, 232);">次数</th></tr></thead><tbody><tr><td><div style="width: 100%; height: 100%;text-align:center;">2,310</div></td><td><div style="width: 100%; height: 100%;text-align:right;">234</div></td><td><div style="width: 100%; height: 100%;text-align:right;">296</div></td><td><div style="width: 100%; height: 100%;text-align:right;">10.13%</div></td><td><div style="width: 100%; height: 100%;text-align:right;">6</div></td><td><div style="width: 100%; height: 100%;text-align:right;">6</div></td><td><div style="width: 100%; height: 100%;text-align:right;">2.56%</div></td><td><div style="width: 100%; height: 100%;text-align:right;">9</div></td><td><div style="width: 100%; height: 100%;text-align:right;">9</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1</div></td></tr></tbody></table></div></div>
                    </div>
                </div>
                </li><li id="article_2_202475923_2" class="article_detail">
                <div class="wechat_diff_title">
                    <div class="wechat_diff_extra">
                        <a class="show_diff" href="javascript:;">加入图文对比</a>
                        <a class="show_detail" href="javascript:;">查看图文详解</a>
                    </div>
                    <h5>招财吉祥物是哪些？</h5><em class="time">2014-10-13</em></div>
                <div class="wechat_diff_content">
                    <table class="diff_chart">
                        <tbody><tr>
                            <td class="td1" id="trapezoid_article_2_202475923_2"><svg height="137" version="1.1" width="180" xmlns="http://www.w3.org/2000/svg" style="overflow: hidden; position: relative;"><desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.1.0</desc><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs><path fill="#92bced" stroke="none" d="M0,0L162,0L6,45L0,90L1,135L0,135L0,0Z" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#dce2f6" d="M0,0L180,0Z" stroke-width="1" width="1" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#dce2f6" d="M0,45L180,45Z" stroke-width="1" width="1" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#dce2f6" d="M0,90L180,90Z" stroke-width="1" width="1" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#dce2f6" d="M0,135L180,135Z" stroke-width="1" width="1" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path></svg></td>
                            <td class="td2">
                                <ul>
                                    <li><em>2,310</em>送达人数<div class="bg"><i class="icon_down"></i></div></li>
                                    <li><em>72</em>图文页阅读人数<div class="bg"><i class="icon_down"></i></div></li>
                                    <li><em>0</em>原文页阅读人数<div class="bg"><i class="icon_down"></i></div></li>
                                    <li><em>11</em>转发+收藏人数</li>
                                </ul>
                            </td>
                            <td class="td3">
                                <div class="dropList ui_menu" id="dropList_article_2_202475923_2"><button class="button button_link">图文页阅读人数<i class="icon_menu"></i></button><ul class="ui_menu_list" role="menu" aria-labelledby="dropdownMenu" style="display:none;"><li class="first"><a class="current" href="javascript:void(0);" value="IntPageReadUser" tadindex="-1">图文页阅读人数</a></li><li><a href="javascript:void(0);" value="OriPageReadUser" tadindex="-1">原文页阅读人数</a></li><li><a href="javascript:void(0);" value="ShareUser" tadindex="-1">分享转发人数</a></li><li class="last"><a href="javascript:void(0);" value="AddToFavUser" tadindex="-1">微信收藏人数</a></li></ul></div>
                                <div class="chart_wrap" id="chart_article_2_202475923_2" data-highcharts-chart="1" style="height: 120px;"><div class="highcharts-container" id="highcharts-4" style="position: relative; overflow: hidden; width: 489px; height: 120px; text-align: left; line-height: normal; z-index: 0; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><svg version="1.1" style="font-family:Tahoma, &quot;microsoft yahei&quot;, 微软雅黑, 宋体;;font-size:12px;" xmlns="http://www.w3.org/2000/svg" width="489" height="120"><desc>Created with Highcharts 4.0.3</desc><defs><clippath id="highcharts-5"><rect x="0" y="0" width="440" height="87"></rect></clippath></defs><rect x="0" y="0" width="489" height="120" strokeWidth="0" fill="#FFFFFF" class=" highcharts-background"></rect><g class="highcharts-grid" zIndex="1"></g><g class="highcharts-grid" zIndex="1"><path fill="none" d="M 39 9.5 L 479 9.5" stroke="#F2F3F4" stroke-width="1" zIndex="1" opacity="1"></path><path fill="none" d="M 39 54.5 L 479 54.5" stroke="#F2F3F4" stroke-width="1" zIndex="1" opacity="1"></path><path fill="none" d="M 39 98.5 L 479 98.5" stroke="#F2F3F4" stroke-width="1" zIndex="1" opacity="1"></path></g><g class="highcharts-axis" zIndex="2"><path fill="none" d="M 170.5 98 L 170.5 108" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 258.5 98 L 258.5 108" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 346.5 98 L 346.5 108" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 434.5 98 L 434.5 108" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 82.5 98 L 82.5 108" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 39 98 L 479 98" stroke="#C6C6C6" stroke-width="2" zIndex="7" visibility="visible"></path></g><g class="highcharts-axis" zIndex="2"></g><g class="highcharts-series-group" zIndex="3"><g class="highcharts-series" visibility="visible" zIndex="0.1" transform="translate(39,10) scale(1 1)" clip-path="url(#highcharts-5)"><path fill="rgba(135, 179, 212, 0.05)" d="M 44 15.840000000000003 L 132 47.52 L 220 82.72 L 308 75.68 L 396 79.2 L 396 88 L 44 88" zIndex="0"></path><path fill="none" d="M 44 15.840000000000003 L 132 47.52 L 220 82.72 L 308 75.68 L 396 79.2" stroke="#44B549" stroke-width="2" zIndex="1" stroke-linejoin="round" stroke-linecap="round"></path><path fill="none" d="M 34 15.840000000000003 L 44 15.840000000000003 L 132 47.52 L 220 82.72 L 308 75.68 L 396 79.2 L 406 79.2" stroke-linejoin="round" visibility="visible" stroke="rgba(192,192,192,0.0001)" stroke-width="22" zIndex="2" class=" highcharts-tracker" style=""></path></g><g class="highcharts-markers highcharts-tracker" visibility="visible" zIndex="0.1" transform="translate(39,10) scale(1 1)" clip-path="none" style=""><path fill="#44B549" d="M 396 75.2 C 401.328 75.2 401.328 83.2 396 83.2 C 390.672 83.2 390.672 75.2 396 75.2 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 308 71.68 C 313.328 71.68 313.328 79.68 308 79.68 C 302.672 79.68 302.672 71.68 308 71.68 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 220 78.72 C 225.328 78.72 225.328 86.72 220 86.72 C 214.672 86.72 214.672 78.72 220 78.72 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 132 43.52 C 137.328 43.52 137.328 51.52 132 51.52 C 126.672 51.52 126.672 43.52 132 43.52 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 44 11.840000000000003 C 49.328 11.840000000000003 49.328 19.840000000000003 44 19.840000000000003 C 38.672 19.840000000000003 38.672 11.840000000000003 44 11.840000000000003 Z" stroke="#FFFFFF" stroke-width="1"></path></g></g><g class="highcharts-axis-labels highcharts-xaxis-labels" zIndex="7"><text x="83" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="119" opacity="1">2014-10-13</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-10-14</text><text x="259" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="119" opacity="1">2014-10-15</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-10-16</text><text x="435" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="119" opacity="1">2014-10-17</text></g><g class="highcharts-axis-labels highcharts-yaxis-labels" zIndex="7"><text x="0" text-anchor="end" style="width:141px;color:#8D8D8D;cursor:default;font-size:11px;font-family:Microsoft yahei;fill:#8D8D8D;" y="-9999"></text><text x="24" text-anchor="end" style="width:141px;color:#8D8D8D;cursor:default;font-size:11px;font-family:Microsoft yahei;fill:#8D8D8D;" y="58.5" opacity="1">25</text><text x="24" text-anchor="end" style="width:141px;color:#8D8D8D;cursor:default;font-size:11px;font-family:Microsoft yahei;fill:#8D8D8D;" y="14.5" opacity="1">50</text></g><g class="highcharts-tooltip" zIndex="8" style="cursor:default;padding:0;white-space:nowrap;" transform="translate(0,-9999)"><path fill="#555556" d="M 0 0 L 16 0 C 16 0 16 0 16 0 L 16 16 C 16 16 16 16 16 16 L 0 16 C 0 16 0 16 0 16 L 0 0 C 0 0 0 0 0 0"></path></g></svg><div class="highcharts-tooltip" style="position: absolute; left: 0px; top: -9999px;"><span style="position: absolute; white-space: nowrap; font-family: Tahoma, &#39;microsoft yahei&#39;, 微软雅黑, 宋体; font-size: 12px; color: rgb(255, 255, 255); margin-left: 0px; margin-top: 0px; left: 8px; top: 8px;" zindex="1"></span></div></div></div>
                            </td>
                        </tr>
                    </tbody></table>
                    <div class="deff_table"><!-- 展开增加类 show -->
                        <h6>数据明细<a href="javascript:;">收起数据明细</a></h6>
                        <div class="table_wrap"><div id="table_article_2_202475923_2" class="gri_wrapper"><table class="gri_stable" id="table_article_2_202475923_2_table" style="table-layout: auto;"><colgroup span="10"><col class="gri_TargetUser"><col class="gri_IntPageReadUser"><col class="gri_IntPageReadCount"><col class="gri_PageConversion"><col class="gri_OriPageReadUser"><col class="gri_OriPageReadCount"><col class="gri_Conversion"><col class="gri_ShareUser"><col class="gri_ShareCount"><col class="gri_AddToFavUser"></colgroup><thead><tr><th name="TargetUser" rowspan="2" colspan="1" style="text-align: center; border: 1px solid rgb(232, 232, 232);">送达人数</th><th name="undefined" colspan="3" style="text-align: center; border: 1px solid rgb(232, 232, 232);">图文页阅读</th><th name="undefined" colspan="3" style="text-align: center; border: 1px solid rgb(232, 232, 232);">原文页阅读</th><th name="undefined" colspan="2" style="text-align: center; border: 1px solid rgb(232, 232, 232);">分享转发</th><th name="AddToFavUser" class="hover enable" rowspan="2" style="text-align: center; border: 1px solid rgb(232, 232, 232);">微信收藏人数<i></i></th></tr><tr><th name="IntPageReadUser" style="text-align: center; border: 1px solid rgb(232, 232, 232);">人数</th><th name="IntPageReadCount" style="text-align: center; border: 1px solid rgb(232, 232, 232);">次数</th><th name="PageConversion" style="text-align: center; border: 1px solid rgb(232, 232, 232);">图文转化率</th><th name="OriPageReadUser" style="text-align: center; border: 1px solid rgb(232, 232, 232);">人数</th><th name="OriPageReadCount" style="text-align: center; border: 1px solid rgb(232, 232, 232);">次数</th><th name="Conversion" style="text-align: center; border: 1px solid rgb(232, 232, 232);">原文转化率</th><th name="ShareUser" style="text-align: center; border: 1px solid rgb(232, 232, 232);">人数</th><th name="ShareCount" style="text-align: center; border: 1px solid rgb(232, 232, 232);">次数</th></tr></thead><tbody><tr><td><div style="width: 100%; height: 100%;text-align:center;">2,310</div></td><td><div style="width: 100%; height: 100%;text-align:right;">72</div></td><td><div style="width: 100%; height: 100%;text-align:right;">94</div></td><td><div style="width: 100%; height: 100%;text-align:right;">3.12%</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0%</div></td><td><div style="width: 100%; height: 100%;text-align:right;">10</div></td><td><div style="width: 100%; height: 100%;text-align:right;">13</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1</div></td></tr></tbody></table></div></div>
                    </div>
                </div>
                </li><li id="article_3_202475923_3" class="article_detail">
                <div class="wechat_diff_title">
                    <div class="wechat_diff_extra">
                        <a class="show_diff" href="javascript:;">加入图文对比</a>
                        <a class="show_detail" href="javascript:;">查看图文详解</a>
                    </div>
                    <h5>娱乐测一测，你的名字值多少钱？</h5><em class="time">2014-10-13</em></div>
                <div class="wechat_diff_content">
                    <table class="diff_chart">
                        <tbody><tr>
                            <td class="td1" id="trapezoid_article_3_202475923_3"><svg height="137" version="1.1" width="180" xmlns="http://www.w3.org/2000/svg" style="overflow: hidden; position: relative;"><desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.1.0</desc><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs><path fill="#92bced" stroke="none" d="M0,0L162,0L10,45L5,90L1,135L0,135L0,0Z" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#dce2f6" d="M0,0L180,0Z" stroke-width="1" width="1" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#dce2f6" d="M0,45L180,45Z" stroke-width="1" width="1" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#dce2f6" d="M0,90L180,90Z" stroke-width="1" width="1" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#dce2f6" d="M0,135L180,135Z" stroke-width="1" width="1" stroke-dasharray="4,3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path></svg></td>
                            <td class="td2">
                                <ul>
                                    <li><em>2,310</em>送达人数<div class="bg"><i class="icon_down"></i></div></li>
                                    <li><em>139</em>图文页阅读人数<div class="bg"><i class="icon_down"></i></div></li>
                                    <li><em>67</em>原文页阅读人数<div class="bg"><i class="icon_down"></i></div></li>
                                    <li><em>1</em>转发+收藏人数</li>
                                </ul>
                            </td>
                            <td class="td3">
                                <div class="dropList ui_menu" id="dropList_article_3_202475923_3"><button class="button button_link">图文页阅读人数<i class="icon_menu"></i></button><ul class="ui_menu_list" role="menu" aria-labelledby="dropdownMenu" style="display:none;"><li class="first"><a class="current" href="javascript:void(0);" value="IntPageReadUser" tadindex="-1">图文页阅读人数</a></li><li><a href="javascript:void(0);" value="OriPageReadUser" tadindex="-1">原文页阅读人数</a></li><li><a href="javascript:void(0);" value="ShareUser" tadindex="-1">分享转发人数</a></li><li class="last"><a href="javascript:void(0);" value="AddToFavUser" tadindex="-1">微信收藏人数</a></li></ul></div>
                                <div class="chart_wrap" id="chart_article_3_202475923_3" data-highcharts-chart="2" style="height: 120px;"><div class="highcharts-container" id="highcharts-8" style="position: relative; overflow: hidden; width: 489px; height: 120px; text-align: left; line-height: normal; z-index: 0; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><svg version="1.1" style="font-family:Tahoma, &quot;microsoft yahei&quot;, 微软雅黑, 宋体;;font-size:12px;" xmlns="http://www.w3.org/2000/svg" width="489" height="120"><desc>Created with Highcharts 4.0.3</desc><defs><clippath id="highcharts-9"><rect x="0" y="0" width="433" height="87"></rect></clippath></defs><rect x="0" y="0" width="489" height="120" strokeWidth="0" fill="#FFFFFF" class=" highcharts-background"></rect><g class="highcharts-grid" zIndex="1"></g><g class="highcharts-grid" zIndex="1"><path fill="none" d="M 46 9.5 L 479 9.5" stroke="#F2F3F4" stroke-width="1" zIndex="1" opacity="1"></path><path fill="none" d="M 46 54.5 L 479 54.5" stroke="#F2F3F4" stroke-width="1" zIndex="1" opacity="1"></path><path fill="none" d="M 46 98.5 L 479 98.5" stroke="#F2F3F4" stroke-width="1" zIndex="1" opacity="1"></path></g><g class="highcharts-axis" zIndex="2"><path fill="none" d="M 175.5 98 L 175.5 108" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 262.5 98 L 262.5 108" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 348.5 98 L 348.5 108" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 435.5 98 L 435.5 108" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 88.5 98 L 88.5 108" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 46 98 L 479 98" stroke="#C6C6C6" stroke-width="2" zIndex="7" visibility="visible"></path></g><g class="highcharts-axis" zIndex="2"></g><g class="highcharts-series-group" zIndex="3"><g class="highcharts-series" visibility="visible" zIndex="0.1" transform="translate(46,10) scale(1 1)" clip-path="url(#highcharts-9)"><path fill="rgba(135, 179, 212, 0.05)" d="M 43.3 15.840000000000003 L 129.89999999999998 55.44 L 216.5 81.84 L 303.09999999999997 76.56 L 389.7 80.96 L 389.7 88 L 43.3 88" zIndex="0"></path><path fill="none" d="M 43.3 15.840000000000003 L 129.89999999999998 55.44 L 216.5 81.84 L 303.09999999999997 76.56 L 389.7 80.96" stroke="#44B549" stroke-width="2" zIndex="1" stroke-linejoin="round" stroke-linecap="round"></path><path fill="none" d="M 33.3 15.840000000000003 L 43.3 15.840000000000003 L 129.89999999999998 55.44 L 216.5 81.84 L 303.09999999999997 76.56 L 389.7 80.96 L 399.7 80.96" stroke-linejoin="round" visibility="visible" stroke="rgba(192,192,192,0.0001)" stroke-width="22" zIndex="2" class=" highcharts-tracker" style=""></path></g><g class="highcharts-markers highcharts-tracker" visibility="visible" zIndex="0.1" transform="translate(46,10) scale(1 1)" clip-path="none" style=""><path fill="#44B549" d="M 389 76.96 C 394.328 76.96 394.328 84.96 389 84.96 C 383.672 84.96 383.672 76.96 389 76.96 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 303 72.56 C 308.328 72.56 308.328 80.56 303 80.56 C 297.672 80.56 297.672 72.56 303 72.56 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 216 77.84 C 221.328 77.84 221.328 85.84 216 85.84 C 210.672 85.84 210.672 77.84 216 77.84 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 129 51.44 C 134.328 51.44 134.328 59.44 129 59.44 C 123.672 59.44 123.672 51.44 129 51.44 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 43 11.840000000000003 C 48.328 11.840000000000003 48.328 19.840000000000003 43 19.840000000000003 C 37.672 19.840000000000003 37.672 11.840000000000003 43 11.840000000000003 Z" stroke="#FFFFFF" stroke-width="1"></path></g></g><g class="highcharts-axis-labels highcharts-xaxis-labels" zIndex="7"><text x="89.3" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="119" opacity="1">2014-10-13</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-10-14</text><text x="262.5" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="119" opacity="1">2014-10-15</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-10-16</text><text x="435.7" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="119" opacity="1">2014-10-17</text></g><g class="highcharts-axis-labels highcharts-yaxis-labels" zIndex="7"><text x="0" text-anchor="end" style="width:141px;color:#8D8D8D;cursor:default;font-size:11px;font-family:Microsoft yahei;fill:#8D8D8D;" y="-9999"></text><text x="31" text-anchor="end" style="width:141px;color:#8D8D8D;cursor:default;font-size:11px;font-family:Microsoft yahei;fill:#8D8D8D;" y="58.5" opacity="1">50</text><text x="31" text-anchor="end" style="width:141px;color:#8D8D8D;cursor:default;font-size:11px;font-family:Microsoft yahei;fill:#8D8D8D;" y="14.5" opacity="1">100</text></g><g class="highcharts-tooltip" zIndex="8" style="cursor:default;padding:0;white-space:nowrap;" transform="translate(0,-9999)"><path fill="#555556" d="M 0 0 L 16 0 C 16 0 16 0 16 0 L 16 16 C 16 16 16 16 16 16 L 0 16 C 0 16 0 16 0 16 L 0 0 C 0 0 0 0 0 0"></path></g></svg><div class="highcharts-tooltip" style="position: absolute; left: 0px; top: -9999px;"><span style="position: absolute; white-space: nowrap; font-family: Tahoma, &#39;microsoft yahei&#39;, 微软雅黑, 宋体; font-size: 12px; color: rgb(255, 255, 255); margin-left: 0px; margin-top: 0px; left: 8px; top: 8px;" zindex="1"></span></div></div></div>
                            </td>
                        </tr>
                    </tbody></table>
                    <div class="deff_table"><!-- 展开增加类 show -->
                        <h6>数据明细<a href="javascript:;">收起数据明细</a></h6>
                        <div class="table_wrap"><div id="table_article_3_202475923_3" class="gri_wrapper"><table class="gri_stable" id="table_article_3_202475923_3_table" style="table-layout: auto;"><colgroup span="10"><col class="gri_TargetUser"><col class="gri_IntPageReadUser"><col class="gri_IntPageReadCount"><col class="gri_PageConversion"><col class="gri_OriPageReadUser"><col class="gri_OriPageReadCount"><col class="gri_Conversion"><col class="gri_ShareUser"><col class="gri_ShareCount"><col class="gri_AddToFavUser"></colgroup><thead><tr><th name="TargetUser" rowspan="2" colspan="1" style="text-align: center; border: 1px solid rgb(232, 232, 232);">送达人数</th><th name="undefined" colspan="3" style="text-align: center; border: 1px solid rgb(232, 232, 232);">图文页阅读</th><th name="undefined" colspan="3" style="text-align: center; border: 1px solid rgb(232, 232, 232);">原文页阅读</th><th name="undefined" colspan="2" style="text-align: center; border: 1px solid rgb(232, 232, 232);">分享转发</th><th name="AddToFavUser" class="hover enable" rowspan="2" style="text-align: center; border: 1px solid rgb(232, 232, 232);">微信收藏人数<i></i></th></tr><tr><th name="IntPageReadUser" style="text-align: center; border: 1px solid rgb(232, 232, 232);">人数</th><th name="IntPageReadCount" style="text-align: center; border: 1px solid rgb(232, 232, 232);">次数</th><th name="PageConversion" style="text-align: center; border: 1px solid rgb(232, 232, 232);">图文转化率</th><th name="OriPageReadUser" style="text-align: center; border: 1px solid rgb(232, 232, 232);">人数</th><th name="OriPageReadCount" style="text-align: center; border: 1px solid rgb(232, 232, 232);">次数</th><th name="Conversion" style="text-align: center; border: 1px solid rgb(232, 232, 232);">原文转化率</th><th name="ShareUser" style="text-align: center; border: 1px solid rgb(232, 232, 232);">人数</th><th name="ShareCount" style="text-align: center; border: 1px solid rgb(232, 232, 232);">次数</th></tr></thead><tbody><tr><td><div style="width: 100%; height: 100%;text-align:center;">2,310</div></td><td><div style="width: 100%; height: 100%;text-align:right;">139</div></td><td><div style="width: 100%; height: 100%;text-align:right;">180</div></td><td><div style="width: 100%; height: 100%;text-align:right;">6.02%</div></td><td><div style="width: 100%; height: 100%;text-align:right;">67</div></td><td><div style="width: 100%; height: 100%;text-align:right;">89</div></td><td><div style="width: 100%; height: 100%;text-align:right;">48.2%</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0</div></td></tr></tbody></table></div></div>
                    </div>
                </div>
                </li></ol>
            <a class="load_data" href="javascript:load_more();" style=""><i class="icon_down_open"></i>更多</a>
        </div>
    </div>
</div>
<!-- 基础模块 结束 -->
<script type="text/javascript" src="<?=base_url()?>weixin/tuwenfenxi_files/raphael-min.js" charset="utf-8"></script>
<script type="text/javascript" src="<?=base_url()?>weixin/tuwenfenxi_files/gri.map.js" charset="utf-8"></script>
<script type="text/javascript">
    //应用的初始化参数
    var initParams = {"start_date":"2014-09-18","end_date":"2014-10-17","source":{"seg0":[{"name":"\u5168\u90e8","value":"-1","isDefault":1}],"seg1":[{"name":"\u641c\u7d22\u516c\u4f17\u53f7\u540d\u79f0","value":"35"},{"name":"\u641c\u7d22\u5fae\u4fe1\u53f7","value":"3"},{"name":"\u56fe\u6587\u6d88\u606f\u53f3\u4e0a\u89d2\u83dc\u5355","value":"43"},{"name":"\u540d\u7247\u5206\u4eab","value":"17"},{"name":"\u626b\u4e8c\u7ef4\u7801\u53ca\u5176\u4ed6","value":"0"}]},"table_options":[{"key":"table_channel_group_split","value":"\u6e20\u9053\u7ec6\u5206","group":"channel"},{"key":"table_channel_group_other","value":"\u5408\u5e76\u5176\u5b83\u9879","group":"channel"},{"key":"table_version_group_split","value":"\u7248\u672c\u7ec6\u5206","group":"version"},{"key":"table_version_group_other","value":"\u5408\u5e76\u5176\u5b83\u9879","group":"version"}],"chart_options":[{"key":"chart_channel_group_split","value":"\u6e20\u9053\u7ec6\u5206","group":"channel"},{"key":"chart_channel_group_other","value":"\u5408\u5e76\u5176\u5b83\u9879","group":"channel"},{"key":"chart_version_group_split","value":"\u7248\u672c\u7ec6\u5206","group":"version"},{"key":"chart_version_group_other","value":"\u5408\u5e76\u5176\u5b83\u9879","group":"version"},{"key":"chart_calc_sum","value":"\u663e\u793a\u5c0f\u8ba1"}],"need_compare":1,"real_time":0};
    MTA.Page.init_params = initParams;
    var compare = [];//要对比的图文列表
    var page = 1;//当前要加载第几页数据
    var counter = 0;
    var isCompareChange = false;//要对比的图文列表是否有变化
    var source = {'all':-1,'compare':-1};//记下全部图文和图文对比上一次的来源信息
    var hasLoadMore = false;//从全部图文切换到图文对比时，记下全部图文是否有more按钮
    var detailId = false;//记录图文详情查看的ID;
    $(document).ready(function(){
        //大小图切换
        var dateObj = {
            inputId:'date',
            target:'datePicker',
            startDate: initParams.start_date || '',
            endDate: initParams.end_date || '',
            startCompareDate: initParams.start_compare_date || '',
            endCompareDate: initParams.end_compare_date || '',
            needCompare: '0',
            defaultText : ''|| ' 至 ',
            singleCompare : '',
            isTodayValid: false,
            minValidDate: minValidDate
        };

        //MTA.Page.Condition.source = new MTA.Selector('#div_source', 'source', initParams.source, 'buildDataWidthIdList');

        MTA.Report.initialize(dateObj, 'buildData');
        if ('wechat'=='wechat') {
            $('.wechat_diff_list').append('<li class="article_detail"><div class="ui_tips"><i class="icon_info"></i>仅统计了图文发出后7天内的数据，请知悉。</div></li>');
        }
        //$(".wechat_diff_list").on('click', '.deff_table .more a',show_table);
        //$(".wechat_diff_list").on('click', '.deff_table h6 a',hide_table);

        $("#sortKey").change(function(){buildData();});
        $("#sort").change(function(){buildData();});
        $("#keyword").keydown(function(event){
            if (13 == event.keyCode){
                buildData();
            }
        });
        $("#search").click(function(){buildData();});

        $("#tab_detail a").click(function(){
            $("#tab_detail a").removeClass("current");
            $(this).addClass("current");
            if (is_compare()){
                article_compare();
            } else if (is_detail()){
                article_detail();
            }else{
                article_all();
            }
            $('.ui_bubble').remove();
        });

        $("body").click(function(event){
            if ($(event.target).attr("class") != "show_diff"){
                $(".ui_bubble.ui_bubble_bottom").remove();
            }
        });

        var baseUrl = '/wechat/ctr_article_detail/get_detail_trend_chart_data?';
        //图文详解
        var conf = {
            1 : baseUrl+'field=IntPageReadUser,IntPageReadCount',
            2 : baseUrl+'field=OriPageReadUser,OriPageReadCount',
            3 : baseUrl+'field=ShareUser,ShareCount',
            4 : baseUrl+'field=AddToFavUser'
        };
        MTA.Util.view_switcher.init(conf, 'buildDetailMap');

        //页面tips
        var items = {"\u9001\u8fbe\u4eba\u6570":"\u56fe\u6587\u6d88\u606f\u7fa4\u53d1\u65f6\uff0c\u9001\u8fbe\u7684\u4eba\u6570","\u56fe\u6587\u9875\u9605\u8bfb\u4eba\u6570":"\u70b9\u51fb\u56fe\u6587\u9875\u7684\u53bb\u91cd\u4eba\u6570\uff0c\u5305\u62ec\u975e\u7c89\u4e1d","\u56fe\u6587\u9875\u9605\u8bfb\u6b21\u6570":"\u70b9\u51fb\u56fe\u6587\u9875\u7684\u6b21\u6570\uff0c\u5305\u62ec\u975e\u7c89\u4e1d\u7684\u70b9\u51fb","\u56fe\u6587\u8f6c\u5316\u7387":"\u56fe\u6587\u9605\u8bfb\u4eba\u6570\/\u9001\u8fbe\u4eba\u6570","\u539f\u6587\u9875\u9605\u8bfb\u4eba\u6570":"\u70b9\u51fb\u539f\u6587\u9875\u7684\u53bb\u91cd\u4eba\u6570\uff0c\u5305\u62ec\u975e\u7c89\u4e1d","\u539f\u6587\u9875\u9605\u8bfb\u6b21\u6570":"\u70b9\u51fb\u539f\u6587\u9875\u7684\u6b21\u6570\uff0c\u5305\u62ec\u975e\u7c89\u4e1d\u7684\u70b9\u51fb","\u539f\u6587\u8f6c\u5316\u7387":"\u539f\u6587\u9875\u9605\u8bfb\u4eba\u6570\/\u56fe\u6587\u9875\u9605\u8bfb\u4eba\u6570","\u5206\u4eab\u8f6c\u53d1\u4eba\u6570":"\u8f6c\u53d1\u6216\u5206\u4eab\u5230\u670b\u53cb\u3001\u670b\u53cb\u5708\u3001\u5fae\u535a\u7684\u53bb\u91cd\u7528\u6237\u6570\uff0c\u5305\u62ec\u975e\u7c89\u4e1d","\u5206\u4eab\u8f6c\u53d1\u6b21\u6570":"\u8f6c\u53d1\u6216\u5206\u4eab\u5230\u670b\u53cb\u3001\u670b\u53cb\u5708\u3001\u5fae\u535a\u7684\u6b21\u6570\uff0c\u5305\u62ec\u975e\u7c89\u4e1d\u7684\u70b9\u51fb","\u56fe\u6587\u9875":"\u70b9\u51fb\u56fe\u6587\u6d88\u606f\u8fdb\u5165\u7684\u9875\u9762","\u539f\u6587\u9875":"\u5728\u56fe\u6587\u9875\u70b9\u51fb\u201c\u9605\u8bfb\u539f\u6587\u201d\u8fdb\u5165\u7684\u9875\u9762"};
        MTA.Util.items_info.init(items,'wechat');
    });

    //切换到全部图文
    function article_all(){
        $("#condition").show();
        $("#detail_title").hide();
        $(".compare").hide();
        $("#no_compare_tips").hide();
        $("#no_detail_tips").hide();
        $("#detail_content").hide();
        MTA.Util.clearParams('article_id');

        if (source['all'] == get_source()){
            $('.article_detail[id]:not(.compare)').each(function(){
                var id = $(this).attr("id").replace(/article_\d+_(.*)/, "$1");
                if ($.inArray(id, compare) != -1){
                    $(this).children(".wechat_diff_title").children("div").children(".show_diff").html("立即去图文对比");
                }else{
                    $(this).children(".wechat_diff_title").children("div").children(".show_diff").html("加入图文对比");
                }
            });
            $(".article_detail:not(.compare)").show();
        }else{
            buildDataWidthIdList();
        }

        if (hasLoadMore){
            $(".load_data").show();
        }
        check_no_article();
    }

    //切换到图文详情
    function article_detail(){
        $("#condition").hide();//隐藏筛选条件
        $(".compare").hide();//隐藏对比图文
        $(".article_detail").hide();//隐藏所有图文tab下的图文列表
        $("#no_compare_tips").hide();

        if (detailId) {
            MTA.Util.setParams('article_id',detailId);
            $("#detail_title").show();
            $("#detail_content").show();
            buildDetailChart();
        } else {
            $("#detail_title").hide();
            $("#no_detail_tips").show();
        }

        $(".load_data").hide();
        $("#no_article").hide();
    }

    //切换到图文对比
    function article_compare(){
        $("#condition").hide();//隐藏筛选条件
        $("#detail_title").hide();
        $(".article_detail").hide();//隐藏所有图文tab下的图文列表
        $("#detail_content").hide();

        if (!compareIsEmpty()){//要对比的图文列表是否为空
            if (isCompareChange){
                buildDataWidthIdList();//重现刷新
            }else if (source['compare'] != get_source()){
                buildDataWidthIdList();//重现刷新
            }else{//对比图文列表和来源都没变，只需要把已有的列表显示出来
                $(".compare").show();
            }
            isCompareChange = false;
        }

        $(".load_data").hide();
        $("#no_article").hide();
    }

    function get_source(){
        return -1;//需求变了，不需要来源筛选了
        //return  MTA.Page.Condition.source.getValue();
    }

    function is_compare(){
        var v = $(".tabs a.current").attr("value");
        return 'compare'==v ? true : false;
    }

    function is_detail(){
        var v = $(".tabs a.current").attr("value");
        return 'detail'==v ? true : false;
    }

    function buildData(isMore){
        if (!isMore){//非追加模式
            $(".article_detail:not(.compare)").remove();
            page = 1;
        }

        get_data("/wechat/ctr_article_detail/get_list",{},function(data){
            data = jQuery.parseJSON(data);
            if (data['hasMore']){
                hasLoadMore = true;
                $(".load_data").show();
            }else{
                hasLoadMore = false;
                $(".load_data").hide();
            }

            for (var x in data['data']){
                show_article(data['data'][x]);
            }

            check_no_article();
        });
    }

    function buildDataWidthIdList(){
        var opts = {};
        if (is_compare()){
            $(".compare").remove();
            opts['article_id'] = compare.join(",");
            source['compare'] = get_source();
        }else{
            var id_list = [];
            $(".article_detail:not(.compare)").each(function(){
                id_list.push($(this).attr("id").replace(/article_\d+_(.*)/, "$1"));
            });
            opts['article_id'] = id_list.join(",");
            $(".article_detail:not(.compare)").remove();
            source['all'] = get_source();
        }

        get_data("/wechat/ctr_article_detail/get_list",opts,function(data){
            data = jQuery.parseJSON(data);

            for (var x in data['data']){
                show_article(data['data'][x]);
            }

            check_no_article();
        });
    }


    function load_more(){
        page++;
        buildData(true);
    }

    function show_article(data){
        if (undefined == data['title']){
            return false;
        }
        counter++;//把counter加入到id中是为了防止在某些特殊情况下后台返回多个id一样的图文导致页面出错
        var id = "article_"+counter+"_"+data['id'];
        var html = $("#article_template").html();
        html = "<li id='"+id+"'>" + html + "</li>";
        $(".wechat_diff_list").append(html);
        $("#" + id).addClass("article_detail");
        $("#" + id + " .wechat_diff_title h5").html(data['title']);
        $("#" + id + " .time").html(data['time']);
        $("#" + id + " .td1").attr("id", "trapezoid_"+id);
        $("#" + id + " .td2 ul li:eq(0)").html("<em>"+number_format(data['index'][0])+"</em>送达人数<div class='bg'><i class='icon_down'></i></div>");
        $("#" + id + " .td2 ul li:eq(1)").html("<em>"+number_format(data['index'][1])+"</em>图文页阅读人数<div class='bg'><i class='icon_down'></i></div>");
        $("#" + id + " .td2 ul li:eq(2)").html("<em>"+number_format(data['index'][4])+"</em>原文页阅读人数<div class='bg'><i class='icon_down'></i></div>");
        $("#" + id + " .td2 ul li:eq(3)").html("<em>"+number_format(parseInt(data['index'][7].replace(new RegExp(",","g"),""))+parseInt(data['index'][9].replace(new RegExp(",","g"),""))
)+"</em>转发+收藏人数");
        $("#" + id + " .td3 .dropList").attr("id", "dropList_"+id);
        $("#" + id + " .table_wrap div").attr("id", "table_" + id);
        $("#" + id + " .chart_wrap").attr("id", "chart_" + id);
        if (is_compare()){
            $("#" + id + " .show_diff").html("取消图文对比");
            $("#" + id).addClass("compare");
        }else if (jQuery.inArray(data['id'], compare) >= 0){
            $("#" + id + " .show_diff").html("立即去图文对比");
        }
        var trapeData = [
            data['index'][0].replace(new RegExp(",","g"),""), 
            data['index'][1].replace(new RegExp(",","g"),""),
            data['index'][4].replace(new RegExp(",","g"),""),
            parseInt(data['index'][7].replace(new RegExp(",","g"),""))+parseInt(data['index'][9].replace(new RegExp(",","g"),""))
        ];
        $("#trapezoid_"+id).trapezoid(trapeData);
        var index = [{'name':'图文页阅读人数','value':'IntPageReadUser'},{'name':'原文页阅读人数','value':'OriPageReadUser'},{'name':'分享转发人数','value':'ShareUser'},{'name':'微信收藏人数','value':'AddToFavUser'}];
        new MTA.HoverDownList({'container':'dropList_'+id,'data':index,'callback':show_chart, 'defaultValue':'IntPageReadUser', 'autoTrigger':true,'hoverTrigger':false});
        data['table_data'] = jQuery.parseJSON(data['table_data']);
        Gri.initDataTable({
            tableId : "table_"+id,
            data : data['table_data']['data'],
            allFields : data['table_data']['fields'],
            complexHeader:data['table_data']['complexHeader'],
            layout : 'auto',
            spanColIndex : "0",
            page : false,
            noPage : data['table_data']['noPage'],
            fixedRow : data['table_data']['fixedRow'],
            //cssSetting:result.cssSetting,
            callback : function() {
            }
        });

        $("#" + id + " .show_diff").click(function(){
            if ($(this).html() == "加入图文对比"){
                isCompareChange = true;
                $(this).html("立即去图文对比");
                show_bubble("成功添加该图文至\"图文对比\"", $(this), 3500);
                var flag = false;
                for (var x in compare){
                    if (compare[x] == data['id']){
                        flag = true;
                        break;
                    }
                }
                if (!flag){
                    compare.push(data['id']);
                }
            }else if($(this).html() == "取消图文对比"){
                var obj = $(this).parent().parent().parent();
                removeCompare(obj.attr("id"));
            }
            else{
                $(".tabs a[value='compare']").click();
            }
        });

        $("#" + id + " .show_detail").click(function(){
            detailId = data['id'];
            MTA.Util.setParams('article_id',detailId);
            $("#detail_title h5").html(data['title']);
            $("#detail_title .time").html(data['time']);
            $(".tabs a[value='detail']").click();
        })
    }

    function check_no_article(){
        if (is_compare()){
            if ($(".compare").length == 0){
                $("#no_article").show();
            }else{
                $("#no_article").hide();
            }
        }else{
            if ($(".article_detail:not(.compare)").length == 0){
                $("#no_article").show();
            }else{
                $("#no_article").hide();
            }
        }
    }

    function removeCompare(id){
        var idNum = id.replace(/article_\d+_(.*)/, "$1");
        $("#"+id).remove();
        var cmp = [];
        for (var x in compare){
            if (compare[x] != idNum){
                cmp.push(compare[x]);
            }
        }
        compare = cmp;
        compareIsEmpty();
    }

    function compareIsEmpty(){
        $("#no_detail_tips").hide();
        if (compare.length == 0){
            $("#no_compare_tips").show();
            $("h4.article_list").hide();
            $("#no_article").hide();
            return true;
        }
        $("h4.article_list").show();
        return false;
    }

    function show_chart(cfg){
        var id = "chart_" + cfg['id'].replace("dropList_", "");
        var article_id = cfg['id'].replace(/dropList_article_\d+_(.*)/, "$1");
        var date = $("#"+cfg['id'].replace("dropList_", "")).children(".wechat_diff_title").children(".time").html().substr(0, 10);

        var _opt = {
            chartOptions: {
                legend : {
                    enabled : false
                },
                chart:{
                    marginBottom: 22,
                    backgroundColor:'#FFFFFF'
                }
            },
            enableLegend:false,
            'theme':'wechat'
        };
        MTA.Data.loadChart("/wechat/ctr_article_detail/get_trend_chart_data?article_id="+article_id+"&index="+cfg['value']+"&chart_start_date="+date+"&chart_date_len=7", _opt, id, 120);
    }

    function number_format(num){
        num += '';
        var n = num.split('.');
        var n1 = n[0];
        var n2 = n.length > 1 ? '.' + n[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(n1)) {
            n1 = n1.replace(rgx, '$1' + ',' + '$2');
        }
        num = n1 + n2;
        return num;
    }

    function get_data(url, params, callback, id){
        var p = {};
        var sortKey = $("#sortKey").val();
        var sort = $("#sort").val();
        var keyword = $("#keyword").val();
        if (document.getElementById("keyword").defaultValue == keyword){
            keyword = "";
        }
        keyword = encodeURIComponent(keyword);

        p['sort'] = sortKey + " " + sort;
        p['keyword'] = keyword;
        p['page'] = page;

        var caller = get_data.caller.toString().match(/function\s(\w+)\(\s*|\w*\)/i)[1];
        params = $.extend(true, p, params, MTA.Page.Params, MTA.Function.setMenuParams(), MTA.Report.condition.getQueryParams(caller));


        var url = MTA.Config.RootPath + url + GRI.Util.convert_params(params, url)+"&rnd="+(+new Date());
        $.get(url, {}, function(data){
            if (data['is_session_expire'] && data['type']=='wechat'){
                MTA.Weixin.Util.expire();
                return;
            }
            callback(data, id);
        });
    }

    function show_table(){
        $(this).parent().parent().addClass("show");
    }

    function hide_table(){
        $(this).parent().parent().removeClass("show");
    }

    function show_bubble(msg, con, time){
        var id = $("body").data("bubble_id");
        if (undefined == id){
            id = 1;
        }
        $("body").data("bubble_id", id + 1);
        id = "bubble_" + id;
        var html = "";
        html += "<div class='ui_bubble ui_bubble_se' id='"+id+"' style='display:none;'>";
        html += "<i class='arrow_a'></i><i class='arrow_b'></i>";
        html += "<div class='content'>" + msg + "</div>";
        html += "</div>";
        $("body").append(html);
        var obj = $("#" + id);
        var w = parseInt(obj.css("width"));
        var h = parseInt(obj.css("height"));
        var x = con.offset().left;
        var y = con.offset().top;
        var left = x - w/2;
        if (left + w > x + parseInt(con.css("width"))){
            left = x + parseInt(con.css("width")) - w;
        }
        obj.css("left", x - w/2);
        obj.css("top", y - h);
        obj.css("display", "");
        setTimeout(function(){
            obj.fadeOut(1000,function(){
                obj.remove();
            });
        },time);
    }

    (function($){
        $.fn.trapezoid = function(data){
            var width = parseInt($(this).css("width"));
            var height = parseInt($(this).css("height"));
            var h = Math.floor(height / (data.length-1));

            var max = 0;
            for (var i = 0; i < data.length; i++){
                max = Math.max(max, data[i]);
            }
            max = max <= 0 ? 1 : max;

            var w = [];
            for (var i = 0; i < data.length; i++){
                w[i] = Math.ceil(data[i] * width * 0.9 / max);
            }

            var path = "";
            path += "M 0 0"
            for (var i = 0; i < data.length; i++){
                path += " L " + w[i] + " " + (i * h);
            }
            path += " L 0 " + (h * (data.length - 1));
            path += " L 0 0 z";

            var canvas = Raphael($(this).attr("id"), width, height);
            var trapezoid = canvas.path("M 0 0 z");
            trapezoid.attr("fill", "#92BCED");
            trapezoid.attr("stroke", "none");
            trapezoid.animate({'path':path}, 600, "<");

            for (var i = 0; i < data.length; i++){
                var line = canvas.path("M 0 "+(h * i) +" L "+width + " "+(h * i)+" z");
                line.attr("stroke", "#DCE2F6");
                line.attr("stroke-width", 1);
                line.attr("width", 1);
                line.attr("stroke-dasharray", "- ");
            }
        }
    })(jQuery);

//============ 图文详情 ============
    function buildFunnelChart(){
        var chartUrl = '/wechat/ctr_article_detail/get_funnel_chart_data/';
        var chartOpts = {
            chartType : 'bar',
            theme: 'wechat',
            autoStep:false,
            chartOptions:{
                xAxis: {
                    labels:{
                        formatter:function(){
                            var label = $.trim(this.value.toString());
                            var color = 'wechat' == 'wechat' ? '#44B549' : '#4A90E2';
                            if(label!=''){
                                if(label.indexOf('%')> -1){
                                    return '<div style="position:relative;z-index:0;text-align:right;width: 60px;padding-top: 15px;font-weight: bold; color:'+color+';">'+
                                    '<i style="border-left: 10px solid transparent;border-right: 10px solid transparent;border-top: 10px solid '+color+';"></i><div style="margin-top:-10px;">'+this.value+'</div></div>';
                                }else{
                                    return this.value ;
                                }
                            }

                        },
                        useHTML: true
                    }
                }
            }
        };
        MTA.Data.loadChart(chartUrl, chartOpts, 'chartContainer');
    }

    function buildChart(){
        var chartUrl = '/wechat/ctr_article_detail/get_chart_data',
            //工具函数
            constructSeries = function(source){
            var xAxis = [], series = [], dataObj = {};
                for(var o in source){
                    xAxis.push(o);
                    for(var p in source[o]){
                        !dataObj[p] && (dataObj[p]=[]);
                        dataObj[p].push({name:o, y:source[o][p]*1});
                    }
                }
                dataObj && function(){
                        for(var q in dataObj){
                            series.push({name:q, data: dataObj[q]});
                        }
                }();
            return {xAxis : xAxis, series : series};
        },
        //图基础配置
        opt = {
            chartOptions:{
                plotOptions:{
                    series:{
                        stacking:'normal'
                    }
                },
                legend: {
                       reversed: true
                  },
                yAxis :{
                    stackLabels: {
                        enabled: true,
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                   }
            }
            }
            }
        };
        
        //组合参数
        var params = MTA.Report.condition.getQueryParams();
        params = $.extend(true, params, MTA.Page.Params);
        var url = chartUrl + GRI.Util.convert_params(params, chartUrl)+"&rnd="+(+new Date());

        MTA.Data.loadBasic(url, function(data){
            //构造性别分布数据
            var sex = function(){
                //构造数据
                var chart = constructSeries(data.sex_data),
                //个性
                _opt = {
                    chartType : 'bar',
                    categories : chart.xAxis,
                    series : chart.series,
                    //title : '性别分布图',
                    height : 200,
                    dataFormat: '1',
                    theme: 'wechat'
                };
                _opt = $.extend(true, _opt, opt);

                $('#chartContainer4sex').createChart(_opt);
                $('#chart4sex').show();
            }();
            
            //构造终端分布数据
            var platform = function(){
                var chart = constructSeries(data.platform_data),
                //个性
                _opt = {
                    chartType : 'bar',
                    categories : chart.xAxis,
                    series : chart.series,
                    //title : '终端分布图',
                    height : 200,
                    dataFormat: '1',
                    theme: 'wechat'
                };
            
                _opt = $.extend(true, _opt, opt);
            
                $('#chartContainer4platform').createChart(_opt);
                $('#chart4platform').show();
            }();
        });
    }
 
    function buildProvinceData(){
        //组合参数
        var chartUrl = '/wechat/ctr_article_detail/get_provice_distribute_data',
        params = MTA.Report.condition.getQueryParams();
        params = $.extend(true, params, MTA.Page.Params);
        var url = chartUrl + GRI.Util.convert_params(params, chartUrl)+"&rnd="+(+new Date());
        
        MTA.Data.loadBasic(url, function(ret){
            
            var data = {}, min = 99999999, max = 0;
            var map_color = {
                6: '#629FE0',
                5: '#71A8E3',
                4: '#80B1E6',
                3: '#8FBAE9',
                2: '#9EC3EC',
                1: '#ADCDEF',
                0: '#ADCDEF'
            };
            
            for(var o in ret){
                min > ret[o].val*1 && (min = ret[o].val);
                max < ret[o].val*1 && (max = ret[o].val);
            }
            min = 99999999 == min ? 0 : min;
            //计算步长
            var step = (max-min)/5;
            step = 0 == step ? 1 : step;
            //置换最大最小值
            var maxStr = number_format(max,0,'.',',');
            var minStr = String(min).length<3 ? 1 : String(min).length-1;
            minStr = Math.floor(min/Math.pow(10, minStr))*Math.pow(10, minStr);
            minStr = number_format(minStr,0,'.',',');
            $('#number_max').text(maxStr);
            $('#number_min').text(minStr);
            
            for(var o in ret){
                //赋值
                data[ret[o].en] = {value: ret[o].val, color : map_color[Math.ceil(ret[o].val/step)]};
            }

            $('#chartContainer4provice').griMap({
                width : 400,
                height : 300,
                data: data,
                hoverCallback: function(obj, event){
                    var evt = window.event || event;

                    var x = (evt.pageX || evt.clientX+document.body.scrollLeft+document.documentElement.scrollLeft) + 10;
                    var y = (evt.pageY || evt.clientY+document.body.scrollTop+document.documentElement.scrollTop) + 10;

                    var tool_tips = function(){
                        $('#_tool_tips').length>0 && $('#_tool_tips').remove();
                        var tipsConGRIiner=['<div id="_tool_tips" class="tips-small"> ',
                                                 '<p>'+obj.name+':'+ (obj.value||0)+'</p>',
                                           '</div>'];
                        $('body').append(tipsConGRIiner.join(''));
                        $('#_tool_tips').show().css({top:y, left:x});
                    }();
                }
            });

            $('#chartContainer4provice').mouseout(function(){
                $('#_tool_tips').length>0 && $('#_tool_tips').remove();
            });
            $('#chart4provice').show();
        });

    }
    
    function buildProvinceTableData(){
        var url = '/wechat/ctr_article_detail/get_province_table_data';
        MTA.Data.loadPageTable(url, 'table_list_province', function(){
            $('.gri_percent').length>0 && $('.gri_percent').css('width', '70%');
            $('.gri_pg .show').hide();
            $('#table_list_province th:first').css('text-align','left');
            $('#table_list_province th:gt(0)').css('text-align','right');
            $('#chart4provice').show();
        });
    }

    function buildDeviceData() {
        /**
         * 图的cgi地址
         */
        var chartUrl = '/wechat/ctr_article_detail/get_device_data';
        var chartOpts = {
            chartType : 'pie',
            theme: 'wechat',
            enableLegend:false,
            chartOptions : {
                chart:{
                    height: 500
                },
                legend: {
                    enabled : false
                },
                plotOptions: {
                    pie: {
                        size: 240,
                        innerSize: 0,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                        }
                    }
                }
            }
        };

        /**
         * 加载表的数据
         */
        MTA.Data.loadChart(chartUrl, chartOpts, 'chartContainer4device');

        chartUrl += '?grid=1';
        MTA.Data.loadPageTable(chartUrl, 'table_list_device', function(){
            $('.gri_Percent').length>0 && $('.gri_Percent').css('width', '70%');
            $('.gri_pg .show').hide();
            $('#table_list_device th:first').css('text-align','left');
            $('#table_list_device th:gt(0)').css('text-align','right');
            $('#table_list_device th:last').html('');
        });
        $('#chart4device').show();
    }


    //表格数据
    function buildTableData(){
        var date =$("#detail_title .time").text().substr(0, 10);
        var tableUrl = '/wechat/ctr_article_detail/get_table_data'+"?chart_start_date="+date+"&chart_date_len=7";
        MTA.Data.loadPageTable(tableUrl, 'table_list',function(){
            $('#table_list_table th').css('text-align','center');
            hightLightTable();
            //TODO：v3样式代码
            if ('wechat' == 'wechat') {
                $('#table_list_table th:first').css('border-left','none');
                $('#table_list_table th[name="AddToFavUser"]').css('border-right','none');
            }
        }); 
    }

    function buildTrendChart()
    {
        var date =$("#detail_title .time").text().substr(0, 10);
        MTA.Data.loadChart(MTA.Page.Variable.tab_url+"&chart_start_date="+date+"&chart_date_len=7", {theme: 'wechat'}, 'chartContainer4trend');
        $('#chart4trend').show();
    }

    //导出CSV
    function export_excel(){
        MTA.Data.exportTable('/wechat/ctr_article_detail/get_table_data');
    }

    //绑定查询结果，表格与图形数据绑定
    
    function buildDetailChart(){
        buildFunnelChart();
        buildDetailMap();
        buildTableData();
    }

    function buildDetailMap(){
        var tabId = $('#div_item_tabs a').index($('#div_item_tabs a.current')) + 1;
        MTA.Util.setParams('tab_id',tabId);
        $(".detailMap").css("visibility","invisible");
        buildTrendChart();
        buildChart();
        buildProvinceData();
        buildProvinceTableData();
        buildDeviceData();
        hightLightTable();
    }
</script>    </div> <!-- end of main -->
</div> <!-- end of content 
<!-- 腾讯分析脚本 -->
<script type="text/javascript" src="<?=base_url()?>weixin/tuwenfenxi_files/stats" charset="UTF-8"></script>
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


<div id="calendar_1413617997186" class="ta_calendar ta_calendar2 cf" style="z-index: 9999; display: none;"><div class="ta_calendar_cont cf" id="dateRangePicker_1413617997186"><table class="dateRangeDateTable"><caption>2014年9月</caption><thead><tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr></thead><tbody><tr><td colspan="7" style="text-align: center;"><a href="javascript:void(0);" id="dateRangePreMonth_1413617997186"><i class="i_pre"></i></a></td></tr><tr><td class="ta_dateRangeGray">31</td><td id="calendar_1413617997186_2014-9-1" style="cursor: pointer;">1</td><td id="calendar_1413617997186_2014-9-2" style="cursor: pointer;">2</td><td id="calendar_1413617997186_2014-9-3" style="cursor: pointer;">3</td><td id="calendar_1413617997186_2014-9-4" style="cursor: pointer;">4</td><td id="calendar_1413617997186_2014-9-5" style="cursor: pointer;">5</td><td id="calendar_1413617997186_2014-9-6" style="cursor: pointer;">6</td></tr><tr><td id="calendar_1413617997186_2014-9-7" style="cursor: pointer;">7</td><td id="calendar_1413617997186_2014-9-8" style="cursor: pointer;">8</td><td id="calendar_1413617997186_2014-9-9" style="cursor: pointer;">9</td><td id="calendar_1413617997186_2014-9-10" style="cursor: pointer;">10</td><td id="calendar_1413617997186_2014-9-11" style="cursor: pointer;">11</td><td id="calendar_1413617997186_2014-9-12" style="cursor: pointer;">12</td><td id="calendar_1413617997186_2014-9-13" style="cursor: pointer;">13</td></tr><tr><td id="calendar_1413617997186_2014-9-14" style="cursor: pointer;">14</td><td id="calendar_1413617997186_2014-9-15" style="cursor: pointer;">15</td><td id="calendar_1413617997186_2014-9-16" style="cursor: pointer;">16</td><td id="calendar_1413617997186_2014-9-17" style="cursor: pointer;">17</td><td id="calendar_1413617997186_2014-9-18" class="first" style="cursor: pointer;">18</td><td id="calendar_1413617997186_2014-9-19" class="ta_dateRangeSelected" style="cursor: pointer;">19</td><td id="calendar_1413617997186_2014-9-20" class="ta_dateRangeSelected" style="cursor: pointer;">20</td></tr><tr><td id="calendar_1413617997186_2014-9-21" class="ta_dateRangeSelected" style="cursor: pointer;">21</td><td id="calendar_1413617997186_2014-9-22" class="ta_dateRangeSelected" style="cursor: pointer;">22</td><td id="calendar_1413617997186_2014-9-23" class="ta_dateRangeSelected" style="cursor: pointer;">23</td><td id="calendar_1413617997186_2014-9-24" class="ta_dateRangeSelected" style="cursor: pointer;">24</td><td id="calendar_1413617997186_2014-9-25" class="ta_dateRangeSelected" style="cursor: pointer;">25</td><td id="calendar_1413617997186_2014-9-26" class="ta_dateRangeSelected" style="cursor: pointer;">26</td><td id="calendar_1413617997186_2014-9-27" class="ta_dateRangeSelected" style="cursor: pointer;">27</td></tr><tr><td id="calendar_1413617997186_2014-9-28" class="ta_dateRangeSelected" style="cursor: pointer;">28</td><td id="calendar_1413617997186_2014-9-29" class="ta_dateRangeSelected" style="cursor: pointer;">29</td><td id="calendar_1413617997186_2014-9-30" class="ta_dateRangeSelected" style="cursor: pointer;">30</td><td class="ta_dateRangeGray">1</td><td class="ta_dateRangeGray">2</td><td class="ta_dateRangeGray">3</td><td class="ta_dateRangeGray">4</td></tr></tbody></table><table class="dateRangeDateTable"><caption>2014年10月</caption><thead><tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr></thead><tbody><tr><td colspan="7" style="text-align: center;"><a href="javascript:void(0);" id="dateRangeNextMonth_1413617997186"><i class="i_next"></i></a></td></tr><tr><td class="ta_dateRangeGray">28</td><td class="ta_dateRangeGray">29</td><td class="ta_dateRangeGray">30</td><td id="calendar_1413617997186_2014-10-1" class="ta_dateRangeSelected" style="cursor: pointer;">1</td><td id="calendar_1413617997186_2014-10-2" class="ta_dateRangeSelected" style="cursor: pointer;">2</td><td id="calendar_1413617997186_2014-10-3" class="ta_dateRangeSelected" style="cursor: pointer;">3</td><td id="calendar_1413617997186_2014-10-4" class="ta_dateRangeSelected" style="cursor: pointer;">4</td></tr><tr><td id="calendar_1413617997186_2014-10-5" class="ta_dateRangeSelected" style="cursor: pointer;">5</td><td id="calendar_1413617997186_2014-10-6" class="ta_dateRangeSelected" style="cursor: pointer;">6</td><td id="calendar_1413617997186_2014-10-7" class="ta_dateRangeSelected" style="cursor: pointer;">7</td><td id="calendar_1413617997186_2014-10-8" class="ta_dateRangeSelected" style="cursor: pointer;">8</td><td id="calendar_1413617997186_2014-10-9" class="ta_dateRangeSelected" style="cursor: pointer;">9</td><td id="calendar_1413617997186_2014-10-10" class="ta_dateRangeSelected" style="cursor: pointer;">10</td><td id="calendar_1413617997186_2014-10-11" class="ta_dateRangeSelected" style="cursor: pointer;">11</td></tr><tr><td id="calendar_1413617997186_2014-10-12" class="ta_dateRangeSelected" style="cursor: pointer;">12</td><td id="calendar_1413617997186_2014-10-13" class="ta_dateRangeSelected" style="cursor: pointer;">13</td><td id="calendar_1413617997186_2014-10-14" class="ta_dateRangeSelected" style="cursor: pointer;">14</td><td id="calendar_1413617997186_2014-10-15" class="ta_dateRangeSelected" style="cursor: pointer;">15</td><td id="calendar_1413617997186_2014-10-16" class="ta_dateRangeSelected" style="cursor: pointer;">16</td><td id="calendar_1413617997186_2014-10-17" class="last" style="cursor: pointer;">17</td><td class="ta_dateRangeGray">18</td></tr><tr><td class="ta_dateRangeGray">19</td><td class="ta_dateRangeGray">20</td><td class="ta_dateRangeGray">21</td><td class="ta_dateRangeGray">22</td><td class="ta_dateRangeGray">23</td><td class="ta_dateRangeGray">24</td><td class="ta_dateRangeGray">25</td></tr><tr><td class="ta_dateRangeGray">26</td><td class="ta_dateRangeGray">27</td><td class="ta_dateRangeGray">28</td><td class="ta_dateRangeGray">29</td><td class="ta_dateRangeGray">30</td><td class="ta_dateRangeGray">31</td><td class="ta_dateRangeGray">1</td></tr></tbody></table></div><div class="ta_calendar_footer cf"><div class="frm_msg"><div id="dateRangeDiv_1413617997186"><input type="text" class="ta_ipt_text_s ta_dateRangeSelected" name="startDate_1413617997186" id="startDate_1413617997186" value="2014-09-18" readonly="" style="background-repeat: repeat repeat;"><span class="joinLine"> - </span><input type="text" class="ta_ipt_text_s" name="endDate_1413617997186" id="endDate_1413617997186" value="2014-10-17" readonly=""><br></div><div id="dateRangeCompareDiv_1413617997186" style="display: none;"><input type="text" class="ta_ipt_text_s" name="startCompareDate_1413617997186" id="startCompareDate_1413617997186" value="" readonly="" disabled="disabled"><span class="joinLine"> - </span><input type="text" class="ta_ipt_text_s" name="endCompareDate_1413617997186" id="endCompareDate_1413617997186" value="" readonly="" disabled="disabled"></div></div><div class="frm_btn"><input class="ta_btn ta_btn_primary" type="button" name="submit_1413617997186" id="submit_1413617997186" value="确定"><input class="ta_btn" type="button" id="closeBtn_1413617997186" value="取消"></div></div></div></body></html>