function aperte(value){
   alert(value);
}

var teclado = document.querySelector("section");
teclado.addEventListener('click', item); 

function item(evento){
   var input = evento.target
  console.log(input.value);
}