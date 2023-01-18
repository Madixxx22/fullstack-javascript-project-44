#!/usr/bin/env node
import { startGame } from '../src/index.js';
import { getQuestion } from '../src/games/brain-progression-question.js';

const mainBrainProgression = () => {
  const assignment = 'What number is missing in the progression?';
  startGame(assignment, getQuestion);
};

mainBrainProgression();
