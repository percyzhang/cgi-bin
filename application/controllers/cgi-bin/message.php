<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require(APPPATH.'controllers/base_Controller.php');

/**
 * Description of message
 *
 * @author Administrator
 */
class message extends Base_Controller {

    //put your code here
    function __construct() {
        parent::__construct();
          $this->load->model('message_model');
           $this->output->enable_profiler(true);
    }

    public function index() {
        $this->load->view("head");
        $this->showHead('message');
        if(isset($_GET['offset'])){
             $offset = (int)$_GET['offset'];
        }
          //每页多少行
        if(isset($_GET['count'])){
            $count = (int)$_GET['count'];
        }
         $count = 5;
        //最近多少天
        if(isset($_GET['day'])){
            $day = (int)$_GET['day'];
        }
        if($day ==0 || $day ==1 || $day ==2 || $day == -1 ){
            $result['msgCount'] = $this -> message_model->getMessageByDaysCount($offset=0,$count,$day);
            $result['msgArr'] =  $this -> message_model->getMessageByDays($offset=0,$count,$day);
        }
        else{
            $result['msgCount'] =  $this -> message_model->getCount($offset=0,$count);
            $result['msgArr'] =  $this -> message_model->getAllMessage($offset=0,$count,$day);
        }
//       var_dump($result);
        $this->load->view("messageManager",$result);
    }

}
