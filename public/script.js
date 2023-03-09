// Obtém os elementos HTML relevantes
const modoJogo = document.querySelector('#modo-jogo');
const btnCriarPartida = document.querySelector('#btn-criar-partida');

// Define um objeto com as opções de modos de jogo e seus valores correspondentes
const opcoesModoJogo = {
  '1v1': 2,
  '2v2': 4,
  '3v3': 6,
  '4v4': 8
};

// Define uma função que será executada quando o botão de criar partida for clicado
function criarPartida() {
  // Obtém o modo de jogo selecionado
  const modoSelecionado = modoJogo.value;
  
  // Obtém o número de jogadores correspondente ao modo de jogo selecionado
  const numJogadores = opcoesModoJogo[modoSelecionado];
  
  // Gera um ID da partida aleatório
  const idPartida = Math.floor(Math.random() * 1000000);
  
  // Navega para a página da partida, passando o ID da partida e o número de jogadores como parâmetros na URL
  window.location.href = `partida.html?id=${idPartida}&jogadores=${numJogadores}`;
}

// Adiciona um evento de clique ao botão de criar partida, para chamar a função criarPartida()
btnCriarPartida.addEventListener('click', criarPartida);
