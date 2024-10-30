import styled from "styled-components";

import hobbyCharacter from "../assets/hobbyCharacter.jpg";
import HobbyCalendar from "./HobbyCalendar";
const HobbyHome = () => {
  return (
    <TitleWrapper>
      <HobbyTitle>
        오늘의 취미 기록하고,
        <br /> 스탬프를 모아보세요!
      </HobbyTitle>
      <img
        src={hobbyCharacter}
        alt="hobbyCharacter"
        width="198px"
        height="233px"
      />
      <HobbyCalendar />
    </TitleWrapper>
  );
};
export default HobbyHome;

const HobbyTitle = styled.div``;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 22px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  align-items: center;
  position: relative;
`;
