<?php
    //GET name from input field
    if(isset($_POST['name'])){
        $name = $_POST['name'];

        //make an API call with NAME to deezer
        $name = str_replace(' ', '-', $name);
        $url = "https://api.deezer.com/artist/$name";
        $client = curl_init($url);
        curl_setopt($client, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($client);
        echo $response;

    }