let botao = document.getElementById('botao');
let chatbot = document.getElementById('chatbot');


botao.addEventListener('click', abrirBot);
botao.addEventListener('dbclick', fecharBot);

function abrirBot(){
    window.alert("Sou o seu BOT de investimentos, vamos começar?")
    chatbot.src='imagens/CHATBOT - LAYOUT.png';
}

function fecharBot(){
    
}
