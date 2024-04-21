if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    // Event listener
    recognition.onresult = function (event) {
        var transcript = event.results[0][0].transcript.toLowerCase().replace(/\s+/g, '');
        console.log('Game Transcript:', transcript);

        // Check if the transcript includes the word "check"
        if (transcript.includes('check')) {
            var words = transcript.split('');
            for (const category in categories) {
                if (words.includes(category)) {
                    checkAnswer(category);
                    recognition.stop();
                    return;
                }
            }
        }

        console.log('Game Command not recognized');
    };

    recognition.onerror = function (event) {
        console.error('Game Speech recognition error:', event.error);
    };

    recognition.start();
} else {
    console.error('Game Speech recognition not supported');
}