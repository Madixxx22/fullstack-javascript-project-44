#!/usr/bin/env node
import { greeting } from '../src/cli.js';

const mainBrainGames = () => {
  console.log('Welcome to the Brain Games!');
  greeting();
};

mainBrainGames();
