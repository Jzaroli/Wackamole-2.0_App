const startButton = document.getElementById('startButton');
const mole1norm = document.getElementById('mole1norm');
const mole1mound = document.getElementById('mole1mound');
const mole1bday = document.getElementById('mole1bday')
const mole1evil = document.getElementById('mole1evil')
const score = document.getElementById('score');
const aside = document.getElementById('aside');
let secondsLeft = 40;
let sum = 0;

// Game Logic:
const gameLogic = function() {
    const timerInterval = setInterval(function () {
        secondsLeft--;
        const random = Math.random();
        if (secondsLeft > 0) {
            if (random <= 0.2){
                mole1mound.setAttribute("hidden", "hidden");
                mole1bday.setAttribute("hidden", "hidden");
                mole1evil.setAttribute("hidden", "hidden");
                mole1norm.removeAttribute("hidden");
                mole1norm.addEventListener('click', givePointsNorm, {once: true});
            } else if (random >= 0.21 && random <= 0.30) {
                mole1mound.setAttribute("hidden", "hidden");
                mole1norm.setAttribute("hidden", "hidden");
                mole1evil.setAttribute("hidden", "hidden");
                mole1bday.removeAttribute("hidden");
                mole1bday.addEventListener('click', givePointsBday, {once: true});
            } else if (random >= 0.31 && random <= 0.4) {
                mole1mound.setAttribute("hidden", "hidden");
                mole1norm.setAttribute("hidden", "hidden");
                mole1bday.setAttribute("hidden", "hidden");
                mole1evil.removeAttribute("hidden");
                mole1evil.addEventListener('click', givePointsEvil, {once: true});
            } else if (random >= 0.41) {
                mole1norm.setAttribute("hidden", "hidden");
                mole1bday.setAttribute("hidden", "hidden");
                mole1evil.setAttribute("hidden", "hidden");
                mole1mound.removeAttribute("hidden");
            }
        } else if (secondsLeft === 0) {
            // End Game Functions:
            clearInterval(timerInterval);
            storeScore();
            renderScores();
            mole1mound.setAttribute("hidden", "hidden");
            mole1bday.setAttribute("hidden", "hidden");
            mole1evil.setAttribute("hidden", "hidden");
            mole1norm.removeAttribute("hidden");
            mole1norm.removeEventListener('click', givePointsNorm);
            mole1bday.removeEventListener('click', givePointsBday);
            mole1evil.removeEventListener('click', givePointsEvil);
            score.innerHTML = "score"; 
          }
    }, 750); 
    secondsLeft = 40;
    sum = 0;
};

// Starts the Game:
startButton.addEventListener('click', gameLogic);

// Points Logic for Normal Mole:
const givePointsNorm = function(){
    sum = sum + 10;
    score.textContent = sum
};
// Points Logic for Bday Mole:
const givePointsBday = function(){
    sum = sum + 30;
    score.textContent = sum
};
// Points Logic for Evil Mole:
const givePointsEvil = function(){
    sum = sum - 30;
    score.textContent = sum
};

// Stores scores to Local Storage: 
const storeScore = function () {
    const allScores = JSON.parse(localStorage.getItem('allScores')) || [];    
    allScores.push(sum);
    localStorage.setItem('allScores', JSON.stringify(allScores));
};


// Builds p tag in aside:
const builElement = function (){
    const createP = document.createElement("p");
    aside.append(createP);
    return {createP};
};

// Passes score to innerHTML for score message:
const renderScores = function () {
    const getScores = JSON.parse(localStorage.getItem('allScores'));
    aside.innerHTML = "";
    if (!getScores) {
        return; // Exit function since there's nothing to render
    }
    for (let i = 0; i < getScores.length; i++) {
        const gameScores = getScores[i];
        if (gameScores !== null) {
            const {createP} = builElement();
            const score = gameScores;
            createP.innerHTML = `You scored ${score} points! Try again!`;
        }
    }
};

renderScores();