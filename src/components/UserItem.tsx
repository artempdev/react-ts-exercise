import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div onClick={() => onClick(user)} style={{ padding: 15, border: "1px solid gray" }}>
      {user.id}. {user.name} Lives in the {user.address.city}, street 
      {user.address.street}
    </div>
  );
};

export default UserItem;
