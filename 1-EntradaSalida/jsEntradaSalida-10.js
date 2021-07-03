/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe; let resDesc;

	importe = parseInt(document.getElementById("txtIdImporte").value);
	resDesc = importe - ((importe*25)/100);

	alert(document.getElementById("txtIdResultado").value = resDesc);
}
