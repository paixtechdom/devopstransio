<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods: POST');


require_once 'config.php';

// Get data from the React app
$fetchedData = json_decode(file_get_contents('php://input'), true);

$to = "management@cloudtransio.com";
$data = $fetchedData['data'];

// var_dump ($data);

$subject= $data['subject'];
$firstName= $data['firstName'];
$lastName= $data['lastName'];
$email= $data['email'];
$gender= $data['gender'];
$age= $data['age'];
$phoneNumber= $data['phoneNumber'];
$country= $data['country'];
$course= $data['course'];


$details = "";

foreach ($data as $key => $value) {
    if($key !== 'subject'){
        $details = $details . "<p><b>strtoupper($key):</b> $value </p>";
    }
}

$message = "
<!DOCTYPE html>
<html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta fullName='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Email to Onidson Travels and Logistics Ltd</title>
        <style>
            body{
                background-color: #e7e8eb;
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
            .p{
                padding: 5px
            }
            .image{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
            }
            .a{
                text-decoration: none;
            }
            .primary{
                font-size: 20px;
            }
            .font-bold{
                color: black;
                font-weight: bold;  
            }
        </style>
    </head>
    <body>
        <div class='container'>
            <!-- <div class='image'>
                <img src='../../assets/images/favicon.ico'/>
            </div> -->
            <hr>
            <br>
            <h2 class='primary font-bold'> $subject</h2>  
            <hr>          
            <h2 class='primary font-bold'> Student Details</h2>  
            $details
            <br>
            <br>
            <hr>
            <a href='https://cloudtransio.com' class='a font-bold'>
                <h2>  CLOUD TRANSIO </h2>
            </a> <br> <br>


        </div>
    </body>
</html>
";


echo $message;  



// $url = 'https://api.elasticemail.com/v2/email/send';

// try{
//         $post = array('from' => $to,
//         'fromName' => $fullName,
//         'apikey' => API_KEY,
//         'subject' => $subject,
//         'to' => $to,
//         'bodyHtml' => $message,
//         'bodyText' => 'Nessage Body',
//         'isTransactional' => false);
        
//         $ch = curl_init();
//         curl_setopt_array($ch, array(
//             CURLOPT_URL => $url,
//             CURLOPT_POST => true,
//             CURLOPT_POSTFIELDS => $post,
//             CURLOPT_RETURNTRANSFER => true,
//             CURLOPT_HEADER => false,
//             CURLOPT_SSL_VERIFYPEER => false
//         ));
        
//         $result=curl_exec ($ch);
//         curl_close ($ch);
        
//         echo $result;	
// }
// catch(Exception $ex){
//     echo $ex->getMessage();
// }
   






?>
