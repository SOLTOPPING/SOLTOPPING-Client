import styled from "styled-components";
import statusBar from "../assets/statusBar.png";

const StyledStatusBar = styled.div`
  margin-top: 14px;
`;

const StatusBar = () => {
  return (
    <StyledStatusBar>
      <img src={statusBar} width="100%" />
    </StyledStatusBar>
  );
};

export default StatusBar;
