import "./Menu.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useProducts } from "../../contexts/ProductsContext";
import { useCart } from "../../contexts/CartContext";
useCart;

import { LuLayoutList, LuLayoutGrid } from "react-icons/lu";

import Vertical_Card from "../../components/cards/vertical-card/Vertical-Card";
import Horizon_Card from "../../components/cards/horizon-card/Horizon-Card";

const Menu = () => {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  const { categories } = useProducts();
  const { getTotalPrice } = useCart();
  const [view, set_view] = useState("grid");

  const firstCategory = categories[0];
  const firstSubcategory = firstCategory?.subcategories[0];

  useEffect(() => {
    if (!category || !subcategory)
      navigate(`/menu/${firstCategory?.slug}/${firstSubcategory?.slug}`, {
        replace: true,
      });
  }, [category, subcategory, firstCategory, firstSubcategory, navigate]);

  const crossline =
    categories
      .find((c) => c.slug === category)
      ?.subcategories.find((s) => s.slug === subcategory)?.items || [];

  return (
    <div className="menu">
      <div className="menu-categories">
        {categories.map((line) => (
          <div
            key={line.slug}
            className="menu-category"
            onClick={() =>
              navigate(`/menu/${line.slug}/${line.subcategories[0]?.slug}`)
            }
          >
            <div
              className={`menu-category-image ${
                category === line.slug ? "active-menu-category-image" : ""
              }`}
            ></div>
            <div className="menu-category-named">{line.name}</div>
          </div>
        ))}
      </div>
      <div className="menu-sub-categories">
        {categories
          .find((c) => c.slug === category)
          ?.subcategories.map((line) => (
            <div
              key={line.slug}
              className={`menu-sub-category ${
                subcategory === line.slug ? "active-menu-sub-category" : ""
              }`}
              onClick={() => navigate(`/menu/${category}/${line.slug}`)}
            >
              {line.name}
            </div>
          ))}
      </div>
      <div className="menu-repository">
        <div className="menu-views">
          <LuLayoutList
            className="menu-view-icon"
            onClick={() => set_view("horizon")}
          />
          <LuLayoutGrid
            className="menu-view-icon"
            onClick={() => set_view("grid")}
          />
        </div>
        {view === "grid" ? (
          <div className="vertical-cards">
            {crossline.map((line) => (
              <Vertical_Card round={line} key={line.id} />
            ))}
          </div>
        ) : (
          <div className="horizon-cards">
            {crossline.map((line) => (
              <Horizon_Card round={line} key={line.id} />
            ))}
          </div>
        )}
      </div>
      {getTotalPrice() > 0 && (
        <div
          className="receipt-navigate"
          onClick={() => useNavigate("/receipt")}
        >
          {Intl.NumberFormat("ru-RU").format(getTotalPrice()) + " ₸"}
        </div>
      )}
    </div>
  );
};

export default Menu;