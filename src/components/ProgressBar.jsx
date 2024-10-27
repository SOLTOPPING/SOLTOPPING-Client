import styled from "styled-components";

const ProgressBar = ({ idx, length }) => {
  return (
    <ProgressWrapper>
      <progress
        id="progress"
        value={(idx / length) * 100}
        min="0"
        max="100"
      ></progress>
    </ProgressWrapper>
  );
};

export default ProgressBar;

const ProgressWrapper = styled.div`
  text-align: center;
  margin-bottom: 36px;

  #progress {
    appearance: none;
    height: 4px;
    width: 361px;
  }

  #progress::-webkit-progress-bar {
    background: #f0f0f0;
    border-radius: 12px;
    overflow: hidden;
  }

  #progress::-webkit-progress-value {
    background: #1158ff;
    border-radius: 0px;
  }
`;
