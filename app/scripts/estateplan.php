<?php
require('fpdf.php');


$input = file_get_contents('php://input');
$data = json_decode($input, true);
#print_r($data);
#$object = json_encode($input);

$filename = str_replace("@", "-", $data["client"]["email"]);
$file = fopen( $filename . ".json", "w" );
if( $file == false ) {
   echo ( "Error in opening new file" );
   exit();
}
fwrite( $file, $input );
fclose( $file );

$pdf = new FPDF();
#
#
#
## Add UTF-8 support (only add a Unicode font)
$pdf->AddFont('courier', '', 'courier.php', true);
$pdf->SetFont('courier', '', 12);

$pdf->SetTitle('My title');
$pdf->SetAuthor('My author');
$pdf->SetDisplayMode('fullpage', 'single');

$pdf->SetLeftMargin(20);
$pdf->SetRightMargin(20);

$pdf->AddPage();
$pdf->Cell(40,10,'Hello World!');

//Output the document
// $dir = "/G:/PDF/test.pdf/"; // full path like C:/xampp/htdocs/file/file/
// $pdf->Output($dir.$filename,'F');
$pdf->Output($filename . ".pdf", 'F');
// $pdf->Output();

//output some response to indicate success or whatever
$response['status'] = array(
'type' => 'success',
'value' => 'Form has been saved',
);
$encoded = json_encode($response);
header('Content-type: application/json');
exit($encoded);
?>