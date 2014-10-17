<!--
To change this template, choose Tools | Templates
and open the template in the editor.
-->
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        // put your code here
        foreach ($users as  $user) {
            echo $user;
        }
        echo 'test333';
        ?>
        
        
        
      
        
        <form action="<?=  site_url()?>/userC/addFans2Group" method="post">

          <p>First name: <input type="text" name="usersId" value='131,5648,984,'/></p>

          <p>Last name: <input type="text" name="groupid" value='6' /></p>

          <input type="submit" value="Submit" />
        </form>
    </body>
</html>
