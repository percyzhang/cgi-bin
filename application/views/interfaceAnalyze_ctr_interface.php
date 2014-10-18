<!DOCTYPE html>
<!-- saved from url=(0320)https://mta.qq.com/mta/wechat/ctr_interface?appid=wxa3ab354bb9cee3e9&pluginid=luopan&token=ll1D85fGDCTr4AAxC_RrFIsraM1eajMksOjZN_eXodo0JtMdEhtveSD0S5k-Hh0TLr_AaJFD9wx7mMBgseo8Ag_cCkT5oT3mMHrNr14xXIx7LbzDDi48wKVzADgQFtx6&devtype=3&jsurl=https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe1ec5f7.js&version=2 -->
<html class="mta_wechat"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <meta name="Description" content="">
    <meta name="Keywords" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>接口分析-开发支持</title>
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
<!--<script type="text/javascript">

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
    var verify_params = {"appid":"wxa3ab354bb9cee3e9","pluginid":"luopan","token":"ll1D85fGDCTr4AAxC_RrFIsraM1eajMksOjZN_eXodo0JtMdEhtveSD0S5k-Hh0TLr_AaJFD9wx7mMBgseo8Ag_cCkT5oT3mMHrNr14xXIx7LbzDDi48wKVzADgQFtx6","from":"","devtype":"3"};
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
        var data = {"1":{"th":[2],"td":[2]},"2":{"th":[4],"td":[4]},"3":{"th":[6],"td":[6]},"4":{"th":[7],"td":[7]}};
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
</script>-->
<script src="<?=base_url()?>weixin/iframe1ec5f7.js"></script><iframe style="display: none; " src="about:blank"></iframe>
<!-- 站点列表的js库:end -->
<div id="content">
    <div id="sidebar">
        <div id="sub_nav"><div class="mod_sidemenu"><h3 class="title" id="parent_menu_1"><a href="javascript:;"><i class="icon_user"></i>用户分析<i id="i_menu_1" class="icon_menu"></i></a></h3><div id="child_menu_1" style="position:relative;zoom:1"><ul class="content"><li><a id="menu_101" href="https://mta.qq.com/mta/wechat/ctr_user_summary">用户增长</a></li></ul><ul class="content"><li><a id="menu_103" href="https://mta.qq.com/mta/wechat/ctr_user_attr">用户属性</a></li></ul></div></div><div class="mod_sidemenu"><h3 class="title" id="parent_menu_2"><a href="javascript:;"><i class="icon_app"></i>图文分析<i id="i_menu_2" class="icon_menu"></i></a></h3><div id="child_menu_2" style="position:relative;zoom:1"><ul class="content"><li><a id="menu_201" href="https://mta.qq.com/mta/wechat/ctr_article_detail">图文群发</a></li></ul><ul class="content"><li><a id="menu_202" href="https://mta.qq.com/mta/wechat/ctr_article_analyse">图文统计</a></li></ul></div></div><div class="mod_sidemenu"><h3 class="title" id="parent_menu_3"><a href="javascript:;"><i class="icon_run"></i>消息分析<i id="i_menu_3" class="icon_menu"></i></a></h3><div id="child_menu_3" style="position:relative;zoom:1"><ul class="content"><li><a id="menu_301" href="https://mta.qq.com/mta/wechat/ctr_message">消息发送</a></li></ul><ul class="content"><li><a id="menu_302" href="https://mta.qq.com/mta/wechat/ctr_keyword">消息关键词</a></li></ul></div></div><div class="mod_sidemenu"><h3 class="title" id="parent_menu_4"><a href="javascript:;"><i class="icon_develop"></i>开发支持<i id="i_menu_4" class="icon_menu"></i></a></h3><div id="child_menu_4" style="position:relative;zoom:1"><ul class="content"><li class="current"><a id="menu_401" href="https://mta.qq.com/mta/wechat/ctr_interface">接口分析</a></li></ul></div></div><div class="mod_sidemenu"><h3 class="title" id="parent_menu_5"><a href="javascript:;"><i class="icon_netspeed"></i>设备功能<i id="i_menu_5" class="icon_menu"></i></a></h3><div id="child_menu_5" style="position:relative;zoom:1"><ul class="content"><li><a id="menu_501" href="https://mta.qq.com/mta/wechat/ctr_device_summary">设备功能</a></li></ul></div></div></div>
        <div id="div_sidemenu_other" class="mod_sidemenu_other" style="display:none">
            <ul class="content">
                <li class="sdk_down"><a href="https://mta.qq.com/mta/other/ctr_sdk_manage/download" target="_blank"><i class="icon_down"></i>SDK下载</a></li>
                <li class="my_app">
                                            <a href="javascript:void(0);" onclick="GRI.Util.hotClick(&#39;0_1_wxa3ab354bb9cee3e9_link.leftbar.to.myapp&#39;, &#39;https://mta.qq.com/mta/overview/ctr_all_app&#39;)">我的应用</a>
                                    </li>
                <li class="help_center"><a onclick="GRI.Util.hotClick(&#39;0_1_wxa3ab354bb9cee3e9_link.header.to.home&#39;, &#39;https://mta.qq.com/mta&#39;);" href="https://mta.qq.com/mta/wechat/ctr_interface?appid=wxa3ab354bb9cee3e9&pluginid=luopan&token=ll1D85fGDCTr4AAxC_RrFIsraM1eajMksOjZN_eXodo0JtMdEhtveSD0S5k-Hh0TLr_AaJFD9wx7mMBgseo8Ag_cCkT5oT3mMHrNr14xXIx7LbzDDi48wKVzADgQFtx6&devtype=3&jsurl=https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe1ec5f7.js&version=2#">帮助中心</a></li>
            </ul>
        </div>
    </div>
    <div id="main">
        <div class="mod_header">
            <div class="title">
                <span class="more"><a href="https://mta.qq.com/mta/wechat/ctr_interface?appid=wxa3ab354bb9cee3e9&pluginid=luopan&token=ll1D85fGDCTr4AAxC_RrFIsraM1eajMksOjZN_eXodo0JtMdEhtveSD0S5k-Hh0TLr_AaJFD9wx7mMBgseo8Ag_cCkT5oT3mMHrNr14xXIx7LbzDDi48wKVzADgQFtx6&devtype=3&jsurl=https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe1ec5f7.js&version=2#" class="viewDataDetail" id="lnk_arg" style="display: none"></a></span>
                <h2 id="h_title">接口分析</h2>
                <span id="wrap_items_info_help" class="mod_help" style="display: none; ">
                    <a id="icon_items_info_help" href="javascript:;">?</a>
                    <span class="help_content">
                    指标说明
                    </span>
                </span>
                <span id="report_list" class="ui_menu">
                    <button class="button button_link">日报
                        <i class="icon_menu"></i>
                    </button>
                    <ul class="ui_menu_list" role="menu" aria-labelledby="dropdownMenu" style="display:none;">
                        <li class="first">
                            <a class="current" href="javascript:void(0);" value="day" tadindex="-1">日报</a>
                        </li>
                        <li class="last">
                            <a href="javascript:void(0);" value="hour" tadindex="-1">小时报</a>
                        </li>
                    </ul>
                </span>
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
                    <dl class="help-change-list" id="pop_items_info"><dt>调用次数</dt><dd>接口被调用总次数</dd><dt>失败率</dt><dd>调用失败的次数/接口被调用总次数</dd><dt>平均耗时</dt><dd>接口调用的总时长/接口被调用成功总次数</dd><dt>最大耗时</dt><dd>接口调用耗时的最大值</dd><dt>日、周、月</dt><dd>分别计算昨日数据相比1天、7天、30天前的变化情况</dd><div style="margin-top:6px;color: #000;"><b>数据由专业移动应用分析工具<br><a href="http://mta.qq.com/" target="_blank">腾讯云分析</a>&nbsp;合作提供</b></div></dl>
                    <div class="help-change-footer" id="footer_items_info"><span class="wechat_data_range">数据从2013年7月1日开始统计。</span>由于服务器缓存，以及指标计算方法和统计时间的差异，数据可能出现微小误差，一般在1%以内。</div>
                </div>-->
            </div>
            <!---- 右上角指标说明浮层 end -->
            <!-- Menu 对象初始化 : start-->
            <script type="text/javascript">
                //数据初始化
                var main_menu = {"1":{"m_id":1,"m_name":"\u7528\u6237\u5206\u6790","m_icon_css":"icon_user","m_url":"\/wechat\/ctr_active_user","m_type":1,"m_display":1},"2":{"m_id":2,"m_name":"\u56fe\u6587\u5206\u6790","m_icon_css":"icon_app","m_url":"\/wechat\/ctr_article_analyse","m_type":1,"m_display":1},"3":{"m_id":3,"m_name":"\u6d88\u606f\u5206\u6790","m_icon_css":"icon_run","m_url":"\/wechat\/ctr_message","m_type":1,"m_display":1},"4":{"m_id":4,"m_name":"\u5f00\u53d1\u652f\u6301","m_icon_css":"icon_develop","m_url":"\/wechat\/ctr_interface","m_type":1,"m_display":1},"5":{"m_id":5,"m_name":"\u8bbe\u5907\u529f\u80fd","m_icon_css":"icon_netspeed","m_url":"","m_type":1,"m_display":1}};
                var sub_menu = {"101":{"m_id":101,"p_id":1,"m_name":"\u7528\u6237\u589e\u957f","m_tips":"\u7528\u6237\u589e\u957f","m_url":"\/wechat\/ctr_user_summary","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":1,"m_type":2,"m_display":1},"103":{"m_id":103,"p_id":1,"m_name":"\u7528\u6237\u5c5e\u6027","m_tips":"\u7528\u6237\u5c5e\u6027","m_url":"\/wechat\/ctr_user_attr","m_default_range":1,"m_has_realtime":0,"m_has_range":0,"m_need_compare":0,"m_type":2,"m_display":1},"201":{"m_id":201,"p_id":2,"m_name":"\u56fe\u6587\u7fa4\u53d1","m_tips":"\u56fe\u6587\u7fa4\u53d1","m_url":"\/wechat\/ctr_article_detail","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":1,"m_type":2,"m_display":1},"202":{"m_id":202,"p_id":2,"m_name":"\u56fe\u6587\u7edf\u8ba1","m_tips":"\u56fe\u6587\u7edf\u8ba1","m_url":"\/wechat\/ctr_article_analyse","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":1,"m_type":2,"m_display":1},"301":{"m_id":301,"p_id":3,"m_name":"\u6d88\u606f\u53d1\u9001","m_tips":"\u6d88\u606f\u53d1\u9001tips\uff0c\u5f85\u4ea7\u54c1\u786e\u5b9a\u540e\u6269\u5c55\u4e4b\u7528","m_url":"\/wechat\/ctr_message","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":1,"m_type":2,"m_display":1},"302":{"m_id":302,"p_id":3,"m_name":"\u6d88\u606f\u5173\u952e\u8bcd","m_tips":"\u7528\u6237\u53d1\u9001\u6587\u5b57\u4e2d\u6240\u5305\u542b\u7684\u7279\u6b8a\u540d\u8bcd","m_url":"\/wechat\/ctr_keyword","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":0,"m_type":2,"m_display":1},"401":{"m_id":401,"p_id":4,"m_name":"\u63a5\u53e3\u5206\u6790","m_tips":"\u63a5\u53e3\u5206\u6790","m_url":"\/wechat\/ctr_interface","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":1,"m_type":2,"m_display":1},"501":{"m_id":501,"p_id":5,"m_name":"\u8bbe\u5907\u529f\u80fd","m_tips":"\u8bbe\u5907\u529f\u80fd","m_url":"\/wechat\/ctr_device_summary","m_default_range":30,"m_has_realtime":0,"m_has_range":0,"m_need_compare":0,"m_type":2,"m_display":1}};
                var current_action = '/wechat/ctr_interface';
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
        </div>
        <div style="margin:20px 30px 0;">
            <div class="ui_tips">
                <i class="icon_info"></i>接口分析仅统计了基础消息接口，暂未统计其他高级接口，请知悉。
            </div>
        </div><!--end of mod_header-->
        <div class="mod_basic">
    <div class="title">
        <h3>昨日关键指标</h3>
    </div>
    <div class="content">
        <!-- 趋势格控件 开始 -->
        <table class="ui_trendgrid ui_trendgrid_4" id="key_index"><tbody><tr><td class="first"><div class="ui_trendgrid_item"><div class="ui_trendgrid_chart" id="key_index_chart_CallbackCount"></div><dl><dt><b>调用次数</b></dt><dd class="ui_trendgrid_number"><strong>57</strong><em class="ui_trendgrid_unit"></em></dd><dd>日<i class="icon_down" title="下降"></i>32.9%</dd><dd>周<i class="icon_down" title="下降"></i>33.7%</dd><dd>月<i class="icon_down" title="下降"></i>26%</dd></dl></div></td><td><div class="ui_trendgrid_item"><div class="ui_trendgrid_chart" id="key_index_chart_FailPercent"></div><dl><dt><b>失败率</b></dt><dd class="ui_trendgrid_number"><strong>0</strong><em class="ui_trendgrid_unit"></em></dd><dd>日&nbsp;&nbsp;&nbsp;-- </dd><dd>周&nbsp;&nbsp;&nbsp;-- </dd><dd>月&nbsp;&nbsp;&nbsp;-- </dd></dl></div></td><td><div class="ui_trendgrid_item"><div class="ui_trendgrid_chart" id="key_index_chart_AverageTimeCost"></div><dl><dt><b>平均耗时(毫秒)</b></dt><dd class="ui_trendgrid_number"><strong>67.93</strong><em class="ui_trendgrid_unit"></em></dd><dd>日<i class="icon_down" title="下降"></i>23%</dd><dd>周<i class="icon_down" title="下降"></i>16.4%</dd><dd>月<i class="icon_down" title="下降"></i>64.4%</dd></dl></div></td><td class="last"><div class="ui_trendgrid_item"><div class="ui_trendgrid_chart" id="key_index_chart_MaxTimeCost"></div><dl><dt><b>最大耗时(毫秒)</b></dt><dd class="ui_trendgrid_number"><strong>143</strong><em class="ui_trendgrid_unit"></em></dd><dd>日<i class="icon_down" title="下降"></i>80.5%</dd><dd>周<i class="icon_down" title="下降"></i>60.8%</dd><dd>月<i class="icon_down" title="下降"></i>85.1%</dd></dl></div></td></tr></tbody></table>
        <!-- 趋势格控件 结束 -->
    </div>
