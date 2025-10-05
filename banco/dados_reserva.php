<?php
session_start();
header('Content-Type: application/json');

include_once('conexao.php');

// Verificar se o usuário está logado e obter o nome do usuário da sessão
$nomeUsuario = isset($_SESSION['usuario']) ? $_SESSION['usuario'] : null;

if (!$nomeUsuario) {
    echo json_encode(["success" => false, "message" => "Usuário não logado"]);
    exit();
}

// Consultar as reservas com base no nome do usuário
$sql = "SELECT * FROM reservas WHERE nome = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $nomeUsuario);
$stmt->execute();
$result = $stmt->get_result();

$reservas = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $reservas[] = [
            "destino" => $row["destino"],
            "tipo_viagem" => $row["tipo_viagem"],
            "data_ida" => $row["data_ida"],
            "data_volta" => $row["data_volta"],
            "pessoas" => $row["pessoas"]
        ];
    }
    echo json_encode(["success" => true, "data" => $reservas]);
} else {
    echo json_encode(["success" => false, "message" => "Nenhuma reserva encontrada"]);
}

$stmt->close();
$conn->close();
?>

