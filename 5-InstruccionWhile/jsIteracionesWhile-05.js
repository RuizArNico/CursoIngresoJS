/*
Autor: Ruiz Armella Juan Nicolas
Ejercicio 05 While

Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m ."); // 1

	while(sexoIngresado != 'f' && sexoIngresado != 'm') // 2
	{
		sexoIngresado=prompt('Ingrese f para femenino o m para masculino.'); // 3
	}

	document.getElementById('txtIdSexo').value=sexoIngresado;
}//FIN DE LA FUNCIÓN