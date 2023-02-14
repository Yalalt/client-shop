import React, { useContext } from "react";
import css from "./specialsProducts.module.css";
import GrayShoppingCardImage from "../../utils/imgs/shoppingcartwhite.png";

const SpecialsProducts = (props) => {
  const specialDataLocal = props.specialData;



  console.log("Special dotor products :==> ", specialDataLocal);

  return (
    <div className={css.SpecialsProducts}>
      <div className={css.MainSpecials}>
        <img
          className={css.MainImage}
          src={specialDataLocal[0].image}
          alt="Specials Product 1"
        />
        <span className={css.name}>{specialDataLocal[0].name}</span>
        <span className={css.price}>${specialDataLocal[0].price}</span>
        <p className={css.desc}>{specialDataLocal[0].description}</p>
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
            src={specialDataLocal[1].image}
            alt="Second Specials products"
          />
          <div className={css.secondSpec}>
            <p className={css.dateNow}>18 Jan 2023</p>
            <p className={css.secSpecTitle}>
              Who avoids a pain that purchases?
            </p>
            <p className={css.secSpecName}>{specialDataLocal[1].name}</p>
            <p className={css.secSpecDesc}>{specialDataLocal[1].description}</p>
            <p className={css.secSpecBrand}>By {specialDataLocal[1].spec.Brand}</p>
          </div>
        </div>
        <div className={css.spec2}>
          <img
            className={css.secSpecImage}
            src={specialDataLocal[2].image}
            alt="Second Specials products"
          />
          <div className={css.secondSpec}>
            <p className={css.dateNow}>18 Jan 2023</p>
            <p className={css.secSpecTitle}>
              Who avoids a pain that purchases?
            </p>
            <p className={css.secSpecName}>{specialDataLocal[2].name}</p>
            <p className={css.secSpecDesc}>{specialDataLocal[2].description}</p>
            <p className={css.secSpecBrand}>By {specialDataLocal[2].spec.Brand}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpecialsProducts;
