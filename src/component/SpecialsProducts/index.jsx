import React, { useContext } from "react";
import css from "./specialsProducts.module.css";
import GrayShoppingCardImage from "../../utils/imgs/shoppingcartwhite.png";
import { ProductsContext } from "../App";

// Only to have show 3 three Specials products
const SpecialsProducts = () => {
  const { products } = useContext(ProductsContext);
  const filteredProduct = products.filter((product) => product.category === "special");

  return (
    products && (
      <div className={css.SpecialsProducts}>
        <div className={css.MainSpecials}>
          <img
            className={css.MainImage}
            src={filteredProduct[0].image}
            alt="Specials Product 1"
          />
          <span className={css.name}>{filteredProduct[0].name}</span>
          <span className={css.price}>${filteredProduct[0].price}</span>
          <p className={css.desc}>{filteredProduct[0].description}</p>
          <button type="button" className={css.AddCartButton}>
            Add to cart
            <div className={css.grayShoppingCart}>
              <img src={GrayShoppingCardImage} alt="Shopping cart" />
            </div>
          </button>
        </div>
        <div className={css.SecondarySpecials}>
          <div className={css.spec1}>
            <img
              className={css.secSpecImage}
              src={filteredProduct[1].image}
              alt="Second Specials products"
            />
            <div className={css.secondSpec}>
              <p className={css.dateNow}>18 Jan 2023</p>
              <p className={css.secSpecTitle}>
                Who avoids a pain that purchases?
              </p>
              <p className={css.secSpecName}>{filteredProduct[1].name}</p>
              <p className={css.secSpecDesc}>{filteredProduct[1].description}</p>
              <p className={css.secSpecBrand}>By {filteredProduct[1].spec.Brand}</p>
            </div>
          </div>
          <div className={css.spec2}>
            <img
              className={css.secSpecImage}
              src={filteredProduct[2].image}
              alt="Second Specials products"
            />
            <div className={css.secondSpec}>
              <p className={css.dateNow}>18 Jan 2023</p>
              <p className={css.secSpecTitle}>
                Who avoids a pain that purchases?
              </p>
              <p className={css.secSpecName}>{filteredProduct[2].name}</p>
              <p className={css.secSpecDesc}>{filteredProduct[2].description}</p>
              <p className={css.secSpecBrand}>By {filteredProduct[2].spec.Brand}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default SpecialsProducts;
