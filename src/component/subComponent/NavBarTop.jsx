import React from "react";
import { HeaderLogoBig } from "../../utils/imgs/headerLogoElectronic.png";
import style from "../../styles/navbar.module.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={style.nav}>
      <Link to="/" className={style.logoNavbar}>
        <img src={HeaderLogoBig} alt="Logo here" />
      </Link>
      <ul className={style.menuItems}>
        <CustomLink key={index} to={menu.url}>
          Login
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li>
      {isActive}
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
