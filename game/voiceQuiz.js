const startButton = document.getElementById('start-button');
const questionElement = document.getElementById('question');

const questions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" }
];

let currentQuestionIndex = 0;
let recognition;

function startQuiz() {
    currentQuestionIndex = 0;
    askQuestion();
}

function askQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionElement.textContent = questions[currentQuestionIndex].question;
        startListening();
    } else {
        questionElement.textContent = "Quiz completed!";
    }
}

function startListening() {
    if (!('webkitSpeechRecognition' in window)) {
        alert('Your browser does not support speech recognition.');
        return;
    }

    recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript.trim().toLowerCase();
        const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();
        if (transcript === correctAnswer) {
            alert('Correct!');
        } else {
            alert(`Incorrect! The correct answer was: ${questions[currentQuestionIndex].answer}`);
        }
        currentQuestionIndex++;
        askQuestion();
    };

    recognition.onerror = function(event) {
        console.error(event.error);
        recognition.stop();
    };
}

startButton.addEventListener('click', startQuiz);
