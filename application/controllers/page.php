<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

class Page extends CI_Controller {

   function index()
   {
      
      $this->load->helper('url');
      $data = array(
          'users' =>array('你大爷')
      );
      
      $this->load->view('page',$data);
      echo "XXX";
      //$this->load->view('content');
      //$this->load->view('footer');
   }

   
   
}
?>
