<?php
session_start();
include_once('conexao.php');

// Usar o nome do usuário armazenado na sessão
$nomeUsuario = $_SESSION['usuario'] ?? null;

if ($nomeUsuario) {
    // Excluir as reservas associadas ao usuário
    $sqlReservas = "DELETE FROM reservas WHERE nome = ?";
    $stmtReservas = $conn->prepare($sqlReservas);
    $stmtReservas->bind_param("s", $nomeUsuario);

    if (!$stmtReservas->execute()) {
        echo json_encode(["success" => false, "message" => "Erro ao excluir reservas"]);
        exit();
    }

    // Agora excluir o usuário da tabela usuarios
    $sqlUsuario = "DELETE FROM usuarios WHERE nome = ?";
    $stmtUsuario = $conn->prepare($sqlUsuario);
    $stmtUsuario->bind_param("s", $nomeUsuario);

    if ($stmtUsuario->execute()) {
        // Apagar a sessão e redirecionar
        session_unset();
        session_destroy();
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "message" => "Erro ao excluir conta"]);
    }

    $stmtReservas->close();
    $stmtUsuario->close();
} else {
    echo json_encode(["success" => false, "message" => "Nenhum usuário logado"]);
}

$conn->close();
?>
