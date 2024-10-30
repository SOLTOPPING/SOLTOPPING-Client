import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import styled from "styled-components";
import edit from "../assets/edit.png";
import { months, weeks, shortWeeks } from "../utils/calendarUtils";
import HobbyScoreBtn from "./HobbyScoreBtn";
import stamp from "../assets/stamp.png";
import search from "../assets/search.png";
import { hobbyList } from "../utils/hobbyList";

const HobbyCalendar = () => {
  const [value, onChange] = useState(new Date());

  const month = months[value.getMonth()];
  const date = value.getDate();
  const day = weeks[value.getDay()];

  const [modalOpen, setModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const clickEdit = () => {
    setModalOpen(!modalOpen);
    setIsSaved(true);
  };

  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [scoreList, setScoreList] = useState([
    { id: 1, text: "1.0", selected: false },
    { id: 2, text: "2.0", selected: false },
    { id: 3, text: "3.0", selected: false },
    { id: 4, text: "4.0", selected: false },
    { id: 5, text: "5.0", selected: false },
  ]);
  const [memo, setMemo] = useState("");

  const clickScore = (e) => {
    const selectedId = Number(e.target.value);

    setScoreList(
      scoreList.map((prevscore) => ({
        ...prevscore,
        selected: selectedId === prevscore.id,
      }))
    );
  };

  const [hobby, setHobby] = useState("");
  const [isHaveInputValue, setIsHaveInputValue] = useState(false); // 입력값 여부 상태
  const [dropDownList, setDropDownList] = useState(hobbyList); // 드롭다운 목록 상태
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1); // 현재 선택된 드롭다운 항목의 인덱스

  const showDropdownList = () => {
    if (hobby === "") {
      setIsHaveInputValue(false);
      setDropDownList([]);
    } else {
      const choosenHobbyList = hobbyList.filter((item) => item.includes(hobby));
      setDropDownList(choosenHobbyList);
    }
  };

  const changeInputValue = (e) => {
    setHobby(e.target.value);
    setIsHaveInputValue(true);
  };

  const clickDropDownItem = (clickedItem) => {
    setHobby(clickedItem);
    setDropDownList([]);
    setIsHaveInputValue(false);
    console.log(isHaveInputValue);
  };

  useEffect(showDropdownList, [hobby]);

  return (
    <CalendarWrapper isSaved={isSaved}>
      <TodayWrapper>
        <TodayDate>
          {month} {date}, {day}
        </TodayDate>
        <img src={edit} alt="edit" onClick={clickEdit} />
      </TodayWrapper>
      <Calendar
        onChange={onChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("D")} // 일 제거 숫자만 보이게
        formatYear={(locale, date) => moment(date).format("YYYY")} // 네비게이션 눌렀을때 숫자 년도만 보이게
        showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
        calendarType="gregory" // 일요일 부터 시작
        next2Label={null} // +1년 & +10년 이동 버튼 숨기기
        prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
        formatShortWeekday={(locale, date) =>
          shortWeeks[moment(date).format("d")]
        } //요일 형식 변경
      />
      <img src={stamp} alt="stamp1" className="stamp no1" />
      <img src={stamp} alt="stamp2" className="stamp no2" />
      <img src={stamp} alt="stamp3" className="stamp no3" />

      {modalOpen && (
        <EditModal>
          <button onClick={clickEdit} className="save">
            저장하기
          </button>
          <ListWrapper>
            <HobbyInputWrapper>
              <InputTitle>취미 등록</InputTitle>
              <AutoWrapper>
                <SearchWrapper>
                  <input
                    type="text"
                    placeholder="취미를 검색해보세요."
                    value={hobby}
                    onChange={changeInputValue}
                  />

                  <img src={search} alt="search" />
                </SearchWrapper>
                {isHaveInputValue && (
                  <DropDownBox>
                    {dropDownList.map((dropItem, dropidx) => {
                      return (
                        <DropDownItem
                          key={dropidx}
                          onClick={() => clickDropDownItem(dropItem)}
                          className={
                            dropDownItemIndex === dropidx ? "selected" : "" // 선택된 항목 스타일
                          }
                        >
                          {dropItem}
                        </DropDownItem>
                      );
                    })}
                  </DropDownBox>
                )}
              </AutoWrapper>
            </HobbyInputWrapper>
            <HobbyInputWrapper>
              <InputTitle>활동 시간</InputTitle>
              <TimeWrapper>
                <input
                  className="time"
                  type="time"
                  onChange={(e) => setStartTime(e.target.value)}
                />
                -
                <input
                  className="time"
                  type="time"
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </TimeWrapper>
            </HobbyInputWrapper>
            <HobbyInputWrapper>
              <InputTitle>오늘의 점수</InputTitle>
              <TimeWrapper>
                {scoreList.map((score, id) => (
                  <HobbyScoreBtn
                    text={score.text}
                    value={score.id}
                    onClick={clickScore}
                    selected={score.selected}
                    key={id}
                  />
                ))}
              </TimeWrapper>
            </HobbyInputWrapper>
            <HobbyInputWrapper>
              <InputTitle>메모</InputTitle>
              <input type="text" onChange={(e) => setMemo(e.target.value)} />
            </HobbyInputWrapper>
          </ListWrapper>
        </EditModal>
      )}
    </CalendarWrapper>
  );
};

