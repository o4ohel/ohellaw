<?php
//Continue the session
session_start();

//Make sure that the input come from a posted form. Otherwise quit immediately
if ($_SERVER["REQUEST_METHOD"] <> "POST") 
 die("You can only reach this page by posting from the html form");

//set some variables
$name = $_REQUEST['Name'];
$email = $_REQUEST['Email'];
$phone = $_REQUEST['Phone'];
$comments = $_REQUEST['comments'];
$securityCode = $_REQUEST['txtCaptcha'];

$to="dohel@ohellaw.com";
//$to="sohel@sbcglobal.net";
$subject = "Customer Contact Request";
$body = "The following Customer has requested your response: \n\n";
$body .= "  Name: " . $name . "\n";
$body .= " Phone: " . $phone . "\n";
$body .= " Email: " . $email . "\n\n";
$body .= "Comments: \n" . $comments . "\n";
$headers = "From: webmaster@dohellaw.com\n";
//Check if the security code and the session value are not blank 
//and if the input text matches the stored text
if ( ($securityCode == $_SESSION["security_code"]) && (!empty($securityCode) && !empty($_SESSION["security_code"])) ) {
  mail($to,$subject,$body,$headers);
  echo "Thank you for your inquiry. &nbsp;Someone from the Law Offices of Doron Ohel will contact you shortly.";
} else {
  echo "Try entering the code again!";
}
?>
