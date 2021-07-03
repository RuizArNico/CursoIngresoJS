/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


//tambien se pueden declarar las variables dentro de la primer funcion y funciona igual las operaciones.
let num1; let num2; let resultado;

function sumar()
{	
	// let num1; let num2; let resultado;
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = num1 + num2;

	alert(`La Suma es: ${resultado}`);	
}

function restar()
{
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = num1 - num2;

	alert(`La Resta es: ${resultado}`);

}

function multiplicar()
{ 
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = num1 * num2;

	alert(`La Multiplicacion es: ${resultado}`);

}

function dividir()
{
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = num1 / num2;

	alert(`La Division es: ${resultado}`);

}

