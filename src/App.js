import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const Box01 = styled.div`
  background-color: ${(props) => props.bgcolor};
  width: 100px;
  height: 100px;
`;
const Circle = styled(Box01)`
  border-radius: 50px;
`;

function App() {
  return (
  <Father>
    <Box01 bgcolor = "teal"></Box01>
    <Box01 bgcolor = "tomato"></Box01>
    <Circle bgcolor="black"></Circle>
  </Father>
  );
}

export default App;
