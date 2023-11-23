const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarbotao();
        desselecionarpersonagem();
        
        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarpersonagem() {
    const personagemselecionado = document.querySelector(".personagem.selecionado");
    personagemselecionado.classList.remove("selecionado");
}

function desselecionarbotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

