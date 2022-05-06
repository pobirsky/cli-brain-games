import getRandomInteger from '../rand.js';
import playGame from '../index.js';

function firstGcd(num1, num2) {
  return (num2 === 0) ? num1 : firstGcd(num2, num1 % num2);
}

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const num1 = getRandomInteger(1, 50);
  const num2 = getRandomInteger(1, 50);
  const correctAnswer = firstGcd(num1, num2).toString();
  const question = `${num1} ${num2}`;

  return [question, correctAnswer];
};

export default () => playGame(description, generateRound);
