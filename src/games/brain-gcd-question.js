#!/usr/bin/env node

export const getQuestion = () => {
  let number1 = Math.floor(Math.random() * 100) + 1;
  let number2 = Math.floor(Math.random() * 100) + 1;
  const question = `${number1} ${number2}`;
  let answer = null;
  let check = true;
  while (check) {
    if (number1 !== 0 && number2 !== 0) {
      if (number1 > number2) {
        number1 %= number2;
      } else {
        number2 %= number1;
      }
    } else {
      answer = number1 + number2;
      check = false;
    }
  }
  const response = {
    answer: String(answer),
    question,
  };
  return response;
};

export default getQuestion;
