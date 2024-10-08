import React, { useEffect, useState } from "react";
import "./nav.css";
import { useTheme } from "./ThemeContext";

const Nav_primary = () => {
  const [hamburger, setHamburger] = useState(true);
  const { theme } = useTheme();
  const toggleHamburger = () => {
    setHamburger((prev) => !prev);
  };

  return (
    <div className="nav-primary">
      <a href="/" className="nav-logo-link">
        <svg
          className="nav-logo"
          viewBox="0 0 389 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            className="nav-logo-1"
            style={{
              color: theme ? "#f8e2ac" : hamburger ? "#9faeb5" : "#fff",
            }}
          >
            <path
              d="M127.9 35.859H117.855V10.7461H117.751L111.344 35.8659H104.475L97.8608 10.7461H97.7575V35.8659H89.6552V0.694031H103.752L108.774 19.3513H108.877L113.693 0.694031H127.893V35.859H127.9Z"
              fill="currentColor"
            ></path>
            <path
              d="M154.997 28.9418H145.62L143.471 35.8591H134.707L145.62 0.694031H157.002L168.019 35.8591H157.002L155.004 28.9418H154.997ZM153.151 21.2529L150.278 11.0492L147.405 21.2529H153.144H153.151Z"
              fill="currentColor"
            ></path>
            <path
              d="M195.688 35.8591L185.587 19.4065L182.459 13.0473L182.356 13.1506L182.459 13.5571C182.969 15.81 183.176 17.0433 183.176 19.4547V35.8591H174.412V0.694031H184.616L196.404 20.3228L196.508 20.2194L195.736 10.4774V0.694031H204.5V35.8591H195.681H195.688Z"
              fill="currentColor"
            ></path>
            <path
              d="M241.821 23.2991C241.821 27.3985 241.36 30.678 237.977 33.3994C234.952 35.7557 231.266 36.3758 227.573 36.3758C224.342 36.3758 220.139 35.6592 217.425 33.861C213.684 31.4014 212.967 28.0668 212.967 23.8641V0.694031H223.935V22.6308C223.935 23.809 223.88 25.4005 224.604 26.4753C225.424 27.6052 227.063 28.0668 228.448 28.0668C229.681 28.0668 231.218 27.7085 232.141 26.8887C233.526 25.7105 233.374 23.8641 233.374 22.2243V0.694031H241.835V23.2991H241.821Z"
              fill="currentColor"
            ></path>
            <path
              d="M261.491 35.8591H250.571V0.694031H264.922C268.36 0.694031 272.198 0.797376 275.229 2.54047C278.509 4.49026 280.459 7.97644 280.459 11.7658C280.459 15.1004 279.177 18.2765 276.559 20.3779C273.844 22.5826 270.358 23.0924 266.975 23.0924H261.491V35.8591ZM264.309 15.562C266.769 15.562 269.745 15.4104 269.745 12.1309C269.745 8.85144 267.079 8.74809 264.619 8.74809H261.491V15.562H264.309Z"
              fill="currentColor"
            ></path>
            <path
              d="M320.019 18.3799C320.019 28.3769 313.867 36.3689 303.208 36.3689C292.55 36.3689 286.397 28.37 286.397 18.3799C286.397 7.87311 292.502 0.184204 303.208 0.184204C313.915 0.184204 320.019 7.87311 320.019 18.3799ZM297.931 18.435C297.931 21.8179 298.289 28.3286 303.208 28.3286C308.128 28.3286 308.493 21.8179 308.493 18.435C308.493 15.0522 307.976 8.12803 303.208 8.12803C298.441 8.12803 297.931 14.9971 297.931 18.435Z"
              fill="currentColor"
            ></path>
            <path
              d="M337.898 35.8591H326.978V0.694031H344.87C347.943 0.694031 351.326 1.10741 353.944 2.84362C356.865 4.69006 358.25 7.81798 358.25 11.2491C358.25 15.8651 356.204 18.6279 352.05 20.5295L358.409 35.8591H346.414L341.288 22.431H337.905V35.8591H337.898ZM337.898 14.8937H341.846C344.202 14.8937 347.027 14.5354 347.027 11.5109C347.027 10.3327 346.414 9.20281 345.332 8.63786C344.409 8.17625 343.286 8.17625 342.259 8.17625H337.905V14.8937H337.898Z"
              fill="currentColor"
            ></path>
            <path
              d="M380.538 35.8591H370.286V9.15458H362.907V0.694031H387.766V9.15458H380.538V35.8591Z"
              fill="currentColor"
            ></path>
            <path
              d="M114.396 79.3055H89.7378V44.1405H100.61V70.6934H114.396V79.3055Z"
              fill="currentColor"
            ></path>
            <path
              d="M154.322 61.8263C154.322 71.8233 148.169 79.8153 137.511 79.8153C126.853 79.8153 120.7 71.8164 120.7 61.8263C120.7 51.3195 126.798 43.6306 137.511 43.6306C148.224 43.6306 154.322 51.3195 154.322 61.8263ZM132.233 61.8814C132.233 65.2643 132.592 71.775 137.511 71.775C142.43 71.775 142.795 65.2643 142.795 61.8814C142.795 58.4986 142.279 51.5744 137.511 51.5744C132.743 51.5744 132.233 58.4435 132.233 61.8814Z"
              fill="currentColor"
            ></path>
            <path
              d="M193.476 79.3055H188.192L186.759 75.6126C184.554 78.589 180.868 79.8153 177.23 79.8153C166.978 79.8153 161.494 71.9197 161.494 62.2879C161.494 57.6787 162.672 52.8559 165.593 49.2182C168.921 45.0154 173.179 43.6306 178.36 43.6306C186.511 43.6306 191.94 47.7851 193.483 55.8323L183.024 56.9071C182.611 54.0892 181.433 51.4229 178.153 51.4229C173.179 51.4229 172.876 58.0852 172.876 61.6747C172.876 63.721 172.979 66.284 173.799 68.1304C174.674 70.1835 176.362 71.5132 178.615 71.5132C181.385 71.5132 183.431 69.8184 183.431 67.0556H177.637V59.6216H193.476V79.3055Z"
              fill="currentColor"
            ></path>
            <path
              d="M213.966 79.3055H203.101V44.1405H213.966V79.3055Z"
              fill="currentColor"
            ></path>
            <path
              d="M232.21 67.3105C233.133 70.4385 235.489 71.5615 238.617 71.5615C240.002 71.5615 242.772 71.3548 242.772 69.4119C242.772 67.2623 240.05 66.8489 238.466 66.5389C231.852 65.2574 224.011 63.4661 224.011 55.1089C224.011 51.6778 225.706 48.2881 228.524 46.2901C231.397 44.292 235.138 43.6237 238.624 43.6237C244.728 43.6237 250.619 46.1385 252.769 52.2359L243.853 54.9504C242.827 52.3323 240.877 51.416 238.163 51.416C236.73 51.416 234.676 51.8294 234.676 53.6689C234.676 55.5085 237.239 55.8736 238.569 56.1837C241.904 56.852 245.438 57.4169 248.511 59.0016C251.949 60.848 253.74 64.1275 253.74 67.9719C253.74 76.4325 245.335 79.8153 238.052 79.8153C230.77 79.8153 224.108 76.7425 222.213 69.1019L232.21 67.3105Z"
              fill="currentColor"
            ></path>
            <path
              d="M278.385 79.3055H268.133V52.601H260.754V44.1405H285.612V52.601H278.385V79.3055Z"
              fill="currentColor"
            ></path>
            <path
              d="M304.876 79.3055H294.011V44.1405H304.876V79.3055Z"
              fill="currentColor"
            ></path>
            <path
              d="M344.443 66.4906C343.775 74.5929 337.884 79.8153 329.789 79.8153C319.227 79.8153 313.694 72.1746 313.694 62.1846C313.694 52.1945 318.565 43.6306 329.637 43.6306C338.608 43.6306 343.734 48.9632 344.45 57.7269L334.405 58.2437C334.508 55.2673 333.378 51.5262 329.741 51.5262C324.973 51.5262 324.766 58.8569 324.766 62.1915C324.766 65.7259 324.973 71.7268 329.844 71.7268C333.179 71.7268 334.46 68.8056 334.612 65.8843L344.45 66.4975L344.443 66.4906Z"
              fill="currentColor"
            ></path>
            <path
              d="M361.964 67.3105C362.887 70.4385 365.243 71.5615 368.371 71.5615C369.756 71.5615 372.526 71.3548 372.526 69.4119C372.526 67.2623 369.804 66.8489 368.22 66.5389C361.606 65.2574 353.765 63.4661 353.765 55.1089C353.765 51.6778 355.46 48.2881 358.278 46.2901C361.151 44.292 364.892 43.6237 368.378 43.6237C374.482 43.6237 380.373 46.1385 382.53 52.2359L373.607 54.9504C372.581 52.3323 370.631 51.416 367.916 51.416C366.483 51.416 364.43 51.8294 364.43 53.6689C364.43 55.5085 366.993 55.8736 368.323 56.1837C371.658 56.852 375.192 57.4169 378.265 59.0016C381.703 60.848 383.494 64.1275 383.494 67.9719C383.494 76.4325 375.089 79.8153 367.806 79.8153C360.524 79.8153 353.861 76.7425 351.967 69.1019L361.964 67.3105Z"
              fill="currentColor"
            ></path>
          </g>
          <g
            className="nav-logo-2"
            style={{
              color: theme ? "#ceaa53" : hamburger ? "#00358d" : "#fff",
            }}
          >
            <path
              d="M19.8532 28.3271C29.2081 28.6302 36.4412 35.202 44.5079 39.0597C54.9443 44.3227 66.6757 49.5236 78.6138 46.9955V33.6245C63.6998 35.8014 49.578 28.892 36.9165 21.8586C31.502 18.8138 26.1495 14.8666 19.681 14.6875C12.0414 14.0468 5.04942 18.3385 0 23.7186V35.8082C5.55229 31.2204 12.4961 27.776 19.8532 28.3133V28.3271Z"
              fill="currentColor"
            ></path>
            <path
              d="M14.2321 46.7268C20.673 45.3559 27.3826 47.3054 32.9555 50.5845C41.408 55.5581 50.0188 60.4698 59.4013 63.5008C65.5666 65.4778 72.2142 66.4354 78.6207 65.0301V51.5076C72.848 52.5133 66.9168 52.0931 61.275 50.5638C50.3426 47.6086 40.3816 42.0356 30.7098 36.2835C26.0806 33.5143 20.5559 32.0814 15.1689 32.9632C9.18264 33.8174 4.10567 37.5373 0.00689697 41.7945V53.9462C4.09878 50.4743 8.89332 47.6706 14.2389 46.7337L14.2321 46.7268Z"
              fill="currentColor"
            ></path>
            <path
              d="M78.6207 79.3104V69.6318C73.3991 70.2862 68.0397 70.3 62.9145 68.9842C51.4379 66.2425 41.0015 60.4353 30.944 54.456C25.8877 51.418 19.7017 49.7716 13.8532 51.232C8.43177 52.4651 3.80256 55.8406 0 59.774V79.3104H78.6207Z"
              fill="currentColor"
            ></path>
            <path
              d="M0 0.689667V17.8012C5.93806 12.7862 13.6947 9.28676 21.603 10.4096C30.3654 11.4911 37.1783 17.5876 44.935 21.2111C55.2267 26.3432 66.9099 31.6199 78.6207 28.7336V0.689667H0Z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
      </a>
      <div className="nav-links">
        <a href="/" className="nav-links-link">
          <span className="nav-homebtn">Home</span>
          <svg
            className="nav-underline nav-home-underline"
            viewBox="0 0 20 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 3C15.3333 5 12.6667 5 10 3C7.33333 1 4.66667 1 2 3"
              stroke="currentColor"
              strokeWidth="2"
              pathLength="1"
              strokeDashoffset="0px"
              strokeDasharray="1px 1px"
            ></path>
          </svg>
        </a>
        <a href="/" className="nav-links-link">
          <span>Services</span>
          <svg
            className="nav-underline"
            viewBox="0 0 20 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 3C15.3333 5 12.6667 5 10 3C7.33333 1 4.66667 1 2 3"
              stroke="currentColor"
              strokeWidth="2"
              pathLength="1"
              strokeDashoffset="0px"
              strokeDasharray="1px 1px"
            ></path>
          </svg>
        </a>
        <a href="/" className="nav-links-link">
          <span>Commodities</span>
          <svg
            className="nav-underline"
            viewBox="0 0 20 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 3C15.3333 5 12.6667 5 10 3C7.33333 1 4.66667 1 2 3"
              stroke="currentColor"
              strokeWidth="2"
              pathLength="1"
              strokeDashoffset="0px"
              strokeDasharray="1px 1px"
            ></path>
          </svg>
        </a>
        <a href="/" className="nav-links-link">
          <span>Digital</span>
          <svg
            className="nav-underline"
            viewBox="0 0 20 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 3C15.3333 5 12.6667 5 10 3C7.33333 1 4.66667 1 2 3"
              stroke="currentColor"
              strokeWidth="2"
              pathLength="1"
              strokeDashoffset="0px"
              strokeDasharray="1px 1px"
            ></path>
          </svg>
        </a>
        <button className="nav-dropdown-container">
          <a href="/" className="nav-dropdown">
            <span>Careers</span>
            <i className="nav-dropdown-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M.176 6.106a.6.6 0 0 1 .848 0l10.72 10.72a.15.15 0 0 0 .211 0l10.72-10.72a.6.6 0 0 1 .85.848l-10.72 10.72a1.35 1.35 0 0 1-1.91 0L.175 6.954a.6.6 0 0 1 0-.848Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </i>
            <svg
              className="nav-underline"
              viewBox="0 0 20 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 3C15.3333 5 12.6667 5 10 3C7.33333 1 4.66667 1 2 3"
                stroke="currentColor"
                strokeWidth="2"
                pathLength="1"
                strokeDashoffset="0px"
                strokeDasharray="1px 1px"
              ></path>
            </svg>
          </a>
          <div className="nav-dropdown-content">
            <a href="/" className="nav-dropdown-contentbtn">
              <p>Life at MPL</p>
            </a>
            <a href="/" className="nav-dropdown-contentbtn">
              <p>Jobs</p>
            </a>
          </div>
        </button>
        <a href="/" className="nav-links-link">
          <span>About</span>
          <svg
            className="nav-underline"
            viewBox="0 0 20 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 3C15.3333 5 12.6667 5 10 3C7.33333 1 4.66667 1 2 3"
              stroke="currentColor"
              strokeWidth="2"
              pathLength="1"
              strokeDashoffset="0px"
              strokeDasharray="1px 1px"
            ></path>
          </svg>
        </a>
        <a href="/" className="nav-links-link">
          <span>ESG</span>
          <svg
            className="nav-underline"
            viewBox="0 0 20 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 3C15.3333 5 12.6667 5 10 3C7.33333 1 4.66667 1 2 3"
              stroke="currentColor"
              strokeWidth="2"
              pathLength="1"
              strokeDashoffset="0px"
              strokeDasharray="1px 1px"
            ></path>
          </svg>
        </a>
        <a href="/" className="nav-links-link">
          <span>Contact</span>
          <svg
            className="nav-underline"
            viewBox="0 0 20 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 3C15.3333 5 12.6667 5 10 3C7.33333 1 4.66667 1 2 3"
              stroke="currentColor"
              strokeWidth="2"
              pathLength="1"
              strokeDashoffset="0px"
              strokeDasharray="1px 1px"
            ></path>
          </svg>
        </a>
      </div>
      <div className="nav-hamburger">
        <i
          className="btn-icon"
          onClick={toggleHamburger}
          style={{ color: theme ? "#f8e2ac" : hamburger ? "#1f1c16" : "#fff" }}
        >
          {hamburger ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M1.65 18.003a.6.6 0 0 1 .6-.6h19.5a.6.6 0 1 1 0 1.2H2.25a.6.6 0 0 1-.6-.6ZM1.65 12.003a.6.6 0 0 1 .6-.6h19.5a.6.6 0 1 1 0 1.2H2.25a.6.6 0 0 1-.6-.6ZM1.65 6.003a.6.6 0 0 1 .6-.6h19.5a.6.6 0 1 1 0 1.2H2.25a.6.6 0 0 1-.6-.6Z"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M23.674.325a.6.6 0 0 1 0 .848l-22.5 22.5a.6.6 0 0 1-.848-.848l22.5-22.5a.6.6 0 0 1 .848 0Z"
                clipRule="evenodd"
              ></path>
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M.326.325a.6.6 0 0 1 .848 0l22.5 22.5a.6.6 0 1 1-.848.848l-22.5-22.5a.6.6 0 0 1 0-.848Z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </i>
      </div>
      <div
        className={`hamburger-menu ${
          hamburger ? "hamburger-inactive" : "hamburger-active"
        }`}
      >
        <div className="hamburger-primary">
          <div className="hamburger-primarywrapper">
            <a href="/">Home</a>
            <a href="/">Services</a>
            <a href="/">Commodities</a>
            <a href="/">Digital</a>
            <a href="/">Careers</a>
            <a href="/">Life at MPL</a>
            <a href="/">Jobs</a>
            <a href="/">About</a>
            <a href="/">ESG</a>
            <a href="/">Contact</a>
          </div>
        </div>
        <div className="hamburger-secondary">
          <a href="/">T&C</a>
          <a href="/">BLOG</a>
          <a href="/">LOCATIONS</a>
          <a href="/">LOG IN</a>
        </div>
      </div>
    </div>
  );
};

export default Nav_primary;
