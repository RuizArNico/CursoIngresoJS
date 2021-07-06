/*
Autor: Ruiz Armella Juan Nicolas
Ejercicio: 05
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let name; let age;

	name = document.getElementById("txtIdNombre").value;
	
	// age tambien podria pasarlo a entero con parseInt().
	age = document.getElementById("txtIdEdad").value;

	//mensaje = `Usted se llama ${name} y tiene ${age} años.`;
	mensaje = "Usted se llama " + name + "y tiene " + age + " años.";
	
	alert(mensaje);
}

