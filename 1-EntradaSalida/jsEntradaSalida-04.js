/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let name;
	name = prompt("Ingrese un nombre: ");
	document.getElementById("txtIdNombre").value = name;

	alert(document.getElementById("txtIdNombre").value);
}

