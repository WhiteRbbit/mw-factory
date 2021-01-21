import React from "react";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <h2 className="item-1">Livraison offerte dès 80€ d'achats</h2>
        <h2 className="item-2">Deuxieme ligne grande demarque achetez</h2>
        <h2 className="item-3">- 75% avec le code promo CQFD50</h2>
      </div>
    </div>
  );
};

export default Banner;
