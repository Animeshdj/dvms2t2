import React, { useEffect, useState } from "react";
import flooring from "../assets/Flooring-Business.png";
import glass from "../assets/Glass-Business.png";
import minerals from "../assets/Minerals-Business.png";
import projectCargo from "../assets/ProjectCargo-Business.png";
import renewables from "../assets/Renewables-Business.png";
import steel from "../assets/Steel-Business.png";
import sugar from "../assets/Sugar-Business.png";
import windmill from "../assets/Windmill-Business.png";
import wood from "../assets/Wood-Business.png";
import building from "../assets/Building-Materials-Business.png";
import chemical from "../assets/Chemical-Business.png";
import consumer from "../assets/Consumer-Goods-Business.png";

const SectionE = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const images = [
    flooring,
    sugar,
    glass,
    building,
    chemical,
    consumer,
    minerals,
    renewables,
    steel,
    windmill,
    wood,
    projectCargo,
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateY(-250);
      setOpacity(0);
      setTimeout(() => {
        setImgIndex((imgIndex + 1) % images.length);
        setTranslateY(0);
      }, 200);
      setTimeout(() => {
        setOpacity(1);
      }, 400);
    }, 2000);

    return () => clearInterval(interval);
  });
  return (
    <div className="section-5">
      <div className="section-5-container">
        <div className="section-5-content">
          <h3>What we Move</h3>
          <p>
            Behind every shipment lies a world of possibilities. Whether it's
            raw materials, chemicals, consumer goods, or anything else. What we
            ship isn’t just cargo, we carry your dreams.
          </p>
          <a href="/" className="sec3-btn">
            <span>About our Commodoties</span>
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
        <div className="section-5-graphic">
          <div className="section-5-vidwrapper">
            <img
              loading="eager"
              src={images[imgIndex]}
              className="section-4-vid-item"
              style={{
                transform: `translateY(${translateY}px)`,
                opacity: `${opacity}`,
              }}
            />
          </div>
        </div>
      </div>
      <div className="section-5-background"></div>
    </div>
  );
};

export default SectionE;
