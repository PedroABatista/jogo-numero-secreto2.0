let numerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = numAleatorio();
let tentativas = 1;
// ola
function textoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

function mensagemInicial(){
    textoNaTela("h1", "Jogo do número secreto 2.0")
    textoNaTela("p", "Escolha um número de 1 a 50")
}


function verificarChute(){
    let chute = document.querySelector("input").value;
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let palavraTentativas = `Parabéns você acertou com ${tentativas} ${palavraTentativa}!`
        textoNaTela("h1", palavraTentativas);
        textoNaTela("p", "Obrigado por jogar!");
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if (numeroSecreto < chute){
            textoNaTela("p", "O número secreto é menor que o chute!");
        }else{
            textoNaTela("p", "O número secreto é maior que o chute!");
        }
        tentativas++;
        limparCampo();
    }
}

function numAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let elementosNaLista = numerosSorteados.length;

    if (elementosNaLista == numeroLimite){
        numerosSorteados = [];
    }


    if (numerosSorteados.includes(numeroEscolhido)){
        return numAleatorio();
    }else {
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }

}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value= "";
}

function reiniciarJogo(){
    numeroSecreto = numAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial()
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

mensagemInicial();