import React from "react";
import "./body.css";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import SectionC from "./SectionC";
import SectionD from "./SectionD";
import SectionE from "./SectionE";
import SectionF from "./SectionF";
import SectionG from "./SectionG";
import SectionH from "./SectionH";
import SectionI from "./SectionI";
import SectionJ from "./SectionJ";
import SectionK from "./SectionK";
import { useTheme } from "./ThemeContext";

const Body = () => {
  const { theme } = useTheme();
  return (
    <main className={`main ${theme ? "body-darkmode" : ""}`}>
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <SectionE />
      <SectionF />
      <SectionG />
      <SectionH />
      <SectionI />
      <SectionJ />
      <SectionK />
    </main>
  );
};

export default Body;
