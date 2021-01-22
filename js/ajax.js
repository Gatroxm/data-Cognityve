function nuevoAjax(){
var xmlhttp=false;
 try {
  xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
 } catch (e) {
  try {
   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  } catch (E) {
   xmlhttp = false;
  }
 }

if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
  xmlhttp = new XMLHttpRequest();
}
return xmlhttp;
}

function enviarMail(){
	const newLocal = 'resultado_mensaje';
	c = document.getElementById(newLocal);
	let acepta = false;
	//variable=documenet.nombre_del_form.nombre_del_control.value
	const nombre=$('#enviar_email #nombre').val();
	const email=$('#enviar_email #email').val();
	const ciudad=$('#enviar_email #ciudad').val();
	const permisos=$('#enviar_email #permisos').prop('checked');
	if (permisos) {
		ajax=nuevoAjax();
		c.innerHTML = '<p style="text-align:center;"><img src="./img/esperando.gif"/></p>'; 
		ajax.open("POST", "../data-5/envia_mail.php",true);
		ajax.onreadystatechange=function() {
			if (ajax.readyState==4) {
				c.innerHTML = ajax.responseText;
				setTimeout(() => {
					c.innerHTML = '';
				}, 1000);
			}
			borrarCampos()
		}
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("nombre="+nombre+"&email="+email+"&ciudad="+ciudad);
	} else {
		c.innerHTML = '<p class="mt-3 mb-0 text-danger" style="text-align:center;">Debe aceptar los Permisos</p>'; 
	}
}

function borrarCampos(){
	$('#enviar_email #nombre9').val('');
	$('#enviar_email #email9').val('');
	$('#enviar_email #ciudad9').val('');
	$('#enviar_email #permisos9').val('');
	$('#enviar_email #nombre9').focus();
}