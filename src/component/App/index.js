import HomeProducts from "../HomeProducts";
import Product from "../Product";
import { Route, Routes } from "react-router-dom";
import style from "./app.module.css";
import Footer from "../Footer";
import NavbarTop from "../subComponent/NavbarTop";
import UserProvider from "../ContextProviders/UserContext";
import ProductProvider from "../ContextProviders/ProductContext";
import BasketProvider from "../ContextProviders/BasketContext";

function App() {
  return (
    <>
      <div className={style.container}>
        <ProductProvider>
          <BasketProvider>
            <UserProvider>
              <NavbarTop />
              <Routes>
                <Route path="/" element={<HomeProducts />} />
                <Route path="/product/:id" element={<Product />} />
              </Routes>
            </UserProvider>
          </BasketProvider>
        </ProductProvider>
        <Footer className={style.footerLocation} />
      </div>
    </>
  );
}

export default App;
