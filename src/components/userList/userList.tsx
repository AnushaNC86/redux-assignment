import React from "react";
import UserItem from "../userItem/userItem";
import { useSelector } from "react-redux";
import { stat } from "fs";

const UserList = () => {
  const users = useSelector((state: any) => state.users);
  
  return (
    <div className="userListConatainer">
      {users.map((user: any, i: number) => {
        return <UserItem id={user.id} title={user.title} />;
      })}
    </div>
  );
};

export default UserList;
