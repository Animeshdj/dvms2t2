const SectionA = () => {
  return (
    <section className="section-1">
      <div className="sec1-container">
        <svg className="section-1-svg">
          <defs>
            <clipPath id="darkMask">
              <rect className="sec1-darkmask" height="100%" x="0" y="0"></rect>
            </clipPath>
            <clipPath id="mask">
              <rect
                className="sec1-mask"
                height="100%"
                x="58.3333333%"
                y="0"
              ></rect>
            </clipPath>
          </defs>
        </svg>
        <div className="section-1-content">
          <div className="content-wrapper">
            <div className="darkcontent">
              <h1>
                <p>Freight</p>
                <p>forwarding.</p>
                <p>
                  Done
                  <span className="outline"> different.</span>
                </p>
              </h1>
            </div>
            <div className="lightcontent">
              <h1>
                <p>Freight</p>
                <p>forwarding.</p>
                <p>
                  Done
                  <span className="outline"> different.</span>
                </p>
              </h1>
            </div>
          </div>
        </div>
        <div className="section-1-vid">
          <video
            src="https://a.storyblok.com/f/240783/x/1b03c229b0/peoplev4_compressed.mp4"
            playsInline
            autoPlay
            loop
            muted
            className="sec1-vid"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default SectionA;
