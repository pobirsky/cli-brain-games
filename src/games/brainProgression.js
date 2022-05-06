import getRandomInteger from '../rand.js';
import playGame from '../index.js';

const maxLengthProgression = 10;
const minLengthProgression = 5;
const description = 'What number is missing in the progression?';

function newProgression() {
  const step = getRandomInteger(1, 5);
  const start = getRandomInteger(1, 100);
  const lengthOfProgression = getRandomInteger(minLengthProgression, maxLengthProgression);
  const progression = [];

  for (let i = 0; i < lengthOfProgression; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
}

const generateRound = () => {
  const progression = newProgression();
  // const randIndex = 2;
  const randIndex = getRandomInteger(0, progression.length - 1);
  const randomChangeIndex = progression[randIndex];
  const answer = String(randomChangeIndex);

  const questionProgression = [...progression];
  questionProgression[randIndex] = '..';
  const question = questionProgression.join(' ');
  return [question, answer];
};

const brainProgression = () => playGame(description, generateRound);

export default brainProgression;
