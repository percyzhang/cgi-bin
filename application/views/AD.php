<div class="main_hd">
    <h2>自动回复</h2>
</div>
<div class="main_bd">
    <div class="highlight_box icon_wrap icon_small border" id="div_stop" style="">
        <div class="opr">
            <a href="javascript:;" class="btn btn_disabled" id="btn_start">开启</a>
        </div>
        <span class="icon lock">
            
        </span>
        <h4 class="title">未开启自动回复设置</h4>
        <p class="desc">
            通过编辑内容或关键词规则，快速进行自动回复设置。如具备开发能力，可更灵活地使用该功能。<a href="javascript:;" class="detail_desc">查看详情</a>
        </p>
    </div>
    <div class="reply_pop_tips popover normal_flow pos_right" id="div_alertTips" style="">
        <div class="popover_inner">
            <div class="popover_content">
                <p class="">由于在开发者中心开启了回调URL和Token，当前自动回复设置已失效。你可以前往<a href="https://mp.weixin.qq.com/advanced/advanced?action=dev&t=advanced/dev&token=145239729&lang=zh_CN">开发者中心</a>进行停用。</p>
            </div>
        </div>
        <i class="popover_arrow popover_arrow_out"></i>
        <i class="popover_arrow popover_arrow_in"></i>
    </div>
    <div class="highlight_box icon_wrap icon_small border" id="div_start" style="display: none;">
        <div class="opr">
            <a href="javascript:;" class="btn btn_disabled" id="btn_stop">停用</a>
        </div>
        <span class="icon unlock">
            
        </span>
        <h4 class="title">已开启自动回复设置</h4>
        <p class="desc">
            通过编辑内容或关键词规则，快速进行自动回复设置。如具备开发能力，可更灵活地使用该功能。<a href="javascript:;" class="detail_desc">查看详情</a>
        </p>
    </div>

    <div class="content_wrap" id="div_replyContent" style="display: none;">
        <div class="global_mod mt_layout reply_tab_wrp">
            <div class="section_tab">
                <ul class="tab_navs">
                    <li class="tab_nav  selected">
                        <a href="./auto_reply_files/auto_reply.htm">被添加自动回复</a>
                    </li>
                    <li class="tab_nav  ">
                        <a href="https://mp.weixin.qq.com/advanced/autoreply?t=ivr/reply&action=autoreply&token=145239729&lang=zh_CN">消息自动回复</a>
                    </li>
                    <li class="tab_nav no_extra ">
                        <a href="https://mp.weixin.qq.com/advanced/autoreply?t=ivr/keywords&action=smartreply&token=145239729&lang=zh_CN">关键词自动回复</a>
                    </li>
                </ul>
            </div>
            <div class="global_extra">
                                <span class="reply_title_tips mini_tips icon_after"><a href="http://kf.qq.com/info/80935.html" target="_blank">公众平台如何设置被添加自动回复 <i class="icon_mini_tips document_link"></i></a></span>
                            </div>
        </div>

        <div class="msg_sender" id="js_msgSender"><div class="msg_tab">
	<ul class="tab_navs">
	    
        <li class="tab_nav tab_text width4 selected" data-type="1" data-tab=".js_textArea" data-tooltip="文字">
		    <a href="javascript:void(0);">&nbsp;<i class="icon_msg_sender"></i></a>
	    </li>
	    
        <li class="tab_nav tab_img width4" data-type="2" data-tab=".js_imgArea" data-tooltip="图片">
		    <a href="javascript:void(0);">&nbsp;<i class="icon_msg_sender"></i></a>
	    </li>
	    
        <li class="tab_nav tab_audio width4" data-type="3" data-tab=".js_audioArea" data-tooltip="语音">
		    <a href="javascript:void(0);">&nbsp;<i class="icon_msg_sender"></i></a>
	    </li>
	    
        <li class="tab_nav tab_video width4 no_extra" data-type="15" data-tab=".js_videoArea" data-tooltip="视频">
		    <a href="javascript:void(0);">&nbsp;<i class="icon_msg_sender"></i></a>
	    </li>
	    
	</ul>
	<div class="tab_panel">
	    
	    <div class="tab_content">
	    	<div class="js_textArea inner no_extra"><div class="emotion_editor">
    <div class="edit_area js_editorArea" style="display: none;"></div><div class="edit_area js_editorArea" contenteditable="true" style="overflow-y: auto; overflow-x: hidden;"></div>
    <div class="editor_toolbar">
        
        <a href="javascript:void(0);" class="icon_emotion emotion_switch js_switch">表情</a>
        
        
        <p class="editor_tip js_editorTip">还可以输入<em>600</em>字</p>
        <div class="emotion_wrp js_emotionArea"><ul class="emotions" onselectstart="return false;"> 
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif" data-title="微笑" style="background-position:0px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/1.gif" data-title="撇嘴" style="background-position:-24px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/2.gif" data-title="色" style="background-position:-48px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/3.gif" data-title="发呆" style="background-position:-72px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/4.gif" data-title="得意" style="background-position:-96px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/5.gif" data-title="流泪" style="background-position:-120px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/6.gif" data-title="害羞" style="background-position:-144px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/7.gif" data-title="闭嘴" style="background-position:-168px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/8.gif" data-title="睡" style="background-position:-192px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/9.gif" data-title="大哭" style="background-position:-216px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/10.gif" data-title="尴尬" style="background-position:-240px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/11.gif" data-title="发怒" style="background-position:-264px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/12.gif" data-title="调皮" style="background-position:-288px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/13.gif" data-title="呲牙" style="background-position:-312px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/14.gif" data-title="惊讶" style="background-position:-336px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/15.gif" data-title="难过" style="background-position:-360px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/16.gif" data-title="酷" style="background-position:-384px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/17.gif" data-title="冷汗" style="background-position:-408px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/18.gif" data-title="抓狂" style="background-position:-432px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/19.gif" data-title="吐" style="background-position:-456px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/20.gif" data-title="偷笑" style="background-position:-480px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/21.gif" data-title="可爱" style="background-position:-504px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/22.gif" data-title="白眼" style="background-position:-528px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/23.gif" data-title="傲慢" style="background-position:-552px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/24.gif" data-title="饥饿" style="background-position:-576px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/25.gif" data-title="困" style="background-position:-600px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/26.gif" data-title="惊恐" style="background-position:-624px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/27.gif" data-title="流汗" style="background-position:-648px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/28.gif" data-title="憨笑" style="background-position:-672px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/29.gif" data-title="大兵" style="background-position:-696px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/30.gif" data-title="奋斗" style="background-position:-720px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/31.gif" data-title="咒骂" style="background-position:-744px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/32.gif" data-title="疑问" style="background-position:-768px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/33.gif" data-title="嘘" style="background-position:-792px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/34.gif" data-title="晕" style="background-position:-816px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/35.gif" data-title="折磨" style="background-position:-840px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/36.gif" data-title="衰" style="background-position:-864px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/37.gif" data-title="骷髅" style="background-position:-888px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/38.gif" data-title="敲打" style="background-position:-912px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/39.gif" data-title="再见" style="background-position:-936px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/40.gif" data-title="擦汗" style="background-position:-960px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/41.gif" data-title="抠鼻" style="background-position:-984px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/42.gif" data-title="鼓掌" style="background-position:-1008px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/43.gif" data-title="糗大了" style="background-position:-1032px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/44.gif" data-title="坏笑" style="background-position:-1056px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/45.gif" data-title="左哼哼" style="background-position:-1080px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/46.gif" data-title="右哼哼" style="background-position:-1104px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/47.gif" data-title="哈欠" style="background-position:-1128px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/48.gif" data-title="鄙视" style="background-position:-1152px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/49.gif" data-title="委屈" style="background-position:-1176px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/50.gif" data-title="快哭了" style="background-position:-1200px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/51.gif" data-title="阴险" style="background-position:-1224px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/52.gif" data-title="亲亲" style="background-position:-1248px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/53.gif" data-title="吓" style="background-position:-1272px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/54.gif" data-title="可怜" style="background-position:-1296px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/55.gif" data-title="菜刀" style="background-position:-1320px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/56.gif" data-title="西瓜" style="background-position:-1344px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/57.gif" data-title="啤酒" style="background-position:-1368px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/58.gif" data-title="篮球" style="background-position:-1392px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/59.gif" data-title="乒乓" style="background-position:-1416px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/60.gif" data-title="咖啡" style="background-position:-1440px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/61.gif" data-title="饭" style="background-position:-1464px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/62.gif" data-title="猪头" style="background-position:-1488px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/63.gif" data-title="玫瑰" style="background-position:-1512px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/64.gif" data-title="凋谢" style="background-position:-1536px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/65.gif" data-title="示爱" style="background-position:-1560px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/66.gif" data-title="爱心" style="background-position:-1584px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/67.gif" data-title="心碎" style="background-position:-1608px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/68.gif" data-title="蛋糕" style="background-position:-1632px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/69.gif" data-title="闪电" style="background-position:-1656px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/70.gif" data-title="炸弹" style="background-position:-1680px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/71.gif" data-title="刀" style="background-position:-1704px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/72.gif" data-title="足球" style="background-position:-1728px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/73.gif" data-title="瓢虫" style="background-position:-1752px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/74.gif" data-title="便便" style="background-position:-1776px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/75.gif" data-title="月亮" style="background-position:-1800px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/76.gif" data-title="太阳" style="background-position:-1824px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/77.gif" data-title="礼物" style="background-position:-1848px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/78.gif" data-title="拥抱" style="background-position:-1872px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/79.gif" data-title="强" style="background-position:-1896px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/80.gif" data-title="弱" style="background-position:-1920px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/81.gif" data-title="握手" style="background-position:-1944px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/82.gif" data-title="胜利" style="background-position:-1968px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/83.gif" data-title="抱拳" style="background-position:-1992px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/84.gif" data-title="勾引" style="background-position:-2016px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/85.gif" data-title="拳头" style="background-position:-2040px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/86.gif" data-title="差劲" style="background-position:-2064px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/87.gif" data-title="爱你" style="background-position:-2088px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/88.gif" data-title="NO" style="background-position:-2112px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/89.gif" data-title="OK" style="background-position:-2136px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/90.gif" data-title="爱情" style="background-position:-2160px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/91.gif" data-title="飞吻" style="background-position:-2184px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/92.gif" data-title="跳跳" style="background-position:-2208px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/93.gif" data-title="发抖" style="background-position:-2232px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/94.gif" data-title="怄火" style="background-position:-2256px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/95.gif" data-title="转圈" style="background-position:-2280px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/96.gif" data-title="磕头" style="background-position:-2304px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/97.gif" data-title="回头" style="background-position:-2328px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/98.gif" data-title="跳绳" style="background-position:-2352px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/99.gif" data-title="挥手" style="background-position:-2376px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/100.gif" data-title="激动" style="background-position:-2400px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/101.gif" data-title="街舞" style="background-position:-2424px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/102.gif" data-title="献吻" style="background-position:-2448px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/103.gif" data-title="左太极" style="background-position:-2472px 0;">
            </i>
        </li>
    
        <li class="emotions_item">
            <i class="js_emotion_i" data-gifurl="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/104.gif" data-title="右太极" style="background-position:-2496px 0;">
            </i>
        </li>
    
