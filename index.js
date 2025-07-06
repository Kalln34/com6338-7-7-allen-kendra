// Your code here
var questionsArr = [
  {
    question: 'Who was the first Disney character created by Walt Disney?',
    answer: 'Mickey Mouse',
    options: ['Mickey Mouse', 'Goofy', 'Donald Duck', 'Snow White']
  },
  {
    question: 'The Playstation game console was developed by which company?',
    answer: 'Sony',
    options: ['Nintendo', 'Sega', 'Sony', 'Microsoft']
  },
  {
    question: 'Which one of the following is the largest ocean in the world?',
    answer: 'Pacific Ocean',
    options: ['Arctic Ocean', 'Indian Ocean', 'Atlantic Ocean', 'Pacific Ocean']
  },
  {
    question: 'What is the smallest country in the world?',
    answer: 'Vatican City',
    options: ['Tobago', 'Seychelles', 'Vatican City', 'Luxemburg']
  },
  {
    question: 'Hickory trees produce which types of nuts?',
    answer: 'Pecans',
    options: ['Pecans', 'Walnuts', 'Pistachio Nuts', 'Macadamia']
  }
];

// quiz variables
var currentQuestionIndex = 0;
var correctAnswers = 0;
var timerId = null;
var timeLeft = 30;

const quizContainer = document.getElementById('quiz');

// Previous score and start button
function loadStartScreen(){
  quizContainer.innerHTML = '';

  const previousScore = localStorage.getItem('previous-score');
  if (previousScore !== null) {
    const scorePara = document.createElement('p');
    scorePara.textContent = `Previous Score: ${previousScore}%`;
    quizContainer.appendChild(scorePara);
  }

  const startButton = document.createElement('button');
  startButton.id = 'start-quiz';
  startButton.textContent = 'Start Quiz!';
  startButton.addEventListener('click', startQuiz);
  quizContainer.appendChild(startButton);
}

// starting quiz game
function startQuiz() {
  currentQuestionIndex = 0;
  correctAnswers = 0;
  showQuestion();
}

// showing the questions
function showQuestion() {
  clearInterval(timerId);
  timeLeft = 30;

  quizContainer.innerHTML = '';

  const questionObj = questionsArr[currentQuestionIndex];

  const questionPara = document.createElement('p');
  questionPara.textContent = questionObj.question;
  quizContainer.appendChild(questionPara);

  const optionsDiv = document.createElement('div');
  questionObj.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.addEventListener('click', () => handleAnswer(option));
    optionsDiv.appendChild(btn);
  });
  quizContainer.appendChild(optionsDiv);

  const timerPara = document.createElement('p');
  timerPara.textContent = timeLeft;
  quizContainer.appendChild(timerPara);

  // timer
  timerId = setInterval(() => {
    timeLeft--;
    timerPara.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      nextQuestion();
    }
  }, 1000);
}

function handleAnswer(selected){
  clearInterval(timerId);
  const correctAnswer = questionsArr[currentQuestionIndex].answer;
  if (selected === correctAnswer) {
    correctAnswers++;
  }
  nextQuestion();
}

function nextQuestion(){
  currentQuestionIndex++;
  if (currentQuestionIndex < questionsArr.length) {
    showQuestion();
  } else {
    endGame();
  }
}

function endGame(){
  const scorePercent = Math.round((correctAnswers / questionsArr.length) * 100);
  localStorage.setItem('previous-score', scorePercent);
  loadStartScreen();
}

loadStartScreen();

