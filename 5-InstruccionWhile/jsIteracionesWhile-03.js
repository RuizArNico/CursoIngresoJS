/*
Autor: Ruiz Armella Juan Nicolas
Ejercicio 03 While

al presionar el botón pedir la CLAVE (ayuda: es utn750)*/

function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave."); // 1

	while(claveIngresada != 'utn750') // 2
	{
		claveIngresada = prompt('Clave incorrecta. Intente nuevamente: '); // 3
	}
	alert('Bienvenido.')
}//FIN DE LA FUNCIÓN
