import * as React from "react";

type Props = {
  user: {
    username: string;
  };
};

export const User = ({ user: { username } }: Props): JSX.Element => {
  return <p>{username}</p>;
};
