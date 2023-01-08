import React from "react";
import styles from "../styles/OpenSource.module.css";
import Github from "../assets/github.png";
import Gitsvg from "../assets/github.svg";
const OpenSource = () => {
  return (
    <div id="OpenSource" className={styles.container}>
      <p className={styles.text}>
        Here comes the most important part of our community , that is
        Open-Source . We have maintained a professional GitHub Organisation
        which contains a bundle of Open Source Projects ranging from beginner to
        Advanced Level . By Joining this Organisation you will be able to
        utilize the tools build over there as well as contribute to the projects
        <br />
        <br />
        <a href="https://github.com/OpenToMany">
          <button>
            <div className={styles.github_div}>
              <img src={Gitsvg} width="10%" />
              Join our Github
            </div>
          </button>
        </a>
      </p>
      <p>
        <img src={Github} alt="Github" className={styles.img_class} />
      </p>
    </div>
  );
};

export default OpenSource;
