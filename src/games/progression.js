import generateRandom from '../utils.js';
import playGame from '../index.js';

const maxLengthProgression = 10;
const minLengthProgression = 5;
const description = 'What number is missing in the progression?';

function generateRound() {
  const step = generateRandom(1, 5);
  const startElement = generateRandom(1, 100);
  const lengthOfProgression = generateRandom(minLengthProgression, maxLengthProgression);
  const randIndex = generateRandom(0, lengthOfProgression);
  let question = '';
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (randIndex !== i) {
      const nextElement = startElement + step * i;
      question = `${question} ${nextElement}`;
    } else {
      question = `${question} ..`;
    }
  }
  question = question.trim();
  const answer = String(startElement + step * randIndex);
  return [question, answer];
}

const progression = () => playGame(description, generateRound);

export default progression;
