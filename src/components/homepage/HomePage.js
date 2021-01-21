import React from "react";
import "./HomePage.scss";
import Banner from "../banner/Banner";
import CategoryItem from "../item/category-item/CategoryItem";

const HomePage = () => {
  const categories = [
    {
      id: 1,
      title: "FEMME",
      imageUrl:
        "https://images.pexels.com/photos/2212951/pexels-photo-2212951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      routeUrl: "women",
    },
    {
      id: 2,
      title: "HOMME",
      imageUrl:
        "https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      routeUrl: "men",
    },
  ];

  return (
    <div className="homepage">
      <Banner />

      <div className="homepage__category">
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            title={category.title}
            imageUrl={category.imageUrl}
            routeUrl={category.routeUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
