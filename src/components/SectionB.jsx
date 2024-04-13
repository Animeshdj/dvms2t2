import React, { useEffect, useState } from "react";

const SectionB = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateY, setTranslateY] = useState();
  const [opacity, setOpacity] = useState(1);
  const [activeParagraph, setActiveParagraph] = useState(0);
  const images = [
    "https://a.storyblok.com/f/240783/424x283/78ab1c3609/we-believe-in-people-compressed-2.png",
    "https://a.storyblok.com/f/240783/1890x1417/fc3f9f86ec/aircharter-2.png",
    "https://a.storyblok.com/f/240783/632x796/2481202365/sandra.jpg",
    "https://a.storyblok.com/f/240783/1920x781/6e425f1422/untitled_compressed.png",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    setTranslateY(currentIndex * 50);
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveParagraph((prevIndex) => (prevIndex + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section-2">
      <div className="section-2-container">
        <div className="section-2-carousel-container">
          <p>We’re Different Because</p>
          <div className="section-2-carousel-imagesection">
            <div
              className="sec2-image s2img1"
              style={{
                transform: `translateY(${translateY}px)`,
                opacity: `${opacity}`,
              }}
            >
              <img src={images[currentIndex]} />
            </div>
          </div>
        </div>
        <div className="section-2-content">
          <div className="section-2-content-item-container">
            <div
              className={
                activeParagraph === 0
                  ? "section-2-content-item"
                  : "section-2-content-item inactive-paragraph"
              }
            >
              <h2>We Believe in People</h2>
              <div className="section-2-content-item-text">
                <p>
                  We believe in our people because they are our greatest asset.
                  At MPL, we are not just a company; we are a <b>family</b> .
                  Each and every one of us shares our unique MPL culture, in
                  which everyone is valued, supported, and empowered to reach
                  their full potential.
                </p>
              </div>
              <div className="section-2-line">
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="section-2-content-item-container">
            <div
              className={
                activeParagraph === 1
                  ? "section-2-content-item"
                  : "section-2-content-item inactive-paragraph"
              }
            >
              <h2>We Solve Each and Any Shipping Problem</h2>
              <div className="section-2-content-item-text">
                <p>
                  We work with teams per commodity, each with specific domain
                  expertise, to provide high-quality solutions or knowledge for
                  any product or request. With offices around the world, we have
                  excellent knowledge of local markets, laws, and customs.
                </p>
              </div>
              <div className="section-2-line">
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="section-2-content-item-container">
            <div
              className={
                activeParagraph === 2
                  ? "section-2-content-item"
                  : "section-2-content-item inactive-paragraph"
              }
            >
              <h2>Single Point of Contact</h2>
              <div className="section-2-content-item-text">
                <p>
                  Our colleagues assist and guide customers from end to end in
                  all logistics processes, including customs clearance and
                  tender and procurement services.
                </p>
              </div>
              <div className="section-2-line">
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="section-2-content-item-container">
            <div
              className={
                activeParagraph === 3
                  ? "section-2-content-item"
                  : "section-2-content-item inactive-paragraph"
              }
            >
              <h2>Flexible & Fast Decision-Making</h2>
              <div className="section-2-content-item-text">
                <p>
                  Our flexibility and desire to help customers in any way
                  possible really sets us apart. Our fast decision-making comes
                  from the open internal communication strategy we follow.
                </p>
              </div>
              <div className="section-2-line">
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionB;
