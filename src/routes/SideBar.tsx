import React from "react";
import Logo from "../components/Logo";

const SideBar = () => {
  return (
    <div>
      <Logo />
      <SideBar />
    </div>
  );
};

export default SideBar;
