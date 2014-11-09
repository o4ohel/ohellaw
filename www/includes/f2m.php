<html>
<head>
<style>
.leftcolumn { background-color:  #FFF7DF; font-size: 13px; color: #9E6F3A; font-weight: bold; }
</style>
</head>
<body>
<?php

$name = $_POST['Name'];
$email = $_POST['Email'];
$phone = $_POST['Phone'];

$to="dohel@ohellaw.com";
$subject = "Customer Contact Request";
$body = "The following Customer has requested your response: \n\n";
$body .= "  Name: " . $name . "\n";
$body .= " Phone: " . $phone . "\n";
$body .= " Email: " . $email . "\n\n";
$body .= "Comments: \n" . $comments . "\n";
$headers = "From: webmaster@dohellaw.com\n";

mail($to,$subject,$body,$headers);
?>

<div class="leftcolumn">
Thank you for your inquiry. &nbsp;The Law Offices of Doron Ohel will contact you shortly.
</div>

</body>
</html>