/*
Autor: Ruiz Armella Juan Nicolas
Ejercicio IF 08

Al ingresar una edad menor a 18 años y 
un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, 
mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/

function mostrar()
{
	let edad; let estadoCivil; let mensaje;

	//tomo la edad  
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;

	mensaje = "Es soltero y no es menor.";

	if( edad > 17 && estadoCivil == "Soltero"){

	alert(mensaje);

	}


}//FIN DE LA FUNCIÓN