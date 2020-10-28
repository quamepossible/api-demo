<?php 

    class controller extends model{

        //get db connection from model class
        public function getConn(){
            return $this->connect();
        }
    }