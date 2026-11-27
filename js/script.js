const pergunta = document.getElementById("pergunta");
const botaoEnviar = document.getElementById("enviar");
const mensagens = document.getElementById("mensagens");


function adicionarMensagem(texto, tipo) {

    const mensagem = document.createElement("div");

    mensagem.classList.add("mensagem");
    mensagem.classList.add(tipo);

    if (tipo === "mensagem-apolo") {

        mensagem.innerHTML =
           <><div class="avatar-pequeno">
                 <img src="img/apolo.png" alt="Apolo"></img>
            
            </div><div class="texto-mensagem">${texto}</div></>
         ;

    } else {

        const textoSeguro = document.createElement("div");
        textoSeguro.classList.add("texto-mensagem");
        textoSeguro.textContent = texto;

        mensagem.appendChild(textoSeguro);
        
    }
    mensagens.appendChild(mensagem);


    mensagens.scrollTop = mensagens.scrollHeight

}

function responderApolo(texto) {

    const textoPergunta = texto.toLowerCase()
        .normalize("NFD")
        .replace([\u0300-\u036f]/g, "");

    if (
        textoPergunta.includes("futuro") ||
        textoPergunta.includes("amanha")
    ) {
        return "O futuro é um caminho de possibilidades,mortal. Não temas o desconhecido. Tuas ecolhas de hoje ajudam a construir aquilo que encontrarás amanhã,";

    }


    else if (
        textoPergunta.includes("amor") ||
        textoPergunta.includes("paixao") ||
        textoPergunta.includes("namoro")
    ){

        return"O amor é uma das forças mais poderosas entre os mortais. Não procures apenas alguém que te complate, mas alguém com quem possa compartilhar tua jornada.";

    }

    else if(
        textoPergunta.includes("guera") ||
        textoPergunta.includes("batalha") ||
        textoPergunta.includes("inimigo")
    ){

        return"A força de um guerreiro não está apenas em sua espada, mas também em sua sabedoia. Antes de iniciar uma batalha, considera suas consequencias."; 

    }

    else if (
        textoPergunta.includes("plantacao") ||
        textoPergunta.includes("colheita") ||
        textoPergunta.includes("agricultura") ||
        textoPergunta.includes("terra")
    ) {

        return "A terra oferece seus frutos aqueles que sabem cuidar dela. Observa os sinais dos céus, prepara o solo e respeita o tempo da natureza.";

    }

    else if (
        textoPergunta.includes("viagem") ||
        textoPergunta.includes("viajar") ||
        textoPergunta.includes("cidade")
    ) {
        return "Toda jornada possui seus desafios. Antes de partir, conhece os caminhos e prepara teu espírito. A sabedoria acompanha aqueles que planejam seus passos.";

    }

    else if (
        textoPergunta.includes("familia") ||
        textoPergunta.includes("pais") ||
        textoPergunta.includes("filhos")
    ) {

        return "A família é um dos maiores tesouros dos mortais. Valoriza aqueles que caminham ao teu lado, pois os laços verdadeiros são mais fortes que o tempo";

    }

    else if (
        textoPergunta.includes("sabedoria") ||
        textoPergunta.includes("conhecimento") ||
        textoPergunta.includes("aprender")
    ){
        return "O conhecimento ilumina os caminhos que antes pareciam impossíveis. Nunca deixes de aprender, pois até os mais sábios possuem algo novo a descobrir.";

    }

    else if (
        textoPergunta.includes("deus") ||
        textoPergunta.includes("deuses") ||
        textoPergunta.includes("zeus") 
    ){
        return "Os deuses do Olimpo possuem diferentes poderes e responsabilidades. Eu, Apolo, sou associado á luz, á música, á cura e as profecias.";

    }

    else if (
        textoPergunta.includes("ola") ||
        textoPergunta.includes("saudacoes") ||
        textoPergunta.includes("bom dia") ||
        textoPergunta.includes("boa tarde")
    ){
        return "Saudações, mortal! Que a luz do Olimpo ilumine teus caminhos. Como posso orientar tua jornada";

    }

    else {

        const respostas = [

            "Interessante perhunta, mortal. A sabedoria começa quando buscamos compreender aquilo que ainda desconhecemos.",

            "Nem todas as respostas são reveladas imediatamente. Reflete sobre tua situação e encontrarás sinais pelo caminho.",

            "Os caminhos da vida são cheios de desafios. Usa tua razão e não permita que o medo controle tuas escolhas.",

            "Lemra-te: até os maiores heróis enfrentam dúvidas antes de encontrar seu destino.",

            "A luz pode mostrar o caminho, mas cabe a ti decidir qual direção seguir."

        ];

        const numero = Math.floor(Math.random() * respostas.length);

        return respostas[numero];

    }
}


function enviarPergunta() {

    const texto = pergunta.value.trim();


    if (texto === "") {
        alert("Digite uma pergunta para Apolo!");
        return;
    }

    adicionarMensagem(texto, "mensagem-usuario");

    pergunta.value = "";

    setTimeout(function() {

        const resposta = responderApolo(texto);

        adicionarMensagem(resposta, "mensagem-apolo");

    }, 700);

}


botaoEnviar.addEventListener("click", enviarPergunta);


pergunta.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        enviarPergunta();
    }

});
