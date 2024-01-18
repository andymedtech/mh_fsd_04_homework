import React from "react";
import { userDataType } from "./App";

export const ProfileBio = (props: Pick<userDataType, "bio">) => {
  return (
    <div>
      <p>{props.bio}</p>
    </div>
  );
};
