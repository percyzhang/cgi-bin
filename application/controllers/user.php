<?php

class User extends CI_Controller {
 
            function __construct()
            {
             parent::__construct();
             $this->load->helper(array('form', 'url'));
             $this->load->model('User_model');
            }

            function index()
            { 
                 $this->load->view('upload_form', array('error' => ' ' ));
            }

            function do_upload()
            {
                $this->output->enable_profiler(true);
                $config['upload_path'] = './uploads/';
                $config['allowed_types'] = 'gif|jpg|png';
                $config['max_size'] = '100';
                $config['max_width']  = '1024';
                $config['max_height']  = '768';
                $config['file_name']  = time();
                $this->load->library('upload', $config);
                
                if ( ! $this->upload->do_upload())
                {
                 $error = array('error' => $this->upload->display_errors());
                 $this->load->view('upload_form', $error);
                } 
                else
                {
                  //图片上传成功:
                 $data = array('upload_data' => $this->upload->data());
                 //var_dump($data);
                 $this->User_model ->insert_entry($data['upload_data']['file_name']);
                 
                  // foreach($data['upload_data'] as $item => $value){
                        //echo $item.":".$value."<br>";

               // }
                 $this->load->view('upload_success', $data);
                }
            } 
}
?>