/*
Autor: Ruiz Armella Juan Nicolas
Ejercicio: 10 BIS
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

function mostrarAumento()
{
	let importe; let descuento; let resultado;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	descuento = prompt("Ingrese descuento: ");
	descuento = parseInt(descuento);

	resultado = importe - ((importe*descuento)/100);

	document.getElementById("txtIdResultado").value = resultado;

}
