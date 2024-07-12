const startCalcButton = document.getElementById('start-calc');
const output = document.getElementById('output');

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = function(event) {
        const calculation = event.results[0][0].transcript;
        try {
            const result = eval(calculation);
            output.innerHTML = `Result: ${result}`;
        } catch (e) {
            output.innerHTML = 'Invalid calculation. Please try again.';
        }
    };

    recognition.onerror = function(event) {
        output.innerHTML = 'There was an error with the speech recognition.';
    };

    recognition.onend = function() {
        recognition.stop();
    };

    startCalcButton.addEventListener('click', () => {
        recognition.start();
        output.innerHTML = 'Listening...';
    });
} else {
    output.innerHTML = 'Your browser does not support the Web Speech API.';
}