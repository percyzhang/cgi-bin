<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
class UserC extends CI_Controller {
    
       function __construct()
    {
        parent::__construct();
//        $this->load->helper('file');
        $this->load->model('User_model');
        session_start();
        $this->output->enable_profiler(false);
    }
    
    public function addGroup(){
        $this->output->enable_profiler(false);
        $userid=$_SESSION['userid'] ;
        $this->User_model ->addGroup($userid);
        echo "successfully~";
    }
    
    function addFans2Group(){
        $this->output->enable_profiler(false);
        $usersId = $this->input->post('usersId');
        $count = count(explode(',', $usersId)) -1;
        $groupid = $this->input->post('groupid');
        $userid = $_SESSION['userid'] ;
        $affected_row  = $this->User_model ->addFans2Group($userid,$groupid,$count);
        echo $affected_row;
    }
    
    public function getAllFans($userid='1'){
        $this->load->helper('file');
          $data = array(
            'users' => array()
        );
       $userData= file("mock_data/mockUser");
       //echo $userData[0];
       $min =0;
        $max =1726;
        for($i =0;$i<10;$i++){
            array_push($data['users'],$userData[ rand($min,$max)]);
        }
        $this->output  
                ->set_content_type('application/json;charset=utf-8')
                -> set_output(json_encode($data));
        $json ="";
    }
    
    public function getGroupListByUserId($userid) {
         $data = array(
            'groups' => array()
        );
         $query_result = $this->User_model ->queryUsersGroup($userid);
         if($query_result){
             foreach ($query_result->result() as $row)
            {
                 array_push($data['groups'], $row);
            }
         }
         $this->output  
                ->set_content_type('application/json;charset=utf-8')
                -> set_output(json_encode($data));
    } 
}