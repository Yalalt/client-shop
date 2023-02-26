import ShowcaseHero from "../ShowcaseHero";
import CatMenu from "../subComponent/CatMenu";
import CardProduct from "../CardProduct";
import MiddleContent from "../MiddleContent";
import SpecialsProducts from "../SpecialsProducts";
import Logos from "../Logos";
import style from "./homeProducts.module.css";
import { useProductContext } from "../ContextProviders/ProductContext";
import { useUserContext } from "../ContextProviders/UserContext";

const HomeProducts = () => {
  const { products, currentCat, setCurrentCat } = useProductContext();
  const { login } = useUserContext();

  function setCategory(path) {
    setCurrentCat(path);
  }

  return (
    products && (
      <div>
        <div className={style.innerContainer}>
          <ShowcaseHero />
          <CatMenu setCategory={setCategory} currentCat={currentCat} />
          <div className={style.CardContainer}>
            {products.map((item, index) => {
              if (currentCat === "all" || item.category === currentCat) {
                return (
                  <div key={index}>
                    <CardProduct
                      login={login}
                      prodName={item.name}
                      desc={item.description}
                      price={item.price}
                      stock={item.stock}
                      category={item.category}
                      id={item.pid}
                      imageUrl={item.image}
                      brand={item.spec.brand}
                      sale={item.sale}
                    />
                  </div>
                );
              }
            })}
          </div>
          <MiddleContent />
          {/* <SpecialsProducts /> */}
          <Logos />
        </div>
      </div>
    )
  );
};
export default HomeProducts;
