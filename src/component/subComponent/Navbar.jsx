import React from "react";
import style from "../../styles/navbar.module.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar(props) {
  const { navigationMenus } = props;

  return (
    <nav className={style.nav}>
      <span className={style.popular}>Popular products</span>
      <ul className={style.menuItems}>
        {navigationMenus.map((menu, index) => (
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
