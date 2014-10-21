

<div class="head_box">
    <div class="inner wrp">
        <h1 class="logo"><a href="https://mp.weixin.qq.com/" title="微信公众平台"></a></h1>
        <div class="account">
                        <div class="account_meta account_info account_meta_primary">
                                <a href="<?=site_url()?>settingpage?t=setting/index&action=index&token=2124370165&lang=zh_CN" class="nickname"><? echo $username;?></a>
								
								
                                <span class="type_wrp">
                                    <a href="<?=site_url()?>settingpage?t=setting/index&action=index&token=2124370165&lang=zh_CN" class="type <? if ($type == 2){echo 'icon_service_label';} else if ($type ==1){echo 'icon_subscribe_label';}?>" ><? if ($type == 2){echo '服务号';} else if ($type ==1){echo '订阅号';}?></a>
                                                            <a href="<?=site_url()?>merchant/store?action=detail&t=wxverify/detail&info=verify&token=2124370165&lang=zh_CN" class="type icon_verify_label success">已认证</a>
                                    </span>
                                <a href="<?=site_url()?>settingpage?t=setting/index&action=index&token=2124370165&lang=zh_CN"><img src="<?=base_url()?>uploads/<?echo $useIImg;?>" class="avatar"></a>
                            </div>
            <div id="accountArea" class="account_meta account_inbox account_meta_primary">
                                <a href="https://mp.weixin.qq.com/cgi-bin/frame?t=notification/index_frame&lang=zh_CN&token=145239729" class="account_inbox_switch">
                    <i class="icon_inbox">通知</i>&nbsp;<i class="icon_dot_notices">1</i>                </a>
                            </div>
            <div class="account_meta account_logout account_meta_primary"><a id="logout" href="<?=site_url()?>index1/logout">退出</a></div>
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

            <dd class="menu_item <?  if($pagename == 'masssendpage'){ echo 'selected';} ?>"><a href="<?=site_url()?>cgi-bin/masssendpage?t=mass/send&token=2124370165&lang=zh_CN" id ='masssendpage'>群发功能</a></dd>
					<dd class="menu_item <?  if($pagename == 'autoreply'){ echo ' selected';} ?>"><a href="<?=site_url()?>advanced/autoreply?t=ivr/reply&action=beadded&token=2124370165&lang=zh_CN">自动回复</a></dd>
					<dd class="menu_item <?  if($pagename == 'selfmenu'){ echo ' selected';} ?>"><a href="<?=site_url()?>advanced/selfmenu?action=index&t=advanced/menu-setting&token=2124370165&lang=zh_CN">自定义菜单</a></dd>
					<dd class="menu_item <?  if($pagename == 'custom'){ echo ' selected';} ?>"><a href="<?=site_url()?>misc/pluginloginpage?t=advanced/verify&action=custom&op=outerlogin&pluginid=duokefu&token=2124370165&lang=zh_CN">多客服</a></dd>
				    <dd class="menu_plugins <?  if($pagename == 'plugincenter'){ echo ' selected';} ?>"><a class="btn_plugins_add" href="<?=site_url()?>cgi-bin/plugincenter?t=service/plugins&act=all&token=2124370165&lang=zh_CN">添加功能插件<i class="icon_common new"></i></a>
                                    </dd>
		</dl>
<dl class="menu ">
    <dt class="menu_title clickable <?  if($pagename == 'weixinpay'){ echo ' selected';} ?>">
    <a href="<?=site_url()?>cgi-bin/frame?nav=10010&t=business/index_frame&iframe=%2Fpaymch%2Fbusiness%3Faction%3Dfirstentry&token=2124370165&lang=zh_CN">        
        <i class="icon_menu" style="background:url(https://res.wx.qq.com/mpres/htmledition/images/icon/menu/icon_menu_wxpay_v2.png) no-repeat;"></i>微信支付</a>        </dt> 

	</dl>
<dl class="menu ">
    <dt class="menu_title">
            <i class="icon_menu" style="background:url(https://res.wx.qq.com/mpres/htmledition/images/icon/menu/icon_menu_management.png) no-repeat;"></i>管理        </dt> 

				<dd class="menu_item <?  if($pagename == 'message'){ echo ' selected';} ?>"><a href="<?=site_url()?>cgi-bin/message?t=message/list&count=20&day=7&token=2124370165&lang=zh_CN">消息管理</a></dd>
					<dd class="menu_item <?  if($pagename == 'contactmanage'){ echo ' selected';} ?>"><a href="<?=site_url()?>cgi-bin/contactmanage?t=user/index&pagesize=10&pageidx=0&type=0&token=2124370165&lang=zh_CN">用户管理</a></dd>
					<dd class="menu_item <?  if($pagename == 'appmsg'){ echo ' selected';} ?>"><a href="<?=site_url()?>cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list&type=10&action=list&lang=zh_CN&token=2124370165">素材管理</a></dd>
		</dl>
