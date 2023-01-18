import { data, CATEGORY, NAVIGATION } from "../../utils/data";
import { useState } from "react";
import ShowcaseHero from "../../component/ShowcaseHero";
import Navbar from "../../component/subComponent/Navbar";
import MiddleContent from "../../component/MiddleContent";
import Products from "../../component/Products";
import SpecialsProducts from "../../component/SpecialsProducts";
import Logos from "../../component/Logos"
import Footer from "../../component/Footer";
import style from "./home.module.css";

const Home = () => {
  let [selected, setSelected] = useState("all");
  let [newData, setNewData] = useState(data);
  let [specialData, setSpecialData] = useState(
    data.filter((item) => item.category === "special")
  );
  const getCategory = (path) => {
    const copyData = data.filter((item) => {
      if (item.category === path || path === "all") {
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
        <Navbar
          navigationMenus={NAVIGATION}
          getCategory={getCategory}
          selected={selected}
        />
        <Products
          productsData={newData}
          category={CATEGORY}
          selected={selected}
        />
        <MiddleContent />
        <SpecialsProducts data={specialData} />
        <Logos />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
