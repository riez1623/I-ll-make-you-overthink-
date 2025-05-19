const questions = [
  "Will they ever text me back?",
  "Does she still think about me?",
  "Is it really over?",
  "Was I the problem?",
  "Did she move on already?",
  "Is she stalking my profile?",
  "Was she lying the whole time?",
  "Will I ever mean anything to her?",
  "Will I ever be enough?",
  "Did she fake everything?",
  "Was it love or just boredom?",
  "Am I being too dramatic?"
];

const answers = [
  "LOL no chance.",
  "Maybe, or maybe not.",
  "It's complicated... probably not.",
  "Nah, you’re good.",
  "She moved on faster than you blink.",
  "She’s definitely lurking.",
  "She was, and then some.",
  "Only if you change.",
  "You’ll always wonder.",
  "She made it all up.",
  "It was boredom. Sorry.",
  "Yes, but that’s okay."
];

const container = document.getElementById('container');
const questionDiv = document.getElementById('question');
const answerDiv = document.getElementById('answer');

let showingAnswer = false;
let currentIndex = -1;

function getRandomIndex(arrLength, exclude = -1) {
  let index;
  do {
    index = Math.floor(Math.random() * arrLength);
  } while(index === exclude);
  return index;
}

function shakeElement(element) {
  element.classList.add('shake');
  element.addEventListener('animationend', () => {
    element.classList.remove('shake');
  }, {once: true});
}

container.addEventListener('click', () => {
  if (!showingAnswer) {
    // Shake before reveal
    shakeElement(container);

    // Delay answer reveal for dramatic effect
    setTimeout(() => {
      // Pick a random question different from last
      currentIndex = getRandomIndex(questions.length, currentIndex);
      questionDiv.textContent = questions[currentIndex];
      answerDiv.textContent = answers[currentIndex];
      answerDiv.classList.add('show');
      showingAnswer = true;
    }, 400);
  } else {
    // Reset for next question
    answerDiv.classList.remove('show');
    // Small delay to reset question text after fade-out
    setTimeout(() => {
      questionDiv.textContent = "Click to get your question";
      answerDiv.textContent = "";
      showingAnswer = false;
    }, 400);
  }
});

// Accessibility: allow Enter or Space key to trigger click
container.addEventListener('keydown', (e) => {
  if(e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    container.click();
  }
});
