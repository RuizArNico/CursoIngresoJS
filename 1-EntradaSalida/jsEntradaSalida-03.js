/*
Autor: Ruiz Armella Juan Nicolas
Ejercicio: 03
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/

function mostrar()
{
	// var nombreIngresado;
	// nombreIngresado=txtIdNombre.value;
	// alert(nombreIngresado);

	// Alternativa del codigo, utilizamos document y getElementById para traer el value.
	
	let nombreIngresado;

	nombreIngresado = document.getElementById("txtIdNombre").value;

	alert(nombreIngresado);
}


