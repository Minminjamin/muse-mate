import React from "react";
import { useNavigate } from "react-router-dom";

const HomePlusButton = () => {
  const navigator = useNavigate();
  // props로 링크 받아오기 추가

  const onHandle = () => {
    navigator("/");
    // 위에 아무튼 변수 넣기
  };

  return <div onClick={onHandle}>+</div>;
};

export default HomePlusButton;
