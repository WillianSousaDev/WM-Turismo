//icone de menu mobile
var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');

menuIcon.addEventListener('click', () => {

    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = '../imgs/menu.png';
    } else {
        ul.classList.add('ativo');
        document.querySelector('.menu-icon img').src = '../imgs/close.png';
    }

})

//logout mobile
document.addEventListener("DOMContentLoaded", function() {
    const userMenu = document.querySelector(".user-menu");
    const dropdownContent = document.querySelector(".dropdown-content");

    if (userMenu && dropdownContent) {
        userMenu.addEventListener("click", function(event) {
            event.stopPropagation(); // Evita que o clique se propague para o documento
            dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
        });

        document.addEventListener("click", function() {
            // Oculta o menu se clicar fora dele
            dropdownContent.style.display = "none";
        });
    }
});

//validação de login para reserva de viagem
document.addEventListener("DOMContentLoaded", function() {
    const reservarBtn = document.getElementById("destinos-btn");

    reservarBtn.addEventListener("click", function() {
        // Verifica se o usuário está logado
        if (typeof usuarioLogado !== 'undefined' && usuarioLogado) {
            // Se o usuário estiver logado, redireciona para a página de reservas
            window.location.href = "reserva_usuario.php";
        } else {
            // Se o usuário não estiver logado, redireciona para a página de login
            alert("Você precisa estar logado para reservar uma viagem.");
            window.location.href = "logar_usuario.php";
        }
    });
});

 



//rolagem das paginas
ScrollReveal().reveal('.main-text', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
})
ScrollReveal().reveal('.main-img', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
})
ScrollReveal().reveal('.destinos', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
})
ScrollReveal().reveal('.viagem-img', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
})
ScrollReveal().reveal('.viagem-text', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
})
ScrollReveal().reveal('.box-newsletter', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
})
ScrollReveal().reveal('.cards', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
})
ScrollReveal().reveal('.membros', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
})
ScrollReveal().reveal('.box-registro', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
})
ScrollReveal().reveal('.input-box', {
    origin: 'left',
    duration: 3000,
    distance: '20%'
})
ScrollReveal().reveal('.sexo-select', {
    origin: 'left',
    duration: 3000,
    distance: '20%'
})
ScrollReveal().reveal('.data-nasc', {
    origin: 'left',
    duration: 3000,
    distance: '20%'
})

//Registro
function registrar() {
    // Obter os valores dos campos do formulário
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmar-senha").value;
    const termosAceitos = document.getElementById("registro-check").checked;
    const genero = document.querySelector('input[name="genero"]:checked');
    const dataNascimento = document.getElementById("data_nascimento").value;

    // Validação do Nome
    if (nome.trim() === "") {
        alert("Por favor, preencha o nome completo.");
        return false;
    }

    // Validação do CPF (simples, apenas para o exemplo)
    if (!/^\d{11}$/.test(cpf)) {
        alert("O CPF deve ter 11 dígitos.");
        return false;
    }

    // Validação do Gênero
    if (!genero) {
        alert("Por favor, selecione seu gênero.");
        return false;
    }

    // Validação do Telefone (simples, apenas para o exemplo)
    if (!/^\d{10,11}$/.test(telefone)) {
        alert("O telefone deve ter 10 ou 11 dígitos.");
        return false;
    }

    // Validação do Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return false;
    }

    // Validação da Senha
    if (!validarSenha(senha)) {
        return false;
    }

    // Confirmação de Senha
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return false;
    }

    // Validação dos Termos de Serviço
    if (!termosAceitos) {
        alert("Você deve aceitar os termos de serviço.");
        return false;
    }



    // Validação da Data de Nascimento
    const dataNascimentoObj = new Date(dataNascimento);
    const idade = new Date().getFullYear() - dataNascimentoObj.getFullYear();
    const mes = new Date().getMonth() - dataNascimentoObj.getMonth();
    if (mes < 0 || (mes === 0 && new Date().getDate() < dataNascimentoObj.getDate())) {
        idade--;
    }

    // Verifica se a idade é menor que 18 anos
    if (idade < 18) {
        alert("Você deve ter pelo menos 18 anos para se cadastrar.");
        return false;
    }

    // Se todas as validações passarem, enviar os dados
    const data = {
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        email: email,
        senha: senha,
        genero: genero.value,
        data_nascimento: dataNascimento
    };

    // Enviando os dados para o PHP
    fetch('../banco/cadastrar.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json()) // Espera um JSON como resposta
        .then(data => {
            alert(data.message); // Mostrar a mensagem do PHP
            if (data.status === "success") {
                window.location.href = "../paginas/logar_usuario.php"; // Redirecionar após cadastro
            } else if (data.status === "error") {
                // Redirecionar para a página de login se o usuário já estiver cadastrado
                window.location.href = "../paginas/logar_usuario.php";
            }
        })
        .catch(error => console.error('Error:', error));
}



