/*
Autor: Ruiz Armella Juan Nicolas
Ejercicio: TP 01
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let num1; let num2; let num3; let resultado; let suma;

    num1 = document.getElementById("txtIdPrecioUno").value;
    num1 = parseFloat(num1);
	num2 = document.getElementById("txtIdPrecioDos").value;
    num2 = parseFloat(num2);
    num3 = document.getElementById("txtIdPrecioTres").value;
    num3 = parseFloat(num3);

    suma = num1 + num2 + num3;

    resultado = suma;

    alert("La SUMA total es: " + resultado);
}
function Promedio () 
{
	let num1; let num2; let num3; let resultado; let promedio;

    num1 = document.getElementById("txtIdPrecioUno").value;
    num1 = parseFloat(num1);
	num2 = document.getElementById("txtIdPrecioDos").value;
    num2 = parseFloat(num2);
    num3 = document.getElementById("txtIdPrecioTres").value;
    num3 = parseFloat(num3);

    promedio = (num1 + num2 + num3) / 3;

    resultado = promedio;

    alert("El PROMEDIO es: " + resultado);
}
function PrecioFinal () 
{
	let num1; let num2; let num3; let iva; let suma; let resultado;

    num1 = document.getElementById("txtIdPrecioUno").value;
    num1 = parseFloat(num1);
	num2 = document.getElementById("txtIdPrecioDos").value;
    num2 = parseFloat(num2);
    num3 = document.getElementById("txtIdPrecioTres").value;
    num3 = parseFloat(num3);

    suma = num1 + num2 + num3;
    iva = suma * 21 / 100;

    resultado = suma + iva;

    alert("El PRECIO FINAL con IVA es: " + resultado);
}