export function getPrevQuestion(data, id) {
  return data.questions[id - 2];
}

export function getNextQuestion(data, id) {
  return data.questions[id];
}

export function getQuestion(data) {
  const registredAnswers = getRegistredData();
  if (registredAnswers?.length > 0) {
    const question = data.questions[registredAnswers.length];
    return question;
  }

  return data.questions[0];
}

export function getNumberOfQuestions(data) {
  const count = data.questions.length;
  return count;
}

export function getFinalResult(data) {
  const answers = getRegistredData();

  if (answers && answers.length === data.questions.length - 1) {
    const count = answers.filter((item) => {
      if (item.answer > 1) {
        return true;
      }

      return false;
    }).length;

    if (count < 2) {
      return data.results.introvert;
    }

    return data.results.extrovert;
  }

  return false;
}

export function getRegistredData() {
  const registredData = JSON.parse(localStorage.getItem("Personality answers"));

  if (registredData) {
    return registredData;
  }

  return [];
}

export function registerCurrentItems(items) {
  localStorage.setItem("Personality answers", JSON.stringify(items));
}
