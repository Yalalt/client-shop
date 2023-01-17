import style from "../styles/home.module.css";
import ShowcaseHero from "../component/ShowcaseHero";
import Navbar from "../component/subComponent/Navbar";
import Products from "../component/Products";
import { data, CATEGORY, NAVIGATION } from "../utils/data";
import { useState } from "react";
import MiddleContent from "../component/MiddleContent";

const Home = () => {
  let [selected, setSelected] = useState("/all");
  const getCategory = (resolvedPath) => {
    setSelected(resolvedPath);
  };

  return (
    <div className={style.homeStyleMain}>
      <ShowcaseHero />
      <div className={style.innerContainer}>
        <Navbar navigationMenus={NAVIGATION} getCategory={getCategory} />
        <Products productsData={data} category={CATEGORY} selected={selected} />
        <MiddleContent />
      </div>
    </div>
  );
};
export default Home;
