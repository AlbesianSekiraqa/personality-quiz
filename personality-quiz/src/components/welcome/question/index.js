import React from "react";
import {
  Flex,
  QuizGuideline,
  QuizTitle,
  QuizRequirment,
  QuizBtn,
} from "../../assets/layouts/layouts";

const Question = ({
  question,
  totalQuestions,
  setPrevQuestion,
  setNextQuestion,
}) => {
  if (!question) {
    return;
  }

  return (
    <>
      <QuizGuideline>
        Question {question?.id}/{totalQuestions}
      </QuizGuideline>
      <QuizTitle>{question?.question}</QuizTitle>
      <QuizRequirment>All questions are required</QuizRequirment>
      {question && (
        <Flex column>
          {question.answers.map((answer, index) => {
            return <p>Answer Component Here</p>;
          })}
        </Flex>
      )}
      <Flex justify={"space-between"}>
        <QuizBtn
          onClick={setPrevQuestion}
          disabled={question?.id === 1}
        >{`< Previous`}</QuizBtn>
        <QuizBtn next onClick={setNextQuestion}>{`Next question >`}</QuizBtn>
      </Flex>
    </>
  );
};

export default Question;
