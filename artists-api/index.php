<?php 
include 'myAuto.php';

//connect to database
$dbConnection = new controller;
$dbConnect = $dbConnection->getConn();

//check if url has GET data [name and value]
if(isset($_GET['name']) && !empty($_GET['name'])){
    $name = $_GET['name'];
    $name = '%'. $name . '%';
    
    $sql = "SELECT * FROM artists_table WHERE NAME LIKE :name OR STAGE_NAME LIKE :name";
    $stmt = $dbConnect->prepare($sql);
    $stmt->execute(['name' => $name]);
    $results = $stmt->fetchAll();

    //CHECK IF THERE'S ANY RESULT;
    if($stmt->rowCount() > 0){
        //RESULTS FOUND
            //SO CREATE AN ASSOCIATIVE ARRAY FOR RESULTS
        
        $artistArr = [];
        $count = 0;
        foreach($results as $allResults){
            $name = $allResults['NAME'];
            $stageName = $allResults['STAGE_NAME'];
            $dob = $allResults['DOB'];
            $genre = $allResults['GENRE'];
            $albums = $allResults['ALBUMS'];
            $label = $allResults['RECORD_LABEL'];
            $artistArr[$count] = ['name' => $name, 'stage' => $stageName, 'dob' => $dob, 'genre' => $genre, 'albums' => $albums, 'label' => $label];
            $count++;
        }
        echo json_encode($artistArr);
    }

    else{
        //NO RESULTS FOUND
        echo json_encode('empty');
    }
}

else{
    echo json_encode('enter');
}
    


