import Head from "next/head";
import * as React from "react";
import styles from "../../styles/Home.module.css";
import UserList from "../components/UserList";

// @ts-ignore
const Home = (): JSX.Element[] => <UserList />;

export default Home;
