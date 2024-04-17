import React from "react";

const Logo = (props) => {
  return (
    <img
      className={`logo ${props.color} ${props.size}`}
      src="https://dev-challenges-catwiki.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcatwikilogo.92dea8ab.svg&w=256&q=75"
      alt="logo"
    />
  );
};

export default Logo;
