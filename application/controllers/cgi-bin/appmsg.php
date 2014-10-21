<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require(APPPATH.'controllers/base_Controller.php');

/**
 * Description of appmsg
 *
 * @author Administrator
 */
class appmsg extends Base_Controller {

    //put your code here
    //put your code here
    function __construct() {
        parent::__construct();
    }

    //素材管理
    public function index() {
        $this->load->helper('url');
        $this->load->view("head");
        $this->showHead('appmsg');
        $this->load->view("sucaiManager");
    }

}
