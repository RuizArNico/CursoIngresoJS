/*
Autor: Ruiz Armella Juan Nicolas
Ejercicio IF 07

Al ingresar una edad menor a 18 años y 
un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' 

*/

function mostrar()
{
	let edad; let estadoCivil; let mensaje;

	//tomo la edad  
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;

	mensaje = "Es muy pequeño para NO ser soltero.";

	if( edad < 18 && !(estadoCivil == "Soltero") )
	{

		alert(mensaje);

	}


}//FIN DE LA FUNCIÓN