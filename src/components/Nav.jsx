import React, { useEffect, useState } from "react";
import Nav_secondary from "./Nav_secondary";
import Nav_primary from "./Nav_primary";
import { useTheme } from "./ThemeContext";

const Nav = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);
  const { theme } = useTheme();
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setPrevScrollY(currentScrollY);
      // console.log("Hello");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const translateY =
    window.innerWidth > 1140 && scrollDirection === "down" ? "-100%" : "0%";
  return (
    <div
      className={`nav-main ${theme ? "nav-darkmode" : ""}`}
      style={{ transform: `translateY(${translateY})` }}
    >
      <Nav_secondary />
      <Nav_primary />
    </div>
  );
};

export default Nav;
