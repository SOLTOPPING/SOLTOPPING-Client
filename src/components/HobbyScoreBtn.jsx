import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  width: 66px;
  height: 48px;
  background-color: ${({ selected }) => (selected ? "#60B8D4" : "#e8e8e8")};
  color: ${({ selected }) => (selected ? "#ffffff" : "#5f5f5f")};
  border-radius: 10px;
  cursor: pointer;

  font-family: "Noto Sans", "Noto Sans KR";
  font-weight: bold;
  font-size: 14px;
`;

const HobbyScoreBtn = ({ text, onClick, value, selected }) => {
  return (
    <StyledButton onClick={onClick} value={value} selected={selected}>
      {text}
    </StyledButton>
  );
};

export default HobbyScoreBtn;
