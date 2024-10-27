import topBar from "../assets/topBar.png";
import tabBar from "../assets/tabBar.jpg";
import middleBar from "../assets/middleBar.png";
import StatusBar from "../components/StatusBar";
import NavigationBar from "../components/NavigationBar";
import styled from "styled-components";

const Home = () => {
  return (
    <div className="webAppWrapper">
      <div className="homeWrapper">
        <StatusWrapper>
          <StatusBar />
        </StatusWrapper>
        <TopBar>
          <img src={topBar} alt="topBar" height="40px" width="100%" />
        </TopBar>
        <MiddleBar>
          <img src={middleBar} alt="middleBar" height="37px" width="329px" />
        </MiddleBar>
        <NavigationBar />
        <BtnBar>
          <SettingBtn>홈화면변경</SettingBtn>
          <SettingBtn>흔들기설정</SettingBtn>
        </BtnBar>
        <TabBar>
          <img src={tabBar} alt="tabBar" height="45px" width="393px" />
        </TabBar>
      </div>
    </div>
  );
};

export default Home;

const StatusWrapper = styled.div`
  background-color: #ffffff;
`;

const TopBar = styled.div`
  display: flex;
  align-items: flex-end;
  width: 393px;
  height: 58px;
  background-color: #ffffff;
  margin-bottom: 151px;
`;

const MiddleBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #ffffff;
  width: 356px;
  height: 40px;
`;

const BtnBar = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 27px;
`;

const SettingBtn = styled.div`
  width: 148px;
  height: 40px;
  background-color: #e7ebef;
  border-radius: 22px;
  color: #696969;
  text-align: center;
  line-height: 40px;
  font-size: 12px;
`;

const TabBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  flex-grow: 1;
`;
