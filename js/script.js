// Manejo del formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;
    alert(`Gracias por contactarnos, ${nombre}. Te responderemos pronto a ${email}.`);
  });
  
  // Opcional: puedes agregar más interactividad o efectos con JavaScript si lo deseas.
  