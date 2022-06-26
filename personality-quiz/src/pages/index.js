import React from "react";
import Quiz from "../components/quiz/index.js";
import Welcome from "../components/welcome/index.js";
import data from "../data/data.json";

const Index = () => {
  return (
    <div>
      <Welcome />
      <Quiz data={data} />
    </div>
  );
};

export default Index;
