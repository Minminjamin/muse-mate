import React from "react";
import Banner from "../components/Home/Banner";
import FriendsUpdatePlaylists from "../components/Home/FriendsUpdatePlaylists";
import MyFollowPlaylists from "../components/Home/MyFollowPlaylists";
import RecommendedPlaylists from "../components/Home/RecommendedPlaylists";

const Home = () => {
  return (
    <div>
      <Banner />
      <RecommendedPlaylists />
      <FriendsUpdatePlaylists />
      <MyFollowPlaylists />
    </div>
  );
};

export default Home;
