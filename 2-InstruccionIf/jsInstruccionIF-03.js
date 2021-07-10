function mostrar()
{
	let age;

	//tomo la edad  
	age = document.getElementById("txtIdEdad").value;
	age = parseInt(age);

	if(age >= 18)
	{
		alert("Usted es mayor de edad.");
	}else if( age < 18 )
	{
		alert("Usted es menor de edad.");
	}
	

}//FIN DE LA FUNCIÓN