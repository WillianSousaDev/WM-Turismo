<?php
session_start();
include('conexao.php');

$user_id = $_SESSION['usuario_id']; // Altere se necessário para pegar o ID correto

// Excluir dados de todas as tabelas relacionadas ao usuário
$query_delete_reservas = "DELETE FROM reservas WHERE user_id = $user_id";
$query_delete_usuario = "DELETE FROM usuarios WHERE id = $user_id";

if (mysqli_query($conn, $query_delete_reservas) && mysqli_query($conn, $query_delete_usuario)) {
    session_destroy(); // Encerra a sessão após a exclusão
    header("Location: ../paginas/index.php"); // Redireciona para a página inicial
    exit;
} else {
    echo "Erro ao apagar conta: " . mysqli_error($conn);
}
?>
