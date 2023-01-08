import React from "react";
import styles from "../styles/Learning.module.css";
import Github from "../assets/github.png";
import Gitsvg from "../assets/github.svg";
import HashNode from "../assets/hashnode.png";
import HashNodesvg from "../assets/hashnode.svg";
import Youtube from "../assets/youtube.png";
import Youtubesvg from "../assets/youtube.svg";
import Women from "../assets/women.png";
import Auth0 from "../assets/auth0.png";
import Auth0svg from "../assets/auth0.svg";
import Cdb from "../assets/cdb.png";
import Cdbsvg from "../assets/cdb.svg";
import Twilo from "../assets/Twilo.png";
import Twilosvg from "../assets/Twilo.svg";
const Learning = () => {
  return (
    <>
      <div className={styles.container}>
        <p>
          <img src={Github} alt="Github" className={styles.img_class} />
        </p>
        <p className={styles.text}>
          This is the best Developer tools that a student can get . GitHub
          provides the students with GitHub Student Developer Pack which
          contains professional Developer tools , educational resources and a
          platform to leverage the power of Open Source . Haven't experienced ,
          go ahead and explore its power
          <br />
          <br />
          <br />
          <br />
          <a href="https://education.github.com/pack">
            <button className={styles.buttons}>
              <div className={styles.github_div}>
                <img src={Gitsvg} width="10%" />
                Github Student Developer Pack
              </div>
            </button>
          </a>
        </p>
      </div>
      <br />
      <div className={styles.container}>
        <p>
          <img src={HashNode} alt="HashNode" className={styles.img_class} />
        </p>
        <p className={styles.text}>
          HashNode is the most popular tech blog support . We keep our community
          updated regarding our educational tech articles and newsletters with
          the HashNode . Not just that , we encourage our community members to
          contribute their knowledge and write their own articles which would
          demonstrate what they learnt. Go ahead and lookout to our community
          blog.
          <br />
          <br />
          <br />
          <br />
          <a href="https://achiverram28.hashnode.dev/">
            <button className={styles.buttons_hash}>
              <div className={styles.github_div}>
                <img src={HashNodesvg} width="10%" />
                Check out HashNode
              </div>
            </button>
          </a>
        </p>
      </div>
      <br />
      <div id="Learning" className={styles.container}>
        <p>
          <img
            src={Youtube}
            alt="Youtube"
            className={styles.img_class}
            width="120%"
          />
        </p>
        <p className={styles.text}>
          We have a dedicated YouTube Channel where we cover all the tech stack
          tracks primarily focussing in the field of DevOPS , Linux , Data
          Analytics , Data Science , BlockChain , many more to go . We engage
          our community with planned tech talks with developers , weekend
          knowledge from resource person and many more . So stay tuned and go
          ahead with our YouTube Channel
          <br />
          <br />
          <br />
          <br />
          <a href="https://www.youtube.com/@logframesquare9176">
            <button className={styles.buttons_you}>
              <div className={styles.github_div}>
                <img src={Youtubesvg} width="10%" />
                Youtube Channel
              </div>
            </button>
          </a>
        </p>
      </div>
      <br />
      <div id="Learning" className={styles.container}>
        <p>
          <img
            src={Women}
            alt="Women"
            className={styles.img_class}
            width="100%"
          />
        </p>
        <p className={styles.text}>
          This is a key and an important feature which makes our community stand
          out from many , "The Women TechMakers Community" . We encourage all
          the women developers to join this community where they would get
          mentorship from female mentors , always would be updated about Google
          Women Techmakers' Program . The main motto of this initiative to
          empower women tech community and to achieve great success in their
          lives. Women Safety and Security is the atmost care taken.
          <br />
          <br />
          <br />
          <br />
          <a href="###">
            <button className={styles.buttons_hash}>
              <div className={styles.github_div}>
                Women TechMakers Community
              </div>
            </button>
          </a>
        </p>
      </div>
      <div id="Learning" className={styles.container}>
        <p>
          <img
            src={Auth0}
            alt="Auth0"
            className={styles.img_class}
            width="100%"
          />
        </p>
        <p className={styles.text}>
          Rely on the Auth0 identity platform to add sophisticated
          authentication and authorization to your applications. Centralize and
          manage users from multiple identity providers and give them branded,
          seamless signup and login experiences. Finely control access with a
          degree of customization that can accommodate even the most complex
          security requirements . This is one of our API learning track.
          <br />
          <br />
          <br />
          <br />
          <a href="https://auth0.com/docs">
            <button className={styles.buttons_auth}>
              <div className={styles.github_div}>
                <img src={Auth0svg} width="10%" />
                Auth0 Docs
              </div>
            </button>
          </a>
        </p>
      </div>
      <div id="Learning" className={styles.container}>
        <p>
          <img src={Cdb} alt="Cdb" className={styles.img_class} width="100%" />
        </p>
        <p className={styles.text}>
          CockroachDB is a distributed database with standard SQL for cloud
          applications. Less code. Less toil. Less stress. More time to build
          what matters.CockroachDB makes scale so simple. It automatically
          distributes data and workload demand .Leverage its power by focusing
          on our Database Learning Track using CockroachDB. Refer to the docs.
          <br />
          <br />
          <br />
          <br />
          <a href="https://www.cockroachlabs.com/docs/stable/">
            <button className={styles.buttons_hash}>
              <div className={styles.github_div}>
                <img src={Cdbsvg} width="10%" />
                CockroachDB Docs
              </div>
            </button>
          </a>
        </p>
      </div>
      <div id="Learning" className={styles.container}>
        <p>
          <img
            src={Twilo}
            alt="Twilo"
            className={styles.img_class}
            width="110%"
          />
        </p>
        <p className={styles.text}>
          Twilio is a customer engagement platform used by hundreds of thousands
          of businesses and more than ten million developers worldwide to build
          unique, personalized experiences for their customers.The Twilio REST
          API allows you to query metadata about your account, phone numbers,
          calls, text messages, and recordings. This is a part of our API
          learning track . Go ahead and refer to the docs.
          <br />
          <br />
          <br />
          <br />
          <a href="https://www.twilio.com/docs">
            <button className={styles.buttons_auth}>
              <div className={styles.github_div}>
                <img src={Twilosvg} width="10%" />
                Twilo Docs
              </div>
            </button>
          </a>
        </p>
      </div>
    </>
  );
};

export default Learning;
