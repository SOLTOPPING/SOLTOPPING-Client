import styled from "styled-components";

import bookmark from "../assets/bookmark.png";
import download from "../assets/download.png";
import share from "../assets/share.png";

const ShareBtnList = () => {
  return (
    <ShareWrapper>
      <img src={download} alt="download" />
      <img src={bookmark} alt="bookmark" />
      <img src={share} alt="share" />
    </ShareWrapper>
  );
};

export default ShareBtnList;

const ShareWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 40px;

  img {
    width: 27px;
    height: 27px;
    cursor: pointer;
  }
`;
