const questions = [
  "may iba na ba sya?",
  "may karapatan bako mag selos?",
  "wala na ba talagang pag asang maging kami?",
  "san bako nag kulang?",
  "nag move on naba sya?",
  "is she stalking me?",
  "was she lying the whole time?",
  "bakit nya bako pinagpalit?",
  "will I ever be enough?",
  "pinaglaruan nya lang ba ako?",

];

const answers = [
  "omsim pare",
  "hahahaha mag kaibigan lang kayo tas mag seselos ka?",
  "itulog mo nalang, malay mo maging kayo sa panaginip mo",
  "sya yung nag kulang eh, kulang sa pansin, di na na kuntento sayo",
  "di, gusto ka parin nyan....asa ka",
  "nah, she's stalking somebody else though :D",
  "di ba obvious?",
  "di ka nya deserve.",
  "yes and you deserve better than her/him",
  "omsim pre, wawa ka naman",

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
