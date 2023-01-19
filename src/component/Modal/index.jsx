import React from "react";

const Modal = (props) => {
  return (
    <div>
      {props.data.map((item, index) => {
        if (item.id === props.id) {
          <div>
            <img src={item.image} alt="Products" />
            <p>item.name</p>
            <p>item.price</p>
            <p>item.description</p>
          </div>;
        }
      })}
    </div>
  );
};
export default Modal;
