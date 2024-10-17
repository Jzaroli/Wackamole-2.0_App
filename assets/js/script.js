const startButton = document.getElementById('startButton');
// Mole Selectors:
const mole1norm = document.getElementById('mole1norm');
const mole1mound = document.getElementById('mole1mound');
const mole1bday = document.getElementById('mole1bday')
const mole1evil = document.getElementById('mole1evil')
const mole2norm = document.getElementById('mole2norm');
const mole2mound = document.getElementById('mole2mound');
const mole2bday = document.getElementById('mole2bday')
const mole2evil = document.getElementById('mole2evil')
const mole3norm = document.getElementById('mole3norm');
const mole3mound = document.getElementById('mole3mound');
const mole3bday = document.getElementById('mole3bday')
const mole3evil = document.getElementById('mole3evil')
const mole4norm = document.getElementById('mole4norm');
const mole4mound = document.getElementById('mole4mound');
const mole4bday = document.getElementById('mole4bday')
const mole4evil = document.getElementById('mole4evil')

const score = document.getElementById('score');
const scoreSection = document.getElementById('scoreSection');
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
                mole3MoundAppears();
                mole4BdayClick();
            } else if (random >= 0.11 && random <= 0.20) {
                mole1BdayClick();
                mole2MoundAppears();
                mole3MoundAppears();
                mole4EvilClick();
            } else if (random >= 0.21 && random <= 0.3) {
                mole1EvilClick();
                mole2Click();
                mole3MoundAppears();
                mole4MoundAppears();
            } else if (random >= 0.31 && random <= 0.4) {
                mole1Click();
                mole2MoundAppears();
                mole3MoundAppears();
                mole4Click();
            } else if (random >= 0.41 && random <= 0.5) {
                mole1MoundAppears();
                mole2MoundAppears();
                mole3Click();
                mole4MoundAppears();
            } else if (random >= 0.51 && random <= 0.6) {
                mole1MoundAppears();
                mole2EvilClick();
                mole3BdayClick();
                mole4MoundAppears();
            } else if (random >= 0.61 && random <= 0.7) {
                mole1MoundAppears();
                mole2MoundAppears();
                mole3EvilClick();
                mole4MoundAppears();
            } else if (random >= 0.71 && random <= 0.8) {
                mole1MoundAppears();
                mole2Click();
                mole3MoundAppears();
                mole4MoundAppears();
            } else if (random >= 0.81 && random <= 0.9) {
                mole1MoundAppears();
                mole2MoundAppears();
                mole3Click();
                mole4MoundAppears();
            } else if (random >= 0.91 && random <= 1) {
                mole1MoundAppears();
                mole2BdayClick();
                mole3MoundAppears();
                mole4Click();
            }    
        } else if (secondsLeft === 0) {
            // End Game Functions:
            clearInterval(timerInterval);
            storeScore();
            renderScores();
            mole1Reset();
            mole2Reset();
            mole3Reset();
            mole4Reset();
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
};
//Mole 3 Functions
//Normal Mole 3 Appears for Clicking:
const mole3Click = function() {
    mole3mound.setAttribute("hidden", "hidden");
    mole3bday.setAttribute("hidden", "hidden");
    mole3evil.setAttribute("hidden", "hidden");
    mole3norm.removeAttribute("hidden");
    mole3norm.addEventListener('click', givePointsNorm, {once: true});
};
//Bday Mole 3 Appears for Clicking:
const mole3BdayClick = function () {
    mole3mound.setAttribute("hidden", "hidden");
    mole3norm.setAttribute("hidden", "hidden");
    mole3evil.setAttribute("hidden", "hidden");
    mole3bday.removeAttribute("hidden");
    mole3bday.addEventListener('click', givePointsBday, {once: true});
};
//Evil Mole 3 Appears for Clicking:
const mole3EvilClick = function() {
    mole3mound.setAttribute("hidden", "hidden");
    mole3norm.setAttribute("hidden", "hidden");
    mole3bday.setAttribute("hidden", "hidden");
    mole3evil.removeAttribute("hidden");
    mole3evil.addEventListener('click', givePointsEvil, {once: true});
};
//Mound for Mole 3 Appears:
const mole3MoundAppears = function () {
    mole3norm.setAttribute("hidden", "hidden");
    mole3bday.setAttribute("hidden", "hidden");
    mole3evil.setAttribute("hidden", "hidden");
    mole3mound.removeAttribute("hidden");
};
// Resets Mole 3 at the end of the game:
const mole3Reset = function () {
    mole3mound.removeAttribute("hidden");
    mole3bday.setAttribute("hidden", "hidden");
    mole3evil.setAttribute("hidden", "hidden");
    mole3norm.setAttribute("hidden", "hidden");
};
//Mole 4 Functions
//Normal Mole 4 Appears for Clicking:
const mole4Click = function() {
    mole4mound.setAttribute("hidden", "hidden");
    mole4bday.setAttribute("hidden", "hidden");
    mole4evil.setAttribute("hidden", "hidden");
    mole4norm.removeAttribute("hidden");
    mole4norm.addEventListener('click', givePointsNorm, {once: true});
};
//Bday Mole 4 Appears for Clicking:
const mole4BdayClick = function () {
    mole4mound.setAttribute("hidden", "hidden");
    mole4norm.setAttribute("hidden", "hidden");
    mole4evil.setAttribute("hidden", "hidden");
    mole4bday.removeAttribute("hidden");
    mole4bday.addEventListener('click', givePointsBday, {once: true});
};
//Evil Mole 4 Appears for Clicking:
const mole4EvilClick = function() {
    mole4mound.setAttribute("hidden", "hidden");
    mole4norm.setAttribute("hidden", "hidden");
    mole4bday.setAttribute("hidden", "hidden");
    mole4evil.removeAttribute("hidden");
    mole4evil.addEventListener('click', givePointsEvil, {once: true});
};
//Mound for Mole 4 Appears:
const mole4MoundAppears = function () {
    mole4norm.setAttribute("hidden", "hidden");
    mole4bday.setAttribute("hidden", "hidden");
    mole4evil.setAttribute("hidden", "hidden");
    mole4mound.removeAttribute("hidden");
};
// Resets Mole 4 at the end of the game:
const mole4Reset = function () {
    mole4mound.setAttribute("hidden", "hidden");
    mole4bday.setAttribute("hidden", "hidden");
    mole4evil.setAttribute("hidden", "hidden");
    mole4norm.removeAttribute("hidden");
    mole4norm.removeEventListener('click', givePointsNorm);
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

// Builds p tag in score section:
const builElement = function () {
    const createP = document.createElement("p");
    scoreSection.append(createP);
    return {createP};
};

// Passes score to innerHTML for score message:
const renderScores = function () {
    const getScores = JSON.parse(localStorage.getItem('allScores'));
    scoreSection.innerHTML = "";
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

//Renders Scores from Local Storage:
renderScores();