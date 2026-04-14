const quizData = [
  {
    question: "What does CSS stand for?",
    options: {
      a: "Computer Style Sheet",
      b: "Creative Style System",
      c: "Cascading Style Sheets",
      d: "Colorful Style Syntax"
    },
    correct: "c"
  },
  {
    question: "Which HTML tag is used for JavaScript?",
    options: {
      a: "<js>",
      b: "<javascript>",
      c: "<code>",
      d: "<script>"
    },
    correct: "d"
  },
  {
    question: "Which language is used for web apps?",
    options: {
      a: "PHP",
      b: "Python",
      c: "JavaScript",
      d: "All of the above"
    },
    correct: "d"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: {
      a: "<!-- -->",
      b: "//",
      c: "**",
      d: "##"
    },
    correct: "b"
  },
  {
    question: "What does HTML stand for?",
    options: {
      a: "Hyper Trainer Marking Language",
      b: "Hyper Text Markup Language",
      c: "Hyper Text Marketing Language",
      d: "Hyper Tool Multi Language"
    },
    correct: "b"
  },
  {
    question: "Which company developed JavaScript?",
    options: {
      a: "Google",
      b: "Microsoft",
      c: "Netscape",
      d: "Apple"
    },
    correct: "c"
  },
  {
    question: "Inside which HTML element do we put CSS?",
    options: {
      a: "<css>",
      b: "<script>",
      c: "<style>",
      d: "<design>"
    },
    correct: "c"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: {
      a: "var",
      b: "int",
      c: "string",
      d: "define"
    },
    correct: "a"
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: {
      a: "class",
      b: "style",
      c: "font",
      d: "styles"
    },
    correct: "b"
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: {
      a: "alertBox('Hello World');",
      b: "msg('Hello World');",
      c: "alert('Hello World');",
      d: "msgBox('Hello World');"
    },
    correct: "c"
  },
  {
  question: "Which HTML tag is used to create a hyperlink?",
  options: {
    a: "<link>",
    b: "<a>",
    c: "<href>",
    d: "<url>"
  },
  correct: "b"
},
{
  question: "Which property is used to change text color in CSS?",
  options: {
    a: "font-color",
    b: "text-color",
    c: "color",
    d: "background-color"
  },
  correct: "c"
},
{
  question: "Which method is used to select an element by ID in JavaScript?",
  options: {
    a: "getElementById()",
    b: "querySelectorAll()",
    c: "getElementsByClass()",
    d: "selectElement()"
  },
  correct: "a"
},
{
  question: "Which HTML tag is used to display an image?",
  options: {
    a: "<img>",
    b: "<image>",
    c: "<src>",
    d: "<pic>"
  },
  correct: "a"
},
{
  question: "What is the default position value in CSS?",
  options: {
    a: "absolute",
    b: "relative",
    c: "fixed",
    d: "static"
  },
  correct: "d"
},
{
  question: "Which operator is used for strict equality in JavaScript?",
  options: {
    a: "==",
    b: "=",
    c: "===",
    d: "!="
  },
  correct: "c"
},
{
  question: "Which HTML tag is used for line break?",
  options: {
    a: "<lb>",
    b: "<break>",
    c: "<br>",
    d: "<line>"
  },
  correct: "c"
},
{
  question: "Which CSS property controls the size of text?",
  options: {
    a: "font-style",
    b: "text-size",
    c: "font-size",
    d: "text-style"
  },
  correct: "c"
},
{
  question: "Which function converts JSON to a JavaScript object?",
  options: {
    a: "JSON.parse()",
    b: "JSON.stringify()",
    c: "JSON.convert()",
    d: "JSON.toObject()"
  },
  correct: "a"
},
{
  question: "Which HTML tag is used for the largest heading?",
  options: {
    a: "<h6>",
    b: "<heading>",
    c: "<h1>",
    d: "<head>"
  },
  correct: "c"
},
{
  question: "Which CSS property is used to make text bold?",
  options: {
    a: "font-weight",
    b: "text-bold",
    c: "font-style",
    d: "weight"
  },
  correct: "a"
},
{
  question: "Which event occurs when a user clicks on an HTML element?",
  options: {
    a: "onmouseclick",
    b: "onchange",
    c: "onclick",
    d: "onhover"
  },
  correct: "c"
},
{
  question: "Which HTML tag is used to create a table?",
  options: {
    a: "<tab>",
    b: "<table>",
    c: "<tr>",
    d: "<td>"
  },
  correct: "b"
},
{
  question: "Which CSS property is used to change background color?",
  options: {
    a: "bgcolor",
    b: "color",
    c: "background-color",
    d: "background-style"
  },
  correct: "c"
},
{
  question: "Which keyword is used to define a function in JavaScript?",
  options: {
    a: "func",
    b: "function",
    c: "define",
    d: "method"
  },
  correct: "b"
},
{
  question: "Which HTML attribute specifies an alternate text for an image?",
  options: {
    a: "title",
    b: "alt",
    c: "src",
    d: "href"
  },
  correct: "b"
},
{
  question: "Which CSS property is used to center text?",
  options: {
    a: "align",
    b: "text-align",
    c: "center-text",
    d: "font-align"
  },
  correct: "b"
},
{
  question: "Which JavaScript method is used to write into the console?",
  options: {
    a: "console.write()",
    b: "console.log()",
    c: "print()",
    d: "log.console()"
  },
  correct: "b"
},
{
  question: "Which HTML tag is used to create an unordered list?",
  options: {
    a: "<ol>",
    b: "<ul>",
    c: "<li>",
    d: "<list>"
  },
  correct: "b"
},
{
  question: "Which CSS property is used to add space inside an element?",
  options: {
    a: "margin",
    b: "padding",
    c: "spacing",
    d: "border"
  },
  correct: "b"
}
];

