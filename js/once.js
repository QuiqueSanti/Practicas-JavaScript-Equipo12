function valida(campo){
  var status = false;
  var datito = document.getElementById("res");

      var bRet = false;
      if (campo.value == ""){

        datito.innerHTML = "Faltan datos";
      }
      else  if (!campo.value.match(/^[A-Z]{3,4}[0-9]{6}[A-Z]{3}[0-9]{2}$/)){
                datito.innerHTML = "No tiene formato de RFC";
            }
        else{
          bRet = true;
        }
      return bRet;
    }

 