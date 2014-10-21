<?php 
require 'base_Controller.php';


class Index1 extends Base_Controller {
       function __construct()
    {
        parent::__construct();
       // session_start();
        $this->load->helper('url');
        $this->load->model('User_model');
        $this->output->enable_profiler(false);
        $this->load->helper('string');
    }
        //用户分析
        public function userAnalyze_user_summary(){
    
            $this->load->view("userAnalyze_user-summary");
        }
        //消息分析
         public function messageAnalyze_ctr_message(){
    
            $this->load->view("MessageAnalyze_ctr_message");
        }
        //接口分析
         public function interfaceAnalyze_ctr_interface(){
    
            $this->load->view("interfaceAnalyze_ctr_interface");
        }
        
        //加载图文分析页面
        public function ctr_article_detail(){
              $this->load->helper('url');
            $this->load->view("ctr_article_detail");
        }
        
        
        public function toChart(){
//            echo 'dddd';
            $this->load->view("chartTest");
        }
    
//        public function login(  ){
//            $this ->load ->view("loginpage" );
//        }
        
        public function doLogin(){
            
            $query_result = $this->User_model ->query_user( $this ->input->post('userid'), $this ->input->post('pwd'));
            if($query_result){
                 foreach ($query_result as $row)
                {
                   $_SESSION['userid'] = $row['userid'];
                   $_SESSION['username'] = $row['username'];
                   $_SESSION['useIImg'] = $row['useIImg'];
                   $_SESSION['type'] = $row['type'];
                   $_SESSION['fansCount'] =$row['fansCount'];
                }
                 
                $this->index();
                //parent::index();
            }
            else{
               $this ->login();
            }
       
         }
       
	public function index()
	{
            $this->load->helper('url');
            //$this ->load ->view("head");
            //parent::showHead('indexMain');
          //  $this->load->view('indexMain');
            echo site_url();
            redirect(site_url().'home');
       
	}
        function showHead(){
            $data = array(
                'userid' =>$_SESSION['userid'],
                'username' =>$_SESSION['username'],
                'useIImg' =>$_SESSION['useIImg'],
                 'type' =>$_SESSION['type']
            );
            $this ->load ->view("frame",$data);
        }
        
        
        
        public function ad(){
            $this->load->helper('url');
            //echo site_url();
            $this ->load ->view("head");
             $this->showHead();
            $this->load->view('AD');
        }
        
        public function auto_reply(){
            $this->load->helper('url');
            //echo site_url();
            $this ->load ->view("head");
             $this->showHead();
            
            $this ->load ->view("auto_reply");
        }
        
        public function devloperCenter(){
            $this->load->helper('url');
            //echo site_url();
            $this ->load ->view("head");
             $this->showHead();
            
            $this ->load ->view("devloperCenter");
        }
        
        public function gongzhonghaoSet(){
            $this->load->helper('url');
            $this ->load ->view("head");
             $this->showHead();
            
            $this ->load ->view("gongzhonghaoSet");
        }
        
        //interfaceAnalyze
        public function interfaceAnalyze(){
            $this->load->helper('url');
            $this ->load ->view("head");
             $this->showHead();
            
            $this ->load ->view("interfaceAnalyze");
        }
        public function liuliang(){
            $this->load->helper('url');
            $this ->load ->view("head");
             $this->showHead();
            
            $this ->load ->view("liuliang");
        }
        //masssendpage
//         public function masssendpage(){
//            $this->load->helper('url');
//            $this ->load ->view("head");
//             $this->showHead();
//            
//            $this ->load ->view("masssendpage");
//        }
        
        public function materiaManager(){
            $this->load->helper('url');
            $this ->load ->view("head");
             $this->showHead();
            
            $this ->load ->view("materiaManager");
        }
         public function MessageAnalyze(){
            $this->load->helper('url');
            $this ->load ->view("head");
             $this->showHead();
            
            $this ->load ->view("MessageAnalyze");
        }
        
        public function messageManager(){
             $this->load->helper('url');
            $this ->load ->view("head");
             $this->showHead();
            
            $this ->load ->view("messageManager");
        }
        
        public function mutipleCustomerService(){
               $this->load->helper('url');
            $this ->load ->view("head");
             $this->showHead();
            
            $this ->load ->view("mutipleCustomerService");
        }
        public function pictureTextAnalyze(){
              $this->load->helper('url');
            $this ->load ->view("head");
             $this->showHead();
            
            $this ->load ->view("pictureTextAnalyze");
            
        }
        public function plugincenter(){
                $this->load->helper('url');
            $this ->load ->view("head");
             $this->showHead();
            
            $this ->load ->view("plugincenter");
        }
        
