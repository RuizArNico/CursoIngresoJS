/*
Autor: Ruiz Armella Juan Nicolas
Ejercicio Switch 01

al seleccionar un mes  informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/
function mostrar()
{
	let mes;
	//tomo el mes
	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{

		case "Enero":
			alert("Que comiences bien el año!!!.");
			break;
		case "Marzo":
			alert("A clases!!!.");
			break;
		case "Julio":
			alert("Se vienen las vacaciones!!!.");
			break;
		case "Diciembre":
			alert("Felices fiesta!!!.");
			break;
		default:
			alert("Sin novedades. Ingrese otro mes.");
			break;
	}

}//FIN DE LA FUNCIÓN