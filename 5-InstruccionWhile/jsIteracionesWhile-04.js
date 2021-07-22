/*
Autor: Ruiz Armella Juan Nicolas
Ejercicio 04 While

al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10."); // 1
	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado > 10) // 2 numero < 0 || numero > 10
	{
		numeroIngresado = prompt('Numero incorrecto. Ingrese un numero entre 0 y 10.'); // 3
		
	}
	document.getElementById('txtIdNumero').value = numeroIngresado;
}//FIN DE LA FUNCIÓN