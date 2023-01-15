import { useState } from "react";
import style from "../styles/login.module.css";

const Login = ({ loginCheck }) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginHandler(e) {
    e.preventDefault();
    setUsername(e.target.userName.value);
    setPassword(e.target.password.value);
    loginCheck(userName, password);
  }

  return (
    <div className={style.formContainer}>
      <h3 className={style.headTitle}>Нэвтрэх</h3>
      <form onSubmit={loginHandler} className={style.formGroup}>
        <input type="text" name="userName" />
        <input type="text" name="password" />
        <button className={style.submitBtn} type="submit">Нэвтрэх</button>
        <span className={style.regLink}>Шинэ хэрэглэгчээр бүртгүүлэх бол <strong><a href="/register" >Бүртгүүлэх?</a></strong> энд дарна уу.</span>
      </form>
    </div>
  );
};
export default Login;
