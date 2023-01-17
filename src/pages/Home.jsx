import style from "../styles/home.module.css";
import ShowcaseHero from "../component/ShowcaseHero";
import Navbar from "../component/subComponent/Navbar";
import Products from "../component/Products";
import { data, CATEGORY, NAVIGATION } from "../utils/data";
import { useState } from "react";
import MiddleContent from "../component/MiddleContent";


const Home = () => {
  let [selected, setSelected] = useState("all");
  let [newData, setNewData] = useState(data);
  const getCategory = (path) => {
    const copyData = data.filter((item) => {
      if(item.category === path || path === "all")
      {
        return item;
      }
    });
    setNewData(copyData);
    setSelected(path);
    console.table(copyData);
  };

  return (
    <div className={style.homeStyleMain}>
      <ShowcaseHero />
      <div className={style.innerContainer}>
        <Navbar navigationMenus={NAVIGATION} getCategory={getCategory} selected={selected} />
        <Products productsData={newData} category={CATEGORY} selected={selected} />
        <MiddleContent />
      </div>
    </div>
  );
};
export default Home;
