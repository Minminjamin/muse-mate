import React from "react";

const SideMenuList = () => {
  const menuList = [
    {
      name: "검색",
      url: "search",
    },
    {
      name: "내 플레이리스트",
      url: "playList",
    },
    { name: "친구", url: "friend" },
  ];

  return (
    <>
      <ul>
        {menuList.map((item) => (
          <li key={item.name}>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SideMenuList;
