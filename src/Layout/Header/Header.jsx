import React, { useState } from "react";
import "./Header.css";
import logo from "../../Assets/logo.svg";
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="left-header">
        <img src={logo} alt="" className="logo" />
      </div>
      <div className="right-header">
        <nav className={`${open ? "open" : ""}`}>
          <a href="#" className="nav-links active">
            HOME
          </a>
          <a href="#" className="nav-links">
            GALLERY
          </a>
          <a href="#" className="nav-links">
            THE GARDEN
          </a>
          <a href="#" className="nav-links">
            UPDATES
          </a>
          <a href="#" className="nav-links">
            MANIFESTO
          </a>
          <a href="#" className="nav-links">
            MINDMAP
          </a>
          <a href="#" className="nav-links">
            SHOP
          </a>
          <a href="#" className="nav-links social">
            <p>TWITTER</p>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="nav-links social">
            <p>DISCORD</p>
            <i className="fab fa-discord"></i>
          </a>
          <a href="#" className="nav-links social">
            <p>TELEGRAM</p>
            <i className="fab fa-telegram"></i>
          </a>
        </nav>

        <button
          className={`burger ${open ? "active" : ""}`}
          onClick={() => {
            setOpen((prev) => {
              return !prev;
            });
          }}
        ></button>
      </div>
    </div>
  );
}

export default Header;
