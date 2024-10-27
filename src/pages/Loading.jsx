import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import { PuffLoader } from "react-spinners";

import StatusBar from "../components/StatusBar";
import TestHeader from "../components/TestHeader";
import ProgressBar from "../components/ProgressBar";
import { Question, QuestionDescription } from "./Test";

const Loading = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/recommendation");
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="webAppWrapper">
      <div className="testWrapper">
        <StatusBar />
        <TestHeader />
        <ProgressBar idx={1} length={1} />
        <QuestionDescription>모든 테스트가 완료되었어요!</QuestionDescription>

        <Question>SOL AI가 당신의 신한프렌즈를 분석 중이에요!</Question>
        <LoaderWrapper>
          <PuffLoader color="#1158FF" size={110} speedMultiplier={0.9} />
        </LoaderWrapper>
      </div>
    </div>
  );
};

export default Loading;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