</div>
<div class="mod_basic">
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
                            <a class="first current" id="tab_1" href="javascript:;">调用次数</a>
                                <a id="tab_2" href="javascript:;">失败率</a>
                                <a id="tab_3" href="javascript:;">平均耗时</a>
                                <a class="last" id="tab_4" href="javascript:;">最大耗时</a>
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
                                                                <div class="date-section cf" id="short_opt" style="">
                                     <ul id="toolbar" class="select cf">
                                         <li class=""><a id="aRecent7Days" href="javascript:void(0);">7天</a></li>
                                         <li class=""><a id="aRecent14Days" href="javascript:void(0);">14天</a></li>
                                         <li class="active"><a id="aRecent30Days" href="javascript:void(0);">30天</a></li>
                                    </ul>
                                </div>
                                							<div class="date" id="div_date">
                                 <span class="date_title" id="date">2014-08-29 至 2014-09-27</span>
                                 <a class="opt_sel" id="input_trigger" href="https://mta.qq.com/mta/wechat/ctr_interface?appid=wxa3ab354bb9cee3e9&pluginid=luopan&token=ll1D85fGDCTr4AAxC_RrFIsraM1eajMksOjZN_eXodo0JtMdEhtveSD0S5k-Hh0TLr_AaJFD9wx7mMBgseo8Ag_cCkT5oT3mMHrNr14xXIx7LbzDDi48wKVzADgQFtx6&devtype=3&jsurl=https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe1ec5f7.js&version=2#">
                            	     <i class="i_orderd"></i>
                                 </a>
                            </div><label class="contrast" for="needCompare_1411913834804" style="display: none; "><input type="checkbox" class="pc" name="needCompare_1411913834804" id="needCompare_1411913834804" value="1" style="display: none; ">对比</label><div class="ta_date" id="div_compare_date" style="display: none; ">	<span name="dateCompare" id="dateCompare" class="date_title" style="display: none; "></span>	<a class="opt_sel" id="compare_trigger" href="https://mta.qq.com/mta/wechat/ctr_interface?appid=wxa3ab354bb9cee3e9&pluginid=luopan&token=ll1D85fGDCTr4AAxC_RrFIsraM1eajMksOjZN_eXodo0JtMdEhtveSD0S5k-Hh0TLr_AaJFD9wx7mMBgseo8Ag_cCkT5oT3mMHrNr14xXIx7LbzDDi48wKVzADgQFtx6&devtype=3&jsurl=https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe1ec5f7.js&version=2#">		<i class="i_orderd"></i>	</a></div>
                                                        <div id="datePicker"><input type="hidden" id="startDate" name="startDate" value="2014-08-29"><input type="hidden" id="endDate" name="endDate" value="2014-09-27"><input type="checkbox" id="needCompare" name="needCompare" value="0" style="display:none;"><input type="hidden" id="startCompareDate" name="startCompareDate" value=""><input type="hidden" id="endCompareDate" name="endCompareDate" value=""></div>
                        </div>
                        <!--==时间范围end==-->
                    </div>
                </div>
                <div class="ui_filter_content" style="display:none;">
                    <strong class="lable" id="source_text">来源：</strong>
                    <span id="div_source">
                    </span>
                </div>
            </div>
        </div>
    </div>
    <!--标题栏目:end-->

    <div class="content">
        <h4 class="sub_title">趋势图</h4>
        <div class="sub_content">
            <!--图控件的模版，这里目前内容较少，后面方便扩展，直接在这里修改-->
