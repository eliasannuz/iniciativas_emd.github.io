window.addEventListener("DOMContentLoaded", function() {
    var body = document.querySelector(".top");
    var images = ["https://img.freepik.com/foto-gratis/todos-sonrien-escuchan-grupo-personas-conferencia-negocios-aula-moderna-dia_146671-16288.jpg?w=1480&t=st=1687981329~exp=1687981929~hmac=ac5e9ecde71bd15f80267b96b6e56e91e4748f20982ad4ef3f5a34aec8b1ef25", 
    "https://img.freepik.com/foto-gratis/gente-negocios-dandose-mano_53876-13391.jpg?w=1480&t=st=1687981375~exp=1687981975~hmac=1d20a6f2b68679bcbcc2274547516a33e70e537d4900fc20b3426b0b8b3c9e18", 
    "https://img.freepik.com/foto-gratis/sistema-html-concepto-sitio-web_23-2150376750.jpg?w=1480&t=st=1687981454~exp=1687982054~hmac=e8b11c0883c31829497a5756864be8215679de49630109d646a361e23b720670"]; // Lista de imágenes en orden

    function cycleImages() {
      var currentIndex = images.indexOf(body.style.backgroundImage.slice(5, -2));
      var nextIndex = (currentIndex + 1) % images.length;
      body.style.backgroundImage = `url("${images[nextIndex]}")`;
      body.classList.add("loaded");
      setTimeout(function() {
        body.classList.add("next");
      }, 1000);
      setTimeout(function() {
        body.classList.remove("loaded", "next");
        cycleImages();
      }, 2500);
    }

    cycleImages();
  });

  