/*
Autor: Ruiz Armella Juan Nicolas
Ejercicio IF 09

Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive.
*/

function mostrar()
{
	let numRandom;

	//Genero el número RANDOM entre 1 y 10 

	numRandom = Math.floor(Math.random()* 10) + 1;

	alert(numRandom);	

}//FIN DE LA FUNCIÓN