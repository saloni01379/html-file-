const questions = [
    {
        question: "What is 38 * 9?",
        options: ["342", "474", "585", "526"],
        answer: "342"
    },
    {
        question: "What is the capital of India?",
        options: ["Delhi", "Bihar", "Tamil nadu", "I"],
        answer: "I"
    },
    {
        question: "What does PHP stand for?",
       options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"],
      answer: "Hypertext Preprocessor",
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Preprocessor",
          "Hyper Text Markup Language",
          "Hyper Text Multiple Language",
          "Hyper Tool Multi Language"],
          answer: "Hyper Text Markup Language",
    },
    {
        question: "What does CSS stand for?",
        options: [
          "Common Style Sheet",
          "Colorful Style Sheet",
          "Computer Style Sheet",
          "Cascading Style Sheet" ],
        answer: "Cascading Style Sheet",
    },
    {
        question: "What does SQL stand for?",
        options: [
          "Stylish Question Language",
          "Stylesheet Query Language",
          "Statement Question Language",
          "Structured Query Language"],
        answer: "Structured Query Language",
    },
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timer;

const startBtn = document.getElementById('start-btn');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const timeElement = document.getElementById('time');
const resultElement = document.getElementById('result');

startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startBtn.classList.add('hide');
    startTimer();
    showQuestion();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timeElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        endQuiz();
        return;
    }

    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    optionsElement.innerHTML = '';
    
    q.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(option));
        optionsElement.appendChild(button);
    });
}

function selectAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].answer) {
        score++;
    }
    
    currentQuestion++;
    showQuestion();
}

function endQuiz() {
    clearInterval(timer);
    questionElement.classList.add('hide');
    optionsElement.classList.add('hide');
    resultElement.textContent = `Your score: ${score} out of ${questions.length}`;
}

