#!/usr/bin/env node

export const getQuestion = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  let answer = null;
  if (number % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  const response = {
    question: number,
    answer,
  };
  return response;
};

export default getQuestion;
