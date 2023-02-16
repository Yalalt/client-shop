import { useState } from "react";
import loginiconlogo from "../../utils/imgs/loginRegisterLogo.png";
import style from "./login.module.css";

const Login = () => {
  function loginHandler(e) {
    e.preventDefault();
    console.log("Name: " + e.target.userName.value);
    console.log("Pass: " + e.target.password.value);
    props.loginCheck(e.target.userName.value, e.target.password.value);
  }

  function setLoginClose(e) {
    e.preventDefault();
    props.setLogin(false);
  }

  return (
    <div className={style.formContainer}>
      <img src={loginiconlogo} alt="Login icon" />
      <button
        onClick={setLoginClose}
        type="button"
        className={style.closeButton}
      >
        X
      </button>
      <h3 className={style.headTitle}>Нэвтрэх</h3>
      <form onSubmit={loginHandler} className={style.formGroup}>
        <input
          type="text"
          name="userName"
          placeholder="И-мэйл эсвэл Утасны дугаар"
        />
        <input type="text" name="password" placeholder="Нууц үг" />
        <div className={style.recoverPassword}>
          <a href="#">Нууц үгээ мартсан уу?</a>
        </div>
        <button className={style.submitBtn} type="submit">
          Нэвтрэх
        </button>
        <div className={style.throughLine}>
          <span className={style.orText}>эсвэл</span>
        </div>
        <button className={style.registerButton} type="button">
          Бүртгүүлэх
        </button>
      </form>
    </div>
  );
};
export default Login;
