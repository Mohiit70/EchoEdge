const startQuizButton = document.getElementById('start-quiz');
const output = document.getElementById('output');
const animalSound = document.getElementById('animal-sound');

const animals = [
    { name: 'dog', sound: 'sounds/dog.mp3' },
    { name: 'cat', sound: 'sounds/cat.mp3' },
    { name: 'cow', sound: 'sounds/cow.mp3' },
    { name: 'horse', sound: 'sounds/horse.mp3' }
];

let currentAnimal;

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = function(event) {
        const userGuess = event.results[0][0].transcript.toLowerCase();
        if (userGuess === currentAnimal.name) {
            output.innerHTML = `Correct! The animal was a ${currentAnimal.name}.`;
        } else {
            output.innerHTML = `Wrong! The animal was a ${currentAnimal.name}.`;
        }
    };

    recognition.onerror = function(event) {
        output.innerHTML = 'There was an error with the speech recognition.';
    };

    recognition.onend = function() {
        recognition.stop();
    };

    startQuizButton.addEventListener('click', () => {
        currentAnimal = animals[Math.floor(Math.random() * animals.length)];
        animalSound.src = currentAnimal.sound;
        animalSound.play();
        output.innerHTML = 'Listening...';
        recognition.start();
    });
} else {
    output.innerHTML = 'Your browser does not support the Web Speech API.';
}