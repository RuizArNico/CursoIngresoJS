/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let gFarhenheit; let pasajeaCelsius;

    gFarhenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

    pasajeaCelsius = (gFarhenheit - 32) / 1.8;

    alert(`${gFarhenheit} grados Fahrenheit son ${pasajeaCelsius.toFixed(2)} grados Celsius.`);
}

function CentigradosFahrenheit () 
{
	let gCelsius; let pasajeaFahrenheit;

    gCelsius = parseFloat(document.getElementById("txtIdTemperatura").value);

    pasajeaFahrenheit = (gCelsius * 1.8) + 32;

    alert(`${gCelsius} grados Celsius son ${pasajeaFahrenheit} grados Fahrenheit.`);
}
