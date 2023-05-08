const teclado = document.querySelector("section");
teclado.addEventListener('click', clicarNumero);

function colocarNumeroNaTela(numero) {
   const tela = document.querySelector("input[type=tel]")

   console.log(numero)
   if (tela.value.length < 8) {
      tela.value = tela.value + numero
   } 
   if (tela.value.length === 8){
      alert(tela.value)
   }
}

function clicarNumero(evento) {
   const numero_clicado = evento.target.value
   colocarNumeroNaTela(numero_clicado)
}

function recarregarAPagina(){
   window.location.reload();
} 
