/* 
Autor: Ruiz Armella Juan Nicolas
Ejercicio: 04
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let name;

	name = prompt("Ingrese un nombre: ");

	mensaje = "Su nombre es: " + name;

	document.getElementById("txtIdNombre").value = mensaje;

	
}

