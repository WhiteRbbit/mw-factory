import React from "react";
import "./CategoryItem.scss";
import { withRouter } from "react-router-dom";

const CategoryItem = ({ title, imageUrl, history, match, routeUrl }) => {
  return (
    <div
      className="categoryItem"
      onClick={() => history.push(`${match.url}${routeUrl}`)}
    >
      <div
        className="categoryItem__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="categoryItem__content">
        <h1 className="categoryItem__contentTitle">{title.toUpperCase()}</h1>
      </div>
    </div>
  );
};

export default withRouter(CategoryItem);
