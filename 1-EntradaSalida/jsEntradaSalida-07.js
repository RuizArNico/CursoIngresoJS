/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


//Es recomendable declarar las variables dentro de cada bloque, de esta forma evitamos que si estan en el scope global se inicializen si no van a ser utilizadas en X momento.

// let num1; let num2; let resultado;

function sumar()
{	
	//las declaro dentro de la funcion en caso que solamente se ejecute esta funcion y no las demas. Evitamos cargar demas el scope global.
	let num1; let num2; let resultado;
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = num1 + num2;

	alert(`La Suma es: ${resultado}`);	
}

function restar()
{
	let num1; let num2; let resultado;
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = num1 - num2;

	alert(`La Resta es: ${resultado}`);

}

function multiplicar()
{
	let num1; let num2; let resultado;
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = num1 * num2;

	alert(`La Multiplicacion es: ${resultado}`);

}

function dividir()
{
	let num1; let num2; let resultado;
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = num1 / num2;

	alert(`La Division es: ${resultado}`);

}

