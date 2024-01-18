import React from "react";
import Profile from "./Profile";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Profile />
      <hr></hr>
      <Counter />
    </div>
  );
}

export default App;

export type userDataType = {
  picture: string;
  name: string;
  bio: string;
  author: string;
  citation: string;
  hobbies: string[];
};

export const userData: userDataType = {
  picture: "./img/IvanIvanov.jpg",
  name: "Иван Иванов",
  bio: "Популярный актёр",
  author: "А. А. Милн",
  citation: "некоторые люди говорят с животными",
  hobbies: ["Чтение", "Плавание", "Искусство"],
};
