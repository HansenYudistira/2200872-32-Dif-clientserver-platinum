<<<<<<< HEAD
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../Styles/sidebar.css';
import {
  FaHome,
  FaUserFriends,
  FaShareAlt
} from "react-icons/fa";
import {
    PiCloudWarningThin,
    PiEnvelopeLight,
  } from "react-icons/pi";
  

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoHeight, setLogoHeight] = useState("20px");
  const toggle = () => {
    setIsOpen(!isOpen);
    setLogoHeight(isOpen ? "20px" : "50px");
  };

  const menuItem = [
    {
      path: "/",
      name: "Homepage",
      icon: <FaHome color="black" />,
    },
    {
      path: "/community",
      name: "Community",
      icon: <FaUserFriends color="black" />,
    },
    {
      path: "/about-us",
      name: "About Us",
      icon: <PiCloudWarningThin color="black" />,
    },
    {
      path: "/social",
      name: "Social Media",
      icon: <PiEnvelopeLight color="black" />,
    },
    {
      path: "/share",
      name: "Share",
      icon: <FaShareAlt color="black" />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "100px" }} className="sidebar">
        <div className="top_section">
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <img
              src="./images/logo.png"
              style={{ height: logoHeight, width: "auto" }}
              onClick={toggle}
              alt="toggle"
            />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeClassName="active">
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
=======
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../Styles/LandingPages/sidebar.css';
import {
  FaHome,
  FaUserFriends,
  FaInfo,
  FaShareAlt
} from "react-icons/fa";
  

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoHeight, setLogoHeight] = useState("20px");
  const toggle = () => {
    setIsOpen(!isOpen);
    setLogoHeight(isOpen ? "20px" : "50px");
  };

  const menuItem = [
    {
      path: "/",
      name: "Homepage",
      icon: <FaHome color="black" />,
    },
    {
      path: "/community",
      name: "Community",
      icon: <FaUserFriends color="black" />,
    },
    {
      path: "/about-us",
      name: "About Us",
      icon: <FaInfo color="black" />,
    },
    {
      path: "/share",
      name: "Share",
      icon: <FaShareAlt color="black" />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "100px" }} className="sidebar">
        <div className="top_section">
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <img
              src="./images/logo.png"
              style={{ height: logoHeight, width: "auto" }}
              onClick={toggle}
              alt="toggle"
            />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeClassName="active">
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
>>>>>>> origin/main