</ul>
<span class="emotions_preview js_emotionPreviewArea"></span>
</div>
    </div>
</div>

</div>
	    </div>
	    
	    <div class="tab_content" style="display: none;">
	    	<div class="js_imgArea inner ">
	    	</div>
	    </div>
	    
	    <div class="tab_content" style="display: none;">
	    	<div class="js_audioArea inner ">
	    	</div>
	    </div>
	    
	    <div class="tab_content" style="display: none;">
	    	<div class="js_videoArea inner ">
	    	</div>
	    </div>
	    
	</div>
</div>
</div>

        <div class="tool_bar">
            <span id="js_save" class="btn btn_primary btn_input"><button>保存</button></span>
            <span id="js_del" class="btn btn_default btn_input btn_disabled"><button disabled="disabled">清除内容</button></span>
        </div>
    </div>

	<div class="page_msg mini" id="js_authrized" style="display:none">
        <div class="inner group">
            <span class="msg_icon_wrp"><i class="icon_msg_mini warn"></i></span>
            <div class="msg_content">
                <p>由于该公众号已授权给第三方公众号插件来进行管理，本页设置的自动回复功能已经失效，如果需要，你可以进入<a href="https://mp.weixin.qq.com/cgi-bin/component_unauthorize?action=list&t=service/auth_plugins&token=145239729&lang=zh_CN">授权插件管理</a>内取消授权。</p>
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
                                        <li class="links_item"><a href="https://mp.weixin.qq.com/acct/infringement?action=getmanual&t=infringement/manual&type=1&lang=zh_CN&token=145239729" target="_blank">侵权投诉</a></li>
                                    </ul>
                <p class="tail">反馈官号weixingongzhong</p>
            </div>
                    </div>
        <div class="foot" id="footer">
	<ul class="links ft">
					<li class="links_item no_extra"><a href="http://www.tencent.com/zh-cn/index.shtml" target="_blank">关于腾讯</a></li>
			<li class="links_item"><a href="https://mp.weixin.qq.com/cgi-bin/readtemplate?t=home/agreement_tmpl&type=info&lang=zh_CN&token=145239729" target="_blank">服务协议</a></li>
			<li class="links_item"><a href="https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN&token=145239729" target="_blank">运营规范</a></li>
			<li class="links_item"><a href="http://kf.qq.com/product/weixinmp.html" target="_blank">客服中心</a></li>
            			<li class="links_item"><a href="http://crm2.qq.com/page/portalpage/wpa.php?uin=40012345&f=1&ty=1&ap=000011:400792:|f:Ggzpt2" target="_blank">在线客服</a></li>
            			<li class="links_item"><a href="mailto:weixinmp@qq.com" target="_blank">联系邮箱</a></li>
			<li class="links_item"><a href="https://mp.weixin.qq.com/cgi-bin/readtemplate?t=home/infringement_tmpl&lang=zh_CN" target="_blank">侵权投诉</a></li>

				<li class="links_item"><p class="copyright">Copyright © 2012-2014 Tencent. All Rights Reserved.</p> </li>
	</ul>
    
	
