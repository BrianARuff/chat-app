import * as React from "react";
import { SyntheticEvent } from "react";
import UserDataForm from "./Form";

const LoginForm = () => {

  const handleLoginUser = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Login Here</h2>
      <UserDataForm />
    </div>
  );
};

export default LoginForm;