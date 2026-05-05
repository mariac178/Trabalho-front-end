function revelar() {

    let img = document.getElementById("imagem");
    img.src = "img_vinicius_junior.png";

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

function add() {

    let novoCard = document.createElement("div");
    novoCard.className = "card mt-3";
    novoCard.style.width = "22rem";

    novoCard.innerHTML = `
        <img src="img/Lucas_Paqueta.png" class="card-img-top" alt="Lucas Paquetá">
        <div class="card-body">
            <h5 class="card-title">
                Lucas Tolentino Coelho de Lima
                <span class="badge text-bg-secondary">8,8</span>
            </h5>
            <p class="card-text">
                <span><strong>Nascimento:</strong> 27/08/1997 (28 anos)</span><br>
                <span><strong>Altura:</strong> 1,80 m</span><br>
                <span><strong>Posição:</strong> Meio-campista</span><br>
            </p>
        </div>
    `;

    // Insere o card antes do botão "Revelar"
    let botao = document.querySelector("a.btn");
    let container = botao.parentElement;
    container.insertBefore(novoCard, botao);
}