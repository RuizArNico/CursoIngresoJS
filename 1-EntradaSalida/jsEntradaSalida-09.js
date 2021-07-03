/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let importe; let resAumento;
	importe = parseInt(document.getElementById("txtIdSueldo").value);
	// resAumento = importe * 1.1;
	resAumento = importe + ((importe*10)/100);
	alert(document.getElementById("txtIdResultado").value = resAumento);
}
