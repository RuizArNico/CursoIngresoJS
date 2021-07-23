/*
Autor: Ruiz Armella Juan Nicolas
Ejercicio 10 While

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta; var numeroIngresado; var sumaNegativos; var sumaPositivos; var contadorPositivo; var promedioPositivo;
	var promedioNegativo; var pares; var diferenciaPositivoNegativo; var contadorNegativo; var contadorCero;
	respuesta="si"; 
	sumaPositivos=0;
	sumaNegativos=0;
	contadorPositivo=0;
	contadorNegativo=0;
	contadorCero=0;

	while(respuesta=="si")
	{
		numeroIngresado=prompt('Ingrese un numero: ');
		numeroIngresado=parseFloat(numeroIngresado);
		if(numeroIngresado>0)
		{
			//2-Suma de los positivos.
			sumaPositivos=sumaPositivos+numeroIngresado;
			//3-Cantidad de positivos.
			contadorPositivo=contadorPositivo+1;
		}
		else
		{
			if(numeroIngresado<0)
			{
				//1-Suma de los negativos.
				sumaNegativos=sumaNegativos+numeroIngresado;
				//4-Cantidad de negativos.
				contadorNegativo=contadorNegativo+1;
			}
			else
			{
				//5-Cantidad de ceros.
				contadorCero=contadorCero+1;
			}
		}
		respuesta=prompt("desea continuar?");
	}//fin del while

	//7-Promedio de positivos.
	promedioPositivo=sumaPositivos/contadorPositivo;
	//8-Promedios de negativos.
	promedioNegativo=sumaNegativos/contadorNegativo;
	//9-Diferencia entre positivos y negativos, (positvos-negativos).
	diferenciaPositivoNegativo=sumaPositivos-sumaNegativos;
	//6-Cantidad de números pares.
	pares=diferenciaPositivoNegativo%2;
	if(pares==0)
	{
		pares=diferenciaPositivoNegativo/2;
	}
	else
	{
		pares=diferenciaPositivoNegativo-1;
		pares=pares/2;
	}

	document.write("la suma de negativos es : "+sumaNegativos);// 1-Suma de los negativos.
	document.write("<br>la suma de positivos es : "+sumaPositivos);// 2-Suma de los positivos.
	document.write("<br>la cantidad de positivos es : "+contadorPositivo);// 3-Cantidad de positivos.
	document.write("<br>la cantidad de negativos es : "+contadorNegativo);// 4-Cantidad de negativos.
	document.write("<br>la cantidad de ceros es : "+contadorCero);// 5-Cantidad de ceros.
	document.write("<br>la cantidad de numeros pares es : "+pares);// 6-Cantidad de números pares.
	document.write("<br>el promedio positivo es : "+promedioPositivo);// 7-Promedio de positivos.
	document.write("<br>el promedio negativos es : "+promedioNegativo);// 8-Promedios de negativos.
	document.write("<br>la diferencia entre positivos y negativos es : "+diferenciaPositivoNegativo);// 9-Diferencia entre positivos y negativos, (positvos-negativos).
}//FIN DE LA FUNCIÓN
// console.log(-324%2);
// console.log(-324/2);
// console.log(387-(-324));