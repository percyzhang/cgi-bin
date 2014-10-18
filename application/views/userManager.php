<link rel="stylesheet" href="https://res.wx.qq.com/mpres/htmledition/style/page/page_user1ec5f7.css">
<link rel="stylesheet" type="text/css" href="https://res.wx.qq.com/c/=/mpres/htmledition/style/widget/emoji1ec663.css,/mpres/htmledition/style/biz_web/widget/dropdown209885.css,/mpres/htmledition/style/widget/rich_buddy1ec5f7.css,/mpres/htmledition/style/widget/pagination1ec5f7.css" />   
<!--<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.0.js"></script>-->
<script  type="text/javascript"  src="<?=  base_url()?>weixin/jquery-1.9.11ec5f7.js"></script>
<div class="main_hd">
    <h2>用户管理</h2>
    
</div>
<div class="main_bd">

    <div class="mod_hd">
        <div class="mod_info">
            分组名称            <span class="group_name" id="js_groupName">全部用户</span>
                    </div>
        <div class="mod_opr">
            <a href="javascript:;" data-y="3" class="btn btn_primary" id="js_groupAdd">
                <i class="icon14_common add_white"></i>新建分组</a>
        </div>
    </div>
    <div class="inner_container_box side_r cell_layout">
        <div class="inner_main">
            <div class="bd">
                                <div class="table_wrp user_list">
                    <table class="table" cellspacing="0">
                        <thead class="thead">
                            <tr>
                                <th class="table_cell user no_extra" colspan="3">
                                    <div class="group_select">
                                        <label for="selectAll" class="group_select_label frm_checkbox_label">
                                            <i class="icon_checkbox"></i>
                                            <input type="checkbox" class="frm_checkbox" id="selectAll">
                                            全选                                        </label>&nbsp;
                                        <div id="allGroup" class="dropdown_wrp dropdown_menu disabled">
                                            <a href="javascript:;" class="btn dropdown_switch jsDropdownBt">
                                                <label class="jsBtLabel">添加到</label><i class="arrow"></i></a>
<div class="dropdown_data_container jsDropdownList" style="display: none; ">
    <ul class="dropdown_data_list">
        
          
    </ul>
</div>
</div>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="tbody" id="userGroups">




</tbody>
                    </table>
                </div>
                <div class="tool_area">
                    <div class="pagination_wrp js_pageNavigator" style=""><div class="pagination" id="wxPagebar_1413209527788">
    <span class="page_nav_area">
        <a href="javascript:void(0);" class="btn page_first" style="display: none; "></a>
        <a href="javascript:void(0);" class="btn page_prev" style="display: none; "><i class="arrow"></i></a>
        
            <span class="page_num">
                <label id='currentPageIndex'>1</label>
                <span class="num_gap">/</span>
                <label id='pageCount'><?=  ceil($_SESSION['fansCount']/10) ?></label>
            </span>
        
        <a href="javascript:void(0);" class="btn page_next"><i class="arrow"></i></a>
        <a href="javascript:void(0);" class="btn page_last" style="display: none; "></a>            
    </span>
    
    <span class="goto_area">
        <input type="text">
        <a href="javascript:void(0);" class="btn page_go">跳转</a>
    </span>
    
</div>
</div>
                </div>
                            </div>
        </div>
        <div class="inner_side">
            <div class="bd">
                <div class="group_list">
                    <div class="inner_menu_box" id="groupsList">
    <dl class="inner_menu" id='allGroupList'>
        <dt class="inner_menu_item">
                    <a href="<?=site_url()?>/index1/userManager" class="inner_menu_link" title="全部用户">
                            <strong>全部用户</strong><em class="num">(<? echo $_SESSION['fansCount'];?>)</em>
                    </a>
        </dt>
    
	
	
<!--	<dd class="inner_menu_item ">
	
		
        <a href="https://mp.weixin.qq.com/cgi-bin/contactmanage?t=user/index&pagesize=10&pageidx=0&type=0&groupid=0&token=1693742123&lang=zh_CN" class="inner_menu_link" title="未分组">
		
			<strong>未分组</strong><em class="num">(607)</em>
		</a>		
	</dd>
	
	
	<dd class="inner_menu_item " id="group2">
	
		
		<a href="https://mp.weixin.qq.com/cgi-bin/contactmanage?t=user/index&pagesize=10&pageidx=0&type=0&groupid=2&token=1693742123&lang=zh_CN" class="inner_menu_link" title="加入该分组中的用户仅作为更重要的用户归类标识">
		
			<strong>星标组</strong><em class="num">(1)</em>
		</a>		
	</dd>-->
	
</dl>


<dl class="inner_menu no_extra" id='allGroupList'>
    <dt class="inner_menu_item selected">
		<a href="#" class="inner_menu_link" title="黑名单">
			<strong>黑名单</strong><em class="num">(0)</em>
		</a>
    </dt>
</dl>
</div>                    
                </div>
            </div>
        </div>
    </div>
