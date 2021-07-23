/*
Autor: Ruiz Armella Juan Nicolas
Ejercicio 07 While

Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta == 'si')
	{
		contador= contador + 1;
		numeroIngresado=prompt('Ingrese un numero: ' + '(Posicion: ' +contador+')');
		numeroIngresado=parseInt(numeroIngresado);
		acumulador= acumulador + numeroIngresado;
		respuesta=prompt('Desea continuar? ingrese "si" o "no"');
	}

	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN