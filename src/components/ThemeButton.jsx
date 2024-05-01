import React, { useEffect, useState } from "react";
import ThemeRotatingSVG from "../ThemeRotatingSVG";
import "./Themebutton.css";
import { useTheme } from "./ThemeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const onHover = () => {
    setFlag(false);
    setScrollDirection("up");
    // console.log(scrollDirection);
  };

  const onMouseOut = () => {
    setScrollDirection(flag ? "up" : "down");
    setFlag(true);
  };

  return (
    <button
      className={`theme-button ${theme ? "theme-dark" : ""}`}
      onClick={toggleTheme}
      onMouseOver={onHover}
      onMouseEnter={onHover}
      onMouseOut={onMouseOut}
      style={{
        transform:
          (scrollDirection === "down" && flag) || window.innerWidth < 769
            ? "scale(0.5) translateZ(0px)"
            : "none",
        right:
          (scrollDirection === "down" && flag) || window.innerWidth < 769
            ? "0"
            : "1.5rem",
        bottom:
          (scrollDirection === "down" && flag) || window.innerWidth < 769
            ? "0"
            : "1.5rem",
      }}
    >
      <ThemeRotatingSVG />
      {/* <ThemeRotatingSVG /> */}
      <div className="theme-inner">
        <div className="theme-innerwrapper">
          <div className="theme-inner-top">
            <svg
              className="theme-larger-star"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 16C7.73478 16 7.48043 15.8946 7.29289 15.7071C7.10536 15.5196 7 15.2652 7 15C6.99841 13.4092 6.36576 11.884 5.24089 10.7591C4.11601 9.63424 2.59081 9.00159 1 9C0.734784 9 0.48043 8.89464 0.292893 8.70711C0.105357 8.51957 0 8.26522 0 8C0 7.73478 0.105357 7.48043 0.292893 7.29289C0.48043 7.10536 0.734784 7 1 7C2.59081 6.99841 4.11601 6.36576 5.24089 5.24089C6.36576 4.11601 6.99841 2.59081 7 1C7 0.734784 7.10536 0.48043 7.29289 0.292893C7.48043 0.105357 7.73478 0 8 0C8.26522 0 8.51957 0.105357 8.70711 0.292893C8.89464 0.48043 9 0.734784 9 1C9.00159 2.59081 9.63424 4.11601 10.7591 5.24089C11.884 6.36576 13.4092 6.99841 15 7C15.2652 7 15.5196 7.10536 15.7071 7.29289C15.8946 7.48043 16 7.73478 16 8C16 8.26522 15.8946 8.51957 15.7071 8.70711C15.5196 8.89464 15.2652 9 15 9C13.4092 9.00159 11.884 9.63424 10.7591 10.7591C9.63424 11.884 9.00159 13.4092 9 15C9 15.2652 8.89464 15.5196 8.70711 15.7071C8.51957 15.8946 8.26522 16 8 16Z"
                fill="currentColor"
              ></path>
            </svg>
            <svg
              className="theme-smaller-star"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 4C8.20435 4 7.44129 3.68393 6.87868 3.12132C6.31607 2.55871 6 1.79565 6 1C6 0.734784 5.89464 0.48043 5.70711 0.292893C5.51957 0.105357 5.26522 0 5 0C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1C4 1.79565 3.68393 2.55871 3.12132 3.12132C2.55871 3.68393 1.79565 4 1 4C0.734784 4 0.480429 4.10536 0.292892 4.29289C0.105356 4.48043 0 4.73478 0 5C0 5.26522 0.105356 5.51957 0.292892 5.70711C0.480429 5.89464 0.734784 6 1 6C1.79565 6 2.55871 6.31607 3.12132 6.87868C3.68393 7.44129 4 8.20435 4 9C4 9.26522 4.10536 9.51957 4.29289 9.70711C4.48043 9.89464 4.73478 10 5 10C5.26522 10 5.51957 9.89464 5.70711 9.70711C5.89464 9.51957 6 9.26522 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6C9.26522 6 9.51957 5.89464 9.70711 5.70711C9.89464 5.51957 10 5.26522 10 5C10 4.73478 9.89464 4.48043 9.70711 4.29289C9.51957 4.10536 9.26522 4 9 4Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="theme-inner-bottom">
            <svg
              className="theme-smaller-star"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 4C8.20435 4 7.44129 3.68393 6.87868 3.12132C6.31607 2.55871 6 1.79565 6 1C6 0.734784 5.89464 0.48043 5.70711 0.292893C5.51957 0.105357 5.26522 0 5 0C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1C4 1.79565 3.68393 2.55871 3.12132 3.12132C2.55871 3.68393 1.79565 4 1 4C0.734784 4 0.480429 4.10536 0.292892 4.29289C0.105356 4.48043 0 4.73478 0 5C0 5.26522 0.105356 5.51957 0.292892 5.70711C0.480429 5.89464 0.734784 6 1 6C1.79565 6 2.55871 6.31607 3.12132 6.87868C3.68393 7.44129 4 8.20435 4 9C4 9.26522 4.10536 9.51957 4.29289 9.70711C4.48043 9.89464 4.73478 10 5 10C5.26522 10 5.51957 9.89464 5.70711 9.70711C5.89464 9.51957 6 9.26522 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6C9.26522 6 9.51957 5.89464 9.70711 5.70711C9.89464 5.51957 10 5.26522 10 5C10 4.73478 9.89464 4.48043 9.70711 4.29289C9.51957 4.10536 9.26522 4 9 4Z"
                fill="currentColor"
              ></path>
            </svg>
            <svg
              className="theme-larger-star"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 16C7.73478 16 7.48043 15.8946 7.29289 15.7071C7.10536 15.5196 7 15.2652 7 15C6.99841 13.4092 6.36576 11.884 5.24089 10.7591C4.11601 9.63424 2.59081 9.00159 1 9C0.734784 9 0.48043 8.89464 0.292893 8.70711C0.105357 8.51957 0 8.26522 0 8C0 7.73478 0.105357 7.48043 0.292893 7.29289C0.48043 7.10536 0.734784 7 1 7C2.59081 6.99841 4.11601 6.36576 5.24089 5.24089C6.36576 4.11601 6.99841 2.59081 7 1C7 0.734784 7.10536 0.48043 7.29289 0.292893C7.48043 0.105357 7.73478 0 8 0C8.26522 0 8.51957 0.105357 8.70711 0.292893C8.89464 0.48043 9 0.734784 9 1C9.00159 2.59081 9.63424 4.11601 10.7591 5.24089C11.884 6.36576 13.4092 6.99841 15 7C15.2652 7 15.5196 7.10536 15.7071 7.29289C15.8946 7.48043 16 7.73478 16 8C16 8.26522 15.8946 8.51957 15.7071 8.70711C15.5196 8.89464 15.2652 9 15 9C13.4092 9.00159 11.884 9.63424 10.7591 10.7591C9.63424 11.884 9.00159 13.4092 9 15C9 15.2652 8.89464 15.5196 8.70711 15.7071C8.51957 15.8946 8.26522 16 8 16Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ThemeButton;
