<?php
require('fpdf.php');


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

#output some response to indicate success or whatever
$response['status'] = array(
'type' => 'success',
'value' => 'Form has been saved',
);
$encoded = json_encode($response);


#$to="o4ohel@gmail.com";
#$subject = "Estate Plan";
#$body = "The following Customer has requested your response: \n\n";
#$body .= "  Name: " . $data["client"]["firstName"] . "\n";
#$body .= " Phone: " . $data["client"]["phone"] . "\n";
#$body .= " Email: " . $data["client"]["email"] . "\n\n";
#$body .= "Comments: download the full form at: http://ohellaw.com/dist/#/estateplan/" . $filename . " \n";
#$headers = "From: webmaster@dohellaw.com\n";

#mail($to,$subject,$body,$headers);

header('Content-type: application/json');
exit($encoded);


?>