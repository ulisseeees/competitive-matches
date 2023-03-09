const btnEncontrar = document.getElementById("btn-encontrar");
const jogosMenu = document.getElementById("jogos-menu");
const btnIniciar = document.getElementById("btn-iniciar");
const jogos = document.getElementById("jogos");

btnEncontrar.addEventListener("click", () => {
  jogosMenu.style.display = "block";
});

btnIniciar.addEventListener("click", () => {
  const jogoSelecionado = jogos.value;
  if (jogoSelecionado) {
    alert(`Iniciando partida de ${jogoSelecionado}...`);
  } else {
    alert("Por favor, selecione um jogo!");
  }
  jogosMenu.style.display = "none";
});
