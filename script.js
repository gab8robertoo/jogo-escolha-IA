const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Assim que você sai da escola, percebe uma fumaça saindo do prédio principal. Você desconfia que pode ser um incêndio. Qual é seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Ajuda a organizar a evacuação, orientando os colegas para as saídas de emergência e mantendo a calma.",
                afirmacao: "Mostrou liderança e solidariedade, contribuindo para uma evacuação segura."
            },
            {
                texto: "Fica parado sem saber o que fazer, esperando que os professores resolvam tudo",
                afirmacao: "Demonstrou insegurança e falta de iniciativa em uma situação de emergência."
            }
        ]
    },
    {
        enunciado: "Após o incêndio ser controlado, a direção pede que você e seus colegas façam um trabalho sobre prevenção de incêndios na escola. Como você procede?",
        alternativas: [
            {
                texto: "Pesquisa sobre causas comuns de incêndios e medidas de prevenção, fazendo um trabalho detalhado e apresentando soluções práticas.",
                afirmacao: "Contribuiu para a conscientização e prevenção futura na escola."
            },
            {
                texto: "Escreve o trabalho baseado só no que lembra da evacuação, sem pesquisar muito.",
                afirmacao: "Apresentou um relato pessoal, mas faltou aprofundamento para prevenir novos acidentes."
            }
        ]
    },
    {
        enunciado: "Para chamar a atenção dos alunos sobre a importância da segurança contra incêndios, você precisa criar um cartaz. Como vai fazer?",
        alternativas: [
            {
                texto: "Desenha um cartaz simples, mas claro, com informações sobre prevenção e rotas de fuga.",
                afirmacao: "Conseguiu passar uma mensagem importante de forma acessível e direta."
            },
            {
                texto: "Faz um cartaz muito colorido, mas sem informações claras sobre prevenção",
                afirmacao:"O cartaz chamou atenção, mas não transmitiu o conteúdo necessário.""
            }
        ]
    },
    {
        enunciado  "Durante o trabalho em grupo, um colega não colaborou e entregou um trabalho sem muito esforço. O que você faz?"",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
