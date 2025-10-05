<?php
session_start();
header('Content-Type: application/json');

include_once('conexao.php');

// Verificar se o usuário está logado e obter o nome do usuário da sessão
$nomeUsuario = isset($_SESSION['usuario']) ? $_SESSION['usuario'] : null;

// Verificar se foi fornecido o destino da reserva a ser excluída
$data = json_decode(file_get_contents('php://input'), true);
$destino = isset($data['destino']) ? $data['destino'] : null;

if (!$nomeUsuario) {
    echo json_encode(["success" => false, "message" => "Usuário não logado"]);
    exit();
}

if (!$destino) {
    echo json_encode(["success" => false, "message" => "Destino não especificado"]);
    exit();
}

// Excluir a reserva com base no destino e no nome do usuário
$sql = "DELETE FROM reservas WHERE nome = ? AND destino = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $nomeUsuario, $destino);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Erro ao excluir a reserva"]);
}

$stmt->close();
$conn->close();
?>
