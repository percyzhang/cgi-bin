<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require 'base_Controller.php';

/**
 * Description of frame
 *
 * @author Administrator
 */
class frame extends Base_Controller {

    //put your code here
    //put your code here
    function __construct() {
        parent::__construct();
    }

    //跳转到微信支付
    public function index() {
        $this->load->view("head");
        $this->showHead('weixinpay');
        $this->load->view("weixinPay");
    }

}
