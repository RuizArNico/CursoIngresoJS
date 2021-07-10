function mostrar()
{
	let age;

	//tomo la edad
	age = document.getElementById("txtIdEdad").value;
	age = parseInt(age);

	if( age >= 18 && age <= 65){
		
		alert("Usted es mayor de edad.");

	}else if( age >= 13 && age <= 17){

		alert("Usted es adolescente.");

	}else if( age >= 4 && age <= 12){

		alert("Usted es un niño.");

	}
	



}//FIN DE LA FUNCIÓN