import React from "react";

interface Playlist {
  name: string;
  url: string;
}

const HomePlaylists = ({ playlist }: { playlist?: Array<Playlist> }) => {
  // 변수 props로 받아서 플리 출력

  return (
    <ul>
      <li>추천 플리1</li>
      <li>추천 플리2</li>
      <li>추천 플리3</li>
      <li>추천 플리4</li>
    </ul>
  );
};

export default HomePlaylists;
