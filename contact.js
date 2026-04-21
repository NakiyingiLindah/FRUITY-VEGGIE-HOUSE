document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let phone = "256772845457";

  let whatsappMessage = `Hello, my name is ${name}%0AEmail: ${email}%0AMessage: ${message}`;

  let url = `https://wa.me/${phone}?text=${whatsappMessage}`;

  window.open(url, "_blank");
});


