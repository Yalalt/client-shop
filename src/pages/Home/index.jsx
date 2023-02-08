import { data, CATEGORY, NAVIGATION } from "../../utils/data";
import { useState, useEffect, createContext } from "react";
import ShowcaseHero from "../../component/ShowcaseHero";
import Navbar from "../../component/subComponent/Navbar";
import MiddleContent from "../../component/MiddleContent";
import Products from "../../component/Products";
import SpecialsProducts from "../../component/SpecialsProducts";
import Logos from "../../component/Logos";
import Footer from "../../component/Footer";
import style from "./home.module.css";
import axios from "axios";

const Home = () => {
  let ProductsContext = createContext();
  let [selected, setSelected] = useState("all");
  let [newData, setNewData] = useState();
  let [specialData, setSpecialData] = useState(
    newData.filter((item) => item.category === "special")
  );

  useEffect(() => {
    axios.get("http://localhost:3008/products").then((res) => {
      if (res.status === 200) {
        setNewData(res.data);
        console.log("Products list 0_0) ==> ", res.data);
      } else {
        console.log("Not successful");
      }
    });
  }, []);

  console.log("Data products===> ", newData);

  const getCategory = (path) => {
    const copyData = newData.filter((item) => {
      if (item.category === path || path === "all") {
        return item;
      }
    });
    setSelected(path);
    console.table(copyData);
  };

  return (
    <div className={style.homeStyleMain}>
      <ShowcaseHero />
      <div className={style.innerContainer}>
        <ProductsContext.Provider value={newData}>
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
        </ProductsContext.Provider>
        <Logos />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