</div>

                </div>
            </div>
                        <div class="faq">
                <ul class="links">
                                        <li class="links_item no_extra"><a href="http://crm2.qq.com/page/portalpage/wpa.php?uin=40012345&f=1&ty=1&ap=000011:400792:|f:Ggzpt2" target="_blank">在线客服</a></li>
                    <li class="links_item"><a href="http://kf.qq.com/product/weixinmp.html" target="_blank">客服中心</a></li>
                                        <li class="links_item"><a href="https://mp.weixin.qq.com/acct/infringement?action=getmanual&t=infringement/manual&type=1&lang=zh_CN&token=1693742123" target="_blank">侵权投诉</a></li>
                                    </ul>
                <p class="tail">反馈官号weixingongzhong</p>
            </div>
                    </div>
        <div class="foot" id="footer">
	<ul class="links ft">
					<li class="links_item no_extra"><a href="http://www.tencent.com/zh-cn/index.shtml" target="_blank">关于腾讯</a></li>
			<li class="links_item"><a href="https://mp.weixin.qq.com/cgi-bin/readtemplate?t=home/agreement_tmpl&type=info&lang=zh_CN&token=1693742123" target="_blank">服务协议</a></li>
			<li class="links_item"><a href="https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN&token=1693742123" target="_blank">运营规范</a></li>
			<li class="links_item"><a href="http://kf.qq.com/product/weixinmp.html" target="_blank">客服中心</a></li>
            			<li class="links_item"><a href="http://crm2.qq.com/page/portalpage/wpa.php?uin=40012345&f=1&ty=1&ap=000011:400792:|f:Ggzpt2" target="_blank">在线客服</a></li>
            			<li class="links_item"><a href="mailto:weixinmp@qq.com" target="_blank">联系邮箱</a></li>
			<li class="links_item"><a href="https://mp.weixin.qq.com/cgi-bin/readtemplate?t=home/infringement_tmpl&lang=zh_CN" target="_blank">侵权投诉</a></li>

				<li class="links_item"><p class="copyright">Copyright © 2012-2014 Tencent. All Rights Reserved.</p> </li>
	</ul>
</div>
                    
                    <script type="text/javascript">
                       function getRandom(n){
                return Math.floor(Math.random()*n+1);
                 }
                
                 //获得用户信息
            $(function(){
        $.ajax({
            url : '<?=site_url()?>/report/getAllUser',
            type : 'POST',
            dataType : 'json',
            contentType: "application/x-www-form-urlencoded; charset=utf-8", 
            success : function(data) {
                       // alert(eval(data.users));
                        $.each(data.users, function(key, val) {
                            //alert(key + " ===>>" + val);
                           var tmpTd1= '<tr><td class="table_cell user"><div class="user_info">'+
                                   '<a target="_blank" href="#" class="remark_name" data-fakeid="">'+val+'</a>'+
                                   '<span class="nick_name" data-fakeid="1595825520"></span>'+
                                   '<a target="_blank" href="#" class="avatar">'+
                                   '<img src="<?=  base_url()?>/weixin/headimgs/getheadimg'+getRandom(43)+'" data-fakeid="1595825520" class="js_msgSenderAvatar"></a>'+
                                   '<label for="check1595825520" class="frm_checkbox_label"><i class="icon_checkbox"></i>\n\
                                    <input class="frm_checkbox js_select" type="checkbox" value="1595825520" id="check1595825520"></label></div></td>';
                           var tmpTd2 ='<td class="table_cell user_category">'+
                                   '<div id="selectArea1595825520" class="js_selectArea dropdown_menu" data-gid="0" data-fid="1595825520">'+
                                    '<a href="javascript:;" class="btn dropdown_switch jsDropdownBt"><label class="jsBtLabel">未分组</label><i class="arrow"></i></a>'+
                                    '<div class="dropdown_data_container jsDropdownList" style="display: none; "><ul class="dropdown_data_list">'+
                                      '</ul></div></div></td>';
                              var tmpTd3 = '<td class="table_cell user_opr">' +
                                      '<a class="btn remark js_msgSenderRemark" data-fakeid="1595825520">修改备注</a>'+
                                        '</td></tr>';
                           var userHTML=tmpTd1 + tmpTd2 +tmpTd3;
                           $(userHTML).appendTo('#userGroups');
                        });
            }
        });
                        });
                        
                  //生成分组信息      
                   $(function(){
                     $.ajax({
                        url : '<?=site_url()?>/report/getGroupList/<?= $_SESSION['userid']?>',
                type : 'POST',
                dataType : 'json',
                contentType: "application/x-www-form-urlencoded; charset=utf-8", 
                        success: function(data){
                           // alert(eval(data));
                            $.each(data.groups, function(key, val) {
                                        //alert(key + '==>>' + val.groupname);
                                        
                                        var groupURL= '<?=  site_url()?>/index1/userManager?t=user/index&pagesize=10&pageidx=0&type=1&groupid='+val.groupid+'&token=1693742123&lang=zh_CN';
                                                var tmpHtml ='<dd class="inner_menu_item ">'+
                                                 '<a href="'+groupURL+'" class="inner_menu_link" title="'+val.groupname+'">'+
                                                 '<strong>'+val.groupname+'</strong><em class="num">('+val.fansCount+')</em>'+
                                                 '</a></dd>';
//                                        
                                         $("#allGroupList").append(tmpHtml);
                                         
                                         var tmpHtml1 = ' <li class="dropdown_data_item ">  ' +
                                                 '<a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="'+val.groupid+'" data-index="'+key+'" data-name="'+val.groupname+'">'+val.groupname+'</a>'+
                                                 ' </li>';
                                         $(".dropdown_data_list").append(tmpHtml1);
                                    });
                        }
                      });
                 });
                    </script>
<script type="text/javascript">
    //上报测速 --dom加载完成点
    window._points&&(window._points[2]=+new Date());
</script>
 <script type="text/javascript">
