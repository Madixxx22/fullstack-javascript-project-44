#!/usr/bin/env node

export const getQuestion = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const listDecimal = [];
  let answer = 'yes';
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      listDecimal.push(i);
    }
  }
  if (listDecimal.length > 2) {
    answer = 'no';
  }

  const response = {
    question: number,
    answer,
  };
  return response;
};

export default getQuestion;
