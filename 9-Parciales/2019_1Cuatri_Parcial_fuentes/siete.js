/*
Autor: Ruiz Armella Juan Nicolas
Parcial 2019 07

Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , el sexo.
(validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.
*/

function mostrar()
{
    var contadorJugadores; var cantidadMujeres; var sumaAltura; var ingresoAltura; var ingresoSexo; var promedioAltura; var banderaInicio; var alturaMinima;
    var sexoAlturaMinima;
    contadorJugadores=1; cantidadMujeres=0; var sumaAltura=0; banderaInicio=0;

    while(contadorJugadores<6)
    {
        do
        {
            ingresoAltura=prompt('Por favor ingrese altura del jugador, entre 0 y 250 centimetros.');
            ingresoAltura=parseInt(ingresoAltura);
            
        }while(ingresoAltura<0 || ingresoAltura>250);
        
        do
        {
            ingresoSexo=prompt('Por favor ingrese el sexo: ("f" para femenino o "m" para masculino)');
            // C- Contar cantidad de mujeres con altura superior a 190cm.
            if(ingresoSexo=='f')
            {
                if(ingresoAltura>189)
                {
                    cantidadMujeres=cantidadMujeres+1;
                }
            }
        }while(ingresoSexo!='f'&&ingresoSexo!='m');
        
        // B- Altura minima y sexo de la persona.
        if(banderaInicio==0)
        {
            alturaMinima=ingresoAltura;
            banderaInicio=1;
        }
        if(ingresoAltura<alturaMinima)
        {
            alturaMinima=ingresoAltura;
            sexoAlturaMinima= ingresoSexo;
        }
        sumaAltura=sumaAltura+ingresoAltura;
        contadorJugadores=contadorJugadores+1;
    }
    promedioAltura=sumaAltura/contadorJugadores; // A- Calcular el promedio de altura de jugadores.

    //INFORMAR
    alert('Promedio de alturas totales: '+promedioAltura);
    alert('La altura mas baja es de: '+alturaMinima+' y el sexo es: '+ sexoAlturaMinima);
    alert('Mujeres que superan los 190cm: '+cantidadMujeres+' mujeres.');
}











// var ingresoAltura; var ingresoSexo; var promedioAltura; var alturaMaxima; var alturaMinima; var cantidadMujeres; var contadorGeneral;
// contadorGeneral=0;
// cantidadMujeres=0;


// // ingreso por prompt de las alturas en centimetros(validar entre 0 y 250)
// do
// {
//     ingresoAltura=prompt('Por favor ingrese altura del jugador, entre 0 y 250 centimetros.');
//     ingresoAltura=parseInt(ingresoAltura);
//     contadorGeneral=contadorGeneral+1;
//     //a) El promedio de las alturas totales.
//     // el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet
//     do
//     {
//         ingresoSexo=prompt('Por favor ingrese el sexo: ("f" para femenino o "m" para masculino)');
//         //b) La altura más baja y el sexo de esa persona.
//         if(ingresoSexo=='f')
//         {
//             //c) La cantidad de muheres que su altura supere los 190 centimetros.
//             cantidadMujeres=cantidadMujeres+1;
//         }
//         else
//         {
            
//         }
//     }while(ingresoSexo!='f'&&ingresoSexo!='m');
// }while(contadorGeneral<6 && ingresoAltura<0 && ingresoAltura>250); //nota, verificar si está bien planteado. puede ser que tenga que negar el bloque de ingresoAltura.

// //calcular
// promedioAltura=ingresoAltura/5;
// //=======informar por alert()=========
// //promedioAltura
// //alturaMinima y sexo de la persona.
// //cuantas mujeres que superen los 190cm.
