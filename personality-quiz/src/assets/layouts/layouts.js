import styled from "@emotion/styled";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
`;

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 50px 20px 50px;
  margin-bottom: 50px;
  background-color: #f5f7f9;

  p,
  h2,
  span {
    color: #26313e;
  }
`;

export const QuizGuideline = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const QuizTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 20px;
`;

export const QuizRequirment = styled.span`
  font-size: 15px;
  font-style: italic;
  margin-bottom: 20px;
`;

export const QuizBtn = styled.button`
  display: flex;
  justify-content: center;
  width: calc(50% - 10px);
  padding: 20px 40px 18px;
  align-items: center;
  border: 1px solid #ccd6e0;
  border-radius: 5px;
  color: ${(props) => (props.next ? "#fff" : "#000")};
  background-color: ${(props) => (props.next ? "#0C2B4F" : "#fff")};
  transition: 0.2s;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    background: ${(props) => (props.next ? "#4a5f78" : "#fff")};
    color: ${(props) => (props.next ? "#fff" : "#EC6584")};
    border-color: ${(props) => (props.next ? "#4a5f78" : "#EC6584")};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &.finish-test {
    background-color: #ec6584;
    color: #fff;
  }
`;

export const QuizResult = styled.div`
  padding-bottom: 70px;

  h2,
  h3 {
    text-align: center;
    line-height: 1.3;
    padding: 0 5%;
  }

  h2 {
    font-size: 30px;
    margin-bottom: 30px;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 50px;
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccd6e0;
  background-color: #fff;
  padding: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #f0f8ff;
  }

  &.active {
    border-color: #ec6584;

    p {
      font-weight: bold;
    }

    span {
      color: #fff;
      background-color: #ec6584;
    }
  }
`;

export const QuestionIndex = styled.span`
  padding: 5px 10px;
  background: #f5f7f9;
  line-height: 1;
  margin-right: 10px;
`;

export const QuestionTitle = styled.p`
  font-size: 18px;
`;
