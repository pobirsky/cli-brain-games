import getRandomInteger from '../rand.js';
import playGame from '../index.js';

const directive = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return true;
  let flag = true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

const generateRpound = () => {
  const num = getRandomInteger(1, 10);
  const question = num;
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};

const brainPrime = () => playGame(directive, generateRpound);

export default brainPrime;
