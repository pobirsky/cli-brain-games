import getRandomInteger from '../rand.js';
import playGame from '../index.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const directive = 'What is the result of the expression?';
const minNumber = 1;
const maxNumber = 100;

const calculate = (number1, number2, operator) => {
  if (operator === '-') return number1 - number2;
  if (operator === '+') return number1 + number2;
  if (operator === '*') return number1 * number2;
  return 'undefined operator';
};

const generateRound = () => {
  const generateNumber1 = getRandomInteger(minNumber, maxNumber);
  const generateNumber2 = getRandomInteger(minNumber, maxNumber);
  const operations = ['-', '+', '*'];
  const randomOperator = operations[getRandomInt(3)];
  const questionUser = `${generateNumber1}${randomOperator}${generateNumber2}`;
  const answer = String(calculate(generateNumber1, generateNumber2, randomOperator));
  return [questionUser, answer];
};

const brainCalc = () => playGame(directive, generateRound);

export default brainCalc;