</div>
<script type="text/javascript">
    //上报测速 --dom加载完成点
    window._points&&(window._points[2]=+new Date());
</script>
        <script type="text/javascript">var MODULES = {'shop_verify/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop_verify/index1ec5f7.js','common/wx/popup.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/popup1ec5f7.js','.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/.js','shop_verify/info.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop_verify/info206bc3.js','common/wx/Tips.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/Tips1ec5f7.js','common/wx/Cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/Cgi200a31.js','biz_common/jquery.validate.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/jquery.validate1ec5f7.js','service/plugins.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/plugins20268e.js','service/detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/detail207c59.js','biz_common/moment.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/moment1ec5f7.js','common/wx/upload.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/upload1fa648.js','biz_web/lib/json.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/json1ec5f7.js','wxverify/invoice_edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/invoice_edit1ffa7e.js','service/apply.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/apply1ec5f7.js','biz_web/ui/checkbox.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/ui/checkbox1fa648.js','service/msgTpl.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/msgTpl1ec5f7.js','common/wx/dialog.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/dialog204f7e.js','service/myService.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/myService1ec5f7.js','common/wx/simplePopup.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/simplePopup1ec5f7.js','service/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/index1ec5f7.js','service/pay.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/pay1ec5f7.js','service/base.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/base1ec5f7.js','service/order.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/order1f192e.js','service/package.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/package1ec5f7.js','service/step.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/service/step1ec5f7.js','common/wx/Step.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/Step1ec5f7.js','media/appmsg_list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/appmsg_list1ec5f7.js','common/wx/media/appmsg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/appmsg1ec5f7.js','common/wx/media/video.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/video1ec5f7.js','common/qq/mask.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/mask1ec5f7.js','common/wx/pagebar.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/pagebar208053.js','common/wx/top.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/top20a85f.js','biz_web/lib/store.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/store1ec5f7.js','common/wx/tooltip.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/tooltip1ec5f7.js','common/wx/popover.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/popover1ec5f7.js','media/media_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/media_cgi20980f.js','common/qq/jquery.plugin/btn.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/jquery.plugin/btn1ec5f7.js','media/videomsg_edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/videomsg_edit1ee6db.js','common/wx/verifycode.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/verifycode1ec5f7.js','tpl/simplePopup.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/simplePopup.html1ec5f7.js','media/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/list1ec5f7.js','common/wx/media/audio.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/audio1ec5f7.js','common/wx/media/img.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/img1ec5f7.js','media/appmsg_edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/appmsg_edit20980f.js','widget/media/appmsg_editor.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/media/appmsg_editor1f18a0.css','widget/date_select.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/date_select1ec663.css','common/wx/time.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/time1ec5f7.js','common/qq/Class.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/Class1ec5f7.js','common/wx/tooltips.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/tooltips1ec5f7.js','common/lib/datepicker.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/lib/datepicker1ec5f7.js','biz_web/ui/dropdown.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/ui/dropdown209885.js','tpl/media/appmsg_edit/first_appmsg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/appmsg_edit/first_appmsg.html1ec5f7.js','tpl/media/appmsg_edit/small_appmsg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/appmsg_edit/small_appmsg.html1ec5f7.js','tpl/media/appmsg_edit/editor.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/appmsg_edit/editor.html1ec5f7.js','media/media_dialog.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/media/media_dialog1ec5f7.js','widget/media/media_dialog.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/media/media_dialog1ec663.css','widget/media/richvideo.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/media/richvideo1ec663.css','tpl/media/dialog/file_layout.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/dialog/file_layout.html1ec5f7.js','tpl/media/dialog/appmsg_layout.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/dialog/appmsg_layout.html1ec5f7.js','tpl/media/dialog/videomsg_layout.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/dialog/videomsg_layout.html1ec5f7.js','tpl/media/dialog/file.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/dialog/file.html1ec5f7.js','tmplmsg/store.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/store1fffcd.js','common/wx/trade.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/trade1ec5f7.js','common/qq/queryString.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/queryString1f8975.js','tmplmsg/searchBar.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/searchBar1ec5f7.js','common/qq/jquery.plugin/serializeObject.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/jquery.plugin/serializeObject1ec5f7.js','tmplmsg/preview.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/preview1ec5f7.js','tmplmsg/tpl_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/tpl_cgi2000fc.js','tmplmsg/detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/detail1ec5f7.js','tmplmsg/apply.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/apply1fffcd.js','tmplmsg/tplEdit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/tplEdit1ec5f7.js','common/lib/colorpicker.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/lib/colorpicker1ec5f7.js','widget/colorpicker.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/colorpicker1ec5f7.css','tmplmsg/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tmplmsg/list1ec5f7.js','accusation/accuse_info.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/accusation/accuse_info1ec5f7.js','tpl/message/video_popup.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/message/video_popup.html1ec5f7.js','tpl/shop/goodlist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/shop/goodlist.html1ec5f7.js','tpl/shop/grouplist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/shop/grouplist.html1ec5f7.js','tpl/shop/minilist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/shop/minilist.html1ec5f7.js','tpl/shop/igoodlist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/shop/igoodlist.html1ec5f7.js','tpl/shop/skulist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/shop/skulist.html1ec5f7.js','tpl/shop/feedback.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/shop/feedback.html1fd8fc.js','tpl/setting/multi_infowindow_check.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/setting/multi_infowindow_check.html1ec5f7.js','tpl/setting/more_size.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/setting/more_size.html1ec5f7.js','tpl/setting/multi_search_result.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/setting/multi_search_result.html1ec5f7.js','tpl/setting/multi_infowindow_edit.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/setting/multi_infowindow_edit.html1ec5f7.js','tpl/user/verifylist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/user/verifylist.html1ec5f7.js','tpl/user/grouplist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/user/grouplist.html1ec5f7.js','tpl/user/userlist.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/user/userlist.html1ec5f7.js','tpl/multiSelector/list.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/multiSelector/list.html1ec5f7.js','tpl/multiSelector/item.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/multiSelector/item.html1ec5f7.js','tpl/richEditor/emotion.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/richEditor/emotion.html1ec5f7.js','tpl/richEditor/emotionEditor.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/richEditor/emotionEditor.html1ec5f7.js','tpl/RichBuddy/RichBuddyLayout.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/RichBuddy/RichBuddyLayout.html1ec5f7.js','tpl/RichBuddy/RichBuddyContent.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/RichBuddy/RichBuddyContent.html1f8975.js','tpl/media/single_appmsg_dialog/layout.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/single_appmsg_dialog/layout.html1ec5f7.js','tpl/media/single_appmsg_dialog/item.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/single_appmsg_dialog/item.html1ec5f7.js','tpl/media/img.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/img.html1ec5f7.js','tpl/media/videomsg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/videomsg.html1fd16f.js','tpl/media/simple_appmsg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/simple_appmsg.html1ec5f7.js','tpl/media/audio.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/audio.html1ec5f7.js','tpl/media/id_card.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/id_card.html1ec5f7.js','tpl/media/video.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/video.html1ec5f7.js','tpl/media/appmsg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/media/appmsg.html1ee6db.js','tpl/notice/index.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/notice/index.html1ec5f7.js','tpl/wxverify/increment_tax_form.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/increment_tax_form.html207c59.js','tpl/wxverify/mediaentreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/mediaentreg.html207c59.js','tpl/wxverify/entreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/entreg.html207c59.js','tpl/wxverify/profitablereg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/profitablereg.html207c59.js','tpl/wxverify/commonreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/commonreg.html2096f6.js','tpl/wxverify/mediaent_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/mediaent_preview.html207c59.js','tpl/wxverify/ent_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/ent_preview.html207c59.js','tpl/wxverify/profitable_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/profitable_preview.html207c59.js','tpl/wxverify/govreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/govreg.html207c59.js','tpl/wxverify/common_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/common_preview.html207c59.js','tpl/wxverify/step1.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/step1.html2096f6.js','tpl/wxverify/civilianreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/civilianreg.html207c59.js','tpl/wxverify/gov_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/gov_preview.html207c59.js','tpl/wxverify/step2.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/step2.html2096f6.js','tpl/wxverify/step3.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/step3.html2096f6.js','tpl/wxverify/confirmname.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/confirmname.html2096f6.js','tpl/wxverify/step4.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/step4.html207c59.js','tpl/wxverify/civilian_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/civilian_preview.html207c59.js','tpl/wxverify/step5.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/step5.html2096f6.js','tpl/wxverify/invoice_edit.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/invoice_edit.html207c59.js','tpl/wxverify/artistreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/artistreg.html207c59.js','tpl/wxverify/shopreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/shopreg.html207c59.js','tpl/wxverify/artist_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/artist_preview.html207c59.js','tpl/wxverify/socialreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/socialreg.html207c59.js','tpl/wxverify/shop_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/shop_preview.html207c59.js','tpl/wxverify/social_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/social_preview.html207c59.js','tpl/wxverify/nonprofitreg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/nonprofitreg.html207c59.js','tpl/wxverify/mediareg.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/mediareg.html207c59.js','tpl/wxverify/nonprofit_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/nonprofit_preview.html207c59.js','tpl/wxverify/media_preview.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/wxverify/media_preview.html207c59.js','tpl/biz_web/ui/checkbox.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/biz_web/ui/checkbox.html1ec5f7.js','tpl/biz_web/ui/dateRange.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/biz_web/ui/dateRange.html1ec5f7.js','tpl/biz_web/ui/dropdown.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/biz_web/ui/dropdown.html209885.js','tpl/slider.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/slider.html1ec5f7.js','tpl/editit.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/editit.html1ec5f7.js','tpl/keyword.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/keyword.html1ec5f7.js','tpl/tooltip.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/tooltip.html1ec5f7.js','tpl/account_message_list.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/account_message_list.html1ec5f7.js','tpl/verifycode.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/verifycode.html1ec5f7.js','tpl/hourspan.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/hourspan.html1ec5f7.js','tpl/msgListItem.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/msgListItem.html1f56cd.js','tpl/pagebar.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/pagebar.html1ec5f7.js','tpl/popup.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/popup.html1ec5f7.js','tpl/tab.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/tab.html1ec5f7.js','tpl/multi_dropdown.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/multi_dropdown.html1ec5f7.js','tpl/colorpicker.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/colorpicker.html1ec5f7.js','tpl/simple_popup.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/simple_popup.html1ec5f7.js','tpl/tooltips.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/tooltips.html1ec5f7.js','tpl/dropdowns.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/dropdowns.html209885.js','tpl/remark.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/remark.html1ec5f7.js','tpl/phone_validate.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/phone_validate.html202d37.js','tpl/popover.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/popover.html1ec5f7.js','tpl/noticeBox.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/noticeBox.html1ec5f7.js','tpl/confirm.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/confirm.html1ec5f7.js','tpl/dialog.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/dialog.html1f4193.js','tpl/accordion.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/accordion.html1ec5f7.js','tpl/top.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/top.html1ec5f7.js','tpl/multi_ddchild.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/multi_ddchild.html1ec5f7.js','tpl/step.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/step.html1ec5f7.js','tpl/uploader.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/uploader.html1f5d9c.js','tpl/dateSelect.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/dateSelect.html1ec5f7.js','tpl/basekeyword.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/basekeyword.html1ec5f7.js','tpl/pay_by_qrcode.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/pay_by_qrcode.html1ec5f7.js','tpl/material/material_dialog/layout.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/material/material_dialog/layout.html1ec5f7.js','tpl/material/material_dialog/item.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/tpl/material/material_dialog/item.html1f353a.js','ivr/ivr_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ivr/ivr_cgi1ec5f7.js','ivr/keywords.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ivr/keywords1ec5f7.js','common/qq/emoji.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/emoji1ec5f7.js','common/wx/richEditor/emotionEditor.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/richEditor/emotionEditor1ec5f7.js','common/wx/media/simpleAppmsg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/simpleAppmsg1ec5f7.js','ivr/reply.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ivr/reply20268e.js','common/wx/richEditor/msgSender.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/richEditor/msgSender1f8975.js','advanced/edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/edit1ec5f7.js','advanced/warning.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/warning1ec5f7.js','setting/wxverifycode.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/wxverifycode1ec5f7.js','advanced/customer_apply.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/customer_apply1ec5f7.js','common/wx/stopMultiRequest.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/stopMultiRequest1ec5f7.js','advanced/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/index1ec5f7.js','advanced/menuApply.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/menuApply1ec5f7.js','advanced/dev.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/dev20268e.js','safe/safe_check.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/safe_check1f46a5.js','advanced/interface.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/interface1ec5f7.js','advanced/iframe-crossdomain.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/iframe-crossdomain1ec5f7.js','advanced/menuSetting.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/menuSetting208053.js','common/wx/media/factory.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/factory1ec5f7.js','biz_common/xss.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/xss1ec5f7.js','biz_common/jquery.ui/jquery.ui.sortable.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/jquery.ui/jquery.ui.sortable1ec5f7.js','advanced/verify.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/advanced/verify1ec5f7.js','common/wx/messenger.method.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/messenger.method1ec5f7.js','setting/tpl/postedit.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/tpl/postedit.html1ec5f7.js','setting/temp/meeting-account.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/temp/meeting-account1ec5f7.js','setting/temp/bind-account.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/temp/bind-account1ec5f7.js','setting/set-location.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/set-location1ec5f7.js','setting/markerTool.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/markerTool1ec5f7.js','setting/bind-email.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/bind-email1f421f.js','biz_common/jquery.md5.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/jquery.md51ec5f7.js','setting/citydata.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/citydata1ec5f7.js','setting/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/index1f5e74.js','common/lib/jquery.Jcrop.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/lib/jquery.Jcrop1ec5f7.js','setting/map_setting.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/map_setting1ec5f7.js','setting/multi_citydata.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/multi_citydata1ec5f7.js','setting/mphelper.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/mphelper1ec5f7.js','setting/upgrade-notes.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/upgrade-notes1ec5f7.js','setting/dev.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/dev1ec5f7.js','setting/safehelper.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/safehelper1ec5f7.js','safe/Scan.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/Scan20268e.js','setting/SearchResultPanel.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/SearchResultPanel1ec5f7.js','setting/MyMarker.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/MyMarker1ec5f7.js','setting/CitySelectComponent.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/CitySelectComponent1ec5f7.js','setting/multi_search.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/multi_search1ec5f7.js','setting/multi_city_select.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/multi_city_select1ec5f7.js','setting/multi_location.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/multi_location1ec5f7.js','setting/multi_map.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/multi_map1ec5f7.js','setting/multiMarker.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/multiMarker1ec5f7.js','setting/bind-email-status.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/bind-email-status2053f2.js','setting/postedit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/postedit1ec5f7.js','setting/function.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/setting/function1f46a5.js','user/validate_phone.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/user/validate_phone1ec5f7.js','user/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/user/index1ec5f7.js','common/wx/remark.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/remark1ec5f7.js','common/wx/RichBuddy.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/RichBuddy1fb191.js','user/user_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/user/user_cgi1ec5f7.js','user/group_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/user/group_cgi1ec5f7.js','common/qq/events.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/events1ec5f7.js','user/validate_wx.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/user/validate_wx2021a2.js','user/force_change_pwd.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/user/force_change_pwd1ec5f7.js','register/upgrade.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/upgrade1ffa7e.js','wxverify/validateExtend.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/validateExtend1ffa7e.js','register/step3.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/step3207c59.js','register/step1_tmpl.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/step1_tmpl1ffa7e.js','register/step1.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/step11ffa7e.js','register/step2.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/step21ffa7e.js','register/govreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/govreg1ffa7e.js','register/commonreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/commonreg207c59.js','common/qq/prototype.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/prototype1ec5f7.js','register/mediareg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/mediareg1ffa7e.js','register/entreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/entreg207c59.js','register/otherreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/otherreg207c59.js','register/personreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/personreg1ffa7e.js','register/step4.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/step41ffa7e.js','register/step5.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/step51ffa7e.js','common/wx/region.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/region204f7e.js','register/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/index1ffa7e.js','register/refill.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/refill1ffa7e.js','register/type_select.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/type_select1ffa7e.js','register/base_info.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/register/base_info1ffa7e.js','common/lib/jquery.md5.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/lib/jquery.md5.js','notification/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/notification/index204f7e.js','home/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/home/index209e63.js','home/login.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/home/login1ec5f7.js','biz_common/cookie.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/cookie1f192e.js','statistics/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/statistics/index1ffa7e.js','common/wx/iframe.method.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe.method1ec5f7.js','wbverify/step2_tx.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wbverify/step2_tx1ec5f7.js','wbverify/step3_sina.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wbverify/step3_sina1ec5f7.js','wbverify/step3_tx.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wbverify/step3_tx1ec5f7.js','wbverify/step.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wbverify/step1ec5f7.js','wbverify/step1.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wbverify/step11ec5f7.js','wbverify/step2_sina.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wbverify/step2_sina1ec5f7.js','device/setting.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/device/setting1fd1e6.js','common/wx/editit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/editit1ec5f7.js','news/operation_guide.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/news/operation_guide1ec5f7.js','common/wx/anchor.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/anchor1ec5f7.js','news/authorization.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/news/authorization1ec5f7.js','wxverify/step1.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/step11ffa7e.js','wxverify/civilianreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/civilianreg1ffa7e.js','wxverify/commonreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/commonreg207c59.js','wxverify/step2.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/step22096f5.js','wxverify/entreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/entreg1ffa7e.js','wxverify/mediaentreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/mediaentreg1ffa7e.js','wxverify/govreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/govreg1ffa7e.js','wxverify/nonprofitreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/nonprofitreg1ffa7e.js','wxverify/profitablereg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/profitablereg1ffa7e.js','wxverify/shopreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/shopreg1ffa7e.js','wxverify/socialreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/socialreg1ffa7e.js','wxverify/mediareg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/mediareg1ffa7e.js','wxverify/artistreg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/artistreg1ffa7e.js','biz_common/aes.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/aes1ec5f7.js','wxverify/init.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/init1ffa7e.js','wxverify/step3.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/step3207c59.js','wxverify/confirmName.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/confirmName1ffa7e.js','wxverify/step4.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/step4207c59.js','wxverify/step5.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/step52096f5.js','common/qq/jquery.plugin/zclip.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/jquery.plugin/zclip1ec5f7.js','wxverify/detail.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/detail207c59.js','wxverify/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/index1ffa7e.js','wxverify/refill.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/refill1ffa7e.js','wxverify/supplement_verify_info.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/wxverify/supplement_verify_info1ffa7e.js','message/send.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/message/send1ec5f7.js','message/message_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/message/message_cgi1f8975.js','message/renderList.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/message/renderList1ec5f7.js','message/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/message/list1ec5f7.js','common/wx/media/idCard.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/idCard1ec5f7.js','common/lib/MockJax.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/lib/MockJax1ec5f7.js','widget/datepicker.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/datepicker1ec663.css','biz_web/lib/soundmanager2.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/soundmanager21ec5f7.js','widget/media.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/media1ee6dc.css','biz_web/lib/video.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/video1ec5f7.js','biz_web/lib/swfobject.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/swfobject1ec5f7.js','common/wx/media/appmsgDialog.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/media/appmsgDialog1ec5f7.js','widget/msg_list.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/msg_list1f353a.css','widget/emotion_editor.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/emotion_editor1ec663.css','common/wx/richEditor/wysiwyg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/richEditor/wysiwyg1ec5f7.js','common/wx/richEditor/emotion.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/richEditor/emotion1ec5f7.js','common/wx/richEditor/editorRange.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/richEditor/editorRange1ec5f7.js','widget/msg_sender.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/msg_sender1fd16f.css','common/qq/jquery.plugin/tab.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/jquery.plugin/tab1ec5f7.js','common/wx/multiSelector/data/city.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/multiSelector/data/city20555b.js','common/wx/multiSelector/city.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/multiSelector/city1fa648.js','common/wx/multiSelector.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/multiSelector1fa648.js','common/wx/multiSelector/industry.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/multiSelector/industry1fa648.js','common/wx/multiSelector/shop_city.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/multiSelector/shop_city20980f.js','common/wx/widgetBridge.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/widgetBridge1ec5f7.js','common/wx/autocomplete.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/autocomplete1ec5f7.js','widget/pagination.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/pagination1ec5f7.css','common/wx/messenger.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/messenger1ec5f7.js','common/wx/dragHelper.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/dragHelper1ec5f7.js','common/wx/dateSelect.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/dateSelect1ec5f7.js','widget/rich_buddy.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/rich_buddy1ec5f7.css','common/wx/dropdowns.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/dropdowns209884.js','biz_web/widget/dropdown.css': 'https://res.wx.qq.com/mpres/htmledition/style/biz_web/widget/dropdown209885.css','common/wx/iframe.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/iframe1ec5f7.js','common/wx/wxt.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/wxt1ec5f7.js','common/wx/slider.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/slider1ec5f7.js','widget/slider.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/slider1ec663.css','common/wx/noticeBox.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/noticeBox1f56cd.js','common/wx/hourspan.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/hourspan1ec5f7.js','widget/verifycode.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/verifycode1ec5f7.css','common/wx/accordion.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/accordion1ec5f7.js','common/wx/multiDropdown.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/multiDropdown1ec5f7.js','widget/dropdown.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/dropdown2074ef.css','common/wx/tooltipsManager.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/tooltipsManager1ec5f7.js','widget/processor_bar.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/processor_bar1ec663.css','common/wx/pay_by_qrcode.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/pay_by_qrcode1ec5f7.js','common/wx/phone_validate.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/phone_validate202d37.js','biz_web/lib/uploadify.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/uploadify1ec5f7.js','widget/upload.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/upload1f8f05.css','common/wx/keyword.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/wx/keyword1ec5f7.js','widget/tooltip.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/tooltip1ec5f7.css','widget/areaselector.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/areaselector1f08d4.css','biz_common/jquery.ui/jquery.ui.draggable.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/jquery.ui/jquery.ui.draggable1ec5f7.js','widget/msg_tab.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/msg_tab1f8975.css','biz_web/lib/spin.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/spin1ec5f7.js','common/qq/url.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/common/qq/url1ec5f7.js','widget/emoji.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/emoji1ec663.css','business/info.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/info1ec5f7.js','business/rank.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/rank1ec5f7.js','business/course.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/course1ec5f7.js','business/source.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/source1ec5f7.js','biz_common/underscore.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/underscore1ec5f7.js','biz_web/lib/highcharts.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/highcharts1ec5f7.js','business/iframe.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/iframe1ec5f7.js','business/pay-reg.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/pay-reg1ec5f7.js','business/overview.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/overview1ec5f7.js','business/faq.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/faq1ec5f7.js','business/rightlist.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/rightlist1ec5f7.js','business/order.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/order1ec5f7.js','business/whitelist.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/whitelist1ec5f7.js','business/right.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/right1ec5f7.js','business/setting.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/setting1ec5f7.js','business/release.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/release1ec5f7.js','business/arbist.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/arbist1ec5f7.js','business/first_check.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/business/first_check1ec5f7.js','payApply/businessMenu.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/payApply/businessMenu1ec5f7.js','payApply/release.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/payApply/release1ec5f7.js','payApply/earnest.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/payApply/earnest1ec5f7.js','payApply/finance.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/payApply/finance1ec5f7.js','payApply/baseInfo.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/payApply/baseInfo1ec5f7.js','payApply/businessInfo.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/payApply/businessInfo1ec5f7.js','payApply/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/payApply/index1ec5f7.js','mass/send.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/mass/send1fa739.js','mass/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/mass/list202bd3.js','shop/template_choose.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/template_choose1fd8fc.js','shop/feedback.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/feedback1fd8fc.js','shop/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/list1fd8fc.js','shop/goods_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/goods_cgi1fd8fc.js','shop/category.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/category1fd8fc.js','shop/group_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/group_cgi1fd8fc.js','shop/deliverylist.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/deliverylist1fd8fc.js','shop/delivery_common.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/delivery_common1fd8fc.js','shop/test.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/test1fd8fc.js','shop/config.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/config1fd8fc.js','shop/shelf_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/shelf_cgi1fd8fc.js','shop/create_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/create_cgi20493f.js','shop/order_info.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/order_info1fd8fc.js','shop/order_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/order_cgi1fd8fc.js','shop/express.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/express206bc3.js','shop/shop_guide.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/shop_guide1fd8fc.js','shop/deliveryedit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/deliveryedit1fd8fc.js','shop/shelf_management.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/shelf_management1fd8fc.js','shop/tmpl_management.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/tmpl_management1fd8fc.js','shop/imgs.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/imgs1fd8fc.js','shop/create_img.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/create_img1fd8fc.js','shop/create.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/create205416.js','shop/create_edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/create_edit1fd8fc.js','shop/shelf_edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/shelf_edit1fd8fc.js','shop/overview.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/overview1fd8fc.js','biz_web/ui/dateRange.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/ui/dateRange1f8975.js','shop/order_list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/order_list1fd8fc.js','shop/myshelf.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/myshelf1fd8fc.js','shop/faq.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/faq1fd8fc.js','shop/imglist.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/imglist1fd8fc.js','shop/precreate.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/shop/precreate1fd8fc.js','safe/tpl/safe_check.html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/tpl/safe_check.html202d37.js','safe/rebind.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/rebind1ec5f7.js','safe/Mobile.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/Mobile1ec5f7.js','safe/safe_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/safe_cgi1ec5f7.js','widget/qrcode_scan.css': 'https://res.wx.qq.com/mpres/htmledition/style/widget/qrcode_scan1fd3ca.css','safe/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/index1ecbb9.js','safe/notify.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/notify1ec5f7.js','safe/phone.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/phone1ec5f7.js','safe/force.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/force1ec5f7.js','safe/remind.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/remind1ec5f7.js','safe/phone_modify.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/phone_modify1ec5f7.js','safe/protect.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/protect1ec5f7.js','safe/token.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/safe/token1ec5f7.js','mall/template_list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/mall/template_list1ec5f7.js','mall/template_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/mall/template_cgi1ec5f7.js','mall/card_verify.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/mall/card_verify1ec5f7.js','biz_web/lib/audiojs.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/lib/audiojs1ec5f7.js','biz_web/ui/input/lentips.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_web/ui/input/lentips1ec5f7.js','biz_web/widget/date_range.css': 'https://res.wx.qq.com/mpres/htmledition/style/biz_web/widget/date_range208053.css','jquery-1.7.2.min.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/jquery-1.7.2.min1ec5f7.js','jquery-1.8.3.min.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/jquery-1.8.3.min1ec5f7.js','biz_common/utils/string/html.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/utils/string/html1ec5f7.js','biz_common/framework/localforage.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/framework/localforage1ec5f7.js','promise.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/promise.js','biz_common/framework/drivers/indexeddb.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/framework/drivers/indexeddb.js','biz_common/framework/drivers/localstorage.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/framework/drivers/localstorage.js','biz_common/framework/drivers/websql.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/framework/drivers/websql.js','biz_common/jquery-1.9.1.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/biz_common/jquery-1.9.11ec5f7.js','bizpage/cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/bizpage/cgi1ec5f7.js','bizpage/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/bizpage/list1ec5f7.js','ad_system/promotion/ad_timeset.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/promotion/ad_timeset205a0e.js','ad_system/promotion/edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/promotion/edit205a0e.js','material/materialDialog.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/material/materialDialog205408.js','ad_system/promotion/ad_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/promotion/ad_cgi205a0e.js','ad_system/promotion/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/promotion/list205a0e.js','ad_system/host_index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/host_index205a0e.js','ad_system/client_index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/client_index205a0e.js','ad_system/host_manage.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/host_manage205a0e.js','ad_system/host_pay.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/host_pay205a0e.js','ad_system/client_pay.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/client_pay205a0e.js','ad_system/index.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/index20531d.js','ad_system/host_report.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/host_report205a0e.js','ad_system/client_report.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/client_report207052.js','ad_system/host.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/host207052.js','ad_system/pop_test.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/pop_test205a0e.js','ad_system/client.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/client205a0e.js','ad_system/file.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/ad_system/file205a0e.js','material/edit.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/material/edit205408.js','material/material_cgi.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/material/material_cgi205408.js','material/list.js': 'https://res.wx.qq.com/mpres/zh_CN/htmledition/js/material/list205408.js'};</script>
        <script type="text/javascript" src="./auto_reply_files/sea1fd8fc.js"></script>  