export default HobbyCalendar;

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 210px;
  background-color: #97d5ee;
  padding: 20px;
  width: 320px;
  height: 425px;
  border-radius: 28px;

  box-shadow: 2px 2px 7px 0px rgba(0, 0, 0, 0.13);

  .stamp {
    width: 41px;
    height: 41px;
    position: absolute;
  }
  .stamp.no1 {
    bottom: 78px;
    left: 22px;
  }
  .stamp.no2 {
    bottom: 124px;
    left: 22px;
  }
  .stamp.no3 {
    bottom: 78px;
    left: 113px;
  }
  .react-calendar__tile--now {
    background: ${({ isSaved }) =>
      isSaved
        ? `url(${stamp}) no-repeat center center / 90%`
        : "#485e92"} !important;
    color: ${({ isSaved }) => (isSaved ? "#000000" : "#ffffff")} !important;

    border-radius: 50%;
    color: #ffffff;
  }
`;

const TodayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 20px;
  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
const TodayDate = styled.div`
  font-size: 25px;
`;

const EditModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 15px 26px;
  border-radius: 28px 28px 0 0;
  width: 341px;
  bottom: -32px;
  height: 435px;
  background-color: #ffffff;
  z-index: 30;
  position: absolute;
  right: -16px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.13);

  .save {
    border: none;
    background-color: transparent;
    font-family: "Noto Sans", "Noto Sans KR";
    font-weight: bold;
    font-size: 15px;
    color: #007aff;
    cursor: pointer;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

const HobbyInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  margin-bottom: 28px;

  input {
    height: 48px;
    width: 95%;
    border-radius: 11px;
    background-color: #e8e8e8;
    border: none;
    padding-left: 12px;
    font-family: "Noto Sans", "Noto Sans KR";
  }

  .time {
    width: 40%;
  }
`;

const InputTitle = styled.div`
  font-size: 15px;
  margin-bottom: 7px;
  margin-left: 5px;
`;

const SearchWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  img {
    position: absolute;
    right: 14px;
    top: 14px;

    width: 24px;
    height: 24px;
  }
`;

const AutoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const DropDownBox = styled.div`
  border-radius: 0 0 16px 16px; // 하단 모서리 스타일
  list-style-type: none; // 리스트 스타일 제거
  z-index: 3; // 레이어 우선순위
  background-color: #e8e8e8;
  font-size: 14px;
  padding: 3px 0 10px 10px;
  position: absolute;
  top: 43px;
  width: 328px;
`;

const DropDownItem = styled.li`
  list-style: none;
  text-align: left;
  margin-bottom: 5px;
  cursor: pointer;

  &.selected {
    background-color: lightgray;
  }
`;

const TimeWrapper = styled.div`
  width: 99%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
