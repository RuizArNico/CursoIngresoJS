function mostrar()
{
	let edad; let estado;

	//tomo la edad  
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estado = document.getElementById("estadoCivil").value;

	if( edad < 18 && estado != "Soltero"){

		alert("Es muy pequeño para NO ser soltero.");

	}


}//FIN DE LA FUNCIÓN