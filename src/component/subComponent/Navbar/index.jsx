import React, { useContext } from "react";
import style from "./navbar.module.css";
import { ProductsContext } from "../../App";
import { NAVIGATION } from "../../../utils/data";

export default function Navbar() {
  const { currentCategory, setCurrentCategory } = useContext(ProductsContext);

  const navigationMenus = NAVIGATION;

  return (
    <nav className={style.nav}>
      <span className={style.popular}>Popular products</span>
      <ul className={style.menuItems}>
        {navigationMenus.map((menu, index) => (
          <li key={index} className={currentCategory === menu.url ? style.active : null}>
            <button className={style.Button} key={`btn${index}`} onClick={() => setCurrentCategory(menu.url)}>
              {menu.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}