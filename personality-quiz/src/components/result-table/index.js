import React from "react";
import { Flex, QuizGuideline, QuizTitle } from "../../assets/layouts/layouts";
import Answer from "../answer";

const ResultTable = ({ data, items }) => {
  const questionsLength = data.questions.length;

  return (
    <>
      {data.questions.map((question, index) => {
        const selectedAnswer = items[index].answer;
        return (
          <div key={index}>
            <QuizGuideline>
              Question {question.id}/{questionsLength}
            </QuizGuideline>
            <QuizTitle>{question.question}</QuizTitle>
            <Flex column>
              {question.answers.map((answer, index) => {
                const isActive = index === selectedAnswer ? true : false;

                return (
                  <Answer
                    key={index}
                    active={isActive}
                    data={answer}
                    id={index}
                    notClickable={true}
                  />
                );
              })}
            </Flex>
          </div>
        );
      })}
    </>
  );
};

export default ResultTable;