//     var MODULES = {'shop_verify/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop_verify/index1ec5f7.js','common/wx/popup.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/popup1ec5f7.js','.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/.js','shop_verify/info.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop_verify/info20b917.js','common/wx/Tips.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/Tips1ec5f7.js','common/wx/Cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/Cgi200a31.js','biz_common/jquery.validate.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/jquery.validate1ec5f7.js','service/plugins.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/plugins20268e.js','service/detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/detail207c59.js','biz_common/moment.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/moment1ec5f7.js','common/wx/upload.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/upload1fa648.js','biz_web/lib/json.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/json1ec5f7.js','wxverify/invoice_edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/invoice_edit1ffa7e.js','service/apply.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/apply1ec5f7.js','biz_web/ui/checkbox.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/ui/checkbox1fa648.js','service/msgTpl.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/msgTpl1ec5f7.js','common/wx/dialog.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/dialog204f7e.js','service/myService.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/myService1ec5f7.js','common/wx/simplePopup.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/simplePopup1ec5f7.js','service/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/index1ec5f7.js','service/pay.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/pay1ec5f7.js','service/base.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/base1ec5f7.js','service/order.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/order1f192e.js','service/package.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/package1ec5f7.js','service/step.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/step1ec5f7.js','common/wx/Step.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/Step1ec5f7.js','media/appmsg_list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/appmsg_list1ec5f7.js','common/wx/media/appmsg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/appmsg1ec5f7.js','common/wx/media/video.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/video1ec5f7.js','common/qq/mask.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/mask1ec5f7.js','common/wx/pagebar.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/pagebar208053.js','common/wx/top.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/top20a85f.js','biz_web/lib/store.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/store20ed30.js','common/wx/tooltip.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/tooltip1ec5f7.js','common/wx/popover.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/popover1ec5f7.js','media/media_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/media_cgi20980f.js','common/qq/jquery.plugin/btn.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/jquery.plugin/btn1ec5f7.js','media/videomsg_edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/videomsg_edit1ee6db.js','common/wx/verifycode.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/verifycode1ec5f7.js','tpl/simplePopup.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/simplePopup.html1ec5f7.js','media/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/list1ec5f7.js','common/wx/media/audio.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/audio1ec5f7.js','common/wx/media/img.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/img1ec5f7.js','media/appmsg_edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/appmsg_edit20f20c.js','widget/media/appmsg_editor.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/media/appmsg_editor1f18a0.css','widget/date_select.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/date_select1ec663.css','common/wx/time.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/time1ec5f7.js','common/qq/Class.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/Class1ec5f7.js','common/wx/tooltips.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/tooltips1ec5f7.js','common/lib/datepicker.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/lib/datepicker1ec5f7.js','biz_web/ui/dropdown.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/ui/dropdown209885.js','tpl/media/appmsg_edit/first_appmsg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/appmsg_edit/first_appmsg.html1ec5f7.js','tpl/media/appmsg_edit/small_appmsg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/appmsg_edit/small_appmsg.html1ec5f7.js','tpl/media/appmsg_edit/editor.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/appmsg_edit/editor.html1ec5f7.js','media/media_dialog.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/media_dialog1ec5f7.js','widget/media/media_dialog.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/media/media_dialog1ec663.css','widget/media/richvideo.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/media/richvideo1ec663.css','tpl/media/dialog/file_layout.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/dialog/file_layout.html1ec5f7.js','tpl/media/dialog/appmsg_layout.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/dialog/appmsg_layout.html1ec5f7.js','tpl/media/dialog/videomsg_layout.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/dialog/videomsg_layout.html1ec5f7.js','tpl/media/dialog/file.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/dialog/file.html1ec5f7.js','tmplmsg/store.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/store1fffcd.js','common/wx/trade.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/trade1ec5f7.js','common/qq/queryString.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/queryString1f8975.js','tmplmsg/searchBar.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/searchBar1ec5f7.js','common/qq/jquery.plugin/serializeObject.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/jquery.plugin/serializeObject1ec5f7.js','tmplmsg/preview.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/preview1ec5f7.js','tmplmsg/tpl_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/tpl_cgi2000fc.js','tmplmsg/detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/detail1ec5f7.js','tmplmsg/apply.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/apply1fffcd.js','tmplmsg/tplEdit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/tplEdit1ec5f7.js','common/lib/colorpicker.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/lib/colorpicker1ec5f7.js','widget/colorpicker.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/colorpicker1ec5f7.css','tmplmsg/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/list1ec5f7.js','accusation/accuse_info.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/accusation/accuse_info1ec5f7.js','tpl/message/video_popup.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/message/video_popup.html1ec5f7.js','tpl/shop/goodlist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/shop/goodlist.html20b918.js','tpl/shop/grouplist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/shop/grouplist.html1ec5f7.js','tpl/shop/minilist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/shop/minilist.html1ec5f7.js','tpl/shop/igoodlist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/shop/igoodlist.html1ec5f7.js','tpl/shop/skulist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/shop/skulist.html1ec5f7.js','tpl/shop/feedback.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/shop/feedback.html1fd8fc.js','tpl/setting/multi_infowindow_check.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/setting/multi_infowindow_check.html1ec5f7.js','tpl/setting/more_size.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/setting/more_size.html1ec5f7.js','tpl/setting/multi_search_result.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/setting/multi_search_result.html1ec5f7.js','tpl/setting/multi_infowindow_edit.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/setting/multi_infowindow_edit.html1ec5f7.js','tpl/user/verifylist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/user/verifylist.html1ec5f7.js','tpl/user/grouplist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/user/grouplist.html1ec5f7.js','tpl/user/userlist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/user/userlist.html1ec5f7.js','tpl/multiSelector/list.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/multiSelector/list.html1ec5f7.js','tpl/multiSelector/item.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/multiSelector/item.html1ec5f7.js','tpl/richEditor/emotion.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/richEditor/emotion.html1ec5f7.js','tpl/richEditor/emotionEditor.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/richEditor/emotionEditor.html1ec5f7.js','tpl/RichBuddy/RichBuddyLayout.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/RichBuddy/RichBuddyLayout.html1ec5f7.js','tpl/RichBuddy/RichBuddyContent.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/RichBuddy/RichBuddyContent.html1f8975.js','tpl/media/single_appmsg_dialog/layout.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/single_appmsg_dialog/layout.html1ec5f7.js','tpl/media/single_appmsg_dialog/item.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/single_appmsg_dialog/item.html1ec5f7.js','tpl/media/img.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/img.html1ec5f7.js','tpl/media/videomsg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/videomsg.html1fd16f.js','tpl/media/simple_appmsg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/simple_appmsg.html1ec5f7.js','tpl/media/audio.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/audio.html1ec5f7.js','tpl/media/id_card.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/id_card.html1ec5f7.js','tpl/media/video.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/video.html1ec5f7.js','tpl/media/appmsg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/appmsg.html1ee6db.js','tpl/notice/index.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/notice/index.html1ec5f7.js','tpl/wxverify/increment_tax_form.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/increment_tax_form.html207c59.js','tpl/wxverify/mediaentreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/mediaentreg.html207c59.js','tpl/wxverify/entreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/entreg.html207c59.js','tpl/wxverify/profitablereg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/profitablereg.html207c59.js','tpl/wxverify/commonreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/commonreg.html20f200.js','tpl/wxverify/mediaent_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/mediaent_preview.html207c59.js','tpl/wxverify/ent_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/ent_preview.html207c59.js','tpl/wxverify/profitable_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/profitable_preview.html207c59.js','tpl/wxverify/govreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/govreg.html207c59.js','tpl/wxverify/common_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/common_preview.html207c59.js','tpl/wxverify/step1.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/step1.html2096f6.js','tpl/wxverify/civilianreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/civilianreg.html207c59.js','tpl/wxverify/gov_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/gov_preview.html207c59.js','tpl/wxverify/step2.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/step2.html2096f6.js','tpl/wxverify/step3.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/step3.html2096f6.js','tpl/wxverify/confirmname.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/confirmname.html2096f6.js','tpl/wxverify/step4.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/step4.html207c59.js','tpl/wxverify/civilian_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/civilian_preview.html207c59.js','tpl/wxverify/step5.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/step5.html20ebac.js','tpl/wxverify/invoice_edit.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/invoice_edit.html207c59.js','tpl/wxverify/artistreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/artistreg.html207c59.js','tpl/wxverify/shopreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/shopreg.html20f20c.js','tpl/wxverify/artist_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/artist_preview.html207c59.js','tpl/wxverify/socialreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/socialreg.html207c59.js','tpl/wxverify/shop_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/shop_preview.html207c59.js','tpl/wxverify/social_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/social_preview.html207c59.js','tpl/wxverify/nonprofitreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/nonprofitreg.html207c59.js','tpl/wxverify/mediareg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/mediareg.html207c59.js','tpl/wxverify/nonprofit_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/nonprofit_preview.html207c59.js','tpl/wxverify/media_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/media_preview.html207c59.js','tpl/biz_web/ui/checkbox.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/biz_web/ui/checkbox.html1ec5f7.js','tpl/biz_web/ui/dateRange.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/biz_web/ui/dateRange.html1ec5f7.js','tpl/biz_web/ui/dropdown.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/biz_web/ui/dropdown.html209885.js','tpl/slider.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/slider.html1ec5f7.js','tpl/editit.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/editit.html1ec5f7.js','tpl/keyword.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/keyword.html1ec5f7.js','tpl/tooltip.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/tooltip.html1ec5f7.js','tpl/account_message_list.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/account_message_list.html1ec5f7.js','tpl/verifycode.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/verifycode.html1ec5f7.js','tpl/hourspan.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/hourspan.html1ec5f7.js','tpl/msgListItem.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/msgListItem.html1f56cd.js','tpl/pagebar.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/pagebar.html1ec5f7.js','tpl/popup.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/popup.html1ec5f7.js','tpl/tab.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/tab.html1ec5f7.js','tpl/multi_dropdown.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/multi_dropdown.html1ec5f7.js','tpl/colorpicker.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/colorpicker.html1ec5f7.js','tpl/simple_popup.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/simple_popup.html1ec5f7.js','tpl/tooltips.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/tooltips.html1ec5f7.js','tpl/dropdowns.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/dropdowns.html209885.js','tpl/remark.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/remark.html1ec5f7.js','tpl/phone_validate.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/phone_validate.html202d37.js','tpl/popover.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/popover.html1ec5f7.js','tpl/noticeBox.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/noticeBox.html1ec5f7.js','tpl/confirm.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/confirm.html1ec5f7.js','tpl/dialog.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/dialog.html1f4193.js','tpl/accordion.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/accordion.html1ec5f7.js','tpl/top.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/top.html1ec5f7.js','tpl/multi_ddchild.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/multi_ddchild.html1ec5f7.js','tpl/step.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/step.html1ec5f7.js','tpl/uploader.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/uploader.html1f5d9c.js','tpl/dateSelect.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/dateSelect.html1ec5f7.js','tpl/basekeyword.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/basekeyword.html1ec5f7.js','tpl/pay_by_qrcode.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/pay_by_qrcode.html1ec5f7.js','tpl/material/material_dialog/layout.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/material/material_dialog/layout.html1ec5f7.js','tpl/material/material_dialog/item.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/material/material_dialog/item.html1f353a.js','ivr/ivr_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ivr/ivr_cgi1ec5f7.js','ivr/keywords.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ivr/keywords1ec5f7.js','common/qq/emoji.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/emoji1ec5f7.js','common/wx/richEditor/emotionEditor.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/richEditor/emotionEditor1ec5f7.js','common/wx/media/simpleAppmsg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/simpleAppmsg1ec5f7.js','ivr/reply.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ivr/reply20268e.js','common/wx/richEditor/msgSender.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/richEditor/msgSender1f8975.js','advanced/edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/edit1ec5f7.js','advanced/warning.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/warning1ec5f7.js','setting/wxverifycode.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/wxverifycode1ec5f7.js','advanced/customer_apply.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/customer_apply1ec5f7.js','common/wx/stopMultiRequest.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/stopMultiRequest1ec5f7.js','advanced/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/index1ec5f7.js','advanced/menuApply.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/menuApply1ec5f7.js','advanced/dev.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/dev20fcaa.js','safe/safe_check.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/safe_check1f46a5.js','advanced/interface.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/interface1ec5f7.js','advanced/iframe-crossdomain.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/iframe-crossdomain1ec5f7.js','advanced/menuSetting.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/menuSetting208053.js','common/wx/media/factory.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/factory1ec5f7.js','biz_common/xss.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/xss1ec5f7.js','biz_common/jquery.ui/jquery.ui.sortable.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/jquery.ui/jquery.ui.sortable1ec5f7.js','advanced/verify.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/verify1ec5f7.js','common/wx/messenger.method.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/messenger.method1ec5f7.js','setting/tpl/postedit.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/tpl/postedit.html1ec5f7.js','setting/temp/meeting-account.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/temp/meeting-account1ec5f7.js','setting/temp/bind-account.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/temp/bind-account1ec5f7.js','setting/set-location.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/set-location1ec5f7.js','setting/markerTool.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/markerTool1ec5f7.js','setting/bind-email.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/bind-email1f421f.js','biz_common/jquery.md5.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/jquery.md51ec5f7.js','setting/citydata.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/citydata1ec5f7.js','setting/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/index1f5e74.js','common/lib/jquery.Jcrop.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/lib/jquery.Jcrop1ec5f7.js','setting/map_setting.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/map_setting1ec5f7.js','setting/multi_citydata.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/multi_citydata1ec5f7.js','setting/mphelper.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/mphelper1ec5f7.js','setting/upgrade-notes.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/upgrade-notes1ec5f7.js','setting/dev.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/dev1ec5f7.js','setting/safehelper.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/safehelper1ec5f7.js','safe/Scan.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/Scan20f2b3.js','setting/SearchResultPanel.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/SearchResultPanel1ec5f7.js','setting/MyMarker.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/MyMarker1ec5f7.js','setting/CitySelectComponent.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/CitySelectComponent1ec5f7.js','setting/multi_search.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/multi_search1ec5f7.js','setting/multi_city_select.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/multi_city_select1ec5f7.js','setting/multi_location.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/multi_location1ec5f7.js','setting/multi_map.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/multi_map1ec5f7.js','setting/multiMarker.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/multiMarker1ec5f7.js','setting/bind-email-status.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/bind-email-status2053f2.js','setting/postedit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/postedit1ec5f7.js','setting/function.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/function1f46a5.js','user/validate_phone.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/user/validate_phone1ec5f7.js','user/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/user/index1ec5f7.js','common/wx/remark.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/remark1ec5f7.js','common/wx/RichBuddy.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/RichBuddy1fb191.js','user/user_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/user/user_cgi1ec5f7.js','user/group_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/user/group_cgi1ec5f7.js','common/qq/events.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/events1ec5f7.js','user/validate_wx.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/user/validate_wx2021a2.js','user/force_change_pwd.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/user/force_change_pwd1ec5f7.js','register/upgrade.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/upgrade1ffa7e.js','wxverify/validateExtend.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/validateExtend1ffa7e.js','register/step3.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/step3207c59.js','register/step1_tmpl.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/step1_tmpl1ffa7e.js','register/step1.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/step120ebac.js','register/step2.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/step220ebac.js','register/govreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/govreg20ebac.js','register/commonreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/commonreg207c59.js','common/qq/prototype.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/prototype1ec5f7.js','register/mediareg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/mediareg20ebac.js','register/entreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/entreg207c59.js','register/otherreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/otherreg20ebac.js','register/personreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/personreg1ffa7e.js','register/step4.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/step41ffa7e.js','register/step5.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/step51ffa7e.js','common/wx/region.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/region20b918.js','register/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/index1ffa7e.js','register/refill.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/refill1ffa7e.js','register/type_select.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/type_select1ffa7e.js','register/base_info.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/base_info1ffa7e.js','common/lib/jquery.md5.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/lib/jquery.md5.js','notification/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/notification/index204f7e.js','home/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/home/index209e63.js','home/login.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/home/login1ec5f7.js','biz_common/cookie.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/cookie1f192e.js','statistics/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/index1ffa7e.js','common/wx/iframe.method.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe.method1ec5f7.js','wbverify/step2_tx.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wbverify/step2_tx1ec5f7.js','wbverify/step3_sina.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wbverify/step3_sina1ec5f7.js','wbverify/step3_tx.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wbverify/step3_tx1ec5f7.js','wbverify/step.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wbverify/step1ec5f7.js','wbverify/step1.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wbverify/step11ec5f7.js','wbverify/step2_sina.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wbverify/step2_sina1ec5f7.js','device/setting.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/device/setting20fcaa.js','common/wx/editit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/editit1ec5f7.js','news/operation_guide.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/news/operation_guide1ec5f7.js','common/wx/anchor.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/anchor1ec5f7.js','news/authorization.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/news/authorization1ec5f7.js','wxverify/step1.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/step11ffa7e.js','wxverify/civilianreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/civilianreg1ffa7e.js','wxverify/commonreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/commonreg207c59.js','wxverify/step2.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/step220ba25.js','wxverify/entreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/entreg1ffa7e.js','wxverify/mediaentreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/mediaentreg1ffa7e.js','wxverify/govreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/govreg1ffa7e.js','wxverify/nonprofitreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/nonprofitreg1ffa7e.js','wxverify/profitablereg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/profitablereg1ffa7e.js','wxverify/shopreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/shopreg1ffa7e.js','wxverify/socialreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/socialreg1ffa7e.js','wxverify/mediareg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/mediareg1ffa7e.js','wxverify/artistreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/artistreg1ffa7e.js','biz_common/aes.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/aes1ec5f7.js','wxverify/init.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/init1ffa7e.js','wxverify/step3.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/step3207c59.js','wxverify/confirmName.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/confirmName1ffa7e.js','wxverify/step4.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/step4207c59.js','wxverify/step5.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/step52096f5.js','common/qq/jquery.plugin/zclip.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/jquery.plugin/zclip1ec5f7.js','wxverify/detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/detail207c59.js','wxverify/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/index1ffa7e.js','wxverify/refill.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/refill1ffa7e.js','wxverify/supplement_verify_info.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/supplement_verify_info1ffa7e.js','message/send.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/message/send1ec5f7.js','message/message_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/message/message_cgi1f8975.js','message/renderList.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/message/renderList1ec5f7.js','message/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/message/list1ec5f7.js','common/wx/media/idCard.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/idCard1ec5f7.js','common/lib/MockJax.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/lib/MockJax1ec5f7.js','widget/datepicker.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/datepicker1ec663.css','biz_web/lib/soundmanager2.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/soundmanager21ec5f7.js','widget/media.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/media1ee6dc.css','biz_web/lib/video.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/video1ec5f7.js','biz_web/lib/swfobject.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/swfobject1ec5f7.js','common/wx/media/appmsgDialog.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/appmsgDialog1ec5f7.js','widget/msg_list.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/msg_list1f353a.css','widget/emotion_editor.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/emotion_editor1ec663.css','common/wx/richEditor/wysiwyg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/richEditor/wysiwyg1ec5f7.js','common/wx/richEditor/emotion.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/richEditor/emotion1ec5f7.js','common/wx/richEditor/editorRange.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/richEditor/editorRange1ec5f7.js','widget/msg_sender.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/msg_sender1fd16f.css','common/qq/jquery.plugin/tab.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/jquery.plugin/tab1ec5f7.js','common/wx/multiSelector/data/city.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/multiSelector/data/city20555b.js','common/wx/multiSelector/city.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/multiSelector/city1fa648.js','common/wx/multiSelector.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/multiSelector1fa648.js','common/wx/multiSelector/industry.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/multiSelector/industry1fa648.js','common/wx/multiSelector/shop_city.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/multiSelector/shop_city20980f.js','common/wx/widgetBridge.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/widgetBridge1ec5f7.js','common/wx/autocomplete.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/autocomplete1ec5f7.js','widget/pagination.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/pagination1ec5f7.css','common/wx/messenger.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/messenger1ec5f7.js','common/wx/dragHelper.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/dragHelper1ec5f7.js','common/wx/dateSelect.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/dateSelect1ec5f7.js','widget/rich_buddy.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/rich_buddy1ec5f7.css','common/wx/dropdowns.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/dropdowns209884.js','biz_web/widget/dropdown.css': 'https://res.wx.qq.com/mpres/htmledition/style/biz_web/widget/dropdown209885.css','common/wx/iframe.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe1ec5f7.js','common/wx/wxt.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/wxt1ec5f7.js','common/wx/slider.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/slider1ec5f7.js','widget/slider.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/slider1ec663.css','common/wx/noticeBox.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/noticeBox1f56cd.js','common/wx/hourspan.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/hourspan1ec5f7.js','widget/verifycode.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/verifycode1ec5f7.css','common/wx/accordion.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/accordion1ec5f7.js','common/wx/multiDropdown.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/multiDropdown1ec5f7.js','widget/dropdown.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/dropdown2074ef.css','common/wx/tooltipsManager.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/tooltipsManager1ec5f7.js','widget/processor_bar.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/processor_bar1ec663.css','common/wx/pay_by_qrcode.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/pay_by_qrcode1ec5f7.js','common/wx/phone_validate.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/phone_validate202d37.js','biz_web/lib/uploadify.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/uploadify1ec5f7.js','widget/upload.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/upload1f8f05.css','common/wx/keyword.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/keyword1ec5f7.js','widget/tooltip.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/tooltip1ec5f7.css','widget/areaselector.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/areaselector1f08d4.css','biz_common/jquery.ui/jquery.ui.draggable.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/jquery.ui/jquery.ui.draggable1ec5f7.js','widget/msg_tab.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/msg_tab1f8975.css','biz_web/lib/spin.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/spin1ec5f7.js','common/qq/url.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/url1ec5f7.js','widget/emoji.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/emoji1ec663.css','business/info.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/info1ec5f7.js','business/rank.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/rank1ec5f7.js','business/course.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/course1ec5f7.js','business/source.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/source1ec5f7.js','biz_common/underscore.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/underscore1ec5f7.js','biz_web/lib/highcharts.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/highcharts1ec5f7.js','business/iframe.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/iframe1ec5f7.js','business/pay-reg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/pay-reg1ec5f7.js','business/overview.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/overview1ec5f7.js','business/faq.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/faq1ec5f7.js','business/rightlist.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/rightlist1ec5f7.js','business/order.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/order1ec5f7.js','business/whitelist.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/whitelist1ec5f7.js','business/right.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/right1ec5f7.js','business/setting.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/setting1ec5f7.js','business/release.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/release1ec5f7.js','business/arbist.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/arbist1ec5f7.js','business/first_check.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/first_check1ec5f7.js','payApply/businessMenu.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/payApply/businessMenu1ec5f7.js','payApply/release.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/payApply/release1ec5f7.js','payApply/earnest.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/payApply/earnest1ec5f7.js','payApply/finance.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/payApply/finance1ec5f7.js','payApply/baseInfo.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/payApply/baseInfo1ec5f7.js','payApply/businessInfo.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/payApply/businessInfo1ec5f7.js','payApply/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/payApply/index1ec5f7.js','mass/send.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/mass/send1fa739.js','mass/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/mass/list202bd3.js','shop/template_choose.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/template_choose1fd8fc.js','shop/feedback.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/feedback1fd8fc.js','shop/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/list1fd8fc.js','shop/goods_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/goods_cgi1fd8fc.js','shop/category.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/category1fd8fc.js','shop/group_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/group_cgi1fd8fc.js','shop/deliverylist.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/deliverylist1fd8fc.js','shop/delivery_common.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/delivery_common1fd8fc.js','shop/test.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/test1fd8fc.js','shop/config.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/config1fd8fc.js','shop/shelf_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/shelf_cgi1fd8fc.js','shop/create_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/create_cgi20493f.js','shop/order_info.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/order_info1fd8fc.js','shop/order_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/order_cgi1fd8fc.js','shop/express.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/express206bc3.js','shop/shop_guide.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/shop_guide1fd8fc.js','shop/deliveryedit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/deliveryedit1fd8fc.js','shop/shelf_management.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/shelf_management1fd8fc.js','shop/tmpl_management.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/tmpl_management1fd8fc.js','shop/imgs.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/imgs1fd8fc.js','shop/create_img.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/create_img1fd8fc.js','shop/create.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/create20b918.js','shop/create_edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/create_edit20b917.js','shop/shelf_edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/shelf_edit1fd8fc.js','shop/overview.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/overview1fd8fc.js','biz_web/ui/dateRange.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/ui/dateRange20fd7f.js','shop/order_list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/order_list1fd8fc.js','shop/myshelf.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/myshelf1fd8fc.js','shop/faq.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/faq1fd8fc.js','shop/imglist.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/imglist1fd8fc.js','shop/precreate.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/precreate1fd8fc.js','safe/tpl/safe_check.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/tpl/safe_check.html202d37.js','safe/rebind.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/rebind1ec5f7.js','safe/Mobile.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/Mobile1ec5f7.js','safe/safe_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/safe_cgi1ec5f7.js','widget/qrcode_scan.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/qrcode_scan1fd3ca.css','safe/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/index1ecbb9.js','safe/notify.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/notify1ec5f7.js','safe/phone.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/phone1ec5f7.js','safe/force.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/force1ec5f7.js','safe/remind.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/remind1ec5f7.js','safe/phone_modify.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/phone_modify1ec5f7.js','safe/protect.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/protect1ec5f7.js','safe/token.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/token1ec5f7.js','mall/template_list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/mall/template_list1ec5f7.js','mall/template_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/mall/template_cgi1ec5f7.js','mall/card_verify.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/mall/card_verify1ec5f7.js','biz_web/lib/audiojs.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/audiojs1ec5f7.js','biz_web/ui/input/lentips.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/ui/input/lentips1ec5f7.js','biz_web/widget/date_range.css': 'https://res.wx.qq.com/mpres/htmledition/style/biz_web/widget/date_range208053.css','jquery-1.7.2.min.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/jquery-1.7.2.min1ec5f7.js','jquery-1.8.3.min.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/jquery-1.8.3.min1ec5f7.js','biz_common/utils/string/html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/utils/string/html1ec5f7.js','biz_common/framework/localforage.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/framework/localforage1ec5f7.js','promise.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/promise.js','biz_common/framework/drivers/indexeddb.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/framework/drivers/indexeddb.js','biz_common/framework/drivers/localstorage.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/framework/drivers/localstorage.js','biz_common/framework/drivers/websql.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/framework/drivers/websql.js','biz_common/jquery-1.9.1.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/jquery-1.9.11ec5f7.js','bizpage/cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/bizpage/cgi1ec5f7.js','bizpage/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/bizpage/list1ec5f7.js','ad_system/promotion/ad_timeset.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/promotion/ad_timeset20fd7f.js','ad_system/promotion/edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/promotion/edit20fd7f.js','material/materialDialog.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/material/materialDialog205408.js','ad_system/promotion/ad_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/promotion/ad_cgi20fd7f.js','ad_system/promotion/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/promotion/list20fd7f.js','ad_system/host_index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/host_index20fd7f.js','ad_system/client_index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/client_index20fd7f.js','ad_system/host_manage.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/host_manage20fd7f.js','ad_system/host_pay.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/host_pay20fd7f.js','ad_system/client_pay.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/client_pay20fd7f.js','ad_system/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/index20531d.js','ad_system/host_report.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/host_report20fd7f.js','ad_system/client_report.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/client_report20fd7f.js','ad_system/host.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/host20fd7f.js','ad_system/pop_test.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/pop_test20fd7f.js','ad_system/client.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/client20fd7f.js','ad_system/file.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/file20fd7f.js','material/edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/material/edit205408.js','material/material_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/material/material_cgi205408.js','material/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/material/list205408.js'};
</script>
<!--<script type="text/javascript" src="<?=  base_url()?>/weixin/sea1fd8fc.js"></script>-->  

