<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<title>添加用户</title>
</head>
<body>

<?php echo $error;?>

        <?php echo form_open_multipart('user/do_upload');?>
    <fieldset>
             <legend>添加用户</legend>
            用户名:<input type ="text" name ="userid"> <br>
            店名:<input type ="text" name ="username"> <br>
            密码: <input type ="text" name ="pwd"> <br>
            头像:<input type="file" name="userfile" size="20" /> * 只能是"gif|jpg|png" 其中的一种 <br> 
            总粉丝数:<input type="text" name ="fansCount"><br>
            类型:<input type="radio" value="1" name="type">订阅号
            <input type="radio" value="2" name ="type">服务号
            <input type="radio" value="3" name ="type"> 企业号 </br>
            添加分组:<input type='radio' name="grouping" id='grouping'> 是 <input type='radio' name="grouping" id='noGrouping'> 否 
            <fieldset>
            <legend>添加分组</legend>
                组名：<input type='text'  name ='groupname'>  </br>
                粉丝数:<input type='text'  name ='fansCount'>
             </fieldset>
            <input type='hidden' name ='groupData'>
            
            <input type="submit" value="提交" />
</fieldset>
</form>

</body>
</html>
