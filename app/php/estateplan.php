<?php
require('fpdf.php');
#require_once "Mail.php";


$input = file_get_contents('php://input');
$data = json_decode($input, true);
#print_r($data);
#$object = json_encode($input);

$filename = str_replace("@", "-", $data["client"]["email"]);
$filename = sha1($filename);
$dir = "../db/";
$file = fopen( $dir . $filename . ".json", "w" );
if( $file == false ) {
   echo ( "Error in opening new file" );
   exit();
}
fwrite( $file, $input );
fclose( $file );

#$pdf = new FPDF();
#
#
#
## Add UTF-8 support (only add a Unicode font)
#$pdf->AddFont('courier', '', 'courier.php', true);
#$pdf->SetFont('courier', '', 12);

#$pdf->SetTitle('My title');
#$pdf->SetAuthor('My author');
#$pdf->SetDisplayMode('fullpage', 'single');

#$pdf->SetLeftMargin(20);
#$pdf->SetRightMargin(20);

#$pdf->AddPage();
#$pdf->Cell(40,10,'Hello World!');

#Output the document
#$pdf->Output($filename . ".pdf", 'F');


$to="o4ohel@gmail.com";
$subject = "Estate Plan";
$body = "The following Customer has requested your response: \n\n";
$body .= "    Name: " . $data["client"]["firstName"] . "\n";
$body .= "   Phone: " . $data["client"]["phone"] . "\n";
$body .= "   Email: " . $data["client"]["email"] . "\n\n";
$body .= "Comments: download the full form at: http://ohellaw.com/dist/#/estateplan/" . $filename . " \n\n";
$headers = "From: dohel@ohellaw.com\n";

mail($to,$subject,$body,$headers);

#$from = "Webmaster <webmaster@ohellaw.com>";
#$to = "Ofer Ohel <o4ohel@gmail.com>";
#$subject = "Estate Plan";
#$body = "The following Customer has requested your response: \n\n";
#$body .= "    Name: " . $data["client"]["firstName"] . "\n";
#$body .= "   Phone: " . $data["client"]["phone"] . "\n";
#$body .= "   Email: " . $data["client"]["email"] . "\n\n";
#$body .= "Comments: download the full form at: http://ohellaw.com/dist/#/estateplan/" . $filename . " \n\n";

#$host = "ssl://mail.goddady.com";
#$port = "465";
#$username = "smtp_username";
#$password = "smtp_password";

#$headers = array ('From' => $from, 'To' => $to, 'Subject' => $subject);
#$smtp = Mail::factory('smtp',
  #array ('host' => $host,
   #        'port' => $port,
   #        'auth' => true,
   #        'username' => $username,
   #        'password' => $password));

#$mail = $smtp->send($to, $headers, $body);
#if (PEAR::isError($mail)) {
	#echo("<p>" . $mail->getMessage() . "</p>");
#} else {
	#echo("<p>Message successfully sent!</p>");
#}

$response['status'] = array(
'file_saved' => 'success',
'value' => 'Form has been saved',
);
$encoded = json_encode($response);

header('Content-type: application/json');
exit($encoded);


?>