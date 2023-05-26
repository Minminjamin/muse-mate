import React from "react";
import Logo from "../components/SideBar/Logo";
import SideMenuLIst from "../components/SideBar/SideMenuList";
import UserProfileCard from "../components/SideBar/UserProfileCard";

const SideBar = () => {
  return (
    <div>
      <Logo />
      <SideMenuLIst />
      <UserProfileCard />
    </div>
  );
};

export default SideBar;
