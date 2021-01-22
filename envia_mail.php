<?php
	$nombre = $_POST['nombre'];
	$email = $_POST['email'];
	$ciudad = $_POST['ciudad'];

	// print_r($_POST)
	//Estoy recibiendo el formulario, compongo el cuerpo
	$cuerpo = "<h1>Un mensaje para ti</h1>";
	$cuerpo .= "<p>Nombre " . $nombre . "</p>";
	$cuerpo .= "<p>Correo " . $email . "</p>";
	$cuerpo .= "<p>Ciudad: " . $ciudad . "</p>";

	$emisor = 'tavoxpau@gmail.com';
	// $cuerpo = $cuerpo.$mensaje;

	// //mando el correo...
	mail($destinatario,"Nuevo Mensaje",$cuerpo,"MIME-Version: 1.0\nContent-type: text/html; charset=UTF-8\nFrom: ".$emisor." < http://www.miweb.com >");
	
	// //doy las gracias por el envio
	echo "<div style=\"background-color:green;color:white;padding:4px;text-align:center;\">Gracias por rellenar el formulario. Se ha enviado correctamente.</div>";
?>