#!/usr/bin/env node

export const getQuestion = () => {
  const lengthProgression = Math.floor(Math.random() * 16) + 5;
  const step = Math.floor(Math.random() * 11) + 1;
  const startNumber = Math.floor(Math.random() * 100) + 1;
  let previousNumber = startNumber;
  const progression = [startNumber];
  /* eslint-disable-next-line */
  for (let i = 0; i <= lengthProgression; i += 1) {
    previousNumber += step;
    progression.push(previousNumber);
  }
  const answer = progression[Math.floor(Math.random() * progression.length)];
  let question = '';
  /* eslint-disable-next-line */
  for (const item of progression) {
    if (item === answer) {
      question += '.. ';
    } else {
      question += `${item} `;
    }
  }
  const response = {
    question,
    answer: String(answer),
  };
  return response;
};

export default getQuestion;
