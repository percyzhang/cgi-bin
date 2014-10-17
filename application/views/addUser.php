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
    <body>
        <?php
        // put your code here
        echo site_url();
        ?>
        
        <form method="post" action="<?=site_url()?>/index1/doAddUser">
            用户名:<input type ="text" name ="userid"> <br>
            店名:<input type ="text" name ="username"> <br>
            密码: <input type ="text" name ="pwd"> <br>
            头像 <input type="file" name ="useIImg" > * 只能是"gif|jpg|png" 其中的一种 <br> 
            总粉丝数:<input type="text" name ="fansCount"><br>
            类型:<input type="radio" value="1" name="type">订阅号
            <input type="radio" value="2" name ="type">服务号
            <input type="radio" value="3" name ="type"> 企业号 </br>
            
            
            <input type ="submit" >
        </form>
    </body>
</html>
