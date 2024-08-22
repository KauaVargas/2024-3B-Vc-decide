const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Antonio é um garoto de 5 anos que está enfrentando dificuldades em sua escola por estar sofrendo racismo devido a cor de sua pele negra, sua mãe ficou sabendo do ocorrido e foi resolver. O que ela deveria fazer?",
        alternativas: [
            {
                texto:"Conversar com a diretora para solucionar o problema",
                afirmacao: "A mãe de Antonio foi na escola para resolver um caso de racismo com seu filho"
            },
            {
                texto:"Retirar Antonio da escola e fazer uma denuncia.",
                afirmacao: "A mãe de Antonio retirou seu filho da escola devido ao um caso de racismo e fez uma denuncia"
            }   
        ]
    },
    {
        enunciado: "Quando Antonio cresceu, ele sofreu do mesmo problema no trabalho, o que ele deveria fazer?",
        alternativas: [
            {
                texto: "Exigir a demissão dos responsáveis pelos insultos.",
                afirmacao: "Antonio se revolta e exige a demissão dos responsáveis pelos insultos"
            },
            {
                texto: "Ignorar a situação para não arrumar problemas.",
                afirmacao: "Antonio ignora o problema com medo de ser demitido"
            }
        ]
    },
    {
        enunciado: "Após um tempo, Antonio reflete sobre os ataques de racismo e decide tomar uma atitude, O que ele poderia fazer?",
        alternativas: [
            {
                texto: "Estudar e montar artigos falando sobre esse tema para ajudar sua comunidade.",
                afirmacao: "Com o intuito de ajudar sua comunidade, Antonio estuda sobre o tema de racismo e monta artigos para mostrar a situação que muitos passam"
            },
            {
                texto: "Não deve dar atenção para isso, pois já está no passado.",
                afirmacao: "Antonio pensa melhor e decide deixar isso no passado"
            }
        ]
    },
    {
        enunciado: "Anos depois, antigos colegas reencontram Antonio e reconhecem sua superação de vida, então acabam optando por convida-lo para um negócio de empreendedorismo, o que ele deveria fazer?",
        alternativas: [
            {
                texto: "Aceitar a boa vontade dos colégas e entrar no negócio.",
                afirmacao: "Ele aceita e entra para o novo negócio"
            },
            {
                texto: "Negar e seguir o rumo sozinho, como sempre fez.",
                afirmacao: "Ele agradece, porém recusa e segue o rumo sozinho"
            }
        ]
    },
    {
        enunciado: "Antonio consegue se tornar um homem de sucesso e ganha muito reconhecimento com projetos solidários, o que ele deveria fazer com o dinheiro ganho?",
        alternativas: [
            {
                texto: "Investir mais em projetos de caridade, ajudando sua comunidade como sempre sonhou.",
                afirmacao: "Antonio investe em projetos de caridade e fica conhecido como um herói de sua comunidade"
            },
            {
                texto: "Se aposentar e aproveitar como um verdadeiro vencedor da vida",
                afirmacao: "Antonio decide se aposentar e aproveitar o resto da vida como um vencedor"
            }
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPerguntas(){
    if(atual >= perguntas.length){
        mostraResultado();
        return
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""
    mostrarAlternativas();
}

function mostrarAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostrarPerguntas();
}

function mostraResultado(){
    caixaPerguntas.textContent = " Inicio do texto... "
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostrarPerguntas();