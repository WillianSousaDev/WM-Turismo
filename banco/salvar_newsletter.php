<?php
include_once('conexao.php');

$data = json_decode(file_get_contents("php://input"), true);
$email = isset($data['email']) ? $data['email'] : null;

if ($email) {
    // Inserir o email na tabela de newsletter
    $sql = "INSERT INTO newsletter (email) VALUES (?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Inscrição realizada com sucesso!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Erro ao salvar email"]);
    }

    $stmt->close();
} else {
    echo json_encode(["success" => false, "message" => "Email inválido"]);
}

$conn->close();
?>




