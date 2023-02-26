import React from "react";
import style from "./navbar.module.css";
import { NAVIGATION } from "../../../utils/data";

export default function CatMenu(props) {
  const { setCategory, currentCat } = props;
  const navigationMenus = NAVIGATION;

  return (
    <nav className={style.nav}>
      <span className={style.popular}>Popular products</span>
      <ul className={style.menuItems}>
        {navigationMenus.map((menu, index) => (
          <li key={index} className={currentCat === menu.url ? style.active : null}>
            <button className={style.Button} key={`btn${index}`} onClick={() => setCategory(menu.url)}>
              {menu.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}