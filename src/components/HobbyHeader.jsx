import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import mail from "../assets/mail.jpg";
import menu from "../assets/menu.jpg";

const StyledHeader = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  padding: 0 20px;
  margin: 25px 0 5px;
  justify-content: space-between;
`;

const LeftChild = styled.div`
  cursor: pointer;
`;

const RightChild = styled.div`
  img {
    width: 24px;
    height: 24px;
    margin-left: 13px;
  }
`;

const HobbyHeader = () => {
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
      <RightChild>
        <img src={mail} alt="mail" />
        <img src={menu} alt="menu" />
      </RightChild>
    </StyledHeader>
  );
};
export default HobbyHeader;
