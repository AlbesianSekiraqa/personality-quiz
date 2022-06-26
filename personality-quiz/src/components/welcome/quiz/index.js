import React, { useEffect, useState } from "react";
import { QuizContainer } from "../../assets/layouts/layouts";
import Question from "../question";
import {
  getNumberOfQuestions,
  getQuestion,
  getRegistredData,
  registerCurrentItems
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

    //potencial function
    // setCurrnetQuestion(getNextQuestion(data, currentQuestionId));
  }

  function setPrevQuestion() {
    items.pop();
    registerCurrentItems(items);
    setItems(items);
    setSelectedAnswer(false);

    //potencial function
    // setCurrnetQuestion(getPrevQuestion(data, currentQuestionId));
  }

  return (
    <QuizContainer>
      {results ? (
        <>
          <p>Bring Quiz results</p>
        </>
      ) : (
        <Question
          question={currentQuestion}
          totalQuestions={totalQuestionsNr}
          setPrevQuestion={setPrevQuestion}
          setNextQuestion={setNextQuestion}
        />
      )}
    </QuizContainer>
  );
};

export default Quiz;
