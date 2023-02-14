import React, { useContext } from "react";
import { ProductsContext } from "../App";
import CardProduct from "../CardProduct";
import css from "./products.module.css";

const Products = (props) => {
  const { currentCategory } = props;
  const { products, login } = useContext(ProductsContext);


  // const [modalOpen, setModalOpen] = useState(false);
  // const ModalCall = (id) => {
  //   console.log("Modal dotor!!!!");
  //   // Asuudal VIEW HESGIIG HAANA HARUULAH BE!!!!!!
  //   <div>
  //     <Modal id={id} data={products} />
  //     <Shadow />
  //   </div>;
  // };
  

  return (
    <div className={css.CardContainer}>
      {products.map((item, index) => {
        if(currentCategory === "all" || item.category === currentCategory) {
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
  );
};
export default Products;
