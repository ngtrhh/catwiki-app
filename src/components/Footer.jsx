import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="footer">
      <Logo color="white" />
      <span className="credit">
        © created by <b> Nguyen Ngoc Trinh </b> - devChallenge.io 2021
      </span>
    </div>
  );
};

export default Footer;
