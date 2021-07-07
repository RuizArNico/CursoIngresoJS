/*
Autor: Ruiz Armella Juan Nicolas
Ejercicio: TP 03
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let gFarhenheit; let pasajeaCelsius; let gCelsius;

    gFarhenheit = document.getElementById("txtIdTemperatura").value;
    gFarhenheit = parseFloat(gFarhenheit);

    pasajeaCelsius = (gFarhenheit - 32) / 1.8;
    
    gCelsius = pasajeaCelsius.toFixed(2);

    alert(gFarhenheit + " grados Fahrenheit son " + gCelsius + " grados Celsius.");
}

function CentigradosFahrenheit () 
{
	let gCelsius; let pasajeaFahrenheit; let gFarhenheit;

    gCelsius = document.getElementById("txtIdTemperatura").value;
    gCelsius = parseFloat(gCelsius);

    pasajeaFahrenheit = (gCelsius * 1.8) + 32;

    gFarhenheit = pasajeaFahrenheit;
    
    alert(gCelsius + " grados Celsius son " + pasajeaFahrenheit + " grados Fahrenheit.");
}
