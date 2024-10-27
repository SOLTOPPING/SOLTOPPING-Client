import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  width: 356px;
  height: 44px;
  background-color: ${({ color }) => (color === "sky" ? "#8CC8E0" : "#1158FF")};
  color: white;
  border-radius: 10px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  font-family: "Noto Sans", "Noto Sans KR";

  font-weight: bold;
  font-size: 14px;
`;

const Button = ({ text, color, onClick }) => {
  return (
    <StyledButton color={color} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
