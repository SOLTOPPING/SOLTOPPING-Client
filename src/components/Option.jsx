import styled from "styled-components";

const StyledOption = styled.button`
  border: none;
  width: 356px;
  height: 71px;
  background-color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  display: block;
  margin: 0 auto 14px;
  font-family: "Noto Sans", "Noto Sans KR";
  font-size: 15px;
  padding: 0 70px 0 25px;
  text-align: left;
`;

const Option = ({ text, onClick }) => {
  return <StyledOption onClick={onClick}>{text}</StyledOption>;
};

export default Option;
