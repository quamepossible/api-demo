<?php
    class model extends dbconn{

        protected function connect(){
            return $this->dbConnect();
        }

        protected function getList(){
            $sql = "SELECT * FROM artists_table";
            $stmt = $this->dbConnect()->prepare($sql);
            $stmt->execute();
            return $stmt;
        }
    }