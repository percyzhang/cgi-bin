<?php


class Report extends CI_Controller {
    
       function __construct()
    {
        parent::__construct();
        session_start();
        $this->load->helper('file');
        $this->load->model('User_model');
        $this->output->enable_profiler(false);
    }
    public function getRandom(){
        $min =1;
        $max =125;
       echo   rand($min,$max);
    }
    
    
    public function getUserAnalyzeData(){
        
        //echo "<p>明天:",date("Y-m-d",strtotime("+1 day")), "</p><br>"; 
        
         //echo "<p>后天:",date("Y-m-d",strtotime("-30 day")), "</p><br>"; 
         
        // echo "后天:",date("Y-m-d",strtotime("-2 day")), "<br>"; 
       // echo date('Y-m-j');
         $data =array(
             'categories' => array(),
            'series' => array()
             
        );
          
        $min =1;
        $max =125;
        for($i  =30;$i >=1; $i --){
            $str = '-' .$i  .' day';
            //echo $str;
            $dateStr =   date("Y-m-d",strtotime($str)) ;
             //echo '</br>';
            array_push($data['categories'],$dateStr);
             array_push($data['series'], array("name" =>$dateStr ,"y" => rand($min,$max)));
        }
        
//        $this->output
//                ->set_content_type('application/json')
//                ->set_output(json_encode(array('foo' => 'bar','foo1' =>'bar1')));
      //  data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
//         $this->output
//                ->set_content_type('application/json')
//                ->set_output(json_encode(array('categories' => array('7.0','6.9','9.5','14.5','18.2','21.5','25.2','26.5','23.3','18.3','13.9','100.6'))));
        
//        array_push($data, array("name" =>"2014-09-13" ,"y" =>66));
//        array_push($data, array("name" =>"2014-09-12" ,"y" =>66));
//        array_push($data, array("name" =>"2014-09-13" ,"y" =>66));
//        array_push($data, array("name" =>"2014-09-13" ,"y" =>66));
//        array_push($data, array("name" =>"2014-09-13" ,"y" =>66));
//        array_push($data, array("name" =>"2014-09-13" ,"y" =>66));
//        array_push($data, array("name" =>"2014-09-13" ,"y" =>66));
//        array_push($data, array("name" =>"2014-09-13" ,"y" =>66));
//        array_push($data, array("name" =>"2014-09-13" ,"y" =>66));
//        array_push($data, array("name" =>"2014-09-13" ,"y" =>66));
        $this->output  
                ->set_content_type('application/json;charset=utf-8')
                -> set_output(json_encode($data));
    }
    
    

    public function getAllUser() {
       // $this->load->helper('file');
       // $string = read_file('mock_data/mockUser');
       // echo $string;
        $data = array(
            'users' => array()
        );
       $userData= file("mock_data/mockUser");
       //echo $userData[0];
       $min =0;
        $max =1726;
        
        $pageIndex = $_SESSION['pageidx'];
        //$_SESSION['fansCount'];
       $pageCount =  ceil($_SESSION['fansCount']/10);
       $toGenerateNum = 10;
       if($pageIndex ==$pageCount ){
           $toGenerateNum = $_SESSION['fansCount'] -($pageCount -1)*10;
       }
        for($i =0;$i<$toGenerateNum;$i++){
            array_push($data['users'],$userData[ rand($min,$max)]);
        }
         $this->output  
                ->set_content_type('application/json;charset=utf-8')
                -> set_output(json_encode($data));
    }
    
    public function getGroupList($userid) {
         $data = array(
                'groups' => array(),
                // 'userList' => array()
            );
         $userid= $_SESSION['userid'] ;
         $query_result = $this->User_model ->queryUsersGroup($userid);
            if($query_result){
                foreach ($query_result->result() as $row)
               {
                    array_push($data['groups'], $row);
               }
            }
       
         $this->output  
                ->set_content_type('application/json;charset=utf-8')
                -> set_output(json_encode($data));
    }
    
}