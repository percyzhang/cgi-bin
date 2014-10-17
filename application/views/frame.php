

<div class="head_box">
    <div class="inner wrp">
        <h1 class="logo"><a href="https://mp.weixin.qq.com/" title="微信公众平台"></a></h1>
        <div class="account">
                        <div class="account_meta account_info account_meta_primary">
                                <a href="<?=site_url()?>/index1/gongzhonghaoSet" class="nickname"><? echo $username;?></a>
								
								
                                <span class="type_wrp">
                                        <a href="<?=site_url()?>/index1/gongzhonghaoSet" class="type icon_service_label">服务号</a>
                                                            <a href="<?=site_url()?>/index1/weixinAuthentication" class="type icon_verify_label success">已认证</a>
                                    </span>
                                <a href="<?=site_url()?>/index1/gongzhonghaoSet"><img src="<?=base_url()?>weixin/imgs/getheadimg.jpg" class="avatar"></a>
                            </div>
            <div id="accountArea" class="account_meta account_inbox account_meta_primary">
                                <a href="https://mp.weixin.qq.com/cgi-bin/frame?t=notification/index_frame&lang=zh_CN&token=145239729" class="account_inbox_switch">
                    <i class="icon_inbox">通知</i>&nbsp;<i class="icon_dot_notices">1</i>                </a>
                            </div>
            <div class="account_meta account_logout account_meta_primary"><a id="logout" href="<?=site_url()?>/index1/logout">退出</a></div>
                    </div>
    </div>
</div>

        </div>
        <div id="body" class="body page_index">
            <div id="js_container_box" class="container_box cell_layout side_l">
                
                                <div class="col_side">
                    <div class="menu_box" id="menuBar">
<dl class="menu no_extra">
    <dt class="menu_title">
            <i class="icon_menu" style="background:url(https://res.wx.qq.com/mpres/htmledition/images/icon/menu/icon_menu_function.png) no-repeat;"></i>功能        </dt> 

				<dd class="menu_item "><a href="<?=site_url()?>/index1/masssendpage">群发功能</a></dd>
					<dd class="menu_item "><a href="<?=site_url()?>/index1/auto_reply">自动回复</a></dd>
					<dd class="menu_item "><a href="<?=site_url()?>/index1/userDefinedMenu">自定义菜单</a></dd>
					<dd class="menu_item "><a href="<?=site_url()?>/index1/mutipleCustomerService">多客服</a></dd>
				    <dd class="menu_plugins"><a class="btn_plugins_add" href="<?=site_url()?>/index1/plugincenter">添加功能插件<i class="icon_common new"></i></a></dd>
		</dl>
<dl class="menu ">
    <dt class="menu_title clickable">
    <a href="<?=site_url()?>/index1/weixinPay">        <i class="icon_menu" style="background:url(https://res.wx.qq.com/mpres/htmledition/images/icon/menu/icon_menu_wxpay_v2.png) no-repeat;"></i>微信支付</a>        </dt> 

	</dl>
<dl class="menu ">
    <dt class="menu_title">
            <i class="icon_menu" style="background:url(https://res.wx.qq.com/mpres/htmledition/images/icon/menu/icon_menu_management.png) no-repeat;"></i>管理        </dt> 

				<dd class="menu_item "><a href="<?=site_url()?>/index1/messageManager">消息管理</a></dd>
					<dd class="menu_item "><a href="<?=site_url()?>/index1/userManager">用户管理</a></dd>
					<dd class="menu_item "><a href="<?=site_url()?>/index1/sucaiManager">素材管理</a></dd>
		</dl>
<dl class="menu ">
    <dt class="menu_title">
            <i class="icon_menu" style="background:url(https://res.wx.qq.com/mpres/htmledition/images/icon/menu/icon_menu_ad.png) no-repeat;"></i>推广    <i class="icon_common new"></i>    </dt> 

				<dd class="menu_item "><a href="<?=site_url()?>/index1/AD">广告主</a></dd>
					<dd class="menu_item "><a href="<?=site_url()?>/index1/liuliang">流量主</a></dd>
		</dl>
<dl class="menu ">
    <dt class="menu_title">
            <i class="icon_menu" style="background:url(https://res.wx.qq.com/mpres/htmledition/images/icon/menu/icon_menu_statistics.png) no-repeat;"></i>统计        </dt> 

				<dd class="menu_item "><a href="<?=site_url()?>/index1/userAnalyze">用户分析</a></dd>
					<dd class="menu_item "><a href="<?=site_url()?>/index1/pictureTextAnalyze">图文分析</a></dd>
					<dd class="menu_item "><a href="<?=site_url()?>/index1/MessageAnalyze">消息分析</a></dd>
					<dd class="menu_item "><a href="<?=site_url()?>/index1/interfaceAnalyze">接口分析</a></dd>
		</dl>
<dl class="menu ">
    <dt class="menu_title">
            <i class="icon_menu" style="background:url(https://res.wx.qq.com/mpres/htmledition/images/icon/menu/icon_menu_setup.png) no-repeat;"></i>设置        </dt> 

				<dd class="menu_item "><a href="<?=site_url()?>/index1/gongzhonghaoSet">公众号设置</a></dd>
					<dd class="menu_item "><a href="<?=site_url()?>/index1/weixinAuthentication">微信认证</a></dd>
					<dd class="menu_item "><a href="<?=site_url()?>/index1/securityHelper">安全助手</a></dd>
					<dd class="menu_item "><a href="<?=site_url()?>/index1/securityCenter">安全中心</a></dd>
		</dl>
<dl class="menu ">
    <dt class="menu_title clickable">
    <a href="<?=site_url()?>/index1/devloperCenter">        <i class="icon_menu" style="background:url(https://res.wx.qq.com/mpres/htmledition/images/icon/menu/icon_menu_developer.png) no-repeat;"></i>开发者中心</a>        </dt> 

	</dl>
</div>

                </div>
                                
                <div class="col_main">
                    <script type="text/javascript" src="<?=base_url()?>weixin/jquery-1.9.11ec5f7.js"></script>
                    <script >
                            $('.menu_item').click(function() {
                                 $(this).addClass('selected');
                                
                          }
                        );
                    </script>
