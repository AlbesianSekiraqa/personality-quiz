import React, { useEffect, useState } from "react";
import { QuizContainer } from "../../assets/layouts/layouts";
import {
  getFinalResult,
  getNumberOfQuestions,
  getQuestion,
  getNextQuestion,
  getPrevQuestion,
  getRegistredData,
  registerCurrentItems,
} from "./functions";
import Question from "../question";
import Results from "../results";
import ResultTable from "../result-table";

const Quiz = ({ data }) => {
  const [items, setItems] = useState(getRegistredData());
  const [isFirstLoad, setIsFirstLoad] = useState(false);
  const [results, setResults] = useState(getFinalResult(data));
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [currentQuestion, setCurrnetQuestion] = useState(getQuestion(data));
  const totalQuestionsNr = getNumberOfQuestions(data);
  const [resultTable, setResultTable] = useState(false);

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

  function setFinalResult() {
    registerSelctedAnswer(currentQuestion.id);

    setSelectedAnswer(false);
    setResults(getFinalResult(data));
  }

  function retakeTest() {
    localStorage.clear("Personality answers");
    setItems([]);
    setResults(null);
    setSelectedAnswer(false);
    setCurrnetQuestion(getNextQuestion(data, 0));
  }

  function toggleResultTable() {
    setResultTable(!resultTable);
  }

  useEffect(() => {
    if (isFirstLoad) {
      registerCurrentItems(items);
    } else {
      setIsFirstLoad(true);
    }
  }, [items]);

  const currentAnswer = (selectedOption) => setSelectedAnswer(selectedOption);

  return (
    <QuizContainer>
      {results ? (
        <>
          <Results
            data={results}
            retakeTest={retakeTest}
            showResultTable={toggleResultTable}
            resultTableActive={resultTable}
          />
          {resultTable && <ResultTable data={data} items={items} />}
        </>
      ) : (
        <Question
          question={currentQuestion}
          currentAnswer={currentAnswer}
          selectedAnswer={selectedAnswer}
          totalQuestions={totalQuestionsNr}
          setPrevQuestion={setPrevQuestion}
          setNextQuestion={setNextQuestion}
          setFinalResult={setFinalResult}
        />
      )}
    </QuizContainer>
  );
};

export default Quiz;
