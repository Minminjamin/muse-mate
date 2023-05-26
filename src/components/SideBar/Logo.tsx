import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigator = useNavigate();

  const onHandle = () => {
    navigator("/");
  };

  return <div onClick={onHandle}>Mz Mate</div>;
};

export default Logo;
