/*
Autor: Ruiz Armella Juan Nicolas
TP 12 RISING BTL

Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e 
ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 

12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada; var sexoIngresado; var estadoCivilIngresado; var sueldoBrutoIngresado; var legajoIngresado;
	var nacionalidadIngresada; var mensajeEstadoCivil; var mensajeNacionalidad;
	
	//  A.	Edad, entre 18 y 90 años inclusive.
	do
	{
		edadIngresada=prompt('Ingrese Edad, entre 18 y 90 años inclusive.');
		edadIngresada=parseInt(edadIngresada);

	}while(!(edadIngresada>17&&edadIngresada<91));
	//  B.	Sexo, “M” para masculino y “F” para femenino
	do
	{
		sexoIngresado=prompt('Sexo: (M para masculino o F para femenino)');
	}while(sexoIngresado!='M'&&sexoIngresado!='F');

	//  C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
	do
	{
		estadoCivilIngresado=prompt('Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos');
		estadoCivilIngresado=parseInt(estadoCivilIngresado);
		switch(estadoCivilIngresado)
		{
			case 1:
				mensajeEstadoCivil='Soltero';
				break;
			case 2:
				mensajeEstadoCivil='Casado';
				break;
			case 3:
				mensajeEstadoCivil='Divorciado';
				break;
			case 4:
				mensajeEstadoCivil='Viudo';
				break;
			default:
				alert('Por favor ingrese una opcion correcta.');
				break;
		}
	}while(!(estadoCivilIngresado>0&&estadoCivilIngresado<5));

	//  D.	Sueldo bruto, no menor a 8000.
	do
	{//CORREGIR OPCION D
		sueldoBrutoIngresado=prompt('Ingrese sueldo bruto no menor a 8000.');
		sueldoBrutoIngresado=parseInt(sueldoBrutoIngresado);
		
	}while(sueldoBrutoIngresado<8000);

	//  E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
	do
	{
		legajoIngresado=prompt('Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.');
		legajoIngresado=parseInt(legajoIngresado);
		
	}while(!(legajoIngresado>999 && legajoIngresado<10000));

	//  F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
	do
	{
		nacionalidadIngresada=prompt('Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.');
		switch(nacionalidadIngresada)
		{
			case 'A':
				mensajeNacionalidad='Argentino';
				break;
			case 'E':
				mensajeNacionalidad='Extranjero';
				break;
			case 'N':
				mensajeNacionalidad='Nacionalizado';
				break;
			default:
				alert('Por favor ingrese una opcion correcta.');
				break;
		}
	}while(nacionalidadIngresada!='A'&&nacionalidadIngresada!='E'&&nacionalidadIngresada!='N');
	

	//asignarla a cuadros de textos
	document.getElementById('txtIdEdad').value=edadIngresada;
	document.getElementById('txtIdSexo').value=sexoIngresado;
	document.getElementById('txtIdEstadoCivil').value=mensajeEstadoCivil;
	document.getElementById('txtIdSueldo').value=sueldoBrutoIngresado;
	document.getElementById('txtIdLegajo').value=legajoIngresado;
	document.getElementById('txtIdNacionalidad').value=mensajeNacionalidad;
}
