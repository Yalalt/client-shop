import React, { useState } from "react";
import css from "./products.module.css";
import CardProduct from "../CardProduct";
import Shadow from "../Shadow";

const Products = (props) => {
  let [modalOpen, setModalOpen] = useState(false);
  let [itemId, setItemId] = useState("");

  const ModalCall = (id) => {
    console.log("Modal dotor!!!!");
    // Asuudal VIEW HESGIIG HAANA HARUULAH BE!!!!!!
    <div>
      {/* <Modal id={id} data={props.productsData} /> */}
      {/* <Shadow /> */}
    </div>;
  };

  console.log("State Modal: " + modalOpen);

  return (
    <div className={css.CardContainer}>
      {props.productsData.map((item, index) => (
        <CardProduct
          itemData={item}
          key={index}
          ModalCall={ModalCall}
          itemID={item.id}
        />
      ))}
    </div>
  );
};
export default Products;
