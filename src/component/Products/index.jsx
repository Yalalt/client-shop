import React, { useState, useContext } from "react";
import css from "./products.module.css";
import CardProduct from "../CardProduct";
import Shadow from "../Shadow";
import { ProductsContext } from "../App";

const Products = (props) => {
  let [modalOpen, setModalOpen] = useState(false);
  let [itemId, setItemId] = useState("");
  const productss = props.selectedProducts;

  console.log("Context data irsen ==> ", products);

  const ModalCall = (id) => {
    console.log("Modal dotor!!!!");
    // Asuudal VIEW HESGIIG HAANA HARUULAH BE!!!!!!
    <div>
      <Modal id={id} data={productss} />
      <Shadow />
    </div>;
  };

  console.log("State Modal: " + modalOpen);
  console.log("Products Componenents dotor ====> ", products);

  return (
    <div className={css.CardContainer}>
      {productss.map((item, index) => {
        return (
          <CardProduct
            itemData={item}
            key={index}
            ModalCall={ModalCall}
            // itemID={item.id}
          />
        );
      })}
    </div>
  );
};
export default Products;
