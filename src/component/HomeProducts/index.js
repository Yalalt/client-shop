import { CATEGORY, NAVIGATION } from "../../utils/data";
import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../App";
import Navbar from "../subComponent/Navbar";
import ShowcaseHero from "../ShowcaseHero";
import Products from "../Products";
import MiddleContent from "../MiddleContent";
import SpecialsProducts from "../SpecialsProducts";
import BasketCart from "../BasketCart";
import Logos from "../Logos";
import style from "./homeProducts.module.css";
import { useProductContext } from "../ContextProviders/ProductContext";

const HomeProducts = () => {
  const { products, currentCategory, setCurrentCategory } = useProductContext();

  const [selected, setSelected] = useState();
  const [selectedProducts, setSelectedProducts] = useState();

  const getCategory = (path) => {
    const copyData = products.filter((item) => {
      if (item.category === path || path === "all") {
        return item;
      }
    });
    setSelected(path);
    setSelectedProducts(copyData);
    console.log("ZOWHON Home Products dotor----->>>", copyData);
  };

  return (
    products && (
      <div>
        <div className={style.innerContainer}>
          <BasketCart />
          <ShowcaseHero />
          <Navbar
            navigationMenus={NAVIGATION}
            getCategory={getCategory}
            selected={selected}
          />
          <Products currentCategory={currentCategory} />
          <MiddleContent />
          <SpecialsProducts />
          <Logos />
        </div>
      </div>
    )
  );
};
export default HomeProducts;
