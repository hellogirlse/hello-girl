import { useRef, useState, useEffect } from "react";
import { useScrollPosition } from "../../scripts/useScrollPosition";
import style from "./navigation.module.scss";

function Navigation(props) {
  const headerRef = useRef(null);
  const [sticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("hem");

  useEffect(() => {
    let cleanup = true;

    if (cleanup) {
      const main = document.getElementsByTagName("main")[0];
      const headerHeight = headerRef.current.clientHeight;

      main.style.paddingTop = headerHeight + "px";
    }

    return () => {
      cleanup = false;
    };
  }, [headerRef]);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (Math.abs(currPos.y) > headerRef.current.clientHeight / 3) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    },
    [sticky]
  );

  return (
    <header
      ref={headerRef}
      className={`bg-white ${style.header} ${sticky ? style.sticky : ""}`}
    >
      <div className="container">
        <nav className={style.header__nav}>
          <ul className={style.header__nav__menu}>
            <li className={style.header__nav__menu__item}>
              <a
                href="#hem"
                className={activeSection == "hem" ? style.active : ""}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("__next")
                    .scrollIntoView({ behavior: "smooth", block: "start" });
                  setActiveSection("hem");
                }}
              >
                Hem
              </a>
            </li>
            <li className={style.header__nav__menu__item}>
              <a
                href="#event-och-kurser"
                className={activeSection == "event" ? style.active : ""}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("event-och-kurser")
                    .scrollIntoView({ behavior: "smooth", block: "start" });
                  setActiveSection("event");
                }}
              >
                Event
              </a>
            </li>
            <li className={style.header__nav__menu__item}>
              <img
                src="./logo/logo.svg"
                alt="Hello Girl!"
                className={style.logo}
              />
            </li>
            <li className={style.header__nav__menu__item}>
              <a
                href="#om-oss"
                className={activeSection == "om" ? style.active : ""}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("om-oss")
                    .scrollIntoView({ behavior: "smooth", block: "start" });
                  setActiveSection("om");
                }}
              >
                Om oss
              </a>
            </li>
            <li className={style.header__nav__menu__item}>
              <a
                href="#vanner"
                className={activeSection == "vanner" ? style.active : ""}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("vanner")
                    .scrollIntoView({ behavior: "smooth", block: "start" });
                  setActiveSection("vanner");
                }}
              >
                Vänner
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Navigation;
