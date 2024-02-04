import styled, {keyframes} from "styled-components";

const Father = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.backgroundColor};
`;
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
const Myanimation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    transform: rotate(360deg);
    border-radius: 50px;
  }
  100%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Box01 = styled.div`
  background-color: ${(props) => props.bgcolor};
  width: 100px;
  height: 100px;
  animation: ${Myanimation} 5s linear infinite;
`;
const Circle = styled(Box01)`
  border-radius: 50px;
`;

function App() {
  return (
  <Father>
    <Title>Hello</Title>
    <Box01 bgcolor = "tomato"></Box01>
    <Circle bgcolor="black"></Circle>
  </Father>
  );
}

export default App;
