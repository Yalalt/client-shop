import React, { useState, useContext } from "react";
import css from "./products.module.css";
import CardProduct from "../CardProduct";
import Shadow from "../Shadow";
import { ProductsContext } from "../App";

const Product = (props) => {
  let [modalOpen, setModalOpen] = useState(false);
  let [itemId, setItemId] = useState("");

  const newData = useContext(ProductsContext);
  console.log("Context data irsen ==> ", newData);

  const ModalCall = (id) => {
    console.log("Modal dotor!!!!");
    // Asuudal VIEW HESGIIG HAANA HARUULAH BE!!!!!!
    <div>
      <Modal id={id} data={newData} />
      <Shadow />
    </div>;
  };

  console.log("State Modal: " + modalOpen);

  return (
    <div className={css.CardContainer}>
      One Product here
    </div>
  );
};
export default Product;
