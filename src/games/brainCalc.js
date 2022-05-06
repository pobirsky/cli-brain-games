import getRandomInteger from '../rand.js';
import playGame from '../index.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const description = 'What is the result of the expression?';
const minNumber = 1;
const maxNumber = 100;

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '-':
      return number1 - number2;
    case '+':
      return number1 + number2;
    case '*':
      return number1 * number2;
    default:
      return 'undefined operator';
  }
};

const generateRound = () => {
  const generateNumber1 = getRandomInteger(minNumber, maxNumber);
  const generateNumber2 = getRandomInteger(minNumber, maxNumber);
  const operations = ['-', '+', '*'];
  const randomOperator = operations[getRandomInt(operations.length)];
  const question = `${generateNumber1} ${randomOperator} ${generateNumber2}`;
  const answer = String(calculate(generateNumber1, generateNumber2, randomOperator));
  return [question, answer];
};

const brainCalc = () => playGame(description, generateRound);

export default brainCalc;
