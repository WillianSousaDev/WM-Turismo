//Visualização dos dados do usuario
/*document.addEventListener("DOMContentLoaded", function () {
    const userDiv = document.getElementById("dados-usuario");

    // Verificar se o elemento onde os dados serão exibidos existe
    if (userDiv) {
        fetch('../banco/dados_usuario.php')
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    const userInfo = data.data;

                    userDiv.innerHTML = `
                        <p><strong>Nome:</strong> ${userInfo.nome}</p>
                        <p><strong>CPF:</strong> ${userInfo.cpf}</p>
                        <p><strong>Gênero:</strong> ${userInfo.genero}</p>
                        <p><strong>Data de Nascimento:</strong> ${userInfo.data_nascimento}</p>
                        <p><strong>Telefone:</strong> ${userInfo.telefone || 'Não informado'}</p>
                        <p><strong>Email:</strong> ${userInfo.email}</p>
                    `;
                } else {
                    console.warn(data.message);
                }
            })
            .catch(error => {
                console.error("Erro:", error);
            });
    }
});*/


document.addEventListener("DOMContentLoaded", function () {
    const userDiv = document.getElementById("dados-usuario");

    // Verificar se o elemento onde os dados serão exibidos existe
    if (userDiv) {
        fetch('../banco/dados_usuario.php')
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    const userInfo = data.data;

                    userDiv.innerHTML = `
                        <p><strong>Nome:</strong> ${userInfo.nome}</p>
                        <p><strong>CPF:</strong> ${userInfo.cpf}</p>
                        <p><strong>Gênero:</strong> ${userInfo.genero}</p>
                        <p><strong>Data de Nascimento:</strong> ${userInfo.data_nascimento}</p>
                        <p><strong>Telefone:</strong> ${userInfo.telefone || 'Não informado'}</p>
                        <p><strong>Email:</strong> ${userInfo.email}</p>
                        <button id="btn-deletar">Excluir conta</button>
                    `;

                    // Adicionar evento de clique para o botão
                    const btnDeletar = document.getElementById("btn-deletar");
                    if (btnDeletar) {
                        btnDeletar.addEventListener("click", function () {
                            const confirmDelete = confirm("Tem certeza de que deseja excluir sua conta?");
                            if (confirmDelete) {
                                fetch('../banco/excluir_conta.php', { method: 'POST' })
                                    .then(response => response.json())
                                    .then(data => {
                                        if (data.success) {
                                            alert("Conta excluída com sucesso.");
                                            window.location.href = '../banco/logout.php';  // Redireciona para a página inicial
                                        } else {
                                            alert("Erro ao excluir a conta: " + data.message);
                                        }
                                    })
                                    .catch(error => {
                                        console.error("Erro ao excluir conta:", error);
                                    });
                            }
                        });
                    }
                } else {
                    console.warn(data.message);
                }
            })
            .catch(error => {
                console.error("Erro:", error);
            });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('../banco/dados_reserva.php')
        .then(response => response.json())
        .then(data => {
            const reservaContainer = document.getElementById("dados-reserva");

            if (data.success) {
                let reservaHtml = `
                    <h2>Suas Reservas</h2>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Destino</th>
                                <th>Tipo de Viagem</th>
                                <th>Data de Ida</th>
                                <th>Data de Volta</th>
                                <th>Pessoas</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                `;

                data.data.forEach(reserva => {
                    reservaHtml += `
                        <tr>
                            <td>${reserva.destino}</td>
                            <td>${reserva.tipo_viagem || 'Não informado'}</td>
                            <td>${reserva.data_ida}</td>
                            <td>${reserva.data_volta}</td>
                            <td>${reserva.pessoas}</td>
                            <td><button class="btn-deletar" data-destino="${reserva.destino}">Excluir</button></td>
                        </tr>
                    `;
                });

                reservaHtml += `
                        </tbody>
                    </table>
                `;
                reservaContainer.innerHTML = reservaHtml;

                // Adicionar evento de clique para os botões de exclusão
                document.querySelectorAll('.btn-deletar').forEach(button => {
                    button.addEventListener('click', function() {
                        const destino = this.getAttribute('data-destino');
                        const confirmDelete = confirm(`Tem certeza de que deseja excluir a reserva para ${destino}?`);
                        if (confirmDelete) {
                            fetch('../banco/excluir_reserva.php', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ destino: destino })
                            })
                            .then(response => response.json())
                            .then(data => {
                                if (data.success) {
                                    alert("Reserva excluída com sucesso.");
                                    window.location.reload();  // Recarregar a página para atualizar a lista de reservas
                                } else {
                                    alert("Erro ao excluir a reserva: " + data.message);
                                }
                            })
                            .catch(error => {
                                console.error("Erro ao excluir reserva:", error);
                            });
                        }
                    });
                });
            } else {
                reservaContainer.innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error("Erro ao buscar reservas:", error);
            document.getElementById('dados-reserva').innerHTML = "<p>Erro ao carregar reservas. Tente novamente mais tarde.</p>";
        });
});



/*document.addEventListener('DOMContentLoaded', function() {
    fetch('../banco/dados_reserva.php')
        .then(response => response.json())
        .then(data => {
            const reservaContainer = document.getElementById("dados-reserva");

            if (data.success) {
                let reservaHtml = `
                    <h2>Suas Reservas</h2>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Destino</th>
                                <th>Tipo de Viagem</th>
                                <th>Data de Ida</th>
                                <th>Data de Volta</th>
                                <th>Pessoas</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                `;

                data.data.forEach(reserva => {
                    reservaHtml += `
                        <tr>
                            <td>${reserva.destino}</td>
                            <td>${reserva.tipo_viagem || 'Não informado'}</td>
                            <td>${reserva.data_ida}</td>
                            <td>${reserva.data_volta}</td>
                            <td>${reserva.pessoas}</td>
                            
                        </tr>
                    `;
                });

                reservaHtml += `
                        </tbody>
                    </table>
                `;
                reservaContainer.innerHTML = reservaHtml;
            } else {
                reservaContainer.innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error("Erro ao buscar reservas:", error);
            document.getElementById('dados-reserva').innerHTML = "<p>Erro ao carregar reservas. Tente novamente mais tarde.</p>";
        });
});*/




/*document.addEventListener('DOMContentLoaded', function() {
    fetch('../banco/dados_reserva.php')
        .then(response => response.json())
        .then(data => {
            const reservaContainer = document.getElementById("dados-reserva");

            if (data.success) {
                let reservaHtml = '<h2>Suas Reservas</h2>';
                data.data.forEach(reserva => {
                    reservaHtml += `
                        <p><strong>Destino:</strong> ${reserva.destino}</p>
                        <p><strong>Tipo de Viagem:</strong> ${reserva.tipo_viagem || 'Não informado'}</p>
                        <p><strong>Data de Ida:</strong> ${reserva.data_ida}</p>
                        <p><strong>Data de Volta:</strong> ${reserva.data_volta}</p>
                        <p><strong>Pessoas:</strong> ${reserva.pessoas}</p>
                        <br><br>
                    `;
                });
                reservaContainer.innerHTML = reservaHtml;
            } else {
                reservaContainer.innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error("Erro ao buscar reservas:", error);
            document.getElementById('dados-reserva').innerHTML = "<p>Erro ao carregar reservas. Tente novamente mais tarde.</p>";
        });
});*/


