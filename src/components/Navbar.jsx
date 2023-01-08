import { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";
import Name from "./Name";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();
  const [menuOpacity, setmenuOpacity] = useState(0);

  const openNav = () => {
    setmenuOpacity(1);
  };
  const closeNav = () => {
    setmenuOpacity(0);
  };

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    let width = window.screen.width;
    console.log(width);
    window.onscroll = function () {
      if (width > 992) {
        var currentScrollPos = window.pageYOffset;
        if (document.getElementById("navbar").style.display === "none") {
        } else {
          if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
          } else {
            document.getElementById("navbar").style.top = "-80px";
            setmenuOpacity(0);
          }
        }

        prevScrollpos = currentScrollPos;
      }
    };
  });
  return (
    <>
      <nav className={styles.navBar} id="navbar">
        <Name />
        <ul>
          <li>
            {!isLoading && !user && (
              <a
                className={styles.hover_underline_animation}
                data-aos="fade-down"
                data-aos-delay="350"
                data-aos-once="true"
                onClick={() => loginWithRedirect()}
              >
                LogIn
              </a>
            )}
          </li>
          {!isLoading && user && (
            <ul>
              <li>
                <NavLink
                  to="/Community"
                  className={styles.hover_underline_animation}
                  data-aos="fade-down"
                  data-aos-delay="100"
                  data-aos-once="true"
                >
                  Community
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/OpenSource"
                  className={styles.hover_underline_animation}
                  data-aos="fade-down"
                  data-aos-delay="150"
                  data-aos-once="true"
                >
                  Open-Source
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Guidance"
                  className={styles.hover_underline_animation}
                  data-aos="fade-down"
                  data-aos-delay="200"
                  data-aos-once="true"
                >
                  Guidance
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Learning"
                  className={styles.hover_underline_animation}
                  data-aos="fade-down"
                  data-aos-delay="250"
                  data-aos-once="true"
                >
                  Learning
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Hackathons"
                  className={styles.hover_underline_animation}
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-once="true"
                >
                  {" "}
                  Hackathons
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Profile"
                  className={styles.hover_underline_animation}
                  data-aos="fade-down"
                  data-aos-delay="350"
                  data-aos-once="true"
                  // onClick={() => logout()}
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          )}
        </ul>
      </nav>
      <div className={styles.mobileNavbar}>
        <div className={styles.openButton}>
          <a
            href="#"
            onClick={openNav}
            style={{ display: `${menuOpacity ? "none" : "flex"}` }}
          >
            &#9776;
          </a>
        </div>
        <div
          className={styles.sideNav}
          style={{ width: `${menuOpacity ? "100%" : "0%"}` }}
        >
          <div
            className={styles.closeButton}
            style={{ opacity: `${menuOpacity ? "1" : "0"}` }}
          >
            <a href="#" onClick={closeNav}>
              &times;
            </a>
          </div>
          <ul
            className={styles.menu}
            style={{ opacity: `${menuOpacity ? "1" : "0"}` }}
          >
            <li>
              <a className={styles.hover_underline_animation} href="#Community">
                Community
              </a>
            </li>
            <li>
              <a href="#Projects" className={styles.hover_underline_animation}>
                Projects
              </a>
            </li>
            <li>
              <a href="#Guidance" className={styles.hover_underline_animation}>
                Guidance
              </a>
            </li>
            <li>
              <a
                href="#Hackathons"
                className={styles.hover_underline_animation}
              >
                Hackathons
              </a>
            </li>
            <li>
              <a href="#LogIn" className={styles.hover_underline_animation}>
                LogIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
