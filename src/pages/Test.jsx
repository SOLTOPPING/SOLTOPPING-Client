import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import TestHeader from "../components/TestHeader";
import Option from "../components/Option";
import InterestingOption from "../components/InterestingOption";
import { questionList } from "../utils/questionList";
import Button from "../components/Button";
import StatusBar from "../components/StatusBar";
import ProgressBar from "../components/ProgressBar";

const Test = () => {
  const navigate = useNavigate();
  const [friendsType, setFriendsType] = useState([""]);
  const [interestingOptions, setInterestingOptions] = useState([
    {
      selected: false,
      text: "입출금",
    },
    {
      selected: false,
      text: "예적금",
    },
    {
      selected: false,
      text: "청약",
    },
    {
      selected: false,
      text: "외화예적금",
    },
    {
      selected: false,
      text: "대출",
    },
    {
      selected: false,
      text: "카드",
    },
    {
      selected: false,
      text: "펀드",
    },
    {
      selected: false,
      text: "보험",
    },
    {
      selected: false,
      text: "골드/실버",
    },
    {
      selected: false,
      text: "퇴직연금",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCkAnswer = (type) => {
    setFriendsType((prev) => [...prev, type]);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleCkInteresting = (idx) => {
    setInterestingOptions((prevOptions) =>
      prevOptions.map((option, i) =>
        i === idx ? { ...option, selected: !option.selected } : option
      )
    );
  };

  const currentQuestion = questionList[currentIndex];
  console.log(currentQuestion);
  console.log(friendsType);
  console.log(interestingOptions);

  return (
    <div className="webAppWrapper">
      <div className="testWrapper">
        <StatusBar />

        <TestHeader />
        {currentQuestion && (
          <div key={currentIndex}>
            <ProgressBar idx={currentIndex} length={questionList.length} />

            <Question>{currentQuestion.q}</Question>
            <QuestionDescription>{currentQuestion.d}</QuestionDescription>
            {currentIndex === questionList.length - 1 ? ( // 마지막 질문인지 확인
              <>
                <InterestingOptionWrapper>
                  {interestingOptions.map((aval, aidx) => (
                    <InterestingOption
                      key={aidx}
                      text={aval.text}
                      selected={aval.selected}
                      onClick={() => handleCkInteresting(aidx)}
                    />
                  ))}
                </InterestingOptionWrapper>
                <Button text={"다음"} onClick={() => navigate("/loading")} />
              </> //다음 버튼 누르면 데이터 백으로 전송? 그리고 새 페이지로
            ) : (
              <OptionWrapper>
                {currentQuestion.a.map((aval, aidx) => (
                  <Option
                    key={aidx}
                    text={aval.text}
                    onClick={() => handleCkAnswer(aval.type)}
                  />
                ))}
              </OptionWrapper>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;

export const Question = styled.div`
  color: #ffffff;
  padding: 0 34px;
  font-size: 23px;
  font-weight: bold;
`;

export const QuestionDescription = styled.div`
  color: #ffffff;
  margin-top: 20px;
  padding: 0 34px;
  font-size: 12px;
`;

const InterestingOptionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 73px;
  padding-left: 10px;
  margin-bottom: 165px;
`;

const OptionWrapper = styled.div`
  margin-top: 328px;
`;
