import React from "react";
import style from "./navbar.module.css";

export default function Navbar(props) {
  const { navigationMenus, getCategory, selected } = props;

  return (
    <nav className={style.nav}>
      <span className={style.popular}>Popular products</span>
      <ul className={style.menuItems}>
        {navigationMenus.map((menu, index) => (
          <li key={index} className={selected === menu.url ? style.active:null}>
          <button className={style.Button} key={`btn${index}`} onClick={()=>getCategory(menu.url)}>
            {menu.name}
          </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}