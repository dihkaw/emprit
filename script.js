const currentCardElement = document.getElementById('currentCard');
const nextCardElement = document.getElementById('nextCard');
const resultElement = document.getElementById('result');
const highButton = document.getElementById('highButton');
const lowButton = document.getElementById('lowButton');
const restartButton = document.getElementById('restartButton');

let currentCardValue;
let nextCardValue;

function getRandomCard() {
    return Math.floor(Math.random() * 13) + 1; // Nilai kartu antara 1 dan 13
}

function startGame() {
    currentCardValue = getRandomCard();
    currentCardElement.innerText = currentCardValue;
    nextCardElement.classList.add('hidden');
    resultElement.innerText = '';
    restartButton.classList.add('hidden');
    highButton.disabled = false; // Enable buttons
    lowButton.disabled = false; // Enable buttons
}

function checkGuess(isHigh) {
    nextCardValue = getRandomCard();
    nextCardElement.innerText = nextCardValue;
    nextCardElement.classList.remove('hidden');

    if (nextCardValue === currentCardValue) {
        resultElement.innerText = 'Hasilnya seri!';
    } else if ((isHigh && nextCardValue > currentCardValue) || (!isHigh && nextCardValue < currentCardValue)) {
        resultElement.innerText = 'Selamat! Anda menang!';
    } else {
        resultElement.innerText = 'Sayang sekali! Anda kalah.';
    }

    highButton.disabled = true; // Disable buttons after guess
    lowButton.disabled = true; // Disable buttons after guess
    restartButton.classList.remove('hidden'); // Show restart button
}

highButton.addEventListener('click', () => checkGuess(true));
lowButton.addEventListener('click', () => checkGuess(false));
restartButton.addEventListener('click', startGame);

// Mulai permainan saat halaman dimuat
startGame();
