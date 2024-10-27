import StatusBar from "../components/StatusBar";
import myCharacter from "../assets/myCharacter.png";
import ShareBtnList from "../components/ShareBtnList";
import styled from "styled-components";

const Recommendation = () => {
  return (
    <div className="webAppWrapper">
      <div className="testWrapper">
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
            소극적인 투자자들은 기존의 예금이나 저축성 보험 중심으로 금융 자산을
            배분하고, 안정지향적으로 투자하는 경향을 보여요. 다만 투자에 대한
            경험이나 지식이 다른 유형인 중립적, 적극적에 비해 미흡하여 투자에
            크게 관심이 없는 유형이에요. 대부분의 소비자들은 소극적인 투자자의
            경향을 보여요.
          </Summary>
          <ShareBtnList />
        </ContentWrapper>

        <ContentWrapper>
          <RecommendationTitle>
            <a>여행</a>을 좋아하시는 <br />
            <a>소심알못</a>형 고객님을 위한 토핑 조합 추천!
          </RecommendationTitle>
          <button className="scrollBtn">스크롤 내려서 확인하기 ▼</button>
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
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  z-index: 30;
  align-items: center;
`;

export const Summary = styled.div`
  margin-top: 30px;
  width: 309px;
  font-size: 12px;
  color: #696969;
`;

export const RecommendationTitle = styled.div`
  margin-top: 52px;
  font-size: 16px;
  font-weight: bold;

  a {
    color: #007aff;
  }
`;
