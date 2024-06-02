


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('registroForm').addEventListener('submit', function(event) {
      var nombre = document.getElementById('disabledTextInput').value.trim();
      var apellido = document.getElementById('disabledTextInput').value.trim();
      var email = document.getElementById('disabledTextInput').value.trim();
      var nacimiento = document.getElementById('nacimientoInput').value.trim();
      var pais = document.getElementById('disabledSelect').value;
      var disabledFieldsetCheck = document.getElementById('disabledFieldsetCheck').checked;

      if (nombre === '' || apellido === '' || email === '' || nacimiento === '' || pais === '' || !terminosCheckbox) {
          alert('Por favor, completa todos los campos y acepta los términos y condiciones.');
         
      }
  });
});