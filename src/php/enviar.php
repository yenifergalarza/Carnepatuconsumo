<?php 
//llamando a ls campos 
//$nombre = $_POST['nombre'];
//$apellido = $_POST['apellido'];
//$direccion = $_POST['direccion'];
//$correo = $_POST['correo'];
//$telefono = $_POST['telefono'];
//$mensaje = $_POST['mensaje'];

//datos consultas@diamanteperu.com
//$destinatario="yeniferalexandragapezo@gmail.com";
//$asunto = "contacto desde nuestra web";

//$carta = "De : $nombre + $apellido \n ";
//$carta .= "Desde : $direccion \n ";
//$carta .= "Correo : $correo \n ";
//$carta .= "Telefono : $telefono \n "
//$carta .= "Mensaje : $mensaje  ";


//enviando Mensaje
//mail($destinatario,$asunto,$carta);
//header('Location:Home.jsx');

?> 


<?php
$destino =$_POST["correo"];
$nombre = $_POST;
$correo="yenifer@henribarret.com";
$telefono = $_POST["telefono"];
$mensaje = $_POST["mensaje"];
$contenido="Nombre: ".$nombre + $apellido."\nCorreo: ".$correo."\ntelefono:".$telefono."\nMensaje: ".$mensaje."\nDireccion: ".$direccion;
 mail($destino,"Contacto", $contenido);
 header("Location: contacto.html");
                                                            ?>