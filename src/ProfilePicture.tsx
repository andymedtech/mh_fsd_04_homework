import React from "react";
import { userDataType } from "./App";

export const ProfilePicture = (
  props: Pick<userDataType, "picture" | "name">
) => {
  return (
    <div>
      <img src={props.picture} alt={props.name}></img>
    </div>
  );
};
