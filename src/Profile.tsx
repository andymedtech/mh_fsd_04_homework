import React from "react";
import { ProfilePicture } from "./ProfilePicture";
import { ProfileName } from "./ProfileName";
import { ProfileBio } from "./ProfileBio";
import { ProfileCitation } from "./ProfileCitation";
import { ProfileHobbies } from "./ProfileHobbies";
import { userData } from "./App";

function Profile() {
  return (
    <div>
      <ProfilePicture picture={userData.picture} name={userData.name} />
      <ProfileName name={userData.name} />
      <ProfileBio bio={userData.bio} />
      <ProfileCitation citation={userData.citation} author={userData.author} />
      <ProfileHobbies hobbies={userData.hobbies} />
    </div>
  );
}

export default Profile;
