import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <Logo />
      </Link>
    </div>
  );
};

export default Header;
