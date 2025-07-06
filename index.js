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
var score = 0;
var timerId = null;
var timeLeft = 30;

const quizContainer = document.getElementById('quiz');

// Previous score and start button
function loadStartScreen() {
  quizContainer.innerHTML = '';

  const previousScore=localStorage.getItem('previous-score');
  if(previousScore !== null) {
    const scoreP = document.createElement('p');
    scoreP.textContent = 'Previous Score: ${previousScore}%';
    quizDiv.appendChild(scoreP);
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
  score = 0;
  showQuestion();
}