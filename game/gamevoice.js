// gamevoice.js

// Web Speech API for game commands
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US'; 
    recognition.interimResults = false; 

    // Event listener 
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript.toLowerCase();
        console.log('Game Transcript:', transcript);

        if (transcript.includes('submit')) {
            checkAnswer();
        } else if (transcript.includes('restart')) {
            restartGame();
        } else if (transcript.includes('exit game')) {
            exitGame();
        } else {
            console.log('Game Command not recognized');
            // Provide visual or auditory feedback to the user
        }
    };

    recognition.onerror = function(event) {
        console.error('Game Speech recognition error:', event.error);
        // Provide feedback to the user about the error
    };

    recognition.start();
} else {
    console.error('Game Speech recognition not supported');
    // Inform the user that speech recognition is not supported
}

function exitGame() {
    console.log('Exiting the game...');
    // Add code here to handle exiting the game, such as redirecting to a different page or closing the game interface
}
