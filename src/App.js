import Header from "./component/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Register from "./pages/Register";
import { MENUS, users } from "./utils/data";
import style from "./app.module.css";
import { Route, Routes } from "react-router-dom";

function App() {
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
      <Header />
      <Routes>
        <Route path={MENUS[0].url} element={<Home />} />
        <Route path={MENUS[1].url} element={<Login />} />
        <Route path={MENUS[2].url} element={<About />} />
        <Route path={MENUS[3].url} element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
