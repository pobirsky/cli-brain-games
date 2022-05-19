import generateRandom from '../utils.js';
import playGame from '../index.js';

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
  const firstNumber = generateRandom(minNumber, maxNumber);
  const secondNumber = generateRandom(minNumber, maxNumber);
  const operations = ['-', '+', '*'];
  const randomOperator = operations[generateRandom(0, operations.length - 1)];
  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const answer = String(calculate(firstNumber, secondNumber, randomOperator));
  return [question, answer];
};

const brainCalc = () => playGame(description, generateRound);

export default brainCalc;
