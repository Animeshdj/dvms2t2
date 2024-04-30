import React from "react";
import SectionCSvg from "./SectionCSvg";

const SectionCSliderItem = ({ country, src }) => {
  return (
    <div className="section-3-slider-item">
      <div className="section-3-slider-img">
        <img src={src} alt="" />
        <SectionCSvg />
      </div>
      <h4>{country}</h4>
    </div>
  );
};

export default SectionCSliderItem;
