const startGameButton = document.getElementById('start-game');
const output = document.getElementById('output');

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    let targetNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    recognition.onresult = function(event) {
        const userGuess = parseInt(event.results[0][0].transcript, 10);
        attempts++;

        if (isNaN(userGuess)) {
            output.innerHTML = 'Please say a number.';
        } else if (userGuess === targetNumber) {
            output.innerHTML = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
        } else if (userGuess < targetNumber) {
            output.innerHTML = `Too low. Try again.`;
        } else {
            output.innerHTML = `Too high. Try again.`;
        }
    };

    recognition.onerror = function(event) {
        output.innerHTML = 'There was an error with the speech recognition.';
    };

    recognition.onend = function() {
        recognition.stop();
    };

    startGameButton.addEventListener('click', () => {
        recognition.start();
        output.innerHTML = 'Listening...';
    });
} else {
    output.innerHTML = 'Your browser does not support the Web Speech API.';
}