import style from "../styles/home.module.css";
import ShowcaseHero from "../component/ShowcaseHero";
import Navbar from "../component/subComponent/Navbar";

const Home = () => {
  return (
    <div className={style.homeStyleMain}>
      <ShowcaseHero />
      <div className={style.innerContainer}>
        <Navbar />
      </div>
    </div>
  );
};
export default Home;
