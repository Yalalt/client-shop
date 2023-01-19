import Header from "../Header";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import { MENUS, users } from "../../utils/data";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Shadow from "../Shadow";
import style from "./app.module.css";

function App() {
  let [openLogin, setLogin] = useState(false);
  let [loggedUser, setLogged] = useState(false);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkState = (uName, uPassword) => {
    console.log("Func into: " + uName + ", " + uPassword);

    setUsername(uName);
    setPassword(uPassword);
    useEffect(() => {
      console.log("State in: " + userName + ", " + password);
    });

    users.forEach((user, index) => {
      if (user.name === userName && user.password === password) {
        console.table("Successful login " + index);
        setLogged(true);
      } else {
        console.table("Login wrong !!" + index);
      }
    });
  };

  return (
    <div className={style.container}>
      <div className={openLogin ? style.Active : style.Close}>
        <Login
          setLogin={setLogin}
          loginCheck={checkState}
          setUsername={setUsername}
          setPassword={setPassword}
        />
        <Shadow />
      </div>
      <Header
        setLogin={setLogin}
        loggedUser={loggedUser}
        setLogged={setLogged}
      />
      <Routes>
        <Route path={MENUS[0].url} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
