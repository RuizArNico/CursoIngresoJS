/*
Autor: Ruiz Armella Juan Nicolas
Ejercicio 02 While

al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/

function mostrar()
{
	var contador;
	contador=10; // 1

	while(contador > 0) // 2 
	{
		console.log(contador);
		contador = contador - 1; // 3
	}
	alert('iteración while');

}//FIN DE LA FUNCIÓN