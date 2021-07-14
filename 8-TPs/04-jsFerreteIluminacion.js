/*
Autor: Ruiz Armella Juan Nicolas
TP 04 IF - correccion if anidado
4.	Para el departamento de iluminación:
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
      let precioLamparas; let descuento; let marca; let importeFinal; let ingresosBrutos; let cantidadLamparas; let mensaje; let calculoDescuento;
      precioLamparas = 35;
      cantidadLamparas = document.getElementById("txtIdCantidad").value;
      cantidadLamparas = parseInt(cantidadLamparas);
      marca = document.getElementById("Marca").value;
      
      precioLamparas = 35 * cantidadLamparas;
      // corregir la anidacion.
      //Opcion A
      if( cantidadLamparas > 5)
      {
         descuento =  50;
      }
      else
      {
            // Opcion B
            if(cantidadLamparas > 4)
            {
                  if(marca == "ArgentinaLuz")
                  {
                        descuento = 40;
                  }
                  else
                  {
                        descuento = 30;
                  }
            }
            else
            {
                  //Opcion C
                  if(cantidadLamparas > 3)
                  {
                        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                        {
                              descuento =  25;
                        }
                        else
                        {
                              descuento =  20;
                        }     
                  }
                  else
                  {
                        //Opcion D
                        if(cantidadLamparas < 3)
                        {
                              descuento = 0;
                        }
                        else
                        {
                              if(marca == "ArgentinaLuz")
                              {
                                    descuento =  15;
                              }
                              else
                              {
                                    if(marca == "FelipeLamparas")
                                    {
                                          descuento = 10 ;
                                    }
                                    else
                                    {
                                          descuento =  5;
                                    }
                              }
                        }
                  }
            }
            
      }

      calculoDescuento = precioLamparas * descuento / 100;
      //Opcion E      
      importeFinal = precioLamparas - calculoDescuento;
      document.getElementById("txtIdprecioDescuento").value = importeFinal;
      
      if(importeFinal > 119)
      {
            ingresosBrutos = importeFinal * 10 / 100;
            mensaje = "Usted pago $" + ingresosBrutos + " de IIBB.";
            alert(mensaje);
      }

}