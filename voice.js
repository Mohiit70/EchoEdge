// Web Speech API
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {

    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.lang = 'en-US'; 
    recognition.interimResults = false; 

    // Event listener 
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript.toLowerCase();
        console.log('Transcript:', transcript);

        if (transcript.includes('game')) {
            startGame();
        } else if (transcript.includes('resource')) {
            navigateToResources();
        } else if (transcript.includes('job')) {
            navigateToJob();
        } else if (transcript.includes('contact')) {
            navigateToContact();
        } else if (transcript.includes('home')) {
            navigateToHome();
        } else {
            console.log('Command not recognized');
        }
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
    };

    recognition.start();
} else {
    console.error('Speech recognition not supported');
}

function startGame() {
    console.log('Starting the game...');
}

function navigateToResources() {
    window.location.href = 'resources.html';
}

function navigateToJob() {
    window.location.href = 'job.html';
}

function navigateToContact() {
    window.location.href = 'contact.html';
}

function navigateToHome() {
    window.location.href = 'index.html';
}
