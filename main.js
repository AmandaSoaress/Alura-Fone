

var teclado = document.querySelector("section");
teclado.addEventListener('click', item);

function item(evento) {
   var input = evento.target
   console.log(input.value);

}
const input = document.querySelector("input[type=tel]")
const Teclas = document.querySelectorAll("input[type=button]")
let txt = ""

function digitarNum(num) {
   txt = txt + num
   input.value = txt

}
for (let contador = 0; contador < Teclas.length; contador++) {
   const tecla = Teclas[contador]
   const valor = tecla.value
   tecla.onclick = function () {
      digitarNum(valor);
   }
}
function aperte(value) {
   alert(value);
}
