import React from "react";
import "./styles.scss";
import Logo from "../../assets/graphics/logo.png";

export default function Header(props) {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
}
