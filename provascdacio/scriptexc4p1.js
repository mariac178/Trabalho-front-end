function revelar() {

    let img = document.getElementById("imagem");
    img.src = "img_vinicius_junior.png.png";

    let nome = document.getElementById("nome");
    let data = document.getElementById("data_nas");
    let altura = document.getElementById("altura");
    let posicao = document.getElementById("posicao");
    let rank = document.getElementById("rank");

    nome.innerHTML = 'Vinícius José Paixão de Oliveira Júnior <span class="badge text-bg-success">9,5</span>';
    data.textContent = "12/07/2000 (25 anos)";
    altura.textContent = "1,76 m";
    posicao.textContent = "Ponta-esquerda / Atacante";

    let elementos = [data, altura, posicao];

    elementos.forEach(el => {
        el.classList.remove("placeholder");
        el.classList.add("card-text");
    });

    nome.classList.remove("placeholder-glow");
}