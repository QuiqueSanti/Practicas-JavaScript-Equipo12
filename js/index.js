// Función para redirigir a la página correspondiente
    function redireccionar() {
      // Obtener el valor seleccionado de la lista desplegable
      var opcionSeleccionada = document.getElementById("opciones").value;

      // Redirigir a la página correspondiente según la opción seleccionada
      switch (opcionSeleccionada) {
        case "opcion1":
          window.location.href = "uno.html";
          break;
        case "opcion2":
          window.location.href = "dos.html";
          break;
        case "opcion3":
          window.location.href = "tres.html";
          break;
        case "opcion4":
          window.location.href = "cuatro.html";
          break;
        case "opcion5":
          window.location.href = "cinco.html";
          break;
        case "opcion6":
          window.location.href = "seis.html";
          break;
        case "opcion7":
          window.location.href = "siete.html";
          break;
        case "opcion8":
          window.location.href = "ocho.html";
          break;
        case "opcion9":
          window.location.href = "nueve.html";
          break;
        case "opcion10":
          window.location.href = "diez.html";
          break;
        case "opcion11":
          window.location.href = "once.html";
          break;
        case "opcion12":
          window.location.href = "doce.html";
          break;
        case "opcion13":
          window.location.href = "trece.html";
          break;
        case "opcion14":
          window.location.href = "catorce.html";
          break;
        case "opcion15":
          window.location.href = "quince.html";
          break;
        case "opcion16":
          window.location.href = "dieciseis.html";
          break; 
        case "opcion17":
          window.location.href = "diecisiete.html";
          break; 
        case "opcion18":
          window.location.href = "dieciocho.html";
          break; 
        case "opcion19":
          window.location.href = "diecinueve.html";
          break;
        case "opcion20":
          window.location.href = "veinte.html";
          break; 
        case "opcion21":
          window.location.href = "veintiuno.html";
          break; 
        case "opcion22":
          window.location.href = "veintidos.html";
          break; 
        case "opcion23":
          window.location.href = "veintitres.html";
          break;
        case "opcion24":
          window.location.href = "veinticuatro.html";
          break;
        case "opcion25":
          window.location.href = "veinticinco.html";
          break;
        case "opcion26":
          window.location.href = "veintiseis.html";
          break;                                           
        default:
            alert("Comando no definido");
          break;
      }
    }