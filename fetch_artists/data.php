<?php
    //GET name from input field
    if(isset($_POST['name'])){
        $name = $_POST['name'];
        $name = str_replace(' ', '%20', $name);

        //make an API call with NAME
        $url = "http://localhost/api-demo/artists-api/index.php?name=$name";
        $client = curl_init($url);
        curl_setopt($client, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($client);
        echo $response;

    }