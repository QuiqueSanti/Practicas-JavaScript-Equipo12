document.addEventListener('DOMContentLoaded', function() {
  
  var numero = prompt("Introduce un n\u00famero y se mostrar\u00e1 su factorial");
  var resultado = 1;

  for(var i=1; i<=numero; i++) {
  resultado *= i;
  }

  var resultadoParrafo = document.getElementById("miDato");

  // Modificar el contenido de la etiqueta p con el resultado de la operación
  resultadoParrafo.textContent = `El factorial de ${numero} es ${resultado}`;
});





