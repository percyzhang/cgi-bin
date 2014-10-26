<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

require 'base_Controller.php';

/**
 * Description of message
 *
 * @author Administrator
 */
class Message extends Base_Controller {

    //put your code here
    function __construct() {
        parent::__construct();
        $this->load->model('message_model');
    }

     public function toAddMsg(){
         $this ->load ->view('addMsg');
                 
     }
    
    public function addMsg(){
        $this -> message_model->addMsg();
        header("Content-type:text/html;charset=utf-8");
        echo "<a  href ='".  site_url()."message/toAddMsg'>返回到添加信息页</a>";
    }
    
    public function getAllMsg() {

//        offset=0&count=20&day=7
        //从哪一行开始
         $offset = $_GET['offset'];
         //每页多少行
        $count = $_get['count'];
        //最近多少天
        $day = $_GET['day'];
        
       $result =  $this -> message_model->getAllMessage($offset,$count,$days);
       

    }

}
