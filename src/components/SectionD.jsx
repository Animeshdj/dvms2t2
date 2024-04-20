import React, { useEffect, useRef, useState } from "react";
import barging from "../assets/Cargo-Barging-Business.webp";
import plane from "../assets/Cargo-Plane-Business.webp";
import rail from "../assets/Cargo-Rail-Business.webp";
import ship from "../assets/Cargo-Ship-Business.webp";
import truck from "../assets/Cargo-Truck-Business.webp";

const SectionD = () => {
  const [vidIndex, setVidIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const images = [ship, rail, plane, barging, truck];
  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX(0);
      setOpacity(0);
      setTimeout(() => {
        setVidIndex((vidIndex + 1) % images.length);
      }, 300);
      setTimeout(() => {
        setTranslateX(-10);
        setOpacity(1);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const isVisible =
        sectionRect.top < window.innerHeight && sectionRect.bottom >= 0;
      if (isVisible) {
        const scrollPosition = window.scrollY;
        const parallaxValue = 310 - scrollPosition * 0.1;
        setTranslateY(window.innerWidth < 768 ? 0 : parallaxValue);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="section-4" ref={sectionRef}>
      <div className="section-4-container">
        <div className="section-4-content">
          <h3>How we Move</h3>
          <div>
            <p>
              Manuport Logistics offers a different approach to shipping, guided
              by creative thinking. Ship, barge, plane, train, truck, or a
              combination. For you, we move mountains.
            </p>
            <a href="/" className="sec3-btn">
              <span>Discover our services</span>
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
        <div
          className="section-4-graphic"
          style={{ transform: `translateY(${translateY}px)` }}
        >
          <div className="section-4-vidwrapper">
            <div className="section-4-vid">
              <img
                loading="eager"
                src={images[vidIndex]}
                className="section-4-vid-item"
                style={{
                  transform: `translateX(${translateX}px)`,
                  opacity: `${opacity}`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionD;
