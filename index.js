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

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
