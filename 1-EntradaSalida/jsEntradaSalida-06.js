/*
Autor: Ruiz Armella Juan Nicolas
Ejercicio: 06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar()
{
	let num1; let num2; let sum;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	sum = num1 + num2;

	alert("La suma es: " + sum);
	
}