let currentIndex = 0;
let score = 0;
let selectedAnswer = null;
let timer;
let timeLeft = 15;

const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const nextBtn = document.getElementById("next");
const timerDisplay = document.getElementById("time");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

const scoreContainer = document.getElementById("scoreContainer");
const finalScore = document.getElementById("finalScore");
const reviewList = document.getElementById("reviewList");
const quiz = document.getElementById("quiz");

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 15;
  timerDisplay.textContent = timeLeft;

  const data = quizData[currentIndex];
  questionEl.textContent = data.question;

  Object.entries(data.options).forEach(([key, value]) => {
    document.getElementById(key).textContent = `${key.toUpperCase()}: ${value}`;
  });

  progressText.textContent = `Question ${currentIndex + 1}`;
  progressFill.style.width = `${(currentIndex / quizData.length) * 100}%`;

  optionButtons.forEach(btn => {
    btn.disabled = false;
    btn.classList.remove("selected", "correct", "wrong");
  });

  selectedAnswer = null;
  nextBtn.disabled = true;

  startTimer();
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (timeLeft <= 5) timerDisplay.style.color = "red";

    if (timeLeft <= 0) {
      clearInterval(timer);
      handleNext();
    }
  }, 1000);
}

optionButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    selectedAnswer = btn.id;
    nextBtn.disabled = false;

    optionButtons.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

nextBtn.addEventListener("click", handleNext);

function handleNext() {
  clearInterval(timer);

  const correct = quizData[currentIndex].correct;

  optionButtons.forEach(btn => {
    btn.disabled = true;
    if (btn.id === correct) btn.classList.add("correct");
    else if (btn.id === selectedAnswer) btn.classList.add("wrong");
  });

  if (selectedAnswer === correct) score++;

  setTimeout(() => {
    currentIndex++;
    if (currentIndex < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  quiz.style.display = "none";
  scoreContainer.style.display = "block";
  finalScore.textContent = `${score}/${quizData.length}`;
}

loadQuestion();