        public function reportAnalyze(){
                $this->load->helper('url');
            $this ->load ->view("head");
             $this->showHead();
            
            $this ->load ->view("reportAnalyze");
        }
        public function securityCenter() {
                    $this->load->helper('url');
            $this ->load ->view("head");
             $this->showHead();
            
            $this ->load ->view("securityCenter");
        }
        
        //securityHelper
         public function securityHelper() {
            $this->load->helper('url');
            $this ->load ->view("head");
             $this->showHead();
            
            $this ->load ->view("securityHelper");
        }
        //sucaiManager
          public function sucaiManager() {
            $this->load->helper('url');
            $this ->load ->view("head");
             $this->showHead();
            
            $this ->load ->view("sucaiManager");
        }
        //userAnalyze
          public function userAnalyze() {
            $this->load->helper('url');
            $this ->load ->view("head");
             $this->showHead();
            $this ->load ->view("userAnalyze");
        }
        //userDefinedMenu
           public function userDefinedMenu() {
            $this->load->helper('url');
            $this ->load ->view("head");
             $this->showHead();
            
            $this ->load ->view("userDefinedMenu");
        }
        //userManager
           public function userManager() {
               
           //  echo $_GET['pageidx'];  通过这样可以直接过去URL中的参数 如:
               if(isset($_GET['pageidx'])){
                   $_SESSION['pageidx'] = $_GET['pageidx'];
               }
               else{
                   $_SESSION['pageidx'] = 1;
               }
            //index.php?c=products&m=view&id=345
             $this->output->enable_profiler(false);
          // $this->output->set_content_type('application/html;charset=utf-8');
            $this->load->helper('url');
           
            // $this->showHead();
//            $userid = $_SESSION['userid'];
            $userid='zhang';
            $data = array(
                'groups' => array(),
                // 'userList' => array()
            );
            //获得该公众号所有的粉丝
            $query_UserListResult = $this->User_model ->getAllFans($userid);
//            if($query_UserListResult){
//                foreach ($query_UserListResult->result() as $row)
//               {
//                    array_push($data['userList'], $row);
//               }
//            }
            array_push($data, $query_UserListResult);
            //array_push($data['userList'], $query_UserListResult['users']);
            //获得该公众号所有的粉丝分组
            $query_result = $this->User_model ->queryUsersGroup($userid);
            if($query_result){
                foreach ($query_result->result() as $row)
               {
                    array_push($data['groups'], $row);
               }
            }
            
           //var_dump ($data['groups']); 
//           foreach ($data as $key => $value) {
//               foreach ($value as $key2 => $value2) {
//                   
//               }
//           }
//            $arr1 = array(
//                'none' => array( 
//                    0=>array('name'=>'张三','age'=>'23','sex'=>'男'),
//                    1=>array('name'=>'李四','age'=>'43','sex'=>'女'),
//                    2=>array('name'=>'李四1','age'=>'43','sex'=>'女'),
//                ));
//            foreach($data['groups'] as $value){
//                 $data = array_chunk($value,3,true);
//                   print_r($data1[0]['name']);
//               
//            }
            
    
//                $data1 = array_chunk($data['groups'],2,true);
//                echo $data1[0];
//                foreach ($data1[0] as $key => $value) {
//                    echo $value[0];
//                }
            
            
            
//
//              $this->output  
//                ->set_content_type('application/json;charset=utf-8')
//                -> set_output(json_encode($data));
        //var_dump($data);
             $this ->load ->view("head");
              $this->showHead();
            $this ->load ->view("userManager",$data);
        }
        
        //weixinAuthentication
          public function weixinAuthentication() {
            $this->load->helper('url');
            $this ->load ->view("head");
             $this->showHead();
          
            $this ->load ->view("weixinAuthentication");
        }
        //weixinPay
         public function weixinPay() {
            $this->load->helper('url');
            $this ->load ->view("head");
             $this->showHead();
            
            $this ->load ->view("weixinPay");
        }
        
     public function logout()
   {
      session_destroy();
      //parent::login();
      $loginUrl = site_url().'loginpage?t=wxm2-login&lang=zh_CN';
      redirect($loginUrl);
   }
        
}
