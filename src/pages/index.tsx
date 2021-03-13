import Link from "next/link";
import * as React from "react";
import NavBar from "../components/Navbar";
import Unauthorized from "../components/Unauthorized";

const Home = () => {
  return (
    <div style={{
      display: "flex",
      flexFlow: "column nowrap",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      height: "80vh"
    }}>
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bolder",
          margin: `20px`
        }}
      >Welcome to Chattopia!</h1>
      <h2>Chat with Random People On the Internet</h2>
      <Unauthorized />
    </div>
  );
};

export default Home;