<!--<script type="text/javascript">define('widget/emoji.css', [], function(){return null;});
define('biz_web/widget/dropdown.css', [], function(){return null;});
define('widget/rich_buddy.css', [], function(){return null;});
define('widget/pagination.css', [], function(){return null;});</script>-->
<!--<script type="text/javascript" src="<?=  base_url()?>weixin/dialog.html1f4193.js"></script>
<script type="text/javascript" src="<?=  base_url()?>weixin/pagebar208053.js"></script>-->
<!--<script type="text/javascript" src="<?=  base_url()?>weixin/index1ec5f7.js"></script>-->

<script type="text/html" id="js_editNameHtml">
    <h4 class="popover_title">分组名称</h4>
    <span class="frm_input_box">
        <input type="text" class="frm_input js_name" placeholder="" value="{name}" data-gid="{gid}">
    </span>
</script>
<div class="popover pos_center" style="top: 218px; left: 1168px; display: none; ">
    <div class="popover_inner">
        <div class="popover_content jsPopOverContent"><h4 class="popover_title">分组名称</h4>
    <span class="frm_input_box">
        <input type="text" class="frm_input js_name" placeholder="" value="" data-gid="">
    </span></div>

        

        <div class="popover_bar"><a href="javascript:;" class="btn btn_primary jsPopoverBt">确定</a>&nbsp;<a href="javascript:;" class="btn btn_default jsPopoverBt">取消</a>&nbsp;</div>
    </div>
    <i class="popover_arrow popover_arrow_out"></i>
    <i class="popover_arrow popover_arrow_in"></i>
