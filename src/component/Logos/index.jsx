import css from "./logoBanner.module.css";
import imageLogo1 from "../../utils/imgs/brand-4.png";
import imageLogo2 from "../../utils/imgs/brand-5.png";
import imageLogo3 from "../../utils/imgs/brand-6.png";
import imageLogo4 from "../../utils/imgs/brand-7.png";
import imageLogo5 from "../../utils/imgs/brand-8.png";

const Logos = () => {
  return (
    <div className={css.logosContainer}>
      <img src={imageLogo1} alt="logo1 images" className={css.grayMixColor} />
      <img src={imageLogo2} alt="logo1 images" className={css.grayMixColor} />
      <img src={imageLogo3} alt="logo1 images" className={css.grayMixColor} />
      <img src={imageLogo4} alt="logo1 images" className={css.grayMixColor} />
      <img src={imageLogo5} alt="logo1 images" className={css.grayMixColor} />
    </div>
  );
};
export default Logos;
