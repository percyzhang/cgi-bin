<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of message_model
 *
 * @author Administrator
 */
class Message_model extends CI_Model {

    //put your code here

    function __construct() {
        $this->load->database();
        $this->load->helper('date');
        parent::__construct();
    }

    public function addMsg() {
        $data = array(
            'sendName' => $this->input->post('sendName'),
            'content' => $this->input->post('content'),
            'date' => $this->input->post('date'),
            'userid' => $this->input->post('userid')
        );
        $this->db->insert('xiaoxi', $data);
    }

    //获取全部消息
    public function getAllMessage($offset, $count, $days = '1') {
        $sql = "select * from xiaoxi where  userid = ? order by date desc limit ? ,?; ";
        $query = $this->db->query($sql, array($_SESSION['userid'], $offset, $count));
        return $query->result_array();
    }

    public function getMessageByDays($offset, $count, $days = '0') {
        //$day  =1 , 2, 3  分别代表今天， 昨天，前天,
        $sql = "select * from xiaoxi where  userid = ? and to_days(now()) - to_days(date) = ? order by date desc limit ? ,?; ";
        $query = $this->db->query($sql, array($_SESSION['userid'], $days, $offset, $count));
        return $query->result_array();
    }

    public function getMessageByDaysCount($offset, $count, $days = '0') {
//        $sql = "select count(*) from xiaoxi where  userid = ? and to_days(date) - to_days(now()) = ? order by date desc limit ? ,?; ";
//        $query = $this->db->query($sql, array($_SESSION['userid'], $days, $offset, $count));
//        return $query;
        $this->db->where('userid', $_SESSION['userid']);
        $this->db->where('to_days(now()) - to_days(date) =', $days);
        $this->db->from('xiaoxi');
        $this->db->limit($offset);
        $this->db->limit($count);
        return $total = $this->db->count_all_results();
    }

    public function getCount($offset, $count) {
        $this->db->where('userid', $_SESSION['userid']);
        $this->db->from('xiaoxi');
        $this->db->limit($offset);
        $this->db->limit($count);
        return $total = $this->db->count_all_results();
    }

}
