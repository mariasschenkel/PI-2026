<?php
// Conexão com o banco de dados
$conn = new mysqli("localhost", "root", "", "inclusIA");

if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

// Verifica se os dados foram enviados corretamente
if (isset($_POST["nome"]) && isset($_POST["idade"])) {

    $nome = trim($_POST["nome"]);
    $idade = intval($_POST["idade"]); 

    $stmt = $conn->prepare("INSERT INTO usuarios (nome, idade) VALUES (?, ?)");
    if ($stmt) {
        $stmt->bind_param("si", $nome, $idade);

        if ($stmt->execute()) {
            echo "Cadastro realizado com sucesso!";
        } else {
            echo "Erro ao cadastrar: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Erro ao preparar a consulta: " . $conn->error;
    }
} else {
    echo "Campos nome e idade são obrigatórios.";
}
$conn->close();
?>
