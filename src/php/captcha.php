<?php 
$largura= 110;
$altura=35;
$max_chars=6;
$padding=($largura/$altura);
$espaco_por_char=$largura/$max_chars;
$image=imagecreatetruecolor($largura,$altura);
$fundo_cor=imagecolorallocate($image,0x99,0xCC,0x65);
$azul_escuro=imagecolorallocate($image,0x99,0xc9,0xCC);
$preto=imagecolorallocate($image,0,0,0);
$branco=imagecolorallocate($image,255,255,255);


imagefill($image,0,0,$fundo_cor);
$random_char=function(){
    return chr(rand(65,90));
};

$path=realpath(".") . DIRECTORY_SEPARATOR . "fontscaptcha" . DIRECTORY_SEPARATOR ;
$fonts = array_diff(scandir($path),array(".",".."));

$captcha = "";
$tamanho_fonte = floor((40/100)*$altura) ;
$i=0;
foreach(range(0,$largura,$espaco_por_char)as $x){
    if($x < $largura){
        $char = $random_char();
        $captcha .= $char;
        $angulo = rand(0,45);
        imagettftext($image,$tamanho_fonte,$angulo,$x + ($tamanho_fonte/2),($tamanho_fonte * rand(1.5,2) + $padding),
    rand(0,1) ? $preto:$branco,
    $path . $fonts[array_rand($fonts)],
    $char 
    );
    }
}

for($i=0;$i<3;$i++){

    imagesetthickness($image,rand(1,2));
    imageline($image,rand(0,$largura),0,rand(0,$largura),$altura,$azul_escuro);
}

session_start();
$_SESSION['captcha']=$captcha;
header("Content-type:image/png");
imagepng($image);
imagedestroy($image);



