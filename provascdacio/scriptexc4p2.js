function add() {

    let novoCard = document.createElement("div");
    novoCard.className = "card mt-3";
    novoCard.style.width = "22rem";

    novoCard.innerHTML = `
        <img src="Lucas_Paqueta.webp" class="card-img-top" alt="Lucas Paquetá">
        <div class="card-body">
            <h5 class="card-title">
                Lucas Tolentino Coelho de Lima
                <span class="badge text-bg-secondary">8,8</span>
            </h5>
            <p class="card-text">
                <strong>Nascimento:</strong> 27/08/1997 (28 anos)<br>
                <strong>Altura:</strong> 1,80 m<br>
                <strong>Posição:</strong> Meio-campista<br>
            </p>
        </div>
    `;

    let botao = document.querySelector("button.btn");
    let container = botao.parentElement;

    container.insertBefore(novoCard, botao);
}