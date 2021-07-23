/*
Autor: Ruiz Armella Juan Nicolas
Ejercicio 06 While

Al presionar el botón pedir 5 números e informar
la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while(contador != 5)
	{
		contador= contador + 1;
		numeroIngresado=prompt('Ingrese un numero: ' + '(Posicion: ' +contador+')');
		numeroIngresado=parseInt(numeroIngresado);
		acumulador= acumulador + numeroIngresado;
	}

	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/5;
}//FIN DE LA FUNCIÓN