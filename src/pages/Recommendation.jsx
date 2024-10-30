import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import StatusBar from "../components/StatusBar";
import ShareBtnList from "../components/ShareBtnList";
import ProductBtn from "../components/ProductBtn";
import Product from "../components/Product";
import { productList } from "../utils/productList";
import Button from "../components/Button";
import myCharacter from "../assets/myCharacter.jpg";
import productGroup from "../assets/productGroup.png";

const Recommendation = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const img = new Image();
    img.src = myCharacter;
  }, []);

  return (
    <div className="webAppWrapper">
      <div className="recommendationWrapper">
        <StatusBar />
        <CharacterWrapper>
          <h2>소극알못의</h2>
          <h1>몰리</h1>
        </CharacterWrapper>
        <UnderWrapper>
          <p>아직 잘 몰라도 괜찮아요!</p>
          <p>저희가 몰리님을 위해 알려드릴게요!</p>
        </UnderWrapper>
        <MyImgWrapper>
          <img
            src={myCharacter}
            alt="myCharacter"
            width="227px "
            height="270px"
          />
        </MyImgWrapper>
        <RoundBg />
        <ContentWrapper>
          <Summary>
            <b>몰리</b>는 식물 카페의 느긋한 사장님이에요. <br />
            항상 느긋하고 세상 태평한 식물 집사 두더지랍니다. <br />
            <br />
            {"\u00A0"}나의 금융 위험 회피 성향은 <b>“소극적”</b> 이에요.
            소극적인 투자자들은 기존의 예금이나 저축성 보험 중심으로 금융 자산을
            배분하고, 안정지향적으로 투자하는 경향을 보여요. <br /> {"\u00A0"}
            나의 금융 정보 탐색 행동 유형은 <b>“알못”</b> 이에요. 대부분의 금융
            정보 원천들을 거의 이용하지 않고, 평균 정보 탐색량이 낮은 경향을
            보여요.
          </Summary>
          <ShareBtnList />
        </ContentWrapper>

        <ContentWrapper>
          <RecommendationTitle>
            <a>여행</a>을 좋아하시는 <br />
            <a>소심알못</a>형 고객님을 위한 토핑 조합 추천!
          </RecommendationTitle>
          <ProductBtn text={"스크롤 내려서 확인하기 ▼"} />
          <ScrollContent>
            <img
              src={productGroup}
              alt="productGroup"
              width="308px"
              height="319px"
            />

            {productList.map((product, idx) => (
              <Product
                key={idx}
                title={product.title}
                hashtag1={product.hashtag1}
                hashtag2={product.hashtag2}
                content={product.content}
              />
            ))}
            <Button
              text={"SOL 토핑 분석 마치기"}
              color={"sky"}
              onClick={() => {
                navigate("/");
              }}
            />
          </ScrollContent>
        </ContentWrapper>
      </div>
    </div>
  );
};

export default Recommendation;

const CharacterWrapper = styled.div`
  margin: 49px 0 15px;
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  padding: 0 80px;
  font-weight: bold;

  h2 {
    font-size: 24px;
    margin: 0;
  }
  h1 {
    font-size: 36px;
    margin: 0;
  }
`;

const UnderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0;
    color: #ffffff;
    font-size: 12px;
  }
`;

const MyImgWrapper = styled.div`
  padding-left: 73px;
  text-align: center;
  z-index: 30;
`;

const RoundBg = styled.div`
  background-color: #ffffff;
  position: absolute;
  border-radius: 100%;
  height: 200px;
  width: 452px;
  top: 330px;
  z-index: 20;
  left: -30px;
`;

const ContentWrapper = styled.div`
  background-color: #ffffff;
  z-index: 30;
`;

export const Summary = styled.div`
  margin-top: 30px;
  padding: 0 42px;
  font-size: 12px;
  color: #696969;
`;

export const RecommendationTitle = styled.div`
  margin-top: 52px;
  font-size: 16px;
  font-weight: bold;
  padding: 0 40px;

  a {
    color: #007aff;
  }
`;

export const ScrollContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to top, #d6eef8, #ffffff, #ffffff, #d6eef8);
  border-radius: 28px;
  margin: 0 20px 13px;

  img {
    margin-top: 20px;
    margin-bottom: 40px;
  }
`;
