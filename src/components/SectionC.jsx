import React from "react";

const SectionC = () => {
  return (
    <div className="section-3">
      <div className="section-3-container">
        <div className="section-3-content">
          <p className="sec3-content-title">Our Locations</p>
          <div className="sec3-info">
            <p>
              Around the world, our teams are dedicated to meeting your
              logistics needs. As part of the{" "}
              <a href="https://www.euroports.com">Euroports Group</a>, we can
              leverage group assets to support our solutions and add financial
              stability and flexibility, which is all to your benefit. Spin the
              globe and find your location.
            </p>
          </div>
          <div className="sec3-btn-container">
            <a href="/" className="sec3-btn">
              <span>All Locations</span>
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
          </div>
        </div>
        <div className="section-3-locations"></div>
      </div>
    </div>
  );
};

export default SectionC;
