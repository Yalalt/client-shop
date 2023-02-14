import Header from "../Header";
import Home from "../../pages/Home";
import HomeProducts from "../HomeProducts";
import Product from "../Product";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import { users } from "../../utils/data";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import style from "./app.module.css";
import axios from "axios";

export const ProductsContext = createContext();

function App() {
  let [openLogin, setLogin] = useState(false);
  let [loggedUser, setLogged] = useState(false);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [products, setProducts] = useState();
  const [specialData, setSpecialData] = useState();


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios
          .get("http://localhost:3008/products")
          .then((res) => {
            if (res.status === 200) {
              return res;
            } else {
              console.log("Not successful");
              setError(error);
            }
          });
        const resProducts = await response.data;
        return resProducts;
      } catch (error) {
        console.log("Products request axios Error uuslee", error);
        setError(error);
      }
    };

    fetchProducts().then((res) => {
      setProducts(res);
      saveData(res);
      console.log("response products==> ", res);
    });
  }, []);

  const saveData = (data) => {
    const newSpecials = data.filter((item) => item.category === "special");
    setSpecialData(newSpecials);
    console.log("Specials data==> ", newSpecials);
  };

  const checkState = (uName, uPassword) => {
    console.log("Func into: " + uName + ", " + uPassword);

    setUsername(uName);
    setPassword(uPassword);

    users.forEach((user, index) => {
      if (user.name === userName && user.password === password) {
        console.table("Successful login " + index);
        setLogged(true);
      } else {
        console.table("Login wrong !!" + index);
      }
    });
  };

  /*** Login
          setLogin={setLogin}
          loginCheck={checkState}
          setUsername={setUsername}
          setPassword={setPassword}
        />
        <Shadow />***/

  return (
    <div className={style.container}>
      <ProductsContext.Provider
        value={{
          openLogin,
          loggedUser,
          products,
          specialData,
          setProducts
        }}
      >
        <Header
          setLogin={setLogin}
          loggedUser={loggedUser}
          setLogged={setLogged}
        />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeProducts />} />
            <Route path="/product" element={<Product />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </ProductsContext.Provider>
    </div>
  );
}

export default App;
