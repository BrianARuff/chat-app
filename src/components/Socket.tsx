import * as React from "react";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const Socket = () => {
  const [hello, setHello] = useState({ hello: "" });
  useEffect(() => {
    const socket = io.io("http://localhost:8080/");
    socket.on("now", data => {
      setHello(data.message);
    });
    console.log(socket);
  }, []);
};

export default Socket;