// Função para validar a senha
function validarSenha(senha) {
    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

    if (!senhaRegex.test(senha)) {
        alert("A senha deve ter pelo menos 6 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.");
        return false;
    }
    return true;
}

function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11) {
        alert("O CPF deve ter 11 dígitos.");
        return false;
    }
    return true;
}

// Função de login que chama as validações
function login() {
    const cpf = document.querySelector('.input-box input[name="cpf"]').value;
    const senha = document.querySelector('.input-box input[name="senha"]').value;

    if (!validarCPF(cpf) || !validarSenha(senha)) {
        return false;
    }

    fetch('../banco/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cpf, senha })
    })
    .then(response => {
        console.log("Response status:", response.status);
        if (!response.ok) {
            throw new Error("Erro na resposta do servidor");
        }
        return response.json();
    })
    .then(data => {
        console.log("Response data:", data);
        if (data.success) {
            alert("Login realizado com sucesso!");
            window.location.href = "../paginas/index.php";
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Erro ao realizar o login. Tente novamente.");
    });

    return false;
}




// Função de Reserva
function reservar() {
    // Obter os valores dos campos do formulário
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const destino = document.getElementById("destino").value;
    const tipoViagem = document.getElementById("tipo_viagem").value;
    const dataIda = document.getElementById("data_ida").value;
    const dataVolta = document.getElementById("data_volta").value;
    const pessoas = document.getElementById("pessoas").value;

    // Validação do Nome
    if (nome === "") {
        alert("Por favor, preencha o nome completo.");
        return false;
    }

    // Validação do Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return false;
    }

    // Validação do Telefone (formato simples)
    if (!/^\d{10,11}$/.test(telefone)) {
        alert("O telefone deve ter 10 ou 11 dígitos.");
        return false;
    }

    // Validação do Destino
    if (destino === "") {
        alert("Por favor, selecione um destino.");
        return false;
    }

    // Validação do Tipo de Viagem
    /*if (tipoViagem === "") {
        alert("Por favor, selecione o tipo de viagem.");
        return false;
    }*/

    // Validação da Data de Ida e Data de Volta
    if (dataIda === "" || dataVolta === "") {
        alert("Por favor, preencha as datas de ida e volta.");
        return false;
    }

    const dataIdaObj = new Date(dataIda);
    const dataVoltaObj = new Date(dataVolta);
    const dataAtual = new Date();

    if (dataIdaObj < dataAtual) {
        alert("A data de ida deve ser posterior à data atual.");
        return false;
    }

    if (dataVoltaObj <= dataIdaObj) {
        alert("A data de volta deve ser posterior à data de ida.");
        return false;
    }

    // Validação do Número de Pessoas
    const numeroPessoas = parseInt(pessoas);
    if (isNaN(numeroPessoas) || numeroPessoas < 1 || numeroPessoas > 30) {
        alert("O número de pessoas deve estar entre 1 e 30.");
        return false;
    }

    // Dados para enviar ao PHP
    const data = {
        nome,
        email,
        telefone,
        destino,
        tipo_viagem: tipoViagem,
        data_ida: dataIda,
        data_volta: dataVolta,
        pessoas
    };

    // Enviar os dados para o PHP
    fetch('../banco/reservar.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message); // Exibir mensagem do PHP
        if (data.status === "success") {
            window.location.href = "../paginas/index.php"; // Redirecionar após reserva bem-sucedida
        } else if (data.status === "exists") {
            // Redirecionar para a página de confirmação caso a reserva já exista
            window.location.href = "../paginas/index.php";
        }
    })
    .catch(error => console.error('Erro:', error));
}



//Validação data ida e volta da viagem
window.onload = function () {
    const dataIda = document.getElementById('data_ida');
    const dataVolta = document.getElementById('data_volta');

    // Define a data mínima para a data de ida como a data de hoje
    const hoje = new Date().toISOString().split("T")[0];
    dataIda.min = hoje;

    // Atualiza a data mínima para a data de volta com base na data de ida selecionada
    dataIda.addEventListener('change', function () {
        dataVolta.min = dataIda.value;
    });
};

//Validação quantidade de pessoas
document.getElementById('pessoas').addEventListener('input', function () {
    const pessoasInput = this;
    if (pessoasInput.value < 1) pessoasInput.value = 1;
    if (pessoasInput.value > 30) pessoasInput.value = 30;
});

//inscrição newsletter
function newsletter() {
    const email = document.querySelector('input[name="email"]').value;

    if (email) {
        fetch('../banco/salvar_newsletter.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            window.location.reload();
        })
        .catch(error => {
            console.error("Erro ao salvar email:", error);
            alert("Erro ao salvar o email. Tente novamente.");
        });
    } else {
        alert("Por favor, insira um email válido.");
    }

    return false; // Impede o envio padrão do formulário
}








