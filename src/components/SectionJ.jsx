import React, { useState } from "react";

const SectionJ = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [x1, setX1] = useState(0);
  const [y1, setY1] = useState(0);
  const [transition, setTransition] = useState(0);
  const [isMouseEnabled, setIsMouseEnabled] = useState(true);
  const handleMouseMove = (e) => {
    if (window.innerWidth > 768) {
      if (isMouseEnabled === false) return;

      const rect = e.target.getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const x = mouseX / width - 0.5;
      const y = mouseY / height - 0.5;
      setX(x);
      setY(y);
      setTransition(0);
    }
  };
  const handleMouseMove1 = (e) => {
    if (window.innerWidth > 768) {
      if (isMouseEnabled === false) return;
      const rect = e.target.getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const x = mouseX / width - 0.5;
      const y = mouseY / height - 0.5;
      setX1(x);
      setY1(y);
      setTransition(0);
    }
  };
  const handleMouseOut = () => {
    if (window.innerWidth > 768) {
      setX(0);
      setY(0);
      setX1(0);
      setY1(0);
      setTransition(0.3);
      setIsMouseEnabled(false);
      setTimeout(() => {
        setIsMouseEnabled(true);
      }, 400);
    }
  };

  return (
    <div className="section-j">
      <div className="section-j-container">
        <div
          className="section-j-card"
          onMouseMove={handleMouseMove}
          onMouseOut={handleMouseOut}
          style={{
            transform: `translateY(${x * 12}px) rotateY(${
              x * 14
            }deg) translateX(${y * 12}px) rotateX(${y * -22}deg)`,
            transition: `all ${transition}s ease`,
          }}
        >
          <p className="section-j-title">
            <i className="btn-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M2.697 13.75a1.6 1.6 0 0 1 1.6-1.6h15.406a1.6 1.6 0 0 1 1.6 1.6v8.5a1.6 1.6 0 0 1-1.6 1.6H4.297a1.6 1.6 0 0 1-1.6-1.6v-8.5Zm1.6-.4a.4.4 0 0 0-.4.4v8.5c0 .22.179.4.4.4h15.406a.4.4 0 0 0 .4-.4v-8.5a.4.4 0 0 0-.4-.4H4.297Z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M8.27 15.15a.6.6 0 0 1 .6.6v4.5a.6.6 0 1 1-1.2 0v-4.5a.6.6 0 0 1 .6-.6ZM12 15.15a.6.6 0 0 1 .6.6v4.5a.6.6 0 1 1-1.2 0v-4.5a.6.6 0 0 1 .6-.6ZM15.73 15.15a.6.6 0 0 1 .6.6v4.5a.6.6 0 0 1-1.2 0v-4.5a.6.6 0 0 1 .6-.6ZM11.925.15a.6.6 0 0 1 .6.6v3.375a.6.6 0 0 1-.6.6A1.275 1.275 0 1 0 13.2 6a.6.6 0 1 1 1.2 0 2.475 2.475 0 1 1-3.075-2.402V.75a.6.6 0 0 1 .6-.6ZM9.324 9.333a.6.6 0 0 1-.016.849l-3.109 3a.6.6 0 0 1-.833-.864l3.11-3a.6.6 0 0 1 .848.015ZM14.676 9.333a.6.6 0 0 1 .848-.015l3.11 3a.6.6 0 1 1-.834.864l-3.109-3a.6.6 0 0 1-.015-.849Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </i>
            COMMODITIES
          </p>
          <p className="section-j-info">What we Move</p>
          <a href="/" className="sec3-btn">
            <span>Commodities</span>
            <div className="sec3-btn-btn">
              <i className="btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M.15 12a.6.6 0 0 1 .6-.6h22.5a.6.6 0 0 1 0 1.2H.75a.6.6 0 0 1-.6-.6Z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </i>
            </div>
          </a>
          <a href="/" className="section-j-link" />
        </div>
        <div
          className="section-j-card"
          onMouseMove={handleMouseMove1}
          onMouseOut={handleMouseOut}
          style={{
            transform: `translateY(${x1 * 12}px) rotateY(${
              x1 * 14
            }deg) translateX(${y1 * 12}px) rotateX(${y1 * -22}deg)`,
            transition: `all ${transition}s ease`,
          }}
        >
          <p className="section-j-title">
            <i className="btn-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M16.236 2.528a8.331 8.331 0 0 0-12.59 7.508c.013.33-.315-.05-.646-.036-.331.014-.54.417-.554.086a9.531 9.531 0 1 1 19.045 0 .6.6 0 1 1-1.198-.05 8.331 8.331 0 0 0-4.057-7.508ZM19.937 17.784a.6.6 0 0 1 .14.837 9.518 9.518 0 0 1-6.224 3.876.6.6 0 1 1-.192-1.184 8.317 8.317 0 0 0 5.439-3.388.6.6 0 0 1 .837-.14Z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M20.33 9.544a2.826 2.826 0 0 1 2.965 1.073c.448.61.635 1.373.521 2.122l-.585 3.877a2.827 2.827 0 0 1-5.078 1.267 2.867 2.867 0 0 1-.521-2.123l.585-3.876a2.826 2.826 0 0 1 2.112-2.34Zm1.997 1.781a1.626 1.626 0 0 0-2.922.73v.006l-.587 3.879c-.066.435.043.878.303 1.233a1.627 1.627 0 0 0 2.922-.73v-.005l.587-3.879a1.664 1.664 0 0 0-.303-1.234ZM9.509 21.386a2.467 2.467 0 0 1 2.46-2.475 2.467 2.467 0 0 1 2.46 2.475 2.468 2.468 0 0 1-2.46 2.475 2.468 2.468 0 0 1-2.46-2.475Zm2.46-1.275c-.691 0-1.26.566-1.26 1.275s.569 1.275 1.26 1.275c.691 0 1.26-.566 1.26-1.275s-.569-1.275-1.26-1.275ZM3.52 9.085a2.826 2.826 0 0 0-2.966 1.072 2.861 2.861 0 0 0-.521 2.123l.585 3.876a2.827 2.827 0 0 0 5.078 1.268c.447-.611.634-1.375.521-2.123l-.586-3.877a2.826 2.826 0 0 0-2.111-2.34Zm-1.998 1.78a1.626 1.626 0 0 1 2.922.731v.005l.587 3.88c.065.434-.043.878-.303 1.233a1.627 1.627 0 0 1-2.922-.73v-.005L1.218 12.1c-.066-.435.043-.88.303-1.234Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </i>
            OUR SERVICES
          </p>
          <p className="section-j-info">How we Move</p>
          <a href="/" className="sec3-btn">
            <span>Services</span>
            <div className="sec3-btn-btn">
              <i className="btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M.15 12a.6.6 0 0 1 .6-.6h22.5a.6.6 0 0 1 0 1.2H.75a.6.6 0 0 1-.6-.6Z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </i>
            </div>
          </a>
          <a href="/" className="section-j-link" />
        </div>
      </div>
    </div>
  );
};

export default SectionJ;
