import {
  FavoriteBorderOutlined,
  PersonOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import "./Header.scss";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        {/* LOGO TO HOMEPAGE */}
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>

        {/* SEARCH BAR */}
        <div className="header__searchBar">
          <input type="text" placeholder="Rechercher" />
          <SearchOutlined />
        </div>

        {/* NAVIGATION LINKS */}
        <div className="header__nav">
          {/* LOGIN - PERSONNAL ACCOUNT */}
          <div className="header__navIcon">
            <Link to="/login">
              <PersonOutlined />
            </Link>
          </div>

          {/* FAVORITES PAGE */}
          <div className="header__navIcon">
            <Link to="/favorites">
              <FavoriteBorderOutlined />
            </Link>
          </div>

          {/* CART PAGE */}
          <div className="header__navIcon">
            <Link to="/cart">
              <ShoppingCartOutlined />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
