import React from "react";
import styles from "../styles/Community.module.css";
import ImageCom from "../assets/community.png";
import Discord from "../assets/discord.svg";
import { useAuth0 } from "@auth0/auth0-react";

const Community = () => {
  const { user } = useAuth0();
  return (
    <div id="Community" className={styles.container}>
      <p>
        <img src={ImageCom} alt="Community" className={styles.img_class} />
      </p>
      <p className={styles.text}>
        Welcome {user.nickname}
        <br />
        <br />
        The community is that aspect which makes our initiative a successful one
        . So we have the discord support where all the open source enthusiasts
        support , learn , share there thoughts and have a great learning time
        with the experienced ones. Here we keep the community updated with all
        the continuous updates , events and learning tracks released.
        <br />
        <br />
        <a href="https://discord.gg/WWE24Y69">
          <button>
            <div className={styles.discord_div}>
              <img src={Discord} width="10%" />
              Join Our Discord
            </div>
          </button>
        </a>
      </p>
    </div>
  );
};

export default Community;
