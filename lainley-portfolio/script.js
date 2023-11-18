const questions = [
    {
      question: 'What is 2 + 2?',
      choices: ['3', '4', '5', '6'],
      correctAnswer: '4',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      choices: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
    },
    {
      question: 'What is the capital of France?',
      choices: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 'Paris',
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const choicesElement = document.getElementById('choices');
  const scoreElement = document.getElementById('score-value');
  const nextButton = document.getElementById('next');
  
  function displayQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    choicesElement.innerHTML = '';
    q.choices.forEach((choice, index) => {
      const label = document.createElement('label');
      label.textContent = choice;
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'choice';
      input.value = choice;
      label.appendChild(input);
      choicesElement.appendChild(label);
    });
  }
  
  function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
      const userAnswer = selectedChoice.value;
      if (userAnswer === questions[currentQuestion].correctAnswer) {
        score++;
      }
      scoreElement.textContent = score;
    }
  }
  
  function nextQuestion() {
    checkAnswer();
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      questionElement.textContent =
        'Quiz completed! Your score: ' + score + '/' + questions.length;
      choicesElement.innerHTML = '';
      nextButton.style.display = 'none';
    }
  }
  
  nextButton.addEventListener('click', nextQuestion);
  displayQuestion();