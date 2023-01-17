import React from "react";
import style from "../../styles/navbar.module.css";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar(props) {
  const { navigationMenus, getCategory } = props;

  return (
    <nav className={style.nav}>
      <span className={style.popular}>Popular products</span>
      <ul className={style.menuItems}>
        {navigationMenus.map((menu, index) => (
          <CustomLink key={index} to={menu.url} getCategory={getCategory}>
            {menu.name}
          </CustomLink>
        ))}
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, getCategory, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? style.active : ""} onClick={getCategory}>
      <NavLink to={to} {...props}>
        {children}
      </NavLink>
    </li>
  );
}
