<?php

if(isset($_POST['partida_id'])) {
    $partida_id = $_POST['partida_id'];

    // Conectar ao banco de dados MySQL
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "competitivematches";
    
    // Cria a conexão
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    
    // Verifica se a conexão foi bem sucedida
    if (!$conn) {
        die("Conexão falhou: " . mysqli_connect_error());
    }
    
    // Executa a query para verificar se a partida existe
    $sql = "SELECT * FROM partidas WHERE id = '$partida_id'";
    $result = mysqli_query($conn, $sql);
    
    // Verifica se a query retornou resultados
    if (mysqli_num_rows($result) > 0) {
        // A partida existe
        echo "Partida encontrada!";
    } else {
        // A partida não existe
        echo "Partida não encontrada!";
    }
    
    // Fecha a conexão
    mysqli_close($conn);
}
?>
