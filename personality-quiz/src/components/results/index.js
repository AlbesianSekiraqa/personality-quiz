import React from "react";
import { Flex, QuizResult, QuizBtn } from "../../assets/layouts/layouts";

const Results = ({ data, retakeTest, showResultTable, resultTableActive }) => {
  return (
    <>
      <QuizResult>
        <h3>Your Result</h3>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <Flex justify={"space-between"}>
          <QuizBtn onClick={retakeTest}>{`Retake Test`}</QuizBtn>
          <QuizBtn onClick={showResultTable}>{`${
            resultTableActive ? "Hide Results" : "Show All Results"
          }`}</QuizBtn>
        </Flex>
      </QuizResult>
    </>
  );
};

export default Results;
