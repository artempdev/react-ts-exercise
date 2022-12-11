import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams();
  const id = params.id as string;
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + id
      );
      setUser(response.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <button onClick={() => {
        navigate('/users')
      }}>Back</button>
      <h1>{user?.name} page</h1>
      <div>{user?.email}</div>
      <div>
        {user?.name} Lives in the {user?.address.city}, street{" "}
        {user?.address.street}
      </div>
    </div>
  );
};

export default UserItemPage;
