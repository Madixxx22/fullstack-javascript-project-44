#!/usr/bin/env node

export const getQuestion = () => {
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random()*operations.length)]
  const number1 = Math.floor(Math.random() * 100) + 1;
  const number2 = Math.floor(Math.random() * 100) + 1;
  let answer = null;
  let question = null;
  if(operation === '+'){
    answer = number1 + number2;
    question = `${number1} + ${number2}`
  } else if(operation === '*'){
    answer = number1 * number2
    question = `${number1} * ${number2}`
  } else {
    answer = number1 - number2
    question = `${number1} - ${number2}`
  }
  const response = {
    answer: String(answer),
    question,
  };
  return response;
};

export default getQuestion;
