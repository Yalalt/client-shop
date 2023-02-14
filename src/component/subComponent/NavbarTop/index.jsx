import React, { useContext, useState } from "react";
import HeaderLogoBig from "../../../utils/imgs/headerLogoElectronics.png";
import UserIcon from "../../../utils/imgs/user.png";
import CartIcon from "../../../utils/imgs/shoppingcartwhite.png";
import style from "./navbarTop.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ProductsContext } from "../../App";
import { Modal } from "react-bootstrap";
import Shadow from "../../Shadow";
import axios from "axios";

export default function NavbarTop() {

  const { basketNo, setLogin, login, closeModal, setCloseModal, products, currentCategory, setCurrentCategory } = useContext(ProductsContext);

  const [openCanvas, setOpenCanvas] = useState(false);
  const navigate = useNavigate();

  let basketIds = JSON.parse(localStorage.getItem("basket"));
  let basket = [];
  let total_price = 0;

  if (basketIds) {
    products.find((product) => {
      basketIds.map((id) => {
        if (product.pid === id) {
          basket.push(product);
        }
      })
    })
  }

  basket.map((a) => total_price + a.price);
  console.log("Total Price", total_price);

  let orders_amount = basket.length;

  function ordersHandle() {
    let oid = "o".concat(genRandomHex(8));
    let onumber = "#".concat(genRandomDecimal(2));
    let o_date = getFullDate();
    let mid = "m".concat(genRandomHex(8));
    let uid = localStorage.getItem("userId");

    let newOrder = {
      oid,
      onumber,
      o_date,
      uid,
      pid: basketIds,
      orders_amount,
      total_price,
      payment_type: "card",
      status: "active",
      ebarimt: "irgen",
      mid
    }

    axios.post("http://localhost:3008/order", newOrder).then((res) => console.log("Add Order response here ==> ", res)).catch((error) => console.log("Error"));

    localStorage.removeItem("basket");
  }


  // get Full date 2023-02-28
  const getFullDate = () => new Date().toISOString().slice(0, 10);

  // UID generator Hex number
  const genRandomHex = (size) => [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");

  // UID generator Decimal number
  const genRandomDecimal = (size) => [...Array(size)].map(() => Math.floor(Math.random() * 9).toString(10)).join("");

  return (
    <nav className={style.navbarTop}>
      <Link to="/" className={style.logoNavbar}>
        <img src={HeaderLogoBig} alt="Logo here" />
      </Link>
      <div className={style.inputGroup}>
        <input
          type="text"
          placeholder="Search any things"
          className={style.inputSearch}
        />
        <button type="button" value="Search" className={style.searchBtn}>
          Search
        </button>
      </div>
      <ul className={style.menuItems}>
        <span className={style.signInIcon}>
          <img src={UserIcon} alt="User account icon" />
          {
            login ? (<button
              onClick={() => {
                navigate("/");
                setCloseModal(false);
                localStorage.setItem("login", false);
                setLogin(JSON.parse(localStorage.getItem("login")));
                localStorage.removeItem("userId");
              }}
              className={style.loginItem}>Logout</button>) : (<button
                onClick={() => setCloseModal(true)}
                className={style.loginItem}>Sign in</button>)
          }

        </span>
        <span className={style.signInIcon}>
          <img src={CartIcon} alt="Shopping cart icon" />
          <p className={style.userCartValue}>{basketNo}</p>
        </span>
      </ul>
    </nav>
    // &&
    // closeModal ? (<><Modal /><Shadow /></>) : null
  );
}
