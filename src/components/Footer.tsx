import Link from "next/link";
import * as React from "react";

const Footer = () => {
  return (
    <footer style={{
      height: "10vh",
      background: "#00509d"
    }}>
      <nav>
        <ul style={{
          display: "flex",
          height: "10vh",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <li style={{
            textAlign: "center",
            width: "100%"
          }}>
            <Link href={`https://www.linkedin.com/in/brianaruff/`}>
              <a
                style={{
                  color: "#fdc500"
                }}
              >LinkedIn</a>
            </Link>
          </li>
          <li style={{
            textAlign: "center",
            width: "100%"
          }}>
            <Link href={`https://twitter.com/brianARuff`}>
              <a
                style={{
                  color: "#fdc500"
                }}
              >Twitter</a>
            </Link>
          </li>
          <li style={{
            textAlign: "center",
            width: "100%"
          }}>
            <Link href={`https://github.com/BrianARuff`}>
              <a
                style={{
                  color: "#fdc500"
                }}
              >Github</a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;