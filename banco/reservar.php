<?php

include_once('conexao.php');

// Receber dados do formulário de reserva
$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$destino = $_POST['destino'];
$tipo_viagem = $_POST['tipo_viagem'];
$data_ida = $_POST['data_ida'];
$data_volta = $_POST['data_volta'];
$pessoas = $_POST['pessoas'];

// Verificar se já existe uma reserva para o mesmo email e destino
$sql = "SELECT * FROM reservas WHERE email = ? AND destino = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $email, $destino);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Reserva já existe, redirecionar para a página de confirmação
    //echo json_encode(["status" => "exists", "message" => "Reserva já existente para este destino."]);
    echo "<script>alert('Reserva já existente para este destino.'); window.location.href = '../paginas/reserva_usuario.php';</script>";
    exit();
}

// Se não houver reserva, inserir os dados no banco
$sql = "INSERT INTO reservas (nome, email, telefone, destino, tipo_viagem, data_ida, data_volta, pessoas) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssssi", $nome, $email, $telefone, $destino, $tipo_viagem, $data_ida, $data_volta, $pessoas);

/*if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Reserva realizada com sucesso!"]);
} else {
    echo json_encode(["status" => "error", "message" => "Erro ao realizar a reserva: " . $conn->error]);
}*/
if ($stmt->execute()) {
    echo "<script>alert('Reserva realizada com sucesso!'); window.location.href = '../paginas/index.php';</script>";
} else {
    echo "<script>alert('Erro ao realizar a reserva: " . $conn->error . "'); window.history.back();</script>";
}


$stmt->close();
$conn->close();
?>

