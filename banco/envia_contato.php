<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recebe os dados do formulário
    $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $telefone = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_STRING);
    $duvida = filter_input(INPUT_POST, 'duvida', FILTER_SANITIZE_STRING);

    // Verifica se todos os campos obrigatórios estão preenchidos
    if ($nome && $email && $duvida) {
        // Configuração do email da empresa e assunto
        $to = "williansousa576@gmail.com"; // Email da empresa
        $subject = "Nova dúvida de contato de $nome";

        // Formatação da mensagem do email
        $message = "Você recebeu uma nova dúvida de contato.\n\n";
        $message .= "Nome: $nome\n";
        $message .= "Email: $email\n";
        $message .= "Telefone: " . ($telefone ?: "Não informado") . "\n";
        $message .= "Dúvida:\n$duvida\n";

        // Cabeçalhos do email
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        // Envia o email e verifica o resultado
        if (mail($to, $subject, $message, $headers)) {
            echo "<script>alert('Sua mensagem foi enviada com sucesso!');</script>";
            echo "<script>window.location.href = '../paginas/index.php';</script>"; // Redireciona para a página inicial
            exit();
        } else {
            echo "<script>alert('Houve um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.');</script>";
            echo "<script>window.location.href = '../paginas/contato.php';</script>"; // Redireciona para a página de contato em caso de erro
            exit();
        }
    } else {
        echo "<script>alert('Por favor, preencha todos os campos obrigatórios corretamente.');</script>";
        echo "<script>window.location.href = '../paginas/contato.php';</script>"; // Redireciona para a página de contato caso algum campo obrigatório esteja faltando
        exit();
    }
} else {
    header("Location: ../paginas/contato.html");
    exit();
}
?>
