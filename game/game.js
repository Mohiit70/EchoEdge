const categories = {
    animals: ["lion", "elephant", "monkey", "giraffe", "tiger"],
    colors: ["red", "blue", "green", "yellow", "orange"],
    countries: ["USA", "Canada", "France", "Japan", "Brazil"],
    fruits: ["apple", "banana", "orange", "grapes", "strawberry"],
    vegetables: ["carrot", "potato", "tomato", "onion", "broccoli"]
};

let currentCategory = "";
let score = 0;

const correctSound = new Audio('sound/Your answer is correct 1.wav');
const incorrectSound = new Audio('sound/Sorry you answer is incor 1.wav');

function displayCategory() {
    const categoryList = Object.keys(categories);
    const categoryIndex = Math.floor(Math.random() * categoryList.length);
    currentCategory = categoryList[categoryIndex];
    document.getElementById("category-display").textContent = `Category: ${currentCategory}`;
}

function checkAnswer(category) {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    if (categories[category].includes(userInput)) {
        score++;
        document.getElementById("score-display").textContent = `Score: ${score}`;
        document.getElementById("user-input").value = "";
        document.getElementById("error-message").textContent = "";
        displayCategory();
        correctSound.play(); // Play correct answer sound
    } else {
        document.getElementById("error-message").textContent = "Sorry, that's not correct. Please try again.";
        incorrectSound.play(); // Play incorrect answer sound
    }
}

function restartGame() {
    score = 0;
    document.getElementById("score-display").textContent = `Score: ${score}`;
    document.getElementById("user-input").value = "";
    document.getElementById("error-message").textContent = "";
    displayCategory();
}

function exitGame() {
    console.log('Exiting the game...');
    // Your code to exit the game
}

window.onload = function () {
    displayCategory();
};