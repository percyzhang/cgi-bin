<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <script language="javascript" type="text/javascript" src="<?=  site_url()?>/weixin/datepicker/WdatePicker.js"></script>
    <body>
       
        <form method="post" action="<?=site_url()?>message/addMsg">
            发送给:<input type ="text" name ="userid"> <br>
            发送者昵称:<input type ="text" name ="sendName"> <br>
            发送内容:<input type ="text" name ="content"> <br>
            发送时间:<input type="text" id ='date' value="" name="date"><img onclick="WdatePicker({'el':'date','dateFmt':'yyyy-MM-dd HH:mm:ss'})" src="<?=  site_url()?>/weixin/datepicker/skin/datePicker.gif" width="16" height="22" align="absmiddle"></br>
            <input type ="submit" >
        </form>
        
    </body>
</html>
