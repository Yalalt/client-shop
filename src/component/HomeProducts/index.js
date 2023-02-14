import { CATEGORY, NAVIGATION } from "../../utils/data";
import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../App";
import axios from "axios";
import Navbar from "../subComponent/Navbar";
import ShowcaseHero from "../ShowcaseHero";
import Products from "../Products";
import MiddleContent from "../MiddleContent";
import SpecialsProducts from "../SpecialsProducts";
import Logos from "../Logos";
import Footer from "../Footer";
import style from "./homeProducts.module.css";

const HomeProducts = () => {
  const { products, currentCategory, setCurrentCategory } =
    useContext(ProductsContext);

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
