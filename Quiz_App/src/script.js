const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
    answer: "Blue Whale",
  },
  {
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
  },
];
const divSection = document.querySelector("#div");
const NextQuestion = document.querySelector("#Next");
const startBtn = document.querySelector("#Start");
const list = document.querySelector("#ul");

let currentQuestionIndex = 0;
let score = 0;

const start = () => {
  divSection.classList.remove("hidden");
  startBtn.classList.add("hidden");
  NextQuestion.classList.remove("hidden");
  currentQuestionIndex = 0;
  score = 0;
  ShowQuestions();
};

function ShowQuestions() {
  divSection.innerHTML = "";
  if (currentQuestionIndex >= quizQuestions.length) {
    divSection.innerHTML = `<h1>Quiz Completed!</h1> <h2>${score} Out of ${quizQuestions.length}`;
    NextQuestion.classList.add("hidden");
    startBtn.classList.remove("hidden");
    return;
  }

  const Questions = document.createElement("h2");
  Questions.textContent = quizQuestions[currentQuestionIndex].question;
  divSection.appendChild(Questions);
  console.log(Questions);

  const ul = document.createElement("ul");

  quizQuestions[currentQuestionIndex].options.forEach((option) => {
    const li = document.createElement("li");
    li.textContent = option;
    ul.appendChild(li);

    li.addEventListener("click", () => {
      if (option === quizQuestions[currentQuestionIndex].answer) {
        score++;
        li.classList.add("green");
      } else {
        li.classList.add("red");
      }
      currentQuestionIndex++;
    });
  });
  divSection.appendChild(ul);
}

NextQuestion.addEventListener("click", () => {
  ShowQuestions();
});
