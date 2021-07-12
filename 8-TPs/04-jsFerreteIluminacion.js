/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra 
    marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let precioLamparas; let descuento; let marca; let importeFinal; let ingresosBrutos; let cantidadLamparas;

   precioLamparas = 35;
   cantidadLamparas = document.getElementById("txtIdCantidad").value;
   cantidadLamparas = parseInt(cantidadLamparas);
   marca = document.getElementById("Marca").value;

   switch(cantidadLamparas){

      case 3:
            precioLamparas = precioLamparas * 3;
            if(marca == "ArgentinaLuz"){
                  //descuento del 15
                  descuento = precioLamparas * 15 / 100;

            }else if(marca == "FelipeLamparas"){
                  //descuento del 10
                  descuento = precioLamparas * 10 / 100;

            }else{
                  //descuento del 5
                  descuento = precioLamparas * 5 / 100;
            }
            importeFinal = precioLamparas - descuento;

            document.getElementById("txtIdprecioDescuento").value = importeFinal;
            break;

      case 4:
            precioLamparas = precioLamparas * 4;
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                  //descuento del 25
                  descuento = precioLamparas * 25 / 100;

            }else{
                  //descuento del 20
                  descuento = precioLamparas * 20 / 100;
            }
            importeFinal = precioLamparas - descuento;

            document.getElementById("txtIdprecioDescuento").value = importeFinal;
            break;

      case 5:
            precioLamparas = precioLamparas * 5;
            if(marca == "ArgentinaLuz"){
                  //descuento del 40
                  descuento = precioLamparas * 40 / 100;

            }else{
                  //descuento del 30
                  descuento = precioLamparas * 30 / 100;
            }
            importeFinal = precioLamparas - descuento;

            document.getElementById("txtIdprecioDescuento").value = importeFinal;
            break;

      default:
            if(cantidadLamparas >= 6){
                  
                  precioLamparas = precioLamparas * cantidadLamparas;
                  //descuento del 50
                  descuento =  precioLamparas * 50 / 100;

                  importeFinal = precioLamparas - descuento;

                  document.getElementById("txtIdprecioDescuento").value = importeFinal;

            }else if(cantidadLamparas == 1 || cantidadLamparas == 2){
                  
                  precioLamparas = precioLamparas * cantidadLamparas;
                  
                  importeFinal = precioLamparas;

                  document.getElementById("txtIdprecioDescuento").value = importeFinal;

                  alert("No aplica descuento. Tampoco paga IIBB.")
            }
            break;
   }
   if(importeFinal >= 120){
      //10% de IIBB
      ingresosBrutos = importeFinal * 10 / 100;

      alert("Usted pago $" + ingresosBrutos + " de IIBB.");

   }
//    if( cantidadLamparas >= 6){

//          precioLamparas = precioLamparas * cantidadLamparas;

//          descuento =  precioLamparas * 50 / 100;

//          importeFinal = precioLamparas - descuento;

//          document.getElementById("txtIdprecioDescuento").value = importeFinal;

//    }else if(cantidadLamparas == 5 && marca == "ArgentinaLuz"){

//          precioLamparas = precioLamparas * cantidadLamparas;

//          descuento = precioLamparas * 40 / 100;

//          importeFinal = precioLamparas - descuento;
        
//          document.getElementById("txtIdprecioDescuento").value = importeFinal;

//    }else if(cantidadLamparas == 5 && marca != "ArgentinaLuz"){
        
//          precioLamparas = precioLamparas * cantidadLamparas;

//          descuento = precioLamparas * 30 / 100;

//          importeFinal = precioLamparas - descuento;

//          document.getElementById("txtIdprecioDescuento").value = importeFinal;

//    }else if(cantidadLamparas == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas")){
        
//          precioLamparas = precioLamparas * cantidadLamparas;

//          descuento = precioLamparas * 25 / 100;

//          importeFinal = precioLamparas - descuento;

//          document.getElementById("txtIdprecioDescuento").value = importeFinal;

//    }else if(cantidadLamparas == 4 && !(marca == "ArgentinaLuz" || marca == "FelipeLamparas")){
        
//          precioLamparas = precioLamparas * cantidadLamparas;

//          descuento = precioLamparas * 20 / 100;

//          importeFinal = precioLamparas - descuento;

//          document.getElementById("txtIdprecioDescuento").value = importeFinal;

//    }else if(cantidadLamparas == 3 && marca == "ArgentinaLuz"){

//          precioLamparas = precioLamparas * cantidadLamparas;

//          descuento = precioLamparas * 15 / 100;

//          importeFinal = precioLamparas - descuento;

//          document.getElementById("txtIdprecioDescuento").value = importeFinal;

//    }else if(cantidadLamparas == 3 && marca == "FelipeLamparas"){

//          precioLamparas = precioLamparas * cantidadLamparas;

//          descuento = precioLamparas * 10 / 100;

//          importeFinal = precioLamparas - descuento;

//          document.getElementById("txtIdprecioDescuento").value = importeFinal;
         
//    }else if(cantidadLamparas == 3 && !(marca == "ArgentinaLuz" || marca == "FelipeLamparas")){

//       precioLamparas = precioLamparas * cantidadLamparas;

//       descuento = precioLamparas * 5 / 100;

//       importeFinal = precioLamparas - descuento;

//       document.getElementById("txtIdprecioDescuento").value = importeFinal;
   
//    }

//    if(importeFinal >= 120){

//       ingresosBrutos = importeFinal * 10 / 100;

//       alert("Usted pago $" + ingresosBrutos + " de IIBB.");

//    }


}
