import * as React from "react";
import UserList from "../components/UserList";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const Home = () => {
  const [hello, setHello] = useState({ hello: "" });
  useEffect(() => {
    const socket = io.io("http://localhost:8080/");
    socket.on("now", data => {
      setHello(data.message);
    });
    console.log(socket);
  }, []);
  return (
    // @ts-ignore
    <UserList />
  );
};

export default Home;
