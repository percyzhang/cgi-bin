/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.mywx ={
           
            getSiteURL:function(){
                var locationURL =window.location.host + window.location.pathname ;
//                var siteURL = locationURL.substring(0,locationURL.indexOf('index.php'))+'index.php';
                    return locationURL;
		},
             pageIndex :1
	};

//用户列表全选、全不选功能
$(function(){
    var pageCount=$('label#pageCount').text();
    //分页条事件绑定
    $('a.btn.page_next').click(function(){
        var pageIndex = parseInt($('label#currentPageIndex').text())+1;
        //groupid = -1 代表所有用户组
        
       // alert( mywx.getSiteURL());
//        alert(window.location.pathname);
//        alert(window.location.host);
        var groupURL= 'contactmanage?t=user/index&pagesize=10&pageidx='+pageIndex+'&type=0&groupid=-1&token=1693742123&lang=zh_CN';
//        alert('group:' + groupURL);
       // window.location.href=groupURL;
        location.replace(groupURL);
         mywx.pageIndex = pageIndex;
        
        
    });
    
    $('a.page_first').click(function(){
        $('label#currentPageIndex').text('1');
    });
    
    $('a.page_last').click(function(){
        $('label#currentPageIndex').text(pageCount);
    });
    
    $('a.page_prev').click(function(){
       var pageIndex = parseInt($('label#currentPageIndex').text()) -1;
        //groupid = -1 代表所有用户组
        var groupURL= 'contactmanage?t=user/index&pagesize=10&pageidx='+pageIndex+'&type=0&groupid=-1&token=1693742123&lang=zh_CN';
        window.location.href=groupURL;
         mywx.pageIndex = pageIndex;
    });
    $('a.page_go').click(function(){
        var toPageIndex = $('span.goto_area input').val();
        //$('label#currentPageIndex').text($('span.goto_area input').val());
        var groupURL= 'contactmanage?t=user/index&pagesize=10&pageidx='+toPageIndex+'&type=0&groupid=-1&token=1693742123&lang=zh_CN';
        window.location.href=groupURL;
        mywx.pageIndex = pageIndex;
    });
    
    //添加组事件绑定
    $("#js_groupAdd").click(function(){
        
       $("div.popover.pos_center").show();
       //确定按钮
        $("div.popover.pos_center a.btn.btn_primary.jsPopoverBt").click(function(){
            //提交添加分组,添加组 刷新整个页面，就可以获得新添加的组了
            var locationURL = location.href;
            var siteURL = locationURL.substring(0,locationURL.indexOf('index.php'))+'index.php';
            //alert(mywx.getSiteURL()+"/userC/addGroup");
           // var groupname = $('input.frm_input.js_name').val();
            $.ajax({
                type: "POST",
                url: mywx.getSiteURL()+"/userC/addGroup",
                data: "groupname="+groupname,
                success: function(msg){
                  //alert( "Data Saved: " + msg );
                  $("div.popover.pos_center").hide();
                  window.location.reload();
                }
              });
        });
        //取消按钮
        $("div.popover.pos_center a.btn.btn_default.jsPopoverBt").click(function(){
            $("div.popover.pos_center").hide();
        });
        
        
    });
     $('body.zh_CN').click(function(){
         $("div.dropdown_data_container.jsDropdownList").hide();
         $("div.dropdown_data_container.jsDropdownList").parent().removeClass("open");
     });
     
     $(document).on("click", "a.btn.dropdown_switch.jsDropdownBt", function() {
            if($(this).parent().hasClass('disabled')){
                return false;
            }
            $(this).next('div.dropdown_data_container.jsDropdownList').show();
            $(this).parent().addClass("open");
      });
       $(document).on("click", "a.btn.remark.js_msgSenderRemark", function() {
//            $(this).next('div.dropdown_data_container.jsDropdownList').show();
//            $(this).parent().addClass("open");
               $('div.mask').show();
               $('div.dialog_wrp.simple.label_block').show();
               //，关闭按钮事件绑定
               $('div.dialog_wrp.simple.label_block').find('a.pop_closed').click(function(){
                   $('div.dialog_wrp.simple.label_block').hide();
                   $('div.mask').hide();
               });
               //取消按钮
               $('div.dialog_wrp.simple.label_block').find('span.btn.btn_default.btn_input.js_btn_p button.js_btn').click(function(){
                   $('div.dialog_wrp.simple.label_block').hide();
                   $('div.mask').hide();
               });
               
               //确定按钮
               $('div.dialog_wrp.simple.label_block').find('span.btn.btn_primary.btn_input.js_btn_p button.js_btn').click(function(){
                   $('div.dialog_wrp.simple.label_block').hide();
                   $('div.mask').hide();
                   //未完待续
               });
      });
      //分组列表中的项 点击事件
    $(document).on("click", ".dropdown_data_item", function() {
           var groupid = $(this).find("a").attr('data-value');
           var str='';
           $('#userGroups input[type=checkbox]:checked').each(function(){
			str+=$(this).val()+",";
            });
            if(str ===''){
                str ="1,";
            }
            var locationURL = location.href;
            var siteURL = locationURL.substring(0,locationURL.indexOf('index.php'))+'index.php';
            //var groupname = $('input.frm_input.js_name').val();
            $.ajax({
                type: "POST",
                url: siteURL+"/userC/addFans2Group",
                data: "groupid="+groupid+"&usersId="+str,
                success: function(msg){
                  var count  = msg;
                  if(count >=1){
                      
                  }
                  window.location.reload();
                }
              });
      });
     
    //全选事件绑定
    $("#selectAll").click(function(){
        //alert($('#userGroups input[type=checkbox]').size()+"#####");
			if(this.checked){				 //如果当前点击的多选框被选中
				 $('#userGroups input[type=checkbox]').attr("checked", this.checked );
                                 $('#userGroups input[type=checkbox]').prev().addClass("selected");
                                 $(this).prev().addClass("selected");
                                 $('#allGroup').removeClass("disabled");
                                 // $('#userGroups input[type=checkbox]')[0].attr("checked");
			}else{								
			     $('#userGroups input[type=checkbox]').attr("checked", this.checked );
                             $('#allGroup').addClass("disabled");
                             $('#userGroups input[type=checkbox]').prev().removeClass("selected");
                             $(this).prev().removeClass("selected");
                             $('#allGroup div.dropdown_data_container.jsDropdownList').hide();
			}
	 });
         //用户列表中的每一项绑定，检查是否需要更新全选、全不选按钮
	 $('#userGroups input[type=checkbox]').click(function(){
			   var flag=true;
               $('#userGroups input[type=checkbox]').each(function(){
					if(!this.checked){
						 flag = false;
					}
			   });

			   if( flag ){
					 $('#selectAll').attr('checked', true );
                                         $('#allGroup').removeClass("disabled");
			   }else{
					 $('#selectAll').attr('checked', false );
                                         $('#allGroup').addClass("disabled");
			   }
	 });
   
});
     

