import React from "react";
import styles from "../styles/Guidance.module.css";
import Idea from "../assets/proposal.png";
const Guidance = () => {
  return (
    <div id="Guidance" className={styles.container}>
      {" "}
      <p>
        <img src={Idea} alt="Proposal" className={styles.img_class} />
      </p>
      <p className={styles.text}>
        Have a brilliant Idea or willing to contribute to the community? And
        don't know how to get started? We introduce you to the Project Proposal.
        A platform that brings your ideas to life. You can submit your proposal
        here! After submitting your project, your proposal will be verified and
        the later will be notified to you. If you want guidance for your
        project, our most experienced and highly skilled faculty will be
        reviewing your project idea! Be quick, time and tide wait for none!
        <br />
        <br />
        <a href="https://forms.gle/ZVwmoefm881EcGUH9">
          <button>
            <div className={styles.discord_div}>
              {/* <img src={} width="10%" /> */}
              Submit your proposal
            </div>
          </button>
        </a>
      </p>
    </div>
  );
};

export default Guidance;
