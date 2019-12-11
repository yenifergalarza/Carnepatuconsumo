<?php
session_start();

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$direccion = $_POST['direccion'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];


$body = "De : $nombre  $apellido <br> ";
$body .= "Desde : $direccion <br> ";
$body .= "Correo : $correo <br> ";
$body .= "Telefono : $telefono <br> ";
$body .= "Mensaje : $mensaje <br> ";


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './Exception.php';
require './PHPMailer.php';
require './SMTP.php';


// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer;

try {
    //Server settings
    $mail->SMTPDebug = 3;                    // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'yeniferalexandragapezo@gmail.com';                     // SMTP username
    $mail->Password   = 'Brazilazulbb123';                               // SMTP password
    $mail->SMTPSecure = "tls";         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted orrrr ssl
    $mail->Port       = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('yeniferalexandragapezo@gmail.com', 'yenifer');
    $mail->addAddress('yeniferalexandragapezo@gmail.com', 'Joe User');     // Add a recipient
   

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Hola envio el correo desde local host';
    $mail->Body    = $body;
    $mail -> CharSet = 'UTF-8';
    if(isset($_POST['captcha_challenge']) && ($_POST['captcha_challenge']) == $_SESSION['captcha']) {
       $mail->send();
 echo '<script>
    alert("el mensaje se envio correctamente");
    window.history.go(-1);
    </script>  ';
    }

    else{
        echo '<script>
        alert("el captcha es incorrecto");
    
        </script> ';
    }
  
   
} catch (Exception $e) {
    echo "hubo un error al enviar: {$mail->ErrorInfo}";
} ?>