<div class="time-chart" id="chartContainer" style="height: 300px; " data-highcharts-chart="0"><div class="highcharts-container" id="highcharts-0" style="position: relative; overflow: hidden; width: 887px; height: 300px; text-align: left; line-height: normal; z-index: 0; "><svg version="1.1" style="font-family:Tahoma, &quot;microsoft yahei&quot;, 微软雅黑, 宋体;;font-size:12px;" xmlns="http://www.w3.org/2000/svg" width="887" height="300"><desc>Created with Highcharts 4.0.3</desc><defs><clippath id="highcharts-1"><rect x="0" y="0" width="834" height="210"></rect></clippath></defs><rect x="0" y="0" width="887" height="300" strokeWidth="0" fill="#fff" class=" highcharts-background"></rect><path fill="rgba(68,181,73,0.25)" d="M 0 0"></path><g class="highcharts-grid" zIndex="1"></g><g class="highcharts-grid" zIndex="1"><path fill="none" d="M 43 9.5 L 877 9.5" stroke="#F2F3F4" stroke-width="1" zIndex="1" opacity="1"></path><path fill="none" d="M 43 80.5 L 877 80.5" stroke="#F2F3F4" stroke-width="1" zIndex="1" opacity="1"></path><path fill="none" d="M 43 151.5 L 877 151.5" stroke="#F2F3F4" stroke-width="1" zIndex="1" opacity="1"></path><path fill="none" d="M 43 221.5 L 877 221.5" stroke="#F2F3F4" stroke-width="1" zIndex="1" opacity="1"></path></g><g class="highcharts-axis" zIndex="2"><path fill="none" d="M 84.5 221 L 84.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 112.5 221 L 112.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 139.5 221 L 139.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 167.5 221 L 167.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 195.5 221 L 195.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 223.5 221 L 223.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 251.5 221 L 251.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 278.5 221 L 278.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 306.5 221 L 306.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 334.5 221 L 334.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 362.5 221 L 362.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 390.5 221 L 390.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 417.5 221 L 417.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 445.5 221 L 445.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 473.5 221 L 473.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 501.5 221 L 501.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 529.5 221 L 529.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 556.5 221 L 556.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 584.5 221 L 584.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 612.5 221 L 612.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 640.5 221 L 640.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 668.5 221 L 668.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 695.5 221 L 695.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 723.5 221 L 723.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 751.5 221 L 751.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 779.5 221 L 779.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 807.5 221 L 807.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 834.5 221 L 834.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 862.5 221 L 862.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 56.5 221 L 56.5 231" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 43 221 L 877 221" stroke="#C6C6C6" stroke-width="2" zIndex="7" visibility="visible"></path></g><g class="highcharts-axis" zIndex="2"></g><path fill="none" d="M 779.5 10 L 779.5 221" stroke="#7ac943" stroke-width="1" zIndex="2" stroke-dasharray="1,1" visibility="hidden"></path><g class="highcharts-series-group" zIndex="3"><g class="highcharts-series" visibility="visible" zIndex="0.1" transform="translate(43,10) scale(1 1)" clip-path="url(#highcharts-1)"><path fill="rgba(135, 179, 212, 0.05)" d="M 13.9 165.28333333333333 L 41.7 155.43666666666667 L 69.5 145.59 L 97.30000000000001 125.89666666666666 L 125.10000000000001 118.86333333333333 L 152.9 176.53666666666666 L 180.70000000000002 151.92 L 208.5 177.94333333333333 L 236.3 170.91 L 264.1 165.98666666666668 L 291.9 178.64666666666668 L 319.7 142.77666666666664 L 347.5 135.04 L 375.3 149.10666666666665 L 403.09999999999997 132.22666666666666 L 430.9 116.05 L 458.7 180.75666666666666 L 486.5 60.48666666666665 L 514.3000000000001 123.08333333333333 L 542.1 132.93 L 569.9 73.14666666666665 L 597.7 85.10333333333332 L 625.5 150.51333333333332 L 653.3 177.24 L 681.1 96.35666666666665 L 708.9 90.02666666666666 L 736.7 100.57666666666667 L 764.5 71.03666666666666 L 792.3 151.21666666666667 L 820.1 170.91 L 820.1 211 L 13.9 211" zIndex="0"></path><path fill="none" d="M 13.9 165.28333333333333 L 41.7 155.43666666666667 L 69.5 145.59 L 97.30000000000001 125.89666666666666 L 125.10000000000001 118.86333333333333 L 152.9 176.53666666666666 L 180.70000000000002 151.92 L 208.5 177.94333333333333 L 236.3 170.91 L 264.1 165.98666666666668 L 291.9 178.64666666666668 L 319.7 142.77666666666664 L 347.5 135.04 L 375.3 149.10666666666665 L 403.09999999999997 132.22666666666666 L 430.9 116.05 L 458.7 180.75666666666666 L 486.5 60.48666666666665 L 514.3000000000001 123.08333333333333 L 542.1 132.93 L 569.9 73.14666666666665 L 597.7 85.10333333333332 L 625.5 150.51333333333332 L 653.3 177.24 L 681.1 96.35666666666665 L 708.9 90.02666666666666 L 736.7 100.57666666666667 L 764.5 71.03666666666666 L 792.3 151.21666666666667 L 820.1 170.91" stroke="#44B549" stroke-width="2" zIndex="1" stroke-linejoin="round" stroke-linecap="round"></path><path fill="none" d="M 3.9000000000000004 165.28333333333333 L 13.9 165.28333333333333 L 41.7 155.43666666666667 L 69.5 145.59 L 97.30000000000001 125.89666666666666 L 125.10000000000001 118.86333333333333 L 152.9 176.53666666666666 L 180.70000000000002 151.92 L 208.5 177.94333333333333 L 236.3 170.91 L 264.1 165.98666666666668 L 291.9 178.64666666666668 L 319.7 142.77666666666664 L 347.5 135.04 L 375.3 149.10666666666665 L 403.09999999999997 132.22666666666666 L 430.9 116.05 L 458.7 180.75666666666666 L 486.5 60.48666666666665 L 514.3000000000001 123.08333333333333 L 542.1 132.93 L 569.9 73.14666666666665 L 597.7 85.10333333333332 L 625.5 150.51333333333332 L 653.3 177.24 L 681.1 96.35666666666665 L 708.9 90.02666666666666 L 736.7 100.57666666666667 L 764.5 71.03666666666666 L 792.3 151.21666666666667 L 820.1 170.91 L 830.1 170.91" stroke-linejoin="round" visibility="visible" stroke="rgba(192,192,192,0.0001)" stroke-width="22" zIndex="2" class=" highcharts-tracker" style=""></path></g><g class="highcharts-markers highcharts-tracker" visibility="visible" zIndex="0.1" transform="translate(43,10) scale(1 1)" clip-path="none" style=""><path fill="#44B549" d="M 820.1 166.91 C 825.428 166.91 825.428 174.91 820.1 174.91 C 814.772 174.91 814.772 166.91 820.1 166.91 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 792.3 147.21666666666667 C 797.6279999999999 147.21666666666667 797.6279999999999 155.21666666666667 792.3 155.21666666666667 C 786.972 155.21666666666667 786.972 147.21666666666667 792.3 147.21666666666667 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 764.5 67.03666666666666 C 769.828 67.03666666666666 769.828 75.03666666666666 764.5 75.03666666666666 C 759.172 75.03666666666666 759.172 67.03666666666666 764.5 67.03666666666666 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 736.7 96.57666666666667 C 742.028 96.57666666666667 742.028 104.57666666666667 736.7 104.57666666666667 C 731.3720000000001 104.57666666666667 731.3720000000001 96.57666666666667 736.7 96.57666666666667 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 708 86.02666666666666 C 713.328 86.02666666666666 713.328 94.02666666666666 708 94.02666666666666 C 702.672 94.02666666666666 702.672 86.02666666666666 708 86.02666666666666 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 681 92.35666666666665 C 686.328 92.35666666666665 686.328 100.35666666666665 681 100.35666666666665 C 675.672 100.35666666666665 675.672 92.35666666666665 681 92.35666666666665 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 653 173.24 C 658.328 173.24 658.328 181.24 653 181.24 C 647.672 181.24 647.672 173.24 653 173.24 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 625 146.51333333333332 C 630.328 146.51333333333332 630.328 154.51333333333332 625 154.51333333333332 C 619.672 154.51333333333332 619.672 146.51333333333332 625 146.51333333333332 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 597 81.10333333333332 C 602.328 81.10333333333332 602.328 89.10333333333332 597 89.10333333333332 C 591.672 89.10333333333332 591.672 81.10333333333332 597 81.10333333333332 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 569 69.14666666666665 C 574.328 69.14666666666665 574.328 77.14666666666665 569 77.14666666666665 C 563.672 77.14666666666665 563.672 69.14666666666665 569 69.14666666666665 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 542 128.93 C 547.328 128.93 547.328 136.93 542 136.93 C 536.672 136.93 536.672 128.93 542 128.93 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 514 119.08333333333333 C 519.328 119.08333333333333 519.328 127.08333333333333 514 127.08333333333333 C 508.672 127.08333333333333 508.672 119.08333333333333 514 119.08333333333333 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 486 56.48666666666665 C 491.328 56.48666666666665 491.328 64.48666666666665 486 64.48666666666665 C 480.672 64.48666666666665 480.672 56.48666666666665 486 56.48666666666665 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 458 176.75666666666666 C 463.328 176.75666666666666 463.328 184.75666666666666 458 184.75666666666666 C 452.672 184.75666666666666 452.672 176.75666666666666 458 176.75666666666666 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 430 112.05 C 435.328 112.05 435.328 120.05 430 120.05 C 424.672 120.05 424.672 112.05 430 112.05 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 403 128.22666666666666 C 408.328 128.22666666666666 408.328 136.22666666666666 403 136.22666666666666 C 397.672 136.22666666666666 397.672 128.22666666666666 403 128.22666666666666 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 375 145.10666666666665 C 380.328 145.10666666666665 380.328 153.10666666666665 375 153.10666666666665 C 369.672 153.10666666666665 369.672 145.10666666666665 375 145.10666666666665 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 347 131.04 C 352.328 131.04 352.328 139.04 347 139.04 C 341.672 139.04 341.672 131.04 347 131.04 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 319 138.77666666666664 C 324.328 138.77666666666664 324.328 146.77666666666664 319 146.77666666666664 C 313.672 146.77666666666664 313.672 138.77666666666664 319 138.77666666666664 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 291 174.64666666666668 C 296.328 174.64666666666668 296.328 182.64666666666668 291 182.64666666666668 C 285.672 182.64666666666668 285.672 174.64666666666668 291 174.64666666666668 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 264 161.98666666666668 C 269.328 161.98666666666668 269.328 169.98666666666668 264 169.98666666666668 C 258.672 169.98666666666668 258.672 161.98666666666668 264 161.98666666666668 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 236 166.91 C 241.328 166.91 241.328 174.91 236 174.91 C 230.672 174.91 230.672 166.91 236 166.91 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 208 173.94333333333333 C 213.328 173.94333333333333 213.328 181.94333333333333 208 181.94333333333333 C 202.672 181.94333333333333 202.672 173.94333333333333 208 173.94333333333333 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 180 147.92 C 185.328 147.92 185.328 155.92 180 155.92 C 174.672 155.92 174.672 147.92 180 147.92 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 152 172.53666666666666 C 157.328 172.53666666666666 157.328 180.53666666666666 152 180.53666666666666 C 146.672 180.53666666666666 146.672 172.53666666666666 152 172.53666666666666 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 125 114.86333333333333 C 130.328 114.86333333333333 130.328 122.86333333333333 125 122.86333333333333 C 119.672 122.86333333333333 119.672 114.86333333333333 125 114.86333333333333 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 97 121.89666666666666 C 102.328 121.89666666666666 102.328 129.89666666666665 97 129.89666666666665 C 91.672 129.89666666666665 91.672 121.89666666666666 97 121.89666666666666 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 69 141.59 C 74.328 141.59 74.328 149.59 69 149.59 C 63.672 149.59 63.672 141.59 69 141.59 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 41 151.43666666666667 C 46.328 151.43666666666667 46.328 159.43666666666667 41 159.43666666666667 C 35.672 159.43666666666667 35.672 151.43666666666667 41 151.43666666666667 Z" stroke="#FFFFFF" stroke-width="1"></path><path fill="#44B549" d="M 13 161.28333333333333 C 18.328 161.28333333333333 18.328 169.28333333333333 13 169.28333333333333 C 7.672 169.28333333333333 7.672 161.28333333333333 13 161.28333333333333 Z" stroke="#FFFFFF" stroke-width="1"></path></g></g><g class="highcharts-legend" zIndex="7" transform="translate(401,262)"><g zIndex="1"><g><g class="highcharts-legend-item" zIndex="1" transform="translate(8,3)"><text x="21" style="color:#000000;font-size:14px;font-weight:normal;cursor:pointer;font-family:Microsoft YaHei;fill:#000000;" text-anchor="start" zIndex="2" y="17">调用次数</text><rect x="0" y="6" width="16" height="12" zIndex="3" fill="#44B549"></rect></g></g></g></g><g class="highcharts-axis-labels highcharts-xaxis-labels" zIndex="7"><text x="56.9" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="241" opacity="1">2014-08-29</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-08-30</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-08-31</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-09-01</text><text x="168.10000000000002" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="241" opacity="1">2014-09-02</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-09-03</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-09-04</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-09-05</text><text x="279.3" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="241" opacity="1">2014-09-06</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-09-07</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-09-08</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-09-09</text><text x="390.5" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="241" opacity="1">2014-09-10</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-09-11</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-09-12</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-09-13</text><text x="501.7" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="241" opacity="1">2014-09-14</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-09-15</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-09-16</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-09-17</text><text x="612.9" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="241" opacity="1">2014-09-18</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-09-19</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-09-20</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-09-21</text><text x="724.1" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="241" opacity="1">2014-09-22</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-09-23</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-09-24</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-09-25</text><text x="835.3" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="241" opacity="1">2014-09-26</text><text x="0" text-anchor="middle" style="color:#8D8D8D;cursor:default;font-size:11px;fill:#8D8D8D;" y="-9999">2014-09-27</text></g><g class="highcharts-axis-labels highcharts-yaxis-labels" zIndex="7"><text x="0" text-anchor="end" style="width:273px;color:#8D8D8D;cursor:default;font-size:11px;font-family:Microsoft yahei;fill:#8D8D8D;" y="-9999"></text><text x="28" text-anchor="end" style="width:273px;color:#8D8D8D;cursor:default;font-size:11px;font-family:Microsoft yahei;fill:#8D8D8D;" y="154.66666666666666" opacity="1">100</text><text x="28" text-anchor="end" style="width:273px;color:#8D8D8D;cursor:default;font-size:11px;font-family:Microsoft yahei;fill:#8D8D8D;" y="84.33333333333331" opacity="1">200</text><text x="28" text-anchor="end" style="width:273px;color:#8D8D8D;cursor:default;font-size:11px;font-family:Microsoft yahei;fill:#8D8D8D;" y="14" opacity="1">300</text></g><g class="highcharts-tooltip" zIndex="8" style="cursor:default;padding:0;white-space:nowrap;" transform="translate(697,37)" opacity="0"><path fill="#555556" d="M 0 0 L 166 0 C 166 0 166 0 166 0 L 166 58 C 166 58 166 58 166 58 L 89 58 83 64 77 58 0 58 C 0 58 0 58 0 58 L 0 0 C 0 0 0 0 0 0"></path></g></svg><div class="highcharts-tooltip" style="position: absolute; left: 697px; top: 37px; visibility: hidden; "><span style="position: absolute; white-space: nowrap; font-family: Tahoma, &#39;microsoft yahei&#39;, 微软雅黑, 宋体; font-size: 12px; color: rgb(255, 255, 255); margin-left: 0px; margin-top: 0px; left: 8px; top: 8px; " zindex="1"><div style="padding:5px;"><b>2014-9-24</b></div><table style="width: 150px"><tbody><tr><td style="padding: 2px 5px">调用次数 </td><td style="text-align: right;padding-left:15px">157 </td></tr></tbody></table></span></div></div></div>
								        </div>
        <!--大图模式：end-->
        <!-- 图形数据区域end-->
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
    <div id="table_list" class="gri_wrapper"><table class="gri_stable" id="table_list_table"><colgroup span="7"><col class="gri_RefDate"><col class="gri_CallbackCount"><col class="gri_FailCount"><col class="gri_FailPercent"><col class="gri_TotalTimeCost"><col class="gri_AverageTimeCost"><col class="gri_MaxTimeCost"></colgroup><thead><tr><th name="RefDate" class="hover enable" style="text-align: left; ">时间<i class="icon-order-hover"></i></th><th name="CallbackCount" class="hover enable row_hover">调用次数<i class="icon-order-hover"></i></th><th name="FailCount" class="hover enable">失败次数<i class="icon-order-hover"></i></th><th name="FailPercent" class="hover enable">失败率<i class="icon-order-hover"></i></th><th name="TotalTimeCost" class="hover enable">总共耗时(毫秒)<i class="icon-order-hover"></i></th><th name="AverageTimeCost" class="hover enable">平均耗时(毫秒)<i class="icon-order-hover"></i></th><th name="MaxTimeCost" class="hover enable">最大耗时(毫秒)<i class="icon-order-hover"></i></th></tr></thead><tbody><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-27</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">57</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0%</div></td><td><div style="width: 100%; height: 100%;text-align:right;">3,872</div></td><td><div style="width: 100%; height: 100%;text-align:right;">67.93</div></td><td><div style="width: 100%; height: 100%;text-align:right;">143</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-26</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">85</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0%</div></td><td><div style="width: 100%; height: 100%;text-align:right;">7,495</div></td><td><div style="width: 100%; height: 100%;text-align:right;">88.18</div></td><td><div style="width: 100%; height: 100%;text-align:right;">735</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-25</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">199</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0%</div></td><td><div style="width: 100%; height: 100%;text-align:right;">15,257</div></td><td><div style="width: 100%; height: 100%;text-align:right;">76.67</div></td><td><div style="width: 100%; height: 100%;text-align:right;">437</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-24</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">157</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0%</div></td><td><div style="width: 100%; height: 100%;text-align:right;">12,366</div></td><td><div style="width: 100%; height: 100%;text-align:right;">78.76</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1,415</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-23</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">172</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0%</div></td><td><div style="width: 100%; height: 100%;text-align:right;">12,901</div></td><td><div style="width: 100%; height: 100%;text-align:right;">75.01</div></td><td><div style="width: 100%; height: 100%;text-align:right;">327</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-22</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">163</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0%</div></td><td><div style="width: 100%; height: 100%;text-align:right;">13,165</div></td><td><div style="width: 100%; height: 100%;text-align:right;">80.77</div></td><td><div style="width: 100%; height: 100%;text-align:right;">708</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-21</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">48</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0%</div></td><td><div style="width: 100%; height: 100%;text-align:right;">3,189</div></td><td><div style="width: 100%; height: 100%;text-align:right;">66.44</div></td><td><div style="width: 100%; height: 100%;text-align:right;">85</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-20</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">86</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0%</div></td><td><div style="width: 100%; height: 100%;text-align:right;">6,984</div></td><td><div style="width: 100%; height: 100%;text-align:right;">81.21</div></td><td><div style="width: 100%; height: 100%;text-align:right;">365</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-19</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">179</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0%</div></td><td><div style="width: 100%; height: 100%;text-align:right;">13,907</div></td><td><div style="width: 100%; height: 100%;text-align:right;">77.69</div></td><td><div style="width: 100%; height: 100%;text-align:right;">527</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-18</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">196</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0.51%</div></td><td><div style="width: 100%; height: 100%;text-align:right;">17,244</div></td><td><div style="width: 100%; height: 100%;text-align:right;">87.98</div></td><td><div style="width: 100%; height: 100%;text-align:right;">3,000</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-17</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">111</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0%</div></td><td><div style="width: 100%; height: 100%;text-align:right;">7,855</div></td><td><div style="width: 100%; height: 100%;text-align:right;">70.77</div></td><td><div style="width: 100%; height: 100%;text-align:right;">509</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-16</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">125</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0%</div></td><td><div style="width: 100%; height: 100%;text-align:right;">11,174</div></td><td><div style="width: 100%; height: 100%;text-align:right;">89.39</div></td><td><div style="width: 100%; height: 100%;text-align:right;">1,542</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-15</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">214</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0%</div></td><td><div style="width: 100%; height: 100%;text-align:right;">17,187</div></td><td><div style="width: 100%; height: 100%;text-align:right;">80.31</div></td><td><div style="width: 100%; height: 100%;text-align:right;">529</div></td></tr><tr><td><div style="width: 100%; height: 100%;text-align:left;">2014-09-14</div></td><td class="row_hover"><div style="width: 100%; height: 100%;text-align:right;">43</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0</div></td><td><div style="width: 100%; height: 100%;text-align:right;">0%</div></td><td><div style="width: 100%; height: 100%;text-align:right;">2,922</div></td><td><div style="width: 100%; height: 100%;text-align:right;">67.95</div></td><td><div style="width: 100%; height: 100%;text-align:right;">137</div></td></tr></tbody></table><div class="pagination pagination_wrp"><span class="page_nav_area"><span class="page_num"><label>1</label>
