import { useState } from "react";
import loginiconlogo from "../utils/imgs/loginRegisterLogo.png";
import style from "../styles/login.module.css";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginHandler(e) {
    e.preventDefault();
    setUsername(e.target.userName.value);
    setPassword(e.target.password.value);
    // loginCheck(userName, password);
  }

  return (
    <div className={style.formContainer}>
      <img src={loginiconlogo} alt="Login icon" />
      <button type="button" className={style.closeButton}>
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
