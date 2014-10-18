<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require 'base_Controller.php';

/**
 * Description of contactmanage
 *
 * @author Administrator
 */
class contactmanage extends Base_Controller {

    //put your code here
    function __construct() {
        parent::__construct();
    }

    public function index() {
        //  echo $_GET['pageidx'];  通过这样可以直接过去URL中的参数 如:
        if (isset($_GET['pageidx'])) {
            $_SESSION['pageidx'] = $_GET['pageidx'];
        } else {
            $_SESSION['pageidx'] = 1;
        }
        //index.php?c=products&m=view&id=345
        $this->output->enable_profiler(false);
        // $this->output->set_content_type('application/html;charset=utf-8');
        $this->load->helper('url');

        $userid = 'zhang';
        $data = array(
            'groups' => array(),
                // 'userList' => array()
        );
        //获得该公众号所有的粉丝
        $query_UserListResult = $this->User_model->getAllFans($userid);
        array_push($data, $query_UserListResult);
        //获得该公众号所有的粉丝分组
        $query_result = $this->User_model->queryUsersGroup($userid);
        if ($query_result) {
            foreach ($query_result->result() as $row) {
                array_push($data['groups'], $row);
            }
        }
        $this->load->view("head");
        $this->showHead('contactmanage');
        $this->load->view("userManager", $data);
    }

}
