const caixaPrincipal=document.querySelector(".caixa-principal")
const caixaPerguntas=document.querySelector(".caixa-perguntas")
const caixaAlternativas=document.querySelector(".caixa-alternativas")
const caixaResultado=document.querySelector(".caixa-resultado")
const caixaResultado=document.querySelector(".caixa-resultado")

const perguntas = [
    {
        enunciado: "você gosta de banana",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmação"
            },
            {
                texto: "não",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "vocÊ gosta de cookie",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmação"
            },
            {
                texto: "não",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "vocÊ gosta cachorro quente",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmação"
            },
            {
                texto: "não",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "vocÊ gosta de hamburguer",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmação"
            },
            {
                texto: "não",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "vocÊ gosta de salame",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmação"
            },
            {
                texto: "não",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = ""; 

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }  
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""; 
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
            const afirmacoes = opcaoSelecionada.afirmacao; /* mudar para opcaoSelecionada.afirmacao*/
            historiaFinal += afirmacoes + " ";
            atual++;
            mostraPergunta();
      }

function mostraResultado(){
    caixaPerguntas.textContent = ""
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent ="";
}

mostraPergunta();

