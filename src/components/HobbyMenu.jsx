import { useState } from "react";
import styled from "styled-components";

import HobbyRanking from "./HobbyRanking";
import HobbyHome from "./HobbyHome";

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Menu = styled.button`
  font-family: "Noto Sans", "Noto Sans KR";
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  color: #ababab;

  border: none;
  background-color: #ffffff;

  &.true {
    color: #000000;
  }
`;

const HobbyMenu = () => {
  const [menuList, setMenuList] = useState([
    {
      id: 0,
      isClicked: true,
      title: "홈",
      content: <HobbyHome />,
    },
    { id: 1, isClicked: false, title: "랭킹", content: <HobbyRanking /> },
  ]);

  const handleClick = (e) => {
    const selectedId = Number(e.target.id);
    setMenuList(
      menuList.map((menu) => ({
        ...menu,
        isClicked: selectedId === menu.id ? true : false,
      }))
    );
  };
  console.log(menuList);

  return (
    <>
      <MenuWrapper>
        {menuList.map((menu) => {
          return (
            <Menu
              onClick={handleClick}
              key={menu.id}
              id={menu.id}
              className={menu.isClicked}
            >
              {menu.title}
            </Menu>
          );
        })}
      </MenuWrapper>

      {menuList.map(
        (menu) => menu.isClicked && <div key={menu.id}>{menu.content}</div>
      )}
    </>
  );
};

export default HobbyMenu;
