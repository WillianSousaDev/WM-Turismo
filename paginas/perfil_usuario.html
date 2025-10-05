<?php
session_start();
$nomeUsuario = isset($_SESSION['usuario']) ? $_SESSION['usuario'] : null;
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="Willian de Sousa Nunes e Dharlan L. Sangi">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../estilos/style.css">
    <link href='https://unpkg.com/boxicons@2.1.4/estilos/boxicons.min.css' rel='stylesheet'>
    <script src="https://unpkg.com/scrollreveal"></script>
    <title>WM Turismo - Seus Dados</title>
    <style>
        /* Estilo básico para o menu suspenso */
        .user-menu {
            position: relative;
            display: inline-block;
        }

        .user-menu span {
            color: white;
            cursor: pointer;
        }

        .user-menu span:hover {
            color: var(--orange);
        }

        .user-menu .dropdown-content {
            display: none;
            outline: none;
            position: absolute;
            top: 100%;
            right: 0;
            min-width: 150px;
            background-color: var(--verde-escuro);
            box-shadow: 0px 8px 8px;
            z-index: 1;
        }

        .user-menu .dropdown-content a {
            color: white;
            padding: 8px 10px;
            text-decoration: none;
            display: block;
            border-bottom: 1px solid #ddd;
        }

        .user-menu .dropdown-content a:hover {
            color: white;
            background-color: var(--verde);
        }

        /* Exibe o menu ao passar o mouse */
        .user-menu:hover .dropdown-content {
            display: block;
            transition: 0.2s;
        }

        /* Estilo para o contêiner dos dados do usuário */
        #dados-usuario p {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: left;
            font-size: 18px;
            color: #333;
            margin: 8px 0;
            padding: 5px;
        }

        #dados-usuario strong {
            margin: 0 5px;
            color: black;
            font-weight: bold;
        }


        /* Estilização geral para a tabela */
        #dados-reserva {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 10px;
        }

        h2 {
            color: black;
            font-size: 30px;
            text-align: center;
            padding: 10px 0 30px 0;
        }

        /* Estilização da tabela */
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
        }

        th, td {
            padding: 10px;
            text-align: center;
            border: 1px solid #ddd;
        }

        th {
            background-color: #4CAF50;
            color: white;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        

        td {
            font-size: 1em;
        }

        /* Estilização do botão de excluir */
        .btn-deletar {
            padding: 6px 12px;
            font-size: 1em;
            background-color: #f44336; /* Cor vermelha */
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .btn-deletar:hover {
            background-color: #d32f2f; /* Cor vermelha mais escura no hover */
        }

        .btn-deletar:focus {
            outline: none;
        }


        @media (max-width: 960px) {
            #dados-usuario p {
                flex-direction: column;
            }

            /* Ajusta o tamanho da fonte para telas menores */
            h2 {
                font-size: 1.5em;
            }

            table {
                font-size: 0.9em; /* Reduz o tamanho da fonte da tabela */
            }

            th, td {
                padding: 8px; /* Diminui o preenchimento nas células */
            }

            /* Reduz o espaço ao redor do contêiner da tabela */
            #dados-reserva {
                margin: 10px;
                padding: 5px;
            }

            /* Estiliza os botões para ficarem maiores em telas pequenas */
            .btn-deletar {
                padding: 8px 16px;
                font-size: 1.1em;
            }

            /* Para telas muito pequenas, você pode esconder a tabela em excesso e exibir em formato de lista */
            table {
                display: flex;
                width: 100%;
                overflow-x: auto;
                white-space: nowrap;
            }

            /* Deixa os itens da tabela em uma linha, transformando-os em blocos para maior flexibilidade */
            th, td {
                display: block;
                flex-direction: column;
                text-align: center;
                padding: 8px 5px;
                margin: 0 100px;
            }

            /* Ajusta os cabeçalhos para aparecer no início de cada bloco */
            th {
                display: none; /* Oculta cabeçalhos na versão compacta */
            }

            td::before {
                content: attr(data-label); /* Exibe o nome do campo antes do valor */
                font-weight: bold;
                text-transform: uppercase;
            }

            /* Estilização de um botão de exclusão mais acessível */
            .btn-deletar {
                width: 100%;
                margin-top: 10px;
            }
        }

    </style>
</head>

<body>
    <a name="topo"></a>
    <div class="background-verde">
        <!-- Cabeçalho -->
        <header>
            <div class="container">
                <nav>
                    <div class="logo">
                        <a href="perfil_usuario.php">WM turismo</a>
                    </div>
                    <ul class="ul">
                        <li><a href="index.php">Home</a></li>
                        <li><a href="servicos.php">Serviços</a></li>
                        <li><a href="quemsomos.php">Quem somos</a></li>
                        <li><a href="contato.php">Contato</a></li>
                        <?php if ($nomeUsuario): ?>
                        <li class="user-menu">
                            <span>
                                <?php echo htmlspecialchars($nomeUsuario); ?>
                            </span>
                            <div class="dropdown-content">
                                <a class="bx bx-user" href="../paginas/perfil_usuario.php">       
                                Sua conta</a>
                                <a class="bx bx-exit" href="../banco/logout.php">
                                Sair</a>
                            </div>
                        </li>
                        <?php else: ?>
                        <li><a href="logar_usuario.php"><button class="btn-gradiente">Entrar</button></a></li>
                        <?php endif; ?>
                    </ul>
                    <div class="menu-icon">
                        <img src="../imgs/menu.png" alt="ícone de menu">
                    </div>
                </nav>
            </div>
        </header>

        <!-- Dados do Usuário -->
        <section class="form-registro">
            <br>
            <div class="container">
                <div class="box-registro">
                    <h2>Seus dados de cadastro</h2>
                    <br>
                    <div id="dados-usuario">
                        <!-- Dados do usuário serão exibidos aqui -->
                    </div>
                    <br>
                    <!-- Exibição das informações da reserva -->
                    <div id="dados-reserva">
                        <!-- As informações de reserva ou mensagem de "sem reserva" aparecerão aqui -->
                    </div>

                </div>
            </div>
            <br>
        </section>

        <!-- Rodapé -->
        <footer>
            <div class="container">
                <ul>
                    <h3>WM Turismo</h3>
                    <p>&copy; 2024 <br> Todos os direitos reservados</p>
                    <div class="redes-sociais">
                        <a href="#"><img src="../imgs/facebook.png" alt="facebook"></a>
                        <a href="#"><img src="../imgs/instagram.png" alt="instagram"></a>
                        <a href="#"><img src="../imgs/linkedin.png" alt="linkedin"></a>
                    </div>
                </ul>
                <ul>
                    <h3>Links</h3>
                    <li><a href="index.php">home</a></li>
                    <li><a href="servicos.php">servicos</a></li>
                    <li><a href="quemsomos.php">quem somos</a></li>
                    <li><a href="contato.php">contato</a></li>
                    <li><a href="#topo">voltar ao topo</a></li>
                </ul>
                <ul>
                    <h3>Nos Contate</h3>
                    <li>
                        <p><a href="tel:+55xxxx-xxxx">+55 xxxx-xxxx</a></p>
                    </li>
                    <li>
                        <p><a href="mailto:email@example.com">email@example.com</a></p>
                    </li>
                    <li>
                        <p>Brasil</p>
                    </li>
                </ul>
            </div>
        </footer>
        <script src="../funcoes/main.js"></script>
        <script src="../funcoes/verificacao_dados.js"></script>
</body>

</html>
