function mostrar()
{
	let age;

	//tomo la edad  
	age = document.getElementById("txtIdEdad").value;
	age = parseInt(age);

	if( age <= 12 || age >= 18 ){
		
		alert(" Usted no es adolecente");

	}


}//FIN DE LA FUNCIÓN