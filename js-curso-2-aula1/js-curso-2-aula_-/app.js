let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let contador= 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = (texto);
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Escolha um número aleatorio' );
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10:');
}

exibirMensagemInicial();

function verificarChute() {

    let chute = document.querySelector('input').value

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Certa resposta!');
        let palavraTentativa = contador > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${contador} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); //chamando pelo id e removendo atributo
    }

    else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('h1', 'Que Pena :(');
            exibirTextoNaTela('p',`O número é menor que ${chute}`);
        }

        else{
            exibirTextoNaTela('h1', 'Que Pena :(');
            exibirTextoNaTela('p', `O número é maior que ${chute}`);
        }
    }

    contador += 1
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido= parseInt(Math.random() *numeroLimite +1 );
    let quantidadeDeElementosNaLista= listaDeNumerosSorteados.length; 

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados=[]
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){

        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
        
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value='';
}

function reiniciarJogo(){
    numeroSecreto= gerarNumeroAleatorio();
    limparCampo();
    contador=1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)

}