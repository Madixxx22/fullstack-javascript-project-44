#!/usr/bin/env node
import { startGame } from '../src/index.js';
import { getQuestion } from '../src/games/brain-even-question.js';

const mainBrainEven = () => {
  const assignment = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(assignment, getQuestion);
};

mainBrainEven();
