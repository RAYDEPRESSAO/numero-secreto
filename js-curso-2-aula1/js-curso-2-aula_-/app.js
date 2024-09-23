let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextonatela (tag,texto){
let campo = document.querySelector (tag)
campo.innerHTML = texto;

}
function mensagemInicial(){
   exibirTextonatela ("h1","Jogo do número misterioso");
   exibirTextonatela ("p","Escolha um Número entre 1 e 100");
}
mensagemInicial();

function verificarChute() {
   let chute = document.querySelector("input").value;
   console.log(chute == numeroSecreto);
   if (chute == numeroSecreto){
      exibirTextonatela ("h1", "acertou!");
      let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
      let mensagemTentativas = `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`;
      exibirTextonatela("p", mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute ('disabled');

      
      } else{
         if(chute > numeroSecreto){
            exibirTextonatela("p",`o número é menor que ${chute}`);
            }else{
             exibirTextonatela("p",`o número secreto é maior que ${chute}` ); 
            }
            tentativas++;
            limparCampo();
            
      }
   };

function gerarNumeroAleatorio (){
   let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
   
   if(quantidadeDeElementosNaLista == numeroLimite){
      listaDeNumerosSorteados = [];
   }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
      return gerarNumeroAleatorio();
   }else{
      listaDeNumerosSorteados.push(numeroEscolhido);
      return numeroEscolhido;
   }

   
};

function limparCampo(){
   chute = document.querySelector("input");
   chute.value = "";
}
function reiniciarJogo(){
   numeroSecreto = gerarNumeroAleatorio();
   limparCampo();
   tentativas= 1;
   mensagemInicial();
   document.getElementById ("reiniciar").setAttribute("disable", true);
}
