<?php
require(APPPATH.'controllers/base_Controller.php');
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of masssendpage
 *
 * @author Administrator
 */
class Masssendpage extends Base_Controller{
    //put your code here
    function __construct()
    {
        parent::__construct();
    }
    
    public function index(){
        $this->load->helper('url');
        $this ->load ->view("head");
        parent::showHead('masssendpage');
        //$url = site_url().'/masssendpage?t=mass/send&token=891179693&lang=zh_CN';
      // $data['selectedClass']= 'selected';
         $this ->load ->view("masssendpage");
         
         //echo $url;
         //redirect($url);
    }
 
    
}
