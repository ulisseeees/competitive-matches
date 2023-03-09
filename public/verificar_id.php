<?php

// Verifica se o método de requisição é POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  
  // Obtém o ID da partida enviado via POST
  $partida_id = $_POST['partida-id'];
  
  // Abre a conexão com o banco de dados MySQL
  $conexao = mysqli_connect('localhost', 'root', '', 'competitivematches');
  
  // Verifica se a conexão foi bem sucedida
  if (!$conexao) {
    die('Erro ao conectar ao banco de dados');
  }
  
  // Prepara a consulta SQL para verificar se o ID da partida existe na tabela "partidas"
  $consulta = mysqli_prepare($conexao, "SELECT COUNT(*) FROM partidas WHERE id = ?");
  
  // Vincula o ID da partida à consulta SQL
  mysqli_stmt_bind_param($consulta, 's', $partida_id);
  
  // Executa a consulta SQL
  mysqli_stmt_execute($consulta);
  
  // Obtém o resultado da consulta SQL
  mysqli_stmt_bind_result($consulta, $resultado);
  
  // Lê o resultado da consulta SQL
  mysqli_stmt_fetch($consulta);
  
  // Verifica se o resultado é maior que 0 (ou seja, se o ID da partida existe)
  if ($resultado > 0) {
    // Redireciona o usuário para a página "partida.html"
    header('Location: partida.html');
    exit;
  } else {
    // Exibe uma mensagem de erro
    echo 'O ID da partida informado não existe.';
  }
  
  // Fecha a conexão com o banco de dados MySQL
  mysqli_close($conexao);
  
} else {
  // Se o método de requisição não for POST, exibe uma mensagem de erro
  echo 'Método de requisição inválido.';
}
