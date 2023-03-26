import React from "react";
import "./navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const Navigation = () => (
  <>
    <div className="navigation">
      <Link className="logo-container" to="/">
        <CrwnLogo className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        <Link className="nav-link" to="/">
          CONTACT
        </Link>
        <Link className="nav-link" to="/">
          SIGN-IN
        </Link>
      </div>
    </div>
    <Outlet />
  </>
);

export default Navigation;
