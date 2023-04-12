var newContent
function validaFechaMenor(campo){
        var bRet = false;
        var dHoy = new Date();
        var dCapt = null;
        if (campo.value == "")
          alert("Faltan datos");
        else{
          dCapt = validaFecha(campo.value);
          if (dCapt != null && dCapt < dHoy)
            bRet = true;
          else
            alert("La fecha debe ser menor a la fecha actual");
        }
        return bRet;
      }

        function validaFecha(valor){
        		var dConvertida = null;
        		var sAnio = "";
        		var sMes = "";
        		var sDia = "";
        		var nAnio=0, nMes=0, nDia = 0;

        		if (valor.substring(0,4)>0){
        			nDia = parseInt(valor.substring(8,10));
        			nMes = parseInt(valor.substring(5,7));
        			nAnio = parseInt(valor.substring(0,4));

        			if (nDia <1 || nDia>31)
        				alert("El día no es válido")
        			else{
        				if (nMes <1 || nMes>12)
        					alert("El mes no es válido");
        				else{
        					if ((nMes==1 || nMes==3 || nMes==5 || nMes==7 ||
        						 nMes==8 || nMes==10 || nMes==12) && nDia > 31)
        						 alert("El mes tiene máximo 31 días");
        					else if ((nMes==4 || nMes==6 || nMes==9 ||
        								nMes==11) && nDia > 30)
        						 alert("El mes tiene máximo 30 días");
        					else if ((nMes==2) && ((nDia>29) || (nAnio%4!=0 && nDia>28)))
        						 alert("Febrero tiene 28 días o 29 en bisiesto");
        					else{
        						dConvertida = new Date();
        						dConvertida.setFullYear(nAnio, nMes-1, nDia);
        					}//fin validaci�n día-mes
        				}//mes válido
        			}//día válido
              creasigno(nDia,nMes);
        		}//formato válido

        		else{
        			alert("No tiene formato de fecha");
        		}
        		return dConvertida;
        }

        function creasigno(nDia,nMes){

var newDiv = document.createElement("div");


        if((nDia>20) && (nMes==3) || (nDia <=20) && (nMes==4))
        newContent = document.createTextNode("SIGNO ARIES");
        else if ((nDia>20) && (nMes==4) || (nDia <=20) && (nMes==5))
          newContent = document.createTextNode("SIGNO TAURO");
          else if ((nDia>20) && (nMes==5) || (nDia <=20) && (nMes==6))
            newContent = document.createTextNode("SIGNO GEMINIS");
            else if ((nDia>20) && (nMes==6) || (nDia <=22) && (nMes==7))
              newContent = document.createTextNode("SIGNO CANCER");
              else if ((nDia>22) && (nMes==7) || (nDia <=23) && (nMes==8))
                newContent = document.createTextNode("SIGNO LEO");
                else if ((nDia>23) && (nMes==8) || (nDia <=22) && (nMes==9))
                  newContent = document.createTextNode("SIGNO VIRGO");
                  else if ((nDia>22) && (nMes==9) || (nDia <=22) && (nMes==10))
                    newContent = document.createTextNode("SIGNO LIBRA");
                    else if ((nDia>22) && (nMes==10) || (nDia <=22) && (nMes==11))
                      newContent = document.createTextNode("SIGNO ESCORPIO");
                      else if ((nDia>22) && (nMes==11) || (nDia <=21) && (nMes==12))
                        newContent = document.createTextNode("SIGNO SAGITARIO");
                        else if ((nDia>21) && (nMes==12) || (nDia <=21) && (nMes==1))
                          newContent = document.createTextNode("SIGNO CAPRICORNIO");
                          else if ((nDia>21) && (nMes==1) || (nDia <=21) && (nMes==2))
                            newContent = document.createTextNode("SIGNO ACUARIO");
                            else if ((nDia>22) && (nMes==21) || (nDia <=23) && (nMes==3))
                              newContent = document.createTextNode("SIGNO PICIS");





        //var newContent = document.createTextNode("SIGNO")q;
        newDiv.appendChild(newContent); //añade texto al div creado.

         // añade el elemento creado y su contenido al DOM
         var currentDiv = document.getElementById("div");
         document.body.insertBefore(newDiv, currentDiv);
        newDiv.style="border: 3px solid #999999; background-color:#54b51e; width: 80px ;height:100px; ";

//Numero de la suerte


function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var numeroAleatorio = generarNumeroAleatorio(1, 100);
console.log(newContent.textContent)
        
var div1 = document.createElement("div");

// Establecer atributos o propiedades para los divs (opcional)
div1.textContent = numeroAleatorio; // Establecer texto dentro del div1

// Añadir clases a los divs (opcional)
div1.classList.add("mi-clase"); // Añadir la clase "mi-clase" al div1

switch(newContent.textContent){
  case "SIGNO ARIES":
    div1.style="border: 3px solid #999999; background-color:#F4FA58; width: 80px ;height:100px ";
    break;
  case "SIGNO TAURO":
    div1.style="border: 3px solid #999999; background-color:#F781F3; width: 80px ;height:100px ";
    break;
  case "SIGNO GEMINIS":
    div1.style="border: 3px solid #999999; background-color:#58FA58; width: 80px ;height:100px ";
    break;
  case "SIGNO CANCER":
    div1.style="border: 3px solid #999999; background-color:#FF0040; width: 80px ;height:100px ";
    break;
  case "SIGNO LEO":
    div1.style="border: 3px solid #999999; background-color:#DBA901; width: 80px ;height:100px ";
    break;
  case "SIGNO VIRGO":
    div1.style="border: 3px solid #999999; background-color:#2E9AFE; width: 80px ;height:100px ";
    break;
  case "SIGNO LIBRA":
    div1.style="border: 3px solid #999999; background-color:#2EFEF7; width: 80px ;height:100px ";
    break;
  case "SIGNO ESCORPIO":
    div1.style="border: 3px solid #999999; background-color:#B4045F; width: 80px ;height:100px ";
    break;
  case "SIGNO SAGITARIO":
    div1.style="border: 3px solid #999999; background-color:#868A08; width: 80px ;height:100px ";
    break;
  case "SIGNO CAPRICORNIO":
    div1.style="border: 3px solid #999999; background-color:#642EFE; width: 80px ;height:100px ";
    break;
  case "SIGNO ACUARIO":
    div1.style="border: 3px solid #999999; background-color:#81F7F3; width: 80px ;height:100px ";
    break;
  case "SIGNO PICIS":
    div1.style="border: 3px solid #999999; background-color:#DF01D7; width: 80px ;height:100px ";
    break; 
}
// Añadir los divs al DOM
document.body.appendChild(div1); // Añadir div1 como un hijo del body


}