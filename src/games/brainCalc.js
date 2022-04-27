import getRandomInteger from '../rand.js'
import playGame from '../index.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const question = 'What is the result of the expression?';
const minNumber = 1;
const maxNumber = 100;

const calculate = (number1, number2, operator) => {
  if (operator === '-') return number1 - number2
  if (operator === '+') return number1 + number2
  if (operator === '*') return number1 * number2
}

const generateRound = () => {
  const generateNumber1 = getRandomInteger(minNumber, maxNumber);
  const generateNumber2 = getRandomInteger(minNumber, maxNumber);
  const operations = ['-', '+', '*'];
  const randomOperator = operations[getRandomInt(3)];
  const question =`${generateNumber1}${randomOperator}${generateNumber2}`
  const answer = String(calculate(generateNumber1, generateNumber2, randomOperator));
  return [question, answer];
};

const brainCalc = () => playGame(question, generateRound);

export { brainCalc };
