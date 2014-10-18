<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require 'base_Controller.php';

/**
 * Description of misc
 *
 * @author Administrator
 */
class Misc extends Base_Controller {

    //put your code here
    function __construct() {
        parent::__construct();
    }

    //多客服
//    public function pluginloginpage() {
//        $this->load->view("head");
//        $this->showHead('pluginloginpage');
//        $this->load->view("mutipleCustomerService");
//    }

    public function pluginloginpage() {
        if (isset($_GET['action'])) {
            $action = $_GET['action'];
            //var_dump($action);
//            echo $action."===>>>>>>>>>>>>>...";
            //多客服
            if ($action == 'custom') {
                $this->load->view("head");
                $this->showHead('custom');
                $this->load->view("mutipleCustomerService");
            }
            //用户分析
            if ($action =='stat_user_summary') {
                $this->load->view("head");
                $this->showHead('stat_user_summary');
                $this->load->view("userAnalyze");
            }
            //图文分析
            if ($action == 'stat_article_detail') {
                $this->load->view("head");
                $this->showHead('stat_article_detail');
                $this->load->view("pictureTextAnalyze");
            }
            //消息分析
            if ($action == 'stat_message') {
                $this->load->view("head");
                $this->showHead('stat_message');
                $this->load->view("MessageAnalyze");
            }
            //接口分析
            if ($action == 'stat_interface') {
                $this->load->view("head");
                $this->showHead('stat_interface');
                $this->load->view("interfaceAnalyze");
            }
        }
    }

}
