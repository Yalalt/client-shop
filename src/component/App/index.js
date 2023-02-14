import Header from "../Header";
import HomeProducts from "../HomeProducts";
import Product from "../Product";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import style from "./app.module.css";
import axios from "axios";
import Footer from "../Footer";

export const ProductsContext = createContext();

function App() {
  const [usersData, setUsersData] = useState(false);
  const [products, setProducts] = useState();
  const [currentCategory, setCurrentCategory] = useState("all");
  const [openLogin, setOpenLogin] = useState(false);
  const [basketNo, setBasketNo] = useState(0);
  const [closeModal, setCloseModal] = useState(false);

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
    const fetchUsers = async () => {
      try {
        const resUsers = await axios
          .get("http://localhost:3008/users")
          .then((res) => {
            if (res.status === 200) {
              return res;
            } else {
              console.log("Not successful");
              setError(error);
            }
          });
        const receiveUsers = await resUsers.data;
        return receiveUsers;
      } catch (error) {
        console.log("Users request axios Error uuslee", error);
        setError(error);
      }
    };

    fetchProducts().then((res) => {
      setProducts(res);
      console.log("Products=0_0=> ", res);
    });

    fetchUsers().then((res) => {
      setUsersData(res);
      console.log("Users=0_0=> ", res);
    });
  }, []);

  if (!localStorage.getItem("login")) {
    localStorage.setItem("login", false);
  }
  const [login, setLogin] = useState(JSON.parse(localStorage.getItem("login")));

  // const saveData = (data) => {
  //   const newSpecials = data.filter((item) => item.category === "special");
  //   setSpecialData(newSpecials);
  //   console.log("Specials data==> ", newSpecials);
  // };

  // const checkState = (uName, uPassword) => {
  //   console.log("Func into: " + uName + ", " + uPassword);

  //   setUsername(uName);
  //   setPassword(uPassword);

  //   users.forEach((user, index) => {
  //     if (user.name === userName && user.password === password) {
  //       console.table("Successful login " + index);
  //       setLogged(true);
  //     } else {
  //       console.table("Login wrong !!" + index);
  //     }
  //   });
  // };

  /*** Login
          setLogin={setLogin}
          loginCheck={checkState}
          setUsername={setUsername}
          setPassword={setPassword}
        />
        <Shadow />***/

  return (
    <>
      {products && (
        <div className={style.container}>
          <ProductsContext.Provider
            value={{
              usersData,
              products,
              currentCategory,
              openLogin,
              login,
              setOpenLogin,
              setCurrentCategory,
              setLogin,
              basketNo,
              setBasketNo,
              closeModal,
              setCloseModal,
            }}
          >
            <Header />
            <Routes>
              <Route path="/" element={<HomeProducts />} />
              <Route path="/product/:id" element={<Product />} />
            </Routes>
          </ProductsContext.Provider>
          <Footer className={style.footerLocation} />
        </div>
      )}
    </>
  );
}

export default App;
