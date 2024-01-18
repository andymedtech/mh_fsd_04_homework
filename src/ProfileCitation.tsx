import React from "react";
import { userDataType } from "./App";

export const ProfileCitation = (
  props: Pick<userDataType, "citation" | "author">
) => {
  return (
    <div>
      <p>
        Как сказал {props.author}, <q>{props.citation}.</q>
      </p>
    </div>
  );
};
