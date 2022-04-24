import readlineSync from 'readline-sync';

const questionGuest = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello,${userName}!`);
};

export default questionGuest;