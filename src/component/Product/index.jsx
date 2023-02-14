import React, { useState, useContext } from "react";
import css from "./products.module.css";
import Shadow from "../Shadow";
import { ProductsContext } from "../App";
import { useParams } from "react-router-dom";

const Product = (props) => {
  const { products } = useContext(ProductsContext);
  const [desc, setDesc] = useState(true);
  const prodiData = useParams();
  const [counter, setCounter] = useState(0);

  // function counterHandler(e, )

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
    <div className={`${css.CardContainer} ${css.ProductCard}`} key={index}>
      
    </div>
  );
};
export default Product;
