import readlineSync from 'readline-sync';
import questionGuest from '../cli.js';

const userName = questionGuest();

const startGame = () => {
  for (let i = 1; i <= 3; i += 1) {
    const answer = 'no';
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log('Question: 15');
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer !== userAnswer) {
      console.log(`yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    if (i === 3) console.log(`Congratulations, ${userName}!`);
  }
};

export { startGame };