</div>
<script type="text/html" id="js_deleteHtml">
    删除分组将会把该组已有成员全部移动至未分组里。是否确定删除？    
</script>

<div class="rich_buddy popover arrow_left" style="left: 559.5px; top: 354px; display: none; opacity: 1; ">
    <div class="popover_inner">
        <div class="popover_content">
            <div class="rich_buddy_hd">详细资料</div>

            <div class="loadingArea rich_buddy_loading" style="display: none; "><span class="vm_box"></span><i class="icon_loading_small dark"></i></div>
            <div class="rich_buddy_bd buddyRichContent" style="display: block; "><div class="frm_control_group nickName">
    <label class="frm_label" title="笑笑">笑笑</label>
    <div class="frm_controls frm_vertical_pt">
        <span class="icon18_common woman_orange"></span>
	</div>
</div>
<div class="frm_control_group nickName">
    <label class="frm_label">备注名</label>
    <div class="frm_controls frm_vertical_pt">
        <span class="js_remarkName remark_name"></span>
		<a title="修改备注" class="icon14_common edit_gray js_changeRemark" href="javascript:;">修改备注</a> 
	</div>
</div>
<div class="frm_control_group nickName">
    <label class="frm_label">地区</label>
    <div class="frm_controls frm_vertical_pt">
        美国 内华达州 拉斯维加斯
	</div>
