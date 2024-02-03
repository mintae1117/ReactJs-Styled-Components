import styled from "styled-components";

const Father = styled.div`
  display: flex;
  background-color: black;
`;
const Box01 = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;
const Box02 = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;


function App() {
  return <Father>
    <Box01></Box01>
    <Box02></Box02>
  </Father>;
}

export default App;
