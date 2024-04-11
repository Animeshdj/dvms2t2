import React from "react";

const SectionG = () => {
  return (
    <div className="section-7">
      <div className="section-7-container">
        <div className="section-7-about">
          <h1 className="section-7-about-text">A Unique Company Culture</h1>
          <div className="section-7-vidwrapper">
            <div className="about-video">
              <video
                className="section-7-video"
                playsInline
                autoPlay
                muted
                src="https://a.storyblok.com/f/240783/x/1ecf1fbe00/people1-video-extracompressed.mp4"
              ></video>
            </div>
          </div>
        </div>
        <div className="section-7-content">
          <h2 className="section-7-content-text">
            With a heart for logistics and great teamwork
          </h2>
        </div>
        <div className="section-7-info">
          <div className="section-7-info-text">
            <p>
              The MPL family: a team that consists of more than 700
              differentiators, spread across the globe. They all have one thing
              in common: <b>a passion for logistics!</b> They're highly skilled
              and hands-on, driven by the goal of making logistics more
              efficient and reliable, and with a commitment to putting our
              customers first. We do this by using our creative solutions to
              gain customers' trust, and deliver <b>satisfaction</b>.
            </p>
            <a href="/" className="sec3-btn">
              <span>Join our Team</span>
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
      </div>
    </div>
  );
};

export default SectionG;
