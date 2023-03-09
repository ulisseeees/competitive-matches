// Inicializa o Firebase
const config = {
    // Sua configuração do Firebase aqui
  };
  firebase.initializeApp(config);
  
  // Referência ao banco de dados
  const dbRef = firebase.database().ref();
  
  // Cria uma nova partida
  function criarPartida() {
    const modoJogo = document.querySelector('input[name="modoJogo"]:checked').value;
  
    // Adiciona a nova partida ao banco de dados
    const newPartidaRef = dbRef.child('partidas').push();
    newPartidaRef.set({
      modoJogo: modoJogo
    });
  
    // Redireciona para a página da partida com o ID da partida
    const idPartida = newPartidaRef.key;
    window.location.href = "/partida/" + idPartida;
  }
  
  // Entra em uma partida
  function entrarPartida() {
    const idPartida = document.querySelector('#idPartida').value;
  
    // Verifica se a partida existe no banco de dados
    dbRef.child('partidas').child(idPartida).get().then((snapshot) => {
      if (snapshot.exists()) {
        // Redireciona para a página da partida com o ID da partida
        window.location.href = "/partida/" + idPartida;
      } else {
        alert("Partida não encontrada!");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
  