<script type="text/javascript" src="./auto_reply_files/lib1ec5f7.js"></script>  
<script type="text/javascript">
    window.wx ={
        version:"4.0.0",
        data:{
            t:"145239729",
            ticket:"dbc8bc49890c3fd515afab847f0ee89c5ea4efa9",
            lang:'zh_CN',
            param:["&token=145239729",'&lang=zh_CN'].join(""),
            uin:"3095249804",
            uin_base64:"MzA5NTI0OTgwNA==",
            user_name:"zhaoxinruiqiming",
            nick_name:"赵心瑞宝宝起名公司取名",
            time:"1411911931"||new Date().getTime()/1000
        },
        path:{
            video : "https://res.wx.qq.com/mpres/zh_CN/htmledition/plprecorder/biz_web/video-js1e5a45.swf",    
            audio : "https://res.wx.qq.com/mpres/zh_CN/htmledition/plprecorder/biz_web/audiojs1e5a45.swf",
            uploadify : "https://res.wx.qq.com/mpres/zh_CN/htmledition/plprecorder/biz_web/uploadify1f0e45.swf",
            rimgcrop : "https://res.wx.qq.com/mpres/htmledition/images/cut-round1e5b3a.gif"
        },
        acl:{
                        "msg_acl" : {
                "can_text_msg" : 1,
                "can_image_msg" : 1,
                "can_voice_msg" : 1,
                "can_video_msg" : 1,
                "can_app_msg" : 1,
                "can_commodity_app_msg" : 0,
                "can_card_msg" : "0"*1||0 // @cunjinli改掉
            },
            "ivr_acl" : {
                "can_text_msg" : 1,
                "can_image_msg" : 1,
                "can_voice_msg" : 1,
                "can_video_msg" : 1,
                "can_app_msg" : 1,
                "can_commodity_app_msg" : 0
            },
            "merchant_acl" : {
                "can_use_pay_tmpl" : "0"*1
            }
                    },
        events:{}//全局的事件绑定
    };
