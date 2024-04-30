import React, { useEffect, useState } from "react";
import SectionBImage from "./SectionBImage";
import SectionBContentItem from "./SectionBContentItem";

const SectionB = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateY, setTranslateY] = useState();
  const [opacity, setOpacity] = useState(1);
  const [activeParagraph, setActiveParagraph] = useState();
  const images = [
    "https://a.storyblok.com/f/240783/424x283/78ab1c3609/we-believe-in-people-compressed-2.png",
    "https://a.storyblok.com/f/240783/1890x1417/fc3f9f86ec/aircharter-2.png",
    "https://a.storyblok.com/f/240783/632x796/2481202365/sandra.jpg",
    "https://a.storyblok.com/f/240783/1920x781/6e425f1422/untitled_compressed.png",
  ];
  const contentItems = [
    {
      title: "We Believe in People",
      paragraph:
        "We believe in our people because they are our greatest asset. At MPL, we are not just a company; we are a family. Each and every one of us shares our unique MPL culture, in which everyone is valued, supported, and empowered to reach their full potential.",
    },
    {
      title: "We Solve Each and Any Shipping Problem",
      paragraph:
        "We work with teams per commodity, each with specific domain expertise, to provide high-quality solutions or knowledge for any product or request. With offices around the world, we have excellent knowledge of local markets, laws, and customs.",
    },
    {
      title: "Single Point of Contact",
      paragraph:
        "Our colleagues assist and guide customers from end to end in all logistics processes, including customs clearance and tender and procurement services.",
    },
    {
      title: "Flexible & Fast Decision-Making",
      paragraph:
        "Our flexibility and desire to help customers in any way possible really sets us apart. Our fast decision-making comes from the open internal communication strategy we follow.",
    },
  ];

  useEffect(() => {
    setActiveParagraph(0);
  }, []);

  useEffect(() => {
    const interval = setTimeout(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        // console.log("interval ended");
      }, 400);
    }, 9000);
    return () => clearInterval(interval);
  }, [images.length, activeParagraph]);

  useEffect(() => {
    setTranslateY(window.innerWidth > 768 ? currentIndex * 50 : 0);
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveParagraph((prevIndex) => (prevIndex + 1) % 4);
    }, 9000);
    return () => clearInterval(interval);
  }, [activeParagraph]);

  return (
    <div className="section-2">
      <div className="section-2-container">
        <div className="section-2-carousel-container">
          <p>We’re Different Because</p>
          <div className="section-2-carousel-imagesection">
            <SectionBImage
              src={images[currentIndex]}
              translateY={translateY}
              opacity={opacity}
            />
          </div>
        </div>
        <div className="section-2-content">
          {contentItems.map((item, index) => (
            <SectionBContentItem
              key={index}
              title={item.title}
              paragraph={item.paragraph}
              isActive={index === activeParagraph}
              onClick={() => {
                setActiveParagraph(index);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionB;
