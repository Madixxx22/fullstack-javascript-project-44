#!/usr/bin/env node
import { startGame } from '../src/index.js';
import { getQuestion } from '../src/games/brain-calc-question.js';

const mainBrainCalc = () => {
  const assignment = 'What is the result of the expression?';
  startGame(assignment, getQuestion);
};

mainBrainCalc();
