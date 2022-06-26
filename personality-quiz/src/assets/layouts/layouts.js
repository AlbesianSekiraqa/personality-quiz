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
