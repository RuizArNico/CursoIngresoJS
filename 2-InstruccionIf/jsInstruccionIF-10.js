/*
Autor: Ruiz Armella Juan Nicolas
Ejercicio IF 10

Al presionar el Bot&oacute;n, 
asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	let numRandom; let mensaje;

	numRandom = Math.floor(Math.random() * 10 + 1) ;

	if( numRandom == 9 || numRandom == 10 )
	{

		mensaje = "EXCELENTE. Nota: " + numRandom;

	}
	else
	{ 
		if( numRandom > 3)
		{

			mensaje = "APROBÓ. Nota: " + numRandom;

		}
		else
		{
			
			mensaje = "Vamos, la proxima se puede. Nota: " + numRandom;
			
		} 
	}

	alert(mensaje);
	

}//FIN DE LA FUNCIÓN