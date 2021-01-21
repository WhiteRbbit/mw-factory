import React from "react";
import { Link } from "react-router-dom";
import "./FooterLinks.scss";

const FooterLinks = ({ categoryName, links }) => {
  return (
    <div className="footerLinks">
      <h3 className="footerLinks__category">{categoryName.toUpperCase()}</h3>

      <div className="footerLinks__linkContainer">
        {links.map((link) => (
          <Link key={link.id} to={link.routeUrl}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
