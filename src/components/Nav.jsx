import React from "react";
import Nav_secondary from "./Nav_secondary";
import Nav_primary from "./Nav_primary";

const Nav = () => {
  return (
    <div className="nav-main">
      <Nav_secondary />
      <Nav_primary />
    </div>
  );
};

export default Nav;
