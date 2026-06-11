const emojis = ["🐶","🐱","🐸","🦊","🐼","🐵","🐯","🐰"];

let cards = [...emojis, ...emojis];
let firstCard = null;
let secondCard = null;
let lockBoard = false;

const board = document.getElementById("gameBoard");

function shuffle(array){
    return array.sort(() => Math.random() - 0.5);
}

function createBoard(){
    board.innerHTML = "";
    shuffle(cards);

    cards.forEach(emoji => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.emoji = emoji;
        card.textContent = emoji;

        card.addEventListener("click", flipCard);

        board.appendChild(card);
    });
}

function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;
    if(this.classList.contains("matched")) return;

    this.classList.add("flipped");

    if(!firstCard){
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkMatch();
}

function checkMatch(){
    const isMatch =
        firstCard.dataset.emoji === secondCard.dataset.emoji;

    if(isMatch){
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");

        resetTurn();

        checkVictory();
    } else {
        setTimeout(() => {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            resetTurn();
        }, 1000);
    }
}

function resetTurn(){
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

function checkVictory(){
    const matchedCards =
        document.querySelectorAll(".matched");

    if(matchedCards.length === cards.length){
        setTimeout(() => {
            alert("🎉 Parabéns! Você venceu!");
        }, 300);
    }
}

function restartGame(){
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    createBoard();
}

createBoard();