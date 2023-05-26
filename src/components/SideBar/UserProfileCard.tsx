import React from "react";

const UserProfileCard = () => {
  const userName: string = "user의 이름이 들어오는 칸";
  const userId: string = "user의 아이디가 들어오는 칸";

  return (
    <div>
      <img />
      <div>
        <span>{userName}</span>
        <span>{userId}</span>
      </div>
    </div>
  );
};

export default UserProfileCard;
