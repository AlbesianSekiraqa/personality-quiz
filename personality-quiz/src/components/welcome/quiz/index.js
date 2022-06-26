import React, { useEffect, useState } from "react";
import { QuizContainer } from "../../assets/layouts/layouts";

const Quiz = ({ data }) => {
  const [results, setResults] = useState(null);

  return (
    <QuizContainer>
      {results ? (
        <>
          <p>Bring Quiz results</p>
        </>
      ) : (
        <p> Question Components </p>
      )}
    </QuizContainer>
  );
};

export default Quiz;
