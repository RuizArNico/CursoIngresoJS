/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno 
    para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo; let ancho; let perimetro; let resultado;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    
    perimetro = (largo + ancho) * 2;

    resultado = perimetro * 3;

    alert(`Usted debe comprar ${resultado} metros de alambre.`);

}
function Circulo () 
{
	let radio; let perimetro; let resultado;

    radio = parseFloat(document.getElementById("txtIdRadio").value);
    
    perimetro = 2*(Math.PI.toFixed(2))*radio;

    resultado = perimetro * 3;

    alert(`Usted debe comprar ${resultado} metros de alambre.`);
}
function Materiales () 
{
	let areaTerrenoRectangular; let largo; let ancho; let bolsaCemento=2; let bolsaCal=3;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    areaTerrenoRectangular = largo * ancho;
    bolsaCemento = bolsaCemento * areaTerrenoRectangular;
    bolsaCal = bolsaCal * areaTerrenoRectangular;

    alert(`Para ${areaTerrenoRectangular} mts2 de terreno, necesita ${bolsaCemento} bolsa/s de cemento y ${bolsaCal} bolsa/s de cal.`);
}