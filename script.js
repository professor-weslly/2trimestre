const caixaPrincipal=document.querySelector(".caixa-principal")
const caixaPerguntas=document.querySelector(".caixa-perguntas")
const caixaAlternativas=document.querySelector(".caixa-alternativas")
const caixaResultado=document.querySelector(".caixa-resultado")
const caixaResultado=document.querySelector(".caixa-resultado")

const perguntas = [
    {
        enunciado:"tiago é burro?",
        alternativas:[
            "Sim",
            "Sim, claro",
                ]
    },
    {
        enunciado:"complete: tiago jose?",
        alternativas:[
            "De freitas",
            "Tuponi",
                ]
    },
    {
        enunciado:"cachorro ou gato?",
        alternativas:[
            "canino maluco",
            "felino insano",
                ]
    },
    {
        enunciado:"quem vocÊw prefe.re",
        alternativas:[
            "kauan xotarovski",
            "tiago jose ______",
                ]
    },
    {
        enunciado:"existe pos vida?",
        alternativas:[
            "sim",
            "naum",
                ]
    },  
];

let atual =0;
let pergunta.Atual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado
    mostraAlternativas();
}

mostraPergunta();
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas)
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
}