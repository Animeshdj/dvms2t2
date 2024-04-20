import React, { useEffect, useRef, useState } from "react";

const SectionK = () => {
  const [parallaxY, setParallaxY] = useState(0);
  const sectionRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const isVisible =
        sectionRect.top < window.innerHeight && sectionRect.bottom >= 0;
      if (isVisible) {
        const scrollPosition = window.scrollY;
        const parallaxValue = 500 + (sectionRect.top - scrollPosition) * 0.05;
        setParallaxY(parallaxValue);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="section-k" ref={sectionRef}>
      <svg className="section-k-darkmask">
        <clipPath id="darkContactMask">
          <rect className="section-k-darkmask-rect"></rect>
        </clipPath>
      </svg>
      <svg className="section-k-lightmask">
        <clipPath id="lightContactMask">
          <rect className="section-k-lightmask-rect"></rect>
        </clipPath>
      </svg>
      <div className="section-k-imgwrapper">
        <div
          className="section-k-img"
          style={{ transform: `translateY(-${parallaxY}px)` }}
        >
          <img
            srcSet="https://a.storyblok.com/f/240783/3699x5625/cf26c4631b/5-1-8.jpg/m/256x198/filters:quality(95):focal() 256w, https://a.storyblok.com/f/240783/3699x5625/cf26c4631b/5-1-8.jpg/m/320x248/filters:quality(95):focal() 320w, https://a.storyblok.com/f/240783/3699x5625/cf26c4631b/5-1-8.jpg/m/384x297/filters:quality(95):focal() 384w, https://a.storyblok.com/f/240783/3699x5625/cf26c4631b/5-1-8.jpg/m/450x348/filters:quality(95):focal() 450w, https://a.storyblok.com/f/240783/3699x5625/cf26c4631b/5-1-8.jpg/m/600x465/filters:quality(95):focal() 600w, https://a.storyblok.com/f/240783/3699x5625/cf26c4631b/5-1-8.jpg/m/768x595/filters:quality(95):focal() 768w, https://a.storyblok.com/f/240783/3699x5625/cf26c4631b/5-1-8.jpg/m/1024x793/filters:quality(95):focal() 1024w, https://a.storyblok.com/f/240783/3699x5625/cf26c4631b/5-1-8.jpg/m/1360x1053/filters:quality(95):focal() 1360w, https://a.storyblok.com/f/240783/3699x5625/cf26c4631b/5-1-8.jpg/m/1720x1332/filters:quality(95):focal() 1720w"
            alt=""
          />
        </div>
      </div>
      <div className="section-k-content">
        <a href="/">
          <div className="section-k-lightcontent">
            <div className="section-k-content-container">
              <div className="section-k-introwrapper">
                <h1 className="section-k-title">
                  <p>Get In Touch</p>
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
                </h1>
                <div className="section-k-intro">
                  <p>
                    Get local advice for your global request. Contact us now.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section-k-darkcontent">
            <div className="section-k-content-container">
              <div className="section-k-introwrapper">
                <h1 className="section-k-title">
                  <p>Get In Touch</p>
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
                </h1>
                <div className="section-k-intro">
                  <p>
                    Get local advice for your global request. Contact us now.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SectionK;
