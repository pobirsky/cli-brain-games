import getRandomInteger from '../rand.js';
import playGame from '../index.js';

const directive = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 0; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRpound = () => {
  const num = getRandomInteger(1, 1000);
  const question = num;
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};

const brainPrime = () => playGame(directive, generateRpound);

export default brainPrime;
