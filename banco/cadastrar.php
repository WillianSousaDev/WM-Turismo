<?php

include_once('conexao.php');

// Receber dados do JSON
$data = json_decode(file_get_contents("php://input"), true);

$nome = $data['nome'];
$cpf = $data['cpf'];
$telefone = $data['telefone'];
$email = $data['email'];
//$senha = $data['senha'];   
$senha = password_hash($data['senha'], PASSWORD_BCRYPT); // Encriptando a senha
$genero = $data['genero'];
$data_nascimento = $data['data_nascimento'];

// Verificar se o CPF ou o e-mail já existem
$sql = "SELECT * FROM usuarios WHERE cpf = ? OR email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $cpf, $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Usuário já cadastrado, redirecionar para a página de login
    echo json_encode(["status" => "error", "message" => "Usuário já cadastrado. Redirecionando para a página de login."]);
    exit();
}

// Inserir no banco de dados
$sql = "INSERT INTO usuarios (nome, cpf, telefone, email, senha, genero, data_nascimento) VALUES (?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssss", $nome, $cpf, $telefone, $email, $senha, $genero, $data_nascimento);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Cadastro realizado com sucesso!"]);
} else {
    echo json_encode(["status" => "error", "message" => "Erro ao cadastrar: " . $conn->error]);
}

$stmt->close();
$conn->close();
?>



