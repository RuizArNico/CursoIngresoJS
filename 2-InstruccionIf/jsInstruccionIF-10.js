function mostrar()
{
	let numRandom;

	//Genero el número RANDOM entre 1 y 10 
	// Math.random() * (maximo - minimo) - minimo;
	// Ejemplo --------(  10   -   1   ) -   1   ;
	
	// Math.floor lleva el numero entero anterior. Ej: 6.234 o 6.987 es igual a 6.

	numRandom = Math.round(Math.random() * 10 + 1) ;

	if( numRandom == 9 || numRandom == 10 ){

		alert("EXCELENTE. Nota: " + numRandom);

	}else if( numRandom >= 4 && numRandom <= 8 ){

		alert("APROBÓ. Nota: " + numRandom);

	}else if( numRandom < 4){

		alert("Vamos, la proxima se puede. Nota: " + numRandom);

	}
	

}//FIN DE LA FUNCIÓN