import React from "react";
import { ProfilePicture } from "./ProfilePicture";
import { ProfileName } from "./ProfileName";
import { ProfileBio } from "./ProfileBio";
import { ProfileCitation } from "./ProfileCitation";
import { ProfileHobbies } from "./ProfileHobbies";

function Profile() {
  return (
    <div>
      <ProfilePicture />
      <ProfileName />
      <ProfileBio />
      <ProfileCitation />
      <ProfileHobbies />
    </div>
  );
}

export default Profile;
