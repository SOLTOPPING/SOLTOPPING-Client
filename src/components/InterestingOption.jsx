import styled from "styled-components";

const StyledOption = styled.button`
  border: none;
  height: 50px;
  background-color: ${({ selected }) => (selected ? "#C6E4F0" : "#ffffff")};
  border-radius: 10px;
  cursor: pointer;
  display: block;
  margin: 0 8px 14px 7px;
  font-family: "Noto Sans", "Noto Sans KR";
  font-size: 15px;
  padding: 0 45px;
  max-width: 170px;
`;

const Option = ({ text, selected, onClick }) => {
  return (
    <StyledOption onClick={onClick} selected={selected}>
      {text}
    </StyledOption>
  );
};

export default Option;
