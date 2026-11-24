const formulario = document.getElementById("formContato");
const mensagemSucesso = document.getElementById("mensagemSucesso");

formulario.addEventListener("submit", function (evento) {

  evento.preventDefault();

  mensagemSucesso.classList.remove("d-none");

  formulario.reset();

  setTimeout(function () {
    mensagemSucesso.classList.add("d-none");
  }, 5000);
});