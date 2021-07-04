/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let importe; let resAumento;
	//podemos usar parseFloat ya que un salario puede tener numeros decimales.
	//Hay una forma para que me muestre solamente los numeros que yo necesite como decimales.
	//ejemplo 2 numeros despues de la coma y no mas.
	//importe = parseInt(document.getElementById("txtIdSueldo").value);

	importe = parseFloat(document.getElementById("txtIdSueldo").value);
	// resAumento = importe * 1.1;
	// resAumento = importe * 0.1;
	
	resAumento = importe + ((importe*10)/100);
	alert(document.getElementById("txtIdResultado").value = resAumento);
}
