const express = require('express');
const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static('public'));

// Rota para a página principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Rota para a página de opções de jogos
app.get('/jogos', (req, res) => {
  res.sendFile(__dirname + '/jogos.html');
});

// Endpoint para retornar jogadores de uma partida pelo ID
app.get('/partida/:id/jogadores', (req, res) => {
  const idPartida = req.params.id;
  // Aqui você pode implementar a lógica para buscar os jogadores da partida pelo ID
  // e retorná-los em formato JSON
  const jogadores = ['Jogador 1', 'Jogador 2', 'Jogador 3'];
  res.json(jogadores);
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
