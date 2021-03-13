import * as React from "react";
import { SyntheticEvent } from "react";
import UserDataForm from "./Form";

const RegisterForm = () => {

  const handleRegisterUser = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Register Here</h2>
      <UserDataForm />
    </div>
  );
};

export default RegisterForm;