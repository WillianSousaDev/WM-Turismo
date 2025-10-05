<?php
session_start();
include_once('conexao.php');

// Usar o nome do usuário armazenado na sessão
$nomeUsuario = $_SESSION['usuario'] ?? null;

if ($nomeUsuario) {
    // Consulta para obter os dados do usuário pelo nome
    $sql = "SELECT nome, cpf, genero, data_nascimento, telefone, email FROM usuarios WHERE nome = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $nomeUsuario);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        echo json_encode(["success" => true, "data" => $user]);
    } else {
        echo json_encode(["success" => false, "message" => "Usuário não encontrado"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Nenhum usuário logado"]);
}

$conn->close();
?>
