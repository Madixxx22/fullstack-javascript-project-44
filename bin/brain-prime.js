#!/usr/bin/env node
import { startGame } from '../src/index.js';
import { getQuestion } from '../src/games/brain-prime-question.js';

const mainBrainPrime = () => {
  const assignment = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(assignment, getQuestion);
};

mainBrainPrime();
