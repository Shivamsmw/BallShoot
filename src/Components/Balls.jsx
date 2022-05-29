import styled from "styled-components";

const Balls = styled.div`
  background-color: ${({ theme }) => theme};
  height: 88px;
  width: 90px;
  border-radius: 50%;
  display: inline-block;
  margin: 5px;
`;
export default Balls;
