<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include_once('conexao.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!$data) {
        echo json_encode(["success" => false, "message" => "Erro ao decodificar JSON"]);
        exit();
    }

    $cpf = isset($data['cpf']) ? $data['cpf'] : null;
    $senha = isset($data['senha']) ? $data['senha'] : null;

    if (empty($cpf) || empty($senha)) {
        echo json_encode(["success" => false, "message" => "CPF ou senha não foram preenchidos"]);
        exit();
    }

    // Consulta SQL para verificar o CPF
    $sql = "SELECT * FROM usuarios WHERE cpf = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $cpf);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        
        if (password_verify($senha, $user['senha'])) {
            session_start();
            $_SESSION['usuario'] = $user['nome'];
            echo json_encode(["success" => true]);
        } else {
            echo json_encode(["success" => false, "message" => "Senha incorreta"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "CPF não encontrado"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Método de requisição inválido"]);
}

$conn->close();
?>


