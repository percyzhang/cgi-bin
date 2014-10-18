<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require 'base_Controller.php';

/**
 * Description of merchant
 *
 * @author Administrator
 */
class merchant extends Base_Controller {

    //put your code here
    function __construct() {
        parent::__construct();
    }

    public function ad_client_index() {
        $this->load->view("head");
        $this->showHead('ad_client_index');
        $this->load->view('AD');
    }

    public function ad_host_index() {
        $this->load->view("head");
        $this->showHead('ad_host_index');
        $this->load->view("liuliang");
    }

    //微信认证
    public function store() {
        $this->load->view("head");
        $this->showHead('store');
        $this->load->view("weixinAuthentication");
    }

}
