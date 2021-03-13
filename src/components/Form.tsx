import * as React from "react";
import { ChangeEvent, useState } from "react";

const UserDataForm = (props) => {

  type IFormData = {
    username: string,
    password: string,
  }

  const [formData, setFormData] = useState<IFormData>({
    username: "",
    password: ""
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form>
      <input
        onChange={handleInputChange}
        type="email"
        name="username"
        placeholder="username"
      />
      <input
        onChange={handleInputChange}
        type="password"
        name="password"
        placeholder="Password"
      />
      <button
        onClick={props.handleSubmit}
        type="submit">Create Account
      </button>
    </form>
  );
};

export default UserDataForm;