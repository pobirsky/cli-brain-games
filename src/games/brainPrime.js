import generateRandom from '../utils.js';
import playGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const generateRound = () => {
  const num = generateRandom(1, 1000);
  const answer = isPrime(num) ? 'yes' : 'no';
  return [num, answer];
};

const brainPrime = () => playGame(description, generateRound);

export default brainPrime;
