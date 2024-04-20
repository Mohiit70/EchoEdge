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

function checkAnswer() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    if (categories[currentCategory].includes(userInput)) {
        score++;
        document.getElementById("score-display").textContent = `Score: ${score}`;
        document.getElementById("user-input").value = "";
        document.getElementById("error-message").textContent = "";
        displayCategory();
        correctSound.play(); // Play correct answer sound
    } else {
        document.getElementById("error-message").textContent = "Incorrect answer!";
        incorrectSound.play(); // Play incorrect answer sound
    }
}

window.onload = function () {
    displayCategory();
};