</script>
<script type="text/javascript" src="./auto_reply_files/wx200a31.js"></script>  

<script type="text/javascript"> 
_points&&(_points[3]=+new Date());
function getico(i){
    var _img = new Image(1, 1);
    _img.src =wx.url&&wx.url(location.protocol + "//" + location.host + "/misc/getico" + "?location=" + (i||-1) + "&rand=" + Math.random());
};  

getico('1714'); 

/****************************邪恶的上报分割线**********************************************************/
     //上报测速  --onready测速点
    jQuery(function() {
        window._points && (window._points[4] = +new Date()); //onready
    });

    window.onload = function() {
        //onload测速点
        window._points && (window._points[5] = +new Date()); //onload

        var params = [];
        setTimeout(function() {
            //是否支持html5
            if (window.performance && window.performance.timing && window.performance.timing.navigationStart) {
                params.push("flag1=7839&flag2=4&flag3=3");
                //html上报排序
                var field = [
                    "navigationStart",
                    "unloadEventStart",
                    "unloadEventEnd",
                    "redirectStart",
                    "redirectEnd",
                    "fetchStart",
                    "domainLookupStart",
                    "domainLookupEnd",
                    "connectStart",
                    "connectEnd",
                    "requestStart",
                    "responseStart",
                    "responseEnd",
                    "domLoading",
                    "domInteractive",
                    "domContentLoadedEventStart",
                    "domContentLoadedEventEnd",
                    "domComplete",
                    "loadEventStart",
                    "loadEventEnd"
                ];
                field.each(function(name, i) {
                    field[i] = window.performance.timing[name];
                });
                //将html测速点和页面测速点合并
                _points = field.concat(_points.slice(1));
                //如果页面有https连接上报
                window.performance.timing.secureConnectionStart&&_points.push(window.performance.timing.secureConnectionStart);
            } else {
                params.push("flag1=7839&flag2=4&flag3=2");
            }
            _points && _points.each(function(p, i) {
                if (i > 0 && p>0) {
                    (p - _points[0])&&params.push(i + "=" + (p - _points[0]))
                } else {
                    //console.log(i + ":" + p);
                }
            });
            _sendReport(params.join("&"));
        }, 3000);
    }

    function _sendReport(param) {
        if (window.location.href.indexOf("https") > -1) {
            var img = new Image();
            img.src = "https://huatuospeed.weiyun.com/cgi-bin/r.cgi?" + param;
        } else {
            console.log(param);
        }
    }
