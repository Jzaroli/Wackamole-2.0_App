const startButton = document.getElementById('startButton');

const mole1norm = document.getElementById('mole1norm');
const mole1mound = document.getElementById('mole1mound');
const mole1bday = document.getElementById('mole1bday')
const mole1evil = document.getElementById('mole1evil')
const mole2norm = document.getElementById('mole2norm');
const mole2mound = document.getElementById('mole2mound');
const mole2bday = document.getElementById('mole2bday')
const mole2evil = document.getElementById('mole2evil')

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
            //Randomized Moles Appear:
            if (random < 0.1){
                mole1Click();
                mole2MoundAppears();
            } else if (random >= 0.11 && random <= 0.20) {
                mole1BdayClick();
                mole2MoundAppears();
            } else if (random >= 0.21 && random <= 0.3) {
                mole1EvilClick();
                mole2Click();
            } else if (random >= 0.31 && random <= 0.4) {
                mole1Click();
                mole2MoundAppears();
            } else if (random >= 0.41 && random <= 0.5) {
                mole1MoundAppears();
                mole2Click();
            } else if (random >= 0.51 && random <= 0.6) {
                mole1MoundAppears();
                mole2EvilClick();
            } else if (random >= 0.61 && random <= 0.7) {
                mole1MoundAppears();
                mole2MoundAppears();
            } else if (random >= 0.71 && random <= 0.8) {
                mole1MoundAppears();
                mole2Click();
            } else if (random >= 0.81 && random <= 0.9) {
                mole1MoundAppears();
                mole2MoundAppears();
            } else if (random >= 0.91 && random <= 1) {
                mole1MoundAppears();
                mole2BdayClick();
            }    
        } else if (secondsLeft === 0) {
            // End Game Functions:
            clearInterval(timerInterval);
            storeScore();
            renderScores();
            mole1Reset();
            mole2Reset();
            score.innerHTML = "score"; 
        }
        }, 750); 
    secondsLeft = 40;
    sum = 0;
};

//Mole 1 Functions
//Normal Mole 1 Appears for Clicking:
const mole1Click = function() {
    mole1mound.setAttribute("hidden", "hidden");
    mole1bday.setAttribute("hidden", "hidden");
    mole1evil.setAttribute("hidden", "hidden");
    mole1norm.removeAttribute("hidden");
    mole1norm.addEventListener('click', givePointsNorm, {once: true});
};
//Bday Mole 1 Appears for Clicking:
const mole1BdayClick = function () {
    mole1mound.setAttribute("hidden", "hidden");
    mole1norm.setAttribute("hidden", "hidden");
    mole1evil.setAttribute("hidden", "hidden");
    mole1bday.removeAttribute("hidden");
    mole1bday.addEventListener('click', givePointsBday, {once: true});
};
//Evil Mole 1 Appears for Clicking:
const mole1EvilClick = function() {
    mole1mound.setAttribute("hidden", "hidden");
    mole1norm.setAttribute("hidden", "hidden");
    mole1bday.setAttribute("hidden", "hidden");
    mole1evil.removeAttribute("hidden");
    mole1evil.addEventListener('click', givePointsEvil, {once: true});
};
//Mound for Mole 1 Appears:
const mole1MoundAppears = function () {
    mole1norm.setAttribute("hidden", "hidden");
    mole1bday.setAttribute("hidden", "hidden");
    mole1evil.setAttribute("hidden", "hidden");
    mole1mound.removeAttribute("hidden");
};
// Resets Mole 1 at the end of the game:
const mole1Reset = function () {
    mole1mound.setAttribute("hidden", "hidden");
    mole1bday.setAttribute("hidden", "hidden");
    mole1evil.setAttribute("hidden", "hidden");
    mole1norm.removeAttribute("hidden");
    mole1norm.removeEventListener('click', givePointsNorm);
    mole1bday.removeEventListener('click', givePointsBday);
    mole1evil.removeEventListener('click', givePointsEvil);
};

//Mole 2 Functions
//Normal Mole 2 Appears for Clicking:
const mole2Click = function() {
    mole2mound.setAttribute("hidden", "hidden");
    mole2bday.setAttribute("hidden", "hidden");
    mole2evil.setAttribute("hidden", "hidden");
    mole2norm.removeAttribute("hidden");
    mole2norm.addEventListener('click', givePointsNorm, {once: true});
};
//Bday Mole 2 Appears for Clicking:
const mole2BdayClick = function () {
    mole2mound.setAttribute("hidden", "hidden");
    mole2norm.setAttribute("hidden", "hidden");
    mole2evil.setAttribute("hidden", "hidden");
    mole2bday.removeAttribute("hidden");
    mole2bday.addEventListener('click', givePointsBday, {once: true});
};
//Evil Mole 2 Appears for Clicking:
const mole2EvilClick = function() {
    mole2mound.setAttribute("hidden", "hidden");
    mole2norm.setAttribute("hidden", "hidden");
    mole2bday.setAttribute("hidden", "hidden");
    mole2evil.removeAttribute("hidden");
    mole2evil.addEventListener('click', givePointsEvil, {once: true});
};
//Mound for Mole 2 Appears:
const mole2MoundAppears = function () {
    mole2norm.setAttribute("hidden", "hidden");
    mole2bday.setAttribute("hidden", "hidden");
    mole2evil.setAttribute("hidden", "hidden");
    mole2mound.removeAttribute("hidden");
};
// Resets Mole 2 at the end of the game:
const mole2Reset = function () {
    mole2mound.removeAttribute("hidden");
    mole2bday.setAttribute("hidden", "hidden");
    mole2evil.setAttribute("hidden", "hidden");
    mole2norm.setAttribute("hidden", "hidden");
    mole2norm.removeEventListener('click', givePointsNorm);
    mole2bday.removeEventListener('click', givePointsBday);
    mole2evil.removeEventListener('click', givePointsEvil);
};

// Starts the Game:
startButton.addEventListener('click', gameLogic);

// Points Logic for Normal Moles:
const givePointsNorm = function() {
    sum = sum + 10;
    score.textContent = sum
};
// Points Logic for Bday Moles:
const givePointsBday = function() {
    sum = sum + 30;
    score.textContent = sum
};
// Points Logic for Evil Moles:
const givePointsEvil = function() {
    sum = sum - 50;
    score.textContent = sum
};

// Stores scores to Local Storage: 
const storeScore = function () {
    const allScores = JSON.parse(localStorage.getItem('allScores')) || [];    
    allScores.push(sum);
    localStorage.setItem('allScores', JSON.stringify(allScores));
};

// Builds p tag in aside:
const builElement = function () {
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

//Renders Scores on Load from Local Storage:
renderScores();