const urlParams = new URLSearchParams(window.location.search);
const partidaId = urlParams.get('partidaId');

if (!partidaId) {
  window.location.href = 'index.html';
}

const socket = io();
const nomeInput = document.getElementById('nome');
const mensagemInput = document.getElementById('mensagem');
const enviarBtn = document.getElementById('enviar');
const mensagensContainer = document.getElementById('mensagens-container');
const listaJogadores = document.getElementById('lista-jogadores');

let nome = '';

function adicionarMensagem(mensagem) {
  const mensagemElement = document.createElement('div');
  mensagemElement.innerText = mensagem;
  mensagensContainer.append(mensagemElement);
}

function adicionarJogador(nome) {
  const jogadorElement = document.createElement('li');
  jogadorElement.innerText = nome;
  listaJogadores.append(jogadorElement);
}

function removerJogador(nome) {
  const jogadores = listaJogadores.getElementsByTagName('li');
  for (let i = 0; i < jogadores.length; i++) {
    if (jogadores[i].innerText === nome) {
      jogadores[i].remove();
    }
  }
}

nomeInput.addEventListener('change', (e) => {
  nome = e.target.value;
});

enviarBtn.addEventListener('click', () => {
  const mensagem = mensagemInput.value;
  if (mensagem) {
    socket.emit('mensagem', { nome, mensagem, partidaId });
    mensagemInput.value = '';
  }
});

socket.emit('entrarLobby', { nome, partidaId });

socket.on('mensagem', (data) => {
  adicionarMensagem(`${data.nome}: ${data.mensagem}`);
});

socket.on('jogadorEntrou', (data) => {
  adicionarMensagem(`${data.nome} entrou na partida.`);
  adicionarJogador(data.nome);
});

socket.on('jogadorSaiu', (data) => {
  adicionarMensagem(`${data.nome} saiu da partida.`);
  removerJogador(data.nome);
});

socket.on('listaJogadores', (data) => {
  data.forEach((jogador) => {
    adicionarJogador(jogador);
  });
});

socket.on('partidaInexistente', () => {
  window.location.href = 'index.html';
});
