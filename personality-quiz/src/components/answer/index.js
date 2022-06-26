import React from "react";
import {
  QuestionTitle,
  QuestionContainer,
  QuestionIndex,
} from "../../assets/layouts/layouts";

const Answer = ({ data, id, active, currentAnswer, notClickable }) => {
  const order = ["A", "B", "C", "D"];

  return (
    <QuestionContainer
      className={active ? "active" : ""}
      onClick={() => currentAnswer(id)}
    >
      <QuestionIndex>{order[id]}</QuestionIndex>
      <QuestionTitle>{data}</QuestionTitle>
    </QuestionContainer>
  );
};

export default Answer;
