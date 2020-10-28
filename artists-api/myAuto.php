<?php
spl_autoload_register('loadClasses');

function loadClasses($myClass){
    $path = "sys/classes/";
    $ext = ".php";
    $fullPath = $path . $myClass . $ext;
    include_once $fullPath;
}