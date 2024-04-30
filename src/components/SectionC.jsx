import React, { useEffect, useRef, useState } from "react";
import SectionCSliderItem from "./SectionCSliderItem";

const locations = [
  {
    country: "Belgium",
    img: "https://a.storyblok.com/f/240783/2048x1210/dc225e7bb9/manuport_building_no_meta.jpg",
  },
  {
    country: "France",
    img: "https://a.storyblok.com/f/240783/2048x1367/64c69af8f4/mpl_france_no_meta.jpg",
  },
  {
    country: "Germany",
    img: "https://a.storyblok.com/f/240783/2048x1004/d1168ebdd2/mpl_building_germany.jpg",
  },
  {
    country: "Spain",
    img: "https://a.storyblok.com/f/240783/1600x1200/813a4cacde/image002.jpeg",
  },
  {
    country: "Turkey",
    img: "https://a.storyblok.com/f/240783/780x1170/2542e511a6/5903cd6065184eca94ec346367d6201c-f5fb7444.jpg",
  },
  {
    country: "United Kingdom",
    img: "https://a.storyblok.com/f/240783/420x420/71afd93259/belgiumimage.jpg",
  },
  {
    country: "Portugal",
    img: "https://a.storyblok.com/f/240783/5000x3335/997c765b31/1-18.jpg",
  },
  {
    country: "Greece",
    img: "https://a.storyblok.com/f/240783/601x770/ffd12fc70a/picture1-jpgrg.jpg",
  },
  {
    country: "Brazil",
    img: "https://a.storyblok.com/f/240783/861x550/1bd5a7adc9/17_fachada_winworkchacara.jpg",
  },
  {
    country: "United States of America",
    img: "https://a.storyblok.com/f/240783/600x400/776f8e8471/nyc.webp",
  },
  {
    country: "Chile",
    img: "https://a.storyblok.com/f/240783/2880x4320/85fed56e5d/chile.jpg",
  },
  {
    country: "Peru",
    img: "https://a.storyblok.com/f/240783/2996x2000/c7248ded74/lima_no_metadata.jpeg",
  },
  {
    country: "United Arab Emirates",
    img: "https://a.storyblok.com/f/240783/1440x1080/d07da56300/dubai.jpeg",
  },
  {
    country: "Republic of South Africa",
    img: "https://a.storyblok.com/f/240783/420x420/71afd93259/belgiumimage.jpg",
  },
  {
    country: "Kingdom of Saudi Arabia",
    img: "https://a.storyblok.com/f/240783/1436x1425/6363a4767e/1-1.jpeg",
  },
  {
    country: "Singapore",
    img: "https://a.storyblok.com/f/240783/825x1466/225c2f1c31/sif-building-scaled-e1642726066848.jpg",
  },
  {
    country: "People's Republic of China",
    img: "https://a.storyblok.com/f/240783/420x420/71afd93259/belgiumimage.jpg",
  },
  {
    country: "Vietnam",
    img: "https://a.storyblok.com/f/240783/420x420/71afd93259/belgiumimage.jpg",
  },
  {
    country: "Korea",
    img: "https://a.storyblok.com/f/240783/1200x1600/0a45f053d4/2.jpeg",
  },
  {
    country: "Japan",
    img: "https://a.storyblok.com/f/240783/1536x2048/6b846e8ebd/123656fd-f08f-4f26-b0ef-e3ce2f283946.png",
  },
];

const SectionC = () => {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const sectionRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const isVisible =
        sectionRect.top < window.innerHeight && sectionRect.bottom >= 0;
      if (isVisible) {
        const currentScrollY = window.scrollY;
        setPrevScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);
  const translateValue = (window.scrollY - 1500) / 2;

  return (
    <div className="section-3" ref={sectionRef}>
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
        </div>
        <div className="section-3-locations">
          <div className="section-3-slide-wrapper">
            <div
              className="section-3-slider"
              style={{
                transform: `translateX(${-translateValue}px)`,
                transition: "transform 0.3s ease",
              }}
            >
              {locations.slice(0, 8).map((item, index) => (
                <SectionCSliderItem
                  key={index}
                  country={item.country}
                  src={item.img}
                />
              ))}
              {locations.slice(0, 8).map((item, index) => (
                <SectionCSliderItem
                  key={index}
                  country={item.country}
                  src={item.img}
                />
              ))}
            </div>
            <div
              className="section-3-slider"
              style={{
                transform: `translateX(${translateValue}px)`,
                transition: "transform 0.3s ease",
              }}
            >
              {locations.slice(8, 12).map((item, index) => (
                <SectionCSliderItem
                  key={index}
                  country={item.country}
                  src={item.img}
                />
              ))}
              {locations.slice(8, 12).map((item, index) => (
                <SectionCSliderItem
                  key={index}
                  country={item.country}
                  src={item.img}
                />
              ))}
              {locations.slice(8, 12).map((item, index) => (
                <SectionCSliderItem
                  key={index}
                  country={item.country}
                  src={item.img}
                />
              ))}
            </div>
            <div
              className="section-3-slider"
              style={{
                transform: `translateX(${-translateValue}px)`,
                transition: "transform 0.3s ease",
              }}
            >
              {locations.slice(12, 15).map((item, index) => (
                <SectionCSliderItem
                  key={index}
                  country={item.country}
                  src={item.img}
                />
              ))}
              {locations.slice(12, 15).map((item, index) => (
                <SectionCSliderItem
                  key={index}
                  country={item.country}
                  src={item.img}
                />
              ))}
              {locations.slice(12, 15).map((item, index) => (
                <SectionCSliderItem
                  key={index}
                  country={item.country}
                  src={item.img}
                />
              ))}
              {locations.slice(12, 15).map((item, index) => (
                <SectionCSliderItem
                  key={index}
                  country={item.country}
                  src={item.img}
                />
              ))}
            </div>
            <div
              className="section-3-slider"
              style={{
                transform: `translateX(${translateValue}px)`,
                transition: "transform 0.3s ease",
              }}
            >
              {locations.slice(15, 20).map((item, index) => (
                <SectionCSliderItem
                  key={index}
                  country={item.country}
                  src={item.img}
                />
              ))}
              {locations.slice(15, 21).map((item, index) => (
                <SectionCSliderItem
                  key={index}
                  country={item.country}
                  src={item.img}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionC;
