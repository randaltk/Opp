import React from "react";
import "./styles.scss";
import { HiOutlineUserAdd } from "react-icons/hi";
import { FiHome } from "react-icons/fi";
const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-content">
        <div className="icon" style={{ color: "blue" }}>
          <div className="line"></div>
          <FiHome size={30} />
          <p>Home</p>
        </div>
        <div className="icon" style={{ color: "blue" }}>
          <HiOutlineUserAdd size={30} />
          <p>Processo seletivo</p>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
