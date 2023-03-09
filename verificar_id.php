<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "competitivematches";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Verificação se a conexão foi bem sucedida
if (!$conn) {
  die("Conexão falhou: " . mysqli_connect_error());
}

// Recebimento do ID da partida do formulário
$partida_id = $_POST["partida_id"];

// Consulta ao banco de dados para verificar se a partida existe
$sql = "SELECT * FROM partidas WHERE id = '$partida_id'";
$result = mysqli_query($conn, $sql);

// Verificação do resultado da consulta
if (mysqli_num_rows($result) > 0) {
  // A partida existe, redirecionamento para o lobby
  header("Location: lobby.php?partida_id=".$partida_id);
} else {
  // A partida não existe, mensagem de erro
  echo "Partida não encontrada";
}

// Fechamento da conexão com o banco de dados
mysqli_close($conn);
?>
