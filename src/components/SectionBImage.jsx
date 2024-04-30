import React from "react";

const SectionBImage = ({ src, translateY, opacity }) => {
  return (
    <div
      className="sec2-image"
      style={{
        transform: `translateY(${translateY}px)`,
        opacity: opacity,
      }}
    >
      <img src={src} />
    </div>
  );
};

export default SectionBImage;