</div>
<div class="frm_control_group nickName">
    <label class="frm_label">签名</label>
    <div class="frm_controls frm_vertical_pt">
        先知三日，富贵十年。
	</div>
</div>
<div class="frm_control_group nickName js_group_container">
<label class="frm_label">分组</label>
    <div class="frm_controls frm_vertical_pt">
        <div class="dropdown_wrp js_group dropdown_menu">
            <a href="javascript:;" class="btn dropdown_switch jsDropdownBt">
                <label class="jsBtLabel">未分组</label>
                <i class="arrow"></i></a>
        <div class="dropdown_data_container jsDropdownList" style="display: none; ">
            <ul class="dropdown_data_list">
        
<!--            
            <li class="dropdown_data_item ">  
                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="0" data-index="0" data-name="未分组">未分组</a>
            </li>
            
            <li class="dropdown_data_item ">  
                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="1" data-index="1" data-name="黑名单">黑名单</a>
            </li>
            
            <li class="dropdown_data_item ">  
                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="2" data-index="2" data-name="星标组">星标组</a>
            </li>
            
            <li class="dropdown_data_item ">  
                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="100" data-index="3" data-name="好友">好友</a>
            </li>
            
            <li class="dropdown_data_item ">  
                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="101" data-index="4" data-name="客户">客户</a>
            </li>
            
            <li class="dropdown_data_item ">  
                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="102" data-index="5" data-name="同行">同行</a>
            </li>
            
            <li class="dropdown_data_item ">  
                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="103" data-index="6" data-name="江浙广">江浙广</a>
            </li>
            
            <li class="dropdown_data_item ">  
                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="105" data-index="7" data-name="国外">国外</a>
            </li>
            
            <li class="dropdown_data_item ">  
                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="106" data-index="8" data-name="无信息资料">无信息资料</a>
            </li>
            
            <li class="dropdown_data_item ">  
                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="107" data-index="9" data-name="港澳台">港澳台</a>
            </li>-->
                    
        
    </ul>
