import { useNavigate } from "react-router-dom";

import flag from "../assets/flag.png";
import pizza from "../assets/pizza.png";
import styled from "styled-components";

const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <NavigationBarWrapper>
      <SolBtn>땡겨요</SolBtn>
      <SolBtn>
        대출비교/
        <br /> 갈아타기
      </SolBtn>
      <SolBtn className="blue">SOL트래블</SolBtn>
      <SolBtn>쏠야구</SolBtn>
      <SolBtn>쏠지갑</SolBtn>
      <SolBtn>스토리뱅크</SolBtn>
      <SolBtn
        className="yellow"
        onClick={() => {
          navigate("/start");
        }}
      >
        SOL토핑
        <img src={pizza} alt="pizza" height="34px" width="34px" />
      </SolBtn>
      <SolBtn
        className="green"
        onClick={() => {
          navigate("/hobby");
        }}
      >
        SOL취미
        <img src={flag} alt="flag" height="34px" width="34px" />
      </SolBtn>
    </NavigationBarWrapper>
  );
};
export default NavigationBar;

const NavigationBarWrapper = styled.div`
  margin: 16px 0 27px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
`;

const SolBtn = styled.div`
  position: relative;
  width: 94px;
  height: 98px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 12px 0 0 16px;
  color: #696969;
  font-weight: bold;
  font-size: 13px;
  margin-bottom: 17px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 5%);
  cursor: pointer;

  &.blue {
    background-color: #60b8d4;
    color: #ffffff;
  }

  &.yellow {
    background-color: #ffb703;
    color: #ffffff;
  }

  &.green {
    background-color: #9cda92;
    color: #ffffff;
  }

  img {
    position: absolute;
    bottom: 10px;
    right: 11px;
  }
`;
