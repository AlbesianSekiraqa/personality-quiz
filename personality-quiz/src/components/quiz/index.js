import React, { useEffect, useState } from "react";
import { QuizContainer } from "../../assets/layouts/layouts";
import Question from "../question";
import {
  getNumberOfQuestions,
  getQuestion,
  getRegistredData,
  registerCurrentItems,
  getNextQuestion,
  getPrevQuestion
} from "./functions";

const Quiz = ({ data }) => {
  const [items, setItems] = useState(getRegistredData());
  const [results, setResults] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [currentQuestion, setCurrnetQuestion] = useState(getQuestion(data));
  const totalQuestionsNr = getNumberOfQuestions(data);

  function registerSelctedAnswer(id) {
    setItems((items) => [...items, { questionId: id, answer: selectedAnswer }]);
  }

  function setNextQuestion() {
    const currentQuestionId = currentQuestion.id;

    registerSelctedAnswer(currentQuestionId);
    setSelectedAnswer(false);

    setCurrnetQuestion(getNextQuestion(data, currentQuestionId));
  }

  function setPrevQuestion() {
    const currentQuestionId = currentQuestion.id;
    items.pop();
    registerCurrentItems(items);
    setItems(items);
    setSelectedAnswer(false);
    setCurrnetQuestion(getPrevQuestion(data, currentQuestionId));
  }

  const currentAnswer = (selectedOption) => setSelectedAnswer(selectedOption);

  return (
    <QuizContainer>
      {results ? (
        <>
          <p>Bring Quiz results</p>
        </>
      ) : (
        <Question
          question={currentQuestion}
          currentAnswer={currentAnswer}
          selectedAnswer={selectedAnswer}
          totalQuestions={totalQuestionsNr}
          setPrevQuestion={setPrevQuestion}
          setNextQuestion={setNextQuestion}
        />
      )}
    </QuizContainer>
  );
};

export default Quiz;
