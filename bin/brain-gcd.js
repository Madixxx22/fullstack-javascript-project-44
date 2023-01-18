#!/usr/bin/env node
import { startGame } from '../src/index.js';
import { getQuestion } from '../src/games/brain-gcd-question.js';

const mainBrainGcd = () => {
  const assignment = 'Find the greatest common divisor of given numbers.';
  startGame(assignment, getQuestion);
};

mainBrainGcd();
