import React, { useState } from "react";
import "./styles.scss";

import { HiOutlineMenuAlt4 } from "react-icons/hi";

import Logo from "../../assets/opp 1.svg";
import Sidebar from "../Sidebar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  let menu;
  if (isOpen) {
    menu = <Sidebar />;
  }
  return (
    <>
      <div className="nav-wrapper">
        <div className="nav-content">
          <nav className="nav-menu" onClick={() => setIsOpen(!isOpen)}>
            <HiOutlineMenuAlt4 size={40} />
          </nav>
          <header id="main-header">
            <img src={Logo} alt="logo" />
          </header>
          <div className="avatar"></div>
        </div>
        {menu}
      </div>
    </>
  );
}
