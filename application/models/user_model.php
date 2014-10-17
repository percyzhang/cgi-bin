<?php

class User_model extends CI_Model {

    function __construct()
    {
        $this->load->database();
        parent::__construct();
    }
    function insert_entry($fileName)
    {
        $data = array(
               'userid' => $this ->input->post('userid') ,
               'username' =>  $this ->input->post('username') ,
               'pwd' => $this ->input->post('pwd'),
                'useIImg'=>$fileName,
                'type' =>$this ->input->post('type'),
                'fansCount' =>  $this->input ->post("fansCount")
            );
        $this->db->insert('user', $data);
    }

    function query_user($userid,$pwd){
        $this->db->where('userid',$userid);
        $this->db->where('pwd',$pwd);
       // $this->db->select('字段');
        $query= $this->db->get('user');
        return  $query ->result_array();
    }
    
    //新添加组
    function addGroup($userid){
         $data = array(
               'userid' => $userid,
               'fansCount' => 0,
               'groupname' => $this ->input->post('groupname')
            );
        $this->db->insert('group', $data);
    }
    
    /**
     * 查询用户下所有的分组信息
     */
    function queryUsersGroup($userid){
        $this->db->where('userid',$userid);
        $query= $this->db->get('group');
        return $query;
    }
   /**
    * 
    * @param type $userid 公众账号id
    * @param type $count  往group里面添加的人数
    */
    function addFans2Group($userid,$groupid,$count){
        $this->db ->set('fansCount','fansCount + '.$count,false);
        $this->db->where('userid', $userid);
        $this->db->where('groupid', $groupid);
        return $this->db->update('group');
    }
    
    function renameGroup($userid,$groupid,$groupname){
         $data = array(
            'groupname' => $this->input->post('groupname')
        );
        $this->db->where('userid', $userid);
        $this->db->where('groupid', $groupid);
        return $this->db->update('group', $data);
    }
    
    function deleteGroup($groupid){
        $this->db->where('groupid', $groupid);
        return $this->db->delete('group');
    }
    
     public function getAllFans($userid){
        $this->load->helper('file');
        $data = array(
            'users' => array()
        );
       $userData= file("mock_data/mockUser");
       //echo $userData[0];
       $min =0;
        $max =1726;
        for($i =0;$i<10;$i++){
            array_push($data['users'],$userData[ rand($min,$max)]);
        }
//        $this->output  
//                ->set_content_type('application/json;charset=utf-8')
//                -> set_output(json_encode($data));
        return $data;
    }
}

