/*
Autor: Ruiz Armella Juan Nicolas
Ejercicio: 09 BIS
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

function mostrarAumento()
{
	let importe; let porcentaje; let iva;
	//podemos usar parseFloat ya que un salario puede tener numeros decimales.
	//Hay una forma para que me muestre solamente los numeros que yo necesite como decimales.
	//ejemplo 2 numeros despues de la coma y no mas.
	//importe = parseInt(document.getElementById("txtIdSueldo").value);

	importe = document.getElementById("txtIdSueldo").value;
	importe = parseInt(importe);

	porcentaje = prompt("Ingrese porcentaje de aumento: ");
	porcentaje = parseInt(porcentaje);

	iva = importe + ((importe*porcentaje)/100);

	document.getElementById("txtIdResultado").value = iva;

}