</script>   


        
<script type="text/javascript">define('widget/processor_bar.css', [], function(){return null;});
define('widget/choose_card_dialog.css', [], function(){return null;});
define('widget/emoji.css', [], function(){return null;});
define('widget/pagination.css', [], function(){return null;});
define('widget/upload.css', [], function(){return null;});
define('widget/tooltip.css', [], function(){return null;});
define('widget/media.css', [], function(){return null;});
define('widget/media/richvideo.css', [], function(){return null;});
define('widget/media/media_dialog.css', [], function(){return null;});
define('widget/emotion_editor.css', [], function(){return null;});
define('widget/msg_tab.css', [], function(){return null;});
define('widget/msg_sender.css', [], function(){return null;});</script>
<script type="text/javascript" src="./auto_reply_files/editorRange1ec5f7.js"></script>
<script type="text/javascript" src="./auto_reply_files/file.html1ec5f7.js"></script>
<script type="text/javascript" src="./auto_reply_files/cgiReport200a31.js"></script>
<script type="text/javascript" src="./auto_reply_files/popup.html1ec5f7.js"></script>
<script type="text/javascript" src="./auto_reply_files/reply20268e.js"></script><script type="text/javascript">var page_dom_load_id = 23545, page_dom_load_key = 12;
var page_onload_id = 23545, page_onload_key = 13;
var page_js_script_id = 23545, page_js_script_key = 14;
var page_ava_id = 23545, page_ava_key = 15;</script>
<script type="text/html" id="detail_pop">
    <div class="page_msg simple default">
        <div class="inner">
            <span class="msg_icon_wrapper"><i class="icon_msg info"></i></span>
            <div class="msg_content">
                <h4>该项需要有开发能力才能进行</h4>
                <p>开发者需要完成以下两步，来进行自动回复的开发</p>
                <ul>
                    <li>1. 阅读接入指南<a href="http://mp.weixin.qq.com/wiki" target="_blank">接口文档</a>，并在<a href="/advanced/advanced?action=dev&t=advanced/dev&token=145239729" target="_blank">开发者中心</a>设置回调URL和Token</li>
                    <li>2. 设置成功后，在接收到用户信息时，自行根据需求通过代码进行回复</li>
                </ul>
            </div>
        </div>
    </div>
</script>
<script type="text/javascript">
    wx.cgiData = {
        replytype : "beadded"
        	,authrized: "0"
	        	,authirze_component_name: ""
	                    };
	var replyData = {
				
					
			can:{
				autoReply:true			},
			modify:{
				autoReplyModify:true			},			
					 
		is:{
			isOpen:false,//开启关闭开发模式
			autoReply:false			}
		}
    seajs.use('ivr/reply', wx_main);;
</script><div class="tooltip" style="display: none;">
    <div class="tooltip_inner">文字</div>
    <i class="tooltip_arrow"></i>
</div><div class="tooltip" style="display: none;">
    <div class="tooltip_inner">图片</div>
    <i class="tooltip_arrow"></i>
</div><div class="tooltip" style="display: none;">
    <div class="tooltip_inner">语音</div>
    <i class="tooltip_arrow"></i>
</div><div class="tooltip" style="display: none;">
    <div class="tooltip_inner">视频</div>
    <i class="tooltip_arrow"></i>
</div>
