import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";

import StatusBar from "../components/StatusBar";
import Button from "../components/Button";
import mainCharacters from "../assets/mainCharacters.jpg";

const Start = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const img = new Image();
    img.src = mainCharacters;
  }, []);

  return (
    <div className="webAppWrapper">
      <div className="startWrapper">
        <StatusBar />

        <TitleWrapper>
          <Title>SOL 토핑</Title>
          <Description>
            나만의 신한프렌즈 캐릭터 찾고,
            <br /> 맞춤형 토핑 조합 추천받으세요!
          </Description>
        </TitleWrapper>
        <MainImgWrapper>
          <img src={mainCharacters} alt="maincharacters" width="100%" />
        </MainImgWrapper>
        <Button
          text={"시작하기"}
          onClick={() => {
            navigate("/test");
          }}
        />
      </div>
    </div>
  );
};

export default Start;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
`;

const Title = styled.div`
  margin: 80px 0 20px;
  font-size: 40px;
`;

const Description = styled.div`
  color: #696969;
  font-size: 16px;
`;

const MainImgWrapper = styled.div`
  margin-bottom: 125px;
`;
