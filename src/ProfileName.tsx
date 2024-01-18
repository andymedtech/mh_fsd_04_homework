import React from "react";
import { userDataType } from "./App";

export const ProfileName = (props: Pick<userDataType, "name">) => {
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  );
};
