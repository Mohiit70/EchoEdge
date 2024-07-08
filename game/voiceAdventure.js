const storyElement = document.getElementById('story');
const startButton = document.getElementById('start-button');

const story = [
    { text: "You are in a dark forest. Do you go left or right?", options: ["left", "right"] },
    { text: "You encounter a river. Do you swim across or build a raft?", options: ["swim", "raft"] },
    { text: "You find a treasure chest. Do you open it or leave it?", options: ["open", "leave"] },
    { text: "Congratulations! You have completed your adventure!", options: [] }
];

let currentStep = 0;

function startVoiceAdventure() {
    startButton.style.display = 'none';
    nextStep();
}

function nextStep() {
    if (currentStep < story.length) {
        storyElement.textContent = story[currentStep].text;
        listenForCommands(story[currentStep].options);
    } else {
        storyElement.textContent = "The adventure has ended.";
    }
}

function listenForCommands(options) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = function(event) {
        const command = event.results[0][0].transcript.toLowerCase();
        if (options.includes(command)) {
            currentStep++;
            nextStep();
        } else {
            storyElement.textContent = "I didn't understand that. " + story[currentStep].text;
            listenForCommands(options);
        }
    };

    recognition.onerror = function(event) {
        storyElement.textContent = "Error occurred in recognition: " + event.error;
        listenForCommands(options);
    };
}
