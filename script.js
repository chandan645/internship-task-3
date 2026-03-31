// ============================
// ✅ INTERACTIVE QUIZ
// ============================

const quizData = [
{
    question: "Which is the capital of India?",
    answers: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    correct: 1
},
{
    question: "Which language is used for web styling?",
    answers: ["HTML", "CSS", "Python", "Java"],
    correct: 1
},
{
    question: "Which method is used to fetch API data?",
    answers: ["getData()", "fetch()", "loadAPI()", "request()"],
    correct: 1
}
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    const current = quizData[currentQuestion];
    questionEl.textContent = current.question;
    answersEl.innerHTML = "";

    current.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(index);
        answersEl.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].correct) {
        score++;
    }
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
        nextBtn.style.display = "none";
    } else {
        quiz.innerHTML = `<h3>Your Score: ${score}/${quizData.length}</h3>`;
    }
});

loadQuestion();


// ============================
// ✅ FETCH DATA FROM API
// ============================

const jokeText = document.getElementById("joke");
const jokeBtn = document.getElementById("getJoke");

jokeBtn.addEventListener("click", fetchJoke);

async function fetchJoke() {
    jokeText.textContent = "Loading joke...";

    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();
        jokeText.textContent = `${data.setup} 😂 ${data.punchline}`;
    } catch (error) {
        jokeText.textContent = "Failed to fetch joke.";
    }
}