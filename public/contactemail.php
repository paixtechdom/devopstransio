<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods: POST');


require_once 'config.php';

// Get data from the React app
$data = json_decode(file_get_contents('php://input'), true);
// $to = $data['to'];
$to = "management@onidsontravels.com";
$subject= $data['subject'];
$message = $data['message'];
$phoneNumber = $data['phoneNumber'];
$from = $data['from'];
$name = $data['name'];

$message = '
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email to Onidson Travels and Logistics Ltd</title>
    <style>
        body{
            background-color: white;
        }
        .container {
            max-width: 600px;
            margin: 10px 20px;
        }
        .btn {
            display: inline-block;
            font-weight: 400;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            user-select: none;
            padding: 10px 30px;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: 0.25rem;
            transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }
        .btn-primary {
            color: #fff;
            background-color: rgb(3, 3, 78);
            border-color: rgb(3, 3, 78);
        }
        img{
            width: 15%;
        }
        .message{
            white-space: pre-line;
        }
        .image{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="image">
            <img src="../../assets/images/favicon.ico"/>
        </div>
        <hr>
        <br>
        <h2>' . $subject .' </h2>  <br>
        
        <p class="message">Name : '.  $name . '</p>
        <p class="message">Phone Number : '.  $phoneNumber . '</p> 
        <p class="message">Email: '.  $from . '</p> <br>

        <p class="message">'.  $message . '</p> <br>

        <a href="mailto:'.$from.'">Click to Reply mail</a>
        <br>
        <hr>
        <a href="https://onidsontravels.com">Onidson Travels and Logistics Ltd</a> <br> <br>


    </div>
</body>
</html>
';



    $url = 'https://api.elasticemail.com/v2/email/send';

    try{
            $post = array('from' => $to,
            'fromName' => $name,
            'apikey' => API_KEY,
            'subject' => $subject,
            'to' => $to,
            'bodyHtml' => $message,
            'bodyText' => 'Nessage Body',
            'isTransactional' => false);
            
            $ch = curl_init();
            curl_setopt_array($ch, array(
                CURLOPT_URL => $url,
                CURLOPT_POST => true,
                CURLOPT_POSTFIELDS => $post,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_HEADER => false,
                CURLOPT_SSL_VERIFYPEER => false
            ));
            
            $result=curl_exec ($ch);
            curl_close ($ch);
            
            echo $result;	
    }
    catch(Exception $ex){
        echo $ex->getMessage();
    }
   






?>
