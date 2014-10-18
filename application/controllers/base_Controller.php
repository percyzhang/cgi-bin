<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of base_Controller
 *
 * @author Administrator
 */
class Base_Controller extends CI_Controller {
    //put your code here
    
      function __construct()
    {
        parent::__construct();
        session_start();
        $this->load->helper('url');
        $this->load->model('User_model');
        $this->output->enable_profiler(false);
        $this->load->helper('string');
    }
    
     function showHead($pagename){
         //如果用户没有登录，跳转到登录页面
         if(!isset($_SESSION['userid'])){
             $this->login();
         }
         else{
            $data = array(
                'userid' =>$_SESSION['userid'],
                'username' =>$_SESSION['username'],
                'useIImg' =>$_SESSION['useIImg'],
                 'type' =>$_SESSION['type'],
                 'pagename' =>$pagename
            );
            $this ->load ->view("frame",$data);
            
         }
     }
     
     
        public function login(  ){
            $this ->load ->view("loginpage" );
        }
        
}
