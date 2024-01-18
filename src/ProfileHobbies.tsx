import React from "react";
import { userDataType } from "./App";

export const ProfileHobbies = (props: Pick<userDataType, "hobbies">) => {
  return (
    <div>
      <h3>Увлечения:</h3>
      <HobbiesList hobbies={props.hobbies} />
    </div>
  );
};

const HobbiesList = (props: { hobbies: string[] }) => {
  const listHobbies = props.hobbies.map((item) => (
    <li key={item.toString()}>{item}</li>
  ));
  return <ul>{listHobbies}</ul>;
};