</div>
</div>
    </div>
</div>
</div>
        </div>
    </div>
    <i class="popover_arrow popover_arrow_out"></i>
    <i class="popover_arrow popover_arrow_in"></i>
</div>
<div class="dialog_wrp simple label_block" style="width: 726px; margin-left: -363px; margin-top: -168.5px; display: none;">
	<div class="dialog">
		<div class="dialog_hd">
			<h3>添加备注</h3>
			<a href="javascript:;" onclick="return false" class="icon16_opr closed pop_closed">关闭</a>
		</div>
		<div class="dialog_bd"><div class="simple_dialog_content" style="">
    <form id="popupForm_" method="post" class="form" onsubmit="return false;" novalidate="novalidate">
         <div class="frm_control_group">
            
            <span class="frm_input_box">
                <input type="text" class="frm_input" name="popInput" value="">
                <input style="display:none">
            </span>
            
        </div>       
        <div class="js_verifycode"></div>
    </form>
</div></div>
		
		<div class="dialog_ft">
			
            <span class="btn btn_primary btn_input js_btn_p"><button type="button" class="js_btn" data-index="0">确认</button></span>
	        
            <span class="btn btn_default btn_input js_btn_p"><button type="button" class="js_btn" data-index="1">取消</button></span>
	        
		</div>
		
	</div>
</div>

<div class="mask" style="display:none;"><iframe frameborder="0" style="filter:progid:DXImageTransform.Microsoft.Alpha(opacity:0);position:absolute;top:0px;left:0px;width:100%;height:100%;" src="about:blank"></iframe></div>
</body></html>
<script type="text/javascript" src="<?=  base_url()?>weixin/wxuser.js"></script>
<script>
//     function getQueryString(name) {
//    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
//    var r = window.location.search.substr(1).match(reg);
//    if (r != null) return unescape(r[2]); return null;
//    }
      function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
    var indexNum = getQueryString('pageidx');
    if(indexNum == null || indexNum ==0){
       indexNum =1;
    }
    
    $('label#currentPageIndex').text(indexNum);
    
    var tmpCurrentPageIndex = parseInt($('label#currentPageIndex').text());
    if(tmpCurrentPageIndex >1){
         $('a.btn.page_prev').show();
    }
    var pageCount = <?=  ceil($_SESSION['fansCount']/10) ?>;
    if(tmpCurrentPageIndex === pageCount){
        $('a.btn.page_next').hide();
    }
    
    </script>