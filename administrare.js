


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



document.getElementById("loginForm").addEventListener("submit", function(event) {
  var email = document.getElementById("disabledTextInput").value;
  var password = document.getElementById("disabledTextInput").value;

  if (!isValidEmail(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      event.preventDefault(); 
  } else if (password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres.");
      event.preventDefault(); 
  }
});

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}