<span class="num_gap">/</span>
<label>3</label></span><a class="button page_next" href="javascript:;"><i class="arrow"></i></a><span class="goto_area"><input type="text">
<a class="button page_go" href="javascript:;">跳转</a></span></span></div></div>
</div>        </div>
        <!-- 详细数据表格end -->
    </div>
</div>
<!-- <script>
	function export_excel() {
		/**
		 * 表的cgi地址
		 */
		var tableUrl = '/wechat/ctr_interface/get_table_data';
		/**
		 * 加载表的数据
		 */
		MTA.Data.exportTable(tableUrl);
	}

	//绑定查询结果，表格与图形数据绑定
	function buildData() {
		buildKeyIndex();
		buildChart();
		buildDataTable();
	}

	//应用的初始化参数
	var initParams = {"start_date":"2014-08-29","end_date":"2014-09-27","source":{"seg0":[{"name":"\u5168\u90e8","value":"-1","isDefault":1}],"seg1":[{"name":"\u641c\u7d22\u516c\u4f17\u53f7\u540d\u79f0","value":"35"},{"name":"\u641c\u7d22\u5fae\u4fe1\u53f7","value":"3"},{"name":"\u56fe\u6587\u6d88\u606f\u53f3\u4e0a\u89d2\u83dc\u5355","value":"43"},{"name":"\u540d\u7247\u5206\u4eab","value":"17"},{"name":"\u626b\u4e8c\u7ef4\u7801\u53ca\u5176\u4ed6","value":"0"}]},"table_options":[{"key":"table_channel_group_split","value":"\u6e20\u9053\u7ec6\u5206","group":"channel"},{"key":"table_channel_group_other","value":"\u5408\u5e76\u5176\u5b83\u9879","group":"channel"},{"key":"table_version_group_split","value":"\u7248\u672c\u7ec6\u5206","group":"version"},{"key":"table_version_group_other","value":"\u5408\u5e76\u5176\u5b83\u9879","group":"version"}],"chart_options":[{"key":"chart_channel_group_split","value":"\u6e20\u9053\u7ec6\u5206","group":"channel"},{"key":"chart_channel_group_other","value":"\u5408\u5e76\u5176\u5b83\u9879","group":"channel"},{"key":"chart_version_group_split","value":"\u7248\u672c\u7ec6\u5206","group":"version"},{"key":"chart_version_group_other","value":"\u5408\u5e76\u5176\u5b83\u9879","group":"version"},{"key":"chart_calc_sum","value":"\u663e\u793a\u5c0f\u8ba1"}],"need_compare":1,"real_time":0};
	MTA.Page.init_params = initParams;
	var show_header = true;//不自动隐藏页头的空白，查看 layout_for_wechat 文件

	$(document).ready(function(){

		var conf = {
			1 : '/wechat/ctr_interface/get_chart_data?index=CallbackCount',
			2 : '/wechat/ctr_interface/get_chart_data?index=FailPercent',
			3 : '/wechat/ctr_interface/get_chart_data?index=AverageTimeCost',
			4 : '/wechat/ctr_interface/get_chart_data?index=MaxTimeCost'
		};
		MTA.Util.view_switcher.init(conf, 'buildChart');

		var dateObj = {
		inputId:'date',
		target:'datePicker',
		startDate: initParams.start_date || '',
		endDate: initParams.end_date || '',
		startCompareDate: initParams.start_compare_date || '',
		endCompareDate: initParams.end_compare_date || '',
		needCompare: initParams.need_compare || '1',
		defaultText : ''|| ' 至 ',
		singleCompare : '',
		isTodayValid: initParams.real_time || false,
		validStartTime: '1304611200',
		minValidDate: minValidDate
		};

		MTA.Report.initialize(dateObj, 'buildData');

		//日报，月报切换
		var report_list = [{'name':'日报','value':'day'},{'name':'小时报','value':'hour'}];
		var time_type = 'day';
		MTA.Report.initReportList(report_list, time_type);

		//页面tips
		var items = {"\u8c03\u7528\u6b21\u6570":"\u63a5\u53e3\u88ab\u8c03\u7528\u603b\u6b21\u6570","\u5931\u8d25\u7387":"\u8c03\u7528\u5931\u8d25\u7684\u6b21\u6570\/\u63a5\u53e3\u88ab\u8c03\u7528\u603b\u6b21\u6570","\u5e73\u5747\u8017\u65f6":"\u63a5\u53e3\u8c03\u7528\u7684\u603b\u65f6\u957f\/\u63a5\u53e3\u88ab\u8c03\u7528\u6210\u529f\u603b\u6b21\u6570","\u6700\u5927\u8017\u65f6":"\u63a5\u53e3\u8c03\u7528\u8017\u65f6\u7684\u6700\u5927\u503c","\u65e5\u3001\u5468\u3001\u6708":"\u5206\u522b\u8ba1\u7b97\u6628\u65e5\u6570\u636e\u76f8\u6bd41\u5929\u30017\u5929\u300130\u5929\u524d\u7684\u53d8\u5316\u60c5\u51b5"};
		MTA.Util.items_info.init(items,'wechat');

	    if ('wechat' == 'wechat') {
	        $('.mod_header').after('<div style="margin:20px 30px 0;"><div class="ui_tips"><i class="icon_info"></i>接口分析仅统计了基础消息接口，暂未统计其他高级接口，请知悉。</div></div>');
	    }

	});
