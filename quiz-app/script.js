// question-container
// question-text
// choices-list
// next-btn
// result-container
// score
// restart-btn
// start-btn
document.addEventListener("DOMContentLoaded", () => {
  const quesContainer = document.getElementById("question-container");
  const quesText = document.getElementById("question-text");
  const choiceList = document.getElementById("choices-list");
  const resultcontainer = document.getElementById("result-container");
  const scoreElement = document.getElementById("score");
  const restartbtn = document.getElementById("restart-btn");
  const startbtn = document.getElementById("start-btn");
  const nextbtn = document.getElementById("next-btn");
  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];
  let currentQues = 0;
  let score = 0;
  startbtn.addEventListener("click", startQuiz);
  function startQuiz() {
    startbtn.classList.add("hidden");
    resultcontainer.classList.add("hidden");
    quesContainer.classList.remove("hidden");
    showQuestions();
  }
  function showQuestions() {
    nextbtn.classList.add("hidden");
    //displaing ques
    quesText.textContent = questions[currentQues].question;
    choiceList.innerHTM = "";
    //displaing the options
    questions[currentQues].choices.forEach((choices) => {
      const li = document.createElement("li");
      li.textContent = choices;
      li.addEventListener("click", () => selectAns(choices));
      choiceList.appendChild(li);
    });
  }
});
