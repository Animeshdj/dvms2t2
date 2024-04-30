import React from "react";

const SectionBContentItem = ({ title, paragraph, isActive, onClick }) => (
  <div className="section-2-content-item-container">
    <div
      className={`section-2-content-item ${
        isActive ? "" : "inactive-paragraph"
      }`}
      onClick={onClick}
    >
      <h2>{title}</h2>
      <div className="section-2-content-item-text">
        <p>{paragraph}</p>
      </div>
      <div className="section-2-line">
        <div className="line">
          <div className="line-overlay" />
        </div>
      </div>
    </div>
  </div>
);

export default SectionBContentItem;
