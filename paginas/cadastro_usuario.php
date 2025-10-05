<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="Willian de Sousa Nunes e Dharlan L. Sangi">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../estilos/style.css">
    <link href='https://unpkg.com/boxicons@2.1.4/estilos/boxicons.min.css' rel='stylesheet'>
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/scrollreveal"></script>
    <title>WM Turismo - Criar conta</title>
</head>
<body>
    <a name="topo"></a>
    <div class="background-verde">
        <!-- cabeçalho -->
        <header>
            <!-- container -->
            <div class="container">
                <nav>
                    <div class="logo">
                        <a href="cadastro_usuario.php"> WM turismo </a>
                    </div>
                    <ul class="ul">
                        <li><a href="index.php">Home</a></li>
                        <li><a href="servicos.php">Serviços</a></li>
                        <li><a href="quemsomos.php">Quem somos</a></li>
                        <li><a href="contato.php">Contato</a></li>
                        <li><a href="logar_usuario.php"><button class="btn-gradiente">Entrar</button></a></li>
                    </ul>
                    <div class="menu-icon">
                        <img src="../imgs/menu.png" alt="ícone de menu">
                    </div>
                </nav>
            </div>
            <!-- fim container -->
        </header>
        <!-- fim cabeçalho -->
    </div>
    <!-- form2 -->
    <section class="form-registro">
        <br>
        <div class="container">
            <!-- registro -->
            <div class="box-registro">
                <h2>Criar conta</h2>
                <span>Tem uma conta? <a href="logar_usuario.php"> Entrar</a></span>
                <form action="../banco/cadastrar.php" method="POST">
                    <div class="input-box">
                        <input type="text" class="input-field" id="nome" placeholder="Nome" required>
                        <i class="bx bx-user" aria-hidden="true"></i>
                    </div>
                    <br>
                    <div class="input-box">
                        <input type="text" class="input-field" id="cpf" placeholder="CPF" required>
                        <i class="bx bx-user" aria-hidden="true"></i>
                    </div>
                    <br>
                    <div class="sexo-select">
                        <p>Sexo:</p>
                        <br>
                        <input type="radio" id="feminino" name="genero" value="feminino" required>
                        <label for="feminino">Feminino</label>
                        <input type="radio" id="masculino" name="genero" value="masculino" required>
                        <label for="masculino">Masculino</label>
                        <input type="radio" id="outro" name="genero" value="outro" required>
                        <label for="outro">Outro</label>
                    </div>
                    <br><br>
                    <div class="data-nasc">
                        <label for="data_nascimento">Data de Nascimento: </label>
                        <input type="date" id="data_nascimento" name="data_nascimento" class="input-field" required>
                    </div>
                    <br><br>
                    <div class="input-box">
                        <input type="tel" class="input-field" id="telefone" placeholder="Telefone" required>
                        <i class="bx bx-phone" aria-hidden="true"></i>
                    </div>
                    <br>
                    <div class="input-box">
                        <input type="email" class="input-field" id="email" placeholder="Email" required>
                        <i class="bx bx-envelope" aria-hidden="true"></i>
                    </div>
                    <br>
                    <div class="input-box">
                        <input type="password" class="input-field" id="senha" placeholder="Senha" required>
                        <i class="bx bx-lock-alt" aria-hidden="true"></i>
                    </div>
                    <br>
                    <div class="input-box">
                        <input type="password" class="input-field" id="confirmar-senha" placeholder="Confirmar Senha" required>
                        <i class="bx bx-lock-alt" aria-hidden="true"></i>
                    </div>
                    <br>
                    <div class="two-col">
                        <div class="one">
                            <input type="checkbox" id="registro-check">
                            <label for="registro-check"> Aceitar nossos<a href="#" aria-required="false"> termos de serviço</a></label>
                        </div>
                    </div>
                    <br>
                    <button type="submit" id="registrobtn" onclick="return registrar()">Cadastrar</button>
                </form>
            </div>
            <!-- fim registro -->
        </div>
        <br>
     </section>
     <footer>
        <div class="container">
            <!-- ul 1 -->
            <ul>
                <h3>WM Turismo</h3>
                <p>&copy 2024 <br> Todos os direitos reservados</p>
                <div class="redes-sociais">
                    <a href="#"><img src="../imgs/facebook.png" alt="facebook"></a>
                    <a href="#"><img src="../imgs/instagram.png" alt="instagram"></a>
                    <a href="#"><img src="../imgs/linkedin.png" alt="linkedin"></a>
                </div>
            </ul>
            <!-- ul 2 -->
            <ul>
                <h3>Links</h3>
                <li><a href="index.php">home</a></li>
                <li><a href="servicos.php">servicos</a></li>
                <li><a href="quemsomos.php">quem somos</a></li>
                <li><a href="contato.php">contato</a></li>
                <li><a href="#topo">voltar ao topo</a></li>
            </ul>
            <!-- ul 3 -->
            <ul>
                <h3>Nos contate</h3>
                <li>
                    <p><a href="tel:+55 xxxx-xxxx">+55 xxxx-xxxx</a></p>
                </li>
                <li>
                    <p><a href="mailto:email@example.com">email@example.com</a></p>
                </li>
                <li>
                    <p>Brasil</p>
                </li>
            </ul>
        </div>
        <br>
     </footer>
    <!-- fim rodape -->
    <script src="../funcoes/main.js"></script>
</body>
</html>