import React from "react";
import HomePlaylists from "../../pages/HomePlaylists";
import HomePlusButton from "../../pages/HomePlusButton";

interface FollowingPlaylist {
  name: string;
  url: string;
}

const MyFollowPlaylists = () => {
  const followingPlaylist: FollowingPlaylist[] = [
    {
      name: "일단 이름이다.",
      url: "playlist",
    },
    {
      name: "마잭.",
      url: "playlist",
    },
    {
      name: "고양이는 신이다.",
      url: "playlist",
    },
  ];

  return (
    <div>
      <span>내가 팔로우한 플레이리스트</span>
      <HomePlusButton />
      <HomePlaylists playlist={followingPlaylist} />
    </div>
  );
};

export default MyFollowPlaylists;
