import React from "react";

function ProfileScreen() {
  if (localStorage.getItem("access_token") === null) {
    window.location = "/login";
  }
  return <h1> This is Profile Page</h1>;
}
export default ProfileScreen;
