import Link from "next/link";
import * as React from "react";
import NavBar from "../components/Navbar";

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
      <div>
        <p style={{
          fontWeight: "bold",
          margin: "20px"
        }}>
          <Link href={`/register`}>
            <a style={{
              color: "#fdc500"
            }}>Need a new account?</a>
          </Link>
        </p>
        <p style={{
          fontWeight: "bold",
          margin: "20px"
        }}>
          <Link href={`login`}>
            <a style={{
              color: "#fdc500"
            }}>Already have an account?</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
