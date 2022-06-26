import React from "react";
import {
  Flex,
  QuizGuideline,
  QuizTitle,
  QuizRequirment,
  QuizBtn,
} from "../../assets/layouts/layouts";
import Answer from "../answers";

const Question = ({
  question,
  totalQuestions,
  currentAnswer,
  selectedAnswer,
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
            const isActive = index === selectedAnswer ? true : false;
            return (
              <Answer
                key={index}
                active={isActive}
                data={answer}
                id={index}
                currentAnswer={currentAnswer}
              />
            );
          })}
        </Flex>
      )}
      <Flex justify={"space-between"}>
        <QuizBtn
          onClick={setPrevQuestion}
          disabled={question?.id === 1}
        >{`< Previous`}</QuizBtn>

        {question.id !== totalQuestions ? (
          <QuizBtn
            next
            onClick={setNextQuestion}
            disabled={!(selectedAnswer || selectedAnswer === 0)}
          >{`Next question >`}</QuizBtn>
        ) : (
         <p>Final result button</p>
        )}
      </Flex>
    </>
  );
};

export default Question;
