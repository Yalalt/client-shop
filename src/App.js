import Header from "./component/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Register from "./pages/Register";
import { MENUS, users } from "./utils/data";
import style from "./app.module.css";
import { Route, Routes } from "react-router-dom";
import Shadow from "./component/Shadow";
import { useState } from "react";

function App() {
  let [openLogin, SetLogin] = useState(false);

  const loginCheckUser = (uName, uPassword) => {
    users.forEach((user) => {
      if (user.name === uName && user.password === uPassword) {
        console.log("Successful login");
      } else {
        console.log("Wrong name password entered");
      }
    });
  };

  return (
    <div className={style.container}>
      {openLogin && (
        <div>
          <Login />
          <Shadow />
        </div>
      )}
      <Header />
      <Routes>
        <Route path={MENUS[0].url} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
