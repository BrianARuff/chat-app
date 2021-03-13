import * as React from "react";
import Link from "next/link";
import styles from "../../styles/NavBar.module.css";

console.log(styles);

const NavBar = () =>
  <header>
    <nav className={styles.navbarContainer}>
      <ul className={styles.navbarContainerUnorderedList}>
        <li>
          <Link href={`/`}>Home
          </Link>
        </li>
        <li>
          <Link href={`/login`}>Login
          </Link>
        </li>
        <li>
          <Link href={`/register`}>Register
          </Link>
        </li>
      </ul>
    </nav>
  </header>;

export default NavBar;