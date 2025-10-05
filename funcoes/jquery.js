// Informações dos destinos
const destinosInfo = {
    "Las Vegas, USA": {
        title: "Las Vegas, USA",
        description: `
            **Pontos Turísticos**:\n
            - A Strip: A famosa avenida com grandes hotéis, cassinos, e entretenimento de alto nível.\n
            - Bellagio: O hotel e cassino icônico com shows de fontes e jardins internos impressionantes.\n
            - Fremont Street: Uma rua de pedestres com luzes de LED e shows ao vivo.\n

            **Culinária**:\n
            - Bufês de luxo, restaurantes premiados e opções de comida internacional, incluindo culinária americana, japonesa e mexicana.\n

            **Experiências Únicas**:\n
            - Shows de mágica e entretenimento ao vivo, passeios de helicóptero pelo Grand Canyon e compras em outlets.\n
        `
    },
    "Toronto, Canadá": {
        title: "Toronto, Canadá",
        description: `
            **Pontos Turísticos**:\n
            - CN Tower: Um dos prédios mais altos do mundo, com vista panorâmica da cidade.\n
            - Royal Ontario Museum: Um dos maiores museus da América do Norte, com uma coleção diversificada.\n
            - Distillery District: Bairro histórico com galerias, lojas de arte e cafés.\n

            **Culinária**:\n
            - Grande diversidade, com restaurantes oferecendo desde culinária local até sabores asiáticos, italianos e caribenhos.\n

            **Cultura Local**:\n
            - Eventos culturais, como o Festival Internacional de Cinema de Toronto (TIFF) e o Toronto Caribbean Carnival.\n
        `
    },
    "Paris, França": {
        title: "Paris, França",
        description: `
            **Pontos Turísticos**:\n
            - Torre Eiffel: O símbolo de Paris, com vistas espetaculares da cidade.\n
            - Museu do Louvre: O museu mais visitado do mundo, com obras como a Mona Lisa.\n
            - Catedral de Notre-Dame: Famosa catedral gótica, conhecida por sua arquitetura detalhada.\n

            **Culinária**:\n
            - Padarias com croissants e baguetes, além de pratos clássicos como coq au vin, escargots e queijos franceses.\n

            **Arte e Cultura**:\n
            - Considerada a capital da moda e da arte, com inúmeras galerias, teatros e casas de ópera.\n
        `
    },
    "Roma, Itália": {
        title: "Roma, Itália",
        description: `
            **Pontos Turísticos**:\n
            - Coliseu: O icônico anfiteatro da era romana.\n
            - Vaticano: Centro da Igreja Católica, com a Basílica de São Pedro e a Capela Sistina.\n
            - Fontana di Trevi: Fonte famosa onde turistas jogam moedas para fazer um pedido.\n

            **Culinária**:\n
            - Massas frescas, pizzas tradicionais e pratos típicos como carbonara e gelato artesanal.\n

            **Cultura e História**:\n
            - Roma é conhecida como a "Cidade Eterna", com uma história que remonta a mais de 2.500 anos.\n
        `
    },
    "Monte fuji, Japão": {
        title: "Monte Fuji, Japão",
        description: `
            **Pontos Turísticos**:\n
            - Parque Nacional Fuji-Hakone-Izu: Paisagens deslumbrantes e trilhas para explorar.\n
            - Cinco Lagos de Fuji: Áreas cênicas com uma bela vista do Monte Fuji.\n
            - Templos e santuários: Templos antigos que representam a cultura japonesa.\n

            **Culinária**:\n
            - Sushis frescos, ramen e pratos tradicionais japoneses são populares na região.\n

            **Cultura e Natureza**:\n
            - Monte Fuji é um símbolo espiritual no Japão, atraindo tanto aventureiros quanto aqueles que buscam uma experiência tranquila na natureza.\n
        `
    },
    "Sydney, Austrália": {
        title: "Sydney, Austrália",
        description: `
            **Pontos Turísticos**:\n
            - Sydney Opera House: Famosa pela arquitetura e apresentações culturais.\n
            - Sydney Harbour Bridge: Uma das pontes mais emblemáticas do mundo.\n
            - Bondi Beach: Praia popular para surfe e relaxamento.\n

            **Culinária**:\n
            - Destaca-se pelos frutos do mar frescos, influências asiáticas e vinhos locais.\n

            **Atividades ao Ar Livre**:\n
            - Passeios de barco, mergulho e exploração das trilhas costeiras são comuns em Sydney.\n
        `
    }
};


// Função para abrir a modal com informações do destino
function abrirModal(destino) {
    const info = destinosInfo[destino];
    if (info) {
        $('#modal-title').text(info.title);
        $('#modal-description').text(info.description);
        $('#modal-info').fadeIn(); // Mostrar a modal com efeito de fade-in
    }
}

// Document ready
$(document).ready(function() {
    // Adicionar evento de clique a cada card
    $('.card-item1, .card-item2, .card-item3').click(function() {
        const destino = $(this).find('.local').text();
        abrirModal(destino);
    });

    // Fechar modal ao clicar no botão "x"
    $('.close').click(function() {
        $('#modal-info').fadeOut(); // Esconder a modal com efeito de fade-out
    });

    // Fechar modal ao clicar fora dela
    $(window).click(function(event) {
        if ($(event.target).is('#modal-info')) {
            $('#modal-info').fadeOut();
        }
    });
});

