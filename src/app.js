import readlineSync from 'readline-sync';

const startRound = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello,${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log('Question: 15');
  const answer = readlineSync.question('Your answer: ');
  return (answer === 'yes');
};

const startGame = () => {
  for (let i = 1; i <= 3; i++) {
    const isCorrect = startRound();
    if (!isCorrect) {
      console.log(`yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, Bill!`);
      return;
    }
    console.log('Correct!');
  }
};

export { startGame, startRound };
