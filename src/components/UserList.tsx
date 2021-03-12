import * as React from "react";
import { useEffect, useState } from "react";
import { User } from "./User";

const UserList = (): JSX.Element[] => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then(({ users }) => {
        setUsers(users);
      })
      .catch((err) => console.error(err));
  }, []);
  return users.map((user) => {
    return <User key={user.username} user={user} />;
  });
};

export default UserList;
