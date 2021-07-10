function mostrar()
{
	let numRandom;

	//Genero el número RANDOM entre 1 y 10 
	numRandom = Math.floor(Math.random()* 10) + 1 ;

	if( numRandom == 9 || numRandom == 10 ){

		alert("EXCELENTE. Nota: " + numRandom);

	}else if( numRandom > 4 && numRandom <= 8 ){

		alert("APROBÓ. Nota: " + numRandom);

	}else if( numRandom <= 4){

		alert("Vamos, la proxima se puede. Nota: " + numRandom);

	}
	

}//FIN DE LA FUNCIÓN