</script>  -->
    </div> <!-- end of main -->
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

<div id="calendar_1411913834804" class="ta_calendar ta_calendar2 cf" style="z-index: 9999; display: none; "><div class="ta_calendar_cont cf" id="dateRangePicker_1411913834804"><table class="dateRangeDateTable"><caption>2014年8月</caption><thead><tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr></thead><tbody><tr><td colspan="7" style="text-align: center; "><a href="javascript:void(0);" id="dateRangePreMonth_1411913834804"><i class="i_pre"></i></a></td></tr><tr><td class="ta_dateRangeGray">27</td><td class="ta_dateRangeGray">28</td><td class="ta_dateRangeGray">29</td><td class="ta_dateRangeGray">30</td><td class="ta_dateRangeGray">31</td><td id="calendar_1411913834804_2014-8-1" style="cursor: pointer; ">1</td><td id="calendar_1411913834804_2014-8-2" style="cursor: pointer; ">2</td></tr><tr><td id="calendar_1411913834804_2014-8-3" style="cursor: pointer; ">3</td><td id="calendar_1411913834804_2014-8-4" style="cursor: pointer; ">4</td><td id="calendar_1411913834804_2014-8-5" style="cursor: pointer; ">5</td><td id="calendar_1411913834804_2014-8-6" style="cursor: pointer; ">6</td><td id="calendar_1411913834804_2014-8-7" style="cursor: pointer; ">7</td><td id="calendar_1411913834804_2014-8-8" style="cursor: pointer; ">8</td><td id="calendar_1411913834804_2014-8-9" style="cursor: pointer; ">9</td></tr><tr><td id="calendar_1411913834804_2014-8-10" style="cursor: pointer; ">10</td><td id="calendar_1411913834804_2014-8-11" style="cursor: pointer; ">11</td><td id="calendar_1411913834804_2014-8-12" style="cursor: pointer; ">12</td><td id="calendar_1411913834804_2014-8-13" style="cursor: pointer; ">13</td><td id="calendar_1411913834804_2014-8-14" style="cursor: pointer; ">14</td><td id="calendar_1411913834804_2014-8-15" style="cursor: pointer; ">15</td><td id="calendar_1411913834804_2014-8-16" style="cursor: pointer; ">16</td></tr><tr><td id="calendar_1411913834804_2014-8-17" style="cursor: pointer; ">17</td><td id="calendar_1411913834804_2014-8-18" style="cursor: pointer; ">18</td><td id="calendar_1411913834804_2014-8-19" style="cursor: pointer; ">19</td><td id="calendar_1411913834804_2014-8-20" style="cursor: pointer; ">20</td><td id="calendar_1411913834804_2014-8-21" style="cursor: pointer; ">21</td><td id="calendar_1411913834804_2014-8-22" style="cursor: pointer; ">22</td><td id="calendar_1411913834804_2014-8-23" style="cursor: pointer; ">23</td></tr><tr><td id="calendar_1411913834804_2014-8-24" style="cursor: pointer; ">24</td><td id="calendar_1411913834804_2014-8-25" style="cursor: pointer; ">25</td><td id="calendar_1411913834804_2014-8-26" style="cursor: pointer; ">26</td><td id="calendar_1411913834804_2014-8-27" style="cursor: pointer; ">27</td><td id="calendar_1411913834804_2014-8-28" style="cursor: pointer; ">28</td><td id="calendar_1411913834804_2014-8-29" style="cursor: pointer; " class="first">29</td><td id="calendar_1411913834804_2014-8-30" style="cursor: pointer; " class="ta_dateRangeSelected">30</td></tr><tr><td id="calendar_1411913834804_2014-8-31" style="cursor: pointer; " class="ta_dateRangeSelected">31</td><td class="ta_dateRangeGray">1</td><td class="ta_dateRangeGray">2</td><td class="ta_dateRangeGray">3</td><td class="ta_dateRangeGray">4</td><td class="ta_dateRangeGray">5</td><td class="ta_dateRangeGray">6</td></tr></tbody></table><table class="dateRangeDateTable"><caption>2014年9月</caption><thead><tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr></thead><tbody><tr><td colspan="7" style="text-align: center; "><a href="javascript:void(0);" id="dateRangeNextMonth_1411913834804"><i class="i_next"></i></a></td></tr><tr><td class="ta_dateRangeGray">31</td><td id="calendar_1411913834804_2014-9-1" style="cursor: pointer; " class="ta_dateRangeSelected">1</td><td id="calendar_1411913834804_2014-9-2" style="cursor: pointer; " class="ta_dateRangeSelected">2</td><td id="calendar_1411913834804_2014-9-3" style="cursor: pointer; " class="ta_dateRangeSelected">3</td><td id="calendar_1411913834804_2014-9-4" style="cursor: pointer; " class="ta_dateRangeSelected">4</td><td id="calendar_1411913834804_2014-9-5" style="cursor: pointer; " class="ta_dateRangeSelected">5</td><td id="calendar_1411913834804_2014-9-6" style="cursor: pointer; " class="ta_dateRangeSelected">6</td></tr><tr><td id="calendar_1411913834804_2014-9-7" style="cursor: pointer; " class="ta_dateRangeSelected">7</td><td id="calendar_1411913834804_2014-9-8" style="cursor: pointer; " class="ta_dateRangeSelected">8</td><td id="calendar_1411913834804_2014-9-9" style="cursor: pointer; " class="ta_dateRangeSelected">9</td><td id="calendar_1411913834804_2014-9-10" style="cursor: pointer; " class="ta_dateRangeSelected">10</td><td id="calendar_1411913834804_2014-9-11" style="cursor: pointer; " class="ta_dateRangeSelected">11</td><td id="calendar_1411913834804_2014-9-12" style="cursor: pointer; " class="ta_dateRangeSelected">12</td><td id="calendar_1411913834804_2014-9-13" style="cursor: pointer; " class="ta_dateRangeSelected">13</td></tr><tr><td id="calendar_1411913834804_2014-9-14" style="cursor: pointer; " class="ta_dateRangeSelected">14</td><td id="calendar_1411913834804_2014-9-15" style="cursor: pointer; " class="ta_dateRangeSelected">15</td><td id="calendar_1411913834804_2014-9-16" style="cursor: pointer; " class="ta_dateRangeSelected">16</td><td id="calendar_1411913834804_2014-9-17" style="cursor: pointer; " class="ta_dateRangeSelected">17</td><td id="calendar_1411913834804_2014-9-18" style="cursor: pointer; " class="ta_dateRangeSelected">18</td><td id="calendar_1411913834804_2014-9-19" style="cursor: pointer; " class="ta_dateRangeSelected">19</td><td id="calendar_1411913834804_2014-9-20" style="cursor: pointer; " class="ta_dateRangeSelected">20</td></tr><tr><td id="calendar_1411913834804_2014-9-21" style="cursor: pointer; " class="ta_dateRangeSelected">21</td><td id="calendar_1411913834804_2014-9-22" style="cursor: pointer; " class="ta_dateRangeSelected">22</td><td id="calendar_1411913834804_2014-9-23" style="cursor: pointer; " class="ta_dateRangeSelected">23</td><td id="calendar_1411913834804_2014-9-24" style="cursor: pointer; " class="ta_dateRangeSelected">24</td><td id="calendar_1411913834804_2014-9-25" style="cursor: pointer; " class="ta_dateRangeSelected">25</td><td id="calendar_1411913834804_2014-9-26" style="cursor: pointer; " class="ta_dateRangeSelected">26</td><td id="calendar_1411913834804_2014-9-27" style="cursor: pointer; " class="last">27</td></tr><tr><td class="ta_dateRangeGray">28</td><td class="ta_dateRangeGray">29</td><td class="ta_dateRangeGray">30</td><td class="ta_dateRangeGray">1</td><td class="ta_dateRangeGray">2</td><td class="ta_dateRangeGray">3</td><td class="ta_dateRangeGray">4</td></tr></tbody></table></div><div class="ta_calendar_footer cf"><div class="frm_msg"><div id="dateRangeDiv_1411913834804"><input type="text" class="ta_ipt_text_s ta_dateRangeSelected" name="startDate_1411913834804" id="startDate_1411913834804" value="2014-08-29" readonly="" style="background-repeat: repeat repeat; "><span class="joinLine"> - </span><input type="text" class="ta_ipt_text_s" name="endDate_1411913834804" id="endDate_1411913834804" value="2014-09-27" readonly=""><br></div><div id="dateRangeCompareDiv_1411913834804" style="display: none; "><input type="text" class="ta_ipt_text_s" name="startCompareDate_1411913834804" id="startCompareDate_1411913834804" value="" readonly=""><span class="joinLine"> - </span><input type="text" class="ta_ipt_text_s" name="endCompareDate_1411913834804" id="endCompareDate_1411913834804" value="" readonly=""></div></div><div class="frm_btn"><input class="ta_btn ta_btn_primary" type="button" name="submit_1411913834804" id="submit_1411913834804" value="确定"><input class="ta_btn" type="button" id="closeBtn_1411913834804" value="取消"></div></div></div></body></html>