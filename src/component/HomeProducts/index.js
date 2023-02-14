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
  const { products } = useContext(ProductsContext);
  const [selected, setSelected] = useState("all");
  const [selectedProducts, setSelectedProducts] = useState();

  console.log("Data products in Home Products ===> ", products);

  const getCategory = (path) => {
    const copyData = products.filter((item) => {
      if (item.category === path || path === "all") {
        return item;
      }
    });
    setSelected(path);
    setSelectedProducts(copyData);
  };

  return (
    <div className={style.homeStyleMain}>
      <div className={style.innerContainer}>
        <Navbar
          navigationMenus={NAVIGATION}
          getCategory={getCategory}
          selected={selected}
        />
        <Products selectedProducts={selectedProducts}/>
        <MiddleContent />
        {/* <SpecialsProducts /> */}
        <Logos />
      </div>
      <Footer />
    </div>
  );
};
export default HomeProducts;
