import React from "react";
import { NAVIGATION } from "../../utils/data";
import style from "../../styles/navbar.module.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={style.nav}>
      <ul className={style.menuItems}>
        {NAVIGATION.map((menu, index) => (
          <CustomLink key={index} to={menu.url}>
            {menu.name}
          </CustomLink>
        ))}
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? style.active : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
