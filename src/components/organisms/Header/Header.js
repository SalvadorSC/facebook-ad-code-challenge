import React from "react";
import "../../../styles/globalStyles.css";
import "./Header.styles.css";
import Logo from "../../../assets/logo-gold_transparent.png";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
  const isLinkActive = ({ isActive }) =>
    isActive
      ? {
          fontWeight: "bold",
          color: "#deb76a",
        }
      : undefined;
  return (
    <>
      <div className="header">
        <Link to="/" className="flex-align-center">
          <img
            src={Logo}
            className="header-logo"
            alt="Logo of a dumbbell representing Max's Sporting Goods"
          />
          <p className="header-title header-link">Max's Sporting Goods</p>
        </Link>

        <div className="link-menu">
          <NavLink to="/" style={isLinkActive} className="header-link">
            Product List
          </NavLink>
          <NavLink to="readView/0" style={isLinkActive} className="header-link">
            Ad Repository
          </NavLink>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu flex-direction-column plr-15 flex-justify-space-evenly bg-black-80 textWhite">
          <li>
            <NavLink to="/" style={isLinkActive}>
              Product List
            </NavLink>
          </li>
          <li>
            <NavLink to="readView/0" style={isLinkActive}>
              Ad Repository
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Header;
