import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import styles from "../styles/Profile.module.css";
const Profile = () => {
  const { user, logout } = useAuth0();
  return (
    <div id="Profile" className={styles.container}>
      <img src={user.picture} alt="Profile" className={styles.profile_pic} />
      <p className={styles.text}>
        <br />
        Welcome {user.nickname}
        <br />
        Name : {user.name}
        <br />
        Email: {user.email}
      </p>
      <br />

      <br />
      <button onClick={() => logout()} className={styles.buttons}>
        LogOut
      </button>
    </div>
  );
};

export default Profile;
