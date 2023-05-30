import React from "react";
import HomePlaylists from "../../pages/HomePlaylists";
import HomePlusButton from "../../pages/HomePlusButton";

interface FriendsPlaylist {
  name: string;
  url: string;
}

const FriendsUpdatePlaylists = () => {
  const friendsPlaylist: FriendsPlaylist[] = [
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

  //   데이터 fetch받아서 이걸 배열로 저장할 것

  return (
    <div>
      <span>친구가 업데이트한 플레이리스트</span>
      <HomePlusButton />
      <HomePlaylists playlist={friendsPlaylist} />
    </div>
  );
};

export default FriendsUpdatePlaylists;
