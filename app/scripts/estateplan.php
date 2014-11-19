<?php
require('fpdf.php');


$input = file_get_contents('php://input');
$data = json_decode($input, true);
#print_r($data);
#$object = json_encode($input);

$filename = str_replace("@", "-", $data["plan"]["client"]["email"]) . ".json";
$file = fopen( $filename, "w" );
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

$pdf->Output();
?>