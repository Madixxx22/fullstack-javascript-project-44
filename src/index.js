#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greeting } from './cli.js';

export const startGame = (assignment, getQuestion) => {
  const name = greeting();
  console.log(assignment);
  let winCounter = 0;
  let gameInfo = null;
  let answerUser = null;
  while (winCounter < 3) {
    gameInfo = getQuestion();
    console.log(`Question: ${gameInfo.question}`);
    answerUser = readlineSync.question('Your answer: ');
    if (answerUser !== gameInfo.answer) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${gameInfo.answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return 0;
    }
    winCounter += 1;
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
  return 0;
};

export default startGame;