<dl class="menu ">
    <dt class="menu_title">
            <i class="icon_menu" style="background:url(https://res.wx.qq.com/mpres/htmledition/images/icon/menu/icon_menu_ad.png) no-repeat;"></i>推广    <i class="icon_common new"></i>    </dt> 

				<dd class="menu_item <?  if($pagename == 'ad_client_index'){ echo ' selected';} ?>"><a href="<?=site_url()?>merchant/ad_client_index?t=ad_system/client_index&token=2124370165&lang=zh_CN">广告主</a></dd>
                                <dd class="menu_item <?  if($pagename == 'ad_host_index'){ echo ' selected';} ?>"><a href="<?=site_url()?>merchant/ad_host_index?t=ad_system/host_index&token=2124370165&lang=zh_CN">流量主</a></dd>
		</dl>
<dl class="menu ">
    <dt class="menu_title">
            <i class="icon_menu" style="background:url(https://res.wx.qq.com/mpres/htmledition/images/icon/menu/icon_menu_statistics.png) no-repeat;"></i>统计        </dt> 

                                        <dd class="menu_item <?  if($pagename == 'stat_user_summary'){ echo ' selected';} ?>"><a href="<?=site_url()?>misc/pluginloginpage?action=stat_user_summary&pluginid=luopan&t=statistics/index&token=2124370165&lang=zh_CN">用户分析</a></dd>
					<dd class="menu_item <?  if($pagename == 'stat_article_detail'){ echo ' selected';} ?>"><a href="<?=site_url()?>misc/pluginloginpage?action=stat_article_detail&pluginid=luopan&t=statistics/index&token=2124370165&lang=zh_CN">图文分析</a></dd>
					<dd class="menu_item <?  if($pagename == 'stat_message'){ echo ' selected';} ?>"><a href="<?=site_url()?>misc/pluginloginpage?action=stat_message&pluginid=luopan&t=statistics/index&token=2124370165&lang=zh_CN">消息分析</a></dd>
					<dd class="menu_item <?  if($pagename == 'stat_interface'){ echo ' selected';} ?>"><a href="<?=site_url()?>misc/pluginloginpage?action=stat_interface&pluginid=luopan&t=statistics/index&token=2124370165&lang=zh_CN">接口分析</a></dd>
		</dl>
<dl class="menu ">
    <dt class="menu_title">
            <i class="icon_menu" style="background:url(https://res.wx.qq.com/mpres/htmledition/images/icon/menu/icon_menu_setup.png) no-repeat;"></i>设置        </dt> 

				<dd class="menu_item <?  if($pagename == 'settingpage'){ echo ' selected';} ?>"><a href="<?=site_url()?>cgi-bin/settingpage?t=setting/index&action=index&token=2124370165&lang=zh_CN">公众号设置</a></dd>
					<dd class="menu_item <?  if($pagename == 'store'){ echo ' selected';} ?>"><a href="<?=site_url()?>merchant/store?action=detail&t=wxverify/detail&info=verify&token=2124370165&lang=zh_CN">微信认证</a></dd>
					<dd class="menu_item <?  if($pagename == 'safeassistant'){ echo ' selected';} ?>"><a href="<?=site_url()?>safeassistant?action=view&t=setting/safe-mphelper&token=2124370165&lang=zh_CN">安全助手</a></dd>
					<dd class="menu_item <?  if($pagename == 'safecenterstatus'){ echo ' selected';} ?>"><a href="<?=site_url()?>cgi-bin/safecenterstatus?action=view&t=setting/safe-index&token=2124370165&lang=zh_CN">安全中心</a></dd>
		</dl>
<dl class="menu <?  if($pagename == 'advanceb'){ echo ' selected';} ?>">
    <dt class="menu_title clickable">
    <a href="<?=site_url()?>advanced/advanceb?action=dev&t=advanced/dev&token=2124370165&lang=zh_CN">        <i class="icon_menu" style="background:url(https://res.wx.qq.com/mpres/htmledition/images/icon/menu/icon_menu_developer.png) no-repeat;"></i>开发者中心</a>        </dt> 

	</dl>
</div>

                </div>
                                
                <div class="col_main">
                    <script type="text/javascript" src="<?=base_url()?>weixin/jquery-1.9.11ec5f7.js"></script>
                  
