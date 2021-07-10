function mostrar()
{
	let age;

	//tomo la edad
	age = document.getElementById("txtIdEdad").value;
	age = parseInt(age);

	if(age >= 13 && age <= 17){

		alert("Usted es adolescente.");
	}
	


}//FIN DE LA FUNCIÓN