import styled from "styled-components";
import gold from "../assets/gold.png";
import silver from "../assets/silver.png";
import bronze from "../assets/bronze.png";

const Ranking = ({ id, img, text, number }) => {
  return (
    <StyledRanking>
      <NumWrapper id={id}>{id}</NumWrapper>
      <ImgWrapper>
        <img src={img} alt={text} />
      </ImgWrapper>
      <ContentWrapper>
        <RankTitle>{text}</RankTitle>
        <RankContent>
          현재 {number.toLocaleString()}명이 함께 하는 중!
        </RankContent>
      </ContentWrapper>
    </StyledRanking>
  );
};

export default Ranking;

const StyledRanking = styled.div`
  display: flex;
  align-items: center;
  border: none;
  width: 330px;
  height: 89px;
  border-radius: 10px;
  background-color: #e8e8e8;
  margin: 0 auto 14px;
  font-family: "Noto Sans", "Noto Sans KR";
  font-size: 15px;
  padding-left: 25px;
`;

const NumWrapper = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-right: 20px;
  width: 28px;
  height: 39px;

  background-image: ${({ id }) => {
    if (id === 1) return `url(${gold})`;
    if (id === 2) return `url(${silver})`;
    if (id === 3) return `url(${bronze})`;
    return "none";
  }};
  background-repeat: no-repeat;
  background-size: cover;
`;

const ImgWrapper = styled.div`
  margin-right: 20px;
  img {
    width: 52px;
    height: 52px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RankTitle = styled.div`
  font-weight: bold;
`;
const RankContent = styled.div`
  text-align: left;
  font-size: 13px;
  color: #5f5f5f;
`;
