/*
Autor: Ruiz Armella Juan Nicolas
Ejercicio 01 Switch

al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/

function mostrar()
{
	var contador;
	contador=0; // 1
// excepto que nos diga que es descendente. la variable inicializada
	while(contador < 10) // 2 
	{
		contador = contador + 1; // 3
		console.log(contador);
	}
	alert('iteración while');
}//FIN DE LA FUNCIÓN



// while de validacion.

// var edad;
// edad = 15; // 1- inicializar la variable.

// // tienen que ver como un conjunto el 1 2 y 3.

// while(edad < 18) // 2- puede hacer que no entre nunca o que si ingrese.
// {
// 	// 3 - cambia la logica para que salga del while.
// 	edad=prompt("ingrese edad");
// 	edad=parseInt(edad);
// 	console.log('No es mayor a 18.'); 
// }