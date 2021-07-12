function mostrar()
{
	let mes;
	
	//tomo el mes
	mes = document.getElementById("txtIdMes").value;
	
	switch(mes){

		case "Febrero":

			alert("Tiene 28 dias.");
			break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":

			alert("Tiene 30 dias.");
			break;
			
		// case "Enero":
		// case "Marzo":
		// case "Mayo":
		// case "Julio":
		// case "Agosto":
		// case "Octubre":
		// case "Diciembre":
		default:
			
			alert("Tiene 31 dias.");
			break;
	}
	



}//FIN DE LA FUNCIÓN