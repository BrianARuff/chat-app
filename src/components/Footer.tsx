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
            <a
              style={{
                color: "#fdc500"
              }}
            >Facebook</a>
          </li>
          <li style={{
            textAlign: "center",
            width: "100%"
          }}>
            <a
              style={{
                color: "#fdc500"
              }}
            >Twitter</a>
          </li>
          <li style={{
            textAlign: "center",
            width: "100%"
          }}>
            <a
              style={{
                color: "#fdc500"
              }}
            >Instagram</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;