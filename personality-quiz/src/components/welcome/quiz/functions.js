export function getQuestion(data) {
  const registredAnswers = getRegistredData();

  // potencial function on answer
  // if (registredAnswers?.length > 0) {
  //   const question = data.questions[registredAnswers.length];
  //   return question;
  // }

  return data.questions[0];
}

export function getRegistredData() {
  const registredData = JSON.parse(localStorage.getItem("Personality answers"));

  if (registredData) {
    return registredData;
  }

  return [];
}

export function getNumberOfQuestions(data) {
  const count = data.questions.length;
  return count;
}

export function registerCurrentItems(items) {
  localStorage.setItem("Personality answers", JSON.stringify(items));
}