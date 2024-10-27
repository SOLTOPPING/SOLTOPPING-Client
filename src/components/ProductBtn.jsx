import styled from "styled-components";

const ProductBtn = ({ text, onClick }) => {
  return <StyledProductBtn onClick={onClick}>{text}</StyledProductBtn>;
};

export default ProductBtn;

const StyledProductBtn = styled.button`
  height: 22px;
  margin: 13px 40px 30px;
  border: none;
  background-color: #8cc8e0;
  color: #ffffff;
  font-size: 11px;
  border-radius: 10px;
  cursor: pointer;
`;
