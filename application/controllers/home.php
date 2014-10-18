<?php

require 'base_Controller.php';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of home
 *
 * @author Administrator
 */
class Home extends  Base_Controller {
    //put your code here
       function __construct()
    {
        parent::__construct();
    }
    
    public function index(){
        $this->load->helper('url');
        $this ->load ->view("head");
        $this->showHead('home');
        $this->load->view('indexMain');
    }
}
