import styled from "styled-components";
import { useState } from "react";

import { TitleWrapper, HobbyTitle } from "../components/HobbyHome";
import { rankingList } from "../utils/rankingList";
import Ranking from "./Ranking";

const HobbyRanking = () => {
  const [value, onChange] = useState(new Date());

  const updateMonth = value.getMonth() + 1;
  const updateDate = value.getDate();
  const upDateTime = value.getHours();

  return (
    <TitleWrapper>
      <HobbyTitle>
        같은 취미를 가진
        <br /> 사람들을 구경해보아요!
      </HobbyTitle>
      <Standard>
        {updateMonth}.{updateDate} {upDateTime}:00 기준
      </Standard>
      {rankingList.map((list, id) => (
        <Ranking
          key={id}
          id={list.id}
          img={list.img}
          text={list.title}
          number={list.number}
        />
      ))}
    </TitleWrapper>
  );
};
export default HobbyRanking;

const Standard = styled.div`
  margin: 15px 0;
  font-size: 13px;
  color: #5f5f5f;
`;
