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
class message extends Base_Controller {

    //put your code here
    function __construct() {
        parent::__construct();
    }

    public function index() {
        $this->load->view("head");
        $this->showHead('message');
        $this->load->view("messageManager");
    }

}
