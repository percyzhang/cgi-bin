<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require 'base_Controller.php';

/**
 * Description of advanced
 *
 * @author Administrator
 */
class Advanced extends Base_Controller {

    //put your code here
    //put your code here
    function __construct() {
        parent::__construct();
    }

    public function autoreply() {
        //echo site_url();
        $this->load->view("head");
        $this->showHead('autoreply');
        $this->load->view("auto_reply");
    }

    //自定义菜单
    public function selfmenu() {
        $this->load->view("head");
        $this->showHead('selfmenu');
        $this->load->view("userDefinedMenu");
    }

    //跳转到开发者中心
    public function advanceb() {
        $this->load->view("head");
        $this->showHead('advanceb');
        $this->load->view("devloperCenter");
    }

}
