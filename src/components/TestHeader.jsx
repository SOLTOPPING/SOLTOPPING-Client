import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  padding-left: 20px;
  padding-right: 30px;
  margin: 25px 0 5px;
`;

const LeftChild = styled.div`
  cursor: pointer;
`;

const HeaderText = styled.div`
  flex: 1;
  text-align: center;
`;

const TestHeader = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <LeftChild
        onClick={() => {
          navigate(-1);
        }}
      >
        &lt;
      </LeftChild>
      <HeaderText>나만의 신한 프렌즈 찾기</HeaderText>
    </StyledHeader>
  );
};
export default TestHeader;
