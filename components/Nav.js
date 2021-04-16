import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="images/Netflix_2015_logo.png"
        alt="Netflox Logo"
      />

      <img
        className="nav_avatar"
        src="images/Netflix-avatar.png"
        alt="Netflix Icon"
      />
    </div>
  );
}

export default Nav;
