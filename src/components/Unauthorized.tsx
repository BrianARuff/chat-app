import * as React from "react";
import Link from "next/link";

const Unauthorized = () => {
  return (
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
  )
}

export default Unauthorized;