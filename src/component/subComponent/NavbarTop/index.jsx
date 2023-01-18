import React from "react";
import HeaderLogoBig from "../../../utils/imgs/headerLogoElectronics.png";
import UserIcon from "../../../utils/imgs/user.png";
import CartIcon from "../../../utils/imgs/shoppingcartwhite.png";
import style from "./navbarTop.module.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavbarTop(props) {
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
            props.loggedUser ? <button 
            onClick={()=>props.setLogged(false)}
            className={style.loginItem}>Logout</button> : <button 
            onClick={()=>props.setLogin(true)}
            className={style.loginItem}>Sign in</button>
          }
          
        </span>
        <span className={style.signInIcon}>
          <img src={CartIcon} alt="Shopping cart icon" />
          <p className={style.userCartValue}>0</p>
        </span>
      </ul>
    </nav>
  );
}
